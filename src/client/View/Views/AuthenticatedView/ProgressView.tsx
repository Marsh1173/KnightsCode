import React from "react";
import { Component } from "react";
import { get_next_id } from "../../../Model/DataAccessors/GetNextId";
import { Lesson, LESSON_1 } from "../../../Model/ClassModel/Lesson";
import { AuthenticatedClientAppInterface } from "../../../Presenter/AuthenticatedPresenter/AuthenticatedClientApp";
import { ProgressCircle } from "../Partials/ProgressCircle";
import { AuthenticatedHeader } from "./Partials/Header";
import { Profile } from "../../../Model/Profile/Profile";
import { ProfileView } from "./ProfileView";
import { Exercise } from "../../../Model/ClassModel/Unit/Exercise";
import { Explanation } from "../../../Model/ClassModel/Unit/Explanation";
import { Project } from "../../../Model/ClassModel/Unit/Project";
import { Topic } from "../../../Model/ClassModel/Topic";

export interface ProgressViewProps {
  presenter: AuthenticatedClientAppInterface;
  profile: Profile;
  if_scroll: boolean;
}

export class ProgressView extends Component<ProgressViewProps, {}> {
  constructor(props: ProgressViewProps) {
    super(props);
  }

  render() {
    let lesson_component: JSX.Element = (
      <LessonComponent
        lesson={LESSON_1}
        profile={this.props.profile}
        presenter={this.props.presenter}
      ></LessonComponent>
    );

    return (
      <div className="ProgressView page">
        <AuthenticatedHeader app_presenter={this.props.presenter} />
        <div className="page-content">
          <div className="empty small-side-bar"></div>
          {lesson_component}
          <ProfileView
            presenter={this.props.presenter}
            profile={this.props.profile}
          ></ProfileView>
        </div>
      </div>
    );
  }

  componentDidMount(): void {
    //"Meander" the unit components
    let incrementor: number = 0;
    let increment_amount: number = 0.9;
    let translate_amount = -80;

    let unit_components = document.getElementsByClassName(
      "UnitComponent"
    ) as HTMLCollectionOf<HTMLDivElement>;
    for (let i: number = 0; i < unit_components.length; i++) {
      let x_value = Math.cos(incrementor) * translate_amount;
      incrementor += increment_amount;
      unit_components.item(i)!.style.transform =
        "translateX(" + x_value + "px)";
    }

    //Scroll to first unfinished section
    if (this.props.if_scroll) {
      let section_components = document.getElementsByClassName(
        "SectionComponent"
      ) as HTMLCollectionOf<HTMLDivElement>;
      for (let i: number = 0; i < section_components.length; i++) {
        if (!section_components.item(i)!.classList.contains("completed")) {
          section_components.item(i)!.scrollIntoView({ block: "center" });
          break;
        }
      }
    }
  }
}

interface LessonComponentProps {
  presenter: AuthenticatedClientAppInterface;
  lesson: Lesson;
  profile: Profile;
}

class LessonComponent extends Component<LessonComponentProps, {}> {
  constructor(props: LessonComponentProps) {
    super(props);
  }

  render() {
    let section_components: JSX.Element[] = this.props.lesson.sections.map(
      (section, section_index) => {
        if (section.type === "Project") {
          return (
            <ProjectComponent
              profile={this.props.profile}
              section={section}
              presenter={this.props.presenter}
              key={get_next_id()}
            />
          );
        } else {
          return (
            <TopicComponent
              profile={this.props.profile}
              lesson_index={0}
              section_index={section_index}
              section={section}
              presenter={this.props.presenter}
              key={get_next_id()}
            />
          );
        }
      }
    );

    return (
      <div className="LessonComponent main-content">{section_components}</div>
    );
  }
}

interface ProjectComponentProps {
  presenter: AuthenticatedClientAppInterface;
  profile: Profile;
  section: Project;
}

class ProjectComponent extends Component<ProjectComponentProps, {}> {
  constructor(props: ProjectComponentProps) {
    super(props);
  }

  render() {
    let if_completed: boolean = false;
    if (
      this.props.profile.completed.find(
        (completed) =>
          completed.lesson === this.props.section.lesson &&
          completed.section === this.props.section.section &&
          completed.unit === 0
      ) !== undefined
    ) {
      if_completed = true;
    }

    return (
      <div
        className={`SectionComponent${if_completed ? " completed" : ""}`}
        key={get_next_id()}
      >
        <div className="section-header">
          <div className="left">
            <p className="title">Project</p>
            <p className="subtitle">{this.props.section.description}</p>
          </div>
        </div>
        <div className="section-content">
          <div className={`ProjectComponent`}>
            <div
              className={`container${if_completed ? " completed" : ""}`}
              onClick={() => {
                this.props.presenter.begin_project(this.props.section);
              }}
            >
              <img
                className="icon"
                src={"images/courses/diagram-project-solid.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface TopicComponentProps {
  presenter: AuthenticatedClientAppInterface;
  profile: Profile;
  section: Topic;
  lesson_index: number;
  section_index: number;
}

class TopicComponent extends Component<TopicComponentProps, {}> {
  constructor(props: TopicComponentProps) {
    super(props);
  }

  render() {
    let total = 0;
    let total_completed = 0;
    let unit_components: JSX.Element[] = this.props.section.units.map(
      (unit, index) => {
        let if_completed: boolean = false;
        total++;
        if (
          this.props.profile.completed.find(
            (completed) =>
              completed.lesson === this.props.lesson_index &&
              completed.section === this.props.section_index &&
              completed.unit === index
          ) !== undefined
        ) {
          total_completed++;
          if_completed = true;
        }
        return (
          <UnitComponent
            profile={this.props.profile}
            unit={unit}
            if_completed={if_completed}
            presenter={this.props.presenter}
            key={get_next_id()}
          />
        );
      }
    );
    let percent = total === 0 ? 0 : (total_completed * 100) / total;
    return (
      <div
        className={`SectionComponent${percent === 100 ? " completed" : ""}`}
        key={get_next_id()}
      >
        <div className="section-header">
          <div className="left">
            <p className="title">{this.props.section.name}</p>
            <p className="subtitle">{this.props.section.subtitle}</p>
          </div>
          <div className="right">
            <ProgressCircle
              percent={percent}
              radius={30}
              thickness={8}
              color={"#fff"}
              component={<p>{Math.round(percent) + "%"}</p>}
            />
          </div>
        </div>
        <div className="section-content">{unit_components}</div>
      </div>
    );
  }
}

interface UnitComponentProps {
  presenter: AuthenticatedClientAppInterface;
  profile: Profile;
  unit: Exercise | Explanation;
  if_completed: boolean;
}

class UnitComponent extends Component<UnitComponentProps, {}> {
  constructor(props: UnitComponentProps) {
    super(props);
  }

  render() {
    let src: string = "";
    let on_click: () => void = () => {};

    if (this.props.unit.type === "Exercise") {
      src = "circle-check-regular.svg";
      on_click = () =>
        this.props.presenter.begin_exercise(this.props.unit as Exercise);
    } else if (this.props.unit.type === "Explanation") {
      src = "file-lines-regular.svg";
      on_click = () =>
        this.props.presenter.begin_explanation(this.props.unit as Explanation);
    }

    return (
      <div className={`UnitComponent`}>
        <div
          className={`container${this.props.if_completed ? " completed" : ""}`}
          onClick={on_click}
        >
          <img className="icon" src={"images/courses/" + src} />
        </div>
      </div>
    );
  }
}

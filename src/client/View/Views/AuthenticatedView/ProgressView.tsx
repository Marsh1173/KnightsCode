import React from "react";
import { Component } from "react";
import { get_next_id } from "../../../Model/DataAccessors/GetNextId";
import { LESSON_1 } from "../../../Model/ClassModel/Lesson";
import { AuthenticatedClientAppInterface } from "../../../Presenter/AuthenticatedPresenter/AuthenticatedClientApp";
import { ProgressCircle } from "../Partials/ProgressCircle";
import { AuthenticatedHeader } from "./Partials/Header";
import { Profile } from "../../../Model/Profile/Profile";
import { ProfileView } from "./ProfileView";

let incrementor: number = 0;
let increment_amount: number = 0.9;
let translate_amount = -80;

export class ProgressView extends Component<
  { presenter: AuthenticatedClientAppInterface; profile: Profile },
  {}
> {
  constructor(props: {
    presenter: AuthenticatedClientAppInterface;
    profile: Profile;
  }) {
    super(props);
  }

  render() {
    incrementor = 0;
    let unit_components: JSX.Element[] = UNITS.map((unit, index) => {
      let course_components: JSX.Element[] = unit.courses.map(
        (course, index) => {
          let x_value = Math.cos(incrementor) * translate_amount;
          incrementor += increment_amount;
          return (
            <div
              className="course"
              key={get_next_id()}
              style={{ transform: "translateX(" + x_value + "px)" }}
            >
              <div className="lesson-number">{index}</div>
              <LessonComponent></LessonComponent>
            </div>
          );
        }
      );
      return (
        <div className="unit" key={get_next_id()}>
          <div className="unit-header">
            <div className="left">
              <p className="title">{unit.name}</p>
              <p className="subtitle">{unit.description}</p>
            </div>
            <div className="right">
              <ProgressCircle
                percent={90}
                radius={40}
                thickness={7}
                color={"#fff"}
                component={
                  <img
                    className="icon"
                    src={"images/courses/" + unit.icon_url}
                  />
                }
              />
            </div>
          </div>
          <div className="unit-content">{course_components}</div>
        </div>
      );
    });

    return (
      <div className="ProgressView page">
        <AuthenticatedHeader app_presenter={this.props.presenter} />
        <div className="page-content">
          <div className="empty small-side-bar"></div>
          <div className="units main-content">{unit_components}</div>
          <ProfileView
            presenter={this.props.presenter}
            profile={this.props.profile}
          ></ProfileView>
        </div>
      </div>
    );
  }
}

interface LessonComponentProps {}

class LessonComponent extends Component<LessonComponentProps, {}> {
  constructor(props: LessonComponentProps) {
    super(props);
  }

  render() {
    return <div className="LessonComponent"></div>;
  }
}

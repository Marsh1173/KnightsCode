import React from "react";
import { Component } from "react";

export interface ProgressCircleProps {
  percent: number;
  radius: number;
  thickness: number;
  color: string;
  component?: JSX.Element;
}

export class ProgressCircle extends Component<
  ProgressCircleProps,
  { percent: number }
> {
  private circle_ref: React.RefObject<HTMLDivElement> = React.createRef();
  constructor(props: ProgressCircleProps) {
    super(props);

    this.state = { percent: this.props.percent };
  }

  render() {
    let size: number = this.props.radius * 2 + this.props.thickness;
    let circumference = Math.PI * this.props.radius * 2;

    return (
      <div className="ProgressCircle" ref={this.circle_ref}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="background"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={this.props.radius}
            strokeWidth={this.props.thickness}
            transform={`rotate(-90 ) translate(-${size} 0)`}
          />
          <circle
            fill="none"
            strokeLinecap="round"
            cx={size / 2}
            cy={size / 2}
            r={this.props.radius}
            stroke={this.props.color}
            strokeWidth={this.props.thickness}
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (circumference / 100) * this.state.percent
            }
            transform={`rotate(-90 ) translate(-${size} 0)`}
          />
          {this.props.percent > 99 && (
            <circle
              className="success"
              cx={size / 2}
              cy={size / 2}
              r={this.props.radius + 1 - this.props.thickness / 2}
              transform={`rotate(-90 ) translate(-${size} 0)`}
            />
          )}
        </svg>
        <div className="content">{this.props.component}</div>
      </div>
    );
  }

  componentDidMount(): void {}

  public set_percent(new_percent: number) {
    if (this.circle_ref.current) {
      this.setState({ percent: new_percent });
    } else {
      this.state = { percent: new_percent };
    }
  }
}

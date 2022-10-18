import React, { Component } from "react";
import { ChangeEvent } from "react";

export interface TextInputProps {
  default_value?: string;
  place_holder?: string;
  max_length?: number;
  type?: string;
}

export class TextInput extends Component<TextInputProps, { value?: string }> {
  constructor(props: TextInputProps) {
    super(props);
    if (this.props.default_value) {
      this.state = { value: this.props.default_value };
    } else {
      this.state = { value: "" };
    }
  }
  render() {
    return (
      <input
        className="text-input-field"
        type={this.props.type ? this.props.type : "text"}
        value={this.state.value}
        onChange={(e) => this.update_input_value(e.target.value)}
        placeholder={this.props.place_holder ? this.props.place_holder : ""}
        maxLength={this.props.max_length ? this.props.max_length : -1}
        autoComplete="off"
      ></input>
    );
  }

  private update_input_value(new_value: string) {
    this.setState({
      value: new_value,
    });
  }

  public get_value(): string {
    if (this.state.value) {
      return this.state.value;
    } else {
      return "";
    }
  }

  public clear_value() {
    this.update_input_value("");
  }

  public set_value(new_value: string) {
    this.update_input_value(new_value);
  }
}

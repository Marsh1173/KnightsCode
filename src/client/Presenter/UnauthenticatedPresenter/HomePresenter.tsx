import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { TextInput } from "../../View/Views/Partials/TextInput";

export const HomePresenter: React.FC<{}> = () => {
  let { path, url } = useRouteMatch();

  const name_input: React.RefObject<TextInput> = React.createRef();
  const email_input: React.RefObject<TextInput> = React.createRef();

  const on_submit_name_and_email = () => {
    if (!name_input.current || !email_input.current) {
      return;
    }

    let name_value = name_input.current.get_value();
    let email_value = email_input.current.get_value();

    if (name_value === "" || email_value === "") {
      alert("Please fill in the fields.");
      return;
    }

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      name_input.current?.clear_value();
      email_input.current?.clear_value();
      if (request.readyState == 4 && request.status == 200) {
        alert("Sent");
      } else if (request.readyState == 4) {
        alert("Error sending request: " + request.response);
      }
    };

    var data_js = {
      access_token: "1psw8r6eboqechyuv1llmu8v",
      subject: "405 Form Fill-out",
      text: "KNIGHT'S CODE REQUEST UPDATES\nName: " + name_value + "\nEmail: " + email_value,
    };

    function toParams(data_js: any) {
      var form_data = [];
      for (var key in data_js) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
      }

      return form_data.join("&");
    }

    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);
  };

  return (
    <div className="HomePresenter main-content">
      <h1>Knight's Code</h1>
      <p>Welcome to Knight's Code!</p>
      <p>
        Knight's Code is a medieval-style game designed to help you learn the basics of programming. The challenges are
        structured to solidify your fundamental coding skills while keeping you engaged!
      </p>
      <p>Help us out by sharing your thoughts with this 1-minute survey!</p>
      <div className="contact-form-container">
        <a
          className="take-survey-button"
          target={"_blank"}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdy4upT1LprF6G46z2fKgZAAPL1XBn6a-OsXnDXuWIGCkcSMQ/viewform"
        >
          Take Survey
        </a>
        <div className="contact-form">
          <p>Want to stay updated? Fill out this form!</p>
          <TextInput ref={name_input} place_holder={"Name"}></TextInput>
          <TextInput ref={email_input} place_holder={"Email"} type={"email"}></TextInput>
          <button className="submit-button" onClick={on_submit_name_and_email}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

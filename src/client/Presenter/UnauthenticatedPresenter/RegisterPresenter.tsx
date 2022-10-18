import React, { useState } from "react";
import { LocalStorageHandler } from "../../Model/DataAccessors/LocalStoragehandler";
import { get_new_profile, LocallyStoredProfiles, Profile, set_current_profile_id } from "../../Model/Profile/Profile";
import { TextInput } from "../../View/Views/Partials/TextInput";

export const RegisterPresenter: React.FC<{}> = () => {
  const name_input: React.RefObject<TextInput> = React.createRef();
  const email_input: React.RefObject<TextInput> = React.createRef();
  const password_input: React.RefObject<TextInput> = React.createRef();
  const confirm_password_input: React.RefObject<TextInput> = React.createRef();

  const [error, set_error] = useState("");

  const on_attempt_register = () => {
    if (!name_input.current || !email_input.current || !password_input.current || !confirm_password_input.current) {
      set_error("Website error");
      return;
    }

    if (
      name_input.current.get_value() === "" ||
      email_input.current.get_value() === "" ||
      password_input.current.get_value() === "" ||
      confirm_password_input.current.get_value() === ""
    ) {
      set_error("All fields must be filled in");
      return;
    }

    if (password_input.current.get_value() !== confirm_password_input.current.get_value()) {
      password_input.current.clear_value();
      confirm_password_input.current.clear_value();
      set_error("Passwords must match");
      return;
    }

    let profiles: LocallyStoredProfiles | undefined =
      LocalStorageHandler.get_local_storage_item<LocallyStoredProfiles>("locally-stored-profiles");

    if (profiles) {
      let profile: Profile | undefined = profiles.profiles.find(
        (profile_data) =>
          profile_data.name === name_input.current!.get_value() &&
          profile_data.password === password_input.current!.get_value()
      );

      if (profile) {
        set_error("Username already taken");
        return;
      }
    }

    let new_profile: Profile = get_new_profile(
      name_input.current.get_value(),
      password_input.current.get_value(),
      email_input.current.get_value()
    );

    if (profiles) {
      profiles.profiles.push(new_profile);
    } else {
      profiles = { profiles: [new_profile] };
    }

    LocalStorageHandler.set_local_storage_item("locally-stored-profiles", profiles);
    LocalStorageHandler.set_local_storage_item("login-username", new_profile.name);
    LocalStorageHandler.set_local_storage_item("login-password", new_profile.password);
    set_current_profile_id(new_profile.id);
    location.hash = "#/app";
  };

  return (
    <div className="RegisterPresenter main-content">
      <div className="content">
        <h1 className="page-title">Register</h1>
        <TextInput ref={name_input} place_holder={"Name"}></TextInput>
        <TextInput ref={email_input} place_holder={"Email"} type={"email"}></TextInput>
        <TextInput ref={password_input} place_holder={"Password"} type={"password"}></TextInput>
        <TextInput ref={confirm_password_input} place_holder={"Confirm password"} type={"password"}></TextInput>
        <p className="error">{error}</p>
        <button className="register-button" onClick={on_attempt_register}>
          Register
        </button>
      </div>
    </div>
  );
};

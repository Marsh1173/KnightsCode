import React, { useEffect, useState } from "react";
import { LocallyStoredProfiles, Profile, set_current_profile_id } from "../../Model/Profile/Profile";
import { LocalStorageHandler } from "../../Model/DataAccessors/LocalStoragehandler";
import { TextInput } from "../../View/Views/Partials/TextInput";

export const SignInPresenter: React.FC<{}> = () => {
  const name_input: React.RefObject<TextInput> = React.createRef();
  const password_input: React.RefObject<TextInput> = React.createRef();

  const [error, set_error] = useState("");

  useEffect(() => {
    let password: string | undefined = LocalStorageHandler.get_local_storage_item<string>("login-password");
    let username: string | undefined = LocalStorageHandler.get_local_storage_item<string>("login-username");

    if (password && username && name_input.current && password_input.current) {
      name_input.current.set_value(username);
      password_input.current.set_value(password);
    }
  }, []);

  const bad_attempt = () => {
    set_error("Incorrect username or password");
  };

  const on_attempt_sign_in = () => {
    if (!name_input.current || !password_input.current) {
      set_error("Website error");
      return;
    }

    let profiles: LocallyStoredProfiles | undefined =
      LocalStorageHandler.get_local_storage_item<LocallyStoredProfiles>("locally-stored-profiles");

    if (!profiles) {
      bad_attempt();
      return;
    }
    let profile: Profile | undefined = profiles.profiles.find(
      (profile_data) =>
        profile_data.name === name_input.current!.get_value() &&
        profile_data.password === password_input.current!.get_value()
    );
    if (!profile) {
      bad_attempt();
      return;
    }

    LocalStorageHandler.set_local_storage_item("login-username", profile.name);
    LocalStorageHandler.set_local_storage_item("login-password", profile.password);

    set_current_profile_id(profile.id);
    location.hash = "#/app";
  };

  return (
    <div className="SignInPresenter main-content">
      <div className="content">
        <h1 className="page-title">Sign in</h1>
        <TextInput ref={name_input} place_holder={"Name"}></TextInput>
        <TextInput ref={password_input} place_holder={"Password"} type={"password"}></TextInput>
        <p className="error">{error}</p>
        <button className="sign-in-button" onClick={on_attempt_sign_in}>
          Sign in
        </button>
      </div>
    </div>
  );
};

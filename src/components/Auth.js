import { useEffect, useState } from "react";
import { Button } from "./Buttons";
import { signUp } from "../api";

function Auth() {
  const [loggingIn, setLoggingIn] = useState(true);
  const [formValues, setFormValues] = useState({});

  const editForm = (target, field) => {
    const values = { ...formValues };
    values[field] = target.value;
    setFormValues(values);
  };

  return (
    <div>
      <h3>{loggingIn ? "Log in" : "Sign up"}</h3>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <Button
          className="btn btn-outline-primary btn-sm"
          text="Log in"
          callback={() => {
            setLoggingIn(true);
          }}
        />
        <Button
          className="btn btn-outline-primary btn-sm"
          text="Sign up"
          callback={() => {
            setLoggingIn(false);
          }}
        />
      </div>

      <div className="mt-3">
        {!loggingIn && (
          <input
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            onChange={({ target }) => editForm(target, "name")}
          />
        )}
        <input
          className="form-control"
          placeholder="Email"
          aria-label="Email"
          type="email"
          onChange={({ target }) => editForm(target, "email")}
        />
        <input
          className="form-control"
          placeholder="Password"
          aria-label="Password"
          type="password"
          onChange={({ target }) => editForm(target, "password")}
        />
      </div>
      <Button
        text={loggingIn ? "Log in" : "Sign up"}
        className="btn btn-primary ml-0"
        callback={
          loggingIn
            ? () => { }
            : () => {
              signUp(formValues);
            }
        }
      />
    </div>
  );
}

export default Auth;

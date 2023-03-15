import React from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const id = React.useId();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [formMessage, setFormMessage] = React.useState("");
  const usernameId = `username-${id}`;
  const passwordId = `password-${id}`;
  const confirmPasswordId = `confirmPassword-${id}`;
  const fullnameId = `fullname-${id}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("");
    if (password !== confirmPassword) {
      return setFormMessage("Passwords must match");
    }
    console.log({ fullname, username, password, confirmPassword });
  };

  return (
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        {formMessage.length > 0 ? <div>{formMessage}</div> : null}
        <div>
          <label htmlFor={fullnameId}>Full name: </label>
          <input
            type="text"
            id={fullnameId}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor={usernameId}>Username:</label>
          <input
            type="text"
            id={usernameId}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor={passwordId}>Password:</label>
          <input
            type="password"
            id={passwordId}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor={confirmPassword}>Confirm Password:</label>
          <input
            type="password"
            id={confirmPasswordId}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign up</button>
        <div>
          Already have an account? <Link to="/">Log in</Link>
        </div>
      </form>
    </>
  );
}
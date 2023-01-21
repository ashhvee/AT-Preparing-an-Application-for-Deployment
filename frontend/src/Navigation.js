import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { CurrentUser } from "./contexts/CurrentUser";

function Navigation() {
  const history = useHistory();

  const { currentUser } = useContext(CurrentUser);

  let loginActions = (
    <>
      <a href="#" onClick={() => history.push("/sign-up")}>
        Sign Up
      </a>

      <a href="#" onClick={() => history.push("/login")}>
        Login
      </a>
    </>
  );

  if (currentUser) {
    loginActions = (
      <li style={{ float: "right" }}>
        Logged in as {currentUser.firstName} {currentUser.lastName}
      </li>
    );
  }

  return (
    <details>
      <summary></summary>
      <nav className="menu">
        <a class="active" href="#" onClick={() => history.push("/")}>
          Home
        </a>

        <a href="#" onClick={() => history.push("/places")}>
          Places
        </a>

        <a href="#" onClick={() => history.push("/places/new")}>
          Add Place
        </a>

        {loginActions}
      </nav>
    </details>
  );
}

export default Navigation;

import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { CurrentUser } from "./contexts/CurrentUser";

function Navigation() {
  const history = useHistory();

  const { currentUser } = useContext(CurrentUser);

  let loginActions = (
    <>
      <li style={{ float: "right" }}>
        <a href="#" onClick={() => history.push("/sign-up")}>
          Sign Up
        </a>
      </li>
      <li style={{ float: "right" }}>
        <a href="#" onClick={() => history.push("/login")}>
          Login
        </a>
      </li>
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
      <nav>
        <ul>
          <li>
            <a class="active" href="#" onClick={() => history.push("/")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => history.push("/places")}>
              Places
            </a>
          </li>
          <li>
            <a href="#" onClick={() => history.push("/places/new")}>
              Add Place
            </a>
          </li>
          {loginActions}
        </ul>
      </nav>
    </details>
  );
}

export default Navigation;

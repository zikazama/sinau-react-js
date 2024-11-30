import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Nav = () => {
  const { user } = useContext(AuthContext);

  return (
    // use navlink react-router
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1rem",
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        fontSize: "1.5rem",
        backgroundColor: "lightgray",
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      {user ? (
        <NavLink to="/logout" end>
          Logout{" "}
        </NavLink>
      ) : (
        <NavLink to="/login" end>
          Login
        </NavLink>
      )}
      <NavLink to="/" end>
        About
      </NavLink>
      {user && (
        <NavLink to="/profile" end>
          Profile
        </NavLink>
      )}
      <NavLink to="/profile/fauzi" end>
        Profile With Username
      </NavLink>
    </nav>
  );
};

export default Nav;

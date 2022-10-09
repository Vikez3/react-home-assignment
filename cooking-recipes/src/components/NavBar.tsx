import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="navbar p-2 bg-info">
      <Link className="logo-text mx-3" to="/">
        <p>Cooking Recipes</p>
      </Link>
      <Link to={"/addrecipe"} className="btn btn-primary ">
        Add new recipe
      </Link>
    </div>
  );
}

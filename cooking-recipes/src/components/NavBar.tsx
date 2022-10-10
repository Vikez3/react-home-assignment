import { Link } from "react-router-dom";

export default function NavBar() {
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

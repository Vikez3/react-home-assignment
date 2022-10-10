import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h3>You followed wrong path or recipe is deleted</h3>
      <Link to={"/"} className="btn btn-info mt-3">
        Go back to home page
      </Link>
    </div>
  );
}

export default NotFound;

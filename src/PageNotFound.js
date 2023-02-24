import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <>
      <h1>
        Oops! Page not found!! <Link to="/">Go Back!</Link>
      </h1>
    </>
  );
}

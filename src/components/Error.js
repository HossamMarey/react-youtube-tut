import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="not-found">
      <h1>page not found</h1>
      <Link to="/">Go Home </Link>
    </div>
  );
};

export default Error;

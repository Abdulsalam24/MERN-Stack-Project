import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="align-center">
        <h1>Help desk</h1>
        <ul>
          <Link to="/login">
            <li className="text-red">Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </ul>
      </header>
    </>
  );
}

export default Home;

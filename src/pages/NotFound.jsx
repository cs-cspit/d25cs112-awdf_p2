import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound(){

    return(

        <div className="notfound">

            <h1>404</h1>

            <h2>Page Not Found</h2>

            <p>

                The page you are looking for does not exist.

            </p>

            <Link to="/">

                Go Back Home

            </Link>

        </div>

    )

}

export default NotFound;
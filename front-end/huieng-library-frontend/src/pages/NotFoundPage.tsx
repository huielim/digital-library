import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex-col content-center justify-center  w-screen h-screen">
      <div className="flex-col justify-center">
        <h1 className="font-roboto-bold flex justify-center">Page Not Found</h1>
        <p className="font-roboto-medium-italic flex justify-center pt-2">
          Please leave this page
        </p>
      </div>

      <div className="flex justify-center pt-8">
        <Link className=" px-3 py-3 rounded-xl pink-button" to={"/"}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

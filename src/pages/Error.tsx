import { Link } from "react-router-dom";
import errorImage from "../assets/404.svg";

export default function ErrorPage() {
  return (
    <main className="min-h-screen text-center">
      <div className="md:flex md:flex-col justify-between items-center ">
        <img src={errorImage} alt="404" className="md:w-1/2 animate-bounce" />
        <div className="flex flex-col gap-4 text-copy-primary px-2">
          <h1 className="text-3xl font-black">Opps! Page not found</h1>
          <p className="text-2xl mb-4">
            It looks like the page you're looking for isn't here
          </p>
          <div>
            <Link to="/dashboard" className="text-xl font-bold btn liquid">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

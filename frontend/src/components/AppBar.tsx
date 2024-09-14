import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const AppBar = ({
  authorName = "Anonymous",
}: {
  authorName?: string;
}) => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"}>
        <div className="flex flex-col justify-center">Medium</div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            New Post
          </button>
        </Link>
        <Avatar authorName={authorName} size={"big"} />
      </div>
    </div>
  );
};

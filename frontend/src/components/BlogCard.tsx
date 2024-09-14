import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Circle } from "./Circle";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar authorName={authorName} />
          <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
            {authorName}
          </div>
          <div className="flex flex-col justify-center pl-2 text-sm">
            <Circle />
          </div>
          <div className="font-thin pl-2 text-slate-500 flex flex-col justify-center">
            {publishedDate}
          </div>
        </div>

        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-xl font-md">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-400 font-thin text-sm pt-4">{`${Math.ceil(
          content.length / 100
        )} minutes read`}</div>
      </div>
    </Link>
  );
};

import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar } from "./Avatar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar authorName={blog.author.name}/>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on 12 august 2024</div>
            <div className="pt-2">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600">Author</div>
            <div className="flex">
              <div className="pr-2 flex flex-col justify-center">
                <Avatar
                  size="big"
                  authorName={blog.author.name || "Anonymous"}
                />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">Author Details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              title={blog.title}
              publishedDate="12 august"
              content={blog.content}
              authorName={blog.author.name || "Anonymous"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

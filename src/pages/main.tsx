import Blog from "./blog";

const MainPage = (props: any) => {
  const blog_lists: { id: number; title: string; author: string }[] = [
    {
      id: 1,
      title: "First Blog",
      author: "Admin",
    },
    {
      id: 2,
      title: "Second Blog",
      author: "Haruka",
    },
    {
      id: 3,
      title: "Third Blog",
      author: "Haruka",
    },
    {
      id: 4,
      title: "Fourth Blog",
      author: "Admin",
    },
  ];
  return (
    <div>
      <h4 className="display-4">{props.title}</h4>
      <h1 className="font-weight-normal">&gt;Blog Components</h1>
      <hr />
      <Blog blogs={blog_lists} title="All blog's" />
      <Blog
        blogs={blog_lists.filter((blog: any) => blog.author === "Admin")}
        title="Admin blog's"
      />
      <Blog
        blogs={blog_lists.filter((blog: any) => blog.author === "Haruka")}
        title="Haruka blog's"
      />
    </div>
  );
};

export default MainPage;

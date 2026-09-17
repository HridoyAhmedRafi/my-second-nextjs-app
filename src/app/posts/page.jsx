import Post from "../components/Post";

const PostPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const { status, message, data } = posts;

  return (
    <div>
      <h1>Post : {posts.length}</h1>
      <div className="grid grid-cols-3 gap-3">
        {posts.map((post) => (
          <Post Post={post} key={post.id}></Post>
        ))}
      </div>
    </div>
  );
};

export default PostPage;

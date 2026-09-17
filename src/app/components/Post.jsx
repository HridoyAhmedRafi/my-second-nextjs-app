const Post = ({ Post }) => {
  return (
    <div className="card bg-primary text-primary-content ">
      <div className="card-body">
        <h2 className="card-title text-[18px]">{Post.title}</h2>
        <p>{Post.body}</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Post;

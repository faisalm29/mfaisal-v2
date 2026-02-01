import { allBlogs } from "content-collections";

const PostPage = () => {
  const post = allBlogs[0];

  return (
    <div>
      <h1>This is a Post Page</h1>
      <div>
        <ul>
          {allBlogs.map((post) => (
            <li key={post._meta.path}>
              <a href={`/${post._meta.path}`}>
                <h2>{post.title}</h2>
                <div>
                  <time>{post.publishedAt}</time>
                  <p>{post.readTime}</p>
                  <p>{post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostPage;

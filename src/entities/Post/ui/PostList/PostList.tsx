import { postAPI } from "../../api/post.api";

export const PostList = () => {
  const { data: posts, error, isFetching } = postAPI.useFetchAllPostsQuery(5);

  if (isFetching) {
    return <div>Is Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (posts && posts?.length > 0) {
    return (
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  } else {
    return <div>No content</div>;
  }
};

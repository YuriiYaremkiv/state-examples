import { userAPI } from "../services/userService";
import { postAPI } from "../services/postService";

export const App = () => {
  const { data, error, isLoading } = userAPI.useFetchAllUsersQuery("");
  const { data: posts } = postAPI.useFetchAllPostsQuery(5);

  console.log("posts", posts);

  if (isLoading) return <div>Is Loading...</div>;

  if (error && !isLoading) return <div>Error</div>;

  if (data?.length > 0 && !isLoading) {
    return (
      <ul>
        {posts?.map((post: any) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return <></>;
};

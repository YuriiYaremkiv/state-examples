import { userAPI } from "../services/userService";

export const App = () => {
  const { data, error, isLoading } = userAPI.useFetchAllUsersQuery("");

  console.log("data", data);
  if (isLoading) return <div>Is Loading...</div>;

  if (error && !isLoading) return <div>Error</div>;

  if (data?.length > 0 && !isLoading) {
    return (
      <ul>
        {data?.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  return <></>;
};

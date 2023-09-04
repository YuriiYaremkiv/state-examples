import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:500" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: (limit: number = 5) => ({
        url: "/posts",
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ["Post"],
    }),
    cratePost: build.mutation({
      query: (post: any) => ({
        url: "/post",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: build.mutation({
      query: (post: any) => ({
        url: `/post/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: build.mutation({
      query: (post) => ({
        url: `/post/${post.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

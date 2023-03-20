import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from '../axiosBaseQuery';

const GITHUB_API_KEY = "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";

export const repositoriesApiSlice = createApi({
  reducerPath: 'githubApi',
  baseQuery: axiosBaseQuery({
    transformResponse: (response) => response,
    prepareHeaders(headers) {
      return {
        'Authorization': `Bearer ${GITHUB_API_KEY}`,
        ...headers
      }
    },
  }),
  endpoints: (builder) => ({
    getRepositories: builder.query({
      query: ({query = 'react', per_page = 3, page = 1}) => `/search/repositories?q=${query}&per_page=${per_page}&page=${page}`,
    }),
  }),
});

export const { useGetRepositoriesQuery } = repositoriesApiSlice;

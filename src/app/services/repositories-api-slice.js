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

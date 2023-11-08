import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:9000',
   }),
   tagTypes: ['Videos', 'Video', 'RelatedVideo'],
   endpoints: ({ query, mutation }) => ({
      getVideos: query({
         query: () => '/videos',
         keepUnusedDataFor: 600,
         providesTags: ['Videos'],
      }),
      getVideo: query({
         query: (id) => `/videos/${id}`,
         providesTags: (result, error, arg) => [{ type: 'Video', id: arg }],
      }),
      getRelatedVideos: query({
         query: ({ id, title }) => {
            let queryString;
            if (title) {
               queryString =
                  title
                     .split(' ')
                     .map((tag) => `title_like=${tag}`)
                     .join('&') + `&_limit=4&id_ne=${id}`;
            } else queryString = `_limit=0`;
            return `/videos?${queryString}`;
         },
         providesTags: (result, error, arg) => [
            { type: 'RelatedVideo', id: arg.id },
         ],
      }),
      postVideo: mutation({
         query: (data) => ({
            url: '/videos',
            method: 'POST',
            body: data,
         }),
         invalidatesTags: ['Videos'],
      }),
      deleteVideo: mutation({
         query: (id) => ({
            url: `/videos/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Videos'],
      }),
      updateVideo: mutation({
         query: ({ id, ...data }) => ({
            url: `/videos/${id}`,
            method: 'PATCH',
            body: data,
         }),
         invalidatesTags: (result, error, arg) => [
            'Videos',
            { type: 'Video', id: arg.id },
            { type: 'RelatedVideo', id: arg.id },
         ],
      }),
   }),
});

export default apiSlice;
export const {
   useGetVideosQuery,
   useGetVideoQuery,
   useGetRelatedVideosQuery,
   usePostVideoMutation,
   useDeleteVideoMutation,
   useUpdateVideoMutation,
} = apiSlice;

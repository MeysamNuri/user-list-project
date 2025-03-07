import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67c82dad0acf98d070854ab8.mockapi.io/api/v1' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    //چون سرویس علاقه مندی ها برای حذف و اضافه خطا میداد و یا من نمیدونستم چی باید بفرستم این قسمت کامنت شدو فرانتی مدیریت شد
    // getFavorites: builder.query({
    //   query: () => '/faivorites',
    // }),
    // addFavorite: builder.mutation({
    //   query: (favorite) => ({
    //     url: '/faivorites',
    //     method: 'POST',
    //     body: favorite,
    //   }),
    // }),
    // removeFavorite: builder.mutation({
    //   query: (id) => ({
    //     url: `/faivorites/${id}`,
    //     method: 'DELETE',
    //   }),
    // }),
  }),
});

export const { useGetUsersQuery,
  //  useGetFavoritesQuery,
  //   useAddFavoriteMutation,
  //    useRemoveFavoriteMutation 
    } = usersApi;

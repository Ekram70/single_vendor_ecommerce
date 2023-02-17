import { apiSlice } from '../../app/api/apiSlice';

// eslint-disable-next-line import/prefer-default-export
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials }
      })
    })
  })
});

export const { useLoginMutation } = authApiSlice;

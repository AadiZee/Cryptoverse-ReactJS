import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": process.env.REACT_APP_CRYPTO_NEWS_API_SERVER_SDK,
  "x-rapidapi-host": process.env.REACT_APP_CRYPTO_NEWS_API_SERVER_HOST,
  "x-rapidapi-key": process.env.REACT_APP_CRYPTO_NEWS_API_SERVER_KEY,
};

const baseUrl = process.env.REACT_APP_CRYPTO_NEWS_API_SERVER;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// var options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'x-bingapis-sdk': 'true',
//       'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//       'x-rapidapi-key': '83d556661bmsh1a76aff9d9d0612p1b52c8jsn0924343aee19'
//     }
//   };

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { Post,  } from "../../models/models"

export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholder/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
        
    }),
    endpoints: build => ({
        getPosts: build.query<Post[], string>({
            query: (page) => ({
                url: `posts?_limit=10&_page=${page}`
            }),
        })
    })
})

export const {useGetPostsQuery} = jsonPlaceholderApi
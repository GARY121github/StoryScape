import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        allPosts: (state, action) => {
            state.posts = action.payload
        },
        editPost: (state, action) => {
            const { $id, title, content, status , featuredImage } = action.payload
            const post = state.posts.find(post => post.$id === $id)
            if (post) {
                post.title = title
                post.content = content
                post.status = status
                post.featuredImage = featuredImage
            }
        },
        deletePost: (state, action) => {
            const { $id } = action.payload
            state.posts = state.posts.filter(post => post.$id !== $id)
        },
        addPost: (state, action) => {
            const {title, $id, content, featuredImage, status, userId} = action.payload;
            state.posts.push({
                title,
                $id,
                content,
                featuredImage,
                status,
                userId
            })
        },
    },
})

export const { allPosts, editPost, deletePost, addPost } = postSlice.actions;

export default postSlice.reducer;
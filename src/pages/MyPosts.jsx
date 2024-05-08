import React from 'react'
import { Container, PostCard } from '../components'

import { useSelector } from 'react-redux';

function MyPosts() {

    const user = useSelector(state => state.auth.userData);

    const allPosts = useSelector(state => state.posts.posts);

    const posts = allPosts.filter((post) => post.userId === user?.$id);

    return (
        <div className='w-full py-8'>
            <Container>
                {
                    posts.length === 0 ? (
                        <>
                        <h1 className='text-2xl font-bold text-center'>You have not posted anything yet</h1>
                        </>
                    ) : (
                        <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                    )
                }
            </Container>
        </div>
    )
}

export default MyPosts
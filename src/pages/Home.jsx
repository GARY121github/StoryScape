import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PostCard, Container } from '../components';

function Home() {

    const posts = useSelector((state) => state.posts.posts);

    return (
        <>
            {posts.length === 0 ? (
                <div className="w-full py-8 mt-4 text-center">
                    <Container>
                        <div className="flex flex-wrap">
                            <div className="p-2 w-full">
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                    Currently there are no posts available
                                </h1>
                            </div>
                        </div>
                    </Container>
                </div>
            ) : (
                <div className='w-full py-8'>
                    <Container>
                        <div className='flex flex-wrap'>
                            {posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            )}
        </>
    );
}

export default Home;
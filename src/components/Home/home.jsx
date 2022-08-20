import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../../features/counter/posts/postsSlice';
import { PostCard } from '../PostCard/postcard';

function Home() {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    useEffect(()=> {
        dispatch(fetchPosts());
    }, [dispatch])
    return (
        <div className="container">
            {
                posts.map((post)=>{
                    return <PostCard 
                        title={post.data.title}
                        author={post.data.author}
                        upvotes={post.data.ups-post.data.downs}
                        commentsAmount={post.data.num_comments}
                    />
                })
            }
        </div>
    )

}

export default Home;
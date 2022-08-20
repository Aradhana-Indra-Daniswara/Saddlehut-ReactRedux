import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../../features/counter/posts/postsSlice';
import { PostCard } from '../PostCard/postcard';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function Home() {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])
    return (
        <div className="container" css={style.container}>
            {
                posts.map((post) => {
                    const title = post.data.title.slice(0, 50);
                    return <PostCard
                        title={title + '...'}
                        author={post.data.author}
                        upvotes={post.data.ups - post.data.downs}
                        commentsAmount={post.data.num_comments}
                    />
                })
            }
        </div>
    )

}

const style = {
    container: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.4rem;
    `
}
export default Home;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../../features/posts/postsSlice';
import { PostCard } from '../PostCard/Postcard';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { CreateButton } from '../Button/ButtonStyles';
import plus_icon from '../../assets/img/plus_icon.svg'

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts)
  useEffect(() => {
    if(!posts.length){
      dispatch(fetchPosts());
    }
  }, [dispatch, posts])
  return (
    <div className="container" css={style.container}>
      <CreateButton css={style.createbutton}>
        <img src={plus_icon} alt="" />
        <p>Create Post</p>
      </CreateButton>
      {
        posts.map((post) => {
          const title = post.data.title.slice(0, 50);
          let preview = null;
          if (post.data.preview) {
            const previewImage = post.data.preview.images[0].source.url;
            preview = previewImage.replaceAll('&amp;', '&')
          }

          return <PostCard
            thumbnail={preview}
            title={title + '...'}
            author={post.data.author}
            upvotes={post.data.ups - post.data.downs}
            commentsAmount={post.data.num_comments}
            id={post.data.id}
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
        gap: 2.4rem;
        width: min-content;
        margin: auto auto;
    `,
  createbutton: css`
        width: max-content;
    `
}
export default Home;
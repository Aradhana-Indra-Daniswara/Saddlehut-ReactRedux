import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectAllPosts } from '../../features/posts/postsSlice';
import { fetchPosts } from '../../features/posts/postsSlice';
import upvote_icon from "../../assets/img/upvote.svg";
import downvote_icon from "../../assets/img/downvote.svg";
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import MarkdownView from 'react-showdown';
function Post() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const selectedPost = useSelector(state => {
    const filterById = state.posts.posts.find(post => {
      if (post.data.id === postId) {
        return post.data
      }
    })
    return filterById.data;
  })
  const [upvotes, setUpvotes] = useState(selectedPost.ups-selectedPost.downs || 0);
  const upvote = () => {
    setUpvotes((prev) => prev + 1);
  }
  const downvote = () => {
    setUpvotes((prev) => prev - 1);
  }
  let preview = null;
  if (selectedPost.preview) {
    const previewImage = selectedPost.preview.images[0].source.url;
    preview = previewImage.replaceAll('&amp;', '&')
  }

  useEffect(() => {
    if (!selectedPost.length) {
      dispatch(fetchPosts());
    }
  }, [dispatch])

  return (
    <div className="container" css={style.container}>
      <div className="post" css={style.post}>
        <div className="upvotes" css={style.upvotes}>
          <img src={upvote_icon} alt="" onClick={upvote} />
          <p>{upvotes}</p>
          <img src={downvote_icon} alt="" onClick={downvote} />
        </div>
        <div className="body" css={style.body}>
          <h1>{selectedPost.title}</h1>
          <img src={preview} alt="" />
          <MarkdownView markdown={selectedPost.selftext} css={style.markdown}/>

        </div>
      </div>
      <div className="comments">

      </div>
    </div>
  )
}

const style = {
  container: css`
    width: 80rem;
    margin: auto;
  `,
  upvotes: css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    img{
      height: 2.4rem;
      cursor: pointer;
    }
  `,
  post: css`
    display: flex;
    width: 100%;
    gap: 1.6rem;
    box-shadow: 2px 2px 10px #E6E6E6;
    padding: 1.6rem;
    border-radius: 5px;
  `,
  body: css`
    width: 100%;
    img{
      width: 100%;
    }
    h1{
      margin-bottom: 1.6rem;
      font-size: 2.4rem;
    }
  `,
  markdown: css`
    *{
      margin: 1.6rem 0;
    }
    li{
      font-size: 1.6rem;
    }
  `
}
export default Post;
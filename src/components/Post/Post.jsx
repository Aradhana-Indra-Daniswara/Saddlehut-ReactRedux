import { useDispatch, useSelector } from 'react-redux';
import { allPostsLoaded } from '../../features/posts/postsSlice';
import { useParams } from 'react-router-dom'
import { fetchPosts } from '../../features/posts/postsSlice';
import upvote_icon from "../../assets/img/upvote.svg";
import downvote_icon from "../../assets/img/downvote.svg";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import MarkdownView from 'react-showdown';
function Post({ posts }) {
  const { postId } = useParams();
  const dispatch = useDispatch();
  let postIsLoaded = useSelector(allPostsLoaded);
  if (!postIsLoaded) {
    dispatch(fetchPosts());
    return (
      <h1>Loading...</h1>
    )
  }
  // Find Post
  console.log(posts);
  let preview = null;
  const selectedPost = posts.find(post => post.data.id === postId).data
  if (selectedPost.preview !== undefined) {
    const previewImage = selectedPost.preview.images[0].source.url;
    preview = previewImage.replaceAll('&amp;', '&')
  }

  return (
    <div className="container" css={style.container}>
      <div className="post" css={style.post}>
        <div className="upvotes" css={style.upvotes}>
          <img src={upvote_icon} alt="" />
          <p>{selectedPost.ups - selectedPost.downs}</p>
          <img src={downvote_icon} alt="" />
        </div>
        <div className="body" css={style.body}>
          <div className="header">
            <h1>{selectedPost.title}</h1>
            <p>{selectedPost.author}</p>
          </div>
          <img src={preview} alt="" />
          <MarkdownView markdown={selectedPost.selftext} css={style.markdown} />
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
    .header{
      margin-bottom: 1.6rem;
      p{
        color: #4F87CE;
      }
    }
    h1{
      font-size: 2.4rem;
    }
  `,
  markdown: css`
    *{
      margin: 1.6rem 0;
      line-height: 1.5;
    }
    li{
      font-size: 1.6rem;
    }
  `
}
export default Post;
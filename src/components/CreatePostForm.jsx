import { useState } from "react";
import { useDispatch } from "react-redux";
import ShortUniqueId from "short-unique-id";
import { addPost } from '../features/posts/postsSlice';
import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
function CreatePostform() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const author = "AradhanaIndraDaniswara";
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState();
  const [description, setDescription] = useState('');
  const uid = new ShortUniqueId({ length: 6 });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      data: {
        id: uid(),
        author,
        title,
        selftext: description,
        ups: 0,
        downs: 0
      }
    }
    if (thumbnail) {
      newPost.preview = {
        images: [
          {
            source: {
              url: thumbnail
            }
          }
        ]
      }
    }
    dispatch(addPost(newPost));
    navigate('/')
  }

  return (
    <div className="container" css={style.container}>
      <h1 className="title">Create Post</h1>
      <div className="input">
        <p>Title</p>
        <input type="text" name="" id="" onChange={(e) => { setTitle(e.target.value) }} />
      </div>

      <div className="input">
        <p>Thumbnail Link (URL)</p>
        <input type="text" name="" id="" onChange={(e) => { setThumbnail(e.target.value) }} />
      </div>

      <div className="input">
        <p>Description</p>
        <input type="text" name="" id="" onChange={(e) => { setDescription(e.target.value) }} />
      </div>

      <button onClick={handleSubmit}>
        Add Post
      </button>
    </div>
  )
}
const style = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80rem;
    margin: auto;
    .title{
      font-size: 3.2rem;
      margin-bottom: 1.8rem;

    }
    .input{
      margin-bottom: 1.6rem;
    }
    input{
      width: 50rem;
      padding: 0.8rem 1.6rem;
    }

    button{
      border: 0;
      padding: 1.2rem 2.4rem;
      border-radius: 4px;
      background-color: #4F87CE;
      color: #FCFCFC;
    }
  `,
}
export default CreatePostform;
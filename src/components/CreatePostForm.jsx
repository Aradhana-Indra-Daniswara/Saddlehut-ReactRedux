import { useState } from "react";
import { useDispatch } from "react-redux";
import ShortUniqueId from "short-unique-id";
import { addPost } from '../features/posts/postsSlice';
function CreatePostform() {
  const author = "AradhanaIndraDaniswara";
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState();
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const uid = new ShortUniqueId({ length: 6 });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      data: {
        id: uid(),
        author,
        title,
        preview: {
          images: [
            {
              source: {
                url: thumbnail
              }
            }
          ]
        },
        selftext: description,
        ups: 0,
        downs: 0
      }
    }
    console.log(newPost)
    dispatch(addPost(newPost));
  }

  return (
    <div className="container">
      <h1>Create Post</h1>
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

export default CreatePostform;
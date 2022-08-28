import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, fetchPosts, allPostsLoaded } from './features/posts/postsSlice';

import './app.css'
import CreatePostform from './components/CreatePostForm';
function App() {
  const dispatch = useDispatch();
  let postIsLoaded = useSelector(allPostsLoaded);
  if (!postIsLoaded) {
    dispatch(fetchPosts());
  }
  const posts = useSelector(selectAllPosts)
  
  const filterPosts = (searchTerm) => {
    if(!searchTerm || searchTerm.length === 0){
      return posts;
    }
    return posts.filter(post => post.data.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  return (
    <div className="App">
      <Navbar />
      {postIsLoaded ? (
        <Routes>
          <Route path="/" element={<Home posts={posts} filterPosts={filterPosts} />} />
          <Route path="/post/:postId" element={<Post posts={posts} />} />
          <Route path="/createPost" element={<CreatePostform />} />
        </Routes>
      ) : <h1>Loading...</h1>}
    </div>
  );
}

export default App;

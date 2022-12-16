import PostsList from "./redux/feature/posts/PostsList";
import AddForm from "./redux/feature/posts/AddForm";
import SinglePostPage from "./redux/feature/posts/SinglePostPage";
import Layout from "./components/Layout";
import About from "./components/About";
import EditFormPost from "./redux/feature/posts/EditFormPost";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="about" element={<About/>}/>
      <Route index element={<PostsList/>}/>
      <Route path="post" >
          <Route index element={<AddForm/>}/>
          <Route path=":postId" element={<SinglePostPage/>}/>
          <Route path="edit/:postId" element={<EditFormPost/>}/>
      </Route>
      </Route>
    </Routes>
  );
}

export default App;

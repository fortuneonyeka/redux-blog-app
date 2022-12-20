import PostsList from "./redux/feature/posts/PostsList";
import AddForm from "./redux/feature/posts/AddForm";
import SinglePostPage from "./redux/feature/posts/SinglePostPage";
import About from "./components/About";
import EditFormPost from "./redux/feature/posts/EditFormPost";
import UsersList from "./redux/feature/users/UsersList";
import UserPage from "./redux/feature/users/UserPage";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditFormPost />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

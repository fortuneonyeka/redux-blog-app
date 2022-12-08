import PostsList from "./redux/feature/posts/PostsList";
import AddForm from "./redux/feature/posts/AddForm";

function App() {
  return (
    <div className="App">
      <AddForm />
      <PostsList />
    </div>
  );
}

export default App;

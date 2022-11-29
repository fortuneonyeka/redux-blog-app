import PostsList from "./redux/feature/posts/PostsList";
import AddForm from "./redux/feature/posts/AddForm";

function App() {
  return (
    <div className="App">
      <div id="postformandList">
        <AddForm />
        <PostsList />
      </div>
    </div>
  );
}

export default App;

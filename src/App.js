
import PostsList from "./components/PostsList";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div className="App">
      <div id="postformandList">
      <AddForm/>
        <PostsList/>
      </div>
        
    </div>
  );
}

export default App;

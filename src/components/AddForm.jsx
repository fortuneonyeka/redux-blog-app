import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../redux/feature/posts/postsSlice";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [contentErr, setContentErr] = useState("");
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const onSavePost = () => {
    let valid = true
    if (title === "" || title.length < 5) {
      setTitleErr(`title cannot be blank or less than five (${5}) characters`);
      valid = false;
     
    }

    if (content === "" || content.length < 10) {
      setContentErr(
        `Description cannot be blank or less than ten (${10}) characters`
      );
      valid = false;
     
    }


    if (valid) {
      dispatch(addPosts(title, content))
         setTitle("")
         setContent("")
         setContentErr("")
         setTitleErr("")
    }
  };

  const errStyle = {
    color: "red",
    fontSize: "15px",
    paddingBottom:"20px"
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <span id="titleErr" style={errStyle}>
          {titleErr}</span>
        <label htmlFor="PostContent">Post Content</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
        ></textarea> <span id="contentErr" style={errStyle}>
        {contentErr}</span>
        <button
          type="button"
          onClick={onSavePost}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddForm;

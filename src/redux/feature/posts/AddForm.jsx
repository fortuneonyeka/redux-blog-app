import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [contentErr, setContentErr] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers)

  const onTitleChanged = (e) => {setTitle(e.target.value);};
  const onAuthorChanged = (e) => {setUserId(e.target.value);};
  const onContentChanged = (e) => {setContent(e.target.value);};

  const onSavePost = () => {
    let valid = true;
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

    if (valid && title && content) {
      dispatch(addPosts(title, content, userId));
      setTitle("");
      setContent("");
      setContentErr("");
      setTitleErr("");
    }
  };

  const errStyle = {
    color: "red",
    fontSize: "15px",
    paddingBottom: "20px",
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ))

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
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select  id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <span id="titleErr" style={errStyle}>
          {titleErr}
        </span>
        <label htmlFor="PostContent">Post Content</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>{" "}
        <span id="contentErr" style={errStyle}>
          {contentErr}
        </span>
        <button type="button" onClick={onSavePost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddForm;

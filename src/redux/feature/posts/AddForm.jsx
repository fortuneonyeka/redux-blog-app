import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setUAddRequestStatus] = useState("idle");
  const [titleErr, setTitleErr] = useState("");
  const [contentErr, setContentErr] = useState("");



  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers)

  const onTitleChanged = (e) => {setTitle(e.target.value);};
  const onAuthorChanged = (e) => {setUserId(e.target.value);};
  const onContentChanged = (e) => {setContent(e.target.value);};

  const canSave = [title,content,userId].every(Boolean) && addRequestStatus === "idle";

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

    if (valid && canSave) {
     try {
        setUAddRequestStatus("pending")
        dispatch(addNewPost({title,body: content, userId})).unwrap()
      setTitle("");
      setContent("");
      setUserId("");
      setContentErr("");
      setTitleErr("");
     } catch (err) {
      console.error("Failed to save post", err)
     } finally {
      setUAddRequestStatus("idle")
     }
     
    }
  };

  const errStyle = {
    color: "red",
    fontSize: "15px",
    paddingBottom: "20px",
  };

 
  
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ))

  return (
    <section>
      <h2 className="header">Add a New Post</h2>
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

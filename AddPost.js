import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
 import { createPost } from "../Redux/Slices/PostSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({ title: "" });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ formValue }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type="text" name="title" onChange={handleChange} />
        <br />
        <FileBase
          multiple={false}
          type="file"
          onDone={({ base64 }) => {
            setFormValue({ ...formValue, image: base64 });
          }}
        />
        <br />
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default AddPost;
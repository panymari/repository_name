import React, { useState, useContext } from 'react';
import cn from 'classnames';
import axios from 'axios';
import classes from './AddUser.module.scss';
import { UserPostContext } from '../User/UserPostContext';

const AddUser = ({ userIdValue, className }) => {
  const [inputs, setInputs] = useState({});
  const { posts, setPosts } = useContext(UserPostContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs('');
    const userTitle = inputs.title;
    const userBody = inputs.body;
    const post = {
      userId: userIdValue,
      title: userTitle,
      body: userBody,
    };
    axios.post('https://jsonplaceholder.typicode.com/posts', post).then((response) => {
      const userPostsCopy = [response.data, ...posts];
      setPosts(userPostsCopy);
    });
  };
  return (
    <form className={cn(classes.userForm, className)} onSubmit={handleSubmit}>
      <input
        className={classes.userInput}
        name="title"
        onChange={handleChange}
        placeholder="Enter the title"
        type="text"
        value={inputs.title || ''}
      />
      <textarea
        className={classes.userTeaxtarea}
        name="body"
        onChange={handleChange}
        placeholder="Enter the body"
        value={inputs.body || ''}
      />
      <input className={classes.userSubmitButton} type="submit" value="Add post" />
    </form>
  );
};

export default AddUser;

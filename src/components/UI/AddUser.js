import React, { useState } from 'react';
import cn from 'classnames';
import axios from 'axios';
import classes from './AddUser.module.scss';

const AddUser = ({ userIdValue, className }) => {
  const [inputs, setInputs] = useState({});

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
      console.log(response);
    });
  };
  return (
    <form className={cn(classes.userForm, className)} onSubmit={handleSubmit}>
      <input name="title" onChange={handleChange} placeholder="Enter the title" type="text" value={inputs.title || ''} />
      <textarea name="body" onChange={handleChange} placeholder="Enter the body" value={inputs.body || ''} />
      <input type="submit" value="Add post" />
    </form>
  );
};

export default AddUser;
import React, { useContext } from 'react';
import cn from 'classnames';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classes from './AddUser.module.scss';
import { UserPostContext } from '../../context/UserPostContext';

const AddUser = ({ userIdValue, className }) => {
  const { posts, setPosts } = useContext(UserPostContext);

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      body: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const userTitle = values.title;
      const userBody = values.body;
      const post = {
        userId: userIdValue,
        title: userTitle,
        body: userBody,
      };
      axios.post('https://jsonplaceholder.typicode.com/posts', post).then((response) => {
        const userPostsCopy = [response.data, ...posts];
        setPosts(userPostsCopy);
      });
      resetForm({ values: '' });
    },
  });

  return (
    <form className={cn(classes.userForm, className)} onSubmit={formik.handleSubmit}>
      <input
        className={formik.touched.title && formik.errors.title ? classes.userInputError : classes.userInput}
        id="title"
        name="title"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder="Enter the title"
        type="text"
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? <div className={classes.inputError}>{formik.errors.title}</div> : null}
      <textarea
        className={formik.touched.body && formik.errors.body ? classes.userTeaxtareaError : classes.userTeaxtarea}
        name="body"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder="Enter the body"
        value={formik.values.body}
      />
      {formik.touched.body && formik.errors.body ? <div className={classes.inputError}>{formik.errors.body}</div> : null}
      <button
        className={classes.userSubmitButton}
        disabled={(formik.touched.body && formik.errors.body) || (formik.touched.title && formik.errors.title) ? 'true' : ''}
        type="submit"
      >
        Add post
      </button>
    </form>
  );
};

export default AddUser;

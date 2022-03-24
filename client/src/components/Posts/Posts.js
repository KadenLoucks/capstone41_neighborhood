import React from 'react';
<<<<<<< HEAD
=======
import { Grid, CircularProgress } from '@material-ui/core';
>>>>>>> c57b9c2d2542f9f4d9fb644b60bcdef07b0b2588
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

<<<<<<< HEAD
const Posts = () => {
const posts = useSelector((state)=>state.posts); 
const classes = useStyles();

console.log(posts);
    return(
        <>
            <h1>POSTS</h1>
            <Post/>
            <Post/>
        </>
    );
}

export default Posts;
=======
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
>>>>>>> c57b9c2d2542f9f4d9fb644b60bcdef07b0b2588

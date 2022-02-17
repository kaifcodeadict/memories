import React from "react";
import { Container, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { bindActionCreators } from 'redux';
// import {actionCreators} from './actions/index'
import { getPosts } from "../../actions/posts";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

function Home() {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  // const {getPosts} = bindActionCreators(actionCreators,dispatch)

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container>
      <Grid
        className={classes.mainContainer}
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={7}>
          <Posts setId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form Id={currentId} setId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

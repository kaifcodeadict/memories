import "./App.css";
import { Container, AppBar, Typography, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { bindActionCreators } from 'redux';
// import {actionCreators} from './actions/index'
import { getPosts } from "./actions/posts";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  // const {getPosts} = bindActionCreators(actionCreators,dispatch)

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          {" "}
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height={80}
        />
      </AppBar>
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
    </Container>
  );
}

export default App;

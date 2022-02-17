import React from "react";
import { useDispatch} from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { ThumbUpAlt, Delete, MoreHoriz } from "@material-ui/icons";
import useStyles from "./Style";
import moment from "moment";
import { actionCreators } from "../../../actions/index";
import { bindActionCreators } from "redux";

function Post({ post, setId }) {
  const dispatch = useDispatch();

  const { deletePost, likePost } = bindActionCreators(actionCreators, dispatch);

  const deleteV = () => {
    deletePost(post._id);
  };

  const classes = useStyles();
  console.log({ post });
  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setId(post._id);
            }}
          >
            <MoreHoriz fontSize="medium" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>

        <Typography className={classes.title} variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              likePost(post._id);
            }}
          >
            <ThumbUpAlt fontSize="small" />
            &nbsp; Like &nbsp;
            {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={deleteV}>
            <Delete fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;

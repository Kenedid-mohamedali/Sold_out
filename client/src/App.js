import React, { useEffect } from "react";
import { Container, TextField , AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

// import RecipeReviewCard from "./components/Cards/Cards";
// import Textfield from "./components/navbar/navbar";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/box_adidas_icon.png";
import useStyles from "./styles";


const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h1" align="center">Sold oud</Typography>
        <img className={classes.image} src={memories} alt="box_adidas_icon" height="80"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
              {/* <Card/> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField />
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

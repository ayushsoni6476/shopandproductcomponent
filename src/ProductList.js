import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 200,
    width: 250
  },
  control: {
    padding: theme.spacing(2)
  }
}));
export default function ProductList() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="4">
          {[0, 1, 2, 4].map(value => (
            <Grid key={value} item>
              <Product />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

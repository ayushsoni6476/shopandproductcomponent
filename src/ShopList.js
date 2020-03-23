import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import history from "./history";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function ShopList() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          onClick={() => history.push("./ProductList")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SHOPNAME
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            SHOP DESCRIPTiON
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

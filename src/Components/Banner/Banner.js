import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "../Banner/Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundColor: "#e9e9e9",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Manrope",
            }}
          >
            Q\V. CRYPTO
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Manrope",
            }}
          >
            Shout out to @EZ.ETH, Everything full send
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;

import { makeStyles, Typography, LinearProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../Components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { numberWithCommas } from "../Components/Banner/Carousel";

import HTMLReactParser from "html-react-parser";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid black",
    },
    heading: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      fontFamily: "Manrope",
    },
    description: {
      color: "black",
      fontFamily: "Manrope",
      fontSize: 14,
      width: "100%",
      padding: 20,
      paddingBottom: 15,
      textAlign: "justify",
    },
  }));

  const classes = useStyles();

  if (!coin) return <LinearProgress style={{ backGroundColor: "darkgrey" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="75"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h4" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {coin?.description.en.split(". ")[0]}.
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h4" className={classes.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h4" className={classes.heading}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h4" className={classes.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h4" className={classes.heading}>
              {symbol}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}{" "}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h4" className={classes.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h4" className={classes.heading}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
        </div>
      </div>
      {/* {chart} */}
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;

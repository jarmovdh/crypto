import {
  AppBar,
  Container,
  MenuItem,
  createTheme,
  makeStyles,
  Select,
  Toolbar,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "black",
    fontWeight: "bold",
    fontFamily: "Manrope",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate.push("/")}
              className={classes.title}
              variant="h6"
            >
              Q\V. Crypto Tracker
            </Typography>
            <Select
              variant="outlined"
              style={{
                color: "black",
                width: 100,
                height: 40,
                marignRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={`USD`}>USD</MenuItem>
              <MenuItem value={`EUR`}>EUR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;

import {
  AppBar,
  Container,
  MenuItem,
  makeStyles,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

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
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography className={classes.title}>Crypto QV</Typography>
          <Select
            variant="outlined"
            style={{
              color: "black",
              width: 100,
              height: 40,
              marignLeft: 15,
            }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

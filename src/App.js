import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "lightgrey",
      color: "white",
      minHeigh: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" exact component={Homepage} />
          <Route path="/coins/:id" component={CoinPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

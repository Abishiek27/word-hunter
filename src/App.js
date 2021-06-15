import { Container, withStyles, Switch } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Definitions from "./components/definitions/Definitions";
import Header from "./components/header/Header";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightTheme, setLightTheme] = useState(false);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category]);

  const PurpleSwitch = withStyles({
    switchBase: {
      color: "rgb(63, 81, 181)",
      "&$checked": {
        color: "rgb(63, 81, 181)",
      },
      "&$checked + $track": {
        backgroundColor: "rgb(63, 81, 181)",
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightTheme ? "#f9f9f9" : "#1a1d22",
        color: lightTheme ? "black" : "#fff",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span style={{ color: "rgb(63, 81, 181)" }}>
            {lightTheme ? "Dark" : "Light"}
          </span>
          <PurpleSwitch
            checked={lightTheme}
            onChange={() => setLightTheme(!lightTheme)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightTheme={lightTheme}
          setMeanings={setMeanings}
        />

        {meanings && (
          <Definitions
            word={word}
            category={category}
            meanings={meanings}
            lightTheme={lightTheme}
          />
        )}
      </Container>
    </div>
  );
}

export default App;

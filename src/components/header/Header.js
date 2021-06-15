import {
  createMuiTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({
  category,
  setCategory,
  word,
  setWord,
  setMeanings,
  lightTheme,
}) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "rgb(63, 81, 181)",
      },
      type: lightTheme ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
    // setMeanings([]);
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunter"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            label="Search a Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            className="select"
            // helperText="Select your favorite language"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;

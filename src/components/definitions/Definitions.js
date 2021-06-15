import React from "react";
import "./Definitions.css";

const Definitions = ({ meanings, word, category, lightTheme }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ borderRadius: 10, width: "100%" }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your Browser doesn't support the audio element
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{
                  backgroundColor: lightTheme
                    ? "rgb(224, 224, 224)"
                    : "#282c34",
                  color: lightTheme ? "#000" : "#fff",
                }}
              >
                <b className="def">{def.definition}</b>
                {/* <hr style={{ backgroundColor: "#eeeeee", width: "100%" }} /> */}

                {def.example && (
                  <span style={{ paddingTop: 10 }}>
                    <b style={{ color: "rgb(63, 81, 181)" }}>Example : </b>
                    {def.example}
                  </span>
                )}

                {def.synonyms && (
                  <span>
                    <b style={{ color: "rgb(63, 81, 181)" }}>Synonyms : </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;

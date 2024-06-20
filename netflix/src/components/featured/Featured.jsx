import React from "react";
import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Shows"}</span>
          <select name="genre" id="genre">
            <option className="options">Genre</option>
            <option className="options" value="adventure">
              Adventure
            </option>
            <option className="options" value="action">
              Action
            </option>
            <option className="options" value="horror">
              Horror
            </option>
            <option className="options" value="sci">
              Sci-Fi
            </option>
            <option className="options" value="comedy">
              Comedy
            </option>
            <option className="options" value="romance">
              romance
            </option>
            <option className="options" value="drama">
              Drama
            </option>
            <option className="options" value="thriller">
              Thriller
            </option>
            <option className="options" value="fantasy">
              Fantasy
            </option>
            <option className="options" value="mystery">
              Mystery
            </option>
          </select>
        </div>
      )}

      <img
        src="img/main.jpeg"
        alt="The Witcher"
      />

      <div className="info">
        <img
          src="img/witcherlogo.png"
          alt="The Witcher"
        ></img>
        <span className="desc">
          The Witcher is a fantasy drama television series created by Lauren
          Schmidt Hissrich for Netflix. It is based on the book series of the
          same name by Polish writer Andrzej Sapkowski. Set on a fictional,
          medieval-inspired landmass known as the Continent, The Witcher
          explores the legend of Geralt of Rivia, Yennefer of Vengerberg and
          Princess Ciri. It stars Henry Cavill, Anya Chalotra, and Freya Allan.
        </span>

        <div className="buttons">
          <button className="btnPlay">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="btnInfo">
            <InfoIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

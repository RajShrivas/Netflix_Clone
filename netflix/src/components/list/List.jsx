import React, { useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItem from "../listItem/ListItem";
import "./list.scss";


const List = () => {

  const imgArr = [{
    img: "https://c4.wallpaperflare.com/wallpaper/497/451/606/tv-show-rick-and-morty-morty-smith-rick-sanchez-hd-wallpaper-preview.jpg",
    video: "rick"
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/365/629/82/rick-morty-rick-and-morty-cartoons-wallpaper-preview.jpg",
    video: "rick"
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/335/411/593/daredevil-charlie-cox-netflix-wallpaper-preview.jpg",
    video: "pexel"
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/741/258/389/tv-show-stranger-things-eleven-stranger-things-millie-bobby-brown-stranger-things-season-3-hd-wallpaper-preview.jpg",
    video: "stranger"
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/168/540/945/tv-show-lucifer-chloe-decker-lauren-german-lucifer-tv-show-hd-wallpaper-preview.jpg",
    video: "lucifer"
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/752/439/763/tv-show-la-casa-de-papel-hd-wallpaper-preview.jpg",
    video: "rick"
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/406/324/22/tv-show-peaky-blinders-wallpaper-preview.jpg",
    video: "rick"
  },
  {
    img: "https://wallpapers.com/images/high/dark-netflix-69qiv32a2ee7t57l.webp",
    video: "rick"
  }


  ];


  const listRef = useRef();
  const [slideNum, setSlideNum] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const handleClick = (direction) => {
    setIsMoved(true);
    let dist = listRef.current.getBoundingClientRect().x - 35;

    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      listRef.current.style.transform = `translate(${225 + dist}px)`;
    }

    if (direction === "right" && slideNum < 6) {
      setSlideNum(slideNum + 1);
      listRef.current.style.transform = `translate(${-225 + dist}px)`;
    }

    console.log(slideNum);
  };

  return (
    <div className="list" style={{ color: "white" }}>
      <span>Netflix Original</span>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="slider left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {imgArr.map(function (e, i) {
            return <ListItem key={i} index={i} video={e.video} image={e.img}></ListItem>;
          })}
        </div>
        <ArrowForwardIosIcon
          className="slider right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;

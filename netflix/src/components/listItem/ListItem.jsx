import React, { useState } from "react";
import "./listitem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const ListItem = (props) => {

    const [isHovered, setIsHovered] = useState(false);

   

    return (

        <div className="listItem"
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img className="myImage" src={props.image} alt=""></img>

            {isHovered &&

                <>
                    <video loop autoPlay="true">
                        <source src={`img/${props.video}.mp4`} type="video/mp4"></source>
                    </video>
                    <div className="iteminfo">
                        <div className="icons">
                            <PlayArrowIcon />
                            <AddIcon />
                            <ThumbUpIcon />
                            <AddCircleOutlineIcon />
                        </div>

                        <div className="topinfo">
                            <span>1 hour 53 min.</span>
                            <span>+16</span>
                            <span>1999</span>
                        </div>

                        <div className="desc">
                            <span>Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                    </div>
                </>
            }


        </div >
    );
};

export default ListItem;

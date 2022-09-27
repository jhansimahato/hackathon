import React from 'react'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import "./widget.scss";

const Widget = ({title, link, count, icon}) => {
    // let data = {
    //     title: "USERS",
    //     link: "See all users",
    //     count: "45",
    //     icon: (
    //       <PersonOutlinedIcon
    //         className="icon"
    //         style={{
    //           color: "crimson",
    //           backgroundColor: "rgba(255, 0, 0, 0.2)",
    //         }}
    //       />
    //     ),
    //   };
  return (
    <div className="widget">
        <div className="left">
        <span className="title">{title}</span>
        <span className="counter">
          {count}
        </span>
      </div>
    </div>
  )
}

export default Widget
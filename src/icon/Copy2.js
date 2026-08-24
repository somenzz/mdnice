import React from "react";
import "./index.css";

let style1 = { height: "30px", width: "30px", color: "#4CAF50" }

export default ({ fill = "rgba(0,0,0,0.65)", style = { style1 }, className = "icon", viewBox = "0 0 1024 1024" }) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM224 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h48v224c0 26.51 21.49 48 48 48h80zm192-96c0 8.822-7.178 16-16 16h-48V96c0-26.51-21.49-48-48-48H176V48c0-8.822 7.178-16 16-16h144l64 64v272z" />
  </svg >
);
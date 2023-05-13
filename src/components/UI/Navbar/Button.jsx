import React from "react";

export default function Button(props) {
  let btnCss = `btn ${props.typeBtn} ${props.css} m-1`;

  return (
    <button className={btnCss} onClick={props.clic}>
      {props.children}
    </button>
  );
}

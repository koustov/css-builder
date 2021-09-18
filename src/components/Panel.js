import React from "react";

export default function Panel(props) {
  console.log("Panel props.children: ", props.children);
  return <div>{props.children}</div>;
}

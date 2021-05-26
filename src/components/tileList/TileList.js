import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = (props) => {
  const arr = props.arr
  return (
    <div>
      {arr.map((item, index) => {
        return <Tile key={index} item={item}/>
      })}
    </div>
  );
};

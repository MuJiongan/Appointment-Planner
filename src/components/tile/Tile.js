import React from "react";

export const Tile = (props) => {
  const obj = props.item;
  return (
    <div className="tile-container">
      { Object.values(obj).map((value, index)=> {
        if (index === 0){
          return <p className="tile-title">{value}</p>
        }else{
          return <p className="tile">{value}</p>
        }
      })
      }
    </div>
  );
};

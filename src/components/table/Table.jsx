import React from "react";
import Square from "../square/Square";
import "./Table.css";

const Table = () => {
  return (
    <>
      <div>
        <div>
          <Square position={0} />
          <Square position={1} />
          <Square position={2} />
        </div>
        <div>
          <Square position={3} />
          <Square position={4} />
          <Square position={5} />
        </div>
        <div>
          <Square position={6} />
          <Square position={7} />
          <Square position={8} />
        </div>
      </div>
    </>
  );
};

export default Table;

import React from "react";
import loading from "../Images/3dgifmaker21021.gif";
export default function Spinner() {
  return (
    <div className="text-center " style={{ margin: "230px 0px 230px 0px " }}>
      <img src={loading} alt="loading" />
    </div>
  );
}

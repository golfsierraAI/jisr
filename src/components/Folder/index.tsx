import React from "react";
import "./index.css";
import { useState } from "react";
import PopUp from "../PopUp/index.tsx";

function Folder({ root }) {
  const [expand, setExpand] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const handlePopUp = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu") {
      setShowPopUp(!showPopUp);
    }
  };

  if (root.type === "folder") {
    return (
      <div>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {root.name}</span>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {root.data.map((exp, index) => {
            return <Folder key={index} root={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="popup_wrapper">
        <span className="file" onContextMenu={handlePopUp}>
          📄 {root.name}
        </span>
        <PopUp showPopUp={showPopUp} fileName={root.name} />
      </div>
    );
  }
}

export default Folder;

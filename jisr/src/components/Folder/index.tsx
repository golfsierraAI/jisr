import React from "react";
import "./index.css";
import { useState } from "react";
import PopUp from "../PopUp/index.tsx";

function Folder({ files }) {
  const [expand, setExpand] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const handlePopUp = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu") {
      setShowPopUp(!showPopUp);
    }
  };

  if (files.type === "folder") {
    return (
      <div>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {files.name}</span>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {files.data.map((exp, index) => {
            return <Folder key={index} files={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="popup_wrapper">
        <span className="file" onContextMenu={handlePopUp}>
          📄 {files.name}
        </span>
        <PopUp showPopUp={showPopUp} fileName={files.name} />
      </div>
    );
  }
}

export default Folder;

import Folder from "./components/Folder/index.tsx";
import { files } from "./data";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Folder files={files} />
    </div>
  );
}

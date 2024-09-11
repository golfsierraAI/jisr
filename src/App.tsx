import Folder from "./components/Folder/index.tsx";
import { files } from "./data.js";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Folder root={files} />
    </div>
  );
}

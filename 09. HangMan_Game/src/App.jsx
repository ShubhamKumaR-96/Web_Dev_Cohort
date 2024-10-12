import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartGame from "./components/pages/StartGame";
import PlayGame from "./components/pages/PlayGame";

function App() {
  return (
   <Routes>
    <Route path="/start" element={<StartGame />} />
    <Route path="/play" element={<PlayGame />} />
    <Route path="/" element={<div>Home</div>} />
   </Routes>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BookTabel from "./components/BookTable";
import { Link } from "react-router-dom";
import Ordernow from "./components/Ordernow";
import Maincourse from "./components/Maincourse";
import Viewbox from "./components/Viewboxrow";
import Bevrage from "./components/Bevrage";
import Login2 from "./components/Login2";
import Login from "./components/Login";
import ViewTable from "./components/ViewTable";
import ViewTableRow from "./components/ViewTableRow";
import EditPage from "./components/EditPage";
import Forgetpass from "./components/Forgetpass";
import axios from "axios";
import Checkres from "./components/Checkres";
import Staters from "./components/Staters";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booktable" element={<BookTabel />} />
        <Route path="/staters" element={<Staters />} />
        <Route path="/maincourse" element={<Maincourse />} />
        <Route path="/bevrage" element={<Bevrage />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/view" element={<ViewTable />} />
        <Route path="/loginpage" element={<Login2 />} />
        <Route path="/edit-user/:id" element={<EditPage />} />
        <Route path="/forget-user/" element={<EditPage />} />
        <Route path="/checkres" element={<Checkres />} />
        <Route path="/booktable/view" element={<ViewTable />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

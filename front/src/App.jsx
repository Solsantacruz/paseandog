import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Clientes from "./views/Clientes";
import CardClient from "./components/CardClient.";
import DetailDog from "./views/DeatailDog";
import Dogs from "./views/Dogs";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/clientes/:id" element={<CardClient />} />
      <Route path="/dog/:id" element={<DetailDog />} />
      <Route path="/dogs" element={<Dogs />} />
    </Routes>
  );
}

export default App;

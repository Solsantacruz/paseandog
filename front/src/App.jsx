import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Clientes from "./views/Clientes";
import CardClient from "./components/CardClient.";
import DetailDog from "./views/DeatailDog";
import Dogs from "./views/Dogs";
import NewClient from "./components/NewClient";
import Reservas from "./views/Reservas";
import Paseadores from "./views/Paseadores";
import DetailPaseador from "./views/DetailPaseador";
import EditarPaseador from "./components/EditPaseador";



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/clientes/:id" element={<CardClient />} />
      <Route path="/clientes" element={<NewClient />} /> 
      <Route path="/dog/:id" element={<DetailDog />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/home" element={<Reservas />} />
      <Route path="/paseadores" element={<Paseadores />} />
      {/* <Route path="/paseadores/:id" element={<DetailPaseador />} /> */}
      <Route path="/paseadores/:id" element={<EditarPaseador />} />
      
    </Routes>
  );
}

export default App;

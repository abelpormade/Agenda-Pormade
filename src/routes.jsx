import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from './pages/Cadastro'
import PaginaInicial from "./pages/PaginaInicial";


export default function Rotas(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/paginainicial" element={<PaginaInicial />} />
        </Routes>
    </BrowserRouter>
    )
}
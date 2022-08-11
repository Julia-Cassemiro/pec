// import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Login } from "../pages/Login";
import { TiposClientes } from "../pages/TiposClientes"
// import { Campanha } from "../pages/Campanhas";
// import { Grupos } from "../pages/Grupos";
// import { GruposProd } from "../pages/GruposProd";
// import { TiposCampanha } from "../pages/TiposCampanha";
// import { Brindes } from "../pages/Brindes";
// import { AreaDoCliente } from "../pages/AreaDoCliente";


const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tipos" element={<TiposClientes />} />
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/campanha" element={<Campanha />} />
        <Route path="/grupo" element={<Grupos />} />
        <Route path="/grupoProd" element={<GruposProd />} />
        <Route path="/tiposCampanha" element={<TiposCampanha />} />
        <Route path="/brindes" element={<Brindes />} />
        <Route path="/areaCliente" element={<AreaDoCliente />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

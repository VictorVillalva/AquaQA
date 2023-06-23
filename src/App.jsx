import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage";
import { HomeUser } from "./pages/HomeUser";
import { UsersAdmin } from "./pages/UsersAdmin";
import { SensoresAdmin } from "./pages/SensoresAdmin";
import { Login } from "./pages/Login";
import { CambioContraseña } from "./pages/CambioContraseña";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<HomeUser/>}/>
          <Route path="/users" element={<UsersAdmin/>}/>
          <Route path="/sensores" element={<SensoresAdmin/>}/>
          <Route path="/cambiocontraseña" element={<CambioContraseña/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

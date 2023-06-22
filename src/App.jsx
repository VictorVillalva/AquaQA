import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginRegister } from "./pages/LoginRegister";
import { LandingPage } from "./pages/LandingPage";
import { HomeUser } from "./pages/HomeUser";
import { VistaAdministrador } from "./pages/VistaAdministrador";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginRegister/>}/>
          <Route path="/home" element={<HomeUser/>}/>
          <Route path="/Admin" element={<VistaAdministrador/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

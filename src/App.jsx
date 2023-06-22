import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginRegister } from "./pages/LoginRegister";
import { LandingPage } from "./pages/LandingPage";
import { HomeUser } from "./pages/HomeUser";
import { UsersAdmin } from "./pages/UsersAdmin";
import { SensoresAdmin } from "./pages/SensoresAdmin";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginRegister/>}/>
          <Route path="/home" element={<HomeUser/>}/>
          <Route path="/users" element={<UsersAdmin/>}/>
          <Route path="/sensores" element={<SensoresAdmin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

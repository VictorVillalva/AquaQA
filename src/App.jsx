import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginRegister } from "./pages/LoginRegister";
import { LandingPage } from "./pages/LandingPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginRegister/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

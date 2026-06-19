import { BrowserRouter, Routes, Route } from "react-router"
import { MainPage } from "./pages/MainPage"
import { UserPage } from "./pages/UserPage"
import { Login } from "./pages/Login"
import { LikePage } from "./pages/LikePage"
import { OngPage } from "./pages/OngPage"


function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/ong-main" element={<OngPage/>}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/likePage" element={<LikePage />}/>

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router"
import { MainPage } from "./pages/MainPage"
import { UserPage } from "./pages/UserPage"
import { Login } from "./pages/Login"
import { LikePage } from "./pages/LikePage"


function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/likePage" element={<LikePage />}/>

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App

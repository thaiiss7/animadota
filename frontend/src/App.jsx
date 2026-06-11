import { BrowserRouter, Routes, Route } from "react-router"
import { UserPage } from "./pages/UserPage"


function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>

        <Route path="/UserPage" element={<UserPage />}/>

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App

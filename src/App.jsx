import { BrowserRouter, Routes, Route } from "react-router-dom"
import Results from "./results/Index"
import Tournaments from "./tournaments/Index"
import Menu from "./components/Menu"

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route element={<Results />} path="/results" />
        <Route element={<Tournaments />} path="/tournaments/:team/:years" />
      </Routes>
    </BrowserRouter>
  )
}

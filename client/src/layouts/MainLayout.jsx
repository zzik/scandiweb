
import { Routes, Route } from "react-router-dom"
import { Footer, NoMatch } from '../components'
import { Add, Cancel, MassDelete, Save } from "../components"
import AddProductPage from "./AddProductPage"
import ListProductsPage from "./ListProductsPage"

const MainLayout = () => {
  return (
    <>
        <Routes>
          <Route index path="/" element={<ListProductsPage leftButton={<Add />} rightButton={<MassDelete />} />} />
          <Route path="/addproduct" element={<AddProductPage leftButton={<Save />} rightButton={<Cancel />} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      <Footer text="Scandiweb Test Assignment" />
    </>
  )
}

export default MainLayout

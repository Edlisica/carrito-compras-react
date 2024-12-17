import { Routes, Route, NavLink } from "react-router"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
        <NavBar />
           <div className="container">
           <Routes>
                <Route path="/" element={<ComprasPage></ComprasPage>}  /> 
                <Route path="/carrito" element={<CarritoPage></CarritoPage>}  /> 
                <Route path="/*" element={<NavLink  to="/" ></NavLink>}/> 
                
            </Routes>
           </div>
           </CarritoProvider>
        </ProductosProvider>
    )
}

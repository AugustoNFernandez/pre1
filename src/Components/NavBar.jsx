import CartWidget from "./CartWidget"
import "./NavBar.css"


export function NavBar(){
    return <>
        <nav className="navbar">
            <h3>Tienda de Cuero</h3>            
            <div className="links">
                <ul>
                    <li><a href="#">Calzado</a></li>
                    <li><a href="#">Bolsos</a></li>
                    <li><a href="#">Cinturones</a></li>
                </ul>
                <div className="carrito">🛒<CartWidget items={6}/></div>
            </div>
                
        </nav>    
    </>
}
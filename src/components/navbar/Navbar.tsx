import { Search } from "../search";
import "./navbar.css"
export const NavBar = () => {
  return (
  
  
  
  <div className="nav-style">
            <div className="container">
                        <img 
                        className="img-style"
                        src= {"https://apoyameaqui.cl/images/marketplaces/mercadolibre.png"}   alt="home"/>
                         <Search  /> 
                         <img 
                        className="img-style2"
                        src= {"https://http2.mlstatic.com/D_NQ_662358-MLA49879457438_052022-OO.webp"}   alt="home"/> 
            </div>
            <div className="nav-menu">
                <ul className="nav-menu-list">
                   <li className="nav-menu-item">
                     <a href="home">
                       <span className="nav-menu-cp-send"> Ingresa tu </span>
                       <span className="nav-menu-cp-cp"> ubicación </span>
                     </a>
                     </li>
                   <li className="nav-menu-item"> <a href="home" > Categorias </a></li>
                   <li className="nav-menu-item">  <a href="home"> Ofertas </a></li>
                   <li className="nav-menu-item">  <a href="home"> Historial </a></li>
                   <li className="nav-menu-item">  <a href="home"> Supermercado </a> </li>
                   <li className="nav-menu-item">  <a href="home"> Vender </a> </li>
                   <li className="nav-menu-item">  <a href="home"> Ayuda / PQR </a> </li>
                </ul>
            </div> 

              <div id="nav-header-menu">

                  <a href='home'> Crea tu cuenta </a> 
                  <a href="home"> Ingresa </a>
                  <a href='home'> Mis Compras </a>
              </div>
   </div>
   
   
   
   )
}
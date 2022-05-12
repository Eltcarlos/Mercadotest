import { Search } from "../search";
import "./navbar.css"
export const NavBar = () => {
  return (
  
  
  
  <div className="nav-style">

       <div className="nav-contenedor">
            <div className="container">
                        <img 
                        className="img-style"
                        src= {"https://apoyameaqui.cl/images/marketplaces/mercadolibre.png"}   alt="home"/>
                         <Search  /> 
                         <img 
                        className="img-style2"
                        src= {"https://http2.mlstatic.com/D_NQ_662358-MLA49879457438_052022-OO.webp"}   alt="home"/> 
            </div>


           <div className="container2">
            <div className="nav-menu">
                <ul className="nav-menu-list">
                   <li className="nav-menu-item">
                     <a href="home" className="ubicacion">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
                       <span className="nav-menu-cp-send"> Ingresa tu </span>
                       <span className="nav-menu-cp-cp"> ubicación </span>
                     </a>
                     </li>
                   <li className="nav-menu-item" > <a href="home" > Categorias </a></li>
                   <li className="nav-menu-item">  <a href="home"> Ofertas </a></li>
                   <li className="nav-menu-item">  <a href="home"> Historial </a></li>
                   <li className="nav-menu-item">  <a href="home"> Supermercado </a> </li>
                   <li className="nav-menu-item">  <a href="home"> Vender </a> </li>
                   <li className="nav-menu-item">  <a href="home"> Ayuda / PQR </a> </li>
                </ul>
            </div> 

              <div className="nav-header-menu">

                  <a href='home'> Crea tu cuenta </a> 
                  <a href="home"> Ingresa </a>
                  <a href='home' > Mis Compras </a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
              </div>

             
           </div>   

        </div> 
   </div>
   
   
   
   )
}
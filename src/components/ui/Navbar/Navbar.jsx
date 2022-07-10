import { NavLink } from 'react-router-dom';

import { DropdownItem } from '../../others/DropdownItem/DropdownItem';

import { categorias } from '../../../data/categorias';

export const Navbar = () => {
  const primerParte = Math.round(categorias.length / 2);
  const segundaParte = Math.floor(categorias.length / 2);
  
  return (
    <div className="container p-0">
        <div className="row m-0 p-0">
            <div className="col m-0 p-0">
                <div className="d-flex justify-content-between">
                    <h3 className='ps-3'>TituloApp</h3>
                    <ul className="nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle category-nav" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu dropdown-styles columnas-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <div className="row">
                                    <div className="col-6">
                                        {categorias.map(({nombre:categria, url}, index) => index < primerParte && <DropdownItem key={index} categoria={categria} url={url}/>)}
                                    </div>
                                    <div className="col-6">
                                        {categorias.map(({nombre:categria, url}, index) => categorias.length % 2 === 0 ? index >= segundaParte && <DropdownItem key={index} categoria={categria} url={url}/> : index > segundaParte && <DropdownItem key={index} categoria={categria} url={url}/>)}
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Iniciar sesión</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

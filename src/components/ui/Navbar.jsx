import React from 'react'

export const Navbar = () => {
  return (
    <div className="container p-0">
        <div className="row m-0 p-0">
            <div className="col m-0 p-0">
                <div className="d-flex justify-content-between">
                    <h3 className='ps-3'>TituloApp</h3>
                    <ul className="nav    ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Categorias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Iniciar sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

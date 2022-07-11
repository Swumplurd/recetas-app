import React from "react";

export const RegistroPage = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-header text-center card-login-header">
              Registro
            </div>
            <div className="card-body card-login-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control input-body"
                    id="nombre" name="nombre"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="a_paterno" className="form-label">
                    Apellido Paterno
                  </label>
                  <input
                    type="text"
                    className="form-control input-body"
                    id="a_paterno" name="a_paterno"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="a_materno" className="form-label">
                    Apellido Materno
                  </label>
                  <input
                    type="text"
                    className="form-control input-body"
                    id="a_materno" name="a_materno"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    className="form-control input-body"
                    id="email" name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control input-body"
                    id="username" name="username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control input-body"
                    id="password" name="password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-recetas">
                    Registrate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-header text-center card-login-header">
              Login
            </div>
            <div className="card-body card-login-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre_usuario" className="form-label">
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control input-body"
                    id="nombre_usuario"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control input-body" 
                    id="password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-recetas">
                    Inicia sesión
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

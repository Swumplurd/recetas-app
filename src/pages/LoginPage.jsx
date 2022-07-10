import React from "react";

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-header text-center card-login-header">Login</div>
            <div className="card-body card-login-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nombre de Usuario
                  </label>
                  <input
                    type="email"
                    className="form-control input-body"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
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

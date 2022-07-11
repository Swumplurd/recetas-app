import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";

import { startLogin } from "../store/slices/auth/thunks";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(username, password));
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-header text-center card-login-header">Login</div>
            <div className="card-body card-login-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control input-body"
                    id="exampleInputEmail1"
                    name="username"
                    onChange={handleLoginInputChange}
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
                    name="password"
                    onChange={handleLoginInputChange}
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

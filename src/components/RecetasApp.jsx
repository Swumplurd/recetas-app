import { Routes, Route } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import '@fortawesome/fontawesome-free/css/all.css'
import '../index.css'
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegistroPage } from "../pages/RegistroPage";

export const RecetasApp = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/registro" element={<RegistroPage/>}/>
      </Routes>
    </MainLayout>
  )
};

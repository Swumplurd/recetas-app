import { Routes, Route } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import '@fortawesome/fontawesome-free/css/all.css'
import '../index.css'
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

export const RecetasApp = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </MainLayout>
  )
};

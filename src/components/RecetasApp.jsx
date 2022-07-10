import { MainLayout } from "../layouts/MainLayout";
import { CardLayout } from "../layouts/CardLayout";

import { Carousel } from "./others/Carousel/Carousel";

import '@fortawesome/fontawesome-free/css/all.css'
import '../index.css'
import { CardItem } from "./others/CardItem/CardItem";

export const RecetasApp = () => {
  return (
    <MainLayout>
      <Carousel/>
      <CardLayout>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </CardLayout>
    </MainLayout>
  )
};

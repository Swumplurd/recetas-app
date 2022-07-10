import React from "react";
import { CardItem } from "../components/others/CardItem/CardItem";
import { Carousel } from "../components/others/Carousel/Carousel";
import { CardLayout } from "../layouts/CardLayout";

export const HomePage = () => {
  return (
    <>
      <Carousel />
      <CardLayout>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </CardLayout>
    </>
  );
};

import React from "react";
import './CardItem.css'

export const CardItem = () => {
  return (
    <div className="col">
      <div className="card card-style">
        <img src="https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/3752/fancy/r_3752_1550830660.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

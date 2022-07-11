import React from "react";
import './CardItem.css'

export const CardItem = () => {
  return (
    <div className="col">
      <div className="card card-style">
        <img src="https://www.pcrm.org/sites/default/files/2019-12/Untitled%20%283%29_1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

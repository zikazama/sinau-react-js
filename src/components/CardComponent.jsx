// generate card component react bootstrap
import React from "react";
import { Card, Button } from "react-bootstrap";

const CardComponent = ({ title, text }) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button type="button" className="btn btn-primary">
          Go somewhere
        </button>
      </div>
    </div>
  );
};

export default CardComponent;

// generate card component react bootstrap
import React from "react";
import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const CardComponent = ({ title, text, objectData }) => {
  const showModal = () => {
    // const stringJSON = JSON.stringify(objectData);
    // console.log(stringJSON);
    // console.log(stringJSON.json())
    const html = `<div class="card">
    <div class="card-body text-center">
      <h5 class="card-title">${objectData.username}</h5>
      <p class="card-text">${objectData.email}</p>
    </div>
  </div>`;
    Swal.fire({
      title: "Detail Data",
      html: html,
      icon: "info",
      confirmButtonText: "Close",
    });
  };

  return (
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button onClick={showModal} type="button" className="btn btn-primary">
          Detail
        </button>
      </div>
    </div>
  );
};

export default CardComponent;

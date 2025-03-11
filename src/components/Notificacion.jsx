
import React from "react";
import "../style/Notificacion.css"; 

export const Notificacion = ({ message, onClose }) => {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose} className="close-btn">x</button>
    </div>
  );
};

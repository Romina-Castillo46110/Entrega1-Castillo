
import React from "react";
import "../style/Notificacion.css"; // Estilos de la notificación

export const Notificacion = ({ message, onClose }) => {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose} className="close-btn">x</button>
    </div>
  );
};

import React from "react";
import Card from "./Card";

export default function Cards(personajes) {
  return (
    <div className="container">
      {personajes.length > 0 ? (
        personajes.map((e) => (
          <div key={e.id} className="cont">
            <Card name={e.name} species={e.species} image={e.image} />
          </div>
        ))
      ) : (
        <h2>No hay personajes para mostrar</h2>
      )}
    </div>
  );
}

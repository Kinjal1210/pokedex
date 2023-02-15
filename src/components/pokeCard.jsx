import { useEffect, useState } from "react";

export function PokeCard({
  pokeName,
  pokeNum, 
  pokeType,
  pokeWeak = [],
  pokeImg = "",
}) {
  return (
            //adds a classname based on the first pokeType to assign card color in CSS
        <li className={"pokemon-tile" + " " + `${pokeType[0]}`}> 
        
          <p>#{pokeNum}</p>
          <img className="pokemon-img animate"src={pokeImg} alt={pokeName} />
          <p>Name:</p>
      
          <p className="poke-name"><strong>{pokeName}</strong></p>
        
          <p>
            <strong>Type:</strong>
          </p>
          <p className="p-span-wrap">
            {pokeType.map((e, index) => {
              return <span className={e} key={index}>{e} </span>;
            })}
          </p>
          <p>
            <strong>Weaknesses:</strong>
          </p>
          <p className="p-span-wrap">
            {pokeWeak.map((e, index) => {
              return <span className={e} key={index}>{e} </span>;
            })}
          </p>
        
        </li>
      
  );
}

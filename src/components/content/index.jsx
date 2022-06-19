import { useState } from 'react';

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

import { ItemLists } from "../sw-item-lists"
import { ItemSpisok } from '../sw-item-spisok';

export const Content = ({ handleFavCharacter }) => {
  const [selector, setSelector] = useState("Characters");

  const handleSelectorChange = (event) => {
    setSelector(event.target.value);
  }

  return (
    <div className="content-layout">
      <select
        value={selector}
        placeholder="Choose your path"
        className="select-item"
        onChange={handleSelectorChange}
      // Another option:
      // onChange={(event) => setSelector(event.target.value)}
      >
        <option>Characters</option>
        <option>Planets</option>
        <option>Starships</option>
      </select>

      {selector === "Characters" &&
        swCharacters.map((character) => (
          <ItemLists
            key={character.name}
            item={character}
            type="character"
          >
            <ItemSpisok>Gender: {character.gender}</ItemSpisok>
            <ItemSpisok>Birthday: {character.birth_year}</ItemSpisok>
          </ItemLists>

        ))
      }

      {selector === "Planets" &&
        swPlanets.map((planet) => (
          <ItemLists
            key={planet.name}
            item={planet}
            type="planet"
          >
            <ItemSpisok>Rotation period: {planet.rotation_period}</ItemSpisok>
            <ItemSpisok>Orbital period: {planet.orbital_period}</ItemSpisok>
            <ItemSpisok>Diameter: {planet.diameter}</ItemSpisok>
            <ItemSpisok>Climate: {planet.climate}</ItemSpisok>
            <ItemSpisok>Gravity: {planet.gravity}</ItemSpisok>
            <ItemSpisok>Terrain: {planet.terrain}</ItemSpisok>
            <ItemSpisok>Surface_water: {planet.surface_water}</ItemSpisok>
            <ItemSpisok>Population: {planet.population}</ItemSpisok>
            <ItemSpisok>Created: {planet.created}</ItemSpisok>
            <ItemSpisok>Edited: {planet.edited}</ItemSpisok>
          </ItemLists>
        ))
      }

      {selector === "Starships" &&
        swStarships.map((starship) => (
          <ItemLists
            key={starship.name}
            item={starship}
            type="planet"
          >
            <ItemSpisok>Model: {starship.model}</ItemSpisok>
            <ItemSpisok>Manufacturer: {starship.manufacturer}</ItemSpisok>
            <ItemSpisok>Cost in credits: {starship.cost_in_credits}</ItemSpisok>
            <ItemSpisok>Length: {starship.length}</ItemSpisok>
            <ItemSpisok>Max atmosphering speed: {starship.max_atmosphering_speed}</ItemSpisok>
            <ItemSpisok>Crew: {starship.crew}</ItemSpisok>
            <ItemSpisok>Passengers: {starship.passengers}</ItemSpisok>
            <ItemSpisok>Cargo capacity: {starship.cargo_capacity}</ItemSpisok>
            <ItemSpisok>Consumables: {starship.consumables}</ItemSpisok>
            <ItemSpisok>Hyperdrive_rating: {starship.hyperdrive_rating}</ItemSpisok>
            <ItemSpisok>MGLT: {starship.MGLT}</ItemSpisok>
            <ItemSpisok>Starship class: {starship.starship_class}</ItemSpisok>
          </ItemLists>
        ))
      }

    </div >
  )
}
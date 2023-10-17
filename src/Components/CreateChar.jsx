import React from "react";
import { useState } from "react";

const CreateC = () => {
  const [character, setCharacter] = useState({});

  const handleInputChange = (fieldName, value) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [fieldName]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Character:", character);
  };

  return (
    <div>
      <h1>Create Your DnD Character</h1>
      <form onSubmit={handleSubmit}>
        {/* Example form questions */}
        <label>
          Character Name:
          <input
            type="text"
            value={character.name || ""}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </label>
        <br />
        <label>
          Character Class:
          <select
            value={character.characterClass || ""}
            onChange={(e) =>
              handleInputChange("characterClass", e.target.value)
            }
          >
            <option value="">Select Class</option>
            <option value="Wizard">Wizard</option>
            <option value="Fighter">Fighter</option>
            <option value="Rogue">Rogue</option>
            <option value="Bard">Bard</option>
            <option value="Barbarian">Barbarian</option>
            <option value="Cleric">Cleric</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Druid">Druid</option>
            <option value="Warlock">Warlock</option>
          </select>
        </label>
        <br />
        <label>
          Character Race:
          <select
            value={character.race || ""}
            onChange={(e) => handleInputChange("race", e.target.value)}
          >
            <option value="">Select Race</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Half-Elf">Half-Elf</option>
            <option value="Teifling">Teifling</option>
            <option value="Halfling">Halfling</option>
            <option value="Gnome">Gnome</option>
            <option value="Half-Orc">Half=Orc</option>
          </select>
        </label>
        <br />
        {/* Adding More Soon */}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateC;

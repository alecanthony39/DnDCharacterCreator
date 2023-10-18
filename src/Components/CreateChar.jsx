import React from "react";
import { useState } from "react";

const CreateC = () => {
  const [character, setCharacter] = useState({});
  const [stats, setStats] = useState({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });
  const [pointsSpent, setPointsSpent] = useState(0);
  const [totalPointsLimit, setTotalPointsLimit] = useState(27);

  const handleStatChange = (statName, value) => {
    const initialPoints = 10;
    const newStats = {
      ...stats,
      [statName]: value,
    };

    const newPointsSpent = Object.values(newStats).reduce(
      (total, statValue) => total + Math.max(statValue - initialPoints, 0),
      0
    );

    const isValidValue = value >= 8 && value <= 20;
    const isValidChange = newPointsSpent <= totalPointsLimit;

    console.log("isValidValue", isValidValue);
    console.log("isValidChange", isValidChange);

    if (isValidValue && isValidChange) {
      setStats(newStats);
      setPointsSpent(newPointsSpent);
      setTotalPointsLimit(27 - newPointsSpent);
    }
  };

  const renderStatInputs = () => {
    return Object.keys(stats).map((statName) => (
      <div key={statName}>
        <label>
          {statName.charAt(0).toUpperCase() + statName.slice(1)}:
          <input
            type="number"
            value={stats[statName]}
            onChange={(e) =>
              handleStatChange(statName, parseInt(e.target.value))
            }
          />
        </label>
      </div>
    ));
  };

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
            value={character.class || ""}
            onChange={(e) => handleInputChange("class", e.target.value)}
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
        <label>
          Character Background
          <select
            value={character.background || ""}
            onChange={(e) => handleInputChange("background", e.target.value)}
          >
            <option value="">Select Background</option>
            <option value="Acolyte">Acolyte</option>
            <option value="Charlatan">Charlatan</option>
            <option value="Criminal">Criminal</option>
            <option value="Entertainer">Entertainer</option>
            <option value="Folk Hero">Folk Hero</option>
            <option value="Guild Artisan">Guild Artisan</option>
            <option value="Hermit">Hermit</option>
            <option value="Noble">Noble</option>
            <option value="Outlander">Outlander</option>
            <option value="Sage">Sage</option>
            <option value="Sailor">Sailor</option>
            <option value="Soldier">Soldier</option>
            <option value="Urchin">Urchin</option>
          </select>
        </label>
        <br />

        <label>
          {" "}
          Alignment
          <select
            value={character.alignment}
            onChange={(e) => handleInputChange("alignment", e.target.value)}
          >
            <option value="">Select Alignment</option>
            <option value="Lawful Good">Lawful Good</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Lawful Neutral">Lawful Neutral</option>
            <option value="True Neutral">True Neutral</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Chaotic Evil">Chaotic Evil</option>
          </select>
        </label>
        <br />
        <h1>Points Left:{totalPointsLimit}</h1>
        {renderStatInputs()}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateC;

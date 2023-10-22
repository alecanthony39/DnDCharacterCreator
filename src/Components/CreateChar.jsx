import React from "react";
import { useState, useEffect } from "react";

const CreateC = () => {
  const [character, setCharacter] = useState({});
  const [stats, setStats] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });

  const randomizeStat = (statName) => {
    const randomValue = Math.floor(Math.random() * 20) + 1;

    setStats((prevStats) => {
      const updatedStats = { ...prevStats, [statName]: randomValue };
      return updatedStats;
    });
  };

  const chooseStartItems = () => {
    let startItems = [];

    switch (character.background) {
      case "Acolyte":
        startItems = [
          "Holy Symbol",
          "Prayer Book",
          "5 Sticks of Incense",
          "Vestments",
          "Common Clothes",
          "15 Gold Pieces",
        ];
        break;
      case "Charlatan":
        startItems = [
          "Set of Fine Clothes",
          "A disguise kit",
          "Charlatan Tools",
          "15 Gold Pieces",
        ];
        break;

      case "Criminal":
        startItems = [
          "A Crowbar",
          "Set of Dark Common Clothes",
          "Thieves' Tools",
          "15 Gold Pieces",
        ];
        break;

      case "Entertainer":
        startItems = [
          "Musical Instrument",
          "Favor of an Admirer",
          "Costume",
          "15 Gold Pieces",
        ];
        break;

      case "Folk Hero":
        startItems = [
          "Artisan's Tools",
          "Shovel",
          "Iron Pot",
          "Common Clothes",
          "10 Gold Pieces",
        ];
        break;

      case "Guild Artisan":
        startItems = [
          "Artisan's Tools",
          "Letter Of Introduction From Guild",
          "Traveler's Clothes",
          "15 Gold Pieces",
        ];
        break;

      case "Hermit":
        startItems = [
          "Scroll Case Full of Notes",
          "Winter Blanket",
          "Common Clothes",
          "Herbalism Kit",
          "15 Gold Pieces",
        ];
        break;

      case "Noble":
        startItems = [
          "Fine Clothes",
          "Signet Ring",
          "Scroll Of Pedigree",
          "25 Gold Pieces",
        ];
        break;

      case "Outlander":
        startItems = [
          "Staff",
          "Hunting Trap",
          "Trophy From an Animal You Killed",
          "10 Gold Pieces",
        ];
        break;

      case "Sage":
        startItems = [
          "Black Ink",
          "Quill",
          "Small Knife",
          "Mysterious Letter",
          "Common Clothes",
          "10 Gold Pieces",
        ];
        break;
      case "Sailor":
        startItems = ["Club", "Silk Rope", "Common Clothes", "10 Gold Pieces"];
        break;
      case "Soldier":
        startItems = [
          "Insignia of Rank",
          "Trophy From Fallen Enemy",
          "Deck of Cards",
          "Common Clothes",
          "10 Gold Pieces",
        ];
        break;

      case "Urchin":
        startItems = [
          "Small Knife",
          "Map of City You Grew Up In",
          "Pet Mouse",
          "Token to Remember Your Parents",
          "Common Clothes",
          "10 Gold Pieces",
        ];
        break;
      /* Currently Displaying wrong starting items and need the right backgrounds that I already have */
      default:
        startItems = [];
    }

    character.startItems = startItems;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      startItems: startItems,
    }));
  };

  useEffect(() => {
    if (character.background) {
      chooseStartItems();
    }
  }, [character.background]);

  const renderStatInputs = () => {
    return Object.keys(stats).map((statName) => (
      <div key={statName}>
        <label>
          {statName.charAt(0).toUpperCase() + statName.slice(1)}:
          <div>{stats[statName]}</div>
          <button type="button" onClick={() => randomizeStat(statName)}>
            Roll
          </button>
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
    character.stats = stats;

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
          {character.startItems && (
            <div>
              <h2>Starting Items:</h2>
              <ul>
                {character.startItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </label>
        <br />
        <label>
          Character BackStory
          <input
            type="text"
            value={character.backstory || ""}
            onChange={(e) => handleInputChange("backstory", e.target.value)}
          />
        </label>

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

        <h1>Roll your Stats</h1>
        {renderStatInputs()}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateC;

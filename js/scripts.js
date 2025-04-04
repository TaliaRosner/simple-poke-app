// Array of Pokémon with name and height
 
let pokemonList = [
  {
    name: "Lunala",
    height: 13,
    types: ["psychic", "ghost"]
  },
  {
    name: "Nihilego",
    height: 4,
    types: ["rock", "poison"]
  },
  {
    name: "Buzzwole",
    height: 8,
    types: ["bug", "fighting"]
  }
];

// Loop through each Pokémon in the array

for (let i = 0; i < pokemonList.length; i++) {
  let pokemon = pokemonList[i];
  let output = pokemon.name + " (height: " + pokemon.height + ")";

// Check if the Pokémon is super tall

if (pokemon.height > 10) {
  output += " - Wow, that’s big!";
}

// Display the Pokémon on the page

if (pokemon.height > 10) {
  output += ' <span class="wow-tag">- Wow, that’s big!</span>';
}

document.write("<p>" + output + "</p>");
}
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

pokemonList.forEach(function(pokemon) {
  let output = pokemon.name + " (height: " + pokemon.height + ")";


  // Add the styled "Wow, that's big!" if height > 10

  if (pokemon.height > 10) {
    output += ' <span class="wow-tag">- Wow, that’s big!</span>';
  }

  document.write("<p>" + output + "</p>");
});
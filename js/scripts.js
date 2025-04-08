// Array of Pokémon with name and height

let pokemonRepository = (function () {
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

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      pokemon !== null &&
      Object.keys(pokemon).length === 3 &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Invalid Pokémon! Not added.");
    }
  }


  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();


// Loop through each Pokémon in the array

pokemonRepository.getAll().forEach(function (pokemon) {
  let output = pokemon.name + " (height: " + pokemon.height + ")";


  // Add the styled "Wow, that's big!" if height > 10

  if (pokemon.height > 10) {
    output += ' <span class="wow-tag">- Wow, that’s big!</span>';
  }

  document.write("<p>" + output + "</p>");
});
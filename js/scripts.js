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

  function findByName(name) {
    return pokemonList.filter(function (pokemon) {
      return pokemon.name.toLowerCase() === name.toLowerCase();
    });
  }

  return {
    add: add,
    getAll: getAll,
    findByName: findByName
  };
})();


// Loop through each Pokémon in the array
pokemonRepository.getAll().forEach(function (pokemon) {
  let pokemonListElement = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');

  button.innerText = pokemon.name;

  // Add the styled "Wow, that's big!" if height > 10
  if (pokemon.height > 10) {
    button.innerText += ' – Wow, that’s big!';
    button.classList.add('wow-tag');
  }

  button.classList.add('pokemon-button');
  listItem.appendChild(button);
  pokemonListElement.appendChild(listItem);
});

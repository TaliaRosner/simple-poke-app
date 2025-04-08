// Array of Pokémon with name and height
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Lunala",
      height: 13,
      types: ["psychic", "ghost"],
    },
    {
      name: "Nihilego",
      height: 4,
      types: ["rock", "poison"],
    },
    {
      name: "Buzzwole",
      height: 8,
      types: ["bug", "fighting"],
    },
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

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addClickListener(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");

    button.innerText = pokemon.name;

    if (pokemon.height > 10) {
      button.innerText += " – Wow, that’s big!";
      button.classList.add("wow-tag");
    }

    button.classList.add("pokemon-button");
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);

    addClickListener(button, pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    findByName: findByName,
    addListItem: addListItem,
  };
})();

// Loop through each Pokémon in the array
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

// Array of Pokémon with name and height
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      pokemon !== null &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Invalid Pokémon! Not added.");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");

    button.innerText = pokemon.name;
    button.classList.add("btn", "btn-primary", "btn-block", "list-group-item");
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        hideLoadingMessage();
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function loadDetails(item) {
    showLoadingMessage();
    return fetch(item.detailsUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        hideLoadingMessage();
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modal = document.querySelector(".modal");
    let modalTitle = document.querySelector(".modal-title");
    let modalImage = document.querySelector(".modal-img");
    let modalHeight = document.querySelector(".modal-height");
    let modalTypes = document.querySelector(".modal-types");

    modalTitle.innerText = pokemon.name;
    modalImage.src = pokemon.imageUrl;
    modalImage.alt = pokemon.name;
    modalHeight.innerText = `Height: ${pokemon.height}`;
    modalTypes.innerText = `Types: ${pokemon.types
      .map((type) => type.type.name)
      .join(", ")}`;

    modal.classList.remove("hidden");
  }

  function hideModal() {
    let modal = document.querySelector(".modal");
    modal.classList.add("hidden");
  }

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hideModal();
    }
  });

  document.querySelector(".modal-close").addEventListener("click", hideModal);

  document.querySelector(".modal").addEventListener("click", function (event) {
    if (event.target === document.querySelector(".modal")) {
      hideModal();
    }
  });

  function showLoadingMessage() {
    let loadingMessage = document.createElement("p");
    loadingMessage.innerText = "Loading...";
    loadingMessage.classList.add("loading-message");
    document.body.appendChild(loadingMessage);
  }

  function hideLoadingMessage() {
    let message = document.querySelector(".loading-message");
    if (message) {
      message.remove();
    }
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner = function (otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

const petList = [];

const petNameInput = document.getElementById("cuccioloName");
const yourNameInput = document.getElementById("yourName");
const cuccioloSpeciesInput = document.getElementById("cuccioloSpecies");
const cuccioloBreedInput = document.getElementById("cuccioloBreed");
const formElement = document.getElementById("pet-form");
const petListElement = document.getElementById("pet-list");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const nuovoPet = new Pet(
    petNameInput.value,
    yourNameInput.value,
    cuccioloSpeciesInput.value,
    cuccioloBreedInput.value
  );
  petList.push(nuovoPet);
  mostraPet(nuovoPet);
  formElement.reset();

  if (petList.length >= 2) {
    console.log(
      petList[petList.length - 2].sameOwner(petList[petList.length - 1])
    );
  }
});

function mostraPet(pet) {
  const li = document.createElement("li");
  li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Padrone: ${pet.ownerName}`;
  petListElement.appendChild(li);
}

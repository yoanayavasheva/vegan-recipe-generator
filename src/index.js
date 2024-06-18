function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Vegan Jambalaya",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

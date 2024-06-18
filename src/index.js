function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: null,
  });

  let messageElement = document.querySelector("#good-luck-message");
  messageElement.innerHTML = "Good luck!🧑‍🍳";
}

function generateRecipe(event) {
  event.preventDefault();
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "Generating a recipe for you, please wait...";

  let instructionsInput = document.querySelector("#user-instructions");

  //API URL
  let apiKey = "0t4b903dofe6fcc186a3f4313271559b";
  let context =
    "You are an AI that is proficient in vegan cookery. Your mission is to generate vegan recipes. Your answer must be in basic HTML and follow this format: <h1>Title of Recipe</h1> a section titled <h2>Ingredients:</h2> followed by bullet points of the reaquired ingredients for the recipe, and a section titled <h2>Instructions:</h2> followed by divided steps in creating the dish. Make sure to follow the user instructions. Please be polite and only generate the recipe.";
  let prompt = `User instructions are: Generate a vegan recipe from a ${instructionsInput.value} cuisine.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

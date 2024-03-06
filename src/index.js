function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "382o0ac2c14btd9435906fb13df381eb";

  let prompt = `User instructions: generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  //make a call to the api
  console.log("generating poem");
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

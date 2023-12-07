function displayQuote(response) {
  let quoteElement = document.querySelector("#quote");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1.2,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let quoteTopicInput = document.querySelector("#quote-topic");

  let apiKey = "aof4801f27bc8e543a47a5fc535tf9b8";
  let prompt = `User instructions: Generate a quote about ${quoteTopicInput.value}`;
  let context =
    "You are a motivational quote writer. You write very inspiraring, happy and motivational quotes that brighten the readers day. Your mission is to generate a quote in basic HTML. Make sure to use the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${quoteTopicInput.value}</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-form-generator");
quoteFormElement.addEventListener("submit", generateQuote);

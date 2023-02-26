async function getJoke() {
  let url = 'https://official-joke-api.appspot.com/jokes/random';
  try {
    let response = await fetch(url);
    console.log('Response object: ', response);
    let jsonObj = await response.json();
    console.log('JSON object: ', jsonObj);
    return jsonObj;
  } catch (error) {
    console.log(error);
  }
}


async function renderJoke() {
  let joke = await getJoke();
  let jokeSetup = document.getElementById("jokeSetup");
  let jokePunchline = document.getElementById("jokePunchline");

  jokeSetup.textContent = joke.setup;

  // Wait 3 seconds before delivering the punchline
  setTimeout(() => { jokePunchline.textContent = joke.punchline; }, 3000);
}


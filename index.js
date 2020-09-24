async function getRandomName() {
  const url =
    "https://namey.muffinlabs.com/name.json?count=1&with_surname=true&frequency=common";
  const response = await fetch(url);
  const names = await response.json();
  // TODO: finish this function (see the README for details)

}

async function setName() {
  try {
    const randomName = await getRandomName();
    // TODO: finish this function (see the README for details)
  } catch (err) {
    console.error(err);
  }
}

words.onsubmit = function generateBio(event) {
  // Since we're not actually submitting the form to a backend, we need to call preventDefault
  // more about this function: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  event.preventDefault();

  console.log("Generating bio...");

  // TODO: write the rest of the function (see the README for details)
  let arrOfInputs = document.querySelectorAll('input')
  let arrOfSpans = document.querySelectorAll('span')

  console.log(arrOfInputs)
  for(let i = 0; i < arrOfInputs.length; i++) {
    arrOfSpans[i].innerHTML = arrOfInputs[i].value
  }
  console.log("Done!");
};

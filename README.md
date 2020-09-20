# Who am I?

This is a little game like [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs), which you may have played as a kid. When you open the index.html page, you'll see a random picture from [thispersondoesnotexist.com](https://thispersondoesnotexist.com/), a form with a bunch of inputs, a big button, and a biography with a bunch of placeholder words in bold. You're going to finish wiring this up with JavaScript! When you're done, the player will be able to fill out the form, click the button, and see the bio with the words they entered + a random name.

This assignment will test your ability to:

- read from the DOM
- manipulate DOM elements
- write to the DOM
- work with arrays

## 1. Get started

- fork this repo
- clone your fork to your local development environment

## 2. Generate the person's bio

Get the values the user entered in the `input` elements and use them to update the output `span` elements.

Hints:

- [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

## 3. Get a random name for the person

- Finish the `getRandomName` function: `names` is an array with one entry. Return the value of that single entry to complete this function.
- Finish the `setName` function: use the `randomName` that was generated to insert the name in the `h2` with id `#name`

Hints:

- review the arrays lesson
- [element.insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

## 4. Polish the experience

- Make all the input fields required so the user can't submit the form without filling it out.
- When the user clicks the button, the input fields should go away and the bio should show. The bio shouldn't be visible when the page first loads.

Hints:

- In the HTML, add the `hide` class to the `#bio` div. This will hide that div by default.
- In the JS, at the end of the `generateBio` function, add the `hide` class to the `#words` form, and remove the `hide` class from the `#bio` div.
- [element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

## 5. Submission

- Deploy your site via surge.sh
- In Google Classroom, submit a Google Doc with a link to your site and a link to your repo

**Note:** you do not need to do a pull request against this repo for this project.

## Bonus Challenge

Using separate ids for each `input` and output `span` (e.g. `word-01`, `output-word-01`) is very explicit and understandable, but it also feels a bit verbose. We could use arrays instead:

- use [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) to get an array of all of the inputs, and another array of all of the outputs (hint: use the class name instead of the id)
- use a [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) to assign the values from the inputs to the outputs
- remove all the ids that you don't need anymore from the HTML
- profit 💸

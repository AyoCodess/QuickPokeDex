# Eliga Services Pokémon full-stack challenge

Welcome to the Eliga Services Pokémon full-stack challenge!

The aim of this code challenge is to test your full-stack capabilities in a fun, interesting way.

There's no time-limit on this task, and we won't be looking at git commits with time in mind. Everyone's busy, and we appreciate you taking the time to complete our task and fitting it around your other commitments.

The app is bootstrapped with the NextJS starter pack. You are free to use whichever packages or plugins you wish for things like styling, data-fetching, state-management etc.

## Overview

We'd like you to build an application that displays the first 151 Pokémon. Ideally, you'd be able to select a Pokémon and view its' image, description and stats. The layout, styling and user-features are up to you. This challenge is designed for you to show off and impress us with your execution, so have fun with it! You're free to incorporate as many flourishes (animation, etc), features (search, etc), and quality of life elements (testing, responsiveness), or as little as you wish.

### Notes
- You will need to use git for this challenge.
- Please commit only once for each step in the instructions.
- Do not bundle multiple steps in each commit.
- Please name each commit with the name of the appropriate stage, ie "Step 1".

## Instructions

### Preparing
Clone this repo down to your local machine and run `npm install` to install the project dependencies. To start the dev server, run `npm run dev` and it will fire up at `localhost:3000`

### Step 1
- In `/pages/api.js` create a middleware function to receive the first 151 Pokémon from https://pokeapi.co/.

- The API returns a little too much data for each Pokémon than we'd like. We're only interested in the 'name', 'id', 'stats' and 'types' fields. Modify your middleware function to remove all other fields on each Pokémon and serve the reduced data to your application.

### Step 2
- Create a front-end to display all Pokémon on the webpage using the reduced data from your API function. You are free to use any layout you like.

- You'll notice that the API doesn't return an image for each Pokémon. Make sure you use the relevant image for each Pokémon from the `/public/sprites` directory.

### Step 3
Add some interactivity. Clicking on a Pokémon should show all the data for the selected Pokémon. You can display this however you like (modal, tab, etc).

### Step 4
Incorporate a search function to the application so someone can find a Pokémon quickly by typing its name into a search box.

### Step 5
Extend the search functionality with filters/sorting:

- Users should be able to filter by type(s), ie `fire`, `water`, `grass` etc.

- Users should be able to sort Pokémon by stats such as `attack`, `defense` etc.

## Submitting your work

To submit the challenge, either upload it to your Github and provide us access (preferred) or zip up the project (minus the node modules) and return it back to us via email.

# QuickPokeDex

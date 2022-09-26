# Eliga Services Pokémon full-stack challenge

## All 5 steps have been completed.

## Live Link:

## Extra features

1. You can `GET` the total amount of pokemon in existence by setting the query parameter `total` in the API get request. In the app the `total` query param has been set too `200` as an example. There are 905 pokemon in existence.

## Considerations

1. Descriptive API error handling has already been set up and can be displayed in the app via a toast.
2. Add Pokemon moves and display them in a modal.

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

# QuickPokeDex

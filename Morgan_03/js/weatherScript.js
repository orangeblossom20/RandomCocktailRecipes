// the weather API 

//const url = "https://api.weather.gov/gridpoints/MQT/114,96/";
//const url = "https://api.weather.gov/gridpoints/GRR/82,39/forecast"
const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

fetchRemoteData(url)

// 1. Adjust buildPage to match the cocktail API fields
function buildPage(jsonData) {
    console.log(jsonData);
  
    // Access the first drink object in the "drinks" array
    const drink = jsonData.drinks[0];
  
    // Construct the HTML you want to display.
    // Feel free to include more fields from the cocktail JSON
    // such as strIngredient1, strIngredient2, etc.
    const newHTML = `
      <h2>Cocktail: ${drink.strDrink}</h2>
      <p>Category: ${drink.strCategory}</p>
      <p>Glass: ${drink.strGlass}</p>
      <p>Instructions: ${drink.strInstructions}</p>
      <img src="${drink.strDrinkThumb}" alt="Cocktail Image" style="max-width: 200px; height: auto;" />
    `;
  
    // Update the container’s content
    document.querySelector(".container").innerHTML = newHTML;
  }
  
  // 2. Fetch data from the cocktail API
  async function fetchRemoteData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`An error has occurred: ${response.status}`);
    }
    const jsonResponse = await response.json();
    buildPage(jsonResponse);
  }
  
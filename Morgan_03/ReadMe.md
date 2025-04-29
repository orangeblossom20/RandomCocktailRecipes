Due to my success of the original example file when trying to display weather data in the console, 
I decided not to create a new file and instead use the same file.

After some research, I found a website that provides a free API key for cocktail recipe data.
https://www.thecocktaildb.com/api.php?ref=apilist.fun

In order to swap everything over to the cocktail API, I had to first change the URL to the cocktail API URL.
This cause many errors as the data was not being displayed in the console. 
This was due to the fact that the cocktail API data had a different structure and arrays.

This led to a tedious process of changing each variable, array, and object. 
I tried my best to change as little as possible to still let the original code work.
After a lot of trial and error, I sought help from the Copilot AI and ChatGPT AI to help me with the code.
You can see their assistive comments within the file.

Here is the original JS code:
        const url = "https://api.weather.gov/gridpoints/GRR/82,39/forecast"
        fetchRemoteData(url)
        function buildPage(jsonData) {
            console.log(jsonData);
            let forecast = jsonData.properties.periods[0].detailedForecast;
            console.log(forecast);

            const newHTML = `
                <h2>Weather</h2>
                <p>${forecast}</p>
                <p>Temperature: ${jsonData.properties.periods[0].temperature}F</p>
                <p>Wind: ${jsonData.properties.periods[0].windSpeed}</p>
            `;
            document.querySelector(".container").innerHTML = newHTML;
        }
        async function fetchRemoteData(location) {
            const response = await fetch(location)
            if (!response.ok) {
                throw new Error(`An error has occured: ${response.status}`)
            }
            const jsonResponse = await response.json()
            buildPage(jsonResponse)	
        }


Here is the final JS code:
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        fetchRemoteData(url)
        function buildPage(jsonData) {
            console.log(jsonData);
            const drink = jsonData.drinks[0];

            const newHTML = `
                <h2>Cocktail: ${drink.strDrink}</h2>
                <p>Category: ${drink.strCategory}</p>
                <p>Glass: ${drink.strGlass}</p>
                <p>Instructions: ${drink.strInstructions}</p>
                <img src="${drink.strDrinkThumb}" alt="Cocktail Image" style="max-width: 200px; height: auto;" />
            `;
            document.querySelector(".container").innerHTML = newHTML;
        }
        async function fetchRemoteData(url) {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`An error has occurred: ${response.status}`);
            }
            const jsonResponse = await response.json();
            buildPage(jsonResponse);
        }


And finally, I used lessons from W3Schools on CSS as a refrsher in order to stylize the web application in a brand relevant way.
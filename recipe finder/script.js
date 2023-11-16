$(document).ready(function() {
    // Wait for the document to be fully loaded before executing the JavaScript code
    $('#search-btn').click(function() {
      // Attach a click event listener to the search button
      let searchText = $('#search').val();
      // Get the search term from the input field
      $.ajax({
        // Make an AJAX request to the MealDB API
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`,
        // Set the API URL with the search term
        type: 'GET',
        // Specify the request type as GET
        dataType: 'json',
        // Expect the response in JSON format
        success: function(data) {
          // Handle successful response from the API
          let output = '';
          // Initialize an empty string to hold the output HTML
          let meals = data.meals;
          // Extract the meals data from the response
          for (let i in meals) {
            // Loop through each meal in the data
            let meal = meals[i];
            // Get the current meal object
            output += `
              <h2>${meal.strMeal}</h2>
              <div class="meal">              
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">             
                <div class="content">
                  <p class="ing">Ingredients:</p>                 
                  <p>${meal.strInstructions}</p>
                </div>
              </div>
            `;
            // Concatenate HTML for each meal
          }
          $('#results').html(output);
          // Replace the results container with the generated HTML
        },
        error: function() {
          // Handle error response from the API
          alert('Error retrieving data');
          // Show an alert message if there's an error
        }
      });
    });
  });
  
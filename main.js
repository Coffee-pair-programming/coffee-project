"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>'; // should not be vis in html
    html += '<div>' + '<h1>' + coffee.name + '</h1>' + '</div>';
    html += '<div>' + '<p>' + coffee.roast + '</p>' + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
var allRoasts = document.querySelector('#all');
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#coffee-search');



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var inputValue = coffeeSelection.value;
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    console.log(coffees.name);
    coffees.forEach(function(coffee) {


        if (coffee.name.includes(inputValue) && coffee.roast === selectedRoast) {

            filteredCoffees.push(coffee);
        } else {
            console.log('no coffee');
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}





// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

 coffees.reverse();


tbody.innerHTML = renderCoffees(coffees);


coffeeSelection.addEventListener('keyup', updateCoffees);
submitButton.addEventListener('click', updateCoffees);

// //searching the array for the search input
// function coffeeSearch() {
//     var input = document.getElementById("coffee-search").value;
//     var inputIndex = coffees.indexOf(input);
//
//     if (inputIndex !== -1) {
//         console.log(coffees.name[inputIndex]);
//     }
// };
//


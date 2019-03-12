"use strict";

var countries = [{
    name: "Russia",
    cities: [
        { name: "Moscow", population: 8389200 },
        { name: "St Petersburg", population: 4694000 },
        { name: "Novosibirsk", population: 1398800 },
        { name: "Jekaterinburg", population: 1266300 },
        { name: "Samara", population: 1156100 }]
},
{
    name: "Spain",
    cities: [
        { name: "Madrid", population: 2879052 },
        { name: "Barcelona", population: 1503451 },
        { name: "Valencia", population: 739412 }]
},
{
    name: "United States",
    cities: [
        { name: "New York", population: 8008278 },
        { name: "Los Angeles", population: 3694820 },
        { name: "Chicago", population: 2896016 },
        { name: "Houston", population: 1953631 }]
},
{
    name: "Finland",
    cities: [
        { name: "Helsinki", population: 555474 },
        { name: "Espoo", population: 213271 }]
}];

function getMaxCitiesCountry(countries) {
    return countries.reduce(function (result, current) { return result.cities.length > current.cities.length ? result : current });
}

var countryWithMaxCities = getMaxCitiesCountry(countries);
console.log(`\nСтрана с наибольшим количеством городов: ${countryWithMaxCities.name} - ${countryWithMaxCities.cities.length}`);

function getPopulationInCountries(countries) {

    var populations = {};
    countries.forEach(country => {
        populations[country.name] = country.cities.reduce(function (result, current) {
            return result + current.population;
        }, 0);
    });

    return populations;
}

console.log("\nНаселение стран:");
var populations = getPopulationInCountries(countries);
for (var propName in populations) {
    if (populations.hasOwnProperty(propName)) {
        console.log(`${propName} - ${populations[propName]}`);
    }
}

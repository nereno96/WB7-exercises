"use strict"

let cities = [
    {name: "New York, NY",
    latitude: 40.7128,
    longitude: -74.0060,
    },
    {name: "Los Angeles, CA",
    latitude: 34.0522,
    longitude: -118.2437,
    },
    {name: "Chicago, IL",
    latitude: 41.8781,
    longitude: -87.6298,
    },
    {name: "Philadelphia, PA",
    latitude: 39.9526,
    longitude: -75.1652,
    },
    {name: "Tampa, FL",
    latitude: 27.9506,
    longitude: -82.4572,
    }
];

let cityDropdown = document.getElementById("cityDropdown");

window.onload = function () {
    initCityDropdown();
    cityDropdown.onchange = getWeather;
}

function initCityDropdown () {

    let option = new Option("Select a City", "select");
    cityDropdown.appendChild(option);

    

    for (let city of cities) {
        let option = new Option(city.name, city.name);
        cityDropdown.appendChild(option);
    }
    
}

function getWeather () {
    for (let city of cities){
        
        if (city.name == cityDropdown.value) {
            fetch (`https://api.weather.gov/points/${city.latitude},${city.longitude}`)
            .then(response => response.json())
            .then(data => {
                fetch(data.properties.forecast)
                .then(response => response.json())
                .then(newData => {
                    displayWeather(newData);
                })
            })
        }
        if (cityDropdown.value == "select"){
            document.getElementById("weatherTable").style.display = "none";
        }
        else {
            document.getElementById("weatherTable").style.display = "block";
        }
    }
}

function displayWeather(data) {
    let weatherTableBody = document.getElementById("weatherTableBody")
    clearTable(weatherTableBody);
    for (let period of data.properties.periods) {
        let row = weatherTableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = period.name;
        cell2.innerHTML = period.temperature + " " + period.temperatureUnit;
        cell3.innerHTML = period.windDirection + " " + period.windSpeed;
        cell4.innerHTML = period.shortForecast;
    }
}

function clearTable (table) {
    table.replaceChildren();
}
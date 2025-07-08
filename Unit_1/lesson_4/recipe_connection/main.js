
//Import the 'cities' module which allows lookup of
const city = require("cities");

//use zip_lookup method to get city information for 
var myCity = city.zip_lookup("20016");

//output city info to the console
console.log(myCity);

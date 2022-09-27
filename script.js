console.log("JS file executed");

const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send(null);
request.onload = function(){
    var response = JSON.parse(request.responseText);
    console.log(response);


  
// for (var i=0;i<response.length;i++)
// {
//     console.log(response[i].flag);
//     console.log(response[i].languages);
// }
response.forEach(function(country) {
    console.log(country.name);
    console.log(country.region);
    console.log(country.subregion);
    console.log(country.population);
});

}
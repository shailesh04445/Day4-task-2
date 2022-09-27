console.log("JS file executed");

const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send(null);
function printcountry(country){
    console.log(country.flag);
    
}
request.onload = function(){
    var response = JSON.parse(request.responseText);
    console.log(response);



for (var i=0;i<response.length;i++)

response.forEach(function(country) {
    console.log(country.flag);
});

}

     
  //Create Request
var request = new XMLHttpRequest();

//REQUEST CONNECTION
request.open('GET', 'https://restcountries.com/v2/all?access_key=c86e4903570ffb027a0d0081bf0d25c5')

//Sending Request
request.send();

request.onload=function(){
    var countryData=JSON.parse(this.responseText);
    for(let country of countryData){
    console.log(country.flag);
    } 
}


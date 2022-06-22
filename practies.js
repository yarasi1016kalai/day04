
  


     var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){

    var countrydata = JSON.parse(this.responseText)
    for (let key of countrydata)
     {console.log(key.name)
     console.log(key.region)
     console.log(key.subregion)
     console.log(key.population)
     console.log(" ")
    }
}
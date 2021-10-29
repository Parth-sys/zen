
//xmlhttp resquest and scope 
//task1  Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//task2 Use the same rest countries and print all countries name, region, sub region and population







async  function conflag(){
var url=('https://restcountries.com/v3.1/all ');
var data=  await fetch(url);
var res1= await data.json();
 for(var i=0;i<res1.length;i++){
     console.log(res1[i].flags.png)
 }
}

conflag();

 
 async  function all(){
    var url=('https://restcountries.com/v3.1/all ');
    var data=  await fetch(url);
    var res1= await data.json();
    console.log(res1);

    for(var i=0;i<res1.length;i++){
        console.log( "name :" + res1[i].name.common)
        console.log("region :"+ res1[i].region)
        console.log("subregion :" +res1[i].subregion)
        console.log( 'population :' +res1[i].population)

    }
     
}
all();
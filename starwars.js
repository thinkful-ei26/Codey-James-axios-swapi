'use strict';

const axios = require('axios');
const URL = 'https://swapi.co/api/';

const searchTerm = process.argv[2];
//const searchTerm1 = process.memoryUsage();

console.log(searchTerm);

axios.get(`https://swapi.co/api/people/?search=${searchTerm}`)
  .then(function (response) {
    // handle success
    // axios.get()

   const myArray = response.data.results[0];//works

   Promise.all(myArray.films.map(element => axios.get(element)))
   .then(response=>{
     console.log('--Movies--');
     for(let i=0; i < response.length; i++){
        console.log(response[i].data.title);
     }
     console.log('\n');
   });

   Promise.all(myArray.starships.map(element => axios.get(element)))
   .then(response=>{
    console.log('--Starships--');
     for(let i=0; i < response.length; i++){
        console.log(response[i].data.name);
     }
     console.log('\n');
   });

   Promise.all(myArray.vehicles.map(element => axios.get(element)))
   .then(response=>{
    console.log('--Vehicles--');
     for(let i=0; i < response.length; i++){
        console.log(response[i].data.name);
     }
     console.log('\n');
   });

  })
  .catch(function (error) {
    // handle error
    console.log("line 19: ", error);
  });

//   .then(function () {
//     // always executed
//   });

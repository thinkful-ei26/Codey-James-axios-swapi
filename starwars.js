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


   //console.log(response.data.results[0].name);//works
   const myArray = response.data.results[0].films;//works

   Promise.all(myArray.map(element => axios.get(element)))
   .then(response=>{
     for(let i=0; i < response.length; i++){
        console.log("i= ", i, " space " , response[i].data.title);
     }
   });
   
  })
  .catch(function (error) {
    // handle error
    console.log("line 19: ", error);
  });
//   .then(function () {
//     // always executed
//   });

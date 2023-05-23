

// let word1 =  "shubham";
// let word2 = "More";

// const fullname = word1 + " " + word2;

//template literals
// const name = `${word1} 
// ${word2}`;
// console.log(fullname);
// console.log(name);


//object destructing

// const student = {
//     name: "kyle",
//     age: 24,
//     projects: {
//         diceGame: "Two player dice game using javascript"
//     }
// }

// const {name, age, projects: {diceGame}} = student;

// console.log(`the stdent ${name} of ${age} is working on project of ${diceGame}`);



// function addressMaker(address){
//     const {city, state} = address;
//     const newAddress = {
//         city,
//         state
//     };

//     console.log(`${city}, ${state}`);
// }

// addressMaker({city: "pune", state: "maharashtra"});


// const student = {
//     name: "shubham",
//     age: 24,
//     class: "BTech",
//     college: {
//         clgName: "jspm rscoe",
//         address: {
//             city: "pune",
//             state: "maharashtra"
//         }
//     }
// };

// const {name, college:{clgName}, college: {address: {city}}} = student;

// console.log(`this is ${name} in ${clgName} in ${city}`);


// let incomes = [12,45,445,122];
// let total = 0;
// for(income of incomes){
//     total += income;
// }
// console.log(total);

// let name = "shubham dayanand more";
// for( char of name){
//     console.log(char);
// }

//for loop assignment 
// const student = [
//     {name: "john", city: "New York"},
//     {name: "shubham", city: "Pune"},
//     {name: "yash", city: "New Delhi"}
// ]

// for(item of student){    
//         const {name, city} = item;
//         console.log(`${name} lives in ${city}`); 
// }

//spread operator
// let friends = ["yash", "rock", "nano"];

// let personalFriend = friends;

// let personalFriend = [...friends];
// friends.push("doggy");
// console.log(personalFriend);

// let person = {
//     name: "rocky",
//     age: 50,
//     address: "pune"
// }

// let employee = {
//     ...person,
//     salary: 140000
// }

// console.log(employee);

// const shoppingList = ["eggs","milk","butter"];

// const busket = [...shoppingList, "chicken", "biryani"];
// console.log(busket);


//rest operator
// function add(...num){
//     console.log(num);
// }

// add(1,4,8,9);


//arrow function
// function myApp(){
//     return "i am going to eat chicken";
    
// }

// const dinnerMenu = () => {
//     return "i am going for a dinner with friends";
// }

// const menu = (food) => `i am going to eat ${food}`
// console.log(dinnerMenu());
// console.log(myApp());
// console.log(menu('pizza'));


//default parameters
// const leadSinger = (artist = "someone") => {
//     console.log(`${artist} is a grate artist`);
// }

// leadSinger("Chris Martin");

//include()

// let student = [12,45,78,456,879];

// console.log(student.includes(122)); 

//include challage
// const listIngredients = ["flour","sugar","eggs","butter"];

// if (listIngredients.includes("flour")) {
//     console.log("we are going to make a chocolate cake");
// } else {
//     console.log("we can't make a chocolate cake because we are missing the ingreditent chocolate");
// }


//padStart and padEnd

// let example = "Dylan";
// console.log(example.padStart(6, 'a'));
// console.log(example.padEnd(10, "b"));

//classes
// class animals{
//     constructor(type, age){
//         this.type = type,
//         this.age = age
//     }
// }

// let cat = new animals("cat", 23);
// console.log(cat.type);

// class player{
//     constructor(name, country){
//         this.name = name,
//         this.country = country
//     }

//      myfun() {
//         console.log(`${this.name} is live in ${this.country}`);
//     }
// }

// const num = new player("messi", "india");
// console.log(num.myfun());

// class myclass extends player{
//     constructor(name, country, age){
//         super(name, country);
//         this.age = age
//     }

//     fun(){
//         console.log(`${this.name} is live in ${this.country} of age ${this.age}`);
//     }
// }

// const num2 = new myclass("ram", "india", 12);
// console.log(num2.fun());


//promises

// const buyFlightTicket = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const error = false;

//             if (error) {
//                 reject("Sorry your payment was not successful");
//             } else {
//                 resolve("Thank you, your payment was successful");
//             }
//         },3000)
//     })
// }

// buyFlightTicket()
// .then((success)=>{console.log(success)})
// .catch((error) => {console.log(error)});


// Promise challenge

// const userData = new Promise((resolve, reject) => {
//     const error = true;
//     if (error) {
//         reject("500 error");
//     } else {
//         resolve({
//             name: "Dylan",
//             age: 145,
            
//         });
//     }
// });

// userData
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error));


//fetch
// fetch('https://jsonplaceholder.typicode.com/comments/1')
// .then(response => response.json())
// .then(data => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/comments',{
//     method:"POST",
//     body: JSON.stringify({
//         postId: 1,
//         name: 'Dylan',
//         email: 'dylansemail310@gmail.com',
//         body: 'That was dope'
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))

//fetch challenge
// fetch('https://jsonplaceholder.typicode.com/comments/1')
// .then(respose => respose.json())
// .then(data => console.log(data))

//async and await
// const photos = []
// async function photoUpload() {
//     let uploadStatus = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             photos.push("Profile pic");
//             resolve("Photo is uploaded")
//         },3000)
//     })

//     let result = await uploadStatus;
//     console.log(result);
//     console.log(photos.length);
// }

// photoUpload();

// async function getJoke() {
//     const response = await fetch('https://api.chucknorris.io/jokes/random');
//     const data = await response.json();
//     console.log(data);
// }

// getJoke();


//sets in es6

const example = new Set([1,1,1,1,1,2,2,2,3,2,4]);

console.log(example.size);u
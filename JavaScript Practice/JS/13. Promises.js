// JavaScript Nuggets - Promise Example
// .first - after 1s first red;
// .second - after 3s second blue; //4s
// .third - after 2s third green; //6s
// In SEQUENCE !!!!


const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  addColor(1000, '.first', 'red')
  .then(() => addColor(3000, '.second', 'blue'))
  .then(() => addColor(3000, '.third', 'green'))
  .catch(err => console.log(err));
})


function addColor(time, selector, color){
    const element = document.querySelector(selector);
    return new Promise((resolve, reject) => {
        if(element){
          setTimeout(()=>{
            element.style.color = color;
            resolve();
          },5000)
        }
        else{
          reject(`There is no such element: "${selector}"`)
        }
    })
}

//Namaste Javascript Demo
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

const cart = ['shoes','pants','kurta'];
createOrder(cart); // orderId
proceedToPayment(orderId);


createOrder(cart, function(orderId){
  proceedToPayment(orderId, function(paymentInfo){
    showOrderSummary(paymentInfo, function(){
        updateWalletBalance();
    });
  });
})


createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo => updateWalletBalance(paymentInfo));




const promise1 = createOrder(cart);
// {data: undefined}

promise1.then(function(orderId){
  proceedToPayment(orderId);
})

const GITHUB_API = "https://api.github.com/users/akshaymarch7";
const user = fetch(GITHUB_API);


console.log(user);

user.then(function(data){
  console.log(data);
})

function createOrder(cart){
  const pr = new Promise(function(resolve, reject){
    //createOrder
    //validateCart
    //orderId
    if(!validateCart(cart)){
        const err = new Error("Cart is not valid")
        reject(err);
    }
    //logic for createOrder
      const orderId = "12345";
      if(orderId){
        setTimeout(function(){
          resolve(orderId);
        }, 5000)
      }
  })
  return pr;
}




let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in then " + message);
}).catch((message) => {
  console.log("This is in catch" + message);
});

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong ");
      }
    }, 2000);
  });
}

createPost({ title: "Post Three", body: "This is post Three" })
  .then(getPosts)
  .catch((err) => console.log(err));





const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random * 3);
  resolve("Hello World");
  reject("Error");
});
console.log(promise);
promise.then((data) => console.log(data)).catch((err) => console.log(err));


// Promise.all
/* const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Good Bye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values)); */
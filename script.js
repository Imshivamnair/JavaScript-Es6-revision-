/* TOPIC 1ST => Let and Cost
let and const are different,let makes a variable and const make a constant
let and const are similar in few things:-
1.They can be declared at the top of function scope or
block scopes but not with var keyword which can also declare them globally if not.
2.Let and Const both add them self to window object.
3.Both can be used before the declaration of variables but let is better than const
because it will throw an error if you try to reassign value.

example:-
Let a = 12;
a = 56;
console.log(a) -> output = 56;

were as

Const a = 96;
a =57;
console.log(a) -> output = "error";
*/

// =====================================================================================================================================

/* TOPIC 2rd => Promise Object
A JavaScript Promise object contains both the producing code and calls to the consuming code:
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful  },
function(error) { /* code if some error  }
);

*/

// =====================================================================================================================================

/* TOPIC 3rd => Async Syntax
The keyword async before a function makes the function return a promise:
example:-
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
*/

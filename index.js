// Write your solution here!
const cats = ["Milo", "Otis", "Garfield",]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
function destructivelyAppendCat(name){ return cats.splice(3,0,name)}
destructivelyAppendCat(name)

function destructivelyPrependCat(name){return cats.splice(0,0,name)}
destructivelyPrependCat(name)

function destructivelyRemoveLastCat(){return cats.splice(-1,1)}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){return cats.splice(0, 1)}
destructivelyRemoveFirstCat()

function appendCat(name){const newcats = [...cats, name]
        return newcats}
appendCat(name)

function prependCat(name){const newcats = [name, ...cats]
return newcats}
prependCat(name)

function removeLastCat (){const newcats = [...cats.slice(0, cats.length - 1)]
return newcats}
removeLastCat()

function removeFirstCat (){const newcats = [...cats.slice(1), ]
  return newcats}
  removeFirstCat()
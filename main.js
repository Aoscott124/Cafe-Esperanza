var bagelAdd = document.getElementById("bagelAdd");
var bagelRemove = document.getElementById("bagelRemove");
var sconeAdd = document.getElementById("sconeAdd");
var sconeRemove = document.getElementById("sconeRemove");
var soupAdd = document.getElementById("soupAdd");
var soupRemove = document.getElementById("soupRemove");
var sandwichAdd = document.getElementById("sandwichAdd");
var sandwichRemove = document.getElementById("sandwichRemove");
var coffeeAdd = document.getElementById("coffeeAdd");
var coffeeRemove = document.getElementById("coffeeRemove");
var teaAdd = document.getElementById("teaAdd");
var teaRemove = document.getElementById("teaRemove");
var juiceAdd = document.getElementById("juiceAdd");
var juiceRemove = document.getElementById("juiceRemove");
var totalHTML = document.getElementById('totalHTML')

var bagelPrice = 2;
var sconePrice = 1.5;
var soupPrice = 3.5;
var sandwichPrice = 2;
var coffeePrice = 2.5
var teaPrice = 2
var juicePrice = 1

var bagels = 0;
var scones = 0;
var soups = 0;
var sandwiches = 0;
var coffees = 0
var teas = 0
var juices = 0

var total = 0;

bagelAdd.addEventListener('click', function(event) {
  //add 1 bagel
  bagels = bagels + 1;
  total = total + bagelPrice;
  updateTotalHTML()
})

bagelRemove.addEventListener('click', function(event) {
  //remove 1 bagel
  bagels = bagels - 1;
  total = total - bagelPrice;
  updateTotalHTML()
})

sconeAdd.addEventListener('click', function(event) {
  //add 1 scone
  scones = scones + 1;
  total = total + sconePrice;
  updateTotalHTML()
})

sconeRemove.addEventListener('click', function(event) {
  //remove 1 scone
  scones = scones - 1;
  total = total - sconePrice;
  updateTotalHTML()
})

soupAdd.addEventListener('click', function(event) {
  //add 1 soup
  soups = soups + 1;
  total = total + soupPrice;
  updateTotalHTML()
})

soupRemove.addEventListener('click', function(event) {
  //remove 1 soup
  soups = soups - 1;
  total = total - soupPrice;
  updateTotalHTML()
})

sandwichAdd.addEventListener('click', function(event) {
  //add 1 sandwich
  sandwiches = sandwiches + 1;
  total = total + sandwichPrice;
  updateTotalHTML()
})

sandwichRemove.addEventListener('click', function(event) {
  //remove 1 sandwich
  sandwiches = sandwiches - 1;
  total = total - sandwichPrice;
  updateTotalHTML()
})

coffeeAdd.addEventListener('click', function(event) {
  //add 1 coffee
  coffees = coffees + 1;
  total = total + coffeePrice;
  updateTotalHTML()
})

coffeeRemove.addEventListener('click', function(event) {
  //remove 1 coffee
  coffees = coffees - 1;
  total = total - coffeePrice;
  updateTotalHTML()
})

teaAdd.addEventListener('click', function(event) {
  //add 1 tea
  teas = teas + 1;
  total = total + teaPrice;
  updateTotalHTML()
})

teaRemove.addEventListener('click', function(event) {
  //remove 1 tea
  teas = teas - 1;
  total = total - teaPrice;
  updateTotalHTML()
})

juiceAdd.addEventListener('click', function(event) {
  //add 1 juice
  juices = juices + 1;
  total = total + juicePrice;
  updateTotalHTML()
})

juiceRemove.addEventListener('click', function(event) {
  //remove 1 juice
  juices = juices - 1;
  total = total - juicePrice;
  updateTotalHTML()
})

function updateTotalHTML() {
  totalHTML.innerHTML = total;
}

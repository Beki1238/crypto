var blum = document.getElementById("blum");
var major = document.getElementById("major");
var not = document.getElementById("not");
var circle = document.getElementById("circle");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    blum.innerHTML = response.bitcoin.usd;
    not.innerHTML = response.ethereum.usd;
    major.innerHTML = response.dogecoin.usd;
    circle.innerHTML = response.ethereum.usd;

});
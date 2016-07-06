//Task 1

var listDiv = document.getElementById('listItems');
var resultArray = document.getElementById('result');
var questionArray = document.getElementById('MixedArray');

function makeList(array){
var list = document.createElement("ul");
var listless = document.getElementById("listless");
list.setAttribute("id", "listless");


for (var i = 0; i < array.length; i++) {
	var item = document.createElement("li");
	item.appendChild(document.createTextNode(array[i]));
	list.appendChild(item);
}
return listDiv.appendChild(list);

}

function removeListItems(){
	listDiv.innerHTML = "";
}

function reverse(){
	
	var i = listless.childNodes.length;
	while(i--)
		listless.appendChild(listless.childNodes[i]);
	

}



function alpha(){
	var alphaLi = document.querySelector("ul");
	var listLi = alphaLi.querySelectorAll("li");
	ArrayLi = Array.prototype.slice.call(listLi);

    ArrayLi.sort(function(a,b){
 	return a.innerHTML.localeCompare(b.innerHTML);
 }).forEach(function(ally){
 	alphaLi.appendChild(ally);
 });

}

function randomInt(){
	var rando =  Math.floor(Math.random() * (25 - 1 + 1) + 1);
	var item = document.createElement("li");
	item.setAttribute("class", "numbs");
	var node = document.createTextNode(rando);
	item.appendChild(node);
	listless.appendChild(item);
}

function removeRandoms(){
	var numbs = document.getElementsByClassName("numbs");
	while(numbs !== null)
     numbs[0].parentNode.removeChild(numbs[0]);

}

//Task 2
var MixArray = [ 78,1.99,"b.",208,5.6,34.33,"a" ]


function sumUp(mixedArray){
var total = 0.0;
for (var i = 0; i < mixedArray.length; i++) {
	if(!isNaN(mixedArray[i]) )
	total+= mixedArray[i];
}

return total;
}
function showSum(){
questionArray.innerHTML = sumUp(MixArray);
}





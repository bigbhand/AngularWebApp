'use strict';

var myArray = [1,2,3,4,5,6,7,8,9,10];

//push and pop
document.write("<strong>Push & Pop and Shift & Unshift</strong><br/>");
document.write("Original Array : "+myArray+"<br/>");

myArray.push(11,12,13,14);
myArray.pop();
myArray.pop();

//shift and unshift
myArray.unshift(-2,-1,0);
myArray.shift();
myArray.shift();

document.write("Final Array : "+myArray+"<br/><br/>");

//sorting
document.write("<strong>Sorting</strong><br/>");

var arr1 = ["C","B","a","A","c","b"];

document.write("Original Array : "+arr1+"<br/>");
arr1.sort();
document.write("Sorted Array :"+arr1+"<br/>");
arr1.reverse();
document.write("Reverse Array :"+arr1+"<br/><br/>");

var arr2 = [20,5,10,8,2];

document.write("Original Array : "+arr2+"<br/>");
arr2.sort(function(a,b){return a-b});
document.write("Sorted Array :"+arr2+"<br/>");
arr2.reverse();
document.write("Sorted Array :"+arr2+"<br/><br/>");

//splice
document.write("<strong>Splice</strong><br/>");

var arr3 = [1, 2, 3, 4, 5];

document.write("Original Array : "+arr3+"<br/>");
arr3.splice(3, 0, 40, 50);
document.write("Spliced Array : "+arr3+"<br/>");
arr3.splice(3, 2);
document.write("Spliced Array : "+arr3+"<br/>");
arr3.splice(3, 2, 40, 50);
document.write("Spliced Array : "+arr3+"<br/><br/>");

//filter
document.write("<strong>Filter</strong><br/>");

var arr4 = [1,2,3,4,5,6,7,8,9,10];

document.write("Original Array : "+arr4+"<br/>");
var evens = arr4.filter(function(elt, i, array) {
	return elt % 2 == 0;
});
document.write("Even Array : "+evens+"<br/>");

var arr5 = ["Sam", "Tom", "Pom", "Sam"];

document.write("Original Array : "+arr5+"<br/>");
var unduplicate = arr5.filter(function(elt, i, array) {
	return array.indexOf(elt) == i;
})
document.write("Unduplicate Array : "+unduplicate+"<br/><br/>");

//foreach
document.write("<strong>Foreach</strong><br/>");

var arr6 = ["apple", "banana", "mango", "orange"];

document.write("Original Array : "+arr6+"<br/>");
arr6.forEach(function(elt, i, array) {
	document.write(elt +" <i>at index</i> "+i+"<br/>");
});
document.write("<br/>");

//slice
document.write("<strong>Slice</strong><br/>");

var slice1 = arr6.slice(2);
var slice2 = arr6.slice(2,3);

document.write("Sliced 1 : "+slice1+"<br/>");
document.write("Sliced 2 : "+slice2+"<br/><br/>");

//join
document.write("<strong>Join</strong><br/>");

document.write("Joined with - : "+arr6.join("-")+"<br/><br/>");

//concat
document.write("<strong>Concat</strong><br/>");

var arr7 = [1,2,3,4,5];
var arr8 = [6,7,8];
var arr9 = [9];

document.write("Concatinated array : "+arr7.concat(arr8, arr9)+"<br/><br/>");

//map
document.write("<strong>Map</strong><br/>");

var resultMap = arr6.map(function(elt, i, array) {
	
	return elt.charAt(0);
});

document.write("Original array : "+arr6+"<br/>");
document.write("Mapped array : "+resultMap+"<br/><br/>");

//every : checks if all the elements of the array met given criteria
document.write("<strong>Every</strong><br/>");

var arr10 = ["apple", "banan", "mango", "orange"];

var result = arr10.every(function(elt, i, array) {
	
	if(i==0)
		return true;
	else 
		return elt.length == array[i-1].length;
});

document.write("Original array : "+arr10+"<br/>");
document.write("Met criteria? all has same length?: "+result+"<br/><br/>");
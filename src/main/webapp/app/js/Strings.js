'use strict';

document.base_document_write = document.write;
   
document.write = function(html) {
   document.base_document_write(html+'<br/>');
}


var str1 = "Hello ";
var str2 = "world!"
var str3 = " hi ";
var str4 = " bye ";
var str5 = "Baby doll baby doll";
var str6 = "Hello world!";

//concatination
document.write(str1+str2);
document.write(str1.concat(str2," !! "," some more!"));

//document.write()

//to Upper and Lower
document.write(str1.toUpperCase());
document.write(str1.toLowerCase());

//length
document.write(str1.length);

//trimming
document.write(str3.trim()+str4.trim());

//Replace
document.write(str5.replace('b', '*'));
document.write(str5.replace(/b/,'*'));
document.write(str5.replace(/b/g,'*'));
document.write(str5.replace(/b/gi,'*'));

document.write("");
//SubStrings 
document.write(str6.substring(0));
document.write(str6.substring(0,5));
document.write(str6.substring(5,0));
document.write(str6.substring(0,70));

document.write("");

document.write(str6.slice(0));
document.write(str6.slice(0,5));
document.write(str6.slice(5,0));
document.write(str6.slice(0,70));

document.write("");

document.write(str6.substr(0));
document.write(str6.substr(0,5));
document.write(str6.substr(6,2));
document.write(str6.substr(0,70));

//search 
document.write(str6.match('[l]{2}'));
document.write(str5.search(/B/gi));



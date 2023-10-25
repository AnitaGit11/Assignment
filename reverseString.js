var str = "This is a sunny day";

String.prototype.str_reverse= function(){
 return this.split('').reverse().join('');
}

var arr = str.split(" ");
for(var i=0; i<arr.length; i++){
 arr[i] = arr[i].str_reverse();
}

console.log(arr.join(" "));


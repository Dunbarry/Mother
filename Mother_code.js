var printOut = [];
var l=0;
var j=0;
var k=0;
var string = "Special order 937.";
var typist = function (prinOut){
	console.log(printOut[k]);
};

while(j === 0){
	typistStringObject=string;
		for(i = 0; i < typistStringObject.length; i++){
		printOut.push(typistStringObject[i]);
		}
j++;
}

while(l < string.length){
	var seconds = Math.floor(Math.random()*2000);
	console.log(seconds);
	setTimeout(typist, seconds);
	l++;
	k++;
}

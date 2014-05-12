//GROUP PROJECT
// The operations will not work when these are part of the code:
//var sum = 0;
//var mean = 0;
//var median = 0;

array = [1 , 2 , 3 , 4];
function sum(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++){
	total += array[i]
	}
	return total;
}

sum(array);

function mean(array) {
	var total = sum(array);
	return total/array.length;
}

mean(array);

function median(array){
	array.sort();
	if (array.length % 2 == 0) {
		var x = array.length / 2;
		var y = (array[x - 1] + array[x]) /2;
		return y;
		}
	else
		var x = (array.length / 2) - 0.5;
	return array(x);
}

median(array);

//Reflection

//My group did an excellent job of creating a user story and pseudocode.  Their work made it relatively easy to code.  I'll admit I needed to tinker with the syntax on my end, especially with the median function.  My group successfully passed the tests for this challenge.  This challenge was a great learning opportunity for me.  I now understand how to create user stories and got a different perspective by translating someone else's pseudocode.  I appreciated working with Steve, David, and Maddison on this challenge.  They were all responsive, timely, and cooperative.  I'm looking forward to working with them again.
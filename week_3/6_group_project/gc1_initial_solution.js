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
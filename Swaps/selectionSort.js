var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var temp;
    for(var j = 0; j < array.length; j++) {
        temp = indexOfMinimum(array, j);
        swap(array, j, temp);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array2 = [0, 18, -3, 5, 8, 1000, 4, 4];
selectionSort(array2);
println("Array2 after sorting: " + array2);

Program.assertEqual(array2, [-3, 0, 4, 4, 5, 8, 18, 1000]);
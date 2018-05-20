function libFn() {
    console.log('libFn');
}
//Находит минимальную длину масива

function minArrayLength(arr) {
    var sub = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < sub.length) sub = arr[i];
    }
    var minLength=sub.length;
    return minLength;
}

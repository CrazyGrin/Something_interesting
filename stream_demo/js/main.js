window.onload = function() {
	waterfall('box');
}

function waterfall(aim) {
	var firstLineBoxArr = new Array(); //第一行box
	var firstLineBoxHArr = new Array(); //第一行box的高度集合
	var allBoxArr = new Array(); //所有box
	allBoxArr = document.getElementsByClassName(aim);
	console.log(allBoxArr.length);

	for (var i = 0; i < 5; i++) {
		firstLineBoxArr.push(allBoxArr[i]);
	};
	console.log(firstLineBoxArr.length);
	for (var i = 0; i < firstLineBoxArr.length; i++) {
		firstLineBoxHArr.push(firstLineBoxArr[i].offsetHeight);
	};

	console.log(firstLineBoxHArr);
	var minHeight = getMinHeight(firstLineBoxHArr);
	console.log(minHeight);
	var index = getMinHeightIndex(firstLineBoxHArr, minHeight);
	console.log(index);

	for(var i =0;i<allBoxArr.length;i++){
		if(i>=5){
			allBoxArr[i].style.position = 'absolute';
			allBoxArr[i].style.top=minHeight+'px';
			allBoxArr[i].style.left=allBoxArr[index].offsetLeft+'px';
			firstLineBoxHArr[index]+=allBoxArr[i].offsetHeight;
			minHeight = getMinHeight(firstLineBoxHArr);
			index = getMinHeightIndex(firstLineBoxHArr, minHeight);
			console.log(i);
			console.log(minHeight);
		};
	};
	console.log(firstLineBoxHArr);
}
function getMinHeight(arr){
	var Min = arr[0];
	for(var i =0;i<=arr.length;i++){
		if(arr[i]<=Min){
			Min = arr[i];
		};
	};
	return Min;
}
function getMinHeightIndex(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == val) {
			return i;
		};
	};
}
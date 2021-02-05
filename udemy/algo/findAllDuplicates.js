const findAllDuplicates = (nums) => {
	const map = {};
	const ans = {};
	for(const n of nums) {
		if(map[n]) {
			console.log('found ' + n);
			ans[n] = true;
		} else {
			console.log('not found ' + n);
			map[n] = true;
		}
	}
	const ans2 = [];
	for(const key in ans) {
		ans2.push(Number.parseInt(key));
	}
	return ans2;
}

console.log(findAllDuplicates([1,2,3,1,2,3,1,3,2]));
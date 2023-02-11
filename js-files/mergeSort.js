document.getElementById("m").addEventListener("click", () => {
	let eles = document.querySelectorAll(".ele");
	mergeSort(eles, 0, eles.length - 1);
});

async function merge(main, l, m, r) {
	const n1 = m - l + 1;
	const n2 = r - m;
	let arr1 = new Array();
	let arr2 = new Array();

	for (let i = 0; i < n1; i++) {
		waitforme(delay);
		console.log(main[i]);
		main[l + i].style.background = "orange";
		arr1[i] = main[l + i].style.height;
	}
	for (let i = 0; i < n2; i++) {
		waitforme(delay);
		console.log(main[i]);
		main[m + 1 + i].style.background = "red";
		arr2[i] = main[m + 1 + i].style.height;
	}
	let i = 0;
	let j = 0;
	let k = l;
	while (i < n1 && j < n2) {
		waitforme(delay);
		console.log(parseFloat(arr1[i]));
		console.log(parseFloat(arr2[j]));
		if (parseFloat(arr1[i]) > parseFloat(arr2[j])) {
			await waitforme(delay);
			main[k].style.background = "yellow";
			main[k].style.height = arr2[j];
			k++;
			j++;
		} else if (parseFloat(arr1[i]) < parseFloat(arr2[j])) {
			await waitforme(delay);
			main[k].style.background = "yellow";
			main[k].style.height = arr1[i];
			k++;
			i++;
		}
	}
	while (i < n1) {
		main[k].style.background = "yellow";
		main[k].style.height = arr1[i];
		k++;
		i++;
	}
	while (j < n2) {
		main[k].style.background = "yellow";
		main[k].style.height = arr2[j];
		k++;
		j++;
	}
}
async function mergeSort(main, l, r) {
	let m = l + Math.floor((r - l) / 2);
	if (l >= r) {
		return;
	}
	algoStart();
	await mergeSort(main, l, m);
	await mergeSort(main, m + 1, r);
	await merge(main, l, m, r);
	algoEnd();
}

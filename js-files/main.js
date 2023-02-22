function newArray(size, modu) {
	const container = document.getElementById("container");
	container.textContent = "";
	let arr = [];
	for (let i = 0; i < size; i++) {
		arr.push(Math.random() * size);
	}
	for (let i = 0; i < size; i++) {
		const ele = document.createElement("div");
		ele.style.height = `${(4000 * arr[i]) % modu}px`;
		ele.classList.add("ele");
		ele.setAttribute("id", `ele${i + 1}`);
		container.appendChild(ele);
	}
}
function waitforme(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("");
		}, ms);
	});
}

let delay = 260;
let delayElement = document.querySelector("#speed");

// Event listener to update delay time
delayElement.addEventListener("input", function () {
	console.log(delayElement.value, typeof delayElement.value);
	delay = 140 - parseInt(delayElement.value);
});

// no of bars updation

let noOfBars = document.querySelector("#noBars");
noOfBars.addEventListener("input", () => {
	newArray(noOfBars.value, 350);
});

if (screen.width < 500) {
	newArray(30, 350);
	document.getElementById("noBars").value = 28;
	document.getElementById("noBars").max = 30;
	document.getElementById("noBars").min = 5;
} else {
	newArray(70, 400);
	document.getElementById("noBars").value = 60;
}
document.getElementById("new_array").addEventListener("click", () => {
	newArray(noOfBars.value, 350);
});

const divElements = document.querySelectorAll(".field div"); // [div,div,div,div,div,div,div,div,div]
const pNextStep = document.querySelector(".next-step");
const pWin = document.createElement("p");
const btnRestart = document.createElement("button");
btnRestart.textContent = " RESTART ";
const pQuantityStep = document.createElement("p");

let nowStep = "X";
let quantityStep = 0;
let nowGame = true;

btnRestart.onclick = function () {
	quantityStep = 0;
	pQuantityStep.textContent = `Количество ходов ${quantityStep}`;
	for (const div of divElements) {
		div.textContent = "";
	}
	nowStep = "X";
	pNextStep.textContent = `Следующий ходит ${nowStep}`;
	pWin.textContent = ``;
	nowGame = true;
};

const comboWinner = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

for (const div of divElements) {
	div.onclick = function () {
		if (nowGame == true) {
			quantityStep++;
			pQuantityStep.textContent = `Количество ходов ${quantityStep}`;
			document.body.append(pQuantityStep);
			if (div.textContent == "") {
				if (nowStep == "X") {
					nowStep = "0";
					div.textContent = "X";
				} else if (nowStep == "0") {
					nowStep = "X";
					div.textContent = "0";
				}

				for (const comb of comboWinner) {
					const [cord1, cord2, cord3] = comb;
					if (
						divElements[cord1].textContent != "" &&
						divElements[cord1].textContent ==
							divElements[cord2].textContent &&
						divElements[cord1].textContent ==
							divElements[cord3].textContent
					) {
						pWin.textContent = `Победитель ${divElements[cord1].textContent}`;
						document.body.append(pWin);
						document.body.append(btnRestart);
						nowGame = false;
					}
				}

				if (nowGame == true) {
					let findClearDiv = false;
					for (const div of divElements) {
						if (div.textContent == "") {
							findClearDiv = true;
							break;
						}
					}

					if (findClearDiv == false) {
						pWin.textContent = `Ничья`;
						document.body.append(pWin);
						document.body.append(btnRestart);
						nowGame = false;
					}
				}

				pNextStep.textContent = `Следующий ходит ${nowStep}`;
			}
		}
	};
}

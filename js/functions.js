/*=======================
Теряем жизнь
========================*/
function deleteLifes() {
	let playerLeft = player.offsetLeft,
		playerTop = player.offsetTop;

	let enemyLeft = enemy.offsetLeft,
		enemyTop = enemy.offsetTop;

	if (countStar == 4) {

		return true;
	}else if ( playerLeft == enemyLeft && playerTop == enemyTop ) { // Пишем условие при сталкновении нашего игрока с врагом

		countLifes -= 1; // отнимаем одну жизнь
		boom();

		return true; // возвращаем результат true
	}
}

function boom() {
		player.className = "boom"; // меняем клас игрока для смены изображения
		delEnemy(); // очищаем таймер в переменной enemy и удаляем врага
		// запускаем таймер, чтоб был виден взрыв
		setTimeout(function() {
			

			if (countLifes == 0) {

				stopGame();
			}else{

				delLifes(); // удаляем блок с жизнями
				delPlayer(); // удаляем игрока
				createLifes (countLifes); // запускаем функцию для создания блока с жизнями
				createPlayer(); // запускаем функцию для создания игрока
				createEnemy (); // запускаем функцию для создания врага
				botMove(); // запускаем функцию чтоб наш враг двигался
			}

		}, 1000);
}
/*=======================
Добавляем очки и удаляем призы
========================*/
function addStars () {

	if ( stars == null ) {
		createStars();
	}
	
	stars.innerText = countStar;
	starsFlower.style.display = "block";
	
	let playerLeft = player.offsetLeft,
		playerTop = player.offsetTop;

	let food0 = document.querySelector("#food0"),
		food1 = document.querySelector("#food1"),
		food2 = document.querySelector("#food2"),
		food3 = document.querySelector("#food3");

	if ( playerLeft == 810 && playerTop == 0 && food0 != null ) {

		countStar++;
		stars.innerText = countStar;
		food0.remove();
		food0 = null;

	}else if (playerLeft == 590 && playerTop == 500 && food2 != null) { 

		countStar++;
		stars.innerText = countStar;
		food2.remove();
		food2 = null;

	}else if (playerLeft == 100 && playerTop == 110 && food3 != null) { 

		countStar++;
		stars.innerText = countStar;
		food3.remove();
		food3 = null;

	}else if (playerLeft == 300 && playerTop == 900 && food1 != null) { 

		countStar++;
		stars.innerText = countStar;
		food1.remove();
		food1 = null;

	}

	if (countStar == 4) {
		delEnemy();
		stopGame();
	}

}

/*=======================
Создаем блок с жизнями
========================*/
function createLifes (countLifes) {
	lifes = document.createElement("div");
	lifes.id = "lifes";

	for ( i = 0; i < countLifes; i++) {

		let span = document.createElement("span");
			span.innerText = "❤️";

		lifes.appendChild(span);
	}

	info.appendChild(lifes);

}

/*=======================
Создаем блок с игроком на игровом поле
========================*/
function createPlayer () {
	player = document.createElement("div");
	player.id = "player";
	player.className = "ArrowLeft";
	gameZone.style.top = 0;

	gameZone.appendChild(player);
}

/*=======================
Создаем блок с врагом на игровом поле
========================*/
function createEnemy () {
	enemy = document.createElement("div");
	enemy.id = "enemy";

	gameZone.style.top = 0;

	gameZone.appendChild(enemy);
}

/*=======================
добавляем еду - Александр
========================*/
function createFood() {

	for (let i = 0; i <= 3; i++) {
		let food = document.createElement("span");
			food.className = "food";
			food.id = "food" + i;

		gameZone.appendChild(food);
	}
}
/*=======================
добавляем блок с очками
========================*/
function createStars () {
	stars = document.createElement("div");
	stars.id = "stars";

	info.appendChild(stars);
}
/*============================
Создаем стартовый блок - Ярослав
=============================*/
function createStartBlock() {
	// создаем блок div div id="start-block">
	startBlock = document.createElement("div");
	startBlock.id = "start-block";
	//создаем кнопку <button id="start-knopka">Начать</button>
	startKnopka = document.createElement("button");
	startKnopka.id = "start-knopka";
	startKnopka.innerText = "Start";
	// добавляем кнопку в стартовый блок
	startBlock.appendChild(startKnopka);
	// добавляем стартовый блок на игровое поле
	content.appendChild(startBlock);

	startIgra();
}

/*=============================
Создание блока Игровое поле - Ярослав
=================================*/
function createGameZona() {
	// создаем блок div div id="game-zone">
	gameZone = document.createElement("div");
	gameZone.id = "game-zone";

	var lets = document.createElement("div");
		lets.id = "let";
	var letq = document.createElement("div");
		letq.id = "let1";
	var letw = document.createElement("div");
		letw.id = "let2";
	var lete = document.createElement("div");
		lete.id = "let3";
	var letr = document.createElement("div");
		letr.id = "let4";
	var lett = document.createElement("div");
		lett.id = "let5";
	var lety = document.createElement("div");
		lety.id = "let6";
	var letu = document.createElement("div");
		letu.id = "let7";
	var leti = document.createElement("div");
		leti.id = "let8";
	var house = document.createElement("div");
		house.id = "house";

	gameZone.appendChild(lets);
	gameZone.appendChild(letq);
	gameZone.appendChild(letw);
	gameZone.appendChild(lete);
	gameZone.appendChild(letr);
	gameZone.appendChild(lett);
	gameZone.appendChild(lety);
	gameZone.appendChild(letu);
	gameZone.appendChild(leti);
	gameZone.appendChild(house);

	content.appendChild(gameZone);
}
/*==============================
Функции окончания игры
===============================*/
function createEndBlock() {
	endGame = document.createElement("div"); // создаем див с окончанием игры
	endGame.id = "end"; 

	var status = document.createElement("h2");
		status.className = "status";

	if ( countStar == 4)  {

		status.innerText = "Вы победили!";
		endGame.className = "pobedili";
	} else if (countLifes == 0) {
		
		status.innerText = "Вы проиграли!";
		endGame.className = "proigrali";
	}

	var ochki = document.createElement ("h2");
		ochki.className = "ochki";
		ochki.innerText = "Вы набрали : " + countStar + " очка";

	reloadKnopka = document.createElement("button");
	reloadKnopka.id = "reloadKnopka";
	reloadKnopka.innerText = "Играть еще";

	
	endGame.appendChild(status);
	endGame.appendChild(ochki);
	endGame.appendChild(reloadKnopka);

	content.appendChild(endGame);

	startReload(); // вызываем функцию перезагрузки игры
}

/*==============================
Функции перезагрузки игры
===============================*/
function startReload() {
	reloadKnopka.onclick = function() {
		countStar = 0;

		delEndBlock(); // вызываем функцию удаления блок с завершением игры

		createStartBlock(); // вызываем функцию со стартом игры

		startIgra(); // запускаем игру заново
	}
}


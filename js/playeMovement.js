/*=========================================
Движение ВВЕРХ пользователя и игрового поля
=========================================*/
// Движение игрового поля вверх
function gameZoneMoveTop (playerTop) {

	let gameZoneTop = gameZone.offsetTop;

	if(playerTop <= 500 && gameZoneTop <= -100 && gameZoneTop % 100 == 0){
		gameZoneTop += 200;
		gameZone.style.top = gameZoneTop + "px"; // увеличиваем значение top позиции игрового поля на 100px
	}
}

// Движение игрока вверх
function playerMoveTop() {

	let playerTop = player.offsetTop;
	let playerLeft = player.offsetLeft;
	
	// Если верхняя граница не равна 0
	// и если значение Top делится на 50 без остачи
	if (playerTop != 0 && playerTop % 10 == 0 ) {

		// Если сверху нету блока препятствия
		if (playerLeft == 100  || playerLeft == 400 || 
			playerLeft == 300 && playerTop > 700 || 
			playerLeft == 600 && playerTop > 700 ||
			playerLeft == 700 && playerTop <= 800 ||
			playerLeft == 900 && playerTop > 300) 
		{
			
			playerTop -= 10;
			player.style.top = playerTop + "px"; // уменьшаем значение позиции top на 100px
		}
	}

	gameZoneMoveTop(playerTop);
}

/*=======================================
Движение ВНИЗ пользователя и игрового поля
=========================================*/
// Движение игрового поля вниз
function gameZoneMoveDown(playerTop) {

	let gameZoneTop = gameZone.offsetTop;
	let gameZonerMoveDown = gameZone.offsetTop

	if (playerTop > 430 && gameZoneTop <= 0  && gameZoneTop >= -300 && gameZoneTop % 100 == 0) {
			gameZonerMoveDown -= 200;
			gameZone.style.top = gameZonerMoveDown + "px"; // уменьшаем значение позиции игрового поля top на 100px
		}
	}
// Движение игрока вниз
function playerMoveDown () {

	let playerTop = player.offsetTop;
	let playerLeft = player.offsetLeft;

	// Если нижняя граница не равна 900
	// и если значение Top делится на 50 без остачи
	if (playerTop != 900 && playerTop % 10 == 0 ) {

		// Если снизу нету блока препятствия
		if (playerLeft == 100 && playerTop < 700 || 
			playerLeft == 400 && playerTop < 700 ||
			playerLeft == 600 && playerTop >= 600 || 
			playerLeft == 700 && playerTop < 700 ||
			playerLeft == 300 && playerTop >= 600 ||
			playerLeft == 900 && playerTop >= 200) 
		{
			
			playerTop += 10;
			player.style.top = playerTop + "px"; // увеличиваем значение позиции top на 100px
		}
	}

	gameZoneMoveDown(playerTop);
}
/*=======================================
Движение ВЛЕВО пользователя и игрового поля
=========================================*/
// Движение игрока влево
function playerMoveLeft () {

	let playerTop = player.offsetTop;
	let playerLeft = player.offsetLeft;

	// Если левая граница не равна 0
	// и если значение Left делится на 50 без остачи
	if (playerLeft != 100 && playerLeft % 10 == 0 ) {

		// Если снизу нету блока препятствия
		if (playerTop == 0 && playerLeft > 400 || 
			playerTop == 300 && playerLeft > 100 && playerLeft != 700 ||
			playerTop == 500 &&playerLeft > 400 && playerLeft != 900 ||
			playerTop == 700 && playerLeft > 100 ||
			playerTop == 900 && playerLeft > 600) 
		{
		
			playerLeft -= 10;
			player.style.left = playerLeft + "px"; // уменьшаем значение позиции left
		}
	}
}
/*=======================================
Движение ВПРАВО пользователя и игрового поля
=========================================*/
// Движение игрока вправо
function playerMoveRight () {

	let playerTop = player.offsetTop;
	let playerLeft = player.offsetLeft;

	// Если правая граница не равна меньше или равно 800
	// и если значение Left делится на 50 без остачи
	if (playerLeft < 900 && playerLeft % 10 == 0 ) {

		// Если справа нету блока препятствия
		if (playerTop == 0 && playerLeft >= 400 ||
			playerTop == 300 && playerLeft >= 100 && playerLeft != 400 ||
			playerTop == 500 && playerLeft >= 400 && playerLeft != 700 ||
			playerTop == 700 && playerLeft >= 100 ||
			playerTop == 900 && playerLeft >= 600) 
		{
		
			playerLeft += 10;
			player.style.left = playerLeft + "px"; // увеличиваем значение позиции left
		}
	}
}

/*======================
Меняем картинку игрока
=========================*/
function playerChangeImg (imgPlayer) {

	player.className = imgPlayer;
}
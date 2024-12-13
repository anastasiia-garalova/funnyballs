createStartBlock();
/*===================================
Функция старта игры
При нажатии на кнопку старт 
Запускаем игру
=====================================*/
function startIgra() {
	startKnopka.onclick = function () {
		
		startBlock.remove();

		createGameZona();
		createPlayer(); // добавляем игрока на игровое поле
		createEnemy(); // добавляем игрока на игровое поле

		countLifes = 3; 
		createLifes(countLifes); // создаем жизни
		createStars();

		botMove(); //Запускаем движение  врага
		createFood();
	}
}
/*======================
Функция завершения игры
=========================*/
function stopGame() {
	delStars();
	delLifes();
	delPlayer();
	delGameZona();
	createEndBlock();
}



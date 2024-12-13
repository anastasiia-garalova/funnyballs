/*===================================
Событие при нажатии на стрелочки на клавиатуре
Движение игрока
=====================================*/
document.onkeydown = function (event) {

	if (deleteLifes () ) {
		return;
	}

	switch  (event.key) {
		case 'ArrowUp': // движение игрока принажатии клавиши вверх

			playerMoveTop();
			playerChangeImg('ArrowUp');
			addStars();
			break;

		case 'ArrowDown':  // движение игрока принажатии клавиши вниз

			playerMoveDown();
			playerChangeImg('ArrowDown');
			addStars();
			break;

		case 'ArrowLeft': // движение игрока принажатии клавиши влево		

			playerMoveLeft();
			playerChangeImg('ArrowLeft');
			addStars();
			break;

		case 'ArrowRight':  // движение игрока принажатии клавиши вправо

			playerMoveRight();
			playerChangeImg('ArrowRight');
			addStars();
			break;
		default:
			break;
	}
}



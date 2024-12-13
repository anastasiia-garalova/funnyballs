/*==============================
Функции удаления
===============================*/
function delGameZona() {
	gameZone.remove();
}

function delEnemy(){
	clearInterval(enemy.dataset.timer);
	enemy.remove();
	//deleteLifes ();
}

function delPlayer(){
	player.remove();
}

function delLifes(){
	lifes.remove();
}

function delStars(){
	stars.remove();
	starsFlower.style.display = "none";
}

function delEndBlock() {
	endGame.remove();
}
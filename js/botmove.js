// Заставляем врага бегать туда сюда
//=======================================
function botMove() {

	let enemyMove = setInterval(function() 
	{
		
		// опускаем enemy вниз
		enemy.style.top = enemy.offsetTop + 10 + "px";
		if (deleteLifes () || countStar == 4) {
			return;
		}
		// создаем условие, если enemy опустился вниз
		if (enemy.offsetTop > 700) 
		{
			clearInterval(enemyMove);
			clearInterval(enemy.dataset.timer);
			enemyMove = setInterval(function() 
			{
				if (deleteLifes () || countStar == 4 ) {
					return;
				}
				enemy.style.top = enemy.offsetTop - 10 + "px";
				if (enemy.offsetTop <= 300) 
				{
					clearInterval(enemyMove);
					clearInterval(enemy.dataset.timer);
					enemyMove = setInterval(function() 
					{
						if (deleteLifes () || countStar == 4 ) {
							return;
						}
						enemy.style.left = enemy.offsetLeft + 10  + "px";
						if (enemy.offsetLeft >= 400) 
						{
							clearInterval(enemyMove);
							clearInterval(enemy.dataset.timer);
							enemyMove = setInterval(function() 
							{
								
								if (deleteLifes () || countStar == 4 ) {
									return;
								}
								enemy.style.top = enemy.offsetTop - 10 + "px";
								if (enemy.offsetTop <= 0) 
								{
									clearInterval(enemyMove);
									clearInterval(enemy.dataset.timer);
									enemyMove = setInterval(function()
									{	
										if (deleteLifes () || countStar == 4 ) {
											return;
										}
										enemy.style.top = enemy.offsetTop + 10 + "px";
										if (enemy.offsetTop >= 700) 
										{
											clearInterval(enemyMove);
											clearInterval(enemy.dataset.timer);
											enemyMove = setInterval(function() 
											{		 				
												if (deleteLifes () || countStar == 4 ) {
													return;
												}							
												enemy.style.left = enemy.offsetLeft + 10 + "px";
												if (enemy.offsetLeft >= 900) 
												{
													clearInterval(enemyMove);
													clearInterval(enemy.dataset.timer);
													enemyMove = setInterval(function() 
													{
														if (deleteLifes () || countStar == 4 ) {
															return;
														}
														enemy.style.top = enemy.offsetTop - 10 + "px";
														if (enemy.offsetTop <= 300) 
														{
															clearInterval(enemyMove);
															clearInterval(enemy.dataset.timer);
															enemyMove = setInterval(function() 
															{
																if (deleteLifes () || countStar == 4 ) {
																	return;
																}
																enemy.style.left = enemy.offsetLeft - 10 + "px";
																if (enemy.offsetLeft <= 700) 
																{
																	clearInterval(enemyMove);
																	clearInterval(enemy.dataset.timer);
																	enemyMove = setInterval(function() 
																	{
																		if (deleteLifes () || countStar == 4 ) {
																			return;
																		}
																		enemy.style.top = enemy.offsetTop - 10 + "px";
																		if (enemy.offsetTop <= 0) 
																		{
																			clearInterval(enemyMove);
																			clearInterval(enemy.dataset.timer);
																			enemyMove = setInterval(function() 
																			{
																				if (deleteLifes () || countStar == 4 ) {
																					return;
																				}
																				enemy.style.left = enemy.offsetLeft - 10 + "px";
																				if (enemy.offsetLeft <= 400) 
																				{
																					clearInterval(enemyMove);
																					clearInterval(enemy.dataset.timer);
																					enemyMove = setInterval(function() 
																					{
																						if (deleteLifes () || countStar == 4 ) {
																							return;
																						}
																						enemy.style.top = enemy.offsetTop + 10 + "px";
																						if (enemy.offsetTop >= 300) 
																						{
																							clearInterval(enemyMove);
																							clearInterval(enemy.dataset.timer);
																							enemyMove = setInterval(function() 
																							{
																								if (deleteLifes () || countStar == 4 ) {
																									return;
																								}
																								enemy.style.left = enemy.offsetLeft - 10 + "px";

																								if (enemy.offsetLeft <= 100) 
																								{
																									clearInterval(enemyMove);
																									clearInterval(enemy.dataset.timer);

																									enemyMove = setInterval(function() 
																									{
																										if (deleteLifes () || countStar == 4 ) {
																											return;
																										}
																										enemy.style.top = enemy.offsetTop - 10 + "px";

																										if (enemy.offsetTop <= 0) 
																										{
																											if (deleteLifes () || countStar == 4 ) {
																												return;
																											}
																											clearInterval(enemyMove);
																											clearInterval(enemy.dataset.timer);
																											botMove();
																										}
																									}, 30)
																									enemy.dataset.timer = enemyMove;
																								}
																							}, 30)
																							enemy.dataset.timer = enemyMove;
																						}
																					}, 30)
																					enemy.dataset.timer = enemyMove;
																				}
																			}, 30)
																			enemy.dataset.timer = enemyMove;
																		}
																	}, 30)
																	enemy.dataset.timer = enemyMove;
																}
															}, 30)
															enemy.dataset.timer = enemyMove;
															
														}
													}, 30)
													enemy.dataset.timer = enemyMove;
												}
											}, 30)
											enemy.dataset.timer = enemyMove;
										}
									}, 30)
									enemy.dataset.timer = enemyMove;
								}
							}, 30)
							enemy.dataset.timer = enemyMove;
						}

					}, 30)
					enemy.dataset.timer = enemyMove;
				}
			}, 30)
			enemy.dataset.timer = enemyMove;
			
		}
		
	}, 30)

	enemy.dataset.timer = enemyMove;

}


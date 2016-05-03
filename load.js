define(function (require,exports,module){
	var game=require('./game.js');
	var imgSrc=['birds.png','land.png','pipe1.png','pipe2.png','sky.png'];
	var imgObjects=[];
	var count=0;
	function listener(){
	count++;
	if(count>=imgSrc.length){
		game.run(imgObjects);
		}
	}

	imgSrc.forEach(function(v){
		var img=new Image();
		img.addEventListener('load',listener);
		img.src="imgs/"+v;
		imgObjects.push(img);
	})
})




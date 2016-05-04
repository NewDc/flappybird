define(function (require,exports,module){
	alert('点击鼠标左键或按上方向键让小鸟飞翔！');
	var Sky = require('./sky.js');
  	var Brid = require('./brid.js');
  	var Land = require('./land.js');
  	var Pipe = require('./pipe.js');

	function main(imgObjects){
		var gameOver=false;
		var start=false;
		var count=0;
		
		var brid=new Brid(imgObjects[0]);
		var sky1=new Sky(0,imgObjects[4]);
		var sky2=new Sky(800,imgObjects[4]);
		var land1=new Land(0,imgObjects[1]);
		var land2=new Land(336,imgObjects[1]);
		var land3=new Land(336*2,imgObjects[1]);
		var land4=new Land(336*3,imgObjects[1]);
		var pipe1=new Pipe(800,imgObjects[2],imgObjects[3]);
		var pipe2=new Pipe(1000,imgObjects[2],imgObjects[3]);
		var pipe3=new Pipe(1200,imgObjects[2],imgObjects[3]);
		var pipe4=new Pipe(1400,imgObjects[2],imgObjects[3]);
		var pipe5=new Pipe(1600,imgObjects[2],imgObjects[3]);
				
		var lastTime=Date.now();
		function loop(){
			var now=Date.now();
			var dt=now-lastTime;
			lastTime=now;
			context.clearRect(0,0,800,600);

			sky1.update(dt);
			sky2.update(dt);
			pipe1.update(dt);
			pipe2.update(dt);
			pipe3.update(dt);
			pipe4.update(dt);
			pipe5.update(dt);
			land1.update(dt);
			land2.update(dt);
			land3.update(dt);
			land4.update(dt);
			brid.update(dt);

			if(brid.y<0 || brid.y>600-112){
				gameOver=true;
				alert('Game Over!')
			};
			if(context.isPointInPath(brid.x,brid.y)){
				gameOver=true;
				alert('Game Over!')
			}
			
			context.beginPath();

			sky1.draw();
			sky2.draw();
			pipe1.draw();
			pipe2.draw();
			pipe3.draw();
			pipe4.draw();
			pipe5.draw();
			land1.draw();
			land2.draw();
			land3.draw();
			land4.draw();
			brid.draw();

			context.fillStyle="gold";
			context.fillRect(20,20,80,40);
			context.fillStyle="white";
			context.font="20px microsoft yahei";
			context.textAlign="center";
			context.fillText(brid.count,60,46);

			if(!gameOver){
				requestAnimationFrame(loop);
				}
			};
			
		loop();

		window.onkeydown=function(e){
		if(e.keyCode===38){
			brid.speed=-0.3;
			}
		};
		window.addEventListener('click',function(){
			brid.speed=-0.3;
		})
	};
	
	exports.run=main;
	
})

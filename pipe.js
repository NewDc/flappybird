define(function (require,exports,module){
	function Pipe(x,img1,img2){
		this.img1 = img1;
    	this.img2 = img2;
		this.x=x;
		this.y=Math.random()*150+50;
		this.speed=0.1;
	}

	Pipe.prototype.update=function(dt){
		if(this.x<=-200){
			var offset=this.x+200;
			this.x=800+offset;
			this.y=Math.random()*150+50;
		}
		this.x=this.x-this.speed*dt;
	}

	Pipe.prototype.draw=function(){
		context.drawImage(this.img2,this.x,this.y-420);
		context.drawImage(this.img1,this.x,this.y+150);
		context.rect(this.x-7,this.y-430,60,420);
		context.rect(this.x-7,this.y+140,60,420);
	}
	module.exports=Pipe;
})

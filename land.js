define(function (require,exports,module){
	function Land(x,img){
		this.img=img;
		this.x=x;
		this.speed=0.1;
	}

	Land.prototype.update=function(dt){
		
		if(this.x<=-336){
			var offset=this.x+336;
			this.x=336*3+offset;
		}
		this.x=this.x-this.speed*dt;
	}

	Land.prototype.draw=function(){
		context.drawImage(this.img,this.x,600-112);
	}
	module.exports=Land;
})


	

define(function (require,exports,module){
	function Sky(x,img){
		this.img=img;
		this.x=x;
		this.speed=0.05;
	}

	Sky.prototype.update=function(dt){
		
		if(this.x<=-800){
			var offset=this.x+800;
			this.x=offset+800;
		}
		this.x=this.x-this.speed*dt;
	}

	Sky.prototype.draw=function(){
		context.drawImage(this.img,this.x,0,800,600);
	}
	module.exports=Sky;
})


define(function(require,exports,module){
	function Brid(img){
		this.img=img;
		this.index=0;
		this.x=200;
		this.y=0;
		this.speed=0;
		this.a=0.0005;
		this.waitTime=0;
		this.distence=0;
		this.count=0;
	}

	var lastTime=Date.now();
	Brid.prototype.update=function(dt){
		this.waitTime=this.waitTime+dt;
		if(this.waitTime>100){
			this.index=(this.index+1)%3;
			this.waitTime=this.waitTime-100;
		}

		this.speed=this.speed+this.a*dt;
		this.y=this.y+this.speed*dt;
			
			if(Date.now()-lastTime>4300){
				this.distence=this.distence+0.1*dt;
				if(this.distence>=210){
				this.count=this.count+1;
				this.distence=0;
				}
			}
	}

	Brid.prototype.draw=function(){
		context.save();

		context.translate(this.x,this.y);
		this.speed=this.speed>0.3? 0.3 : this.speed;
		var angle=this.speed/0.3*45;
		context.rotate(angle/180*Math.PI);

		context.drawImage(this.img,this.index*52,0,52,45,-26,-22.5,52,45);
		context.restore();
	}
	module.exports=Brid;
})





	

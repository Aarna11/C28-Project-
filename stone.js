class Stone{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.r=30;
        var options={
            'density': 1 ,
            'isStatic': false,
            'restitution':0,
            'friction':1

        }
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
        this.image=loadImage("images/stone.png");
    }
    display()
	{
		
		push()
        var posx = this.body.position.x;
        var posy = this.body.position.y;
        translate(posx,posy);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		//sellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
    }
}

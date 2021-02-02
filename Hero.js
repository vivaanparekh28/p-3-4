class Hero{
    constructor(){
        this.body=Bodies.rectangle(200,400,120,30)
        this.image = loadImage("./Superhero-01.png");
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 120, 50);
        //rect(this.body.position.x,this.body.position.y,120,30)
    }
}
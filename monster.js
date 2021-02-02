class Monster{
    constructor(){
        this.body=Bodies.rectangle(380,300,80,80)
        this.image=loadImage("./Monster-01.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 80, 80);
    }
}
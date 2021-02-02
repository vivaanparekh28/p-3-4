class Ground{
    constructor(){
        var op = {
            isStatic: true
        }
        this.body=Bodies.rectangle(220,350,500,20, op);
        World.add(world,this.body)
    }
    display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,500,20)
    }
   
}
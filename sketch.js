var brush

function setup() {
  createCanvas(windowWidth,windowHeight);
  erase = createButton("Click to Clear")
  size1 = createButton("Small")
  size2 = createButton("Medium")
  size3 = createButton("Large")
}

function draw() {

erase.position(50,550)
erase.mousePressed(function(){
  clear()
})
size1.position(10,420)
size2.position(10,460)
size3.position(10,500)

if(mouseIsPressed){
  if(mouseX<=50){
    if(mouseY<=50){
      brush = "purple"
    } else if(mouseY<=100){
      brush = "blue"
    } else if(mouseY<=150){
      brush = "green"
    } else if(mouseY<=200){
      brush = "yellow"
    } else if(mouseY<=250){
      brush = "orange"
    } else if(mouseY<=300){
      brush = "red"
    } else if(mouseY<=350){
      brush = "brown"
    } else if(mouseY<=400){
      brush = "black"
    } 
  }
  stroke(brush)
  line(mouseX,mouseY,pmouseX,pmouseY)
}

size1.mousePressed(function(){
  strokeWeight(5)
})
size2.mousePressed(function(){
  strokeWeight(10)
})
size3.mousePressed(function(){
  strokeWeight(15)
})
push()
stroke("black")
strokeWeight(2)
fill("purple")
rect(0,0,50,50)
fill("blue")
rect(0,50,50,50)
fill("green")
rect(0,100,50,50)
fill("yellow")
rect(0,150,50,50)
fill("orange")
rect(0,200,50,50)
fill("red")
rect(0,250,50,50)
fill("brown")
rect(0,300,50,50)
fill("black")
rect(0,350,50,50)
pop()
}
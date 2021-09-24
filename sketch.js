var input,title
var num,bt
function setup() {
  createCanvas(400, 400);
  input = createInput()
  input.position(5,80)

  title = createElement('h4',"Enter a number")
  title.position(5,20)

  bt = createButton("click it")
  bt.position(5,150)
  bt.mouseClicked(go)
}

function draw() {
  background("lightgreen");


  num = input.value()
  console.log(num)

  if(num%2 === 0){
    console.log("even")
  }
  else{
    console.log("odd")
  }
}

function go(){

}
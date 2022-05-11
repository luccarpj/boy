var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");

}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,200,200,200); 
  path.addImage(pathImg);
path.scale =1.2;

boy = createSprite(200,280)
boy.addAnimation("menino",boyImg);
//adicione uma animação de corrida para ele
boy.scale=0.8;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

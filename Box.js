class Box {
//level 1
block1=new Block (390,315,30,40);
block2=new Block(360,275,30,40);
block3=new Block(390,275,30,40);
block4=new Block(420,275,30,40);
block5=new Block(330,235,30,40);
block6=new Block(360,235,30,40);
block7=new Block(390,235,30,40);
block8=new Block(420,235,30,40);
block9=new Block(450,235,30,40);
block10=new Block(360,195,30,40);
block11=new Block(390,215,30,40);
block12=new Block(330,215,30,40);
block13=new Block(420,235,30,40);
block10=new Block(360,195,30,40);
block11=new Block(390,215,30,40);
block12=new Block(330,215,30,40);
}


 function score(){

    if(this.visibility<0 && this.visibility>-105){
        score++;
    }

  
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
}

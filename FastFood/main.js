title = "Fast Food";

description = `Don't drop them
`;

characters = [
`
llllll
llllll
`,
`
llllll
llllll
`,
`
llllll
llllll
`
];

options = {};

var patty1 = false;
var patty2 = false;
var patty3 = false;

var freshPatty = 1500;
var counter1 = freshPatty;
var counter2 = freshPatty;
var counter3 = freshPatty;

var placePatty;


function update() {
  if (!ticks) {
  }

    //grill
    color("light_black");
    rect(6, 52, 48, 40);

    color("black");
    rect(5, 50, 50, 4);


  if (patty1 != false) {
    color("red");
    char("a", 10, 50);
    counter1--;
    if (counter1 < 1000) {
      color("green");
      char("a", 10, 50);
    }
    if (counter1 <= 0){
      color("black");
      char("a", 10, 50);
      end();
    }
  }
  if (patty2 != false) {
    color("red");
    char("b", 30, 50);
    counter2--;
    if (counter2 < 1000) {
      color("green");
      char("b", 30, 50);
    }
    if (counter2 <= 0){
      color("black");
      char("b", 30, 50);
      end();
    }
  }
  if (patty3 != false) {
    color("red");
    char("c", 50, 50);
    counter3--;
    if (counter3 < 1000) {
      color("green");
      char("c", 50, 50);
    }
    if (counter3 <= 0){
      color("black");
      char("c", 50, 50);
      end();
    }
  }

if (patty1 == false || patty2 == false || patty3 == false) {
  console.log("patty generator")
  placePatty = rnd(1, 500) 
}
  if (placePatty <= 5) {
    if (patty1 != true) {
      patty1 = true;
      placePatty = 100;
    } else if (patty2 != true) {
      patty2 = true;
      placePatty = 100;
    } else {
      patty3 = true;
      placePatty = 100;
    }
  } 

if(input.isJustPressed) {
  console.log(input.pos.x);
  console.log(input.pos.y);
  if (input.pos.x > 6 && input.pos.x < 14 && input.pos.y > 46 && input.pos.y < 54){
    if (counter1 < 1000) {
      addScore(50);
      color("transparent");
      char("a", 10, 50);
      patty1 = false;
      counter1 = freshPatty;
    }
  }
  if (input.pos.x > 26 && input.pos.x < 34 && input.pos.y > 46 && input.pos.y < 54) {
    if (counter2 < 1000) {
      addScore(50);
      color("transparent");
      char("b", 30, 50);
      patty2 = false;
      counter2 = freshPatty;
    }
  }
  if (input.pos.x > 46 && input.pos.x < 54 && input.pos.y > 46 && input.pos.y < 54) {
    if (counter3 < 1000) {
      addScore(50);
      color("transparent");
      char("c", 50, 50);
      patty3 = false;
      counter3 = freshPatty;
    }
  }
}

}

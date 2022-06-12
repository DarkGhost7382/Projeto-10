var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundery1, boundery2;
    boundery1 = createSprite (190, 120, 420, 3);
    boundery2 = createSprite (190, 260, 420, 3);
var sam;
    sam = createSprite (20, 190, 13, 13);
    sam.shapeColor = "green";

var life = 0; 

var car1, car2, car3, car4;
    car1 = createSprite (100, 130, 10, 10);
    car1.shapeColor = "red";
    car2 = createSprite (215, 130, 10, 10);
    car2.shapeColor = "blue";
    car3 = createSprite (165, 250, 10, 10);
    car3.shapeColor = "orange";
    car4 = createSprite (270, 250, 10, 10);
    car4.shapeColor = "purple";
    
    car1.velocityY = +8;
    car2.velocityY = +8;
    car3.velocityY = -8;
    car4.velocityY = -8;

function draw() {
  background("white");
  text("Tentativas: "+life, 200, 100);
  fill ("lightblue");
  rect (0, 120, 52, 140);
  fill ("yellow");
  rect (345, 120, 52, 140);
  
  car1.bounceOff(boundery1);
  car1.bounceOff(boundery2);
  car2.bounceOff(boundery1);
  car2.bounceOff(boundery2);
  car3.bounceOff(boundery1);
  car3.bounceOff(boundery2);
  car4.bounceOff(boundery1);
  car4.bounceOff(boundery2);
  
  if(keyDown("right")){
    sam.x = sam.x +2;
  }
  if(keyDown("left")){
    sam.x = sam.x -2;
  }
  
  if(sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching (car4)){
    sam.x = 20;
    sam.y = 190;
    life = life +1;
  }
  
  drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

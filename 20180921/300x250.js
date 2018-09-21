(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,0,403,250],[0,252,300,250],[302,379,142,40],[341,690,43,43],[438,437,71,12],[457,149,50,70],[302,690,37,53],[405,149,50,92],[302,572,42,64],[405,0,79,78],[427,294,83,83],[341,735,17,19],[302,638,43,50],[346,572,48,45],[0,504,300,250],[436,464,74,63],[446,379,58,56],[426,529,68,54],[405,80,79,67],[237,756,237,52],[302,539,109,31],[302,464,132,36],[302,355,18,21],[302,502,122,35],[0,756,235,56],[302,252,184,40],[302,294,123,59],[302,421,134,41]]}
];


// symbols:



(lib.圖層1 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.m1 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.m2 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.n9 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.p1 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.p2 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.pen = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.t21 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.t22 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.t23 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.t31 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.t41 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.t42 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.t43 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖層1();
	this.instance.parent = this;
	this.instance.setTransform(-201.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.5,-125,403,250);


(lib.補間動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.圖層1();
	this.instance.parent = this;
	this.instance.setTransform(-201.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.5,-125,403,250);


(lib.補間動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mm2();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-39,79,78);


(lib.補間動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mm3();
	this.instance.parent = this;
	this.instance.setTransform(-41.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.5,83,83);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(0,0,142,40), null);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件38, new cjs.Rectangle(0,0,43,43), null);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.p1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件37, new cjs.Rectangle(0,0,74,63), null);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.p2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件36, new cjs.Rectangle(0,0,58,56), null);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.p3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件35, new cjs.Rectangle(0,0,68,54), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(0,0,123,59), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(0,0,184,40), null);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0,0,134,41), null);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mo3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件31, new cjs.Rectangle(0,0,48,45), null);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,17,19), null);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mo2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件28, new cjs.Rectangle(0,0,43,50), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,235,56), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m4();
	this.instance.parent = this;
	this.instance.setTransform(0,6.2,1,1,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,51,69.5), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m3();
	this.instance.parent = this;
	this.instance.setTransform(0,7.4,1,1,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,63,98.4), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,132,36), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,18,21), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,122,35), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,37,53), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,109,31), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,50,70), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.n9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,300,250), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,79,67), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,237,52), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,71,12), null);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件39();
	this.instance.parent = this;
	this.instance.setTransform(71,20,1,1,0,0,0,71,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件43, new cjs.Rectangle(0,0,142,40), null);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件38();
	this.instance.parent = this;
	this.instance.setTransform(21.5,21.5,1,1,0,0,0,21.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件42, new cjs.Rectangle(0,0,43,43), null);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 38
	this.instance = new lib.元件42();
	this.instance.parent = this;
	this.instance.setTransform(150.5,27.5,1,1,0,0,0,21.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:154.5,y:29.9},5,cjs.Ease.quadInOut).to({x:150.5,y:27.5},5,cjs.Ease.quadInOut).wait(1));

	// 圖層 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AshDvIAAndIZDAAIAAHdg");
	mask.setTransform(61.8,16.1);

	// 元件 39
	this.instance_1 = new lib.元件43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74,23,1,1,0,0,0,71,20);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:71,y:20},5,cjs.Ease.quadInOut).to({x:74,y:23},5,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,169,46);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(32.3,45.3,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:32.4,scaleX:0.91,scaleY:0.91,x:32.4},5,cjs.Ease.cubicInOut).to({regX:32.3,scaleX:1,scaleY:1,x:32.3},6,cjs.Ease.cubicInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,50);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件30();
	this.instance.parent = this;
	this.instance.setTransform(8.5,9.5,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.81,scaleY:0.81,x:9.6,y:10.2},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:8.5,y:9.5},6,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,19);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件31();
	this.instance.parent = this;
	this.instance.setTransform(16.4,38.6,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,45);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件29();
	this.instance.parent = this;
	this.instance.setTransform(64.9,47.3,1,1,0,0,0,35.9,47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.5,70.5,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(212,21.5,1,1,0,0,0,24,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-1,239,81);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(0,0,79,78), null);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件19();
	this.instance.parent = this;
	this.instance.setTransform(117.5,28,1,1,0,0,0,117.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0,0,235,56), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,83,83), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件16();
	this.instance.parent = this;
	this.instance.setTransform(244.7,54.6,1,1,0,0,0,25.5,34.8);

	this.instance_1 = new lib.元件15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.5,49.1,1,1,0,0,0,31.5,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,0,270.2,98.4), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件18();
	this.instance.parent = this;
	this.instance.setTransform(135.1,49.1,1,1,0,0,0,135.1,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:49.2,scaleX:0.96,scaleY:0.96,x:135.2,y:49.3},6,cjs.Ease.cubicInOut).to({regY:49.1,scaleX:1,scaleY:1,x:135.1,y:49.1},3,cjs.Ease.cubicInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270.2,98.4);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(230.5,34.5,1,1,0,0,0,18.5,26.5);

	this.instance_1 = new lib.元件5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,35,1,1,0,0,0,25,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0,0,249,70), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件9();
	this.instance.parent = this;
	this.instance.setTransform(124.5,59.8,1,1,0,0,0,124.5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:124.6,regY:59.9,scaleX:0.95,scaleY:0.95,x:124.7,y:59.9},5,cjs.Ease.quadInOut).to({regX:124.5,regY:59.8,scaleX:1,scaleY:1,x:124.5,y:59.8},5,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,70);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{play:65,play2:93});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}
	this.frame_92 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(28).call(this.frame_92).wait(40).call(this.frame_132).wait(22));

	// 元件 3
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(336.1,-2.5,1.903,1.903,-51.7,0,0,39.6,33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:33.6,scaleX:1,scaleY:1,rotation:-21.7,x:140.8,y:136.1},19,cjs.Ease.quadInOut).wait(1).to({regX:2.7,regY:65.4,x:117.7,y:179.2},0).to({regX:2.8,rotation:-6.7,guide:{path:[117.7,179.3,118.4,176,118.8,172,119.7,164.1,118.7,159.6,117.4,154,118.2,130.3,119,106.2,120.9,97,122.7,89,122.4,81.9,121.6,70.8,120.9,60.4,120,46.3,121.2,41.3,122,37.9,124.9,36.5,127.5,35.2,129.3,35.9,131.2,36.8,131.4,39.8,131.7,43.4,132.4,47.8,133.2,52.9,134.1,55.8,135.3,60.1,136.3,72.5,136.3,70.5,137,68.5,138.3,64.7,141.6,64,144.2,63.5,148.3,62.7,151.3,62.8,152.4,66.6,154.1,72.5,155.1,77.1,155.1,76.5,157.1,73.6,159.3,70.1,161.3,69.3,163.7,68.1,166.3,68.3,169.3,68.4,170.4,70.2,171.4,71.8,172.8,78.4,173.6,81.6,174.1,84.3,175.8,79.7,177.6,74.8,181.1,64.8,181.3,61.7,181.2,54.4,181.2,49.4,181.2,40.1,182.6,36.8,184.1,33.4,185.9,32.5,186,32.5,190.1,31.6,193.1,30.9,194.9,32.6,197.3,34.7,197.3,40.1,197.3,44.5,196.7,50.5,196,56.5,196,57.8,196,61.4,195.7,71.2,194.3,77.2,193.5,80.1,192.8,83.1,192.7,83.1]}},32,cjs.Ease.quadInOut).wait(102));

	// 元件 7
	this.instance_1 = new lib.元件10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.5,92.3,1,1,0,0,0,124.5,35);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({alpha:1},11).wait(8).to({alpha:0},4).to({_off:true},1).wait(84));

	// 圖層 10
	this.instance_2 = new lib.元件17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.7,116.5,1,1,0,0,0,135.1,49.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(73).to({_off:false},0).to({alpha:1},7).wait(13).to({alpha:0},9).to({_off:true},1).wait(51));

	// 元件 4
	this.instance_3 = new lib.元件4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({alpha:1},27).to({_off:true},88).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-101.1,432.3,351.2);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_88 = function() {
		this.phone.gotoAndPlay('play');
	}
	this.frame_173 = function() {
		this.phone.gotoAndPlay('play2');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(88).call(this.frame_88).wait(85).call(this.frame_173).wait(211));

	// logo
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(49.5,20,1,1,0,0,0,35.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(384));

	// t41.png
	this.instance_1 = new lib.元件33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(147,57,1,1,0,0,0,92,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(248).to({_off:false},0).to({y:49,alpha:1},7,cjs.Ease.cubicOut).wait(129));

	// t43.png
	this.instance_2 = new lib.元件32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210,105.5,1,1,0,0,0,67,20.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(253).to({_off:false},0).to({y:97.5},7,cjs.Ease.cubicOut).wait(124));

	// t42.png
	this.instance_3 = new lib.元件34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81.5,112.5,1,1,0,0,0,61.5,29.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(253).to({_off:false},0).to({y:104.5},7,cjs.Ease.cubicOut).wait(124));

	// p3.png
	this.instance_4 = new lib.元件35();
	this.instance_4.parent = this;
	this.instance_4.setTransform(284.6,155.9,1.606,1.606,0,0,0,34,27);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(259).to({_off:false},0).to({scaleX:1,scaleY:1,x:234,y:158,alpha:1},14,cjs.Ease.cubicOut).wait(111));

	// p2.png
	this.instance_5 = new lib.元件36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(156.1,162.3,1.606,1.606,0,0,0,29,28);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(257).to({_off:false},0).to({scaleX:1,scaleY:1,x:154,y:162,alpha:1},14,cjs.Ease.cubicOut).wait(113));

	// p1.png
	this.instance_6 = new lib.元件37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(21.3,161.5,1.606,1.606,0,0,0,37,31.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(255).to({_off:false},0).to({scaleX:1,scaleY:1,x:70,alpha:1},14,cjs.Ease.cubicOut).wait(115));

	// hand.png
	this.instance_7 = new lib.元件40();
	this.instance_7.parent = this;
	this.instance_7.setTransform(171,227.5,1,1,0,0,0,86,24.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(266).to({_off:false},0).to({y:219.5,alpha:1},9,cjs.Ease.cubicOut).wait(109));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_251 = new cjs.Graphics().p("EglxAewQxLj+hdpNQhdpNPHpDQPIpDW2jnQW0jnRLD+QRMD9BcJNQBdJNvIJDQvHJE21DnQq3BupmAAQqjAApAiFg");
	var mask_graphics_252 = new cjs.Graphics().p("EgkfAdZQxLj9hdpNQhdpNPHpDQPIpEW2jmQW0jnRLD+QRLD9BdJNQBdJNvIJDQvHJE22DnQq2BtpmAAQqjAApAiFg");
	var mask_graphics_253 = new cjs.Graphics().p("EgkfAcDQxLj9hdpNQhdpNPHpDQPIpEW2jmQW0jnRLD9QRLD+BdJNQBdJMvIJEQvHJE22DmQq2BupmAAQqjAApAiFg");
	var mask_graphics_254 = new cjs.Graphics().p("EgkfAatQxLj9hdpOQhdpNPHpDQPIpDW2jnQW0jmRLD9QRLD+BdJNQBdJMvIJEQvHJE22DmQq2BupmAAQqjAApAiFg");
	var mask_graphics_255 = new cjs.Graphics().p("EgkfAZXQxLj+hdpNQhdpNPHpDQPIpDW2jnQW0jnRLD+QRLD+BdJNQBdJMvIJDQvHJE22DnQq2BupmAAQqjAApAiFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(251).to({graphics:mask_graphics_251,x:-361.8,y:210.1}).wait(1).to({graphics:mask_graphics_252,x:-256.2,y:201.4}).wait(1).to({graphics:mask_graphics_253,x:-142.4,y:192.8}).wait(1).to({graphics:mask_graphics_254,x:-28.6,y:184.2}).wait(1).to({graphics:mask_graphics_255,x:85.2,y:175.6}).wait(129));

	// 圖層 7
	this.instance_8 = new lib.補間動畫5("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(149.5,184);
	this.instance_8._off = true;

	this.instance_9 = new lib.補間動畫6("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(149.5,184);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},251).to({state:[{t:this.instance_9}]},4).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(251).to({_off:false},0).to({_off:true},4).wait(129));

	// 圖層 19
	this.instance_10 = new lib.元件24();
	this.instance_10.parent = this;
	this.instance_10.setTransform(147.5,143.5,1,1,0,0,0,118.5,40.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(188).to({_off:false},0).to({alpha:1},11).wait(41).to({alpha:0},7).to({_off:true},1).wait(136));

	// pen.png
	this.phone = new lib.元件8();
	this.phone.parent = this;
	this.phone.setTransform(150,197.9,0.947,0.947,0,0,0,150,125.1);

	this.timeline.addTween(cjs.Tween.get(this.phone).to({regY:125,scaleX:1,scaleY:1,y:197.8},79).wait(10).to({rotation:5.7,x:144,y:191.8},31).wait(47).to({regX:150.2,regY:125.3,scaleX:0.7,scaleY:0.7,rotation:0,x:149.1,y:150.6},30,cjs.Ease.cubicInOut).wait(43).to({alpha:0},7).to({_off:true},1).wait(136));

	// m2.png
	this.instance_11 = new lib.元件20();
	this.instance_11.parent = this;
	this.instance_11.setTransform(323.3,326,1.687,1.687,0,0,0,41.6,41.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(171).to({_off:false},0).to({regX:41.5,regY:41.5,scaleX:1,scaleY:1,x:237.5,y:198.5},30,cjs.Ease.cubicInOut).wait(39).to({alpha:0},7).to({_off:true},1).wait(136));

	// m1.png
	this.instance_12 = new lib.元件22();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-16.5,307,1.687,1.687,0,0,0,39.5,39);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(169).to({_off:false},0).to({scaleX:1,scaleY:1,x:73.5,y:201},30,cjs.Ease.cubicInOut).wait(41).to({alpha:0},7).to({_off:true},1).wait(136));

	// n9.png
	this.instance_13 = new lib.元件21();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.7,58.1,1.537,1.537,0,0,0,117.5,28.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(186).to({_off:false},0).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.cubicInOut).to({regY:28,scaleX:1.03,scaleY:1.03,x:150.6,y:57.9},4,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1},3,cjs.Ease.cubicInOut).wait(40).to({alpha:0},7).to({_off:true},1).wait(136));

	// t21.png
	this.instance_14 = new lib.元件13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-79.3,80.9,1,1,0,0,0,66,17.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(111).to({_off:false},0).to({x:115,y:50.8},7,cjs.Ease.cubicInOut).to({x:110.8,y:51.5},5,cjs.Ease.cubicInOut).to({x:112,y:51.3},3,cjs.Ease.cubicInOut).wait(36).to({regY:17.6,scaleX:0.9,scaleY:0.9,x:115.7,y:52.6,alpha:0},7,cjs.Ease.cubicIn).to({_off:true},1).wait(214));

	// t22.png
	this.instance_15 = new lib.元件12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(117.7,82.7,0.344,0.344,0,0,0,9,10.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(111).to({_off:false},0).to({scaleX:1.49,scaleY:1.49},7,cjs.Ease.cubicInOut).to({regY:10.6,scaleX:0.89,scaleY:0.89,y:82.8},5,cjs.Ease.cubicInOut).to({regY:10.5,scaleX:1,scaleY:1,y:82.7},3,cjs.Ease.cubicInOut).wait(37).to({scaleX:0.9,scaleY:0.9,x:120.8,y:80.9,alpha:0},7,cjs.Ease.cubicIn).to({_off:true},1).wait(213));

	// t23.png
	this.instance_16 = new lib.元件11();
	this.instance_16.parent = this;
	this.instance_16.setTransform(373.8,45.9,1,1,0,0,0,61,17.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(111).to({_off:false},0).to({x:189.1,y:72.6},7,cjs.Ease.cubicInOut).to({x:193.4,y:72},5,cjs.Ease.cubicInOut).to({x:192.1,y:72.1},3,cjs.Ease.cubicInOut).wait(38).to({regX:61.1,regY:17.6,scaleX:0.9,scaleY:0.9,x:188,y:71.4,alpha:0},7,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// t2.png
	this.instance_17 = new lib.元件6();
	this.instance_17.parent = this;
	this.instance_17.setTransform(161.7,92.1,1.389,1.389,0,0,0,54.5,15.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(41).to({_off:false},0).to({regX:54.6,regY:15.6,scaleX:0.95,scaleY:0.95,x:158.2,y:82.5},8,cjs.Ease.quadInOut).to({regY:15.5,scaleX:1.02,scaleY:1.02,x:158.8,y:84},5,cjs.Ease.quadInOut).to({regX:54.5,scaleX:1,scaleY:1,x:158.5,y:83.5},4,cjs.Ease.quadInOut).wait(31).to({scaleX:0.74,scaleY:0.74,x:156.5,y:77.9,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(282));

	// t1.png
	this.instance_18 = new lib.元件2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(150.6,45.7,1.389,1.389,0,0,0,118.5,26.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(38).to({_off:false},0).to({scaleX:0.95,scaleY:0.95,x:150.5,y:50.7},8,cjs.Ease.quadInOut).to({regY:26,scaleX:1.02,scaleY:1.02,y:49.8},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:50},4,cjs.Ease.quadInOut).wait(32).to({scaleX:0.74,scaleY:0.74,y:53,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(284));

	// bg
	this.instance_19 = new lib.bg();
	this.instance_19.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(384));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,108.7,417.2,266.3);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_atlas_.png?1537531916502", id:"300x250_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3C2BB1652FB40F42ABABBE896AD6B230'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
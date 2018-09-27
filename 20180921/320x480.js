(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x480_atlas_", frames: [[0,0,403,250],[0,453,300,73],[707,0,300,250],[366,372,142,40],[302,453,43,43],[905,467,71,12],[971,306,50,92],[502,441,42,64],[754,367,79,78],[879,306,83,83],[993,252,17,19],[754,447,43,50],[546,441,48,45],[405,0,300,250],[366,414,74,63],[442,414,58,56],[835,434,68,54],[510,372,79,67],[602,252,150,240],[754,252,237,52],[905,434,109,31],[754,306,123,59],[835,391,134,41],[0,252,600,118],[0,372,364,79]]}
];


// symbols:



(lib.圖層1 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5png複製 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.n9 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.p1 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.p2 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.pen = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.pp1 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.t42 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.t43 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.ttt1 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.ttt3 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(24);
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

	// 圖層 4
	this.instance = new lib.圖層1();
	this.instance.parent = this;
	this.instance.setTransform(-193.4,-34.4,1,1,-6);

	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-210.6,-101,1,1,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 圖層 1
	this.instance_2 = new lib.圖層1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-201.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.6,-143.1,444.2,357.4);


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


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pp1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件50, new cjs.Rectangle(0,0,150,240), null);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ttt1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(0,0,600,118), null);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib._5png複製();
	this.instance.parent = this;
	this.instance.setTransform(-37,-4,1.486,1.486);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(-37,-4,445.7,108.5), null);


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

	// 圖層 2
	this.instance = new lib.ttt3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.505,0.505);

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

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AisCEQgJgIgCgQQgBgEgBgZIAAgYQAAgNAEgJQAIgUAkgOQAfgNAigIIAdgIQAQgFAKgJIARgUQAIgIAUgLQATgMAIgIIALgLQAGgHAFgDQAKgIARgDQAagIARAGQAOAEAKAPQAKANADARQACANAAAUIgBAhIABAWQAAAMgDAJQgDANgNAUQgRAagPAMQgUAPgeAGQgiAJgvAAIhRgDQgJgBgEADIgGAHQgJALgaABIgJABQgWAAgKgJg");
	mask.setTransform(36.2,44.8);

	// 圖層 1
	this.instance = new lib.mo3();
	this.instance.parent = this;
	this.instance.setTransform(16,19);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件31, new cjs.Rectangle(17.6,30.8,37.2,28.2), null);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,17,19), null);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAaDaIgcgBQgRgBgdgHQgbgHgHgNQgCgDgDgOIgGg4QgCgQADgIQADgHAIgHIAOgPQALgLAEgIIAHgTIgBgBQgcgKgbgQQgagQgIgQQgHgOAAgdQAAgQADgKQAEgOAQgUQAfgkAggTQAngYApgBQANgBAMAEQAKADALALQAMAKAGAHQANAUACAgQABASgBAkIAAAZQABAOgCAKIgCAMQAFABADADQAIAHAJASIANAQQAFAKAAAWIAABGQAAAXgFALQgGALgSALQgVANgbAMIgRAGIgNABIgKgBg");
	mask.setTransform(18.1,17.8);

	// 圖層 1
	this.instance = new lib.mo2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件28, new cjs.Rectangle(3.8,0,28.7,39.7), null);


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


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,109,31), null);


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


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件35();
	this.instance.parent = this;
	this.instance.setTransform(255.9,35.9,1.272,1.272,0,0,0,34.1,27.1);

	this.instance_1 = new lib.元件36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.2,40.9,1.272,1.272,0,0,0,29.1,28);

	this.instance_2 = new lib.元件37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.5,40.4,1.272,1.272,0,0,0,37.1,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(16.3,0,282.8,80.2), null);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApiEyQgOgIABgXIgBo1QAAgEADgEQAIgJARgBQARgBDgABIDcAAIARAgQASAnABAoQACArANAUQAHANAXAPQAQAKARACQAIABAFgCIADAdQADAeAJALQAMANANAEQAOAEASgDQAggEAOgIQAcgQAEgpQAJhDAGgaQAJg0ARgxIASgmQF3AAAQACQAPABAIAGQAKAIABATIAAIrQgBAJgEAHQgHAKgOAAQgWgByWABIgCAAQgGAAgGgDg");
	mask.setTransform(154.6,118.8);

	// 元件 50
	this.instance = new lib.元件50();
	this.instance.parent = this;
	this.instance.setTransform(154.7,121,0.548,0.548,90,0,0,75,119.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.元件4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件51, new cjs.Rectangle(0,0,300,250), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;
	this.instance.setTransform(300,59,1,1,0,0,0,300,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,118);


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


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(46.7,162.5,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.3,171.6,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.4,170,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,113.2,258.3,82.2);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(0,0,79,78), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

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


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件18();
	this.instance.parent = this;
	this.instance.setTransform(135.1,49.1,1,1,0,0,0,135.1,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:0.98},9,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},3,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270.2,98.4);


// stage content:
(lib._320x480 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_56 = function() {
		this.phone.gotoAndPlay('play');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(56).call(this.frame_56).wait(206));

	// logo
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(53.1,21.4,1.071,1.071,0,0,0,35.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262));

	// t41.png
	this.instance_1 = new lib.元件33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(157.5,114.2,1.21,1.21,0,0,0,92.1,20.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({y:97.8,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t43.png
	this.instance_2 = new lib.元件32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(224.8,206.1,1.071,1.071,0,0,0,67,20.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({regY:20.6,y:196.8},7,cjs.Ease.cubicOut).wait(148));

	// t42.png
	this.instance_3 = new lib.元件34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(87.3,210.2,1.071,1.071,0,0,0,61.5,29.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({y:201.6},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_4 = new lib.元件53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(161,314.3,1,1,0,0,0,149.5,40.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({y:289.3,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_5 = new lib.元件40();
	this.instance_5.parent = this;
	this.instance_5.setTransform(179,395.7,1.366,1.366,0,0,0,86,24.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).to({regY:24.5,y:384.7,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("EgocAlzQyYkPhkp3Qhkp3QMptQQNprYcj3QYcj3SYEPQSZEQBkJ2QBjJ3wMJsQwMJt4cD3QroB1qRAAQrTAAppiOg");
	var mask_graphics_106 = new cjs.Graphics().p("EgnEAkXQyZkQhjp2Qhkp3QMptQQMprYdj3QYbj3SZEPQSZEQBjJ2QBkJ2wMJtQwMJs4dD3QroB2qRAAQrTAApoiOg");
	var mask_graphics_107 = new cjs.Graphics().p("EgnEAi6QyZkPhjp3Qhkp3QMpsQQMpsYdj3QYbj2SZEPQSZEPBjJ2QBkJ3wMJsQwMJt4dD3QroB2qRAAQrTAApoiPg");
	var mask_graphics_108 = new cjs.Graphics().p("EgnEAheQyZkPhjp3Qhkp3QMpsQQMpsYdj3QYbj3SZEPQSZEQBjJ2QBkJ3wMJsQwMJt4dD3QroB1qRAAQrTAApoiOg");
	var mask_graphics_109 = new cjs.Graphics().p("EgnEAgCQyZkPhjp3Qhkp3QMpsQQMpsYdj3QYbj3SZEPQSZEQBjJ3QBkJ1wMJtQwMJt4dD2QroB2qRAAQrTAApoiOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-387.4,y:256.1}).wait(1).to({graphics:mask_graphics_106,x:-274.3,y:246.9}).wait(1).to({graphics:mask_graphics_107,x:-152.5,y:237.7}).wait(1).to({graphics:mask_graphics_108,x:-30.7,y:228.4}).wait(1).to({graphics:mask_graphics_109,x:91.2,y:219.2}).wait(153));

	// 圖層 7
	this.instance_6 = new lib.補間動畫6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(139.6,269,1.071,1.071,4.7,0,0,0.1,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).wait(157));

	// ttt2.png
	this.instance_7 = new lib.元件47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(168.6,174.1,0.17,0.17,0,0,0,186.3,51);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({regY:50.9,scaleX:0.47,scaleY:0.47,x:166.8,y:162.1,alpha:1},5,cjs.Ease.quadInOut).to({regX:186.1,regY:50.6,scaleX:0.41,scaleY:0.41,x:166.9,y:163},3,cjs.Ease.quadInOut).wait(28).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(163.6,117.9,0.731,0.731,0,0,0,300,59.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({regX:300.4,scaleX:0.48,scaleY:0.48,x:163.5,y:125.4},5,cjs.Ease.quadInOut).to({regX:300.3,scaleX:0.5,scaleY:0.5,y:124.8},3,cjs.Ease.quadInOut).wait(36).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(158,153.7,1.071,1.071,0,0,0,118.6,40.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 11
	this.instance_10 = new lib.元件52();
	this.instance_10.parent = this;
	this.instance_10.setTransform(163.4,322.2,1.071,1.071,0,0,0,135.1,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(42).to({alpha:0},9).to({_off:true},1).wait(210));

	// 元件 3
	this.instance_11 = new lib.元件3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(146,279.8,1.071,1.071,-21.7,0,0,2.7,65.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:2.8,regY:65.5,rotation:-6.7,guide:{path:[146,279.7,146,280,146.1,280.3,146.1,278.1,146.7,276,148.2,271.9,151.7,271.2,152.2,271.1,152.7,271,155.3,270.5,158.9,269.8,162.1,269.9,163.3,274,163.8,276.3,164.4,278.5,165.3,282.1,166.1,285.3,166.1,284.6,168.2,281.5,170.7,277.8,172.7,276.8,175.3,275.6,178.2,275.8,181.4,275.9,182.6,277.9,183.7,279.6,185.1,286.6,185.8,290.1,186.4,293,188.3,288,190.2,282.7,193.9,272,194.1,268.8,194,260.9,194,255.6,194,245.6,195.5,242.1,197.1,238.4,199.2,237.4,199.2,237.4,203.6,236.5,206.8,235.8,208.8,237.6,211.3,239.9,211.3,245.6,211.3,250.3,210.6,256.8,209.9,263.2,209.9,264.5,209.9,268.4,209.6,278.9,208,285.3,207.2,288.5,206.4,291.7,206.4,291.6]}},33,cjs.Ease.quadInOut).wait(14).to({rotation:-6.7},0).wait(2).to({regX:2.7,scaleX:0.97,scaleY:0.97,rotation:83.4,x:176.3,y:163.8},8).to({regX:2.8,regY:65.4,x:215.8,y:183},5,cjs.Ease.cubicInOut).to({x:212.4,y:178.5},4,cjs.Ease.quadInOut).wait(30).to({alpha:0},8).to({_off:true},1).wait(157));

	// 元件 5
	this.instance_12 = new lib.元件51();
	this.instance_12.parent = this;
	this.instance_12.setTransform(159.4,336.2,1.071,1.071,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({regX:150.1,regY:125.1,scaleX:0.97,scaleY:0.97,x:159.5,y:284.7},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(359.2,552,2.361,2.361,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(47).to({_off:false},0).to({scaleX:1.4,scaleY:1.4,x:250.5,y:384.9},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_13 = new lib.元件22();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-48.2,525.6,2.361,2.361,0,0,0,39.5,39.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).to({scaleX:1.4,scaleY:1.4,x:66.5,y:377.2},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// t2.png
	this.instance_14 = new lib.元件6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(174.3,185.6,2.039,2.039,0,0,0,54.6,15.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},0).to({regY:15.7,scaleX:1.4,scaleY:1.4,x:169.1,y:171.5},8,cjs.Ease.quadInOut).to({regY:15.6,scaleX:1.5,scaleY:1.5,x:169.9,y:173.7},5,cjs.Ease.quadInOut).to({scaleX:1.47,scaleY:1.47,x:169.6,y:173},4,cjs.Ease.quadInOut).wait(15).to({regX:54.7,scaleX:1.09,scaleY:1.09,x:166.6,y:164.7,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(210));

	// t1.png
	this.instance_15 = new lib.元件2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(161.1,122.4,1.649,1.649,0,0,0,118.5,26.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({regX:118.6,scaleX:1.13,scaleY:1.13,x:161,y:128.3},8,cjs.Ease.quadInOut).to({scaleX:1.21,scaleY:1.21,y:127.3},5,cjs.Ease.quadInOut).to({scaleX:1.19,scaleY:1.19,y:127.6},4,cjs.Ease.quadInOut).wait(16).to({regX:118.5,scaleX:0.88,scaleY:0.88,x:160.9,y:131,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1.071,1.92);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.8,240,322.4,480);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x480_atlas_.png?1538038314882", id:"320x480_atlas_"}
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
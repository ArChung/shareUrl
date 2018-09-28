(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"970x250_atlas_", frames: [[754,480,139,131],[402,372,155,121],[754,354,169,124],[0,0,403,250],[0,522,300,73],[707,0,300,250],[302,575,142,40],[709,596,43,43],[895,541,50,92],[947,541,42,64],[402,495,79,78],[925,354,83,83],[1004,252,17,19],[352,522,43,50],[302,522,48,45],[405,0,300,250],[483,495,79,67],[602,354,150,240],[895,480,123,59],[446,575,134,41],[0,252,600,118],[0,372,364,79],[602,252,400,100],[0,453,400,67],[582,596,125,20]]}
];


// symbols:



(lib.向量圖智慧型物件1 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件2 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5png複製 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.n9 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pen = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.pp1 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.t42 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.t43 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.ttt1 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.ttt3 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.ty1 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.ty2 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.資產4 = function() {
	this.spriteSheet = ss["970x250_atlas_"];
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
	this.instance.setTransform(-570.8,-54.3,2.506,1.395,-6.8);

	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-116,-159.2,1.541,1.395,-0.3);

	this.instance_2 = new lib.圖層1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-530.5,-69.3,1.395,1.395,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 圖層 1
	this.instance_3 = new lib.圖層1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-122.1,-105.2,1,1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-570.8,-173.7,1077.9,465.8);


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


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.向量圖智慧型物件();
	this.instance.parent = this;
	this.instance.setTransform(107.4,-104.4,1.131,1.131,-5.9);

	this.instance_1 = new lib.向量圖智慧型物件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(396,-51,0.677,0.677);

	this.instance_2 = new lib.向量圖智慧型物件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(276,-55,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(107.4,-124.2,393.6,167.6), null);


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


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t42();
	this.instance.parent = this;
	this.instance.setTransform(-220,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(-220,30,123,59), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.ttt3();
	this.instance.parent = this;
	this.instance.setTransform(-258,15,0.758,0.758);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(-258,0,442,74.9), null);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.t43();
	this.instance.parent = this;
	this.instance.setTransform(-217,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(-217,30,134,41), null);


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

	// 圖層 2
	this.instance = new lib.ty2();
	this.instance.parent = this;
	this.instance.setTransform(-76,-10,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-76,-10,241.4,41), null);


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

	// 圖層 2
	this.instance = new lib.ty1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.592,0.592);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,237,59.3), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.資產4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,125,20), null);


(lib.元件54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA/DIQgDgFgCgLQgGgDgRgBQgOgBgFgHQgEgFAAgNQABgagCgMQgCgVgLgMIgNgOQgDgFgCgIIgDgNQgDgMgPgWQgOgTgCgNIgCgdQAAgJgHgbQgFgWABgNQgNgCgFgQIgCgbQgBgPACgFQADgGAHgFQAOgMAOAHQAHAEAIAPIALAWIAKAhQAIAWAUAsQAPAnAEAnQABALAEACQACABADAAIAFAAQALAAAIALQAEAHADAOQAFAVACAYQABAcADAJIAGASQADAJgEAUQgDAPgJADIgDAAQgHAAgEgHg");
	mask.setTransform(9.1,59.6);

	// 補間動畫 2
	this.instance = new lib.補間動畫2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42.6,41.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件54, new cjs.Rectangle(1.1,38.9,17.2,41.4), null);


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
	this.instance.setTransform(95,52.4,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.8,33.6,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(250.3,34.6,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.3,3.1,256.6,57);


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

	// 圖層 9
	this.instance = new lib.元件54();
	this.instance.parent = this;
	this.instance.setTransform(46.7,40.2,1,1,-120,0,0,42,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnfH1IAAvpIO/AAIAAPpgAmigfQgHAFgCAGQgCAFABAPIACAaQAEAQANACQgBANAGAWQAGAbABAJIABAdQADANAOAUQAOAWADAMIADANQACAIADAFIAOAOQALAMADAVQABAMgBAaQAAANAEAFQAFAHAPABQARABAFADQACALADAFQAFAIAKgBQAIgDADgPQAEgUgCgJIgHgSQgDgJgBgcQgBgYgFgVQgDgOgFgHQgIgLgLAAIgEAAQgDAAgCgBQgFgCgBgLQgDgogQgnQgUgsgIgWIgLghIgKgVQgJgPgGgEQgGgCgFAAQgJAAgJAHg");
	mask.setTransform(41.9,42.8);

	// 圖層 1
	this.instance_1 = new lib.補間動畫2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.5,41.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(-10.4,-17.1,113.4,113.4), null);


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
(lib._970x250 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(49.5,20,1,1,0,0,0,35.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262));

	// t41.png
	this.instance_1 = new lib.元件33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(491,49.4,1,1,0,0,0,92,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({y:35.8,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t43.png
	this.instance_2 = new lib.元件32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(667.9,115.8,1.295,1.295,0,0,0,67,20.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({regY:20.6,y:94.5},7,cjs.Ease.cubicOut).wait(148));

	// t42.png
	this.instance_3 = new lib.元件34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(501.5,120.7,1.295,1.295,0,0,0,61.5,29.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({regY:29.6,y:100.4},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_4 = new lib.元件53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(494.6,166.4,1.486,1.486,0,0,0,111.1,29.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({regX:111,scaleX:1,scaleY:1,x:494.4,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_5 = new lib.元件40();
	this.instance_5.parent = this;
	this.instance_5.setTransform(504.9,220.1,1.105,1.105,0,0,0,86.1,24.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).to({regX:86.2,scaleX:1.38,scaleY:1.38,x:505.1,y:211.2,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("Eg+sAwYQ9fmzigv0Qifv0Z9vjUAZ/gPjAnOgGMUAnMgGMAdgAGzQdgG0CgP0QCfPz5+PjUgZ+APkgnOAGMQyqC9weAAQyIAAvdjlg");
	var mask_graphics_106 = new cjs.Graphics().p("EhAgAuTQ+WnAilwRQikwSauv/UAavgQAAoWgGYUAoWgGYAeWAHAQeXHBClQRQCkQQ6vQAUgauAQBgoWAGYQzNDCw9AAQypAAv6jrg");
	var mask_graphics_107 = new cjs.Graphics().p("EhCVAsNQ/MnMipwvQipwvbewcUAbfgQdApfgGjUApfgGjAfNAHMQfNHNCpQvQCpQt7fQdUgbeAQegpfAGjQzvDIxcAAQzLAAwXjyg");
	var mask_graphics_108 = new cjs.Graphics().p("EhEJAqHUggEgHZgCtgRMQiuxMcOw5UAcQgQ6AqogGuUAqngGvAgEAHZUAgFAHaACtARMQCuRL8QQ5UgcOAQ7gqoAGvQ0SDMx6AAQztAAwzj4g");
	var mask_graphics_109 = new cjs.Graphics().p("EhF9Ap6Ugg7gHlgCygRqQiyxoc+xYUAdAgRWArxgG6UArwgG6Ag6AHlUAg8AHnACyARpQCyRo8/RXUgc/ARXgrxAG6Q00DTyZAAQ0OAAxQj/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-580.3,y:332.5}).wait(1).to({graphics:mask_graphics_106,x:-319,y:319.8}).wait(1).to({graphics:mask_graphics_107,x:-57.8,y:307.1}).wait(1).to({graphics:mask_graphics_108,x:203.4,y:294.3}).wait(1).to({graphics:mask_graphics_109,x:464.6,y:269.5}).wait(153));

	// 圖層 7
	this.instance_6 = new lib.補間動畫6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(474.3,182.8,1,1,4.7);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).wait(157));

	// ttt2.png
	this.instance_7 = new lib.元件47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(312.1,173.7,0.271,0.271,0,0,0,186.6,51.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({regX:186.4,regY:51,scaleX:0.74,scaleY:0.74,x:309.2,y:154.5,alpha:1},5,cjs.Ease.quadInOut).to({regX:186.3,regY:50.9,scaleX:0.66,scaleY:0.66,x:309.4,y:156},3,cjs.Ease.quadInOut).wait(28).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(315.3,78.3,1.167,1.167,0,0,0,300.3,59.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({regX:300.4,scaleX:0.76,scaleY:0.76,x:315.2,y:90.1},5,cjs.Ease.quadInOut).to({regY:59.3,scaleX:0.79,scaleY:0.79,x:315.1,y:89.4},3,cjs.Ease.quadInOut).wait(36).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(643.7,111.4,1.237,1.237,0,0,0,118.5,40.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 11
	this.instance_10 = new lib.元件52();
	this.instance_10.parent = this;
	this.instance_10.setTransform(699.4,159.4,1.39,1.39,0,0,0,135.1,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(42).to({alpha:0},9).to({_off:true},1).wait(210));

	// 元件 3
	this.instance_11 = new lib.元件3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(677,104.2,1.39,1.39,-21.7,0,0,2.8,65.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:65.5,rotation:-6.7,guide:{path:[677,104.2,677,104.6,677,105,677,102.1,677.9,99.4,679.7,94,684.3,93.1,685,93,685.7,92.9,689,92.2,693.7,91.3,697.9,91.4,699.3,96.8,700.2,99.7,700.9,102.5,702.1,107.3,703,111.3,703,110.5,705.8,106.4,709,101.6,711.6,100.4,715,98.8,718.7,99,722.9,99.3,724.4,101.8,725.8,104,727.7,113.1,728.7,117.6,729.4,121.4,731.8,115,734.3,108.1,739.1,94.2,739.4,89.9,739.3,79.7,739.3,72.9,739.3,60,741.2,55.4,743.3,50.6,746,49.4,746,49.4,751.7,48.1,755.8,47.2,758.4,49.6,761.7,52.5,761.7,60,761.7,66,760.8,74.4,759.9,82.7,759.9,84.5,759.9,89.5,759.4,103.1,757.4,111.5,756.4,115.6,755.4,119.7,755.3,119.5]}},33,cjs.Ease.quadInOut).wait(14).to({rotation:-6.7},0).wait(2).to({regY:65.4,scaleX:0.96,scaleY:0.96,rotation:83.4,x:711.1,y:15.3},8).to({regY:65.5,x:749.9,y:34.3},5,cjs.Ease.cubicInOut).to({x:746.5,y:29.8},4,cjs.Ease.quadInOut).wait(30).to({alpha:0},8).to({_off:true},1).wait(157));

	// 元件 5
	this.instance_12 = new lib.元件51();
	this.instance_12.parent = this;
	this.instance_12.setTransform(694.5,177.5,1.39,1.39,0,0,0,150.1,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({regY:125.1,scaleX:0.96,scaleY:0.96,x:694.4,y:130.9},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(947.4,366.9,2.455,2.455,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(47).to({_off:false},0).to({regX:41.5,regY:41.5,scaleX:1.46,scaleY:1.46,x:834.3,y:193.1},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_13 = new lib.元件22();
	this.instance_13.parent = this;
	this.instance_13.setTransform(453.2,339.2,2.455,2.455,0,0,0,39.6,39);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).to({regY:39.1,scaleX:1.46,scaleY:1.46,x:572.5,y:185.2},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// t2.png
	this.instance_14 = new lib.元件6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(330.6,175.3,3.192,3.192,0,0,0,54.6,15.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},0).to({regY:15.7,scaleX:2.19,scaleY:2.19,x:322.4,y:153.1},8,cjs.Ease.quadInOut).to({regY:15.6,scaleX:2.34,scaleY:2.34,x:323.7,y:156.6},5,cjs.Ease.quadInOut).to({scaleX:2.3,scaleY:2.3,x:323.3,y:155.5},4,cjs.Ease.quadInOut).wait(15).to({regY:15.8,scaleX:1.71,scaleY:1.71,x:318.6,y:142.7,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(210));

	// t1.png
	this.instance_15 = new lib.元件2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(305.1,77,2.631,2.631,0,0,0,118.6,26.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({regX:118.7,regY:26.2,scaleX:1.8,scaleY:1.8,x:305,y:86.6},8,cjs.Ease.quadInOut).to({regY:26.1,scaleX:1.93,scaleY:1.93,x:305.2,y:84.9},5,cjs.Ease.quadInOut).to({scaleX:1.89,scaleY:1.89,x:305.1,y:85.3},4,cjs.Ease.quadInOut).wait(16).to({regY:26.3,scaleX:1.41,scaleY:1.41,x:305,y:91.1,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,3.233,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,105.6,970,370.7);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/970x250_atlas_.png?1538102768957", id:"970x250_atlas_"}
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
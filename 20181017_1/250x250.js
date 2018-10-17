(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"250x250_atlas_", frames: [[328,442,139,131],[171,442,155,121],[0,433,169,124],[0,0,403,250],[405,99,43,43],[405,0,42,64],[226,252,186,188],[0,252,224,179],[405,66,17,19],[449,47,43,50],[449,0,48,45],[0,559,142,40]]}
];


// symbols:



(lib.向量圖智慧型物件1 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件2 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.manpng複製 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.man2 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.群組8 = function() {
	this.spriteSheet = ss["250x250_atlas_"];
	this.gotoAndStop(11);
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


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(278.1,101.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(16.8,35.6,522.6,132), null);


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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(118,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(12.6,9.8,216.4,79), null);


(lib.補間動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.instance = new lib.圖層1();
	this.instance.parent = this;
	this.instance.setTransform(-210.6,-101,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-201.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.6,-143.1,427,290.8);


(lib.元件63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbC3IAmheIhYjLIA1AAIA8CRIA4iRIA0AAIh4EpgAo+BMQghghAAgxQAAgzAgggQAfgdArgBQAWAAASAJQATAHALAPIAAgaIAyAAIAADXIgyAAIAAgdQgMAQgSAIQgTAKgVgBQgpAAgggdgAocg2QgSATgBAcQABAcASATQAUAUAbAAQAcAAASgUQASgTAAgcQAAgbgSgUQgSgTgcAAQgbAAgUATgAuOBMQgjghAAgxQAAg0AigfQAegdAsgBQAVAAASAJQASAHAMAPIAAgaIAyAAIAADXIgyAAIAAgdQgMAQgSAIQgSAKgWgBQgqAAgegdgAtsg2QgTATAAAcQAAAcATATQASAUAcAAQAcAAATgUQASgTAAgcQAAgbgSgUQgTgTgcAAQgcAAgSATgAyvBAQgngoAAg4QAAg6AngoQAogpA7AAQApABAgASQAgATARAgIgsAaQgZgvg0AAQgmAAgZAbQgaAZAAAmQAAAlAaAaQAZAaAnAAQAeAAAVgQQAUgQAHgaIhWAAIAAgwICMAAIAAAUQAAA4gkAmQglAog7AAQg9ABgogqgARBBoIA8heQgJADgHAAQgkAAgZgZQgagbAAgnQAAgpAcgaQAbgZApgBQAqABAcAaQAbAbAAAmQAAAogUAfIhGBwgARWhvQgOAOAAAUQAAATAOAOQAOAOATAAQAUAAAOgOQANgOAAgUQAAgTgNgOQgPgPgTAAQgTAAgOAPgANiBeQgWgKgOgOQgOgOgJgUQgJgUABgVQAAgXAIgUQAJgUAPgPQAOgNAVgKQAWgJAXAAQAYABAUAHQAUAIAQAOQAQAPAHASQAIATAAAXIAAAQIiwAAQAFAXASAOQARAPAbAAQAUgBARgJQAPgLAHgSIAqAYQgOAbgaAQQgYAQglAAQgbgBgUgHgANog9QgRALgHAQIB7AAQgFgRgQgKQgPgKgYAAQgWABgRAJgAMIBmQgaAAgQgFQgRgFgKgKQgLgLgDgRQgFgRABgaIAAhRIglAAIAAgsIAlAAIAAghIAygjIAABEIAsAAIAAAsIgsAAIAABQQAAAOABAKQACAIAEAEQAEAGAKABIAXABIAAAwgAHoBeQgVgJgPgPQgPgOgIgVQgKgTABgVQgBgXAKgUQAHgTAQgQQAQgPAUgIQAVgJAWAAQAYAAAUAJQAVAJAPAOQAQAPAIAUQAJAUAAAXQAAAVgJATQgIAVgQAOQgOAOgWAKQgTAHgZABQgYgBgTgHgAH6g/QgKAFgKAJQgHAHgFAMQgFAMAAANQAAALAFALQAFAMAHAHQAKAJAKAFQAMAFANgBQAOABAMgFQAMgFAHgJQAJgHAFgMQAFgLgBgLQABgNgFgMQgFgLgJgIQgIgJgLgFQgLgEgPAAQgNAAgMAEgAFQBmIh5i+IAAC+IgxAAIAAkNIA5AAIB0C2IAAi2IAyAAIAAENgAjKBlIg1hIIgzBIIg+AAIBShtIhOhqIA8AAIAyBEIAwhEIA8AAIhOBqIBSBtgAqsBlIAAkRIAzAAIAAERg");
	this.shape.setTransform(123.9,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件63, new cjs.Rectangle(0,0,247.8,36.5), null);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(178.5,127.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(0,0,357.1,255.3), null);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.man2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(0,0,224,179), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHPBgIgMgDIgFgaIARAEIAMABQADgBACgCQADgDABgEQACgKABgZIABhEIgsAAQgEALgFAKIgKASIgRgNIAABhIgZAAIAAgMIgbAAIAAAUIgYAAIAAiaIATAAIADgPIADgQIAZAGIgCANIgEAMIAgAAIAAAmIAHgOIAGgPIAIgVIAGgTIAZAIIgEALIgDAMIA7AAQAAA9gCAhQgCAkgEAJQgDALgHAFQgIAGgLAAIgMgBgAFkAwIAbAAIAAggIgbAAgAFkgGIAbAAIAAgjIgbAAgAB7BOQAIgHAHgIQAGgHAFgJIACgDIAEgFIgHgFIgFgFIgDAKIgWgFIAJgjIAGgnIgPAAIAAgWIATAAIACgQIACgQIAXAEIgCAOIgCAOIAkAAQgBAUgCASQgBATgFAPIgDAMIgDALIAJAJIAJAJIgQASIgHgHIgFgHIgCADIgCADQgGAKgIAJQgHAIgKAIgACZgPIgFAVIAIAFIAIAHIABgGIABgEIAFgYIADgYIgRAAIgEAZgAjdBgIAAgnQgKAHgJAGIgbANIgYAIIgLgTIAUgHIAXgJIALgFIAJgGIg5AAIAAgTIBLAAIAAgJIAYAAIAAAJIBPAAIAAATIg6AAIAJAFIAKAEIAVAIIAYAFIgNAZIgZgKIgYgLIgMgJIgLgIIAAAqgAlyBgIAAgHIheAAIAAAHIgYAAIAAhjICNAAIAABjgAnQBCIBeAAIAAgMIheAAgAnQAfIBeAAIAAgNIheAAgAgpBeIAAhcIgYACIgaACIgDgUIAFAAIAEgBIAAg5IgHAAIAAgUIBOAAIAAAUIgFAAIAACOIAFgPIACgOIASAFQAAALgDAKIgFAUIgRgJIAAAQgAhAgQIAMAAIALgBIAAgFIgXAAgAhAgoIAXAAIAAgGIgXAAgAhAhBIAXAAIAAgHIgXAAgAAdBcQgEAAgCgCQgHAAgDgFQgDgGAAgJIAAgfIAVAAIAAAYIABAGIACACIADABIAEAAIAGAAIADAAIADAAIACgBIACgFIABgJIARAJIgGgKIgFgJIASgLIALARIAJASIgTALIgDgGIgDgFIgBAIIgCAGQgBADgDACIgFACIgYABIgMgBgAC/BcIAAgXIAOAAIAAiaIBZAAIAACaIAPAAIAAAXgADlBFIAqAAIAAgbIgqAAgADlASIAqAAIAAgbIgqAAgADlgiIAqAAIAAgcIgqAAgAhcBCIAHAAIAHgBIAAgLIgKAAIAAgSIAKAAIAAgJIgKAAIAAgSIAsAAIAAASIgNAAIAAAJIAMAAIAAASIgMAAIAAAKIAGgBIAEAAIAEATIgWACIgXAEgAAlAtIgIgLIAKgHIgzAAIAAgUIBrAAIAAAUIgsAAIAHAKIAFAJIgUALIgGgMgAG5ASQgEgMgFgKIAXgHIAJAVQAFAMADANIgaAIIgFgZgAkvgEIAEgBIAGAAIAPgXIgNgMIgLgNIANgRIACABIAAABIAHgNIAHgNIAUAIIgKARIgKAPIAEADIADACIAGgKIAEgKIASAIIAAgRIAQAAIAEgQIAXAFIgCAGIgCAFIAWAAIAAASIAEgFIADABIABABIAJgQIAIgPIATAIIgKATIgKAQIADACIACACIAIgMIAHgMIAVAJIgMASIgMARIAMgGIAIAUIAHAVIgSAHIgBgGIgBgFIgXAEIgZADIAAACIg9AAIAAgGIgNAFIgBgDIgBgCIgWAFIgYAGgAjxgQIADAPIAAg2IgJAPIgJAPIAKgFIAFAOgAjYgHIARAAIAAgOIgRAAgAkIgPIgDAGIAFgBIAFgBIgBgFIgBgEIgFAFgAixgKIABAAIABAAIAIgJIAGgIIgQgOgAiOgRIgFAEIAHAAIAGgBIgDgEIgCgGIgDAHgAjYgpIARAAIAAgRIgRAAgAgLAAIAAg2IAhAAIABgHIgiAAIAAgUIAmAAIABgNIAXAAIgCANIAuAAIAAAUIgwAAIgBAHIAxAAIAAA2gABBgSIAIAAIAAgRIgIAAgAAmgSIAHAAIAAgRIgHAAgAAKgSIAIAAIAAgRIgIAAgAn/gMIAAgXIAtAAIgHgXIgcAAIAAgWIBEAAIAAgQIAaAAIAAAQIBIAAIAAAWIgeAAIgCAHIgDAHIgBAEIgCAFIAvAAIAAAXgAm4gjIAoAAIACgFIADgFIACgHIABgGIg4AAg");
	this.shape.setTransform(70.8,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 2
	this.instance = new lib.群組8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件56, new cjs.Rectangle(0,0,142,40), null);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#219CD8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件55, new cjs.Rectangle(0,0,300,250), null);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.向量圖智慧型物件1();
	this.instance.parent = this;
	this.instance.setTransform(87,4,0.394,0.394);

	this.instance_1 = new lib.向量圖智慧型物件();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-2,0.488,0.488);

	this.instance_2 = new lib.向量圖智慧型物件2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(158,1,0.421,0.421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(-6,-2,229.3,61.6), null);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件38, new cjs.Rectangle(0,0,43,43), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("ApQESIBNgJQgHgSgKgQIAZgPIgzAGIgChkQgRALgPAGIgNgiQAcgNAZgVQgNgOgSgOIAkggQARAMAOAOQARgTAQgZIhqAMIAAgoICcgSIAAAMIANANQAagOAYgXIAdAXQgWAXgbASQAIAHAKAGQAZgTATgaIAgAZQgTAYgYATQAYAQAcAMIgcAqIgSgKIABBkIg3AHIAfAFQgMAcgHANIBTgKIABArIktAjgAnsDWQAKAPAIATIgaAPIBPgJQAKgXAIgbgAoICQIAAAfICVgRIgBgfgAn5BPIgcAZIC1gWQgQgKgRgOIAAAKIhtANIgBgMgAnTAlIAzgGIgcgcQgNAVgKANgAjcDfIAygNIgBhZIgsAFIAAgqIArgFIAAgZIgZADIgBgZIgGAHIgegdQAWgXAOgYQAQgZALgdIAmAIIgEAJQAeAQAYAUIgaAnQgXgTgWgQIgJAQQgKATgKAMIBOgJIABAqIgdADIAAAZIAogFIABAqIgpAFIABBSIAogMIABAHQAdgdAXghIAWAXQgbAwgfAcIgLgMIABAGQg6AXg/ATgAgqD7IgIgqQAMADAMgCQAHAAADgFQACgIAAgNIgBh6IhEAIIgBglIBegMIAFgUIg3AGIgDANIglgCIAfh5IAkADIgDAOIBegLIgfByIAtgFIAAAlIhIAJIAAAmIAJAOQAPgXAKgaIAfARQgRAlgTAYQAVAYAbANIgSAqQgVgLgTgUQgJgLgJgOIAAAdQABAggIAMQgKAOgYADIgIABIgOgCgAgagxIgGAWIA3gGIAGgXgACVC5IAogaIAAhPIgmAEIAAgrIBMgJIABBzQAOAJAPAEIgPgjQAsgXAVgfQAKgOAEgRIhRAJIgBgrIBYgKIAAgDIAAgjIhMAIIgBgrIAtgFQgIgRgNgRIAigcQARAUALAVIgXATIAugFQAMgeAJgiIAuAJQgKAbgMAWIAsgFIAAArIhRAKIAAAnIBegLIAAAqIhSAKQAFALAGAIQAKAOATAKQAQAKAaAHIgUAuQgcgIgbgVQgUgPgMgVQgHAOgIAMQgcAlgvAYQAIABAHgBQATACBZgKQAzgGAhgMQgLAZgGAdIhoAMQg4AGghgFQgYgFgYgTIgjAzQgRgcgMgQgAjgCZIAjgQQAIAXAGAfIgkARQgEgggJgXgAiBCvQAGgcADgZIAkAGQgEAcgHAZgAhQBgIAdgXQANATAIAUIggAYQgGgUgMgUgACUgPIAdgmQAWALATARIgcApQgUgSgWgNgACrhZIAdgmQAWALAUASIgbArQgWgWgWgMgAJPiXQAChSgvgmQgigbg4gBIgzAEIgDgOIA4gGQA8ACAmAfQA0AqgCBagAHOitQgHgFgOAAIgMABIgEgPIARgBQASAAALAIQAPALABAXIgPABQgBgQgJgHgAIMijQABgagQgQQgRgQgigFIgfgBIAAgPIAjACQAlAFAUATQAVAUgBAhg");
	this.shape.setTransform(60.7,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(0.1,-4.1,121.3,63.2), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(92.1,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(0.1,-4.9,184,39.7), null);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#219CD8").s().p("Ap3BdIgeAIIgGgfIAPgDIASgbIgjgZIAQgYIAGAEQAPgcAKgZIAbAKQgOAdgQAbIAIAEIATgmIAcALQgZAsgUAeIASgEIgCgNIAWgLQAIAYAFAdIgaAMIgBgOIgNAEIABBzIgbAEgAovChIgCiAIgFAEIgOgaQATgKAJgPQAGgIADgKIgYADIgBgeIB7gOQABBFgKAIQgIAJgTADQgKABgLgCIgGgcQANADALgCQAFAAACgDQACgDABgWIgpAEQgCATgKARQgKAQgPALIBugNIABBjIgbADIAAgJIhAAIIAAAgQABALAJgBIAMgBQAhgDAFgCQAIgDABgGQACgCABgRIAdAPQgDAbgLAIQgHAEgMADQgIADgmAEIgWACIgDAAQgYAAAAgcgAoVA2IABAfIASgCIgBgfgAnoAxIAAAfIAUgCIgBgfgAqbC0QAFgeADgoIAZAEQgEAtgFAbgAmFgeIAdgDIAAgSIggAEIAAgfIB5gOIAAAeIggAEIABASIAegDIAEDNIgcAEIAAgOIhAAHIABAOIgcADgAloBwIAAARIA/gIIAAgRgAlpBSIBAgHIgBgQIgJABQgUACAAgZIgBgsIgGABIAAANQABAVgFASQgEAQgGALIgNgKgAlqgDIABAyIAFgMQADgMgBgNIAAgOgAkzgKIAAAmQABAHAFgBIADAAIAAgtgAlPg2IABASIAGAAIAAgTgApZBtIAYgKQAKAeADAdIgaALQgDgfgIgdgAj1CYQgPAAAAgiIgCh6IBGgIIAAg7IhEAIIgBggIBigLIABCHIgdAEIAAgOIgoAFIABBUQAAAKACABQACABASgCQALgCAEgBQAFgCADgDQACgFAAgdIAeANQgDAjgHAMQgFAGgFABQgTAEgQACQgWADgKAAIgFAAgAhVADICugTIACCIIgeAEIAAgKIhzAOIABAJIgeAEgAg2BPIAAASIBzgNIAAgSgAg3AeIAAATIBzgOIAAgSgACfBPQAagKAcgSQANgIAMgKIhIAJIAAgbIBcgLIAAgLIAfgEIAAALIBhgKIAAAaIhHAIQAKAGAOAEQAXAJAgADIgQAkQgegHgegQQgPgJgNgLIAAA6IgfADIAAg1QgJAKgNAKQglAagZAMgAHRhfIgdADIAAgeIBTgJIAAAdIgcADIACCrIgaADgAIOAlIAcgDIgEgTIgSACIAAg7ICBgPIAAA7IgOACIgHAUIAegEIAAAcIiQARgAJCAMIAFATIAbgEIAHgUgAIxgVIAAAMIBIgIIAAgNgAGuAsQAEgQACgVQACgTgBgVIAAgqIAYgDIABAqQAAAegEAaQgDAYgEAQgAHxhSIAYgDIACB4IgZACgACdgZIAMgEQAKgPAJgSIgfgeIASgaIACACIARgmIAYAJQgLAXgMAWIAHAIIANgeIAXAIIAAgXIASgCIAGgXIAbAEIgEAPIAagDIABAaIAGgKIAEAEQAKgUAJgZIAZAIQgMAegMAVQACACAEADQAJgPAJgVIAaAKQgQAegMAWIAOgKQALAZAIAeIgVAMIgDgOQgbAJghAIIAAACIhKAJIAAgJIgSAKIgBgIQgcANgdAIgADvgfIgBhLIgXAsIANgIQAHAVAEASgADKgmIAMgEIgDgNIgJARgAEJg+IAAAVIAVgDIAAgUgAE4g0IAFgBIAPgaIgUgQgAFeg8IAPgDIgEgNgAEJhwIAAAXIAUgDIAAgWgAhxglIA3gGIgJgeIgjAEIAAggIBUgJIAAgVIAggEIAAAVIBYgLIABAgIglAEIgGATIgEAOIA6gHIAAAfIjjAbgAgkhNIAKAeIAwgGIAGgPIAEgRgAIOhKICOgQIAAAYIiOARgAIPiwIAmgFIAAgQIAYgDIAAAQIAMgBIAAgQIAYgDIAAAQIAmgFIABBfIiIAPgAIph6IAAANIANgCIAAgMgAJNh+IABANIAMgCIAAgMgAJxiCIAAAMIANgBIAAgNgAIpicIAAAMIANgCIAAgLgAJNigIAAALIAMgBIAAgLgAJxikIAAALIANgBIgBgMgAG7itIBEgIIAAAdIhEAIg");
	this.shape.setTransform(67.1,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0.1,0.1,134,40.9), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWAPIAAgFIARAAIAAAGQAAAGAGAAQAFAAABgFQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQgBgDgNgHQgNgGgBgHIAAgJQACgNAUAAQAUAAAAAPIAAAFIgPAAIAAgEQAAgGgGABQgEAAgBADIAAAEQAAADANAHQANAGABAGIAAALQgCAOgTAAQgXAAAAgSgAgOAPIAAgFIAPAAIAAAGQAAAGAHAAQAEAAABgFIAAgEQgBgDgMgHQgMgGgBgHIgBgIQADgNASAAQAVAAgBAOIAAAFIgPAAIAAgEQAAgFgFAAQgFgBgBAFIAAADQABACANAIQAMAGABAGIAAAKQgBAOgUABQgVAAAAgSgAArARIAAgvIAPAAIAAAtIABACQAAAEAFAAQAFAAACgEIAAgvIAPAAIAAAvQgBAPgVAAQgTAAgCgPgACrAQIAAgDIAAgZIAAgFQACgOATAAQAVAAABAOIAAAFIAAACIgQAAIAAgGQABgEgHAAQgFAAAAAEIgBADIAAAdQABAFAFAAQAHAAgBgFIABgCIAAgJIgHAAIAAgIIAXAAIAAAQIgBADQgBAPgVABQgTgBgCgPgAgsAfIgBg5IgKA5IgQAAIgKg5IgBA5IgPAAIABg9IAZAAIAIAvIAIgvIAYAAIACA9gAh+AfIgIg5IgJA5IgRAAIAMg9IAbAAIAMA9gACFAeIgQgyIABAyIgPAAIAAg8IAXAAIAPAwIgCgwIAPAAIAAA8g");
	this.shape.setTransform(35.5,5.5,1.655,1.655);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0.1,0,71,11), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:300,regY:59,x:300,y:59},0).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97,x:300.1,y:59.1},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:300,y:59},7).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.8,35.6,522.6,132);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(119.1,56.1,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.1,114.8,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.4,53.2,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.6,6.8,238.5,117.5);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件62();
	this.instance.parent = this;
	this.instance.setTransform(208.5,146.7,0.108,0.108,0,0,0,178.8,127.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.manpng複製();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61, new cjs.Rectangle(0,0,227.8,188), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件63();
	this.instance.parent = this;
	this.instance.setTransform(15.8,9.4,0.857,0.857,0,0,0,123.9,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(-90.3,-6.3,212.3,31.3), null);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件56();
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


// stage content:
(lib._250x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_56 = function() {
		this.phone.gotoAndPlay('play');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(56).call(this.frame_56).wait(206));

	// 圖層 1
	this.instance = new lib.元件59();
	this.instance.parent = this;
	this.instance.setTransform(242.3,21.5,0.406,0.406,0,0,0,123.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({alpha:0},7).to({_off:true},1).wait(152));

	// logo
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.6,17,1,1,0,0,0,35.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(262));

	// t41.png
	this.instance_2 = new lib.元件33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.8,70.4,1.01,1.01,0,0,0,92.1,20.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({regY:20.1,y:56.5,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t43.png
	this.instance_3 = new lib.元件32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(180.4,117.2,0.883,0.883,0,0,0,67,20.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({regX:0,regY:0,x:121.2,y:91.3},7,cjs.Ease.cubicOut).wait(148));

	// t42.png
	this.instance_4 = new lib.元件34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(67,120.6,0.883,0.883,0,0,0,61.6,29.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(107).to({_off:false},0).to({y:113.6},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_5 = new lib.元件53();
	this.instance_5.parent = this;
	this.instance_5.setTransform(127.9,163.2,1.312,1.312,0,0,0,111,29.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({regX:111.1,scaleX:0.88,scaleY:0.88,y:163.1,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_6 = new lib.元件40();
	this.instance_6.parent = this;
	this.instance_6.setTransform(145.9,222.2,0.883,0.883,0,0,0,86,24.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(111).to({_off:false},0).to({y:215.1,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("EghvAcaQvKjfhSoIQhSoJNWoAQNXn+UKjMQUJjLPKDfQPLDgBSIIQBSIItXH/QtWIA0KDMQplBhoeAAQpUAAn9h2g");
	var mask_graphics_106 = new cjs.Graphics().p("EggOAbOQvKjfhSoIQhSoJNWn/QNXn/UKjMQUJjLPKDfQPLDgBSIIQBSIItXH/QtWIA0KDMQplBhoeAAQpUAAn9h2g");
	var mask_graphics_107 = new cjs.Graphics().p("EggOAaCQvKjfhSoJQhSoINWn/QNXn/UKjMQUJjLPKDfQPLDgBSIJQBSIHtXH/QtWIA0KDMQplBhoeAAQpUAAn9h2g");
	var mask_graphics_108 = new cjs.Graphics().p("EggOAY2QvKjfhSoJQhSoINWn/QNXn/UKjMQUJjLPKDfQPLDgBSIJQBSIHtXH/QtWIA0KDMQplBhoeAAQpUAAn9h2g");
	var mask_graphics_109 = new cjs.Graphics().p("EggOAXqQvKjghSoIQhSoINWn/QNXoAUKjLQUJjMPKDgQPLDgBSIIQBSIHtXIAQtWIA0KDLQplBhoeAAQpUAAn9h1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-321.9,y:193.6}).wait(1).to({graphics:mask_graphics_106,x:-231.1,y:186}).wait(1).to({graphics:mask_graphics_107,x:-130.7,y:178.4}).wait(1).to({graphics:mask_graphics_108,x:-30.2,y:170.8}).wait(1).to({graphics:mask_graphics_109,x:70.2,y:163.1}).wait(153));

	// 圖層 7
	this.instance_7 = new lib.補間動畫6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(110,186.5,0.883,0.883,4.7);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(105).to({_off:false},0).wait(157));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(128.7,41.9,0.616,0.616,0,0,0,300.1,59);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({regX:300.2,scaleX:0.4,scaleY:0.4,y:48.2},5,cjs.Ease.quadInOut).to({regX:300.1,scaleX:0.42,scaleY:0.42,y:47.8},3,cjs.Ease.quadInOut).wait(36).to({regX:300.3,regY:59.1,alpha:0.129},6,cjs.Ease.quadInOut).to({regX:300.1,regY:59,alpha:0},2).to({_off:true},1).wait(159));

	// 圖層 5
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(123.5,143.5,1,1,0,0,0,118.5,40.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(54).to({_off:false},0).to({alpha:1},11).wait(27).to({alpha:0},7).to({_off:true},1).wait(162));

	// 圖層 6
	this.instance_10 = new lib.元件16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(60.2,177.2,1.113,1.113,-120,0,0,25.3,34.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(56).to({_off:false},0).to({scaleX:1.36,scaleY:1.36,x:55.3,y:171.3,alpha:1},10,cjs.Ease.quadOut).wait(30).to({x:65.3,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(157));

	// 圖層 8
	this.instance_11 = new lib.元件60();
	this.instance_11.parent = this;
	this.instance_11.setTransform(131,181.5,1,1,0,0,0,112,89.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(48).to({_off:false},0).to({x:141,alpha:1},11,cjs.Ease.quadOut).wait(37).to({x:151,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(157));

	// 圖層 9
	this.instance_12 = new lib.元件61();
	this.instance_12.parent = this;
	this.instance_12.setTransform(103,178,1,1,0,0,0,93,94);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:113,alpha:1},11,cjs.Ease.quadOut).wait(27).to({x:143,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(212));

	// t1.png
	this.instance_13 = new lib.元件2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(126.6,45.7,1.389,1.389,0,0,0,118.5,26.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({scaleX:0.95,scaleY:0.95,x:126.5,y:50.7},8,cjs.Ease.quadInOut).to({regY:26,scaleX:1.02,scaleY:1.02,y:49.8},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:50},4,cjs.Ease.quadInOut).wait(16).to({scaleX:0.74,scaleY:0.74,y:53,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_14 = new lib.元件55();
	this.instance_14.parent = this;
	this.instance_14.setTransform(127,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102,125,300,272);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 250,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/250x250_atlas_.png?1539764550799", id:"250x250_atlas_"}
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
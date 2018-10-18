(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"970x90_atlas_", frames: [[328,442,139,131],[171,442,155,121],[0,433,169,124],[0,0,403,250],[405,99,43,43],[405,0,42,64],[226,252,186,188],[0,252,224,179],[405,66,17,19],[449,47,43,50],[449,0,48,45],[0,559,142,40]]}
];


// symbols:



(lib.向量圖智慧型物件1 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件2 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.manpng複製 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.man2 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.群組8 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
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
	this.instance.setTransform(-556.4,-57.1,1.8,1.395,-6.8);

	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-530.5,-69.3,1.395,1.395,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 圖層 1
	this.instance_2 = new lib.圖層1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-194.1,-140.1,1,1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-556.4,-142.9,764.7,432.2);


(lib.元件66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(172.3,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66, new cjs.Rectangle(0,0,344.7,85.7), null);


(lib.元件63_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#219CD8").s().p("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");
	this.shape_1.setTransform(144.1,44);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件63_1, new cjs.Rectangle(0,0,288.1,88.1), null);


(lib.元件62_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("AukGuIB5gOQgLgcgPgYIAngZIhRAKIgCicQgbAQgYAJIgVg2QAsgUAoghQgVgVgbgXIA4gzQAbAUAWAWQAbgeAZgnIimASIgBg+ID1gdIAAATQAOAPAHAFQApgWAmgkIAuAlQgjAkgrAcQANALAPAKQAogeAegpIAyAmQgeAngmAeQAnAZAsASIgtBDIgdgQIACCeIhWAKIAxAJQgTArgMAWICEgQIABBCInZA3gAsHFRQAQAXAMAdIgoAYIB9gOQAPglANgqgAszDjIABAxIDpgbIAAgygAsaB8QgWAUgXATIEdghQgagRgbgWIABAPIisAUIgBgSgArgA7IBRgKQgbgagQgSQgWAhgQAVgAlbFeIBPgUIgCiNIhEAIIgBhBIBEgIIAAgnIgoAEIAAgnIgLALIgugtQAiglAXgnQAYgnARguIA8ANIgGAPQAwAZAlAgIgpA+QgjgggkgYIgNAaQgRAdgPATIB7gOIABBCIguAGIAAAmIA/gHIABBCIg/AHIABCCQAmgLAZgJIACAMQAugtAjg1IAjAkQgrBLgwAtIgSgTIABAJQhbAlhiAdgAhDGLIgMhDQATAGATgDQALgBAEgIQAEgMAAgUIgCjBIhrAMIgBg6ICUgRIAIghIhYAKIgFAVIg5gEIAwi+IA5ADIgFAXICUgRIgwC0IBGgJIABA8IhxAMIAAA9QAEAIAJAOQAZgjAQgpIAwAaQgbA6geAlQAhAnArAUIgdBCQgggRgeggQgOgQgPgYIABAvQABAxgNATQgQAXgmAEIgOABQgLAAgKgCgAgphOIgJAjIBXgKIAIgkgADrEkIA/gqIgBh8Ig7AHIgBhFIB4gOIACC1QAWAPAYAFIgYg3QBGgjAggxQAQgXAGgbIiAAPIgBhEICLgQIAAgFQABgEgBgzIh4ANIgBhDIBHgJQgNgbgVgZIA2guQAbAgARAiIgkAdIBIgJQATguAOg1IBIANQgQArgTAjIBFgIIABBEIh/APIAAA+ICTgSIABBDIiBAQQAHARAKAMQAQAWAdARQAaAPAoALIggBIQgrgMgrghQgfgYgTghQgKAWgNATQgsA6hKAlQANADALgCQAeAECLgQQBQgKA0gSQgSAngJAsIijATQhYALg0gJQgmgGglggIg4BRQgbgtgSgXgAlhDxIA3gaQANAkAKAxIg5AaQgHgxgOgkgAjMETQAKgtAFgmIA5AIQgHAtgKAogAh/CXIAuglQAVAeAMAgIgxAmQgLgfgTgggADqgZIAtg7QAiASAeAaIgrBBQgggdgigVgAEOiOIAtg6QAjARAfAdIgrBCQgigigigUgAOijtQADiDhJg6Qg2gshZgBIhPAGIgGgWIBYgJQBfADA8AwQBSBCgDCOgALXkQQgMgKgVABIgTACIgGgXIAagDQAcAAASANQAYASABAkIgYABQAAgZgPgKgAM4kCQACgpgZgYQgbgag1gGIgwgDIgCgXIA4ACQA7AJAfAeQAhAfgCA1g");
	this.shape_1.setTransform(95.4,49.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62_1, new cjs.Rectangle(0,0,190.8,99.3), null);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(124.9,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61, new cjs.Rectangle(0,0,249.8,53.9), null);


(lib.元件60_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWAPIAAgFIARAAIAAAGQAAAGAGAAQAFAAABgFQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQgBgDgNgIQgMgFgCgHIAAgIQACgOATAAQAVAAAAAPIAAAFIgPAAIAAgEQAAgGgGABQgEAAgBADIAAAEQABADAMAHQANAGACAGIAAALQgCAOgVAAQgVAAgBgSgAgOAPIAAgFIAQAAIAAAGQgBAGAHAAQAEgBABgEIAAgEQgBgDgMgIQgLgFgCgHIgBgIQADgNASAAQAVAAAAAOIAAAFIgQAAIAAgEQAAgFgFAAQgFgBgBAFIAAADQABACAMAIQANAGABAGIAAAKQgBAOgUABQgVAAAAgSgAArARIAAgvIAPAAIAAAtIABACQAAAEAFAAQAFAAACgEIAAgvIAPAAIAAAvQgCAPgUAAQgTAAgCgPgACrAQIAAgDIAAgZIAAgFQACgOATAAQAVAAABAOIAAAFIAAACIgPAAIAAgGQAAgFgHABQgFgBAAAFIgBADIAAAdQABAFAFgBQAHABAAgFIAAgCIAAgJIgHAAIAAgIIAXAAIAAAQIgBADQgBAQgVAAQgUAAgBgQgAgsAfIgBg5IgKA5IgQAAIgKg5IgBA5IgPAAIABg9IAZAAIAIAvIAIgvIAYAAIACA9gAh+AfIgIg5IgJA5IgQAAIALg9IAbAAIAMA9gACFAdIgPgxIAAAxIgPAAIAAg7IAXAAIAOAwIgBgwIAPAAIAAA7g");
	this.shape.setTransform(21.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60_1, new cjs.Rectangle(0,0,42.9,6.6), null);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E9BD8").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件55, new cjs.Rectangle(0,0,970,250), null);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.向量圖智慧型物件();
	this.instance.parent = this;
	this.instance.setTransform(119.7,-64.8,0.916,0.916,-5.9);

	this.instance_1 = new lib.向量圖智慧型物件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(396,-51,0.677,0.677);

	this.instance_2 = new lib.向量圖智慧型物件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(276,-55,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(119.7,-80.8,381.4,129), null);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件38, new cjs.Rectangle(0,0,43,43), null);


(lib.元件61_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件62();
	this.instance.parent = this;
	this.instance.setTransform(219.5,114.1,0.148,0.148,0,0,0,178.6,128.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.manpng複製();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61_1, new cjs.Rectangle(0,0,245.8,188), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件63();
	this.instance.parent = this;
	this.instance.setTransform(1730.6,21.1,1.16,1.16,0,0,0,124.2,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(1586.5,0,287.5,42.4), null);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.元件66();
	this.instance.parent = this;
	this.instance.setTransform(383.7,72.8,1.356,1.356,3.2,0,0,172.6,43.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(-75.8,104.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(-277.4,1.2,897.3,143.8), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:300,regY:59,x:300,y:59},0).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97,x:300.1,y:59.1},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:300,y:59},7).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277.4,1.2,897.3,143.8);


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


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件38();
	this.instance.parent = this;
	this.instance.setTransform(21.5,21.5,1,1,0,0,0,21.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件42, new cjs.Rectangle(0,0,43,43), null);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件56();
	this.instance.parent = this;
	this.instance.setTransform(71,20,1,1,0,0,0,71,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(0,0,142,40), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件62_1();
	this.instance.parent = this;
	this.instance.setTransform(-159.9,57.8,0.63,0.63,0,0,0,95.4,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.元件63_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36.4,53.3,0.465,0.465,0,0,0,144.1,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(-220,26.5,250.6,62.6), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.元件61();
	this.instance.parent = this;
	this.instance.setTransform(-184,46.3,0.789,0.789,0,0,0,124.7,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(-282.3,25,197,42.5), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件60_1();
	this.instance.parent = this;
	this.instance.setTransform(62.4,9.9,2.914,2.914,0,0,0,21.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,125,19.3), null);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件39();
	this.instance.parent = this;
	this.instance.setTransform(71,20,1,1,0,0,0,71,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件43, new cjs.Rectangle(0,0,142,40), null);


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
(lib._970x90 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(39.7,18.3,0.72,0.72,0,0,0,35.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262));

	// 圖層 1
	this.instance_1 = new lib.元件59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(242.3,21.5,0.406,0.406,0,0,0,123.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({alpha:0},7).to({_off:true},1).wait(152));

	// t41.png
	this.instance_2 = new lib.元件33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(432.2,57.2,1,1,3.5,0,0,92.1,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({regX:92,regY:20.1,x:433,y:43.8,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t42.png
	this.instance_3 = new lib.元件34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(566.6,41.4,0.953,0.953,3.5,0,0,61.6,29.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({regY:29.5,x:567.5,y:26.4},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_4 = new lib.元件53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(482.5,80.9,0.823,0.823,0,0,0,111.2,29.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({regX:111.3,regY:29.9,scaleX:0.55,scaleY:0.55,x:538.8,y:67.8,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_5 = new lib.元件40();
	this.instance_5.parent = this;
	this.instance_5.setTransform(850.3,53.7,0.826,0.826,0,0,0,86.1,24.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).to({regX:86.2,regY:24.7,scaleX:1.03,scaleY:1.03,x:850.5,y:47.2,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("EhChAeRQ8iqFgtwAQgtv+bjsjUAbkgMiAnrgBvUAnpgBvAcjAKFQcjKFAtQAQAtP+7kMiUgbjAMjgnrABvQl0AQlmAAUggcAAAgYXgImg");
	var mask_graphics_106 = new cjs.Graphics().p("EhEcAfJQ9YqYguwdQguwccWs6UAcXgM5Ao1gByUAozgBzAdXAKXQdZKZAuQdQAuQc8XM5UgcWAM6go1AByQl/ARlwAAUghYAAAgZEgI2g");
	var mask_graphics_107 = new cjs.Graphics().p("EhGYAgBQ+Mqqgww7Qgvw6dJtRUAdLgNQAp+gB2UAp8gB2AeNAKqQeNKrAwQ7QAvQ69KNQUgdKANSgp+AB1QmJARl7AAUgiUAAAgZygJGg");
	var mask_graphics_108 = new cjs.Graphics().p("EhITAg5Q/Cq9gwxYQgxxYd8toUAd+gNoArHgB5UArHgB5AfBAK9QfDK+AwRYQAxRY99NnUgd9ANpgrHAB5QmVASmFAAUgjRAAAgaegJXg");
	var mask_graphics_109 = new cjs.Graphics().p("EhENAhxQ/2rPgyx2Qgyx2evt/UAexgN/AsQgB8UAsRgB8Af2ALPQf4LQAyR2QAyR2+xN/UgevAN/gsRAB8QmhATmOAAUgkNAAAgbMgJng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-291.7,y:128}).wait(1).to({graphics:mask_graphics_106,x:-28.5,y:124.6}).wait(1).to({graphics:mask_graphics_107,x:234.8,y:121.1}).wait(1).to({graphics:mask_graphics_108,x:498.1,y:117.7}).wait(1).to({graphics:mask_graphics_109,x:722.7,y:114.1}).wait(153));

	// 圖層 7
	this.instance_6 = new lib.補間動畫6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(780.8,29.1,1,1,11.2,0,0,0.1,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).wait(157));

	// ttt1.png
	this.instance_7 = new lib.元件48();
	this.instance_7.parent = this;
	this.instance_7.setTransform(432.6,27.5,0.669,0.669,0,0,0,300.1,59);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({regX:300.3,scaleX:0.44,scaleY:0.44,x:432.5,y:34.3},5,cjs.Ease.quadInOut).to({regX:300.1,regY:59.1,scaleX:0.46,scaleY:0.46,y:33.8},3,cjs.Ease.quadInOut).wait(36).to({regX:300.2,regY:59.3,y:33.9,alpha:0.129},6,cjs.Ease.quadInOut).to({regX:300.1,regY:59.1,y:33.8,alpha:0},2).to({_off:true},1).wait(159));

	// 圖層 6
	this.instance_8 = new lib.元件24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(677.4,27.5,0.656,0.656,0,0,0,118.9,40.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).to({alpha:1},11).wait(27).to({alpha:0},7).to({_off:true},1).wait(162));

	// 圖層 8
	this.instance_9 = new lib.元件16();
	this.instance_9.parent = this;
	this.instance_9.setTransform(635.9,49.6,0.73,0.73,-120,0,0,24.9,34.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(56).to({_off:false},0).to({regX:25.1,scaleX:0.89,scaleY:0.89,x:632.6,y:45.7,alpha:1},10,cjs.Ease.quadOut).wait(30).to({x:639.2,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(157));

	// 圖層 9
	this.instance_10 = new lib.元件60();
	this.instance_10.parent = this;
	this.instance_10.setTransform(682.3,52.4,0.656,0.656,0,0,0,112.1,89.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(48).to({_off:false},0).to({x:688.9,alpha:1},11,cjs.Ease.quadOut).wait(37).to({x:695.4,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(157));

	// 圖層 10
	this.instance_11 = new lib.元件61_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(641.9,59.4,0.621,0.621,0,0,0,93.3,94.2);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:93.2,x:648.1,alpha:1},11,cjs.Ease.quadOut).wait(27).to({x:666.7,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(212));

	// t1.png
	this.instance_12 = new lib.元件2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(406.7,26.1,1.97,1.97,1.5,0,0,118.6,25.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({regY:26.2,scaleX:1.35,scaleY:1.35,x:406.2,y:33.2},8,cjs.Ease.quadInOut).to({regX:118.5,regY:26,scaleX:1.45,scaleY:1.45,x:406.3,y:32.1},5,cjs.Ease.quadInOut).to({regX:118.6,scaleX:1.42,scaleY:1.42,x:406.4,y:32.4},4,cjs.Ease.quadInOut).wait(16).to({regX:118.7,regY:26.2,scaleX:1.06,scaleY:1.06,x:406.2,y:36.6,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_13 = new lib.元件55();
	this.instance_13.parent = this;
	this.instance_13.setTransform(485,45,1,0.36,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,45,970,250);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 970,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/970x90_atlas_.png?1539764533399", id:"970x90_atlas_"}
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
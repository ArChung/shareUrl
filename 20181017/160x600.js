(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"160x600_atlas_", frames: [[338,375,139,131],[338,252,155,121],[0,433,169,124],[0,0,403,250],[449,52,43,43],[405,0,42,64],[0,252,224,179],[405,66,17,19],[449,0,43,50],[171,433,48,45],[226,252,110,233],[171,487,142,40]]}
];


// symbols:



(lib.向量圖智慧型物件1 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.man2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.人 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.群組8 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
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
	this.shape.setTransform(126,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(60.1,-32.1,137.7,113.7), null);


(lib.補間動畫6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.instance = new lib.圖層1();
	this.instance.parent = this;
	this.instance.setTransform(-266.9,-111.2,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-179,59);

	this.instance_2 = new lib.圖層1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-172,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.9,-153.3,498,462.4);


(lib.元件66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(106.8,27.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66, new cjs.Rectangle(0,0,213.6,55.4), null);


(lib.元件65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AgNADIiJiVIAZgCIB8CHICBihIAbgDIiQCyICACMIgXADIh0h/Ih+CdIgcADg");
	this.shape.setTransform(15.5,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件65, new cjs.Rectangle(0,0,31,35.5), null);


(lib.元件64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbC3IAmheIhYjLIA1AAIA8CRIA4iRIA0AAIh4EpgAo+BMQghghAAgxQAAgzAgggQAfgdArgBQAWAAASAJQATAHALAPIAAgaIAyAAIAADXIgyAAIAAgdQgMAQgSAIQgTAKgVgBQgpAAgggdgAocg2QgSATgBAcQABAcASATQAUAUAbAAQAcAAASgUQASgTAAgcQAAgbgSgUQgSgTgcAAQgbAAgUATgAuOBMQgjghAAgxQAAg0AigfQAegdAsgBQAVAAASAJQASAHAMAPIAAgaIAyAAIAADXIgyAAIAAgdQgMAQgSAIQgSAKgWgBQgqAAgegdgAtsg2QgTATAAAcQAAAcATATQASAUAcAAQAcAAATgUQASgTAAgcQAAgbgSgUQgTgTgcAAQgcAAgSATgAyvBAQgngoAAg4QAAg6AngoQAogpA7AAQApABAgASQAgATARAgIgsAaQgZgvg0AAQgmAAgZAbQgaAZAAAmQAAAlAaAaQAZAaAnAAQAeAAAVgQQAUgQAHgaIhWAAIAAgwICMAAIAAAUQAAA4gkAmQglAog7AAQg9ABgogqgARBBoIA8heQgJADgHAAQgkAAgZgZQgagbAAgnQAAgpAcgaQAbgZApgBQAqABAcAaQAbAbAAAmQAAAogUAfIhGBwgARWhvQgOAOAAAUQAAATAOAOQAOAOATAAQAUAAAOgOQANgOAAgUQAAgTgNgOQgPgPgTAAQgTAAgOAPgANiBeQgWgKgOgOQgOgOgJgUQgJgUABgVQAAgXAIgUQAJgUAPgPQAOgNAVgKQAWgJAXAAQAYABAUAHQAUAIAQAOQAQAPAHASQAIATAAAXIAAAQIiwAAQAFAXASAOQARAPAbAAQAUgBARgJQAPgLAHgSIAqAYQgOAbgaAQQgYAQglAAQgbgBgUgHgANog9QgRALgHAQIB7AAQgFgRgQgKQgPgKgYAAQgWABgRAJgAMIBmQgaAAgQgFQgRgFgKgKQgLgLgDgRQgFgRABgaIAAhRIglAAIAAgsIAlAAIAAghIAygjIAABEIAsAAIAAAsIgsAAIAABQQAAAOABAKQACAIAEAEQAEAGAKABIAXABIAAAwgAHoBeQgVgJgPgPQgPgOgIgVQgKgTABgVQgBgXAKgUQAHgTAQgQQAQgPAUgIQAVgJAWAAQAYAAAUAJQAVAJAPAOQAQAPAIAUQAJAUAAAXQAAAVgJATQgIAVgQAOQgOAOgWAKQgTAHgZABQgYgBgTgHgAH6g/QgKAFgKAJQgHAHgFAMQgFAMAAANQAAALAFALQAFAMAHAHQAKAJAKAFQAMAFANgBQAOABAMgFQAMgFAHgJQAJgHAFgMQAFgLgBgLQABgNgFgMQgFgLgJgIQgIgJgLgFQgLgEgPAAQgNAAgMAEgAFQBmIh5i+IAAC+IgxAAIAAkNIA5AAIB0C2IAAi2IAyAAIAAENgAjKBlIg1hIIgzBIIg+AAIBShtIhOhqIA8AAIAyBEIAwhEIA8AAIhOBqIBSBtgAqsBlIAAkRIAzAAIAAERg");
	this.shape.setTransform(123.9,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件64, new cjs.Rectangle(0,0,247.8,36.5), null);


(lib.元件63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#219CD8","rgba(33,156,216,0)"],[0,1],0,27.6,0,-27.5).s().p("AxWETIAAomMAitAAAIAAImg");
	this.shape.setTransform(111.1,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件63, new cjs.Rectangle(0,0,222.3,55.1), null);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(178.5,127.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(0,0,357.1,255.3), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AniCIIAXAAQAFAAAAgIIAAgtIgcAMIgDgkQANgCASgHIAAgsIgdACIAAgcIAdgDIAAgvIAegDIAAAuIAVgCIAAAdIgVADIAAAhIAVgMIACAfIgXAOIAABGQgBAYgXADIgcADgAmLAjIB0gMIAAB+IgdADIAAgMIg6AGIAAAMIgdADgAluBlIAAAUIA6gGIAAgUgAluA6IAAASIA6gGIAAgTgAjtB3QAkgsAEg4IAeACQgDAWgFASQALAQARAHIAIACIAAhWIhCAHIAAgTIgQABIAAg7IBRgIQgDgNgEgIIAmgIIAFAZIBUgJIAAA7IgbADIAAAVIg8AGIAAAdIBFgIIAAAeIhFAHIAAAhQAXABAmgEIAbgFIgHAkIggADQg+AGgdgIQgVgHgPgTQgMAcgPAVgAi+gsIAAAVICKgPIAAgVgAArAIQgHAegLAbIgKglQAQglAGgrIgQACIAAgbIAWgCIAAgsIAYgDIAAAsIAOgBIAAAKIAEgBQAIgUAFgiIAVAEQgGAYgGAUIgBABIALgDQAFgOAEgOIAQAGIgBggIAZgCIABAyIACgBQAJgSAGgfIAXAFQgKAbgGANIAJgDIAJgYIAWAHIgUAnIANgFQALAYADAUIgVAJIgBgKQgVAIgYAFIABAOIATgCIgDgMIAbgGIACAQIASgCIAAAXIg6AHQADANADAMQALgMAGgOIAWAJQgMAXgNAPQAGAHAEAAQAHgBABgQIABgJIAVAKQgCAZgIALQgHAKgNABQgOABgOgSIgBgBQgSAOgVALIgRgWQAXgKATgQQgHgRgDgRIgBgGIgeADIgBAHQAYAJAIAGIgNAaQgKgIgMgHIgDAPQgHATgRAWIgUgWQAOgMAGgSQAEgOACgVIgQACIAAgUIgDAGIgMgWIAAB7IgYADgABbgMIgGAMIAOgBIAAgLIAYgDIAAAMIAZgDIgCgQIgNAGIgCgJQgTAIgVAFgABDg3IAAAMIAQAPIgBgFQAIgBAEgBQAFgHAIgQIgcAIIAAgGgACRgmQgCgVAAgiQgJAWgGALIAIgDIAJAZgAB1goIAKgDIgDgJgACohDIABAVIADAAQAIgKAJgQIgVAFgADFgyIAOgFIgEgNgAEPA5IBcgKIAAgTIhNAJIAAgeIBNgHIAAgMIgNABIAAg4IgYADQgDAngaAbIgagUQAWgTAFgZIgYADIAAgbIAZgDIAAgZIgUACIAAgbIB4gMIAAAaIgUACIAAAaIAYgCIAAAaIgYADIAAAwIAOgBIAAAUIBMgIIAAAcIhMAIIAAATIBdgKIAAAdIjXAWgAFIh1IAAAaIAWgDIAAgagAmHAMQgGgIABgMIAAhAIAdgDIAAATQAvgIAggUIAKAcQgsAVgtAIIAAALQAAAHAJgBIAtgFQAHAAADgDQADgCACgSIAeAFQgDAqgXACIhIAIIgHAAQgNAAgFgHgAGhgxIAagBQAGAAAAgHIAAhsIAcgDIAAB5QAAAZgXACIgeAEgAGYiUIAcgDIAABVIgcADg");
	this.shape.setTransform(48.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(0,0,97.1,33.9), null);


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
	this.instance.setTransform(28,36,0.394,0.394);

	this.instance_1 = new lib.向量圖智慧型物件();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12,-45,0.578,0.578);

	this.instance_2 = new lib.向量圖智慧型物件2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23,98,0.421,0.421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(12,-45,97.7,194), null);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(70.8,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 3
	this.instance = new lib.群組8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件43, new cjs.Rectangle(0,0,142,40), null);


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
	this.shape.graphics.f("#231916").s().p("AprDnIBNgJQgHgSgJgPIAYgQIgzAGIgBhjQgSAKgPAGIgNgiQAcgNAZgVQgNgNgRgPIAkgfQARANAOANQARgTAPgZIhpAMIAAgoICbgSIAAALIAOAOQAagPAYgXIAdAYQgWAXgcARQAJAIAJAHQAZgUAUgaIAgAYQgUAZgYAUQAZAOAcAMIgdAqIgSgKIABBlIg3AGIAgAGQgMAbgIAOIBUgKIAAAqIksAjgAoHCrQAKAQAIASIgaAPIBQgJQAJgXAJgbgAojBmIABAfICUgRIAAgggAoTAkIgcAZIC0gVQgQgLgRgOIAAAKIhtANIAAgLgAnugEIA0gGIgcgcQgOAVgKANgAj3C0IAygNIgBhZIgrAFIgBgqIAsgFIgBgZIgZADIAAgYIgHAIIgdgeQAVgXAPgZQAPgZALgdIAmAIIgDAKQAeAQAXAUIgZAoQgXgVgXgPIgIAQQgLAUgKAMIBPgKIAAAqIgdADIAAAZIAogFIABAqIgoAFIABBSIAogNIABAIQAdgdAWghIAWAWQgbAwgeAdIgMgMIABAFQg6AYg+ASgAhFDRIgHgrQAMAEAMgCQAHAAACgGQADgHAAgNIgCh7IhEAIIAAgkIBfgLIAEgUIg4AGIgDANIgkgCIAeh6IAlACIgEAPIBegMIgfB0IAtgGIAAAlIhGAIIAAAnIAHAOQAQgXAKgaIAfAQQgSAmgTAXQAVAZAcAMIgTArQgUgLgTgVQgJgKgJgPIABAeQAAAfgIAMQgKAPgZADIgHAAIgPgBgAg0hcIgGAXIA4gHIAEgWgAB7CPIAogaIgBhPIgmAEIAAgrIBMgJIACByQANAKAQADIgQgjQAtgWAVgfQAJgPAFgQIhSAJIAAgrIBYgKIAAgEIAAgjIhMAJIgBgrIAtgGQgIgRgOgQIAigdQASAUALAWIgXASIAtgFQAMgeAKghIAtAIQgKAbgMAXIAsgFIABArIhRAJIAAAnIBdgLIABArIhSAKQAEALAHAHQAKAOASALQARAJAZAIIgUAtQgbgHgcgVQgUgQgMgVQgGAPgIALQgcAlgvAYQAIACAHgBQATACBZgLQAygFAigMQgMAZgGAcIhnAMQg4AHgigGQgXgEgYgUIgkAzQgRgcgLgPgAj7BuIAjgQQAJAXAGAfIgkARQgFgfgJgYgAicCEQAGgcADgYIAlAFQgFAcgGAagAhrA1IAdgXQAOATAHAUIgfAYQgHgTgMgVgAB6g6IAdglQAVALAUARIgcApQgUgTgWgNgACRiEIAdglQAWALAUASIgcAqQgWgVgVgNgAJphsQAChTgvglQgigbg4gCIgzAFIgDgPIA4gFQA8ACAmAeQA0AqgCBagAHoiCQgHgGgOAAIgMACIgEgPIARgCQASAAALAIQAPAMABAXIgPAAQgBgQgJgGgAImh5QABgagQgPQgRgRgigEIgfgBIAAgQIAjACQAlAGAUATQAVAUgBAhg");
	this.shape.setTransform(63.3,31.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(0.1,4.4,126.5,54.7), null);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#219CD8").s().p("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");
	this.shape.setTransform(67.1,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0.1,0.1,134,40.9), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWAPIAAgFIARAAIAAAGQAAAGAGAAQAFAAABgFQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQgBgDgNgHQgNgGgBgHIAAgJQACgNAUAAQAUAAAAAPIAAAFIgPAAIAAgEQAAgGgGABQgEAAgBADIAAAEQAAADANAHQANAGABAGIAAALQgCAOgTAAQgXAAAAgSgAgOAPIAAgFIAPAAIAAAGQAAAGAHAAQAEAAABgFIAAgEQgBgDgMgHQgMgGgBgHIgBgIQADgNASAAQAVAAgBAOIAAAFIgPAAIAAgEQAAgFgFAAQgFgBgBAFIAAADQABACANAIQAMAGABAGIAAAKQgBAOgUABQgVAAAAgSgAArARIAAgvIAPAAIAAAtIABACQAAAEAFAAQAFAAACgEIAAgvIAPAAIAAAvQgBAPgVAAQgTAAgCgPgACrAQIAAgDIAAgZIAAgFQACgOATAAQAVAAABAOIAAAFIAAACIgQAAIAAgGQABgEgHAAQgFAAAAAEIgBADIAAAdQABAFAFAAQAHAAgBgFIABgCIAAgJIgHAAIAAgIIAXAAIAAAQIgBADQgBAPgVABQgTgBgCgPgAgsAfIgBg5IgKA5IgQAAIgKg5IgBA5IgPAAIABg9IAZAAIAIAvIAIgvIAYAAIACA9gAh+AfIgIg5IgJA5IgRAAIAMg9IAbAAIAMA9gACFAeIgQgyIABAyIgPAAIAAg8IAXAAIAPAwIgCgwIAPAAIAAA8g");
	this.shape.setTransform(20.4,4,1.144,1.144);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-4.1,0.3,49.1,7.6), null);


(lib.元件59_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件64();
	this.instance.parent = this;
	this.instance.setTransform(249.2,43.3,1.245,1.245,0,0,0,123.9,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59_1, new cjs.Rectangle(94.9,20.5,308.5,45.5), null);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件65();
	this.instance.parent = this;
	this.instance.setTransform(235.8,118.1,1.086,1.086,0,0,0,15.6,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 3
	this.instance_1 = new lib.元件66();
	this.instance_1.parent = this;
	this.instance_1.setTransform(238.3,173.2,1.216,1.216,0,0,0,106.8,27.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("Az7EzQAGgNAEgRQAFgQACgSIAGgtIACg7IAogFIgBApIgBAkQAHAKAIAHIAAh1IhDAIIAAgtIBAgHIAAgmIg0AGIAAgrIA0gGIAAgoIAqgFIAAAoIAmgFIAAAsIgmAEIAAAmIArgFIAAAsIgoAFIAAAsIAsgFIAAAuIgsAFIAAA4IAPADQAJABAIAAQAXAAAcgCIBBgGIAsgHIAngIIgPA2IhEAIQgpAFggACQggACgVAAQgTgBgPgEQgPgDgNgGIgNgIIgMgKIgHAeQgDAOgFANgAtHEWIgWgCIgJgwQANACAMABQALABAJgBQAFgBADgDQADgCABgEQADgGABgWIACg/IgkAFIgCATIgsgBIATiRIBBgIIAAg0IhKAJIAAgsIB1gOIAACMIhIAJIgEApIBLgIQgBBOgDAsQgEArgIAIQgGALgKAFQgLAGgOACIgLABIgIgBgAr6DXIAugHIArgGIAAgyIgnAFIAAAVIgpAFIAAiUIBQgKIAAgWIgjAIIgkAGIgJgtIAPgCIAOgCQAKgTAJgWIAPgqIAtAJQgGATgJAPQgHAQgIAOIAfgHIAggJIgIgMIgJgLIAlgdQAQAUAOAUQAOAWAKAWIgnAcIgGgLIgGgLIgUAHIgVAGIAAAbIBSgKIAAB/IhSAKIAAAxIATgDIASgEIgFgKIgDgJIAlgZQAJATAIATQAJAVAGAVIgqAZIgDgKIgDgKIhUAOIhaAQgArIBJIAAApIAngFIAAgpgAp2A/IAAAqIAogGIAAgpgAxJBqICYgTIAACGIiYASgAwfCRIAAAsIBDgIIAAgtgAlpiFIBCgGIBsFYIhAAHIgVhMIhyANIgUBOIg/AHgAlyBYIBSgJIgpiWgAh3ieIA8gGIAACmIBxizIBHgHIhwCnIB4C7IhJAIIhUiLIgjAzIAABlIg8AGgADKB6QgngtAAhWQAAhZAng1QAYgeAjgQQAYgLAdgCQAagEAbAGQATADAOAIIAIAFIgSA4QgqgRgjADQhYAKABB8QAAB7BYgJQAQgCAUgHIAAhVIg0AFIAAg7IBygMIAAC2QgVAQgYAJQgZAKgcADIgVABQg5AAgiglgAK2AFQgXAnggAhIgbgiQAKgLAMgOQAMgOAMgQIAOgVIAMgVIgrAGIAAiEIA1gGIAAgSIg2AGIAAgsIA2gHIAAgfIAlgFIAAAgIA1gHIAAAtIg1AHIAAASIA0gHIAACEIg0AFIAAAGIAcATQAOALAMANIgcAnIgNgNIgNgNIAABaIglAFgAKpiNIAAArIANgBIAAgrgALbiSIAAAqIAMgCIAAgqgAxZA8QALgHAIgIQAIgJAEgKQAEgIACgKIAFgXIgdAEIAAgtIChgTQAAA9gDAhQgDAigHAIQgFAHgJAFQgJAEgNACIgPABIgRAAIgJguQALABAJAAQAIAAAIgBQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIACgFIACgQIACglIgvAGQgBAVgFARQgEASgGANQgQAggZAPgAMnBPIgIgxQAIACAJAAIAQAAQABgBABAAQAAAAABAAQAAAAAAgBQABAAAAgBQACgCAAgCIABgJIABgOIAAkqIApgFIAAE1QAAASgCANQgCAMgEAJQgFAHgJAEQgIAFgNACIgQABIgPAAgAIfjuIBbgMIAAELIg1AHIAAAdIgmAFgAJFjJIAAC2IAPgBIAAi2gAQOAfQALgWAJgYQAJgaAGgbQAMg9AChlIAqgFQABA1gEAtQgFAtgHAkQgGAfgJAaQgJAcgMAXgAS6ghQgLgjgHgkQgIglgEgqQgFgrgCgxIhSAKIAAgxIB7gOQAAA4AFAvQAFAxAIAnQAHAkALAiQALAhAPAhIgpAjQgOgigLghgAOjkXIB4gOIAAEFIhMAKIAAAVIgsADgAPPjuIAACpIAggEIAAipgAMYjzIAngEIAADuIgnAFg");
	this.shape.setTransform(240.6,57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(108.4,24.9,259.8,181.9), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:300,regY:59,x:300,y:59},0).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97,x:300.1,y:59.1},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:300,y:59},7).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.4,24.9,259.8,181.9);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(130.9,-8.4,1.273,1.273,0,0,0,32.4,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.8,-148.8,1.273,1.273,0,0,0,8.5,9.5);

	this.instance_2 = new lib.元件30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.2,4.4,1.273,1.273,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(13));

	// 元件 26
	this.instance_3 = new lib.元件31();
	this.instance_3.parent = this;
	this.instance_3.setTransform(89.6,-115.4,1.273,1.273,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.4,-160.9,115.3,177.4);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.元件63();
	this.instance.parent = this;
	this.instance.setTransform(31.8,371.6,1,1,0,0,0,111.1,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.元件62();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-22.3,284.2,0.101,0.101,0,0,0,178.7,128.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 圖層 2
	this.instance_2 = new lib.人();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-41,106,1.258,1.258);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61, new cjs.Rectangle(-79.3,106,222.3,293.1), null);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件63();
	this.instance.parent = this;
	this.instance.setTransform(112.9,167,1,0.437,0,0,0,111.1,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.man2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(0,0,224,179), null);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件38();
	this.instance.parent = this;
	this.instance.setTransform(5.7,34.2,1,1,0,0,0,21.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件42, new cjs.Rectangle(-15.8,12.7,43,43), null);


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
p.nominalBounds = new cjs.Rectangle(3,3,153.2,58.7);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.元件59();
	this.instance.parent = this;
	this.instance.setTransform(25.6,8.5,1,1,0,0,0,48.6,16.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApDB7QAkgEAmgPIg2AGIAAh2ICxgTIAAB2IguAFIBDAFIgHAeQgqgLgrgBIAHgVIgzAFIAIATQgfATgzAKgAoOBHIAAANIBwgMIAAgNgAoOAoIAAAMIBwgLIAAgNgAoOAKIAAALIBwgLIAAgLgAkyBHQgZgaAAgpQAAgpAZggQAagfAmgEQAbgDAUAMQAVALAKAVIgcAWQgQgfgiADQgYACgQAVQgQAVgBAaQAAAbARARQARAQAYgCQATgCAOgNQANgNAEgUIg3AGIAAghIBagKIAAAOQAAAogXAeQgYAggmAEIgKABQggAAgXgYgAHuAFIg5iLIAigEIAnBkIAkhsIAjgEIhTDrIghADgAhsA7QgVgVAAgkQAAgkAVgZQAUgYAcgCQAcgEARAUIAAgSIAegDIAACaIgeAEIAAgVQgSAagcACIgGABQgXAAgSgRgAg4g1QgRACgMAPQgNAPAAAUQAAATANANQAMANARgCQASgCAMgPQAMgPAAgUQAAgTgMgOQgKgLgPAAIgFABgAAwiHIAggDIAADDIggAEgACDAiQgWgVAAgjQAAglAVgZQAUgYAbgCQAcgDASAUIAAgTIAggEIAACbIggADIAAgUQgRAZgdADIgHABQgWAAgRgRgAC3hPQgTADgMAPQgMAPAAAUQAAAUAMALQAMAOATgCQARgCAMgPQAMgPAAgUQAAgUgMgMQgLgMgPAAIgDAAgAFJgvIgzhHIAogEIAfAuIAgg1IAmgEIgyBSIA1BIIgnAEIgigvIghA2IgoAFgAo6hUIDJgVIAABFIjJAVgAodg/IAAAUIAdgDIAAgUgAnlhFIAAAVIAdgDIAAgVgAmuhLIAAAVIAfgDIAAgVg");
	this.shape.setTransform(35,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(-23,-38.5,116.1,64), null);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_56 = function() {
		this.phone.gotoAndPlay('play');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(56).call(this.frame_56).wait(206));

	// 圖層 11
	this.instance = new lib.元件59_1();
	this.instance.parent = this;
	this.instance.setTransform(86.6,14.7,0.236,0.236,0,0,0,124.1,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({alpha:0},5).to({_off:true},1).wait(154));

	// logo
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.2,22,1.164,1.164,0,0,0,35.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(262));

	// t41.png
	this.instance_2 = new lib.元件33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(138.3,163,0.984,0.984,0,0,0,92,20.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({y:149.6,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t43.png
	this.instance_3 = new lib.元件32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(16.8,257.4,0.95,0.95,0,0,0,0.1,0.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({regY:0.1,y:243.6,alpha:1},7,cjs.Ease.cubicOut).wait(148));

	// t42.png
	this.instance_4 = new lib.元件34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(84.1,229.1,0.95,0.95,0,0,0,61.6,29.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(107).to({_off:false},0).to({regY:29.7,y:219.5},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_5 = new lib.元件53();
	this.instance_5.parent = this;
	this.instance_5.setTransform(163.6,367.5,1.603,1.603,0,0,0,111.1,29.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({regY:29.9,scaleX:1.22,scaleY:1.22,x:147.9,y:380.7,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_6 = new lib.元件40();
	this.instance_6.parent = this;
	this.instance_6.setTransform(91,567.7,0.906,0.906,0,0,0,86,24.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(111).to({_off:false},0).to({y:560.5,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("Eg2+A4uQ5lmOiLudQiKudWhuPUAWigONAiCgFqUAiAgFqAZlAGOQZmGOCKOdQCLOd2iOOUgWiAOOgiBAFqQwLCtuTAAQvuAAtajRg");
	var mask_graphics_106 = new cjs.Graphics().p("Eg3TA2cQ6CmWiNuvQiNuvW6ufUAW7gOeAimgFwUAimgFwAaBAGWQaDGWCNOuQCNOv27OfUgW6AOfgimAFwQwcCvuhAAQwBAAtqjVg");
	var mask_graphics_107 = new cjs.Graphics().p("Eg4OA0KQ6emeiQvBQiQvAXTuwUAXTgOvAjMgF2UAjLgF3AadAGeQafGfCQO/QCQPB3UOvUgXSAOxgjMAF2QwrCyuwAAQwUAAt6jag");
	var mask_graphics_108 = new cjs.Graphics().p("Eg5JAx4Q66mmiTvSQiSvSXrvBUAXrgPAAjygF9UAjwgF8Aa6AGmQa6GmCTPTQCSPR3rPAUgXrAPBgjxAF9Qw8C0u+AAQwnAAuKjeg");
	var mask_graphics_109 = new cjs.Graphics().p("Eg6FAvlQ7WmuiVvkQiVvkYDvRUAYFgPRAkWgGDUAkWgGDAbWAGuQbXGvCVPkQCVPj4EPRUgYEAPSgkWAGDQxMC3vMAAQw6AAubjjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-530.7,y:383.9}).wait(1).to({graphics:mask_graphics_106,x:-356.6,y:369.7}).wait(1).to({graphics:mask_graphics_107,x:-178.7,y:355.6}).wait(1).to({graphics:mask_graphics_108,x:-0.9,y:341.4}).wait(1).to({graphics:mask_graphics_109,x:177.2,y:327.2}).wait(153));

	// 圖層 7
	this.instance_7 = new lib.補間動畫6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(126.2,319.8,1.078,1.078,4.7,0,0,0.1,0.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(105).to({_off:false},0).wait(157));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(111.5,131.2,0.787,0.787,0,0,0,300.1,59.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({regY:59,scaleX:0.51,scaleY:0.51,x:111.4,y:139.2},5,cjs.Ease.quadInOut).to({regX:300,scaleX:0.54,scaleY:0.54,y:138.6},3,cjs.Ease.quadInOut).wait(36).to({regX:300.2,regY:59.2,x:111.5,y:138.7,alpha:0.129},6,cjs.Ease.quadInOut).to({regX:300,regY:59,x:111.4,y:138.6,alpha:0},2).to({_off:true},1).wait(159));

	// 圖層 4
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(82.5,403.2,0.829,0.829,0,0,0,118.5,40.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(54).to({_off:false},0).to({alpha:1},11).wait(27).to({alpha:0},7).to({_off:true},1).wait(162));

	// 圖層 5
	this.instance_10 = new lib.元件16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(30,431.2,0.923,0.923,-120,0,0,25.1,34.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(56).to({_off:false},0).to({regX:25.2,scaleX:1.13,scaleY:1.13,x:25.9,y:426.2,alpha:1},10,cjs.Ease.quadOut).wait(30).to({regY:34.9,x:34.2,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(157));

	// 圖層 6
	this.instance_11 = new lib.元件60();
	this.instance_11.parent = this;
	this.instance_11.setTransform(88.8,434.8,0.829,0.829,0,0,0,112.2,89.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(48).to({_off:false},0).to({regX:112.1,x:96.9,alpha:1},11,cjs.Ease.quadOut).wait(37).to({regX:112.2,x:105.4,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(157));

	// 圖層 9
	this.instance_12 = new lib.元件61();
	this.instance_12.parent = this;
	this.instance_12.setTransform(164.7,198.5,1.277,1.277,0,0,0,93,94);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:177.5,alpha:1},11,cjs.Ease.quadOut).wait(27).to({x:215.8,alpha:0},11,cjs.Ease.quadIn).to({_off:true},1).wait(212));

	// t1.png
	this.instance_13 = new lib.元件2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(73,180.3,1.462,1.462,0,0,0,118.4,26.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({regX:118.5,regY:26.3,scaleX:1,scaleY:1,x:72.9,y:185.6},8,cjs.Ease.quadInOut).to({regY:26.2,scaleX:1.07,scaleY:1.07,y:184.7},5,cjs.Ease.quadInOut).to({scaleX:1.05,scaleY:1.05,y:184.9},4,cjs.Ease.quadInOut).wait(16).to({regY:26.1,scaleX:0.78,scaleY:0.78,y:187.9,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_14 = new lib.元件55();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,300,1,2.4,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.7,299,392.5,601);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/160x600_atlas_.png?1539764566372", id:"160x600_atlas_"}
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
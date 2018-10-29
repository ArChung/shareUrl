(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,478,169,124],[0,0,403,250],[366,440,111,40],[457,80,43,43],[405,80,50,92],[0,252,244,224],[246,440,118,213],[405,0,79,78],[404,252,83,83],[405,221,17,19],[455,174,43,50],[405,174,48,45],[246,252,156,186]]}
];


// symbols:



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnpng複製 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.man = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.man1 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.qwdqwdqwdq = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(12);
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
	this.instance.setTransform(-80.8,-101,1,1,-6);

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
p.nominalBounds = new cjs.Rectangle(-210.6,-143.1,556.8,290.8);


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


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbC3IAmheIhYjLIA1AAIA8CRIA4iRIA0AAIh4EpgAo+BMQghghAAgxQAAgzAgggQAfgdArgBQAWAAASAJQATAHALAPIAAgaIAyAAIAADXIgyAAIAAgdQgMAQgSAIQgTAKgVgBQgpAAgggdgAocg2QgSATgBAcQABAcASATQAUAUAbAAQAcAAASgUQASgTAAgcQAAgbgSgUQgSgTgcAAQgbAAgUATgAuOBMQgjghAAgxQAAg0AigfQAegdAsgBQAVAAASAJQASAHAMAPIAAgaIAyAAIAADXIgyAAIAAgdQgMAQgSAIQgSAKgWgBQgqAAgegdgAtsg2QgTATAAAcQAAAcATATQASAUAcAAQAcAAATgUQASgTAAgcQAAgbgSgUQgTgTgcAAQgcAAgSATgAyvBAQgngoAAg4QAAg6AngoQAogpA7AAQApABAgASQAgATARAgIgsAaQgZgvg0AAQgmAAgZAbQgaAZAAAmQAAAlAaAaQAZAaAnAAQAeAAAVgQQAUgQAHgaIhWAAIAAgwICMAAIAAAUQAAA4gkAmQglAog7AAQg9ABgogqgARBBoIA8heQgJADgHAAQgkAAgZgZQgagbAAgnQAAgpAcgaQAbgZApgBQAqABAcAaQAbAbAAAmQAAAogUAfIhGBwgARWhvQgOAOAAAUQAAATAOAOQAOAOATAAQAUAAAOgOQANgOAAgUQAAgTgNgOQgPgPgTAAQgTAAgOAPgANiBeQgWgKgOgOQgOgOgJgUQgJgUABgVQAAgXAIgUQAJgUAPgPQAOgNAVgKQAWgJAXAAQAYABAUAHQAUAIAQAOQAQAPAHASQAIATAAAXIAAAQIiwAAQAFAXASAOQARAPAbAAQAUgBARgJQAPgLAHgSIAqAYQgOAbgaAQQgYAQglAAQgbgBgUgHgANog9QgRALgHAQIB7AAQgFgRgQgKQgPgKgYAAQgWABgRAJgAMIBmQgaAAgQgFQgRgFgKgKQgLgLgDgRQgFgRABgaIAAhRIglAAIAAgsIAlAAIAAghIAygjIAABEIAsAAIAAAsIgsAAIAABQQAAAOABAKQACAIAEAEQAEAGAKABIAXABIAAAwgAHoBeQgVgJgPgPQgPgOgIgVQgKgTABgVQgBgXAKgUQAHgTAQgQQAQgPAUgIQAVgJAWAAQAYAAAUAJQAVAJAPAOQAQAPAIAUQAJAUAAAXQAAAVgJATQgIAVgQAOQgOAOgWAKQgTAHgZABQgYgBgTgHgAH6g/QgKAFgKAJQgHAHgFAMQgFAMAAANQAAALAFALQAFAMAHAHQAKAJAKAFQAMAFANgBQAOABAMgFQAMgFAHgJQAJgHAFgMQAFgLgBgLQABgNgFgMQgFgLgJgIQgIgJgLgFQgLgEgPAAQgNAAgMAEgAFQBmIh5i+IAAC+IgxAAIAAkNIA5AAIB0C2IAAi2IAyAAIAAENgAjKBlIg1hIIgzBIIg+AAIBShtIhOhqIA8AAIAyBEIAwhEIA8AAIhOBqIBSBtgAqsBlIAAkRIAzAAIAAERg");
	this.shape.setTransform(123.9,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(0,0,247.8,36.5), null);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(0,0,244,224), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.man1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件56, new cjs.Rectangle(0,0,118,213), null);


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
	this.instance = new lib.向量圖智慧型物件();
	this.instance.parent = this;
	this.instance.setTransform(-26,25,0.488,0.488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAmQgGgDgEgHQgGgKAAgSQAAgHABgIQACgGADgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAGACAGQABAIAAAHQAAASgGAKQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgUQgEAHAAANQAAAcAOgBQAHABAEgIQAEgGAAgOQAAgNgEgHQgEgHgHAAQgGAAgEAHg");
	this.shape.setTransform(29.8,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAjQgHgGAAgNIAPAAIABAGIACADQADADAHAAQAFAAADgFQAEgFACgKIgIAEIgHABQgGAAgFgCQgFgCgEgDQgHgHAAgMQAAgGACgFQABgFAEgEQAEgDAFgCQAFgCAHAAQAOAAAIAKQAHAKAAATQAAAVgIALQgIAKgPAAQgNAAgGgGgAgGgaIgEADIgCAFIgBAGIABAFIACAEIAEACIAFABIAFgBIAFgDIADgEQABgCAAgDIgBgFIgDgFIgFgDIgEgBIgGABg");
	this.shape_1.setTransform(22.5,99.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAmQgGgDgEgHQgGgKAAgSQAAgHABgIQACgGADgGQAEgGAGgEQAGgEAHAAQAIAAAGAEQAGAEAEAGQADAGACAGQABAIAAAHQAAASgGAKQgEAHgGADQgGAEgIAAQgHAAgGgEgAgKgUQgEAHAAANQAAAcAOgBQAHABAEgIQAEgGAAgOQAAgNgEgHQgEgHgHAAQgGAAgEAHg");
	this.shape_2.setTransform(15.2,100);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAJIAEgDIAEgFIgHAAIAAgQIARAAIAAAMQgBAFgDAFQgDAGgHADg");
	this.shape_3.setTransform(10.1,103.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAOIAPAAIABAGIACAEIAEADIAGABIAFgBIAEgCIAEgEIABgFIgBgFIgEgDIgFgCIgEgBIgDABIgEAAIAAgOIAEAAIADABIAFgBIAEgCIADgDIABgEIgBgFIgDgDIgEgBIgFgBIgFABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgCAEIgBAGIgPAAQAAgaAbAAQAFAAAFABQAFABAEADQAEADADAEQACAFAAAGQAAAFgCAEQgCAEgFADQAFADADAEQACAFAAAGQAAAGgCAEQgCAFgFADQgEADgFACQgGABgFAAQgcAAAAgbg");
	this.shape_4.setTransform(5,99.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAvIAAgGQgGAAgEgDQgFgCgDgEQgDgEgBgFQgCgFAAgGIAQAAIAAAGIACADIACAEIAEACIAAgWIgJgEIgGgDQgHgFAAgKQAAgEACgEQABgEAEgEIAHgFIAIgCIAAgGIALAAIAAAGQALABAGAHQAFAGABAMIgQAAQAAgFgCgCQgCgDgDgBIAAATIAKAFIAGACQAEADACAEQACAEAAAFQAAAKgGAGQgGAGgMACIAAAGgAAGAaQAEgBACgCQACgCAAgEQAAgDgCgCIgGgDgAgKgWQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIAAgPIgFADg");
	this.shape_5.setTransform(-2.3,99.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXArIALgCIALgCIgPAAIAAgvIBBAAIAAAvIgMAAIACABIADAAIAGACIAHABIgHAMIgNgFIgIgCIgGgDIAHgGIgXAAIAHAHIgOAFIgOAEgAgEAcIAqAAIAAgDIgqAAgAgEAQIAqAAIAAgDIgqAAgAgEAEIAqAAIAAgCIgqAAgAgpA1IAAg1IgDADIgCADIgHgNQAGgLAFgMQAFgMADgMIAOAFIgDALIgFAMIAABPgAgTgLIAAgaIAUAAIAAgDIgUAAIAAgLIBKAAIAAALIgWAAIAAADIAVAAIAAAagAAhgWIAIAAIAAgDIgIAAgAANgWIAIAAIAAgDIgIAAgAgGgWIAHAAIAAgDIgHAAgAANglIAIAAIAAgDIgIAAg");
	this.shape_6.setTransform(-12,99.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHA2IAAg6IgYAAIAAAuIgOAAIAAg7IAmAAIAAgHIANAAIAAAHIAoAAIAAApQAAAJgEAFQgEAEgJAAIgEAAIgEAAIgEgQIAGABIAGABQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAIAAgFIAAgZIgaAAIAAA6gAg1gbIAAgNIAuAAIAAgNIANAAIAAANIAwAAIAAANg");
	this.shape_7.setTransform(-24,99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(-30.8,25,87.4,94.2), null);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.qwdqwdqwdq();
	this.instance.parent = this;
	this.instance.setTransform(84,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件51, new cjs.Rectangle(84,30,156,186), null);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AjmDMIDKgRIAAgpIilAOIAAg5IClgOIAAgkIA6gGIAAAlICngOIAAA5IinAOIAAAoIDOgRIAAA6InSAngAjrAWQARgLANgMQANgLAIgNIAGgKIAEgMIg2AFIAAg3IA7gFIAAg8IgrAEIAAg3IDygVIAAA3IgqAEIAAA8IA2gFIAAA3Ig2AFIAABpIg6AFIAAhpIguADQgCARgHAPQgFAQgKANQgMAUgPAQQgQAQgSANgAhximIAAA7IArgDIAAg8gAB4AtQgPAAgOgDIgKg/QAPADAPABQAPAAAPgBQAFAAADgCIAEgGIABgMIACgRIAAjIIA7gFIAADXQABAvgNASQgIAKgNAHQgOAGgSABIgTABIgLAAgAA9jTIA5gFIAACsIg5AFg");
	this.shape.setTransform(516.4,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF100").s().p("Ai9BMIgKAfIgLAdIghgoQAQghASg8IAKgnIAKgpIAAgHIgsAFIAAg2IAsgEIAAhdIA1gFIAABeIAhgDIAAA1IghADIAAAeIAcAaQAOAMALANIgEgWIAMgBIALgBIAQgaIANgaIgfgTQgQgJgRgIIAdgoIAFACIAEACQALgXAJgWQAJgWAIgXIAsASIgWAyIgUApIAJAHIAKgXIAIgWIAoAPIgCgrIgBgtIA4gJIAAA0IABAvIAHgNIAEADIADABIARguIAPguIAtARIgUA0IgTAtQAEAEAFADIANgfIALggIAuARIgRAlIgPAiIAVgIQAIAUAGAWQAGAVAFAYIgpAQIgCgHIgBgHQgLAFgKADIARAKIAPAKIgPARIAqgDIAAAzIhrAJIAGARIAGAQIAKgPIAJgOIAvATQgTAkgUAaQAEAGADAEQAEACADAAIACgCIACgFIADgMIACgQIAzARQgHAZgIAPQgIAQgKAHQgGAGgHADQgIADgIABQgLABgMgHQgMgGgMgOIgCgDIgCgDQgQANgRALQgSALgTAKIgbgvQAWgKARgLQASgLANgMQgPgggKgoIhLAGIAAALIgBAJIAjAQIAfAPIgfAwQgKgIgLgGIgUgMIgDALIgDAJQgFAUgIASQgIARgLARIgxgbQAJgOAIgPQAHgPAGgSQAEgOADgSQADgRABgXIgkADIAAgyICYgOIgEgRIgDgPIglANIgBgHIgBgFQgVAIgZAHQgZAGgcAEIgCgNIgfAvIgNgUIgMgTIAADxIg1AEgABsguQAEAiAGAZIABAIIAkgDIgJgGIgJgFIASgXIgSADIgTADIgIguIAHgBIAHgBIAJgRIAJgTIgVgOIgUgMQADApAEAhgAgBg4IgHAOIAKgEIAKgEIgDgJIgDgKIgHANgAA2gxQgDgWgCgZIgDg0IgRAjIgQAfIAbgLIAIAVIAGAXIAAAAgAC2hNIgFAIIAHgBIAGgDIgCgHIgCgGIgEAJg");
	this.shape_1.setTransform(459.7,39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF100").s().p("AjXDTQAbgPAXgSQAWgSASgVIAOgQIANgVIgggYIgggXIgLASIgMARIgnguQARgZAPgbQAOgdAMgeIAOgqQAHgUAEgUIhKAGIAAg7IEGgWIAAA8IiAALIgHAYIgGAXIB5gKQgEAtgIAoQgJAogMAkQgQAogRAgQgSAggWAYQgTAagaAVQgZAXgdATgAhzgsIgBAFIgCAFIgHARIgHAPIAiASIAhAVQAJgWAGgVQAGgWAFgXgABrDiIgKg/QAOAEAOABQAOABAPgBIAGgDQABgCABgEIACgMIAAgRIAAmCIA9gEIAAGRQgBAXgCAQQgEAQgFAJQgHAKgNAGQgNAFgSACIgWABQgSAAgPgDgAA5iuIA8gFIAAEqIg8AGg");
	this.shape_2.setTransform(401.9,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF100").s().p("AgcBJIhYANIhaAMIgKg9QBBgHA6gIQALgKAIgKIg5gdIg6geIAlgyIAPAHIAOAGIASgbIARgbIgxAGIgyAGIgTg6QBbgIBbgOQBbgOBbgUIAdA1IheAUQgxAKg1AIIgeAwIgdAqIAVALIAUAKQAagdAVgcQAWgdATgbIBAAXQghArggAlQgfAlgdAfIB9gQIgNgSIgOgSIA2gmQAYAcATAdQATAdAQAgIg4AmIgRgiIg9AKQggAGggAFIAAC3Ig8AFgAjkC/QAfgOAfgUQAfgUAggbIAmAxQgfAaghAWQgiAVgkATgACiDJQgQgHgPgJQgUgKgRgMQgRgMgQgOIAngwQAQALAQAKQAQAJARAIQARAIAQAFIAgAKIgjBAIghgNg");
	this.shape_3.setTransform(345.7,48.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF100").s().p("AgnBgIidlrIBegIIBqEEIBkkWIBdgHIjjJRIhZAIg");
	this.shape_4.setTransform(295,61.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF100").s().p("Ag3AEIiLi4IBsgJIBWB6IBWiIIBpgJIiJDRICSC3IhsAJIhch5IhbCIIhsAJg");
	this.shape_5.setTransform(250.8,56.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF100").s().p("AhPDGQgigLgbgWQgbgXgQgkQgQgjAAgvQAAguAQgmQAQgmAagbQAbgcAigQQAigQAkgDQAlgEAgAMQAgALAVAXIAAg0IBYgIIAAGJIhYAIIAAg4QgVAcggARQghASglAEIgPABQgbAAgagJgAAChrQgXADgVAKQgVALgQAQQgQARgIAVQgJAWAAAXQAAAYAJAUQAIAUAQAOQAQAPAVAHQAVAHAXgDQAZgCAVgKQAVgLAPgRQAPgRAJgWQAJgVAAgXQAAgXgJgUQgJgUgPgOQgPgPgVgHQgQgFgTAAIgLAAg");
	this.shape_6.setTransform(203.8,59.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF100").s().p("Agrj1IBXgHIAAHyIhXAHg");
	this.shape_7.setTransform(171.2,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF100").s().p("AhPDGQgigLgbgWQgbgXgQgkQgQgjAAgvQAAguAQgmQAQgmAagbQAbgcAigQQAigQAkgDQAlgEAgAMQAgALAVAXIAAg0IBYgIIAAGJIhYAIIAAg4QgVAcggARQghASglAEIgPABQgbAAgagJgAAChrQgXADgVAKQgVALgQAQQgQARgIAVQgJAWAAAXQAAAYAJAUQAIAUAQAOQAQAPAVAHQAVAHAXgDQAZgCAVgKQAVgLAPgRQAPgRAJgWQAJgVAAgXQAAgXgJgUQgJgUgPgOQgPgPgVgHQgQgFgTAAIgLAAg");
	this.shape_8.setTransform(137.5,65.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF100").s().p("AhdDrQgugPggggQghgegSgsQgRgrAAgyQAAgyASgvQASgvAhgjQAggkAtgXQAsgYA0gEQAmgDAgAGQAhAGAcAPQAcANAVAWQAWAVAPAZIhOAyQgWglgjgQQgigRgvAEQggADgdAPQgcAPgVAXQgWAXgMAeQgLAdAAAgQAAAhALAbQAMAcAWATQAVAUAdAKQAeAJAhgCQA2gFAkggQAjggANgyIiXANIAAhWID2gVIAAAkQAAAxgQAuQgQAugeAlQgfAkgrAXQgrAYg2AFIgXAAQgpAAgkgMg");
	this.shape_9.setTransform(86.5,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(56.9,-17.7,494.9,193), null);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGDxQA0gqAmguQAnguAZgyQAnhRAHhVIi+ARIAAhPIC+gRIAAhuIBOgHIAABuID3gXQAACXgFBdQgEBfgIAnQgGAcgKAUQgJATgMALQgPAKgTAGQgUAHgXACQgYACgYgBQgXAAgYgDIgShVQAdAFAcACQAdABAbgCQAXgCAJgNQAIgOADgqQAEgpADg8QACg9gBhRIinAQQgEA+gRA6QgRA7ggA3QghA4grAvQgpAvgyAmg");
	this.shape.setTransform(494.2,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjRA9IgoAIIgoAIIgNhEIAQgCIAQgCIAcghIAaghIgtgcIgugcIApg5IAIAEIAIAEQAVgfASgfQASgfAOgfIBFAaQgWAlgUAfIgoA8IAMAHIALAEQAggsAZgrIBFAZQgiAyghAsQghArgfAmIAcgFIAbgFIgEgPIgEgQIA9gYQAJAcAHAgQAIAeAEAjIhAAbIgCgUIgDgSIgSAFIgRADIAAEMIhDAGgAgRAXIEcgZIAAEVIhLAGIAAgfIiIAMIAAAgIhJAHgAA4BXIAABrICIgNIAAhrgAk4EMIAOhQIAMhRIBAAKIgNBZIgNBJgAh0CnQgGgkgIghIA+gVQAJAjAGAkQAHAjADAkIhAAWQgDgmgGgkgAgBhFIgOAMIgNALIgzgwQAfgbAZgaQAXgbAUgaQAsg5Acg8IBIAOIgIAQIgHAPQAkAnAlAcQAvAkAsAVIgpBMIgOgGIgMgJIAAAkIj3AXgABii6QgGAKgHAKIgYAfIgaAeIClgOIgKgIIgJgJIgkgiIgigkIgNAUg");
	this.shape_1.setTransform(423.6,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkoEaQAKgWAHgZQAIgaAFgdQAEgeAEgqQADgpABg2IBFgGIgBBCIgEA6QAMAPAOAMIAAi6IhxALIAAhHIBsgKIAAg8IhYAIIAAhHIBYgJIAAg/IBHgGIAAA/IBBgGIAABIIhBAFIAAA8IBIgHIAABHIhCAHIAABFIBKgHIAABKIhKAHIAABZIAaAGIAdADQAkAAAwgDQAwgDA9gFQAogDAjgGQAjgEAfgIIgYBXIh1ALQhGAGg2ACQg0ABglgBQgdgBgagHQgbgGgWgKQgMgGgKgHQgLgHgJgJQgFAagGAVQgGAXgIAUgAAEghIEBgYIAADUIkBAXgABMAfIAABGIBxgKIAAhHgAgVhqQASgLAMgNQANgNAIgQQAGgMAFgRQAEgRADgVIgwAFIAAhHIERgaQAABigGA2QgFA3gLALQgJANgQAHQgPAHgWACIgZABIgdgBIgQhLIAiADQAPABANgBQAEAAADgDQADgCABgGQACgEACgWIADg8IhPAHQgDAkgIAbQgHAbgLAVQgaAzgrAXg");
	this.shape_2.setTransform(352.5,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkKi5ICVgNIAAhkIBKgHIAABkIBUgIIAAhkIBKgHIAABkICYgOIAAH6IhLAHIAAgaImAAjIAAAaIhKAHgAjABRIAACFIBLgHIAAiFgAgrBDIAACFIBUgHIAAiGgABzA0IAACGIBNgHIAAiGgAjAh2IAAB9IBLgHIAAh9gAgriEIAAB+IBUgHIAAh+gABziSIAAB+IBNgHIAAh+g");
	this.shape_3.setTransform(254.6,35.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjBhKIhPAHIAAhJIDfgVIAABKIhIAGIAAGJIhIAGgABgCCIgzAFIAAAhIhKAHIAAmEIB9gLIAAhXIBLgGIAABWIB9gLIAAGDIhKAHIAAgiIgzAFIAACiIhLAHgAAtgGIAABFIAzgFIAAhFgACrgSIAABGIAzgFIAAhGgAAtiRIAABBIAzgFIAAhBgACridIAABBIAzgFIAAhBgAknD0QAGgTAFgVQAFgWADgXQADgWACgYQACgXAAgYIAAhgIBCgHIAABhQAAAkgDAhQgDAigGAeQgFAbgHAXQgHAXgHARgAhsgtIA9gGIAAEWIg9AGgAj8kEIC2gRIAABKIi2AQg");
	this.shape_4.setTransform(182.7,41.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkYi2IA7gGIAMgxIAJgyIBNAMIgJAqIgKAmIBigJIAAB4QAMgWALgYQALgYAJgbQANgiAKggQALggAHgeIBMARIgJAmIgLAlIC5gRQAADBgGBwQgHBwgMAgQgJAigWATQgXATgkAEQgTABgTgBIglgEIgPhQQAbADAXACQAXABARgCQAKgBAHgJQAHgIADgQQAFgdADhTQADhRAAiJIiHAMQgNAlgQAhQgPAggQAbIg1gkIAAE2IhKAHIAAgkIhYAIIAAA+IhKAHgAjOBDIAABmIBYgIIAAhmgAjOh0IAABxIBYgIIAAhxgAA6AyQgLglgPggIBIgfQAQAhANAjQANAkAJApIhPAhQgHgpgLglg");
	this.shape_5.setTransform(112,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkXEBQAYgWAUgaQAUgZAQgdIAIgOIAJgPIgTgOIgRgOIgIAfIhGgJQAPg5AMg9QAMg7AKg/IgxAFIAAhHIA8gGIAHgzIAGg0IBHADIgGAxIgHAtIBxgLQgCA/gGA6QgHA7gMA1IgKAoIgKAjIAcAYIAbAaIgzA+IgSgTIgSgSIgFAJIgFAJQgUAigZAeQgYAdgdAagAivh+IgOBOIgNBGIAZAQIAXARIAEgQIAFgRQAIgmAGgnQAFgmADgngAhFDRIAtgFIAAnpIEVgaIAAHqIAsgEIAABNIluAhgAAzByIAABUICAgMIAAhUgAAzg1IAABbICAgMIAAhbgAAzjbIAABZICAgLIAAhZg");
	this.shape_6.setTransform(41.5,55.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjUAhICggPIADgMIAEgLIgkADIAAhIIgTARIgUAPQggAYgcASQgdARgaAMIghg4QAWgLAagPQAbgQAdgVQAxgjAigjIAAgiIgZAYIgbAXQgeAXgaASQgbARgYANIgig6QAWgKAYgPQAYgQAbgVIALgIIAKgJIhtAKIAAhEID9gXIAAEGIA1ALIgHASIgGAOIDSgTIAAEjIhHAGIAAgTIkzAdIAAATIhIAGgAiMDFIAAAiIEzgdIAAgigAiMBiIAAAeIEzgcIAAgfgAAXhAQAsgUA5gqQAXgRAVgRQAUgQARgSIAAgeIgdAbQgQAOgRAMQgfAXgcASQgcARgZAMIghg6QAWgKAZgPQAagQAcgUIALgHIAKgIIhrAKIAAhKIEGgYIAAEjIhGAGIAAhSIgSAQIgUAPQgeAYgcARQgcARgYANg");
	this.shape_7.setTransform(-30.8,60.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjjBaIgMAQIgLAOIg0grQAogxAgg1QAhg2Aag7Ih8ALIAAhJIBEgGIAAhUIBKgHIAABUIA7gGIAAAfIASgZIAPgZQAKgTAJgTIAPgmIBEAJIgEAMIgDAKIDwgWIAABEIkPAZIgFALIgEAGIgCAGID8gYIAADZIiqAPIgFANIgGAMIC4gRIAABCQgMAWgQATQgPATgSARQAbAIAeAFQAcAGAfADIggBNQgugFgpgLQgpgJglgQQggATgmASQglARgrAQIgfhBQA+gVAtgYQgXgQgTgWIgaAbIgdAXIgrgzQAYgSAUgUQAUgUASgVIAQgXQAIgKAEgLIgmAEIAAivIgMAPIgMAOIgkgkQgMAhgPAhQgOAggQAfIAHAFIAHAGIAQgYQAGgMAGgOIAzAVQgIAUgJAPQgJAPgIAMIASAPQAJAHAHAIIgpA9QgPgRgPgPIgdgdIAAECIhCAGgAA3BsIAbATIAbAPQAOgLAMgLIAUgVgAAhg5IAAASICLgNIAAgSgAAhiCIAAAPICLgNIAAgPg");
	this.shape_8.setTransform(-100.5,68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(-138.5,-30.4,676.8,212.6), null);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBMIAAhAIg9hWIAjAAIAoA7IApg7IAjAAIg9BWIAABAg");
	this.shape.setTransform(110.7,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvBLIgRgkIg8AAIgQAkIggAAIBDiVIAWAAIBECVgAATAMIgTgsIgSAsIAlAAg");
	this.shape_1.setTransform(96.8,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BMIAAiWIApAAQAiAAARAMQASAMAAAZQgBAagRANQgQAMgiAAIgNAAIAAAygAgZAAIAVAAQAPAAAHgGQAIgGAAgMQAAgGgDgFQgCgEgEgDIgKgEQgFgCgGABIgVAAg");
	this.shape_2.setTransform(84.4,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA6BgQgHgGgHgLIgDgEIgCgDIgUAPQgKAHgLAFIgNgWQAOgHAJgIQALgIAIgIIgFgOIgEgQIgDgQIgDgTIgrAAIAAAaIAQgDIAPgDIACAZIgQAEIgRAEIAAAgIgBARQgBAHgDAEQgDAEgGACQgGACgIAAIgPgBIgOgDIgEgbIAPADIAOABIADAAIACgDIAAgFIABgHIAAgVIgUADIgUADIgGgcIAYgCIAWgDIAAgfIguAAIAAgaIAuAAIAAgXIgOACIgPABIgJgZIAsgDIApgEIAKAXIgOACIgRACIAAAZIAoAAIgBgbIAAgdIAaAAQAAAgACAYIBBAAIAAAaIg/AAIABALIACAJIACALIACALIALgRIAJgTIAYANQgHAQgJAOQgIAOgJALQAEAJAEAFQADAFADAAQACAAACgEIACgJIACgPIAaALQgCAOgEAJQgEAKgHAFQgEAEgEABQgEACgFAAQgFAAgHgGgAA7hGQgFgIgGgIIAYgOIALAQQAFAIADAIIgYAOQgDgIgFgIg");
	this.shape_3.setTransform(63,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層 2
	this.instance = new lib.btnpng複製();
	this.instance.parent = this;
	this.instance.setTransform(29,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(29,0,111,55.5), null);


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
	this.shape.graphics.f("#FFF100").s().p("AnBDQIA6gHQgFgOgIgMIATgLIgnAEIgBhLQgNAIgLAEIgKgaQAVgJATgQQgKgLgNgLIAbgYIAYAUQAMgPAMgSIhQAIIAAgdIB2gOIAAAJIAKAKQAUgLASgRIAWARQgQASgVANIAOAKQATgOAOgUIAZATQgPASgSAPQASALAVAKIgVAfIgOgHIABBMIgqAFIAYAEIgPAfIBAgHIAAAgIjkAbgAl2CiQAIAMAGAOIgUALIA9gGIANgmgAmLBtIABAYIBwgNIAAgYgAl/A8IgVATICJgRIgZgSIAAAHIhTAKIAAgJgAljAcIAogEIgWgWQgKAQgIAKgAinCpIAmgKIgBhDIghADIAAggIAhgDIgBgTIgTACIAAgTIgFAGIgWgXQAQgRALgSQAMgTAIgWIAdAGIgDAHQAXAMASAPIgTAeQgSgPgRgMIgGANQgIAOgIAJIA8gHIAAAgIgWACIAAATIAegEIABAgIgfAEIABA+IAfgJIAAAGQAWgWARgZIARARQgUAkgYAWIgIgJIAAAEQgsASgvAOgAggC/IgGghQAKADAJgBQAFAAACgFQACgFAAgKIgBhdIg0AGIAAgcIBHgJIADgPIgpAEIgDAKIgbgBIAXhcIAcACIgDALIBHgJIgYBXIAjgEIAAAcIg3AHIAAAdIAHALQAMgSAHgUIAYANQgOAcgOASQAQATAVAJIgOAhQgQgJgOgPQgHgIgHgLIAAAWQAAAYgGAJQgHALgSACIgHABIgKgBgAgTglIgFARIAqgFIAEgRgABxCNIAfgUIgBg8IgdADIAAghIA6gHIABBXQALAIALACIgLgaQAhgRAQgYQAHgLAEgNIg+AHIAAghIBCgHIAAgCIAAgbIg5AGIgBggIAigEQgGgNgKgNIAagVQANAPAIAQIgRAOIAigEQAJgWAIgaIAiAHQgHAUgJARIAhgEIAAAhIg9AHIAAAeIBHgJIAAAgIg+AIQADAIAFAGQAIALAOAIQAMAHAUAGIgPAiQgVgFgVgQQgPgMgJgQQgFALgGAJQgWAcgjASQAGABAFgBQAOACBEgIQAmgEAagJQgJATgFAVIhOAJQgrAFgZgEQgSgDgSgPIgbAnQgNgWgJgLgAiqB0IAbgMQAGARAFAYIgcANQgDgYgHgSgAhiCFQAFgWACgSIAcAEQgEAVgFATgAg9BJIAWgSQALAPAFAPIgYASQgFgPgJgPgABxgLIAWgdQAQAIAPANIgWAfQgPgOgQgJgACChEIAWgcQARAIAPAOIgVAgQgRgQgQgKgAHBhyQABg/gjgcQgagVgrgBIgmADIgDgLIArgEQAtACAdAXQAoAggCBEgAFfiDQgGgEgKAAIgJABIgDgLIAMgCQAOAAAJAGQALAJABASIgMAAQAAgMgHgFgAGOh8QAAgUgMgLQgMgNgagDIgYgBIAAgMIAbACQAcAEAPAOQAQAPgBAag");
	this.shape.setTransform(128.5,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 1
	this.text = new cjs.Text("買指定機型", "31px 'DFHei Std W9'", "#FFF100");
	this.text.lineHeight = 33;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(-10.5,-11.2,0.568,0.565,0,0,-5.2);

	this.text_1 = new cjs.Text("AKG藍牙喇叭", "31px 'DFHei Std W9'", "#FFFFFF");
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 212;
	this.text_1.parent = this;
	this.text_1.setTransform(10.8,15,0.794,0.79,0,0,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(-11.7,-52,191.2,119.3), null);


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


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m3();
	this.instance.parent = this;
	this.instance.setTransform(0,7.4,1,1,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,63,98.4), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AiUCLQAUgDAPgFQAQgFANgHIgGgCIgGgCIgEAIIgggQIAIgLIAHgLIghADIAAggIAxgFIADgGIABgFIgtAFIAAhEIBAgHIAAgJIg9AHIAAgoIgMACIAAgcIAMgCIAAgmIA9gHIAAgNIAigEIAAANIA5gGIAAAmIANgBIAAAcIgNABIAAAoIg5AGIAAAIIA4gGQAHgNAFgOIALgeQANgnAIgjIAjAIIgGAVIgEAVIBBgIIAAAmIgJAAQgEApgGAhQgHAigLAcIAAADIgCADQAKAPALANQALAMAOAJIgZAsQgMgLgLgNQgKgNgJgNQgKAQgLAOQgMAPgOANIgWgfQAOgOANgRQAMgQAKgTQgOgfgIgqIgFAHIgDAHIgTgOIAAAuIhNAIIgBAHIgCAEIBcgLIAAAhIgdADIgJATIgJARIANAHIAOAIIgRAmIgUgNIgTgLQgQAMgXAJQgXAKgeAGgAhNBPIgBADIgBADIAOAEIAOAFIAHgJIAFgJgAhuABIAAALIAggEIAAgKgABEhUIgBACIAAACIgCAGIgBAFQAEAWAFASQAGATAGAPQAHgTADgYQAEgXADgbgAgsgFIAAAKIAdgEIAAgKgAhqhLIAAAIIAcgDIAAgIgAgshSIAAAIIAbgDIAAgIgAhqhvIAAAIIAcgDIAAgJgAgsh3IAAAJIAbgDIAAgIg");
	this.shape.setTransform(207.8,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF100").s().p("AhyAJIgOAYIgTgkQASgiAMglQANgkAIgmIAiAHIgHAeIgJAeIAAD9IgkADgAhFB7IAXgHIAWgGIAAgsIgoAEIAAglIAogEIAAgkIAkgFIAAAkIApgEIAAAlIgpAEIAAAlIAWgHIAWgHIAFAgIg4AXQgdALggAKgABcCVIgRgCIgGgoQAJADAIABIATgBIADgBIADgFIAAgHIABgKIAAkCIAkgEIAAEMQAAAOgCAKQgBALgEAEQgFAHgHAEQgIAEgKABIgNABIgGAAgAA/h4IAkgEIAADIIgkAEgAhFgqIAJgDIAJgCIAEgOIAGgRIAEgQIAEgQIgYADIAAgkIBvgNIAAAkIgzAHIgEAPIgEARIgFANIgDALIALgDIAKgDIgEgKIgEgKIAfgTQAIARAIASQAHARAGAUIgkATIgCgKIgCgJIgoAOIgrAMg");
	this.shape_1.setTransform(171.4,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF100").s().p("AgmAIIC3gUIAACfIglAFIAAgPIhtANIAAAOIglAFgAgBBeIAAAVIBtgNIAAgUgAgBAnIAAAUIBtgNIAAgTgAiQh3IBggLIAAEAIgkAEIAAgUIgYADIAAAfIgkAEgAhshWIAAChIAYgCIAAihgAgciVIClgTIAACQIilATgAAHhAIAAATIBdgLIAAgTgAAHh0IAAARIBdgKIAAgSg");
	this.shape_2.setTransform(135.5,35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF100").s().p("AiJiPIB/gOIAACDIhdALIAAC6IgiAEgAhnhAIAAANIA8gHIAAgNgAhnhuIAAANIA8gHIAAgNgAhaCCQAJgHAIgIQAHgJAFgKIACgFIACgFIgfADIAAgkIAkgEIABgDIAAgDIAAgFIAAgNIgdAEIAAgjIChgTIAAAjIggAEIAAAYIAlgEIAAAkIglAEIAABEIgkAEIAAhEIggAEIgFATIgGAPQgHAOgKAKQgJALgMAHgAgQAVIAAAPIAAAJIAdgDIAAgYgABFCTIgIgpQAQAEAOgCQAFgBAEgGQACgHAAgOIAAh3IhbALIAAiDIARgCIBugNIAAEKQAAAZgKAOQgKAOgVACQgGABgHgBIgHAAIgIAAgAAshRIAAANIA6gHIAAgMgAAsh/IAAANIA6gHIAAgNg");
	this.shape_3.setTransform(99.6,39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF100").s().p("AiNCLQAMgMAKgOQALgOAIgPIAEgHIAEgIIgJgIIgJgHIgEARIgjgFQAHgeAGghIALhAIgYACIAAgmIAegDIADgbIADgcIAlACIgEAaIgDAXIA5gGQgBAhgDAfQgEAfgFAdIgGAVIgFASIAOANIAOAOIgaAhIgJgKIgJgKIgDAGIgCAFQgKASgNAQQgMAQgOAOgAhYhBIgHAqIgHAlIANAIIALAIIACgIIADgJIAHgpIAEgogAgjBvIAXgCIAAkEICMgQIAAEEIAWgDIAAApIi5AVgAAZA9IAAAsIBBgHIAAgtgAAZgcIAAAvIBBgHIAAgvgAAZh0IAAAvIBBgHIAAgwg");
	this.shape_4.setTransform(64,44.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF100").s().p("AghB+IC0gVIAAAmIi0AUgAiUh1IBkgMIAAECIgkAEIAAgWIgcADIAAAoIgkAEgAhwhUIAACgIAcgDIAAiggAAfgMIgYAlQgLASgMAPIgdgdQAQgSAOgTQANgVAMgYIAQgfIANgdIhAAHIAAglICmgTIAAAlIg+AHIgEAPIgHAPIAAAeIAagWQAOATANAYQAOAXANAaIggAfQgLgXgMgVQgLgXgOgVIAACUIglAEg");
	this.shape_5.setTransform(28.5,47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(8.8,4.4,221,66.4), null);


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
	this.instance.setTransform(300,59,1,1,0,0,0,300,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.9,-17.7,494.9,193);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件39();
	this.instance.parent = this;
	this.instance.setTransform(71,20,1,1,0,0,0,71,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件43, new cjs.Rectangle(29,0,111,55.5), null);


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
p.nominalBounds = new cjs.Rectangle(32,3,140,46);


(lib.元件24複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(211.8,-4.6,1,1,-146.5,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.7,11.1,1,1,-30,0,0,8.5,9.5);

	this.instance_2 = new lib.元件30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.8,103.3,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(13));

	// 元件 26
	this.instance_3 = new lib.元件15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(47.2,51.8,0.661,0.661,15,0,0,31.6,49.1);

	this.instance_4 = new lib.元件31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(186.4,52,1,1,30,0,0,16.5,38.6);

	this.instance_5 = new lib.元件31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(194.1,42.1,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.6,-14.4,228.1,127.2);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(61.3,56.1,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.7,70.5,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.4,37.6,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,6.8,262.2,73.2);


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


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.phone.gotoAndPlay('play');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(206));

	// 圖層 5
	this.instance = new lib.元件59();
	this.instance.parent = this;
	this.instance.setTransform(242.3,21.5,0.406,0.406,0,0,0,123.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({alpha:0},11).to({_off:true},1).wait(202));

	// logo
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.5,20,1,1,0,0,0,35.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(255));

	// t42.png
	this.instance_2 = new lib.元件34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(81.5,118.1,1,1,0,0,0,61.5,29.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({y:110.1},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_3 = new lib.元件53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.5,174.4,1,1,0,0,0,111,29.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102).to({_off:false},0).to({y:166.4,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_4 = new lib.元件40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(215,234.5,1,1,0,0,0,86,24.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({_off:false},0).to({y:226.5,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 6
	this.instance_5 = new lib.元件57();
	this.instance_5.parent = this;
	this.instance_5.setTransform(226,139,1,1,0,0,0,122,112);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).to({x:194,alpha:1},7,cjs.Ease.get(1)).wait(150));

	// 圖層 7
	this.instance_6 = new lib.補間動畫6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-8.7,256.5,1,1,4.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).to({x:43.9,y:256,alpha:1},7,cjs.Ease.get(1)).wait(150));

	// ttt2.png
	this.instance_7 = new lib.元件47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(157,89.2,0.143,0.143,0,0,0,185.8,50.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({regX:186.1,regY:50.6,scaleX:0.39,scaleY:0.39,x:155.5,y:79.1,alpha:1},5,cjs.Ease.quadInOut).to({regX:186,regY:50.5,scaleX:0.35,scaleY:0.35,x:155.6,y:79.9},3,cjs.Ease.quadInOut).wait(30).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(152.7,41.9,0.616,0.616,0,0,0,300.1,59);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({regX:300.2,scaleX:0.4,scaleY:0.4,y:48.2},5,cjs.Ease.quadInOut).to({regX:300.1,scaleX:0.42,scaleY:0.42,y:47.8},3,cjs.Ease.quadInOut).wait(34).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(147.5,143.5,1,1,0,0,0,118.5,40.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 元件 5
	this.instance_10 = new lib.元件51();
	this.instance_10.parent = this;
	this.instance_10.setTransform(147,357.5,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40).to({_off:false},0).to({regY:125.1,scaleX:0.7,scaleY:0.7,x:147.1,y:168.7},11,cjs.Ease.quadInOut).to({regX:150.1,regY:125,scaleX:0.69,scaleY:0.69,y:166},1).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(323.3,326,1.687,1.687,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(40).to({_off:false},0).to({regX:41.5,regY:41.5,scaleX:1,scaleY:1,x:245.5,y:206.5},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_11 = new lib.元件22();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-16.5,307,1.687,1.687,0,0,0,39.5,39);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},0).to({scaleX:1,scaleY:1,x:65.5,y:201},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 2
	this.instance_12 = new lib.元件24複製();
	this.instance_12.parent = this;
	this.instance_12.setTransform(147.5,143.5,0.73,0.73,0,0,0,118.5,40.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({scaleX:1.11,scaleY:1.11,alpha:1},9,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},5,cjs.Ease.quadInOut).wait(18).to({regX:118.6,scaleX:0.88,scaleY:0.88,x:148.2,y:149.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(206));

	// 圖層 3
	this.instance_13 = new lib.元件56();
	this.instance_13.parent = this;
	this.instance_13.setTransform(156,202.5,1,1,0,0,0,59,106.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:192.5,alpha:1},9,cjs.Ease.get(1)).wait(29).to({regY:106.6,scaleX:0.88,scaleY:0.88,x:155.6,y:192.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(206));

	// t1.png
	this.instance_14 = new lib.元件2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150.7,45.9,1.709,1.709,0,0,0,118.5,26.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({regY:26.1,scaleX:0.95,scaleY:0.95,x:150.5,y:50.7},8,cjs.Ease.quadInOut).to({regY:26,scaleX:1.02,scaleY:1.02,y:49.8},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:50},4,cjs.Ease.quadInOut).wait(17).to({scaleX:0.74,scaleY:0.74,y:53,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(206));

	// bg
	this.instance_15 = new lib.元件55();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(255));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,301,309);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_atlas_.png?1540662593649", id:"300x250_atlas_"}
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
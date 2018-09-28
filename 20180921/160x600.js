(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"160x600_atlas_", frames: [[329,375,139,131],[329,252,155,121],[158,252,169,124],[0,0,403,250],[0,440,142,40],[457,69,43,43],[405,69,50,92],[405,163,42,64],[243,378,79,78],[158,378,83,83],[293,458,17,19],[449,163,43,50],[243,458,48,45],[405,0,79,67],[0,252,156,186]]}
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



(lib.btn = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.pen = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.qwdqwdqwdq = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(14);
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
	this.instance.setTransform(-266.9,-111.2,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-161,19);

	this.instance_2 = new lib.圖層1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-172,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.9,-153.3,509,422.4);


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
	this.shape.graphics.f("#FFFFFF").s().p("AniCIIAXAAQAFAAAAgIIAAgtIgcAMIgDgkQANgCASgHIAAgsIgdACIAAgcIAdgDIAAgvIAegDIAAAuIAVgCIAAAdIgVADIAAAhIAVgMIACAfIgXAOIAABGQgBAYgXADIgcADgAmLAjIB0gMIAAB+IgdADIAAgMIg6AGIAAAMIgdADgAluBlIAAAUIA6gGIAAgUgAluA6IAAASIA6gGIAAgTgAjtB3QAkgsAEg4IAeACQgDAWgFASQALAQARAHIAIACIAAhWIhCAHIAAgTIgQABIAAg7IBRgIQgDgNgEgIIAmgIIAFAZIBUgJIAAA7IgbADIAAAVIg8AGIAAAdIBFgIIAAAeIhFAHIAAAhQAXABAmgEIAbgFIgHAkIggADQg+AGgdgIQgVgHgPgTQgMAcgPAVgAi+gsIAAAVICKgPIAAgVgAArAIQgHAegLAbIgKglQAQglAGgrIgQACIAAgbIAWgCIAAgsIAYgDIAAAsIAOgBIAAAKIAEgBQAIgUAFgiIAVAEQgGAYgGAUIgBABIALgDQAFgOAEgOIAQAGIgBggIAZgCIABAyIACgBQAJgSAGgfIAXAFQgKAbgGANIAJgDIAJgYIAWAHIgUAnIANgFQALAYADAUIgVAJIgBgKQgVAIgYAFIABAOIATgCIgDgMIAbgGIACAQIASgCIAAAXIg6AHQADANADAMQALgMAGgOIAWAJQgMAXgNAPQAGAHAEAAQAHgBABgQIABgJIAVAKQgCAZgIALQgHAKgNABQgOABgOgSIgBgBQgSAOgVALIgRgWQAXgKATgQQgHgRgDgRIgBgGIgeADIgBAHQAYAJAIAGIgNAaQgKgIgMgHIgDAPQgHATgRAWIgUgWQAOgMAGgSQAEgOACgVIgQACIAAgUIgDAGIgMgWIAAB7IgYADgABbgMIgGAMIAOgBIAAgLIAYgDIAAAMIAZgDIgCgQIgNAGIgCgJQgTAIgVAFgABDg3IAAAMIAQAPIgBgFQAIgBAEgBQAFgHAIgQIgcAIIAAgGgACRgmQgCgVAAgiQgJAWgGALIAIgDIAJAZgAB1goIAKgDIgDgJgACohDIABAVIADAAQAIgKAJgQIgVAFgADFgyIAOgFIgEgNgAEPA5IBcgKIAAgTIhNAJIAAgeIBNgHIAAgMIgNABIAAg4IgYADQgDAngaAbIgagUQAWgTAFgZIgYADIAAgbIAZgDIAAgZIgUACIAAgbIB4gMIAAAaIgUACIAAAaIAYgCIAAAaIgYADIAAAwIAOgBIAAAUIBMgIIAAAcIhMAIIAAATIBdgKIAAAdIjXAWgAFIh1IAAAaIAWgDIAAgagAmHAMQgGgIABgMIAAhAIAdgDIAAATQAvgIAggUIAKAcQgsAVgtAIIAAALQAAAHAJgBIAtgFQAHAAADgDQADgCACgSIAeAFQgDAqgXACIhIAIIgHAAQgNAAgFgHgAGhgxIAagBQAGAAAAgHIAAhsIAcgDIAAB5QAAAZgXACIgeAEgAGYiUIAcgDIAABVIgcADg");
	this.shape.setTransform(48.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(0,0,97.1,33.9), null);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AwlEjQAOgpAHg1QAHg1AAhAIA8ABQAAArgEAoQAMATANAOIAGAGIAAioIhnALIAAhBIBRgJIAAg1IhFAIIAAhBIBFgHIAAg2IA+gHIAAA2IBEgHIAABBIhEAHIAAA0IA3gGIgEgEQAqgUAWgbQAPgUAEgcIg0AFIAAg9IDrgZIAAAzQAABxgUAVQgVAUg3AGIgbADIgKg/QAggBAFgBQARgCAGgFQAGgHABhDIg4AGQgEArgQAhQgTAmgzAmIgigeIAAAwIg1AGIAAA9IA1gFIAABAIg1AGIAABQQA2AMBigKQAPgBCUgXIgMBKIilASQh6ANg2gbQgigTgZghQgHAxgQA5gAn2DIQA2AAARgDIADAAQAVgGACg+QgBAAACgwIhaAJIAOjBIBSgIIAAg+IhkALIAAhAICfgRIAAC9IhUAJIgFBAIBXgJIgEBsQgCAwgGAfQgGAigKAMQgTAXgnAFIhBAEgAlRC6QArgFBSgNIAAg4IhqAMIAAivIBqgLIAAgqQhGAPgiAGIgMhIQAagDAMgCQAkgvAWhGIBHAPQgdA7gXAhQAcgCBAgKQgSgggNgTIAzgYQAxBBAdA+Ig6AmIgPgkIg2AMIAAAwIBogMIAACvIhoALIAAAyIAkgHIgKgUIAzgWQAXAjAWA3IAHARIg8AdIgMgpQhyAfh2AZgAkBgBIAAA+IAtgFIAAg9gAiWgMIAAA9IAqgEIAAg9gAsvDFIAAiuIDYgWIAAC9Ig+AHgArxBMIAABHIBcgKIAAhHgAClj8IBNgIIB9GPIhKAIIgZhXIiEAOIgXBcIhKAIgACbAEIBfgJIgwivgAG+kaIBGgHIAADCICDjQIBTgJIiCDCICLDaIhUAJIhjihIgoA6IAAB2IhGAHgAM0ArQgugyAAhmQAAhmAug+QAug9BTgJQAegDAfAGQAcAFAUAOIgUBBQgxgUgpAEQhlALAACQQAACPBmgLQASgCAYgIIAAhiIg8AGIAAhFICDgOIAADTQgXATgcAKQgdAMghADIgYACQhCAAgngsg");
	this.shape.setTransform(106.2,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(0,0,212.5,69), null);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(190.4,45.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(0,0,380.7,91.2), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(65.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件56, new cjs.Rectangle(0,0,130.4,38.4), null);


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


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.qwdqwdqwdq();
	this.instance.parent = this;
	this.instance.setTransform(84,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件51, new cjs.Rectangle(84,30,156,186), null);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9bDsIA0gGIgHBjIAqAeIAAjZIhrALIAAg2IBrgLIAAhGIhdAKIAAg1IBdgJIAAg9IA1gFIAAA7IBWgJIAAA1IhWAJIAABGIBmgKIAAA1IhmALIAAA7IBNgHIAAA2IhNAJIAACNIGfgsIAAA4Im4AvIhNg1IgHBVIg1AFgAyVFoIBAgHIgCisIgjA2IhEAHIBhiWIgYhFIgQAYIhEAIIA9hfIgkhpIA6gHIASA0IAog6IBCgHIhTCBIAtB6IADE9Ih4AMgAvuE/ICagRIAAi7Ih2AMIAAg7IB2gMIAAiZIiDANIAAg7IE/ghIAAA6IiCAOIAACZIB2gMIAAA6Ih2ANIAAC8ICbgQIAAA6IlvAngA48CdID7gbIAAC9Ij7AbgA4MDJIAABaICbgRIAAhZgAnGA0IFxgnIAAEbIlxAngAmRDSIAABBIEGgcIAAhBgAmRBkIAAA3IEGgbIAAg4gAB5BEIA9gHIgqDXIg9AGgAESkJIB+gMIAAgxIA7gGIAAAwIB+gNIAAEfIhiAKIAlA/IAegZIBogKIhqBSIBIB4IhFAHIiJjmIhUAJIAACdIBTgbIAAA7IiPAxgAFOhhIAAA3IDBgUIAAg4gAFOjUIAAA3IDBgUIAAg3gAPCAEIiICOIhVAJIDdjnIAAi6Ij2AaIAAg6ID2gaIAAhPIA6gGIAABPID1gaIAAA6Ij1AaIAAC5IDoC5IhYAJIiQhyIAACzIg6AGgAXRAlIgwAkIhXAJICahwIiYAPIAAguIDwgaIAAgpIAugFIAAAqID0gaIAAAvIjhAYIBEA2IAlggIBTgJIhTBHIBBA3IhFAHIipiKIg3AoIAABEIBNgSIAAAxIh+AegA4JgyIhKAIIAAg2IEUgcIgJDQIg2AFIAHiaIhbAKIgrCiIg2AFgAoogfICbgQIgbhdIhBAHIAAg1IC+gUIAAgsIA1gGIAAAsIC/gUIAAA2IhBAHIgXBhICVgPIAAA1IouA6gAlviRIAbBcICMgPIAXhigAMqjZIBAgHIgSAuIA8BgIhFAGIgTgeIgbBGIhAAGgABIg8IAAg9IBrASIAAA8gARoj7IBBgIIgUAxIBWBsIhJAIIgqgzIgaA6IhDAIgAVSktIDbgXIAADGIgoAEIAAgtIiTAQIgDAtIgoAEgAV1jPIgBASICRgPIAAgTgAV4kJIAAATICNgOIAAgUgAZplfIDSgYIAAgJIjSAXIAAh6IApgEIAAAgIDSgWIAAAfIjSAWIAAARIDTgXIAABcIjTAXIAAAMIDSgWIAAAdIjSAWIAAALIDSgWIAAAcIjSAXIAAALIDSgWIAAAdIjSAWIAAALIDggXIAAApIkJAdgABIjbIAAg7IBrAQIAAA8gAUwleIA5gHIgGgiIgfAEIAAgnIBjgLIAAgWIAngFIAAAYIBogLIAAAnIglADIgIAjIA4gFIAAAnIkRAcgAWLmKIAGAhIBQgIIAJgkg");
	this.shape.setTransform(162.5,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(-28.2,-4.4,381.3,97.7), null);


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

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An/A6IB8gOIAABfIh7AOgAntBvIABAWIBXgKIAAgWgAntBKIAAATIBYgLIAAgSgAj0BTIglAfIghAEIAzgsIg7AHIgBgTIBOgJIAAgNIAUgDIAAANIBMgJIAAAUIg4AGIA2AgIghAEIgpgYIABArIgUACgAg3AFIg0AOIAAgRIAMgCIgBhCIgMABIgBgRIBOgJIABARIgJABIACCxIgRACgAhOgRIAAAMIAXgGIAAgJgAhPgrIAAAJIAYgDIgBgIgAhPhEIAAAJIAXgDIAAgJgAhpBWIAOgEIAAgQIgNABIAAgNIANgCIgBgMIgOACIAAgOIArgFIAAAOIgMABIABAMIAJgBIAAAOIgJABIAAANIAKgCIABANIgqAMgAAAAlIASgCIABArIAzgGIAAASIhFAJgAgVA2IATgCIgFAmIgTACgAClARIgkAQIAAgVIAkgPIgBglIgnAFIgBgUIAogFIAAgZIgeAJIAAgUIBIgYIAAAVIgXAHIABAeIA3gHIgBg2IAUgDIABA3IA8gHIABAUIg5AGIAMAdIAKgQIAYgDIgaAoIAXA7IgVADIgQgqIgYAjIgYADIAng6IgSgvIg6AHIABAeIAfgOIABAVIggANIABBBIgUACgABCAoIAUgCIAMAcIgTACgAogAfIA0gGIgKgeIgVACIAAgSIA/gHIAAgPIASgCIAAAPIBAgIIAAASIgWADIgHAfIAygGIAAATIi7AWgAnjgIIAJAeIAwgFIAHgggAAUAcIAXgDIAQAUIgXACgAk7AHIgTgUIATguIASgCIgSArIAHAHIAIgXIATgCIgYA8IAPgDIgBgQIAPgCIAEApIgQABIgBgIIgqAKgAkMg2IANgBIAGgQIAVgCIgHAPIAegDIABBaIg/AHgAj6gCIAAATIAcgDIAAgTgAj7gnIABASIAcgDIAAgSgAIHgoIAFhMIg7AHIgHAiIgVACIARhNIAUgCIgFAWIBMgJIgGBkIgBABIgSBHIgVACgAi0gKIgUgVIATgsIATgCIgSApIAHAHIAIgVIASgCIgYA+IAQgDIgEgRIARgCIAGAnIgRACIAAgGIgsAJgAFnhxIAPgCIAFgVIATgDIgFAWIAhgEIACCHIhEAJgAF5gpIAAAsIAhgDIAAgtgAF4hiIAAAmIAigEIgBgmgAgVADIBxgMIAAARIhxANgAgUg3IAtgFIAAgMIgwAGIAAgSIAwgGIAAgMIARgCIAAAMIAwgFIABARIgxAGIABAMIAtgGIABAxIhsANgAgDgpIAAARIAMgCIgBgQgAAbgsIAAAQIAOgCIAAgQgAA7gwIAAAQIANgBIAAgRgAHUhOIAVgCIAOApIgVADgAEOh4IAXgDIASAcIgXADg");
	this.shape.setTransform(54.5,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0.1,109,30.7), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,79,67), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWAPIAAgFIARAAIAAAGQAAAGAGAAQAFAAABgFQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQgBgDgNgHQgNgGgBgHIAAgJQACgNAUAAQAUAAAAAPIAAAFIgPAAIAAgEQAAgGgGABQgEAAgBADIAAAEQAAADANAHQANAGABAGIAAALQgCAOgTAAQgXAAAAgSgAgOAPIAAgFIAPAAIAAAGQAAAGAHAAQAEAAABgFIAAgEQgBgDgMgHQgMgGgBgHIgBgIQADgNASAAQAVAAgBAOIAAAFIgPAAIAAgEQAAgFgFAAQgFgBgBAFIAAADQABACANAIQAMAGABAGIAAAKQgBAOgUABQgVAAAAgSgAArARIAAgvIAPAAIAAAtIABACQAAAEAFAAQAFAAACgEIAAgvIAPAAIAAAvQgBAPgVAAQgTAAgCgPgACrAQIAAgDIAAgZIAAgFQACgOATAAQAVAAABAOIAAAFIAAACIgQAAIAAgGQABgEgHAAQgFAAAAAEIgBADIAAAdQABAFAFAAQAHAAgBgFIABgCIAAgJIgHAAIAAgIIAXAAIAAAQIgBADQgBAPgVABQgTgBgCgPgAgsAfIgBg5IgKA5IgQAAIgKg5IgBA5IgPAAIABg9IAZAAIAIAvIAIgvIAYAAIACA9gAh+AfIgIg5IgJA5IgRAAIAMg9IAbAAIAMA9gACFAeIgQgyIABAyIgPAAIAAg8IAXAAIAPAwIgCgwIAPAAIAAA8g");
	this.shape.setTransform(35.5,5.5,1.655,1.655);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0.1,0,71,11), null);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.元件58();
	this.instance.parent = this;
	this.instance.setTransform(262.6,-3.7,1.195,1.195,0,0,0,106.3,34.4);

	this.instance_1 = new lib.元件57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(286.7,65.1,0.786,0.786,0,0,0,190.3,45.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AhMgHICZAAIiZAPg");
	this.shape.setTransform(167.8,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(135.5,-44.8,300.8,145.6), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;
	this.instance.setTransform(300,59,1,1,0,0,0,300,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97,x:300.1,y:59.1},6,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97,x:300,y:59},1).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.5,-44.8,300.8,145.6);


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


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(116.6,173,0.899,0.899,0,0,0,32.3,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.5,140.7,0.899,0.899,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.7,93.6,0.899,0.899,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.8,76,119.7,101.1);


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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件56();
	this.instance.parent = this;
	this.instance.setTransform(126.3,30,1,1,0,0,0,65.2,19.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AnTCUQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAIhOIgBgCQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgNABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgBgCIAAgSIABgDIADgBIAQgCIADgBIABgDIAGg6IgBgCQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgWACIgCgBIgBgCIAAgSIABgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAZgDIADgBIABgDIAGg1QAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIASgCIADABIABACIgGA2QAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACABIAlgEIACgBIACgDIAFg1QAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIACgBIASgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABABIABADIgGA1IABACIADABIAOgBIACABQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIAAASQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgRACIgDABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIgHA6IABACIADABIAXgCIADABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAASIgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgaADIgDABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIgIBOIgBADIgDABIgTACQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAIhNQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIgDgBIgkAEQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIgJBOIgBADIgDABIgSACIgCgBgAmBgiIgjAEIgDABIgBADIgHA6QAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAIAlgEIACgBIACgDIAGg5IgBgDIgCgBIgBAAgAkpB1IgEgBIgBgEIAAjfIABgEIAEgBICFgOQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAAUQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAIgDACIhoALIgCABIgBACIAACrIABABIABABIBQgJQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAhUIgBgCIgBAAIgmAEQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgCIBBgHQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAACIQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABIgEACIiIAOgAFwBsIgDgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgSIABgEIAEgBIBPgJIACgBIABgCIAAgjIgBgCIgCAAIhQAIIgEgBIgBgDIAAiaIABgEQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIATgCQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAACBIABACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIA2gFQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAiBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIAUgCQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAC/QAAAFgCADIAAABIgaAcQgDACgEAAIhNAIgAh6BiIgDgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhlQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIBQgIIACgBIAAgCIAAgbIAAgBIgCgBIhNAJQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgSQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgCIBogLIAEABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABIAACBQAAAEgBAEIAAAAIgZAdIgIACIhOAIgAhfALIgBABIgBACIAAA1IAAABIACABIA2gGIACgBIAAgCIAAg1IAAgBIgCgBgAAZBTIgDgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAjaIABgDIAEgCIAUgCQAAgBABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAADaQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgUACgABUBNQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAhlQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIBQgIQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgaIAAgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAgBABIhNAIIgEgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAgRQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIBogLQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAACBIgBAIIgZAdQgEACgEAAIhOAJgAClgPIg2AFQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIAAA0IAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAABAAIA2gGQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgzIAAgCIgBgBIgBABgADUA+QAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAqheIABgDIgBgDIggg7QAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAIADgCIAVgCIAEABIACACIAaAwQACADADAAIAAAAQADgBABgCIAZg2QAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAIAEgCIAVgCQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABIgeBBIAAADIAAADIApBWQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAABIgVACIgDgBIgDgDIgihIIgCgCIgCgBIgDABQgDAAgBADIgkBQIgCADIgEABIgVADg");
	this.shape.setTransform(109.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(61.1,-14.8,130.4,64.1), null);


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
(lib._160x600 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(57.2,22,1.164,1.164,0,0,0,35.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262));

	// t41.png
	this.instance_1 = new lib.元件33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.3,163,0.984,0.984,0,0,0,92,20.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({y:149.6,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t43.png
	this.instance_2 = new lib.元件32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.8,257.4,0.95,0.95,0,0,0,0.1,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({regY:0.1,y:243.6,alpha:1},7,cjs.Ease.cubicOut).wait(148));

	// t42.png
	this.instance_3 = new lib.元件34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.1,229.1,0.95,0.95,0,0,0,61.6,29.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({regY:29.7,y:219.5},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_4 = new lib.元件53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(163.6,367.5,1.603,1.603,0,0,0,111.1,29.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({regY:29.9,scaleX:1.22,scaleY:1.22,x:147.9,y:380.7,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_5 = new lib.元件40();
	this.instance_5.parent = this;
	this.instance_5.setTransform(91,567.7,0.906,0.906,0,0,0,86,24.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).to({y:560.5,alpha:1},9,cjs.Ease.cubicOut).wait(142));

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
	this.instance_6 = new lib.補間動畫6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(126.2,319.8,1.078,1.078,4.7,0,0,0.1,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).wait(157));

	// ttt2.png
	this.instance_7 = new lib.元件47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(93.4,229.9,0.155,0.155,0,0,0,186.7,51.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({regX:186.3,regY:50.9,scaleX:0.43,scaleY:0.43,x:91.7,y:218.9,alpha:1},5,cjs.Ease.quadInOut).to({regX:186.2,regY:50.8,scaleX:0.38,scaleY:0.38,x:91.8,y:219.8},3,cjs.Ease.quadInOut).wait(28).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(88.7,175.5,0.694,0.72,0,0,0,300.1,59.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({regX:300.5,regY:59.2,scaleX:0.45,scaleY:0.47,x:88.5,y:182.8},5,cjs.Ease.quadInOut).to({regX:300.4,regY:59.1,scaleX:0.47,scaleY:0.49,y:182.3},3,cjs.Ease.quadInOut).wait(36).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(67.8,309.9,1.221,1.221,0,0,0,118.6,40.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 11
	this.instance_10 = new lib.元件52();
	this.instance_10.parent = this;
	this.instance_10.setTransform(72,381.8,1.003,1.003,0,0,0,135.1,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(42).to({alpha:0},9).to({_off:true},1).wait(210));

	// 元件 3
	this.instance_11 = new lib.元件3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(55.7,341.9,1.003,1.003,-21.7,0,0,2.8,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-25.9,guide:{path:[55.9,341.9,55.9,342.1,55.9,342.4,55.9,340.4,56.5,338.4,57.8,334.5,61,333.9,61.5,333.8,62,333.7,64.5,333.2,67.8,332.6,70.8,332.6,71.9,336.4,72.5,338.6,73,340.7,73.9,344.1,74.5,347,74.5,346.4,76.5,343.4,78.8,340,80.7,339.1,83.2,338,85.8,338.1,88.9,338.3,90,340.1,91,341.7,92.5,348.3,93.1,351.5,93.6,354.2,95.3,349.7,97.1,344.6,100.6,334.6,100.8,331.6,100.7,324.2,100.7,319.2,100.7,309.9,102.2,306.6,103.6,303.1,105.5,302.2,105.6,302.2,109.7,301.3,112.7,300.7,114.6,302.4,116.9,304.4,116.9,309.9,116.9,314.3,116.3,320.3,115.7,326.4,115.7,327.6,115.7,331.2,115.3,341.1,113.9,347.2,113.1,350.2,112.4,353.1,112.4,353]}},33,cjs.Ease.quadInOut).wait(16).to({regY:65.3,scaleX:0.84,scaleY:0.84,rotation:83.4,x:81.7,y:219.4},8).to({x:100.9,y:252.3},5,cjs.Ease.cubicInOut).to({x:97.1,y:249.8},4,cjs.Ease.quadInOut).wait(30).to({alpha:0},8).to({_off:true},1).wait(157));

	// 元件 5
	this.instance_12 = new lib.元件51();
	this.instance_12.parent = this;
	this.instance_12.setTransform(68.3,394.9,1.003,1.003,0,0,0,149.9,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({regX:150.1,scaleX:0.84,scaleY:0.84,x:67.1,y:337.3},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(192.7,540.3,1.419,1.419,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(47).to({_off:false},0).to({regY:41.5,scaleX:1.02,scaleY:1.02,x:114.5,y:451.1},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_13 = new lib.元件22();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-137,597.4,1.419,1.419,0,0,0,39.5,39.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:45.3,y:525.1},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// t2.png
	this.instance_14 = new lib.元件6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(83.9,228.9,1.685,1.685,0,0,0,54.6,15.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},0).to({regY:15.8,scaleX:1.15,scaleY:1.15,x:79.6,y:217.2},8,cjs.Ease.quadInOut).to({regX:54.7,scaleX:1.24,scaleY:1.24,x:80.4,y:219.1},5,cjs.Ease.quadInOut).to({regX:54.6,regY:15.7,scaleX:1.21,scaleY:1.21,x:80,y:218.5},4,cjs.Ease.quadInOut).wait(15).to({regX:54.7,scaleX:1.1,scaleY:1.1,x:78.6,y:219.5,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(210));

	// t1.png
	this.instance_15 = new lib.元件2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(72.5,175.1,1.419,1.419,0,0,0,118.4,26.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({regX:118.6,scaleX:0.97,scaleY:0.97,y:180.1},8,cjs.Ease.quadInOut).to({scaleX:1.04,scaleY:1.04,y:179.3},5,cjs.Ease.quadInOut).to({regX:118.5,scaleX:1.02,scaleY:1.02,x:72.4,y:179.6},4,cjs.Ease.quadInOut).wait(16).to({regX:118.6,regY:26.1,scaleX:0.76,scaleY:0.76,x:72.5,y:182.5,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_16 = new lib.元件55();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,300,1,2.4,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.4,299,400.8,601);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/160x600_atlas_.png?1538118789854", id:"160x600_atlas_"}
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
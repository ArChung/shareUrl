(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x50_atlas_", frames: [[329,375,139,131],[329,252,155,121],[158,252,169,124],[0,0,403,250],[0,440,142,40],[457,69,43,43],[405,69,50,92],[405,163,42,64],[243,378,79,78],[158,378,83,83],[293,458,17,19],[449,163,43,50],[243,458,48,45],[405,0,79,67],[0,252,156,186]]}
];


// symbols:



(lib.向量圖智慧型物件1 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件2 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.pen = function() {
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.qwdqwdqwdq = function() {
	this.spriteSheet = ss["320x50_atlas_"];
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
	this.instance.setTransform(-484.2,78.9,2.506,1.395,-6.8);

	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-471.2,116.3,2.506,1.395,-6.8);

	this.instance_2 = new lib.圖層1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-488.9,26.1,2.506,1.395,-6.8);

	this.instance_3 = new lib.圖層1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-116,-159.2,1.541,1.395,-0.3);

	this.instance_4 = new lib.圖層1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-530.5,-69.3,1.395,1.395,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 圖層 1
	this.instance_5 = new lib.圖層1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-122.1,-105.2,1,1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-534.6,-163,1107.3,625.6);


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


(lib.元件65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AotCeIAZAAQAHgBAAgJIAAg0IggAOIgEgpQAOgDAWgJIAAgyIgiADIAAgiIAigDIAAg2IAigEIAAA2IAZgCIAAAhIgZADIAAAnIAZgOIADAkIgcAQIAABRQAAAcgbADIghAEgAnKAoICHgOIAACTIgiADIAAgOIhCAHIAAAOIgjAEgAmnB1IAAAXIBCgHIAAgXgAmnBDIAAAVIBCgHIAAgVgAkSCKQApgzAFhBIAjADQgEAZgFAVQAMATAUAHIAJADIAAhjIhMAIIAAgXIgSACIAAhFIBdgJIgIgYIArgJIAHAcIBggKIAABEIgfAEIAAAYIhGAHIAAAhIBQgJIAAAjIhQAIIAAAnQAbAAAsgEQAEAAAbgGIgHAqIgkAEQhJAGghgKQgYgIgTgVQgNAggSAYgAjbgzIAAAYICggRIAAgYgAAyAKQgJAigMAfIgMgrQATgqAHgxIgSACIAAggIAZgCIAAgzIAcgDIAAAzIAQgCIAAAMIAFgCQAJgXAFgnIAaAFQgIAcgIAWIgBACIANgDQAGgRAFgQIASAHIAAglIAcgDIABA6IACAAQALgWAHgjIAaAGQgLAfgHAOIAKgDIALgcIAYAIQgMAbgJASIAOgGQANAdADAXIgYAKIgBgLQgYAJgdAFIACARIAXgCIgFgPIAggGIACASIAVgCIAAAbIhEAIQAEAPAFANQALgNAIgQIAYAJQgOAbgOASQAHAIAEgBQAIAAACgSIAAgLIAZAMQgCAdgJAMQgJALgPACQgPABgSgVIgBgCQgUASgYAMIgUgaQAbgLAXgSQgKgUgEgUIgBgHIgjADIAAAJQAbAKAKAHIgQAfQgLgKgNgIIgFARQgGAWgVAZIgWgZQAPgOAHgUQAFgQACgZIgSACIAAgXIgFAIIgMgaIAACOIgcADgABpgNIgHANIAQgBIAAgNIAcgDIAAANIAdgDIgCgSIgPAHIgCgLQgXAJgYAHgABOg/IAAANIASASIgBgGIAOgDQAFgIAJgSIgfAKIgBgHgACogrQgDgZAAgnQgKAZgGANIAIgEQAGANAFARgACIguIALgDIgEgKgADChNIABAYIAEAAQAJgMAKgSQgMAEgMACgADjg6IASgFIgFgQgAE6BCIBpgLIAAgWIhZAKIAAgiIBZgJIAAgOIgPACIAAhBIgbADQgEAtgdAgIgfgYQAbgVAFgdIgcADIAAgfIAegDIAAgeIgZACIAAgfICMgOIAAAfIgYACIAAAeIAbgDIAAAfIgbADIAAA4IAQgCIAAAYIBZgKIAAAhIhZAKIAAAVIBsgLIAAAhIj4AagAF7iIIAAAeIAZgCIAAgegAnEAOQgGgJgBgOIAAhKIAjgEIAAAWQA0gJAmgYIANAiQg0AXgzAKIAAANQAAAIAKgBIA0gGQAIAAAEgDQADgDACgUIAjAFQgDAxgbADIhTAIIgJABQgPAAgFgJgAHjg5IAeAAQAGgBAAgIIAAh9IAigEIAACNQgBAcgaADIgkAEgAHZisIAfgDIAABjIgfAEg");
	this.shape.setTransform(56.2,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件65, new cjs.Rectangle(0,0,112.3,39.2), null);


(lib.元件63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#219CD8").s().p("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");
	this.shape.setTransform(144.1,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件63, new cjs.Rectangle(0,0,288.1,88.1), null);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AvbFaIB5gOQgKgdgPgYIAmgZIhQAKIgCicQgcARgYAJIgUg2QAsgVAoggQgVgWgbgWIA4gyQAbAUAWAVQAageAZgoIimAUIAAhAID0gdIAAATQAOAPAIAGQApgXAlgkIAuAlQgiAkgsAcQAOANAPAKQAngfAfgpIAyAlQgfAoglAfQAmAZAsARIgtBDIgcgRIABCfIhWAKIAyAJQgTAqgMAWICDgQIABBDInZA3gAs9D8QAQAYAMAdIgpAYIB9gPQAPgkANgrgAtpCPIAAAwIDqgbIgBgxgAtRAnQgVAUgXAUIEcgiQgZgRgbgVIAAAPIisAUIAAgSgAsWgZIBRgKQgcgZgQgTQgVAigQAUgAmREKIBOgVIgBiMIhFAIIAAhCIBEgIIgBgnIgnAFIgBgnIgKAMIgvguQAiglAXgnQAYgnASguIA7ANIgFAPQAvAZAlAgIgoA/QgkghgkgYIgNAZQgQAfgQATIB7gPIABBDIguAFIABAmIA/gHIABBBIhAAIIACCBQAlgKAagKIACAMQAtgtAjg0IAjAkQgqBLgwAtIgTgTIACAJQhbAlhjAcgAh5E3IgMhEQATAGASgDQAMAAAEgJQADgLAAgUIgCjCIhrANIAAg6ICVgRIAHggIhYAKIgFAUIg5gDIAwi/IA5ADIgGAWICVgRIgxC2IBHgJIAAA7IhwAMIABA8QAEAJAJAOQAXgkAQgpIAxAaQgcA7gdAlQAgAmAsAUIgeBDQgggSgdggQgOgQgOgXIAAAuQABAxgNAUQgQAXgnAEIgOABQgKAAgKgCgAhfiiIgKAjIBYgKIAJgkgAC1DPIA/gqIgBh7Ig8AGIAAhDIB4gPIACC0QAVAPAYAGIgYg4QBGgjAhgxQAPgXAHgZIiAAOIgBhDICKgRIAAgGQABgEAAgzIh4AOIgBhEIBGgJQgNgagUgaIA1guQAcAgARAjIglAdIBIgJQATgvAPg0IBIAMQgQArgTAkIBFgIIABBEIh/AOIAAA+ICTgSIABBFIiCAPQAIASAKAMQAQAUAcARQAaAQApALIggBIQgrgMgrghQgggYgTgiQgKAXgNASQgrA6hLAmQANACALgBQAeAECMgRQBPgJA1gTQgSAogKAsIiiATQhYALg1gJQglgHgmgfIg4BRQgagtgSgYgAmXCcIA2gZQAOAjAJAyIg5AaQgHgxgNglgAkCC+QAJgsAFgnIA5AJQgHAsgKAogAi1BCIAtglQAWAfAMAfIgyAmQgKgfgTgggACzhtIAug8QAiASAeAaIgsBCQgfgdgjgVgAPZiZQACiChJg7Qg1grhZgCIhQAHIgFgXIBYgIQBfACA7AxQBSBBgDCPgAMOi8QgMgJgWAAIgSACIgGgWIAagEQAcAAASAOQAXARACAlIgYABQgBgagOgKgANvitQABgpgZgZQgagZg1gHIgxgCIgBgYIA4ACQA6AJAgAfQAgAegBA1gADXjiIAug7QAiASAgAcIgrBDQgjgigigUg");
	this.shape.setTransform(100.8,58.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(0,16.9,201.7,82.4), null);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWAPIAAgFIARAAIAAAGQAAAGAGAAQAFAAABgFQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQgBgDgNgIQgMgFgCgHIAAgIQACgOATAAQAVAAAAAPIAAAFIgPAAIAAgEQAAgGgGABQgEAAgBADIAAAEQABADAMAHQANAGACAGIAAALQgCAOgVAAQgVAAgBgSgAgOAPIAAgFIAQAAIAAAGQgBAGAHAAQAEgBABgEIAAgEQgBgDgMgIQgLgFgCgHIgBgIQADgNASAAQAVAAAAAOIAAAFIgQAAIAAgEQAAgFgFAAQgFgBgBAFIAAADQABACAMAIQANAGABAGIAAAKQgBAOgUABQgVAAAAgSgAArARIAAgvIAPAAIAAAtIABACQAAAEAFAAQAFAAACgEIAAgvIAPAAIAAAvQgCAPgUAAQgTAAgCgPgACrAQIAAgDIAAgZIAAgFQACgOATAAQAVAAABAOIAAAFIAAACIgPAAIAAgGQAAgFgHABQgFgBAAAFIgBADIAAAdQABAFAFgBQAHABAAgFIAAgCIAAgJIgHAAIAAgIIAXAAIAAAQIgBADQgBAQgVAAQgUAAgBgQgAgsAfIgBg5IgKA5IgQAAIgKg5IgBA5IgPAAIABg9IAZAAIAIAvIAIgvIAYAAIACA9gAh+AfIgIg5IgJA5IgQAAIALg9IAbAAIAMA9gACFAdIgPgxIAAAxIgPAAIAAg7IAXAAIAOAwIgBgwIAPAAIAAA7g");
	this.shape.setTransform(21.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(0,0,42.9,6.6), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9WDhIAxgGIgHBdIAoAdIAAjOIhlAKIAAgzIBlgKIAAhDIhYAKIAAgyIBYgKIAAg6IAzgEIAAA4IBSgIIAAAyIhSAJIAABCIBhgKIAAAzIhhAKIAAA4IBKgHIAAA0IhKAIIAACGIGKgpIAAA1ImiAsIhJgxIgHBQIgzAFgAyzFWIA9gHIgCiiIgiAyIhAAGIBciOIgXhCIgQAYIhAAGIA7hZIgjhlIA3gGIARAyIAlg3IBAgHIhOB6IApB1IAEEsIhyAMgAwVEvICTgPIAAizIhxALIAAg3IBxgNIAAiRIh8ANIAAg4IEvgfIAAA3Ih8ANIAACSIBwgMIAAA4IhwAMIAACzICTgQIAAA4IldAkgA5GCVIDvgZIAACzIjvAagA4YC/IAABVICTgPIAAhWgAnuAxIFeglIAAEOIleAkgAm8DIIAAA+ID5gbIAAg9gAm8BeIAAA2ID5gbIAAg1gABmBBIA7gHIgoDMIg6AGgAD3j7IB5gNIAAguIA4gGIAAAuIB4gNIAAERIheAKIAkA7IAcgWIBjgLIhkBOIBEBzIhBAGIiDjbIhQAJIAACWIBOgbIAAA4IiIAvgAExhdIAAA1IC3gTIAAg1gAExjKIAAA1IC3gTIAAg1gAO5ADIiCCIIhRAJIDTjdIAAiwIjqAZIAAg4IDqgYIAAhMIA3gFIAABLIDqgZIAAA3IjqAZIAACwIDbCvIhSAJIiJhsIAACqIg3AHgAXgAkIguAhIhSAJICShrIiQAPIAAgtIDjgYIAAgnIAtgFIAAAoIDogZIAAAtIjWAXIBAAzIAjgeIBQgIIhQBDIA+A0IhBAHIihiEIg0AnIAABAIBJgRIAAAuIh4AdgA4WgwIhFAIIAAgzIEGgcIgJDGIgzAFIAHiSIhYAJIgoCbIgzAFgApMgeICUgPIgahYIg+AGIAAgyIC1gTIAAgqIAzgGIAAAqIC1gTIAAAzIg+AGIgWBeICPgQIAAA0IoUA3gAmciLIAaBZICFgPIAWhcgAMojPIA9gGIgRArIA5BcIhCAHIgSgfIgZBEIg9AGgAA4g5IAAg6IBmASIAAA4gARWjvIA/gHIgUAuIBSBoIhGAHIgngyIgZA4Ig/AHgAVnkeIDRgWIAAC8IgnAEIAAgqIiLAPIgCAqIgoAEgAWIjFIgBARICKgOIAAgSgAWMj8IgBASICGgOIAAgSgAZxlPIDHgVIAAgJIjHAVIAAhzIAmgFIAAAfIDIgVIAAAeIjIAVIAAAPIDKgVIAABYIjKAVIAAALIDIgVIAAAcIjIAWIAAAKIDIgWIAAAcIjIAWIAAAKIDIgVIAAAcIjIAUIAAALIDWgWIAAAnIj8AbgAA4jQIAAg5IBmAQIAAA4gAVIlOIA1gFIgGghIgdAEIAAglIBegKIAAgWIAkgDIAAAVIBlgKIAAAlIgjADIgIAiIA1gGIAAAmIkDAbgAWdl3IAGAfIBNgIIAHghg");
	this.shape.setTransform(190.1,46.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(0,0,380.2,92.9), null);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(180.2,64.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(-73.6,15.5,507.5,97.4), null);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9YDWIHFg1IAEFdInFA2gA8VGZIABBQIFDgmIgBhQgA8WERIAABFIFDgnIgBhEgAuGEwIiIB1Ih4AOIC8ihIjZAaIgBhIIEdgiIgBgvIBIgJIAAAwIEagiIACBIIjNAYIDFB0Ih7AOIiYhYIACCfIhGAJgAjNAUIi9AyIgBhAIArgJIgDjzIgvAFIgBg/IEfgiIABA/IghAEIAJKNIg+AHgAkihBIABAsIBTgVIAAghgAkjifIAAAfIBUgKIgBgfgAkkj+IAAAhIBTgKIAAghgAmEE9IAygOIgBg9IgrAFIAAgyIArgFIgBgsIgyAGIgBgzICagSIABAyIgqAFIABAsIAkgEIAAAzIgjAEIAAAyIAmgLIABAzIiWAqgAAACJIBEgIIACCeIC7gXIAABEIj+AfgAhRDGIBFgIIgRCMIhEAIgAJfA+IiCA7IgBhOICDg6IgCiHIiUASIgBhKICUgRIgBheIhsAjIgBhKIEHhWIABBLIhTAaIABBtIDJgXIgCjJIBJgJIACDJIDfgaIABBJIjOAYIApBpIAmg5IBagLIhhCUIBVDaIhNAKIg6iZIhYCBIhaALICSjaIhEisIjVAZIABBwIB2g1IABBNIh2A1IADDtIhIAJgADzCVIBKgJIAuBnIhJAIgA/TBxIC/gWIgjhxIhQAKIgBhDIDqgbIAAg2IBCgIIABA2IDqgcIABBCIhQAKIgbB4IC6gWIABBCIqyBSgA7xgeIAjBwICtgUIAah4gABKBlIBTgJIA9BIIhVAKgAyLAbIhGhOIBGipIBEgIIhBCgIAXAaIAhhUIBCgIIhVDeIA1gLIgEg8IA6gHIAMCWIg7AHIgDgdIiaAigAvcjJIAugFIAZg5IBLgJIgZA5IBugNIAEFPIjnAbgAuagJIABBJIBogMIgBhKgAubiSIABBEIBogMIgChEgAd0iWIASkYIjZAZIgcB/IhKAJIA+kdIBKgJIgSBTIEWghIgXFwIhGEKIhMAJgAqZgpIhIhMIBEiiIBEgIIg/CXIAZAbIAchMIBDgIIhXDlIA4gKIgKhCIA7gHIAXCUIg8AHIgDgWIifAegAUmmjIA4gGIAUhOIBFgIIgUBNIB8gOIAGH2Ij4AdgAVoiYIACCkIB6gNIgCilgAVllsIACCMIB6gPIgCiLgAhTAMIGkgxIABBCImkAygAhMjMICogUIgBgrIixAVIAAhAICxgVIgBgtIBAgIIABAtICygVIABBAIiyAVIAAArICpgUIACCzImRAwgAgPiYIAAA8IAwgGIgBg7gABlilIABA7IAwgGIgBg7gADYizIABA8IAxgGIgBg8gAa6kgIBMgKIAyCZIhOAJgAPhm7IBUgKIBABlIhUAKg");
	this.shape.setTransform(200.4,56.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(0,0,400.7,112.8), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("EgnUAIhQgCgCAAgDIASinQAAgEgCgCQgCgCgDAAIgdADQgDABgCgDQgDgCAAgDIABgnQAAgIAIgBIAigDQAIgBABgIIAMh+QABgDgDgCQgCgDgDABIgvAFQgEAAgCgCQgCgCAAgEIAAgmQAAgIAIgBIA1gFQAIgBABgIIAMhyQABgIAIgBIAngDQADgBACACQADACgBAEIgLBxQgBAIAIgBIBNgHQAIgBABgIIAMhxQABgIAIgBIAmgEQAIAAgBAHIgLByQgBADADACQACACADAAIAfgDQADgBACADQADACAAADIgBAnQAAAIgIABIgkADQgEABgCACQgDADAAADIgNB+QgBAEADACQACACADgBIAygFQAEAAACACQACACAAAEIAAAmQAAAIgIABIg4AGQgEAAgCADQgDACAAADIgRCoQAAADgDADQgCACgEABIgnAEQgIABAAgJIASinQABgDgDgCQgCgDgDABIhNAHQgIABgBAIIgSCoQAAADgDADQgCACgEAAIgnAEIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgEgkjACZIhMAIQgIABgBAIIgOB+QgBADADACQACADADgBIBOgIQADAAACgCQADgDAAgDIAOh/QAAgHgGAAIgCAAgEghnAHfQgEAAgDgCQgDgDAAgFIAAngQAAgEADgEQADgDAEgBIEdgeQAEgBAEAEQADADAAAEIAAApQAAAEgDADQgDADgEABIjgAYQgGAAAAAGIAAFwQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIADABICsgSQAFgBAAgFIAAi4QAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgEgBIhQAJQgEABgEgEQgDgDAAgEIAAgoQAAgEADgEQADgDAFgBICLgPQAFAAADADQADADAAAFIAAEmQAAAFgDADQgDAEgEAAIkkAfgArQHNQgDAAgEgDQgDgDAAgFIAAglQAAgEADgEQADgDAFgBICqgSQAGgBAAgFIAAhMQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIitASQgEABgEgDQgDgEAAgEIAAlKQAAgFADgDQADgEAEAAIAqgFQAEAAAEADQADADAAAFIAAEWQAAAAAAABQAAABAAAAQAAAB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");
	this.shape.setTransform(254.5,54.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件56, new cjs.Rectangle(0,0,509,109.5), null);


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
	this.instance.setTransform(222.2,-75,0.693,0.693,-5.9);

	this.instance_1 = new lib.向量圖智慧型物件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,-53,0.448,0.448);

	this.instance_2 = new lib.向量圖智慧型物件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(309,-20,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(222.2,-87.1,211.4,132.3), null);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.qwdqwdqwdq();
	this.instance.parent = this;
	this.instance.setTransform(84,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件51, new cjs.Rectangle(84,29,156,186), null);


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


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.pen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,79,67), null);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件65();
	this.instance.parent = this;
	this.instance.setTransform(59.1,71.5,1,1,0,0,0,56.1,19.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqfCOQArgFAsgQIg+AGIAAiJIDMgVIAACIIg2AGIBPAGIgJAiQgxgMgxgBIAIgZIg6AHIAJAVQgkAWg8AMgAphBSIAAAOICCgNIAAgPgAphAvIAAANICCgNIAAgPgAphAMIAAAMICCgNIAAgNgAliBSQgdgeAAgwQAAgvAdgkQAeglAsgFQAfgDAXANQAYANANAZIghAZQgSgkgoADQgcAEgTAXQgTAYAAAfQABAfASATQATAUAegDQAWgDAPgPQAPgOAFgXIg/AHIAAgnIBngLIAAARQAAAtgaAkQgbAkgsAFIgNAAQgmAAgZgbgAI7AGIhBiiIAngEIAtB0IArh9IAmgFIhfEQIgmAEgAh8BEQgZgZAAgpQgBgqAZgdQAXgbAggDQAhgEATAYIAAgWIAkgEIAACzIgkAEIAAgXQgTAdghADIgIAAQgaAAgUgTgAhBg+QgUACgOASQgOARAAAXQAAAXAOAPQAOAPAUgCQAVgCAOgSQAOgSAAgXQAAgXgOgOQgMgNgSAAIgFAAgAA4idIAlgDIAADiIglAEgACXAnQgZgYAAgpQAAgrAYgdQAYgbAfgDQAhgEATAXIAAgVIAlgEIAACzIglAEIAAgYQgTAdghAEIgHAAQgbAAgUgTgADThbQgVADgOARQgNARAAAXQAAAYANANQAOAPAVgCQAUgCAPgRQANgRAAgYQAAgXgNgOQgNgNgRAAIgFAAgAF9g3Ig7hSIAtgEIAlA1IAlg9IArgFIg6BfIA/BTIguAFIgog2IgmA/IgtAEgAqUhhIDpgZIAABQIjpAYgApyhKIAAAZIAigEIAAgYgAoxhQIAAAYIAhgDIAAgZgAnxhXIAAAYIAjgEIAAgYg");
	this.shape.setTransform(67.2,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61, new cjs.Rectangle(0,19,134.3,72.1), null);


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


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件58();
	this.instance.parent = this;
	this.instance.setTransform(391.1,38.7,1.428,1.428,0,0,0,252.3,49.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(-74.3,-9.8,724.8,139), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:300,regY:59,x:300,y:59},0).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97,x:300.1},5,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97,x:300},2).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,-9.8,724.8,139);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.instance = new lib.元件59();
	this.instance.parent = this;
	this.instance.setTransform(188,49.4,1.184,1.184,0,0,0,190.1,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(-37,-5.5,450.1,110), null);


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


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.元件62();
	this.instance.parent = this;
	this.instance.setTransform(132.9,26.1,0.511,0.511,0,0,0,95.4,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.元件63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.3,63.5,0.377,0.377,0,0,0,144.1,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(84.2,9.4,110.4,70.6), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.元件61();
	this.instance.parent = this;
	this.instance.setTransform(127.2,4.9,0.606,0.606,0,0,0,124.7,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(51.6,0,81.4,43.7), null);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(109,45.3,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.8,20.9,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(306,6,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.3,-13.6,301.3,63.7);


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
	this.instance.setTransform(243.3,53.9,0.868,0.868,0,0,0,25.6,34.8);

	this.instance_1 = new lib.元件15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.7,49.1,0.868,0.868,0,0,0,31.5,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(6.4,6.5,259,85.4), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.元件57();
	this.instance.parent = this;
	this.instance.setTransform(54.5,15.3,0.272,0.272,0,0,0,200.3,56.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,109,30.7), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.元件56();
	this.instance.parent = this;
	this.instance.setTransform(119.2,26.4,0.469,0.469,0,0,0,254.4,54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,238.5,52), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件60();
	this.instance.parent = this;
	this.instance.setTransform(62.4,9.9,2.914,2.914,0,0,0,21.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,125,19.3), null);


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件18();
	this.instance.parent = this;
	this.instance.setTransform(135.1,49.1,1,1,0,0,0,135.1,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:0.98},9,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},3,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,6.5,259,85.4);


// stage content:
(lib._320x50 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(13.1,4.6,0.257,0.257,0,0,0,35.8,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262));

	// t41.png
	this.instance_1 = new lib.元件33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.4,38.7,0.652,0.652,3.5,0,0,92.2,20.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({regY:20.3,x:39.9,y:29.9,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t42.png
	this.instance_2 = new lib.元件34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84,26,0.544,0.544,3.5,0,0,61.7,29.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({regX:61.9,regY:29.7,x:84.6,y:16},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_3 = new lib.元件53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(90.6,49.9,0.483,0.483,0,0,0,111.2,29.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({regX:111.4,scaleX:0.33,scaleY:0.33,x:123.6,y:42.3,alpha:1},7,cjs.Ease.cubicOut).to({regX:111.5,regY:30,x:123.7},1).wait(145));

	// hand.png
	this.instance_4 = new lib.元件40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(281,31.5,0.418,0.418,0,0,0,86.2,24.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:281.1,y:28.2,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("EgjfAQKQvPlZgYoiQgYohOtmsQOtmsVLg8QVKg7PPFYQPPFZAYIiQAYIhutGsQutGs1LA8QjGAIi/AAQxUAAtAklg");
	var mask_graphics_106 = new cjs.Graphics().p("EgkhAQoQvrligZozQgZoxPJm5QPIm4Vzg9QVxg9PrFiQPrFjAZIyQAZIxvJG4QvIG51zA9QjLAJjFAAQx0AAtYkug");
	var mask_graphics_107 = new cjs.Graphics().p("EgljARGQwIlsgZpCQgZpBPjnGQPknEWag/QWYg/QIFsQQIFtAZJBQAZJBvkHFQvjHF2aA/QjSAJjJAAQyVAAtwk2g");
	var mask_graphics_108 = new cjs.Graphics().p("EgmlARjQwkl1gapSQgapRP/nSQP/nRXBhAQXAhBQkF2QQkF3AaJRQAaJRwAHRQv+HS3BBAQjYAKjPAAQy1AAuIlAg");
	var mask_graphics_109 = new cjs.Graphics().p("EgnnASBQxAmAgbphQgaphQaneQQbndXohDQXnhCQ/GAQRBGBAbJhQAaJhwaHdQwbHe3oBDQjdAJjVAAQzVAAuglIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-222,y:56.2}).wait(1).to({graphics:mask_graphics_106,x:-81.4,y:54.4}).wait(1).to({graphics:mask_graphics_107,x:59.1,y:52.6}).wait(1).to({graphics:mask_graphics_108,x:199.6,y:50.7}).wait(1).to({graphics:mask_graphics_109,x:340.1,y:48.8}).wait(153));

	// 圖層 7
	this.instance_5 = new lib.補間動畫6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(345.2,3.4,0.534,0.534,11.2,0,0,0.2,0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(105).to({_off:false},0).wait(157));

	// ttt2.png
	this.instance_6 = new lib.元件47();
	this.instance_6.parent = this;
	this.instance_6.setTransform(107.4,42.7,0.08,0.08,1.5,0,0,187.6,52.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({_off:false},0).to({regX:186.6,regY:51.5,scaleX:0.22,scaleY:0.22,x:106.7,y:37,alpha:1},5,cjs.Ease.quadInOut).to({regY:51.8,scaleX:0.19,scaleY:0.19,y:37.5},3,cjs.Ease.quadInOut).wait(28).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_7 = new lib.元件48();
	this.instance_7.parent = this;
	this.instance_7.setTransform(100.6,14.7,0.345,0.345,1.5,0,0,299.7,59.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({regX:300.8,regY:59.4,scaleX:0.23,scaleY:0.23,x:106.2,y:18.2},5,cjs.Ease.quadInOut).to({regX:300.7,regY:59.8,scaleX:0.24,scaleY:0.24,y:18},3,cjs.Ease.quadInOut).wait(36).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_8 = new lib.元件24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(227.3,22.4,0.376,0.376,0,0,0,118.8,41);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 11
	this.instance_9 = new lib.元件52();
	this.instance_9.parent = this;
	this.instance_9.setTransform(227.8,28.6,0.321,0.321,0,0,0,135.3,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42).to({alpha:0},9).to({_off:true},1).wait(210));

	// 元件 3
	this.instance_10 = new lib.元件3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(222.6,15.9,0.321,0.321,-21.7,0,0,3.1,65.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:3.2,regY:65.6,rotation:12.8,x:240,y:19.5},33,cjs.Ease.quadInOut).wait(14).to({regX:3.3,regY:65.5,scaleX:0.33,scaleY:0.33,rotation:12.7,x:257.4,y:18.5},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// 元件 5
	this.instance_11 = new lib.元件51();
	this.instance_11.parent = this;
	this.instance_11.setTransform(226.6,32.8,0.321,0.321,0,0,0,150.3,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(47).to({regX:150.9,regY:125.2,scaleX:0.29,scaleY:0.29,x:245.2,y:29.8},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(311.5,81.7,0.696,0.696,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(47).to({_off:false},0).to({regX:41.8,regY:41.8,scaleX:0.44,scaleY:0.44,x:291.8,y:34.5},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_12 = new lib.元件22();
	this.instance_12.parent = this;
	this.instance_12.setTransform(156.5,76.9,0.696,0.696,0,0,0,39.8,39.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).to({regX:40,regY:39.3,scaleX:0.44,scaleY:0.44,x:204.4,y:34.4},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// t2.png
	this.instance_13 = new lib.元件6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(114.4,43.2,0.897,0.897,2,0,0,54.7,15.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).to({regX:54.8,regY:15.9,scaleX:0.61,scaleY:0.61,x:112.4,y:37},8,cjs.Ease.quadInOut).to({regX:54.9,regY:15.7,scaleX:0.66,scaleY:0.66,rotation:1.9,x:112.7,y:38},5,cjs.Ease.quadInOut).to({regX:54.8,regY:15.8,scaleX:0.65,scaleY:0.65,x:112.6,y:37.7},4,cjs.Ease.quadInOut).wait(15).to({regX:54.9,regY:16.1,scaleX:0.48,scaleY:0.48,x:111.4,y:34.1,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(210));

	// t1.png
	this.instance_14 = new lib.元件2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(107.2,14.7,0.74,0.74,1.9,0,0,118.7,26.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({regX:118.9,regY:26.5,scaleX:0.51,scaleY:0.51,rotation:2,x:107.1,y:17.4},8,cjs.Ease.quadInOut).to({regX:118.7,regY:26.4,scaleX:0.54,scaleY:0.54,y:16.9},5,cjs.Ease.quadInOut).to({regY:26.3,scaleX:0.53,scaleY:0.53,x:107,y:17},4,cjs.Ease.quadInOut).wait(16).to({regX:118.9,regY:26.7,scaleX:0.4,scaleY:0.4,rotation:1.9,x:107.1,y:18.6,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_15 = new lib.元件55();
	this.instance_15.parent = this;
	this.instance_15.setTransform(160,50,0.33,0.4,0,0,0,485.1,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,12.2,359,264.9);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x50_atlas_.png?1538116919285", id:"320x50_atlas_"}
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
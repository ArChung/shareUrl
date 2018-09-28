(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x100_atlas_", frames: [[158,252,169,124],[0,0,403,250],[0,440,142,40],[243,458,43,43],[329,252,50,92],[381,252,42,64],[243,378,79,78],[158,378,83,83],[329,346,17,19],[324,447,43,50],[381,318,48,45],[324,378,79,67],[0,252,156,186]]}
];


// symbols:



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.pen = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.qwdqwdqwdq = function() {
	this.spriteSheet = ss["320x100_atlas_"];
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

	// 圖層 1
	this.instance = new lib.圖層1();
	this.instance.parent = this;
	this.instance.setTransform(-331,107.1,0.876,0.876,-12);

	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,156.3,1,1,168);

	this.instance_2 = new lib.圖層1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-492.5,122.9,0.876,0.876,-12);

	this.instance_3 = new lib.圖層1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-86,158.4,1,1,168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-532.3,-88.2,592.5,425.4);


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
	this.shape.setTransform(243.5,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(53,-24.5,380.9,116.7), null);


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
	this.instance.setTransform(409.3,-125.6,0.873,0.873,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(392.2,-125.6,162.8,130.2), null);


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
	this.instance.setTransform(300,59.2,1.189,1.189,0,0,0,252.3,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(63,-28.9,453,138.7), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:300,regY:59,x:300,y:59},0).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97,x:300.1},5,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97,x:300},2).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63,-28.9,453,138.7);


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
	this.instance.setTransform(131.3,20.6,0.628,0.628,0,0,0,95.3,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.元件63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.4,66,0.464,0.464,0,0,0,144.1,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(71.4,0,135.8,86.4), null);


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
	this.instance.setTransform(109,68.4,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.8,36.2,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(241,34.6,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.3,15,236.4,58.1);


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
(lib._320x100 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(19,9,0.386,0.386,0,0,0,35.8,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262));

	// t41.png
	this.instance_1 = new lib.元件33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.5,63.4,0.802,0.802,3.5,0,0,92.2,20.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({x:38.1,y:52.6,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t42.png
	this.instance_2 = new lib.元件34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.5,50.2,0.719,0.719,3.5,0,0,61.6,29.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({regX:61.8,regY:29.6,x:89.3,y:36.8},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_3 = new lib.元件53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-25.2,91.2,0.758,0.758,0,0,0,111.2,29.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({regX:111.4,scaleX:0.51,scaleY:0.51,x:68.9,y:77.4,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_4 = new lib.元件40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(256.7,80.5,0.549,0.549,0,0,0,86.2,24.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111).to({_off:false},0).to({regX:86.3,regY:24.8,scaleX:0.69,scaleY:0.69,x:256.8,y:76.2,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("EgjfAQKQvPlZgYoiQgYohOtmsQOtmsVLg8QVKg7PPFYQPPFZAYIiQAYIhutGsQutGs1LA8QjGAIi/AAQxUAAtAklg");
	var mask_graphics_106 = new cjs.Graphics().p("EgkhAQoQvrligZozQgZoxPJm5QPIm4Vzg9QVxg9PrFiQPrFjAZIyQAZIxvJG4QvIG51zA9QjLAJjFAAQx0AAtYkug");
	var mask_graphics_107 = new cjs.Graphics().p("EgljARGQwIlsgZpCQgZpBPjnGQPknEWag/QWYg/QIFsQQIFtAZJBQAZJBvkHFQvjHF2aA/QjSAJjJAAQyVAAtwk2g");
	var mask_graphics_108 = new cjs.Graphics().p("EgmlARjQwkl1gapSQgapRP/nSQP/nRXBhAQXAhBQkF2QQkF3AaJRQAaJRwAHRQv+HS3BBAQjYAKjPAAQy1AAuIlAg");
	var mask_graphics_109 = new cjs.Graphics().p("EgnnASBQxAmAgbphQgaphQaneQQbndXohDQXnhCQ/GAQRBGBAbJhQAaJhwaHdQwbHe3oBDQjdAJjVAAQzVAAuglIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-222,y:59}).wait(1).to({graphics:mask_graphics_106,x:-81.4,y:57.2}).wait(1).to({graphics:mask_graphics_107,x:59.1,y:55.4}).wait(1).to({graphics:mask_graphics_108,x:199.6,y:53.5}).wait(1).to({graphics:mask_graphics_109,x:340.1,y:51.6}).wait(153));

	// 圖層 7
	this.instance_5 = new lib.補間動畫6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(345.2,6.2,0.534,0.534,11.2,0,0,0.2,0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(105).to({_off:false},0).wait(157));

	// ttt2.png
	this.instance_6 = new lib.元件47();
	this.instance_6.parent = this;
	this.instance_6.setTransform(92.3,82.5,0.107,0.107,0,0,0,186.5,51.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({_off:false},0).to({regX:186.3,regY:51.1,scaleX:0.3,scaleY:0.3,x:91.2,y:74.9,alpha:1},5,cjs.Ease.quadInOut).to({regX:186.1,scaleX:0.26,scaleY:0.26,y:75.5},3,cjs.Ease.quadInOut).wait(28).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_7 = new lib.元件48();
	this.instance_7.parent = this;
	this.instance_7.setTransform(82.5,45.1,0.464,0.464,0,0,0,300.3,59.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({regX:300.4,regY:59.4,scaleX:0.3,scaleY:0.3,x:89.9,y:49.8},5,cjs.Ease.quadInOut).to({scaleX:0.32,scaleY:0.32,y:49.4},3,cjs.Ease.quadInOut).wait(36).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_8 = new lib.元件24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(214.6,38.5,0.499,0.499,0,0,0,118.7,40.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 11
	this.instance_9 = new lib.元件52();
	this.instance_9.parent = this;
	this.instance_9.setTransform(245.1,59.2,0.523,0.523,0,0,0,135.3,49.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42).to({alpha:0},9).to({_off:true},1).wait(210));

	// 元件 3
	this.instance_10 = new lib.元件3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(236.6,38.4,0.523,0.523,-21.7,0,0,2.9,65.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:3,regY:65.5,rotation:12.8,guide:{path:[236.6,38.4,236.7,37.5,237,36.5,237.6,34.5,239.4,34.2,239.6,34.1,239.9,34.1,241.2,33.9,242.9,33.5,244.5,33.6,245,35.6,245.4,36.7,245.6,37.7,246.1,39.5,246.4,41,246.4,40.7,247.4,39.2,248.7,37.4,249.6,36.9,250.9,36.3,252.3,36.4,253.9,36.5,254.4,37.4,255,38.3,255.7,41.7,256.1,43.4,256.4,44.8,257.3,42.4,258.2,39.8,260,34.6,260.1,33,260.1,29.1,260.1,26.6,260.1,21.8,260.8,20.1,261.6,18.3,262.6,17.8,263.6,17.5,264.7,17.3,266.3,17,267.2,17.9,268.5,19,268.5,21.8,268.5,24,268.2,27.1,267.8,30.3,267.8,30.9,267.8,32.8,267.6,38,266.8,41.1,266.4,42.6,266.1,44.1,266.1,44.1]}},33,cjs.Ease.quadInOut).wait(14).to({regX:3.1,scaleX:0.43,scaleY:0.43,x:254.4,y:33.3},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// 元件 5
	this.instance_11 = new lib.元件51();
	this.instance_11.parent = this;
	this.instance_11.setTransform(243.2,66,0.523,0.523,0,0,0,150.2,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(47).to({regX:150.7,regY:125.2,scaleX:0.39,scaleY:0.39,x:238.4,y:48.3},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(330.3,137.2,0.923,0.923,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(47).to({_off:false},0).to({regX:41.7,regY:41.7,scaleX:0.59,scaleY:0.59,x:288.2,y:74.5},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_12 = new lib.元件22();
	this.instance_12.parent = this;
	this.instance_12.setTransform(144.3,126.8,0.923,0.923,0,0,0,39.6,39.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).to({regX:40,regY:39.3,scaleX:0.59,scaleY:0.59,x:192.2,y:70.4},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// t2.png
	this.instance_13 = new lib.元件6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(109.3,74.4,1.268,1.268,0,0,0,54.6,15.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).to({regY:15.7,scaleX:0.87,scaleY:0.87,x:106,y:65.7},8,cjs.Ease.quadInOut).to({scaleX:0.93,scaleY:0.93,x:106.5,y:67.1},5,cjs.Ease.quadInOut).to({regX:54.7,regY:15.6,scaleX:0.91,scaleY:0.91,x:106.4,y:66.6},4,cjs.Ease.quadInOut).wait(15).to({regX:54.6,regY:15.8,scaleX:0.68,scaleY:0.68,x:104.5,y:61.5,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(210));

	// t1.png
	this.instance_14 = new lib.元件2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(97.7,34.5,1.045,1.045,0,0,0,118.6,26.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({regX:118.8,scaleX:0.72,scaleY:0.72,y:38.2},8,cjs.Ease.quadInOut).to({regX:118.6,scaleX:0.77,scaleY:0.77,y:37.6},5,cjs.Ease.quadInOut).to({regY:26.1,scaleX:0.75,scaleY:0.75,x:97.6,y:37.7},4,cjs.Ease.quadInOut).wait(16).to({regX:118.8,regY:26.4,scaleX:0.56,scaleY:0.56,x:97.7,y:40,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_15 = new lib.元件55();
	this.instance_15.parent = this;
	this.instance_15.setTransform(160,50,0.33,0.4,0,0,0,485.1,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,41.8,359,260.2);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 320,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x100_atlas_.png?1538127186520", id:"320x100_atlas_"}
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
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"970x90_atlas_", frames: [[329,375,139,131],[329,252,155,121],[158,252,169,124],[0,0,403,250],[0,440,142,40],[457,69,43,43],[405,69,50,92],[405,163,42,64],[243,378,79,78],[158,378,83,83],[293,458,17,19],[449,163,43,50],[243,458,48,45],[405,0,79,67],[0,252,156,186]]}
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



(lib.btn = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.pen = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.qwdqwdqwdq = function() {
	this.spriteSheet = ss["970x90_atlas_"];
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
	this.shape.graphics.f("#231916").s().p("AukGuIB5gOQgLgcgPgYIAngZIhRAKIgCicQgbAQgYAJIgVg2QAsgUAoghQgVgVgbgXIA4gzQAbAUAWAWQAbgeAZgnIimASIgBg+ID1gdIAAATQAOAPAHAFQApgWAmgkIAuAlQgjAkgrAcQANALAPAKQAogeAegpIAyAmQgeAngmAeQAnAZAsASIgtBDIgdgQIACCeIhWAKIAxAJQgTArgMAWICEgQIABBCInZA3gAsHFRQAQAXAMAdIgoAYIB9gOQAPglANgqgAszDjIABAxIDpgbIAAgygAsaB8QgWAUgXATIEdghQgagRgbgWIABAPIisAUIgBgSgArgA7IBRgKQgbgagQgSQgWAhgQAVgAlbFeIBPgUIgCiNIhEAIIgBhBIBEgIIAAgnIgoAEIAAgnIgLALIgugtQAiglAXgnQAYgnARguIA8ANIgGAPQAwAZAlAgIgpA+QgjgggkgYIgNAaQgRAdgPATIB7gOIABBCIguAGIAAAmIA/gHIABBCIg/AHIABCCQAmgLAZgJIACAMQAugtAjg1IAjAkQgrBLgwAtIgSgTIABAJQhbAlhiAdgAhDGLIgMhDQATAGATgDQALgBAEgIQAEgMAAgUIgCjBIhrAMIgBg6ICUgRIAIghIhYAKIgFAVIg5gEIAwi+IA5ADIgFAXICUgRIgwC0IBGgJIABA8IhxAMIAAA9QAEAIAJAOQAZgjAQgpIAwAaQgbA6geAlQAhAnArAUIgdBCQgggRgeggQgOgQgPgYIABAvQABAxgNATQgQAXgmAEIgOABQgLAAgKgCgAgphOIgJAjIBXgKIAIgkgADrEkIA/gqIgBh8Ig7AHIgBhFIB4gOIACC1QAWAPAYAFIgYg3QBGgjAggxQAQgXAGgbIiAAPIgBhEICLgQIAAgFQABgEgBgzIh4ANIgBhDIBHgJQgNgbgVgZIA2guQAbAgARAiIgkAdIBIgJQATguAOg1IBIANQgQArgTAjIBFgIIABBEIh/APIAAA+ICTgSIABBDIiBAQQAHARAKAMQAQAWAdARQAaAPAoALIggBIQgrgMgrghQgfgYgTghQgKAWgNATQgsA6hKAlQANADALgCQAeAECLgQQBQgKA0gSQgSAngJAsIijATQhYALg0gJQgmgGglggIg4BRQgbgtgSgXgAlhDxIA3gaQANAkAKAxIg5AaQgHgxgOgkgAjMETQAKgtAFgmIA5AIQgHAtgKAogAh/CXIAuglQAVAeAMAgIgxAmQgLgfgTgggADqgZIAtg7QAiASAeAaIgrBBQgggdgigVgAEOiOIAtg6QAjARAfAdIgrBCQgigigigUgAOijtQADiDhJg6Qg2gshZgBIhPAGIgGgWIBYgJQBfADA8AwQBSBCgDCOgALXkQQgMgKgVABIgTACIgGgXIAagDQAcAAASANQAYASABAkIgYABQAAgZgPgKgAM4kCQACgpgZgYQgbgag1gGIgwgDIgCgXIA4ACQA7AJAfAeQAhAfgCA1g");
	this.shape.setTransform(95.4,49.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(0,0,190.8,99.3), null);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(124.9,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61, new cjs.Rectangle(0,0,249.8,53.9), null);


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
	this.shape.setTransform(252.3,49.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(0,0,504.6,99), null);


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
	this.instance.setTransform(119.7,-64.8,0.916,0.916,-5.9);

	this.instance_1 = new lib.向量圖智慧型物件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(396,-51,0.677,0.677);

	this.instance_2 = new lib.向量圖智慧型物件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(276,-55,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(119.7,-80.8,381.4,129), null);


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

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(0,0.3,600,117.7), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:300,regY:59,x:300,y:59},0).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,600,117.7);


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
	this.instance.setTransform(-159.9,57.8,0.63,0.63,0,0,0,95.4,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.元件63();
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


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 28
	this.instance = new lib.元件28();
	this.instance.parent = this;
	this.instance.setTransform(109,29.7,1,1,0,0,0,32.3,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.8,14.6,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(258.8,-4.9,1,1,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.3,-24.5,254.1,58.9);


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
p.nominalBounds = new cjs.Rectangle(0,0,270.2,98.4);


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

	// t41.png
	this.instance_1 = new lib.元件33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(432.2,57.2,1,1,3.5,0,0,92.1,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({regX:92,regY:20.1,x:433,y:43.8,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t42.png
	this.instance_2 = new lib.元件34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(566.6,41.4,0.953,0.953,3.5,0,0,61.6,29.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({regY:29.5,x:567.5,y:26.4},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_3 = new lib.元件53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(482.5,80.9,0.823,0.823,0,0,0,111.2,29.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({regX:111.3,regY:29.9,scaleX:0.55,scaleY:0.55,x:538.8,y:67.8,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_4 = new lib.元件40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(850.3,53.7,0.826,0.826,0,0,0,86.1,24.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111).to({_off:false},0).to({regX:86.2,regY:24.7,scaleX:1.03,scaleY:1.03,x:850.5,y:47.2,alpha:1},9,cjs.Ease.cubicOut).wait(142));

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
	this.instance_5 = new lib.補間動畫6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(780.8,29.1,1,1,11.2,0,0,0.1,0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(105).to({_off:false},0).wait(157));

	// ttt2.png
	this.instance_6 = new lib.元件47();
	this.instance_6.parent = this;
	this.instance_6.setTransform(477.5,44.4,0.148,0.148,1.9,0,0,187.3,51.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({_off:false},0).to({regX:186.7,regY:51.1,scaleX:0.41,scaleY:0.41,x:476.3,y:33.8,alpha:1},5,cjs.Ease.quadInOut).to({regX:186.5,regY:51.3,scaleX:0.36,scaleY:0.36,y:34.7},3,cjs.Ease.quadInOut).wait(28).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_7 = new lib.元件48();
	this.instance_7.parent = this;
	this.instance_7.setTransform(254.7,44.6,0.64,0.64,1.9,0,0,300.4,59.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({regX:300.7,scaleX:0.42,scaleY:0.42,x:254.5,y:51},5,cjs.Ease.quadInOut).to({regY:59.6,scaleX:0.44,scaleY:0.44,y:50.6},3,cjs.Ease.quadInOut).wait(36).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_8 = new lib.元件24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(633.7,47,0.674,0.674,0,0,0,118.7,40.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 11
	this.instance_9 = new lib.元件52();
	this.instance_9.parent = this;
	this.instance_9.setTransform(653.2,54.2,0.587,0.587,0,0,0,135.2,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42).to({alpha:0},9).to({_off:true},1).wait(210));

	// 元件 3
	this.instance_10 = new lib.元件3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(643.8,30.9,0.587,0.587,-21.7,0,0,2.8,65.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:2.9,regY:65.5,rotation:12.8,guide:{path:[643.7,30.9,643.8,29.8,644.1,28.8,644.9,26.6,646.8,26.2,647.1,26.1,647.4,26.1,648.8,25.8,650.8,25.4,652.5,25.5,653.2,27.7,653.5,29,653.8,30.2,654.3,32.2,654.7,33.9,654.7,33.5,655.9,31.8,657.2,29.8,658.3,29.3,659.8,28.6,661.3,28.7,663.1,28.8,663.7,29.8,664.3,30.8,665.1,34.6,665.6,36.5,665.9,38.1,666.9,35.4,667.9,32.5,670,26.6,670.1,24.8,670,20.5,670,17.7,670,12.3,670.8,10.3,671.7,8.3,672.8,7.8,672.9,7.8,675.3,7.3,677,6.9,678.1,7.9,679.5,9.1,679.5,12.3,679.5,14.9,679.1,18.4,678.7,21.8,678.7,22.5,678.7,24.7,678.5,30.4,677.6,33.9,677.2,35.7,676.8,37.4,676.8,37.3]}},33,cjs.Ease.quadInOut).wait(14).to({x:687.5,y:31.9},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// 元件 5
	this.instance_11 = new lib.元件51();
	this.instance_11.parent = this;
	this.instance_11.setTransform(651.1,61.9,0.587,0.587,0,0,0,150.1,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(47).to({regX:150.3,regY:125.3,scaleX:0.52,scaleY:0.52,x:665.7,y:52.1},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(757.8,141.7,1.036,1.036,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(47).to({_off:false},0).to({scaleX:0.79,scaleY:0.79,x:752,y:65.8},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_12 = new lib.元件22();
	this.instance_12.parent = this;
	this.instance_12.setTransform(549.2,130.1,1.036,1.036,0,0,0,39.6,39.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).to({regX:39.8,scaleX:0.79,scaleY:0.79,x:589.2,y:61.6},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// t2.png
	this.instance_13 = new lib.元件6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(494.3,46.1,1.75,1.75,2.2,0,0,54.6,15.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).to({regX:54.7,regY:15.8,scaleX:1.2,scaleY:1.2,x:490.4,y:33.9},8,cjs.Ease.quadInOut).to({regX:54.6,regY:15.7,scaleX:1.28,scaleY:1.28,x:490.9,y:35.9},5,cjs.Ease.quadInOut).to({regX:54.7,regY:15.6,scaleX:1.26,scaleY:1.26,x:490.8,y:35.2},4,cjs.Ease.quadInOut).wait(15).to({regY:15.8,scaleX:0.94,scaleY:0.94,x:488.5,y:28.1,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(210));

	// t1.png
	this.instance_14 = new lib.元件2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(288.8,42.8,1.442,1.442,2.2,0,0,118.6,26.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({regX:118.8,regY:26.2,scaleX:0.99,scaleY:0.99,x:288.6,y:48.1},8,cjs.Ease.quadInOut).to({regX:118.7,scaleX:1.06,scaleY:1.06,y:47.2},5,cjs.Ease.quadInOut).to({regY:26.1,scaleX:1.04,scaleY:1.04,y:47.4},4,cjs.Ease.quadInOut).wait(16).to({regX:118.8,regY:26.4,scaleX:0.77,scaleY:0.77,x:288.5,y:50.6,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_15 = new lib.元件55();
	this.instance_15.parent = this;
	this.instance_15.setTransform(485,45,1,0.36,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,23.6,970,271.4);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 970,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/970x90_atlas_.png?1538128691053", id:"970x90_atlas_"}
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
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x480_atlas_", frames: [[329,375,139,131],[329,252,155,121],[158,252,169,124],[0,0,403,250],[0,440,142,40],[457,69,43,43],[405,69,50,92],[405,163,42,64],[243,378,79,78],[158,378,83,83],[293,458,17,19],[449,163,43,50],[243,458,48,45],[405,0,79,67],[0,252,156,186]]}
];


// symbols:



(lib.向量圖智慧型物件1 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件2 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
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



(lib.pen = function() {
	this.spriteSheet = ss["320x480_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.qwdqwdqwdq = function() {
	this.spriteSheet = ss["320x480_atlas_"];
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
	this.instance.setTransform(-210.6,-127.9,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-172,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.6,-170,441.7,335.1);


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
	this.instance.setTransform(92,3,0.394,0.394);

	this.instance_1 = new lib.向量圖智慧型物件();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-13,0.578,0.578);

	this.instance_2 = new lib.向量圖智慧型物件2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(163,-4,0.421,0.421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(-6,-13,234.3,71.7), null);


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
	this.shape.graphics.f("#FFF100").s().p("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");
	this.shape.setTransform(300,59.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(0,0.3,600,117.7), null);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgiaAEIIA6gHIgJBtIAvAiIAAjyIh3AMIAAg7IB3gNIAAhOIhnALIAAg7IBngLIAAhDIA7gGIAABDIBhgKIAAA6IhhAKIAABPIBzgMIAAA7IhzAMIAABDIBXgJIAAA9IhXAJIAACeIHPgxIAAA/InqAzIhWg5IgIBdIg7AGgA2DGQIBIgHIgDi/IgnA8IhLAHIBsimIgbhOIgTAcIhLAHIBFhoIgph3IBAgGIAVA5IAshAIBKgIIhcCPIAxCJIADFgIiFAOgAzKFkICsgTIAAjRIiDANIAAhBICDgOIAAirIiRAPIAAhBIFjglIAABBIiQAPIAACrICDgOIAABBIiDAOIAADSICtgSIAABCImbAqgA9bCvIEYgdIAADSIkYAegA8lDgIAABlICsgTIAAhkgApDA5IGagrIAAE8ImaArgAoJDrIAABIIEkggIAAhIgAoJBvIAAA+IEkgfIAAg+gAB4BMIBEgIIgvDwIhDAHgAEiknICMgPIAAg2IBDgHIAAA2ICMgOIAAFAIhuALIAqBGIAhgbIB0gNIh2BcIBRCGIhMAIIiakAIheAKIAACvIBcgfIAABCIifA3gAFlhtIAAA+IDXgWIAAg+gAFljsIAAA9IDXgWIAAg+gARdAEIiYCfIhgAKID4kCIAAjQIkTAeIAAhBIETgdIAAhYIBAgHIAABYIESgcIAABAIkSAdIAADOIECDOIhhAKIihh/IAADIIhAAHgAbjAqIg2AoIhgAKICrh9IipARIAAg0IELgcIAAgvIA0gGIAAAvIEQgdIAAA1Ij7AbIBLA8IAqgjIBcgLIhcBPIBJA9IhOAJIi8iaIg9AtIAABLIBWgUIAAA2IiNAigA8jg4IhRAJIAAg7IE0ghIgLDoIg7AHIAIitIhnALIgwC1Ig8AHgAqxgiICsgSIgdhoIhJAHIAAg7IDUgWIAAgxIA8gGIAAAxIDUgXIAAA8IhJAHIgaBtICogRIAAA8IpvBBgAnjijIAdBoICdgRIAahsgAOzjyIBIgIIgVAzIBEBrIhOAIIgVgjIgeBOIhHAIgABChDIAAhEIB3AVIAABCgAUVkYIBJgIIgXA2IBhB5IhSAJIgvg7IgcBDIhKAIgAZVlPID1gaIAADdIgtAEIAAgyIikASIgDAxIgtAGgAZ8jnIgBAUICigRIAAgUgAaAknIAAAUICdgQIAAgVgAeMmIIDrgaIAAgKIjrAZIAAiHIAugGIAAAkIDqgYIAAAjIjqAZIAAASIDrgaIAABoIjrAYIAAAOIDqgZIAAAhIjqAZIAAAMIDqgZIAAAgIjqAZIAAANIDqgZIAAAgIjqAZIAAAMID6gaIAAAuIkoAggABCj0IAAhDIB3ASIAABDgAYwmHIA/gHIgGgmIgiAEIAAgqIBtgNIAAgZIArgFIAAAaIB1gMIAAArIgpAEIgJAnIA+gGIAAAsIkwAggAaVm4IAGAmIBagKIAJgog");
	this.shape.setTransform(185.9,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(-37,-4.4,445.7,108.9), null);


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


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(100.9,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(-7.1,-27.9,215.9,46.6), null);


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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AyTD+QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAIhOIgBgCQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAIgNABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgBgCIAAgSIABgDIADgBIAQgCIADgBIABgDIAGg7IgBgCQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgWACIgCgBIgBgCIAAgSIABgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAZgDIADgBIABgDIAGg0QAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIASgCIADABIABACIgGA1QAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACABIAlgEIACgBIACgDIAFg0QAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIACgBIASgCQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIABADIgGA0IABACIADABIAOgBIACABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAASQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgRACIgDABQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgHA7IABACIADABIAXgCIADABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIAAASIgBADQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgaADIgDABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIgIBOIgBADIgDABIgTACQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAIhNQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDgBIgkAEQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgJBOIgBADIgDABIgSACIgCgBgAxBBHIgjAEIgDABIgBADIgHA7QAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAlgEIACgBIACgDIAGg6IgBgDIgCgBIgBAAgAvpDfIgEgBIgBgEIAAjfIABgEIAEgBICFgOQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAUQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgDACIhoALIgCABIgBACIAACsIABABIABABIBQgJQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAhVIgBgCIgBAAIgmAEQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgTQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgCIBBgHQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAACJQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEACIiIAOgAlPDWIgDgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgSIABgEIAEgBIBPgJIACgBIABgCIAAgjIgBgCIgCAAIhQAIIgEgBIgBgDIAAiaIABgEQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIATgCQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAACBIABACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIA2gFQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAiBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAUgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAC/QAAAFgCADIAAABIgaAcQgDACgEAAIhNAIgAs6DMIgDgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhmQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIBQgIIACgBIAAgCIAAgbIAAgBIgCgBIhNAJQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgSQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgCIBogLIAEABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAACCQAAAEgBAEIAAAAIgZAdIgIACIhOAIgAsfB1IgBABIgBACIAAA1IAAABIACABIA2gGIACgBIAAgCIAAg1IAAgBIgCgBgAqmC9IgDgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAjaIABgDIAEgCIAUgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAADaQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAIgUACgAprC3QAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhmQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIBQgIQAAAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAIAAgaIAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIhNAIIgEgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgRQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIBogLQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAACCIgBAIIgZAdQgEACgEAAIhOAJgAoaBaIg2AFQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIAAA1IAAABQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAIA2gGQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAg0IAAgCIgBAAIgBAAgAnrCoQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAqhfIABgDIgBgDIgg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");
	this.shape.setTransform(118.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,-1,237.1,51), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).to({scaleX:0.97,scaleY:0.97},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,600,117.7);


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
	this.instance.setTransform(62.9,77.8,0.899,0.899,0,0,0,32.3,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// 元件 27
	this.instance_1 = new lib.元件30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.4,76.4,0.899,0.899,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// 元件 26
	this.instance_2 = new lib.元件31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(185.3,66.7,0.899,0.899,0,0,0,16.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.8,33.4,212.4,56.2);


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
	this.instance.setTransform(64.9,23.2,1.383,1.383,0,0,0,35.6,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262));

	// t41.png
	this.instance_1 = new lib.元件33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.2,129.8,1.124,1.124,0,0,0,92,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({y:114.5,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t43.png
	this.instance_2 = new lib.元件32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.3,240.6,1.374,1.374);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({y:220.7,alpha:1},7,cjs.Ease.cubicOut).wait(148));

	// t42.png
	this.instance_3 = new lib.元件34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.6,199.7,1.374,1.374,0,0,0,61.5,29.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({regY:29.6,y:185.8},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_4 = new lib.元件53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(158.3,295,1.67,1.67,0,0,0,111.1,29.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({regY:29.9,scaleX:1.27,scaleY:1.27,x:158.2,y:341.1,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_5 = new lib.元件40();
	this.instance_5.parent = this;
	this.instance_5.setTransform(181.2,417.7,1.124,1.124,0,0,0,86,24.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).to({regY:24.6,y:408.8,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("EgrUApbQzTkchoqXQhpqWRAqLQRAqLZqkDQZpkDTTEdQTUEdBoKVQBpKWxAKLQw/KM5rEDQsNB8qxAAQr3AAqIiWg");
	var mask_graphics_106 = new cjs.Graphics().p("EgptAnzQzpkjhqqjQhrqiRSqYQRSqWaHkIQaFkITpEjQTpEjBqKiQBrKjxTKXQxRKY6HEHQsZB9q9AAQsFAAqTiYg");
	var mask_graphics_107 = new cjs.Graphics().p("EgqaAmKQz+kohsqvQhsqwRkqkQRlqiaikMQaikMT9EoQT/EpBsKuQBsKwxkKjQxlKk6iEMQslB/rIAAQsTAAqgicg");
	var mask_graphics_108 = new cjs.Graphics().p("EgrHAkiQ0Skuhvq8Qhuq8R2qvQR4qwa+kQQa+kRUTEuQUTEvBvK7QBuK8x3KvQx3Kw6+ERQsxCBrTAAQsiAAqsifg");
	var mask_graphics_109 = new cjs.Graphics().p("EgrzAi5Q0ok0hxrJQhwrISJq7QSKq8bbkVQbZkVUpE0QUoE1BxLIQBwLIyKK7QyJK87bEVQs9CDrdAAQswAAq4iig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-412.1,y:280.1}).wait(1).to({graphics:mask_graphics_106,x:-292.6,y:269.9}).wait(1).to({graphics:mask_graphics_107,x:-158.4,y:259.8}).wait(1).to({graphics:mask_graphics_108,x:-24.3,y:249.7}).wait(1).to({graphics:mask_graphics_109,x:110,y:239.5}).wait(153));

	// 圖層 7
	this.instance_6 = new lib.補間動畫6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(135.5,293.8,1.124,1.124,4.7,0,0,0.1,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).wait(157));

	// ttt2.png
	this.instance_7 = new lib.元件47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(165.9,181.1,0.174,0.174,0,0,0,186.3,50.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({regX:186.2,scaleX:0.48,scaleY:0.48,x:164,y:168.9,alpha:1},5,cjs.Ease.quadInOut).to({regX:186,regY:50.6,scaleX:0.42,scaleY:0.42,x:164.1,y:169.7},3,cjs.Ease.quadInOut).wait(28).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160.8,123.5,0.75,0.75,0,0,0,300.1,59.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({regX:300.3,scaleX:0.49,scaleY:0.49,x:160.6,y:131.1},5,cjs.Ease.quadInOut).to({scaleX:0.51,scaleY:0.51,y:130.6},3,cjs.Ease.quadInOut).wait(36).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(153.6,259,1.368,1.368,0,0,0,118.6,40.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 11
	this.instance_10 = new lib.元件52();
	this.instance_10.parent = this;
	this.instance_10.setTransform(158.3,297.6,1.124,1.124,0,0,0,135.1,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(42).to({alpha:0},9).to({_off:true},1).wait(210));

	// 元件 3
	this.instance_11 = new lib.元件3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(140.2,253.1,1.124,1.124,-21.7,0,0,2.8,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:65.4,rotation:-6.7,guide:{path:[140.2,253,140.2,253.3,140.2,253.6,140.2,251.3,140.9,249.1,142.4,244.7,146.1,244,146.7,243.9,147.3,243.8,149.9,243.3,153.7,242.6,157.1,242.6,158.3,246.9,158.9,249.4,159.6,251.6,160.5,255.5,161.2,258.7,161.2,258.1,163.5,254.7,166.1,250.9,168.2,249.9,171,248.6,173.9,248.8,177.3,249,178.6,251,179.7,252.8,181.3,260.1,182,263.8,182.6,266.8,184.6,261.7,186.5,256.1,190.5,244.9,190.7,241.4,190.6,233.2,190.6,227.6,190.6,217.1,192.2,213.4,193.8,209.6,196,208.6,196,208.6,200.6,207.5,204,206.8,206,208.7,208.7,211.1,208.7,217.1,208.7,222.1,208,228.8,207.3,235.6,207.3,237,207.3,241,206.9,252.1,205.3,258.9,204.4,262.3,203.6,265.6,203.6,265.4]}},33,cjs.Ease.quadInOut).wait(14).to({rotation:-6.7},0).wait(2).to({scaleX:0.95,scaleY:0.95,rotation:83.4,x:169.3,y:176.1},8).to({regY:65.3,x:207.6,y:194.7},5,cjs.Ease.cubicInOut).to({regY:65.4,x:204.3,y:190.3},4,cjs.Ease.quadInOut).wait(30).to({alpha:0},8).to({_off:true},1).wait(157));

	// 元件 5
	this.instance_12 = new lib.元件51();
	this.instance_12.parent = this;
	this.instance_12.setTransform(154.2,312.2,1.124,1.124,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({regX:150.1,regY:125.1,scaleX:0.95,scaleY:0.95,x:152.9,y:289.9},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(352.2,454.3,1.896,1.896,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(47).to({_off:false},0).to({regX:41.5,regY:41.5,scaleX:1.37,scaleY:1.37,x:247.5,y:385.2},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_13 = new lib.元件22();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-29.5,433,1.896,1.896,0,0,0,39.5,39);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).to({regY:39.1,scaleX:1.37,scaleY:1.37,x:65.4,y:386.6},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// t2.png
	this.instance_14 = new lib.元件6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(171.6,184.7,1.69,1.69,0,0,0,54.6,15.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},0).to({regY:15.7,scaleX:1.16,scaleY:1.16,x:167.4,y:172.9},8,cjs.Ease.quadInOut).to({regY:15.6,scaleX:1.24,scaleY:1.24,x:168,y:174.8},5,cjs.Ease.quadInOut).to({scaleX:1.22,scaleY:1.22,x:167.8,y:174.2},4,cjs.Ease.quadInOut).wait(15).to({scaleX:1.1,scaleY:1.1,x:166.2,y:175.2,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(210));

	// t1.png
	this.instance_15 = new lib.元件2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(158.1,128.1,1.69,1.69,0,0,0,118.5,26.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({regX:118.6,scaleX:1.16,scaleY:1.16,x:158,y:134.1},8,cjs.Ease.quadInOut).to({scaleX:1.24,scaleY:1.24,x:158.1,y:133.2},5,cjs.Ease.quadInOut).to({scaleX:1.22,scaleY:1.22,y:133.4},4,cjs.Ease.quadInOut).wait(16).to({scaleX:0.91,scaleY:0.91,x:158,y:137,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_16 = new lib.元件55();
	this.instance_16.parent = this;
	this.instance_16.setTransform(160.6,239.5,1.07,1.924,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,239,337.2,481);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x480_atlas_.png?1538113794758", id:"320x480_atlas_"}
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
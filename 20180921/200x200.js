(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"200x200_atlas_", frames: [[329,375,139,131],[329,252,155,121],[158,252,169,124],[0,0,403,250],[0,440,142,40],[457,69,43,43],[405,69,50,92],[405,163,42,64],[243,378,79,78],[158,378,83,83],[293,458,17,19],[449,163,43,50],[243,458,48,45],[405,0,79,67],[0,252,156,186]]}
];


// symbols:



(lib.向量圖智慧型物件1 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件2 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.向量圖智慧型物件 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mm2 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mm3 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mo1 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mo2 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mo3 = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.pen = function() {
	this.spriteSheet = ss["200x200_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.qwdqwdqwdq = function() {
	this.spriteSheet = ss["200x200_atlas_"];
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
	this.instance.setTransform(-210.6,-101,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層 1
	this.instance_1 = new lib.圖層1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-201.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.6,-143.1,427,290.8);


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
	this.instance.setTransform(87,4,0.394,0.394);

	this.instance_1 = new lib.向量圖智慧型物件();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-2,0.488,0.488);

	this.instance_2 = new lib.向量圖智慧型物件2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(158,1,0.421,0.421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(-6,-2,229.3,61.6), null);


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
	this.shape.graphics.f("#FFF100").s().p("AyTD+QgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAIhOIgBgCQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAIgNABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgBgCIAAgSIABgDIADgBIAQgCIADgBIABgDIAGg7IgBgCQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgWACIgCgBIgBgCIAAgSIABgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAZgDIADgBIABgDIAGg0QAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIASgCIADABIABACIgGA1QAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACABIAlgEIACgBIACgDIAFg0QAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIACgBIASgCQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIABADIgGA0IABACIADABIAOgBIACABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAASQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgRACIgDABQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgHA7IABACIADABIAXgCIADABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIAAASIgBADQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgaADIgDABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIgIBOIgBADIgDABIgTACQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAIhNQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDgBIgkAEQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgJBOIgBADIgDABIgSACIgCgBgAxBBHIgjAEIgDABIgBADIgHA7QAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAlgEIACgBIACgDIAGg6IgBgDIgCgBIgBAAgAvpDfIgEgBIgBgEIAAjfIABgEIAEgBICFgOQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAUQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgDACIhoALIgCABIgBACIAACsIABABIABABIBQgJQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAhVIgBgCIgBAAIgmAEQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgTQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgCIBBgHQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAACJQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEACIiIAOgAlPDWIgDgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgSIABgEIAEgBIBPgJIACgBIABgCIAAgjIgBgCIgCAAIhQAIIgEgBIgBgDIAAiaIABgEQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIATgCQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAACBIABACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIA2gFQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIAAiBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAUgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAC/QAAAFgCADIAAABIgaAcQgDACgEAAIhNAIgAs6DMIgDgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhmQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIBQgIIACgBIAAgCIAAgbIAAgBIgCgBIhNAJQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgSQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgCIBogLIAEABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAACCQAAAEgBAEIAAAAIgZAdIgIACIhOAIgAsfB1IgBABIgBACIAAA1IAAABIACABIA2gGIACgBIAAgCIAAg1IAAgBIgCgBgAqmC9IgDgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAjaIABgDIAEgCIAUgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAADaQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAIgUACgAprC3QAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhmQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIBQgIQAAAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAIAAgaIAAgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIhNAIIgEgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgRQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIBogLQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAACCIgBAIIgZAdQgEACgEAAIhOAJgAoaBaIg2AFQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIAAA1IAAABQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAIA2gGQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAg0IAAgCIgBAAIgBAAgAnrCoQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAqhfIABgDIgBgDIggg7QAAgBAAAAQgBgBAAAAQAAgBAAAAQABAAAAAAIADgCIAVgCIAEABIACACIAaAvQACADADAAIAAAAQADgBABgCIAZg1QAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIAEgCIAVgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgeBAIAAADIAAADIApBXQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgVACIgDgBIgDgDIgihJIgCgCIgCgBIgDABQgDAAgBADIgkBRIgCADIgEABIgVADgAhxCBIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAjfQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIADgCIAhgDIAEABIADABIBNBEIABAAIAAhKQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAEgCIAUgCIADABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAADfQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgUACIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhpQAAgDgDgCIhZhOIgBAAIAADGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgTACgABCBtQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAigQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIADgCIBwgMQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAACBIgBAIIgbAdQgEACgDAAIhRAJIgBAAIgDgBgABfgjIgCABIAAACIAABtIAAABIACABIA8gHIACgBIABgCIAAhsIgBgCIgCAAgAD5BZIgBAAIgZgXQgCgDAAgFIAAhoIgBgCQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgKABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgRIABgEIAEgCIAKgBIACgBIABgCIAAgyQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAEgCIAUgCIADABQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAIAAAyIAAACIACAAIAdgDIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAIAAARQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEACIgdADIgBABIgBACIAABvIAAABIACABIAigEQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIABAEIAAARIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIggADIgGgBgAFJBRIgZgXIgCgIIAAiCIABgDQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIBqgLQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAABNIgBAEIgEACIhPAIQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAABIAAA0IAAACIACAAIBQgIQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAARQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIhOAIIgHgBgAFOg9QAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIAAAbIAAACIACAAIA0gFQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgbIgBgCIgCAAgAG+BGIgDgBIgBgDIAAgSIABgEIAEgCIBrgLQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAhSIgBgCIgCgBIhrAMIgEgBIgBgEIAAhrQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAEgCICHgOIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAADAQAAAEgCAEIAAAAIgZAdIgIACIhpALgAHaiKQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIAAA5IABABIABABIBQgJQAAAAABAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAg5IgBgCIgCAAgAKrg1IgLAVIgeADIA+h8Ig/AHIAAgbIBNgIIAPgfIAfgDIgPAeICVgPIAAAbIikARIgZAzIAACiIgaACgALVAQIBKgIIAAhGIg/AGIAAgaIA/gGIAAg1IAagDIAAA1IA/gHIAAAaIg/AHIAABGIBJgGIAAAYIitATgAQBgGIAWgDIAAgyIh3AMIAAgdIB3gMIAAgsIhmALIAAgdIBmgKIAAguIhUAQIAAgdIC+gjIAAAdIhOANIAAAxIBegKIAAAdIheAJIAAAsIBugMIAAAdIhuAMIAABOIgyAFg");
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
(lib._200x200 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(34.6,13.6,0.8,0.8,0,0,0,35.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262));

	// t41.png
	this.instance_1 = new lib.元件33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98.7,56.3,0.808,0.808,0,0,0,92.1,20.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({regY:20.1,y:45.2,alpha:1},7,cjs.Ease.cubicOut).wait(153));

	// t43.png
	this.instance_2 = new lib.元件32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(143.1,93.8,0.706,0.706,0,0,0,67,20.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({regX:0.1,regY:0.1,x:95.9,y:73.1},7,cjs.Ease.cubicOut).wait(148));

	// t42.png
	this.instance_3 = new lib.元件34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(52.4,96.5,0.706,0.706,0,0,0,61.5,29.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({regY:29.7,y:90.9},7,cjs.Ease.cubicOut).wait(148));

	// p3.png
	this.instance_4 = new lib.元件53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.2,130.5,1.05,1.05,0,0,0,111,29.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({regX:111.1,regY:29.9,scaleX:0.71,scaleY:0.71,alpha:1},8,cjs.Ease.cubicOut).wait(145));

	// hand.png
	this.instance_5 = new lib.元件40();
	this.instance_5.parent = this;
	this.instance_5.setTransform(115.6,177.7,0.706,0.706,0,0,0,86.1,24.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).to({regY:24.7,y:172.2,alpha:1},9,cjs.Ease.cubicOut).wait(142));

	// 圖層 28 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("A7EWvQsIizhCmgQhCmhKrmZQKsmYQIijQQHijMICzQMJCzBBGfQBCGgqsGaQqrGZwICjQnqBNmyAAQndAAmWhdg");
	var mask_graphics_106 = new cjs.Graphics().p("A5xVyQsIizhCmgQhBmgKrmZQKrmZQJijQQHijMICzQMICzBCGfQBBGhqrGZQqrGZwJCjQnqBOmxAAQndAAmXheg");
	var mask_graphics_107 = new cjs.Graphics().p("A5xU1QsIizhCmgQhBmgKrmZQKrmZQJijQQHijMICzQMIC0BCGgQBBGfqrGZQqrGawJCiQnqBOmxAAQndAAmXheg");
	var mask_graphics_108 = new cjs.Graphics().p("A5xT4QsIizhCmgQhBmgKrmYQKrmaQJijQQHiiMICzQMICzBCGgQBBGfqrGZQqrGawJCjQnqBNmxAAQndAAmXheg");
	var mask_graphics_109 = new cjs.Graphics().p("A5xS7QsIizhCmgQhBmgKrmZQKrmZQJijQQHijMICzQMICzBCGhQBBGfqrGZQqrGZwJCjQnqBOmxAAQndAAmXheg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-258.1,y:154.8}).wait(1).to({graphics:mask_graphics_106,x:-186.1,y:148.8}).wait(1).to({graphics:mask_graphics_107,x:-105.7,y:142.7}).wait(1).to({graphics:mask_graphics_108,x:-25.3,y:136.6}).wait(1).to({graphics:mask_graphics_109,x:55.1,y:130.5}).wait(153));

	// 圖層 7
	this.instance_6 = new lib.補間動畫6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(86.9,149.2,0.706,0.706,4.7,0,0,0.1,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).wait(157));

	// ttt2.png
	this.instance_7 = new lib.元件47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(104.6,76.9,0.105,0.105,0,0,0,186.1,51.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({regX:186.3,regY:51.4,scaleX:0.29,scaleY:0.29,x:103.6,y:69.5,alpha:1},5,cjs.Ease.quadInOut).to({regY:50.9,scaleX:0.25,scaleY:0.25,y:70.1},3,cjs.Ease.quadInOut).wait(28).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// ttt1.png
	this.instance_8 = new lib.元件48();
	this.instance_8.parent = this;
	this.instance_8.setTransform(101.6,42.2,0.452,0.452,0,0,0,300,59.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({regX:300.4,regY:59.1,scaleX:0.3,scaleY:0.3,x:101.5,y:46.8},5,cjs.Ease.quadInOut).to({regY:59.3,scaleX:0.31,scaleY:0.31,y:46.5},3,cjs.Ease.quadInOut).wait(36).to({alpha:0},8,cjs.Ease.quadInOut).to({_off:true},1).wait(159));

	// 圖層 19
	this.instance_9 = new lib.元件24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(93.1,114.4,0.706,0.706,0,0,0,118.5,40.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({_off:false},0).to({alpha:1},11).wait(19).to({alpha:0},7).to({_off:true},1).wait(158));

	// 圖層 11
	this.instance_10 = new lib.元件52();
	this.instance_10.parent = this;
	this.instance_10.setTransform(101.3,144.8,0.706,0.706,0,0,0,135.1,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(42).to({alpha:0},9).to({_off:true},1).wait(210));

	// 元件 3
	this.instance_11 = new lib.元件3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(89.9,116.8,0.706,0.706,-21.7,0,0,2.8,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:2.9,rotation:-6.7,guide:{path:[89.8,116.7,89.9,116.9,89.9,117.1,89.9,115.7,90.3,114.3,91.2,111.6,93.6,111.1,93.9,111,94.3,110.9,95.9,110.6,98.3,110.2,100.5,110.2,101.2,112.9,101.6,114.4,102,115.9,102.6,118.3,103.1,120.3,103.1,119.9,104.5,117.8,106.1,115.4,107.5,114.8,109.1,114,111,114.1,113.1,114.2,113.9,115.5,114.6,116.6,115.6,121.3,116.1,123.5,116.5,125.4,117.7,122.2,118.9,118.7,121.4,111.6,121.5,109.5,121.5,104.3,121.5,100.8,121.5,94.2,122.5,91.9,123.5,89.5,124.9,88.8,124.9,88.8,127.8,88.1,129.9,87.7,131.2,88.9,132.9,90.4,132.9,94.2,132.9,97.3,132.5,101.5,132,105.8,132,106.7,132,109.2,131.7,116.2,130.7,120.5,130.2,122.6,129.7,124.6,129.7,124.5]}},33,cjs.Ease.quadInOut).wait(14).to({rotation:-6.7},0).wait(2).to({regY:65.3,scaleX:0.49,scaleY:0.49,rotation:83.4,x:101.2,y:71.6},8).to({regX:3,x:120.9,y:81.2},5,cjs.Ease.cubicInOut).to({regX:2.8,x:119.3,y:78.9},4,cjs.Ease.quadInOut).wait(30).to({alpha:0},8).to({_off:true},1).wait(157));

	// 元件 5
	this.instance_12 = new lib.元件51();
	this.instance_12.parent = this;
	this.instance_12.setTransform(98.7,154,0.706,0.706,0,0,0,149.9,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({regX:150.1,regY:125.3,scaleX:0.49,scaleY:0.49,x:92.7,y:130.3},12,cjs.Ease.quadInOut).wait(37).to({alpha:0},8).to({_off:true},1).wait(157));

	// m2.png
	this.w2 = new lib.元件20();
	this.w2.parent = this;
	this.w2.setTransform(223.1,243.2,1.191,1.191,0,0,0,41.6,41.6);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(47).to({_off:false},0).to({scaleX:0.71,scaleY:0.71,x:162.3,y:159},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// m1.png
	this.instance_13 = new lib.元件22();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-16.7,229.9,1.191,1.191,0,0,0,39.5,39.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).to({scaleX:0.71,scaleY:0.71,x:35.2,y:155},12,cjs.Ease.cubicInOut).wait(37).to({alpha:0},7).to({_off:true},1).wait(158));

	// t2.png
	this.instance_14 = new lib.元件6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(109.2,78.9,1.019,1.019,0,0,0,54.6,15.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},0).to({regY:15.7,scaleX:0.7,scaleY:0.7,x:106.7,y:71.9},8,cjs.Ease.quadInOut).to({regY:15.6,scaleX:0.75,scaleY:0.75,x:107.1,y:73},5,cjs.Ease.quadInOut).to({regY:15.7,scaleX:0.73,scaleY:0.73,x:107,y:72.7},4,cjs.Ease.quadInOut).wait(15).to({regX:54.7,regY:15.8,scaleX:0.55,scaleY:0.55,x:105.5,y:68.6,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(210));

	// t1.png
	this.instance_15 = new lib.元件2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(101.2,44.9,1.019,1.019,0,0,0,118.5,26.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({regX:118.6,scaleX:0.7,scaleY:0.7,y:48.5},8,cjs.Ease.quadInOut).to({regX:118.7,scaleX:0.75,scaleY:0.75,y:48},5,cjs.Ease.quadInOut).to({regX:118.6,scaleX:0.73,scaleY:0.73,y:48.1},4,cjs.Ease.quadInOut).wait(16).to({regX:118.7,regY:26.3,scaleX:0.55,scaleY:0.55,y:50.3,alpha:0},12,cjs.Ease.cubicIn).to({_off:true},1).wait(212));

	// bg
	this.instance_16 = new lib.元件55();
	this.instance_16.parent = this;
	this.instance_16.setTransform(100.5,100,0.8,0.8,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.5,100,240,218.2);
// library properties:
lib.properties = {
	id: '3C2BB1652FB40F42ABABBE896AD6B230',
	width: 200,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/200x200_atlas_.png?1538114209877", id:"200x200_atlas_"}
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
(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"introduccionSimulacion_atlas_", frames: [[972,551,500,340],[0,551,456,640],[458,551,512,512],[1474,551,355,355],[0,0,1920,549]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Mapadebits37 = function() {
	this.spriteSheet = ss["introduccionSimulacion_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits40 = function() {
	this.spriteSheet = ss["introduccionSimulacion_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits45 = function() {
	this.spriteSheet = ss["introduccionSimulacion_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits56 = function() {
	this.spriteSheet = ss["introduccionSimulacion_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper2 = function() {
	this.spriteSheet = ss["introduccionSimulacion_atlas_"];
	this.gotoAndStop(4);
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


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABQFnIigkwIgNAAIAAEwIiIAAIAArNICRAAQB1AAAzAVQAyAVAfAyQAfAxAABDQAABHgiAwQgiAvhEAYICqE/gAhdhNIArAAQBAAAAZgRQAZgRAAgoQAAgYgNgRQgMgSgUgHQgUgIg2AAIgmAAg");
	this.shape.setTransform(158,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADLFnIg4iUIkkAAIg6CUIiOAAIEVrNICKAAIEULNgAhfBOIDAAAIhgj2g");
	this.shape_1.setTransform(89,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDFnIAArNICHAAIAALNg");
	this.shape_2.setTransform(37.9,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjwEPQhrhqAAilQAAhsAxhTQAwhUBbgyQBagzBoAAQBZAABSAmQBSAlA8BFIhgBbQhhhnh6AAQhmAAhHBHQhGBGAABnQAABHAfA4QAfA3A5AgQA6AgBEAAQA8AAAxgWQAxgWA7g7IBdBhQhQBNhGAeQhHAehbAAQimAAhrhqg");
	this.shape_3.setTransform(-14.7,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDFnIAArNICHAAIAALNg");
	this.shape_4.setTransform(-68.1,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACcFnIkynWIAAHWIiIAAIAArNICDAAIEyHYIAAnYICJAAIAALNg");
	this.shape_5.setTransform(-119,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhDFnIAArNICHAAIAALNg");
	this.shape_6.setTransform(-170,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(-186,-62.6,372.1,125.2), null);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,500,340), null);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,355,355), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits45();
	this.instance.parent = this;
	this.instance.setTransform(-62.5,-62.5,0.244,0.244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-62.5,-62.5,125,125), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,456,640), null);


// stage content:
(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		/* 
		*/
	}
	this.frame_49 = function() {
		/* 
		
		
		
		*/
	}
	this.frame_74 = function() {
		///* Detener en este fotograma
		//La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		//También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		//*/
		//
		//stop();
		//
		//
		///* Hacer clic para ir a la escena siguiente y reproducir
		//Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta la escena siguiente en la línea de tiempo y prosigue la reproducción en dicha escena.
		//*/
		//
		//movieClip_2.addEventListener(MouseEvent.CLICK, fl_ClickToGoToNextScene_2);
		//
		//function fl_ClickToGoToNextScene_2(event:MouseEvent):void
		//{
		//	MovieClip(this.root).nextScene();
		//}
		//
		//
		///* Hacer clic para ir a la escena siguiente y reproducir
		//Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta la escena siguiente en la línea de tiempo y prosigue la reproducción en dicha escena.
		//*/
		//
		//btn_inicio.addEventListener(MouseEvent.CLICK, fl_ClickToGoToNextScene_5);
		//
		//function fl_ClickToGoToNextScene_5(event:MouseEvent):void
		//{
		//	MovieClip(this.root).nextScene();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(25).call(this.frame_74).wait(1));

	// CPU
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(108.6,361.4,1,1,0,0,0,228,320);

	this.instance_1 = new lib.Símbolo3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(672.9,407.1,1,1,0,0,0,177.5,177.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Símbolo4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.3,441.4,1,1,0,0,0,250,170);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:15,x:130.4,y:338.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:30,x:155.9,y:314.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:45,x:180.2,y:290.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:60,x:203.8,y:266.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:75,x:225.9,y:240.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:90,x:244.8,y:210.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:105,x:248.7,y:184.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:120,x:242.3,y:148},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:135,x:221.7,y:145.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:150,x:220.4,y:177.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:165,x:235.2,y:205.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:180,x:262.6,y:227.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:195,x:290.3,y:247.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:210,x:318.5,y:266.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:225,x:347,y:284.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:240,x:375.7,y:302.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:255,x:404.6,y:319.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:270,x:433.6,y:336.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:285,x:462.8,y:353.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:300,x:492,y:370.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:315,x:521.3,y:387.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:330,x:550.7,y:403.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:345,x:580.7,y:420.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:360,x:608.7,y:437},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(1).to({x:661.8,y:428.2},0).wait(1).to({x:649.8,y:448.8},0).wait(1).to({x:636.8,y:468.9},0).wait(1).to({x:622.8,y:488.1},0).wait(1).to({x:607.5,y:506.5},0).wait(1).to({x:590.8,y:523.5},0).wait(1).to({x:572.7,y:539.1},0).wait(1).to({x:553.1,y:552.7},0).wait(1).to({x:532.1,y:564},0).wait(1).to({x:509.8,y:572.5},0).wait(1).to({x:486.6,y:577.9},0).wait(1).to({x:462.9,y:580.3},0).wait(1).to({x:439,y:579.6},0).wait(1).to({x:415.4,y:576.3},0).wait(1).to({x:392.2,y:570.6},0).wait(1).to({x:369.7,y:563},0).wait(1).to({x:347.7,y:553.7},0).wait(1).to({x:326.4,y:543},0).wait(1).to({x:305.6,y:531.1},0).wait(1).to({x:285.5,y:518.3},0).wait(1).to({x:265.9,y:504.7},0).wait(1).to({x:246.8,y:490.3},0).wait(1).to({x:228.3,y:475.4},0).wait(1).to({x:210.1,y:460},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).wait(1).to({rotation:15,x:216.7,y:463.4},0).wait(1).to({rotation:30,x:229.8,y:484.9},0).wait(1).to({rotation:45,x:243.9,y:505.8},0).wait(1).to({rotation:60,x:259.1,y:526},0).wait(1).to({rotation:75,x:275.5,y:545.1},0).wait(1).to({rotation:90,x:293.3,y:563},0).wait(1).to({rotation:105,x:312.7,y:579.1},0).wait(1).to({rotation:120,x:333.9,y:592.9},0).wait(1).to({rotation:135,x:356.7,y:603.6},0).wait(1).to({rotation:150,x:380.9,y:610.4},0).wait(1).to({rotation:165,x:406,y:612.5},0).wait(1).to({rotation:180,x:431.1,y:609.9},0).wait(1).to({rotation:195,x:455.3,y:602.9},0).wait(1).to({rotation:210,x:478.2,y:592.3},0).wait(1).to({rotation:225,x:499.6,y:579},0).wait(1).to({rotation:240,x:519.5,y:563.6},0).wait(1).to({rotation:255,x:538.2,y:546.6},0).wait(1).to({rotation:270,x:555.7,y:528.5},0).wait(1).to({rotation:285,x:572.2,y:509.3},0).wait(1).to({rotation:300,x:587.7,y:489.5},0).wait(1).to({rotation:315,x:602.5,y:469},0).wait(1).to({rotation:330,x:616.5,y:448},0).wait(1).to({rotation:345,x:630,y:426.7},0).wait(1).to({rotation:360,x:642.8,y:405},0).wait(1));

	// Flechas
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhuBpQgogrAAg+QAAg8AogsQAogsA1AAQAhAAAdASQAeASAQAeIAAg6IA8AAIAAEZIg8AAIAAg4QgrBAg/AAQg4AAgngsgAg7hAQgcAbAAAlQAAAnAbAcQAbAcAnAAQAmAAAcgcQAcgcAAgmQAAgmgcgbQgcgcgmAAQglAAgcAcg");
	this.shape.setTransform(772.1,127.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgcDSIAAkZIA5AAIAAEZgAgfiEQgOgNAAgSQAAgTAOgOQAOgNARAAQATAAAOANQANAOAAATQAAASgNANQgOAOgTAAQgRAAgOgOg");
	this.shape_1.setTransform(745.6,120.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhVCRIAAkZIA7AAIAAA6QATgiATgQQASgQAeAAQAJAAAQAFIgSA6IgWgDQgfABgTAUQgUAVAAAgIAACbg");
	this.shape_2.setTransform(728.2,127.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhoBoQgugsAAg8QAAg6AtgtQAugtA7AAQA8AAAuAsQAtAsAAA8QAAA7gsAsQgtAug7AAQg9AAgugtgAhAg+QgcAbAAAkQAAAkAdAbQAbAaAlAAQAmAAAbgbQAbgbAAgkQAAgkgbgaQgbgbgmAAQgmAAgbAbg");
	this.shape_3.setTransform(697.4,127.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ACLCRIAAi9QAAgugugBQgbAAgSAZQgSAYAAAiIAACZIg7AAIAAi1QAAg3gtAAQgbAAgTAXQgTAWAAAhIAACeIg7AAIAAkZIA7AAIAAAsQAVgbATgMQATgNAZAAQAgAAASAOQARAOANAfQAWgfAVgOQAVgOAbAAQAiAAAYAZQAZAaAAAiIAADMg");
	this.shape_4.setTransform(656.4,127.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhoBqQgqgrAAg/QgBg8ArgsQArgsA9AAQA9AAAsAtQArAtgBBFIjvAAQAHAsAdAUQAbAUAgAAQAzAAAigqIArAgQgxBAhSAAQg+AAgqgrgAhWgjICrAAQgdg6g4AAQg8AAgaA6g");
	this.shape_5.setTransform(615.6,127.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ah7g8IhJEWIg6AAIB3nEICHFEICIlEIB3HEIg6AAIhIkUIh9Elg");
	this.shape_6.setTransform(571.1,119.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhoBqQgrgrAAg/QAAg8AsgsQArgsA8AAQA9AAArAtQAsAtAABFIjxAAQAIAsAcAUQAcAUAgAAQAzAAAigqIArAgQgxBAhSAAQg+AAgqgrgAhWgjICrAAQgdg6g4AAQg8AAgaA6g");
	this.shape_7.setTransform(507.3,127.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhvC2QgngtAAg9QAAg9AogqQAogsA4AAQAfAAAeASQAcATARAeIAAjdIA7AAIAAG7Ig6AAIAAg7QgqBDhDAAQg4AAgngsgAg9AKQgcAbAAAnQAAAmAdAcQAcAcAkAAQAnAAAcgbQAcgbAAgoQAAgmgcgbQgbgbgnAAQgnAAgbAag");
	this.shape_8.setTransform(469.7,120);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AA+CRIAAi5QABgXgQgPQgPgPgWAAQgdgBgVAaQgWAZAAAjIAACZIg7AAIAAkZIA6AAIAAAvQAagcAVgNQAUgOAZAAQAmAAAcAZQAbAZAAAlIAADKg");
	this.shape_9.setTransform(416.4,127.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhoCuQgugtAAg9QAAg5AugsQAtgtA7AAQA8AAAtAsQAuArAAA7QAAA8gtAtQgsAug6AAQg+gBgugsgAhAAGQgcAbAAAlQAAAlAcAaQAcAaAmAAQAkAAAcgbQAbgbABglQAAgjgbgbQgcgaglAAQgmAAgcAagAgoh6IAthgIBRAAIhLBgg");
	this.shape_10.setTransform(383.9,120.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgcDSIAAkZIA6AAIAAEZgAgfiEQgOgNAAgSQAAgTAOgOQAOgNARAAQATAAAOANQANAOAAATQAAASgNANQgOAOgTAAQgRAAgOgOg");
	this.shape_11.setTransform(358.5,120.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AhIBpQgsgsAAg6QAAhBAsgrQArgrBBAAQAoAAApAVIAABCQgsgdgoABQgkgBgcAaQgcAaAAAjQAAAnAaAbQAaAaAlAAQAmAAAxgiIAABEQgtAagrAAQg5AAgsgsg");
	this.shape_12.setTransform(337.4,127.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AhuBpQgogrAAg+QAAg8AogsQAogsA1AAQAhAAAdASQAeASAQAeIAAg6IA8AAIAAEZIg8AAIAAg4QgrBAg/AAQg4AAgngsgAg7hAQgcAbAAAlQAAAnAbAcQAbAcAnAAQAmAAAcgcQAcgcAAgmQAAgmgcgbQgcgcgmAAQglAAgcAcg");
	this.shape_13.setTransform(304,127.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AA/CRIAAi5QgBgXgPgPQgOgPgXAAQgdgBgWAaQgVAZAAAjIAACZIg7AAIAAkZIA7AAIAAAvQAZgcAVgNQAUgOAZAAQAnAAAbAZQAbAZAAAlIAADKg");
	this.shape_14.setTransform(269.9,127.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgcDSIAAkZIA5AAIAAEZgAgfiEQgOgNAAgSQAAgTAOgOQANgNATAAQASAAANANQAOAOAAATQAAASgOANQgNAOgSAAQgTAAgNgOg");
	this.shape_15.setTransform(246.9,120.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AhHC7QglgYgSgxIA+AAQAcAtAwAAQAiAAAXgYQAXgYABgiIAAg1QgsA/hAAAQg2AAgogtQgogsAAg8QAAg9AngsQAmgrA2AAQBGAAApBDIAAg7IA5AAIAAENQABA8gpAqQgqAqg7AAQgqAAgmgYgAg7h/QgdAcAAAkQAAAnAcAcQAcAcAlAAQAoAAAcgcQAcgaAAgoQAAgngbgbQgdgbgoAAQgkAAgcAcg");
	this.shape_16.setTransform(219.1,133.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhuBpQgogrAAg+QAAg8AogsQAogsA1AAQAhAAAdASQAeASAQAeIAAg6IA8AAIAAEZIg8AAIAAg4QgrBAg/AAQg4AAgngsgAg7hAQgcAbAAAlQAAAnAbAcQAbAcAnAAQAmAAAcgcQAcgcAAgmQAAgmgcgbQgcgcgmAAQglAAgcAcg");
	this.shape_17.setTransform(180.8,127.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("Ah9DaIAAmzIBXAAQBJAAAuAjQAtAjAAA4QAAA4gwAlQgwAmhggBIAACzgAhCgMQBCgBAggSQAggTAAgoQAAgegYgXQgZgWhRAAg");
	this.shape_18.setTransform(150,120);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#333333").ss(1,1,1).p("EhHmgG9MCPNAAAIAAN7MiPNAAAg");
	this.shape_19.setTransform(450.3,126.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("EhHmAG+IAAt7MCPMAAAIAAN7g");
	this.shape_20.setTransform(450.3,126.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#454545").s().p("AhuBpQgogrAAg+QAAg7AogtQAogsA1AAQAhAAAdATQAeASAQAdIAAg6IA8AAIAAEZIg8AAIAAg4QgrBAg/AAQg4AAgngsgAg7hAQgcAbAAAlQAAAnAbAcQAbAcAnAAQAmAAAcgcQAcgcAAgmQAAgmgcgbQgcgcgmAAQglAAgcAcg");
	this.shape_21.setTransform(772.1,132.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#454545").s().p("AgcDSIAAkZIA5AAIAAEZgAgfiDQgOgOAAgTQAAgSAOgNQAOgOARAAQATAAAOAOQANANAAASQAAATgNAOQgOANgTAAQgRAAgOgNg");
	this.shape_22.setTransform(745.6,125.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#454545").s().p("AhVCRIAAkZIA7AAIAAA6QATgiATgQQASgQAeAAQAJAAAQAEIgSA8IgWgEQgfAAgTAWQgUAVAAAfIAACbg");
	this.shape_23.setTransform(728.2,132.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#454545").s().p("AhoBoQgugsAAg8QAAg6AtgsQAuguA7AAQA8AAAuAsQAtAtAAA7QAAA6gsAuQgtAtg7AAQg9AAgugtgAhAg+QgcAbAAAkQAAAkAdAaQAbAbAlAAQAmAAAbgbQAbgcAAgjQAAgkgbgbQgbgagmAAQgmAAgbAbg");
	this.shape_24.setTransform(697.4,132.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#454545").s().p("ACLCRIAAi8QAAgwguAAQgbAAgSAYQgSAYAAAkIAACYIg7AAIAAi1QAAg3gtAAQgbAAgTAXQgTAWAAAhIAACeIg7AAIAAkZIA7AAIAAArQAVgaATgMQATgNAZAAQAgAAASAOQARAOANAfQAWgfAVgOQAVgOAbAAQAiAAAYAZQAZAaAAAiIAADMg");
	this.shape_25.setTransform(656.4,132.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#454545").s().p("AhoBqQgqgsAAg+QgBg8ArgsQArgsA9AAQA9AAAsAtQArAsgBBGIjvAAQAHAsAdAUQAbAUAgAAQAzAAAigqIArAhQgxA/hSAAQg+AAgqgrgAhWgjICrAAQgdg6g4AAQg8AAgaA6g");
	this.shape_26.setTransform(615.6,132.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#454545").s().p("Ah7g8IhJEWIg6AAIB3nEICHFEICIlEIB3HEIg6AAIhIkUIh9Elg");
	this.shape_27.setTransform(571.1,125.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#454545").s().p("AhoBqQgrgsAAg+QAAg8AsgsQArgsA8AAQA9AAArAtQAsAsAABGIjxAAQAIAsAcAUQAcAUAgAAQAzAAAigqIArAhQgxA/hSAAQg+AAgqgrgAhWgjICrAAQgdg6g4AAQg8AAgaA6g");
	this.shape_28.setTransform(507.3,132.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#454545").s().p("AhvC2QgngtAAg9QAAg9AogqQAogsA4AAQAfAAAeASQAcATARAeIAAjdIA7AAIAAG7Ig6AAIAAg7QgqBDhDAAQg4AAgngsgAg9AKQgcAbAAAnQAAAmAdAcQAcAcAkAAQAnAAAcgbQAcgbAAgoQAAgmgcgbQgbgbgnAAQgnAAgbAag");
	this.shape_29.setTransform(469.7,125.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#454545").s().p("AA+CRIAAi6QABgWgQgPQgPgQgWAAQgdABgVAZQgWAZAAAkIAACYIg7AAIAAkZIA6AAIAAAvQAagcAVgOQAUgNAZAAQAmAAAcAZQAbAZAAAkIAADLg");
	this.shape_30.setTransform(416.4,132.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#454545").s().p("AhoCtQgugsAAg9QAAg6AugrQAtguA7ABQA8AAAtAsQAuArAAA7QAAA8gtAtQgsAtg6AAQg+AAgugtgAhAAHQgcAaAAAmQAAAjAcAbQAcAbAmAAQAkAAAcgcQAbgbABglQAAgjgbgbQgcgZglAAQgmAAgcAagAgoh7IAtheIBRAAIhLBeg");
	this.shape_31.setTransform(383.9,125.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#454545").s().p("AgcDSIAAkZIA6AAIAAEZgAgfiDQgOgOAAgTQAAgSAOgNQAOgOARAAQATAAAOAOQANANAAASQAAATgNAOQgOANgTAAQgRAAgOgNg");
	this.shape_32.setTransform(358.5,125.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#454545").s().p("AhIBpQgsgsAAg6QAAhAAsgsQArgrBBAAQAoAAApAVIAABCQgsgcgogBQgkAAgcAaQgcAaAAAjQAAAmAaAcQAaAaAlAAQAmAAAxgiIAABEQgtAagrAAQg5AAgsgsg");
	this.shape_33.setTransform(337.4,132.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#454545").s().p("AhuBpQgogrAAg+QAAg7AogtQAogsA1AAQAhAAAdATQAeASAQAdIAAg6IA8AAIAAEZIg8AAIAAg4QgrBAg/AAQg4AAgngsgAg7hAQgcAbAAAlQAAAnAbAcQAbAcAnAAQAmAAAcgcQAcgcAAgmQAAgmgcgbQgcgcgmAAQglAAgcAcg");
	this.shape_34.setTransform(304,132.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#454545").s().p("AA/CRIAAi6QgBgWgPgPQgOgQgXAAQgdABgWAZQgVAZAAAkIAACYIg7AAIAAkZIA7AAIAAAvQAZgcAVgOQAUgNAZAAQAnAAAbAZQAbAZAAAkIAADLg");
	this.shape_35.setTransform(269.9,132.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#454545").s().p("AgcDSIAAkZIA5AAIAAEZgAgfiDQgOgOAAgTQAAgSAOgNQANgOATAAQASAAANAOQAOANAAASQAAATgOAOQgNANgSAAQgTAAgNgNg");
	this.shape_36.setTransform(246.9,125.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#454545").s().p("AhHC7QglgYgSgxIA+AAQAcAtAwAAQAiAAAXgYQAXgYABgiIAAg1QgsA/hAAAQg2AAgogtQgogsAAg8QAAg9AngsQAmgrA2AAQBGAAApBDIAAg7IA5AAIAAENQABA8gpAqQgqAqg7AAQgqAAgmgYgAg7h/QgdAcAAAkQAAAnAcAcQAcAcAlAAQAoAAAcgcQAcgaAAgoQAAgngbgbQgdgbgoAAQgkAAgcAcg");
	this.shape_37.setTransform(219.1,139);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#454545").s().p("AhuBpQgogrAAg+QAAg7AogtQAogsA1AAQAhAAAdATQAeASAQAdIAAg6IA8AAIAAEZIg8AAIAAg4QgrBAg/AAQg4AAgngsgAg7hAQgcAbAAAlQAAAnAbAcQAbAcAnAAQAmAAAcgcQAcgcAAgmQAAgmgcgbQgcgcgmAAQglAAgcAcg");
	this.shape_38.setTransform(180.8,132.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#454545").s().p("Ah9DaIAAmzIBXAAQBJAAAuAjQAtAjAAA4QAAA4gwAlQgwAmhggBIAACzgAhCgMQBCgBAggSQAggTAAgoQAAgegYgXQgZgWhRAAg");
	this.shape_39.setTransform(150,125.1);

	this.btn_inicio = new lib.Símbolo12();
	this.btn_inicio.parent = this;
	this.btn_inicio.setTransform(438.1,637.6);
	new cjs.ButtonHelper(this.btn_inicio, 0, 1, 1);

	this.movieClip_2 = new lib.Símbolo2();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(698.5,637.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20,p:{y:126.7}},{t:this.shape_19,p:{y:126.7}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20,p:{y:129.6}},{t:this.shape_19,p:{y:129.6}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},23).to({state:[{t:this.shape_20,p:{y:126.7}},{t:this.shape_19,p:{y:126.7}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_20,p:{y:126.7}},{t:this.shape_19,p:{y:126.7}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.movieClip_2},{t:this.btn_inicio}]},49).wait(1));

	// Fondo
	this.instance_3 = new lib.wallpaper2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2,0,0.474,1.293);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgrA8IAKgVQAQAMALAAQAXAAABgeQgBgPgFgGQgGgGgMAAQgLAAgMALIgKgGIAAhHIBMAAIAAAWIg0AAIAAAZQAHgDAIAAQAVAAAMANQALAMAAAVQAAA3gyAAQgVAAgQgNg");
	this.shape_40.setTransform(239.8,543.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AACBIIAAhmIgcARIAAgYQAbgOAQgUIAKAAIAACPg");
	this.shape_41.setTransform(227.5,543);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AACBIIAAhmIgcARIAAgYQAbgOAQgUIAKAAIAACPg");
	this.shape_42.setTransform(215.9,543);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZALIAAgVIAzAAIAAAVg");
	this.shape_43.setTransform(206.8,544.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AglA2QgQgUAAghQAAgfASgWQASgVAcAAQAZAAAOAKIgKAVQgIgJgTAAQgRABgMAPQgLAOAAAWQAAAYALANQAKAOARAAQAUAAALgPIAMAUQgPARgeAAQgdAAgRgUg");
	this.shape_44.setTransform(197.1,543);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAaBIIglg7IgRgBIAAA8IgaAAIAAiOIARAAIAXgBQA2AAAAAqQAAANgIAKQgHAKgMAEIAqBAgAgcgwIAAAoIALABQAQAAAHgFQAHgEAAgNQAAgLgIgEQgHgEgRAAIgJAAg");
	this.shape_45.setTransform(185.7,542.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAjBJIgLgdIgwAAIgKAdIgcAAIA5iQIAKAAIA6CQgAgQAYIAhAAIgRg0g");
	this.shape_46.setTransform(172.4,542.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AguALQAAgZATgbQATgaAWgGIAOAOQgPAIgMAMQgKANgFAMQAKgFAHABQATAAANAMQAMAMAAAVQAAAVgNANQgMANgTAAQgxAAAAg/gAgUAbQAAAaAWAAQAIAAAGgHQAFgGAAgMQABgMgHgHQgFgHgJAAQgUAAgBAZg");
	this.shape_47.setTransform(183.7,517.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AACBIIAAhmIgcARIAAgYQAbgOAQgUIAKAAIAACPg");
	this.shape_48.setTransform(171.4,517.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AgLA0QgGgFAAgIQAAgHAGgFQAFgFAGAAQAIAAAEAFQAGAFAAAHQAAAIgGAFQgEAFgIAAQgGAAgFgFgAgLgaQgGgFAAgIQAAgHAGgFQAFgFAGAAQAIAAAEAFQAGAFAAAHQAAAIgGAFQgEAFgIAAQgGAAgFgFg");
	this.shape_49.setTransform(146.2,544.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AAjBJIgLgdIgwAAIgKAdIgcAAIA5iQIAKAAIA6CQgAgQAYIAhAAIgRg0g");
	this.shape_50.setTransform(136.4,542.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AgMBIIAAiOIAZAAIAACOg");
	this.shape_51.setTransform(127.3,543);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AAaBIIglg7IgQgBIAAA8IgbAAIAAiOIARAAIAXgBQA1AAAAAqQABANgIAKQgHAKgMAEIAqBAgAgbgwIAAAoIAKABQAQAAAHgFQAHgEAAgNQAAgLgIgEQgHgEgRAAIgIAAg");
	this.shape_52.setTransform(119.3,542.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AgtBIIAAiOIBbAAIAAAWIhBAAIAAAhIAuAAIAAAVIguAAIAAArIBAAAIAAAXg");
	this.shape_53.setTransform(107,543);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("AgNBIIAAh4IgtAAIAAgWIB1AAIAAAWIgvAAIAAB4g");
	this.shape_54.setTransform(94.8,543);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AAjBJIgLgdIgwAAIgKAdIgcAAIA5iQIAKAAIA6CQgAgQAYIAhAAIgRg0g");
	this.shape_55.setTransform(84.3,542.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AgDBIIgdhOIgQBNIgYAAIAdiOIANAAIAeBfIAfhfIANAAIAdCOIgYAAIgQhNIgcBOg");
	this.shape_56.setTransform(70.6,543.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#999999").s().p("AgLA0QgGgFAAgIQAAgHAGgFQAEgFAHAAQAHAAAFAFQAGAFgBAHQABAIgGAFQgFAFgHAAQgHAAgEgFgAgLgaQgGgFAAgIQAAgHAGgFQAEgFAHAAQAHAAAFAFQAGAFgBAHQABAIgGAFQgFAFgHAAQgHAAgEgFg");
	this.shape_57.setTransform(131.5,519.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("AguA2QgPgVgBgiQAAgeARgVQARgVAcAAQAeAAAQATQARATAAAiQgBAjgQATQgSAVgeAAQgdAAgPgUgAgaglQgJANAAAXQAAAZAIANQAJAOAQAAQASAAAKgNQAKgOAAgZQAAgygkABQgRAAgJANg");
	this.shape_58.setTransform(121,517.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#999999").s().p("AgvBIIAAiOIAfgBQAgAAAQALQAQAKAAAWQAAAwg6AAIgLAAIAAA0gAgVgwIAAAuIAKAAQAQAAAIgFQAJgGAAgNQAAgWgjgBIgIABg");
	this.shape_59.setTransform(108.5,517.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("AgnA8QgNgMAAgWIAAhiIAZAAIAABgQAAAMAHAHQAHAHANAAQAMAAAIgHQAIgHAAgMIAAhgIAZAAIAABiQAAAWgPAMQgOANgYAAQgZAAgOgNg");
	this.shape_60.setTransform(95.5,517.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("AAaBIIgmg7IgPgBIAAA8IgbAAIAAiOIAQAAIAYgBQA2AAgBAqQAAANgHAKQgHAKgMAEIAqBAgAgbgwIAAAoIALABQAPAAAGgFQAIgEAAgNQAAgLgIgEQgHgEgRAAIgIAAg");
	this.shape_61.setTransform(83.5,517.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AgoA2QgSgVAAghQAAgfATgWQAUgUAgAAQAYAAAQAOIgLAVQgEgEgJgFQgKgDgHAAQgUAAgMAOQgMAOAAAXQAAAXAMANQAMAOATAAQAOAAAJgHIAAgcIgUAAIAAgVIAtAAIAAA/QgJAHgOAFQgOAEgPAAQgdAAgSgUg");
	this.shape_62.setTransform(69.8,517.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_63.setTransform(341.1,464.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgNBLIAAhpIAaAAIAABpgAgLgsQgFgFAAgIQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgHABQgGgBgFgEg");
	this.shape_64.setTransform(334.5,462.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAZA1IgZgjIgYAjIgfAAIAog3IgkgyIAfAAIAUAdIAVgdIAeAAIgkAyIApA3g");
	this.shape_65.setTransform(326.5,464.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_66.setTransform(314.5,464.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgMBKIAAiTIAZAAIAACTg");
	this.shape_67.setTransform(305.6,462.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AApBIIgMgeIg5AAIgMAeIgcAAIA3iPIAbAAIA3CPgAgSAQIAlAAIgTgxg");
	this.shape_68.setTransform(295.9,463);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAVA3IAAgvQAAgSgCgGQgCgGgEgEQgEgDgHAAQgGAAgGAFQgGAGgCAKQgCAEABAQIAAArIgbAAIAAhqIAbAAIAAALQAJgIAHgDQAGgCAIAAQAQgBALAMQAJAJAAASIAABGg");
	this.shape_69.setTransform(276.9,464.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAOgQQAPgQAVAAQAIAAAJAEQAIADAIAIIAAgMIAaAAIAABpIgaAAIAAgLQgJAHgHAEQgIADgJAAQgUAAgPgQgAgTgVQgJAIABANQgBAOAJAJQAJAJALAAQAMAAAIgJQAJgJgBgOQABgNgJgJQgIgIgMAAQgMAAgIAJg");
	this.shape_70.setTransform(264,464.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgNBLIAAhpIAaAAIAABpgAgLgsQgFgFAAgIQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgHABQgGgBgFgEg");
	this.shape_71.setTransform(255.3,462.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgOBJIAAhTIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABTg");
	this.shape_72.setTransform(250,462.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_73.setTransform(242.3,464.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgNBLIAAhpIAaAAIAABpgAgLgsQgFgFAAgIQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAEgHABQgGgBgFgEg");
	this.shape_74.setTransform(235.7,462.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgcA3IAAhqIAXAAIAAAOQAEgJAFgEQAGgDAIAAQAFAAAGACIgJAXQgEgCgEAAQgGAAgEAHQgDAIAAAWIAAAEIAAAsg");
	this.shape_75.setTransform(230.4,464.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAVBKIAAgvQAAgSgCgHQgCgFgEgEQgEgDgHAAQgGAAgGAGQgGAEgCAJQgBAFAAARIAAArIgbAAIAAiTIAbAAIAAA0QAHgGAIgEQAHgDAIAAQAQAAALALQAJAJAAASIAABGg");
	this.shape_76.setTransform(220.9,462.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgvA2QgWgVAAghQAAgVAKgRQAKgQASgKQASgLAUAAQASAAAQAJQAQAHANANIgTATQgUgVgYAAQgUAAgOAPQgPANAAAUQAAAOAHALQAGALALAHQAMAGANABQAMgBAJgEQALgFAMgLIASATQgQAQgOAFQgPAHgRAAQghAAgVgWg");
	this.shape_77.setTransform(207.2,463);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgSATIASgrIATAJIgYAog");
	this.shape_78.setTransform(190.7,470);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_79.setTransform(183.5,464.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_80.setTransform(172.9,464.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgOBJIAAhTIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABTg");
	this.shape_81.setTransform(163.6,462.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAVA3IAAgvQAAgSgCgGQgCgGgEgEQgEgDgHAAQgGAAgGAFQgGAGgCAKQgCAEABAQIAAArIgbAAIAAhqIAbAAIAAALQAJgIAHgDQAGgCAIAAQAQgBALAMQAJAJAAASIAABGg");
	this.shape_82.setTransform(154.5,464.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_83.setTransform(142.1,464.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgbAvQgLgIgFgOQgCgKAAgYIAAgsIAbAAIAAAzQAAAOABAFQACAGAFADQAFAEAFAAQAHAAAEgDQAFgEACgGQACgEAAgOIAAg0IAaAAIAAAtQAAAagDALQgGAMgKAHQgLAGgQAAQgRAAgKgHg");
	this.shape_84.setTransform(129.7,465);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgjBIIAAiPIBGAAIAAAbIgrAAIAAAaIArAAIAAAZIgrAAIAABBg");
	this.shape_85.setTransform(119.3,463);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgsA1IAwhTIgoAAIAAgWIBQAAIguBTIAsAAIAAAWg");
	this.shape_86.setTransform(103.9,464.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgnBEQgQgQAAgYQAAgYAQgPQAQgQAXAAQAYAAAQAQQAQAPAAAaIAAAFIhVAAQACAMAIAGQAIAHALAAQAPAAALgKIAXAKQgJAMgLAGQgMAFgQAAQgYAAgQgPgAgSABQgFADgFAKIA5AAQgDgJgHgFQgIgFgKAAQgLAAgIAGgAgSgsIAWgmIAgAAIgkAmg");
	this.shape_87.setTransform(92.9,462.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgcA3IAAhqIAXAAIAAAOQAEgJAFgEQAGgDAIAAQAFAAAGACIgJAXQgEgCgEAAQgGAAgEAHQgDAIAAAWIAAAEIAAAsg");
	this.shape_88.setTransform(83.6,464.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_89.setTransform(73.7,464.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgqBIIAAiPIAdAAQAXAAAKAEQAKAFAHAKQAFAJABAOQAAAPgIAKQgIAJgOAEQgHACgVAAIAAA9gAgPgPIAJAAQAJAAAFgBQAEgCACgDQACgDAAgFQAAgJgGgDQgFgDgLAAIgJAAg");
	this.shape_90.setTransform(62,463);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgMBKIAAiTIAZAAIAACTg");
	this.shape_91.setTransform(377.2,403.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_92.setTransform(368.5,405.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgNBLIAAhpIAaAAIAABpgAgLgsQgFgGAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAGQgFAEgHAAQgGAAgFgEg");
	this.shape_93.setTransform(359.7,403.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAVA3IAAgvQAAgSgCgGQgCgHgEgDQgEgDgHAAQgGAAgGAGQgGAFgCAKQgBAEAAAQIAAArIgbAAIAAhpIAbAAIAAAKQAIgIAIgCQAGgDAIAAQAQAAALALQAJAJAAATIAABFg");
	this.shape_94.setTransform(351.3,405.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAPgQQAOgQAVAAQAJAAAIAEQAIADAIAIIAAgMIAaAAIAABpIgaAAIAAgLQgJAHgHAEQgIADgJAAQgUAAgPgQgAgTgVQgJAIAAANQAAAOAJAJQAIAJAMAAQAMAAAJgJQAHgJABgOQgBgNgHgJQgJgIgMAAQgMAAgIAJg");
	this.shape_95.setTransform(338.4,405.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Ag4BIIAAiPIAgAAQAfAAAPAIQAPAIAKARQAKASAAAWQAAARgFANQgGAOgKAKQgKAJgLADQgMAEgaAAgAgdAtIANAAQARAAAJgEQAIgFAGgKQAFgKAAgPQAAgWgMgMQgMgMgYAAIgKAAg");
	this.shape_96.setTransform(325.4,403.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgcA3IAAhpIAXAAIAAAMQAEgHAFgFQAGgDAIAAQAFAAAGADIgJAWQgEgCgEAAQgGAAgEAHQgDAIAAAVIAAAGIAAArg");
	this.shape_97.setTransform(309.6,405.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgmAoQgRgRABgXQgBgYATgQQAPgPAVAAQAOAAANAIQAOAHAHANQAIANgBAOQABAPgIANQgHANgNAIQgNAHgPAAQgXAAgPgQgAgUgVQgIAJAAAMQAAAOAIAJQAIAIAMAAQANAAAHgJQAJgIAAgOQAAgNgJgIQgHgJgNAAQgMAAgIAJg");
	this.shape_98.setTransform(299.7,405.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgOBJIAAhTIgNAAIAAgWIANAAIAAgoIAbAAIAAAoIAPAAIAAAWIgPAAIAABTg");
	this.shape_99.setTransform(290.4,403.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgmAnQgPgQAAgWQAAgPAHgNQAIgNANgHQAOgIARAAQAPAAANAHQAMAGAIALIgVANQgHgHgGgCQgGgDgIAAQgPAAgIAJQgKAJAAANQAAANAJAJQAJAJANAAQATAAAKgNIAVAPQgSAWgfAAQgbAAgQgRg");
	this.shape_100.setTransform(280.8,405.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgnBEQgQgQAAgYQAAgYAQgPQAQgQAXAAQAYAAAQAQQAQAPAAAaIAAAFIhVAAQACAMAIAGQAIAHALAAQAPAAALgKIAXAKQgJAMgLAGQgMAFgQAAQgYAAgQgPgAgSABQgFADgFAKIA5AAQgDgJgHgFQgIgFgKAAQgLAAgIAGgAgSgsIAWgmIAgAAIgkAmg");
	this.shape_101.setTransform(268.1,402.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAYBIIAAg/IgvAAIAAA/IgcAAIAAiPIAcAAIAAA2IAvAAIAAg2IAcAAIAACPg");
	this.shape_102.setTransform(254.9,403.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgSATIASgrIATAJIgYAog");
	this.shape_103.setTransform(239.5,410.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgmAoQgRgRABgXQAAgYASgQQAPgPAVAAQAOAAANAIQAOAHAHANQAIANgBAOQABAPgIANQgHANgNAIQgNAHgPAAQgXAAgPgQgAgUgVQgIAJAAAMQAAAOAIAJQAIAIAMAAQAMAAAIgJQAJgIAAgOQAAgNgJgIQgIgJgMAAQgLAAgJAJg");
	this.shape_104.setTransform(230.5,405.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AA2A3IAAg2QAAgSgEgGQgFgGgIgBQgHAAgGAFQgFADgDAIQgCAGAAAOIAAAxIgaAAIAAg0QAAgNgCgGQgDgHgEgDQgEgDgGgBQgHAAgFAFQgFAEgDAHQgDAHAAAOIAAAwIgaAAIAAhpIAaAAIAAALQAHgHAIgEQAJgDAKAAQAKAAAIAEQAHAFAEAKQAHgKAJgFQAJgEALAAQAMgBAIAGQAJAFAEAJQADAIAAATIAAA+g");
	this.shape_105.setTransform(214.7,405.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAOgQQAPgQAVAAQAJAAAIAEQAJADAGAIIAAgMIAbAAIAABpIgbAAIAAgLQgHAHgIAEQgIADgJAAQgUAAgPgQgAgTgVQgIAIAAANQAAAOAIAJQAJAJAKAAQANAAAIgJQAJgJgBgOQABgNgJgJQgIgIgNAAQgLAAgIAJg");
	this.shape_106.setTransform(198.4,405.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgmAnQgQgQAAgWQABgPAHgNQAHgNAOgHQAPgIAQAAQAQAAAMAHQANAGAHALIgVANQgHgHgGgCQgGgDgIAAQgOAAgKAJQgJAJAAANQAAANAJAJQAJAJAOAAQARAAALgNIAUAPQgRAWgfAAQgbAAgQgRg");
	this.shape_107.setTransform(185.6,405.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgcA3IAAhpIAXAAIAAAMQAEgHAFgFQAGgDAIAAQAFAAAGADIgJAWQgEgCgEAAQgGAAgEAHQgDAIAAAVIAAAGIAAArg");
	this.shape_108.setTransform(176.4,405.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgnBEQgPgQAAgYQAAgZAOgPQAPgPAVAAQAJAAAIADQAJAEAGAHIAAgLIAbAAIAABpIgbAAIAAgLQgHAHgIADQgIADgJAAQgUAAgPgPgAgTAFQgIAJAAAOQAAANAIAJQAJAJALAAQAMAAAIgJQAJgIgBgPQABgNgJgJQgIgIgMAAQgMAAgIAIgAgPgsIAXgmIAfAAIgkAmg");
	this.shape_109.setTransform(166,402.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgwA2QgUgVgBghQAAgVAKgQQAJgRATgKQASgKAUAAQARgBARAJQARAHAMANIgUATQgTgVgYAAQgUAAgOAOQgOAOgBAUQABAOAGALQAGAMAMAGQALAHANAAQAMAAAKgFQAKgFALgMIATAUQgQAPgOAHQgOAFgSABQghAAgWgWg");
	this.shape_110.setTransform(152,403.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgrA1IAuhSIgnAAIAAgXIBRAAIgwBTIAsAAIAAAWg");
	this.shape_111.setTransform(133.9,405.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_112.setTransform(122.9,405.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAVA3IAAgvQAAgSgCgGQgBgHgFgDQgEgDgGAAQgIAAgFAGQgGAFgCAKQgBAEgBAQIAAArIgaAAIAAhpIAaAAIAAAKQAKgIAHgCQAGgDAIAAQAQAAALALQAJAJAAATIAABFg");
	this.shape_113.setTransform(110.5,405.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgVBSIAAhpIAZAAIAABpgAgagrIAXgmIAfAAIgjAmg");
	this.shape_114.setTransform(102.9,402.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgNBJIAAhTIgOAAIAAgWIAOAAIAAgoIAaAAIAAAoIAPAAIAAAWIgPAAIAABTg");
	this.shape_115.setTransform(96.8,403.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgcA3IAAhpIAXAAIAAAMQAEgHAFgFQAGgDAIAAQAFAAAGADIgJAWQgEgCgEAAQgGAAgEAHQgDAIAAAVIAAAGIAAArg");
	this.shape_116.setTransform(90.8,405.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAOgQQAPgQAVAAQAIAAAJAEQAIADAHAIIAAgMIAbAAIAABpIgbAAIAAgLQgIAHgHAEQgIADgJAAQgUAAgPgQgAgTgVQgJAIABANQgBAOAJAJQAJAJALAAQAMAAAIgJQAJgJgBgOQABgNgJgJQgIgIgMAAQgMAAgIAJg");
	this.shape_117.setTransform(80.4,405.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AA6BIIgPhaIgfBaIgXAAIgehaIgQBaIgaAAIAZiPIAaAAIAgBjIAihjIAaAAIAZCPg");
	this.shape_118.setTransform(65.1,403.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAPgQQAOgQAVAAQAIAAAJAEQAJADAGAIIAAgMIAbAAIAABpIgbAAIAAgLQgHAHgIAEQgIADgIAAQgVAAgPgQgAgTgVQgIAIgBANQABAOAIAJQAIAJALAAQANAAAJgJQAHgJAAgOQAAgNgHgJQgJgIgNAAQgLAAgIAJg");
	this.shape_119.setTransform(369.6,343.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAVA2IAAguQAAgSgCgHQgBgGgFgDQgEgDgGAAQgIAAgFAGQgGAFgCAJQgBAGgBAPIAAAqIgaAAIAAhoIAaAAIAAAKQAKgHAHgDQAHgEAHAAQAQAAALAMQAJAJAAATIAABEg");
	this.shape_120.setTransform(357.3,343.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAPgQQAOgQAVAAQAIAAAJAEQAJADAGAIIAAgMIAbAAIAABpIgbAAIAAgLQgHAHgIAEQgIADgIAAQgVAAgPgQgAgTgVQgIAIgBANQABAOAIAJQAIAJALAAQANAAAJgJQAHgJAAgOQAAgNgHgJQgJgIgNAAQgLAAgIAJg");
	this.shape_121.setTransform(344.4,343.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgNBLIAAhpIAaAAIAABpgAgLgsQgFgGAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAGQgFAEgHAAQgGAAgFgEg");
	this.shape_122.setTransform(335.7,341.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgMBKIAAiTIAZAAIAACTg");
	this.shape_123.setTransform(330.8,341.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgMBLIAAhpIAZAAIAABpgAgLgsQgFgGAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAGQgFAEgHAAQgGAAgFgEg");
	this.shape_124.setTransform(326.1,341.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AggBIIAAiPIAbAAIAAB1IAmAAIAAAag");
	this.shape_125.setTransform(319.9,342);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAVA2IAAguQAAgSgCgHQgBgGgFgDQgEgDgGAAQgIAAgFAGQgGAFgCAJQgBAGgBAPIAAAqIgaAAIAAhoIAaAAIAAAKQAKgHAHgDQAHgEAHAAQAQAAALAMQAJAJAAATIAABEg");
	this.shape_126.setTransform(303.3,343.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_127.setTransform(290.9,343.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_128.setTransform(278.1,343.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAVBKIAAgvQAAgSgCgHQgCgFgEgEQgEgDgHAAQgHAAgFAGQgGAEgCAJQgCAFAAARIAAArIgaAAIAAiTIAaAAIAAA0QAJgGAHgEQAHgDAJAAQAPAAALALQAJAJAAASIAABGg");
	this.shape_129.setTransform(265.7,341.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgMBKIAAiTIAZAAIAACTg");
	this.shape_130.setTransform(257.2,341.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgOBJIAAhTIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABTg");
	this.shape_131.setTransform(252,341.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAPgQQAOgQAVAAQAJAAAIAEQAIADAIAIIAAgMIAaAAIAABpIgaAAIAAgLQgIAHgIAEQgIADgIAAQgVAAgPgQgAgTgVQgJAIAAANQAAAOAJAJQAJAJAKAAQANAAAJgJQAHgJABgOQgBgNgHgJQgJgIgNAAQgLAAgIAJg");
	this.shape_132.setTransform(242,343.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAUBIIgshAIAABAIgbAAIAAiPIAbAAIAAAyIAmgyIAhAAIgxBAIA2BPg");
	this.shape_133.setTransform(230.1,342);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgSATIASgrIATAJIgYAog");
	this.shape_134.setTransform(214.7,349);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgnAoQgQgRAAgXQAAgYASgQQARgPAUAAQAPAAANAIQANAHAIANQAGANABAOQgBAPgGANQgIANgNAIQgNAHgPAAQgWAAgRgQgAgUgVQgIAJAAAMQAAAOAIAJQAIAIAMAAQAMAAAJgJQAIgIAAgOQAAgNgIgIQgJgJgMAAQgMAAgIAJg");
	this.shape_135.setTransform(205.7,343.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAVA2IAAguQAAgSgCgHQgBgGgFgDQgEgDgGAAQgIAAgFAGQgGAFgCAJQgBAGgBAPIAAAqIgaAAIAAhoIAaAAIAAAKQAKgHAHgDQAGgEAIAAQAQAAALAMQAJAJAAATIAABEg");
	this.shape_136.setTransform(193.3,343.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAOgQQAPgQAVAAQAJAAAIAEQAJADAGAIIAAgMIAbAAIAABpIgbAAIAAgLQgHAHgIAEQgIADgJAAQgUAAgPgQgAgTgVQgIAIAAANQAAAOAIAJQAJAJAKAAQANAAAIgJQAJgJgBgOQABgNgJgJQgIgIgNAAQgLAAgIAJg");
	this.shape_137.setTransform(180.4,343.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgNBJIAAhTIgOAAIAAgWIAOAAIAAgoIAaAAIAAAoIAPAAIAAAWIgPAAIAABTg");
	this.shape_138.setTransform(171.2,341.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAVA2IAAguQAAgSgCgHQgCgGgEgDQgEgDgGAAQgIAAgFAGQgGAFgCAJQgCAGAAAPIAAAqIgaAAIAAhoIAaAAIAAAKQAJgHAIgDQAGgEAIAAQAQAAALAMQAJAJAAATIAABEg");
	this.shape_139.setTransform(162.1,343.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgmAoQgQgRgBgXQABgYARgQQARgPAUAAQAOAAANAIQAOAHAIANQAGANAAAOQAAAPgGANQgIANgNAIQgNAHgPAAQgWAAgQgQgAgUgVQgIAJAAAMQAAAOAIAJQAIAIAMAAQANAAAIgJQAIgIAAgOQAAgNgIgIQgIgJgNAAQgLAAgJAJg");
	this.shape_140.setTransform(149.7,343.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AA6BIIgPhaIgfBaIgXAAIgehaIgQBaIgaAAIAZiPIAaAAIAgBjIAihjIAbAAIAYCPg");
	this.shape_141.setTransform(134.3,342);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgnAoQgPgRAAgXQgBgYATgQQAPgPAVAAQAPAAANAIQANAHAHANQAIANgBAOQABAPgIANQgHANgNAIQgNAHgPAAQgWAAgRgQgAgUgVQgIAJAAAMQAAAOAIAJQAIAIAMAAQANAAAHgJQAJgIAAgOQAAgNgJgIQgHgJgNAAQgLAAgJAJg");
	this.shape_142.setTransform(113.3,343.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgNBJIAAhTIgOAAIAAgWIAOAAIAAgoIAaAAIAAAoIAPAAIAAAWIgPAAIAABTg");
	this.shape_143.setTransform(104,341.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgmAoQgRgRABgXQgBgYATgQQAPgPAVAAQAOAAANAIQAOAHAHANQAIANgBAOQABAPgIANQgHANgNAIQgNAHgPAAQgXAAgPgQgAgUgVQgIAJAAAMQAAAOAIAJQAIAIAMAAQANAAAHgJQAJgIAAgOQAAgNgJgIQgHgJgNAAQgLAAgJAJg");
	this.shape_144.setTransform(94.5,343.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgmAnQgPgQAAgWQgBgPAIgNQAHgNAPgHQAOgIAPAAQAQAAANAHQAMAGAJALIgXANQgGgHgGgCQgGgDgJAAQgOAAgIAJQgKAJAAANQAAANAJAJQAJAJANAAQASAAAKgNIAWAPQgSAWgfAAQgbAAgQgRg");
	this.shape_145.setTransform(81.6,343.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_146.setTransform(70.7,343.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgmBIIAAiPIBNAAIAAAbIgyAAIAAAaIAyAAIAAAZIgyAAIAAAmIAyAAIAAAbg");
	this.shape_147.setTransform(61.6,342);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAVA2IAAguQAAgSgCgHQgCgFgEgEQgEgDgHAAQgGAAgGAGQgGAFgCAJQgCAGABAPIAAAqIgbAAIAAhoIAbAAIAAAKQAJgHAHgDQAGgEAIAAQAQABALAKQAJAKAAATIAABEg");
	this.shape_148.setTransform(363.3,287.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgnAoQgPgRAAgXQgBgYATgQQAPgPAVAAQAPAAANAIQANAHAHANQAIANgBAOQABAPgIANQgHANgNAIQgNAHgPAAQgWAAgRgQgAgUgVQgIAJAAAMQAAAOAIAJQAIAIAMAAQANAAAHgJQAJgIAAgOQAAgNgJgIQgHgJgNAAQgLAAgJAJg");
	this.shape_149.setTransform(350.9,287.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_150.setTransform(339.9,287.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgMBKIAAiTIAZAAIAACTg");
	this.shape_151.setTransform(333.2,285.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgNBLIAAhpIAaAAIAABpgAgLgtQgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAIgFAEQgFAGgHgBQgGABgFgGg");
	this.shape_152.setTransform(328.5,285.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgnA8QgPgQAAgZQAAgXAPgQQAOgQAVAAQAIABAJADQAJADAGAIIAAg1IAbAAIAACSIgbAAIAAgLQgHAIgIADQgIADgIAAQgVAAgPgPgAgTgCQgIAHAAAOQAAAOAIAJQAIAJALAAQANAAAJgJQAHgIAAgPQAAgNgHgIQgJgJgNAAQgLAAgIAJg");
	this.shape_153.setTransform(319.2,286);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgmBIIAAiPIBNAAIAAAbIgyAAIAAAaIAyAAIAAAZIgyAAIAAAmIAyAAIAAAbg");
	this.shape_154.setTransform(308,286.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAVA2IAAguQAAgSgCgHQgCgFgEgEQgEgDgHAAQgHAAgFAGQgGAFgCAJQgCAGAAAPIAAAqIgaAAIAAhoIAaAAIAAAKQAJgHAIgDQAGgEAIAAQAQABALAKQAJAKAAATIAABEg");
	this.shape_155.setTransform(290.9,287.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAPgQQAOgQAVAAQAJAAAIAEQAIADAIAIIAAgMIAaAAIAABpIgaAAIAAgLQgIAHgIAEQgIADgIAAQgVAAgPgQgAgTgVQgJAIAAANQAAAOAJAJQAJAJAKAAQANAAAJgJQAHgJABgOQgBgNgHgJQgJgIgNAAQgLAAgIAJg");
	this.shape_156.setTransform(278,287.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgMBLIAAhpIAZAAIAABpgAgLgtQgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAIgFAEQgFAGgHgBQgGABgFgGg");
	this.shape_157.setTransform(269.3,285.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgNBJIAAhTIgOAAIAAgWIAOAAIAAgoIAaAAIAAAoIAPAAIAAAWIgPAAIAABTg");
	this.shape_158.setTransform(264,286);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AglAmIARgSQAEAFAHAEQAGADAEAAQAFAAADgCQAEgDAAgDQAAgGgMgGIgIgFQgagMAAgTQAAgNAKgJQAKgJAOAAQAKAAAJAFQAJAEAHAJIgRAQQgKgKgIAAQgDAAgDACQgDACAAADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAHAFIAKAFQAPAHAGAHQAGAIAAALQAAAOgLAKQgKAJgRAAQgXAAgOgSg");
	this.shape_159.setTransform(256.3,287.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgMBLIAAhpIAZAAIAABpgAgLgtQgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAIgFAEQgFAGgHgBQgGABgFgGg");
	this.shape_160.setTransform(249.7,285.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgcA2IAAhoIAXAAIAAAMQAEgIAFgDQAGgFAIAAQAFAAAGAEIgJAWQgEgCgEAAQgGAAgEAIQgDAHAAAVIAAAGIAAAqg");
	this.shape_161.setTransform(244.4,287.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgvA3QgWgWAAghQAAgUAKgRQAKgRASgKQASgLAUAAQASABAQAHQAQAIANAOIgTASQgUgVgYAAQgUAAgOAPQgPAOAAATQAAAOAHAMQAGAKAMAHQALAHANgBQAMABAJgFQALgEAMgNIASAUQgQAPgOAHQgPAFgRAAQghAAgVgUg");
	this.shape_162.setTransform(233.2,286.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgSATIASgrIATAJIgYAog");
	this.shape_163.setTransform(216.7,293.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAOgQQAPgQAVAAQAIAAAJAEQAIADAIAIIAAgMIAaAAIAABpIgaAAIAAgLQgJAHgHAEQgIADgJAAQgUAAgPgQgAgTgVQgJAIABANQgBAOAJAJQAJAJALAAQAMAAAIgJQAJgJgBgOQABgNgJgJQgIgIgMAAQgMAAgIAJg");
	this.shape_164.setTransform(207.2,287.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAVA2IAAguQAAgSgCgHQgCgFgEgEQgEgDgHAAQgGAAgGAGQgGAFgCAJQgCAGABAPIAAAqIgbAAIAAhoIAbAAIAAAKQAIgHAIgDQAHgEAHAAQAQABALAKQAJAKAAATIAABEg");
	this.shape_165.setTransform(194.9,287.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgMBLIAAhpIAZAAIAABpgAgLgtQgFgFAAgHQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAIgFAEQgFAGgHgBQgGABgFgGg");
	this.shape_166.setTransform(186.5,285.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgnA8QgPgQAAgZQAAgXAPgQQAOgQAVAAQAJABAIADQAIADAIAIIAAg1IAaAAIAACSIgaAAIAAgLQgIAIgIADQgIADgIAAQgVAAgPgPgAgTgCQgJAHAAAOQAAAOAJAJQAJAJAKAAQANAAAJgJQAHgIABgPQgBgNgHgIQgJgJgNAAQgLAAgIAJg");
	this.shape_167.setTransform(177.2,286);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_168.setTransform(164.5,287.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AA6BIIgPhaIgfBaIgXAAIgehaIgQBaIgbAAIAZiPIAbAAIAhBjIAhhjIAaAAIAYCPg");
	this.shape_169.setTransform(149.1,286.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgnAoQgPgQAAgYQAAgXAPgQQAOgQAVAAQAJAAAIAEQAJADAGAIIAAgMIAbAAIAABpIgbAAIAAgLQgHAHgIAEQgIADgIAAQgVAAgPgQgAgTgVQgJAIAAANQAAAOAJAJQAIAJALAAQANAAAJgJQAHgJABgOQgBgNgHgJQgJgIgNAAQgLAAgIAJg");
	this.shape_170.setTransform(127.6,287.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgNBJIAAhTIgOAAIAAgWIAOAAIAAgoIAaAAIAAAoIAPAAIAAAWIgPAAIAABTg");
	this.shape_171.setTransform(118.4,286);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgXQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAaIAAAFIhVAAQACALAIAHQAIAHALAAQAPAAALgLIAXALQgJAMgLAFQgMAGgQAAQgYAAgQgQgAgSgaQgFAEgFAKIA5AAQgDgJgHgGQgIgFgKAAQgLAAgIAGg");
	this.shape_172.setTransform(108.9,287.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgcAvQgKgIgFgOQgDgKAAgYIAAgsIAcAAIAAAzQgBAOACAFQACAGAFADQAFAEAFAAQAHAAAEgDQAFgEACgGQACgEAAgOIAAg0IAaAAIAAAtQAAAagDALQgGAMgLAHQgKAGgQAAQgRAAgLgHg");
	this.shape_173.setTransform(96.5,288.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgZBHQgLgDgHgIQgHgIgEgKIAdAAQAEAEAGACQAHADAIAAQAKAAAGgEQAHgDADgFQACgGAAgMQgHAHgIADQgHADgJAAQgVAAgPgQQgPgPAAgXQAAgZAQgPQAOgOAUAAQAIAAAIADQAIAEAIAHIAAgLIAbAAIAABaQAAAagLANQgPARgdAAQgPAAgKgEgAgTgpQgIAJAAAMQAAAOAIAHQAIAJAMAAQAMAAAJgJQAIgHAAgNQAAgOgIgIQgJgIgMAAQgMAAgIAIg");
	this.shape_174.setTransform(83.6,289.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgcA2IAAhoIAXAAIAAAMQAEgIAFgDQAGgFAIAAQAFAAAGAEIgJAWQgEgCgEAAQgGAAgEAIQgDAHAAAVIAAAGIAAAqg");
	this.shape_175.setTransform(74.4,287.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AApBIIgMgeIg5AAIgMAeIgcAAIA3iPIAbAAIA3CPgAgSAQIAlAAIgTgxg");
	this.shape_176.setTransform(63.5,286.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#999999").s().p("AggCaQgNgNAAgUQAAgSANgNQAOgOASAAQATAAANAOQAOANAAASQAAAUgOANQgNAOgTAAQgSAAgOgOgAgghYQgNgNAAgUQAAgTANgNQAOgOASAAQATAAANAOQAOANAAATQAAAUgOANQgNANgTAAQgSAAgOgNg");
	this.shape_177.setTransform(367.4,240.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#999999").s().p("AhwBxIAxg1QAOAQATALQATAJAOAAQAQAAAJgHQAKgIAAgKQAAgSgjgSIgagOQhNgmAAg6QAAgmAdgbQAdgbAsAAQAfAAAcAPQAbANATAZIgxAyQgegegZAAQgMAAgIAGQgIAFAAAJQAAAHAFAFQAFAFASAKIAdAOQAvAXARAWQARAYAAAhQAAAqgfAcQgfAcg0ABQhFAAgqg3g");
	this.shape_178.setTransform(345.4,240.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#999999").s().p("Ah3B4QgvgvAAhHQAAhIAvgwQAvgwBHgBQBKABAvAwQAvAwAABOIAAAQIkAAAQAGAhAYAVQAYATAkABQAtgBAhgfIBDAgQgZAjgjASQgkARgwAAQhKAAgvgwgAg4hQQgQALgNAfICsAAQgIgcgXgQQgXgRgfAAQghAAgZATg");
	this.shape_179.setTransform(313.5,240.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#999999").s().p("AgqDaIAAj5IgpAAIAAhEIApAAIAAh2IBPAAIAAB2IAvAAIAABEIgvAAIAAD5g");
	this.shape_180.setTransform(285.5,234.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#999999").s().p("AA+CkIAAiMQAAg4gFgTQgFgTgNgJQgMgKgTAAQgXAAgSAQQgRARgHAcQgDAPAAAxIAACAIhQAAIAAk+IBQAAIAAAhQAbgYAWgJQAVgIAXgBQAvABAiAhQAbAcAAA3IAADSg");
	this.shape_181.setTransform(258.4,239.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#999999").s().p("Ah3B4QgtgwAAhHQAAhJAsgvQArgwA+AAQAcAAAZAMQAaAKAVAWIAAgjIBQAAIAAE+IhQAAIAAgiQgYAWgXAKQgYAKgaAAQg+gBgtgvgAg8hDQgYAbAAAoQAAApAZAbQAZAaAjAAQAmAAAZgZQAYgbAAgqQAAgpgYgaQgZgZgmAAQgkAAgZAZg");
	this.shape_182.setTransform(219.7,240.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#999999").s().p("AhVCkIAAk+IBFAAIAAAoQALgYASgMQASgNAWAAQAQAAARAJIgZBFQgOgIgKAAQgSAAgNAYQgLAWAABCIAAAPIAACCg");
	this.shape_183.setTransform(192.1,239.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#999999").s().p("AhNDWQgggMgWgWQgWgXgLggIBZAAQAMANARAHQATAGAZABQAfgBAUgJQAUgKAIgQQAIgQAAgmQgVAUgXAKQgYAJgbAAQhBAAgsguQgtguAAhHQABhMAuguQArgpA7AAQAaAAAZALQAYAKAZAXIAAgjIBQAAIAAEPQAABRghAmQgrA0hZAAQguAAgfgMgAg7h9QgZAZAAAnQAAAnAaAZQAZAaAlgBQAkAAAZgZQAYgXAAgpQAAgngYgZQgZgZgmAAQglAAgYAZg");
	this.shape_184.setTransform(160.9,246.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#999999").s().p("Ah3B4QgvgvAAhHQAAhIAvgwQAvgwBHgBQBKABAvAwQAvAwAABOIAAAQIkAAAQAGAhAYAVQAYATAkABQAtgBAhgfIBDAgQgZAjgjASQgkARgwAAQhKAAgvgwgAg4hQQgQALgNAfICsAAQgIgcgXgQQgXgRgfAAQghAAgZATg");
	this.shape_185.setTransform(122.7,240.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#999999").s().p("AgqDaIAAj5IgpAAIAAhEIApAAIAAh2IBPAAIAAB2IAvAAIAABEIgvAAIAAD5g");
	this.shape_186.setTransform(94.7,234.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#999999").s().p("AA+CkIAAiMQAAg4gFgTQgFgTgNgJQgMgKgTAAQgXAAgSAQQgRARgHAcQgDAPAAAxIAACAIhQAAIAAk+IBQAAIAAAhQAbgYAWgJQAVgIAXgBQAvABAiAhQAbAcAAA3IAADSg");
	this.shape_187.setTransform(67.6,239.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#999999").s().p("AgoDYIAAmuIBRAAIAAGug");
	this.shape_188.setTransform(41,234.7);

	this.text = new cjs.Text("", "50px 'TwCenMT-Bold'", "#999999");
	this.text.lineHeight = 56;
	this.text.parent = this;
	this.text.setTransform(110.1,514.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AlSNxIgVgEQgKgDgJAEQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAIAAgCIABgCQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAQAMgEANADIAUAEQAIABAIgCIABAAIATgBIAVgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAAIgBADQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgUABIgTABIgMABIgHAAgAmxNvIAAAAQgJgCgKACIAAAAQgMACgLgEIABAAQgJgDgIAAIgUACIgVACQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAAAIABgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAUgCIAVgCQAKAAAKAEIAAAAQAIADAJgCIAAAAQAMgCALACIAAABQAKACALgBIAAAAQALgBAFgCQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAABABIAAACIAAACQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQgGADgOABIgGAAQgJAAgIgCgAo0NwQgHgCgLABQgMABgKgBQgKgBgIABQgKABgMAAQgNAAgMgBIgPgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIARABIAAAAQALABAMAAQAMAAAIgBIABAAQAJgBALABQAJABALgBQANgBAJACQAHABAIgDQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAIAAACIAAACQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgIACgHAAIgHAAgAHrNuQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIgBgCIAAgCQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAJADAIgBIAVgCIABAAQAKAAAJgCIABgBQAMgCAJADQAJACAKAAIAAAAIATAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAAIgBADQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgTAAQgMAAgJgDQgIgCgJACIAAAAQgLADgLAAIgUACIgHAAQgIAAgIgCgABiNvIgBAAIgWgDIgSgBQgJAAgLADQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBgBAAIAAgBIABgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAMgDAKAAIAUABIAAAAIAWADIAAAAQAKACAGgCIAAAAQAIgCALABIAAAAQAKACALgBIAVgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgUABQgNABgLgCQgIgBgGACIAAAAQgEABgGAAIgKgBgAE0NvIgTgBIgUAAIgTAAIgTABQgLABgLgBIgUgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAVABIAAAAQAKABAKgBIAAAAIATgBIAUAAIAUAAQAKAAAKABQAKACAKgCIATgCIAAAAQAJgBANACQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADIAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgMgCgIABIgBAAIgSACIgLABIgLgBgAgmNvIgWgCQgKAAgHgBIAAAAQgGgCgLACQgMACgJAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAIAAAMgCIAAAAQAOgCAGACQAGABAJAAIAAAAIAXACQAMABAKgBIAAAAQAKAAAHgCQAKgCANADQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAIABADIAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgLgDgIACQgIACgLAAIgIABIgPgBgAGkNvIgTgCIgUABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAUgBIAAAAQAKAAAKACQAKABAJgCIAWgDIAAAAQAOgBAIAFQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAABIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgGgDgKABIAAAAIgVADIgNABIgJAAgAr0NsIAAAAQgHgBgNABIgTACQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAIAAgBIABgDQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAUgCQAPgBAIABIAAABQAIABAJAAIABAAQAJAAAJgCIAAgBQALgCANAFQAAAAABABQAAAAABAAQAAAAAAABQAAAAABABIAAACIAAACQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgKgEgIABIAAAAQgJADgLAAIgEAAQgJAAgHgCgAkONtQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAAAIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQALgBAJAAQAJABAJgCIABgBQALgCAMACIAAABQAKACAHgCIABAAQAKgCAMACQAJACAGgBIABAAQAIgDAPAEQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAIABADIAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgMgEgHACIABAAQgIADgNgDQgKgCgJACIABAAQgKACgMgDQgKgCgJACIAAAAQgLADgLgBIgSABIgBAAIgDgBgAs8NsIgUgCQgKgBgLADIABAAQgNAEgLgFQgLgFgGgFIAAAAQgGgGgGgKQgGgJgBgMQgBgIgEgHQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAGAJABALQABAKAEAHQAFAIAFAFIABAAQAFAFAJAEQAIADAJgDIAAAAQAMgDAMABIAVACQAJACAJAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAQgKAAgKgCgAJwNtQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgBIAAgDQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAIARgGQALgDAIgEIAAgBQAHgEAFgJQAEgKAAgHIgBgTIAAAAQAAgLACgKIAAAAQADgIgDgJQgDgMAGgLQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAIACAAIACAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgEAIACAIQADAMgDAKIAAAAQgCAJAAAKIAAAAIABATQABAJgGAMQgHANgKAFIABAAQgJAFgMAEIgRAFIgBAAIgDAAgAuiMiQgBgBAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQACgGgBgKIgBgWIAAAAQAAgLgCgGIAAgBQgBgIABgOIAAAAIAEgWQACgHgBgLIAAAAIgCgTIgCgUIAAgBIABgWQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIADgBIABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAVIACATIAAAAIACAUIAAABQABAMgCAJIgEAUQgBAMABAHIAAAAQACAIAAAMIAAABIABAUQABAMgCAHQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgDABIgBAAgAKrLiQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgGgMADgLIAAAAQACgJAAgKIAAgVIAAAAIABgVIAAAAIAAgUIgBgTQgBgLABgJQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIADgBIABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAIABALIABATIAAAVIgBAVIAAATQAAAMgDALIABgBQgCAIAEAJQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAIgCABIAAAAIgCAAgAukJfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgLADgNQACgKgBgHIAAAAIgCgSIgBgTIAAAAIAAgUIgBgVQgBgKABgLIAAgTIAAgWQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIADgBIABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAUIAAAUIAAAUQABAKAAAMIAAATIABATIACARIAAAAQABAIgCANQgDAMAAAKQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAKtJKIgDgBQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgLABgLIAAgBQACgJgBgHIAAAAIAAgXQAAgOgCgHIgCgSIAAAAQgBgLACgKIAAAAQADgJgBgKQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAAAAIADABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABALgDALIAAgBQgCAJABAJIAAABIACAQQACAIAAAPIAAAWQABAJgCAKQgBAKABAJQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIAAAAIgBAAgAKrGwQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAEgJgCgIQgDgKAAgMQgBgKgCgJIAAAAQgBgKAAgLIAAAAIABgTIAAAAIACgVQACgLgBgKIAAAAIAAgRQgEgIACgGIABAAQABgEAAgJIAAAAIgBgUIAAgBIABgSIABgUIABgVIABgTIAAAAQABgIgCgKIAAAAIgCgXQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIACAXQACALgBAJIAAAAIgBASIgBAWIgBAUIgBARIAAAAIABAVIAAAAQAAAMgCAFIAAADQALgEAHACIAQACIAVACIAAAAQAJACAIgCQAKgBAKAAIABAAQAJABAMgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAABIgBADQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgNABgKgBIAAAAQgJAAgJABQgKACgLgCIgTgCIgSgCQgFgBgJADIAAAOIAAAAQABALgCAMIgCAUIgBATQAAAJABAJQACAKABALQAAAKACAKQADALgFAMQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABIgCAAIAAAAIgCgBgAukGfQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgNACgKIAAgBQADgIAAgJIAAAAQAAgIgDgHQgFgIACgMQACgKgBgKIAAAAIAAgTIAAAAIAAgPQgHgCgIAAQgLAAgIgGIAAAAIgPgLQgLgIgEgLQgFgJgBgMIAAAAIAAgWQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIADgBIAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAVQABAKAEAIQADAJAJAGIAPALIAAAAQAFAEAIAAQAIAAAHACIAAgOIAAgBQAAgIACgLIAAAAQACgJgDgIQgDgLAAgLIABgUIAAAAIABgUQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIADgBIAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAVIgBATQAAAKADAJQADALgDAMIABgBQgCAKAAAHIAAAWIAAAAIAAASIAAAAIAAATIAAAAQABALgCAKQgBAJADAGQAEAJAAAKIAAAAQAAAKgDAKQgCAJAAAMQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAIAAAAIgDgBgANHERIgYAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAYAAIAUgBIAUgBIAAAAIAQABIATgBQANgBALABQALAAAFgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIACADIABAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgGABgMAAIgXAAIgUABIgRgBIgSABIgVABIAAAAgAPGEKQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIAAgBIAAgDQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQALgHAEgHIABAAIAIgPIAAAAQAEgHABgJIACgTIAAAAIACgVIABgTQAAgHgCgMIAAAAQgCgMAAgJIAAgBIABgRIAAgVQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAVIgBASQAAAJACALQACAMAAAIIgBAUIgCAUIgCAUQgBALgFAIIAAAAQgEAIgFAIIAAAAQgFAJgOAJIgCAAIgBAAgAvnDAIgDgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgVQABgMgBgJIgCgTQgCgLADgKQACgKABgJQABgJgCgKIAAAAIgCgUQgBgLABgKQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIADgBIABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAJABAKIACATQACALgBALQgBAKgDAKQgCAJACAIIACAUQABAKgBANIgBATQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAuhCXIgDgBQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgUQABgMgBgKIgCgTQgCgKADgLQACgJABgKQABgJgCgJIAAAAIgCgVQgBgJABgLQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIADgBIABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAJABAIIACAUQACALgBAKQgBALgDAKQgCAIACAJIACATQABALgBANIgBASQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAgAKqBeQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgKACgMQADgLgDgJIAAgBQgDgLAAgJIAAgRIgCgSQgCgLADgLQACgKAAgJQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAKgDALQgCAJACAJIACAUIAAARQAAAIADAKIgBAAQAEAMgDANQgCALAAAJQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIAAAAIAAAAIgDgBgAPlBAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgTIAAAAQACgHgBgLIgCgXIAAgBQAAgJgBgJQgCgJACgNIAAAAQACgLgDgIQgDgKAGgLQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAIACAAIACAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgEAIACAGQADAKgCANIAAAAQgCALACAJQABAJAAAKIAAAAIACAXQABANgCAIIgBARQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAvqATQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgTQACgMgCgIIAAgBQgBgJACgKIAAgBQABgIgBgMIAAAAIgCgXIABgSIgBgRQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIAAAAIADABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAJAAAJIgBASIACAWQACANgCAKQgCAJABAIQACAKgCANIgBASQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAukgWQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgVQACgLgCgJIAAAAQgBgKACgKIAAAAQABgJgBgLIAAgBIgCgXIABgSIgBgRQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABAKAAAJIgBARIACAWQACAOgCAKQgCAIABAJQACAKgCAMIgBAUQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAKrg5QgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQgDgLACgNIAAAAQACgMgCgGQgDgIADgMIAAAAQACgKAAgHIgDgWIAAAAQgDgPAGgIQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIABAAIADABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgDAFACAKIAAABIADAWQAAAJgDALIABAAQgCAJABAGQADAIgCAOIAAAAQgCALADAJQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABIgCAAIAAAAIgCgBgAPmhWQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAEgJgCgIIAAgBQgCgKAAgKIAAAAQAAgKgCgJQgDgLABgNIACgSIABgTIAAAAQABgKAAgJIAAAAIAAgVQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIADgBIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABIAAAVIAAAAQAAAJgBAMIgBARIgCATQgBALACAKQADAKAAALIAAAAQAAAJACAJIgBAAQADALgEANQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAIgCABIAAAAIgCAAgAvniDIgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQACgGgBgKIgBgXIAAgVIAAAAIAAgVQAAgNABgHIACgRQABgJgEgKQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIACgBIACABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAFANgCAMIgCARQgBAGAAAMIAAAVIAAABIAAAUIABAWQABANgCAHQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgCAAIAAAAgAuhisIgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgFgBgKIgBgXIAAgVIAAAAIAAgVQAAgOABgGIACgRQABgKgEgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIACAAIACAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAFAMgCAMIgCARQgBAGAAAMIAAAWIAAAAIAAAVIABAWQABAMgCAHQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgCABIAAAAgAKqi+QgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgTQABgLgCgJIAAAAQgBgLAAgMQAAgLgCgHIAAAAQgBgIACgMIACgVIABgUIgCgTQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIACATQAAALgBALIgCAWQgCAJABAHIAAAAQACAIAAAMQAAALABAKQACALgBANIgCARQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAPmkDQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQgEgLACgLIAAAAQACgJAAgKIAAAAIgBgUIAAgBIABgSIABgUIABgVIABgTIAAAAQABgIgCgKIAAAAIgCgXQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAIADABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIACAXQACALgBAJIAAAAIgBASIgBAWIgBAUIgBARIAAAAIABAVIAAAAQAAALgCAKQgBAIADAJQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABIgCAAIAAAAIgCgBgAvqkcQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgTIgBgSQgBgKABgMIACgVQABgJgCgKQgDgLADgLQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIACgBIACABQAAAAABAAQAAAAAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgDAIACAJQADALgBALIgCAVQgBALABAJIABATIAAATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAuklGQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgUIgBgSQgBgKABgMIACgVQABgJgCgJQgDgMADgLQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIACAAIACAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgDAIACAJQADALgBALIgCAVQgBALABAJIABATIAAAUQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAKtloIAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgUIAAgBIgBgSIAAgBQgBgJAAgLIAAgBIABgTQgBgKABgKQABgJAAgLIAAgBQAAgMACgJQADgIgCgHQgCgJgBgOQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAAAAIAEABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABAMABAIQADAKgDAKQgCAIAAALIAAAAQAAANgBAJIAAASQAAAKgBALIABATQABAKAAAKIAAAAIAAAVQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIgDABIAAAAgAvnmgIAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIACgSQABgJgCgLIAAAAQgBgMABgKQABgJgBgLQgBgJgBgDQgEgFACgDQABgDAFgCIACgBIABAAIABABQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgCADQACAEABALQABAMgBAKQgBAJABALQACAMgBAKIgCASQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgDABIAAAAgAPlnEQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgKACgMQADgLgDgJIAAgBQgDgLAAgJIAAgRIgCgTQgCgLADgLQACgKAAgJQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAKgDALQgCAJACAJIACAVIAAARQAAAIADAKIgBAAQAEAMgDANQgCALAAAJQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIAAAAIAAAAIgDgBgAuhnJIAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIACgTQABgJgCgKIAAgBQgBgMABgKQABgIgBgLQgBgLgCgIQgDgJABgNQAAgNADgJQACgIgBgDIAAgBIAAgRQgJABgIgCQgKgDgKABIgBAAQgNABgGgHIgBgBQgGgIACgHQABgHAIgEIACgCQAHgEAOgCIAAAAQAOgCAEABIAMACQAAgJACgGIAAAAIAHgTIAAAAQAGgPAKgCIAEgBIAKgGIAAAAIgJgBIgVgBQgMAAgKACQgJACgHAFIAAAAIgLAKIgBABQgEAEgFAJQgFAJgCAHIgDASQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgCABIABACIAAACIAAABIgBABIAAAEIAAABIAAAEIABAAIAAABIAAACIAAATIAAASIADAUQACALgCAKQgCAKACAJQACAJgDAHIgCAEIgBABIgBAAIgBgBIAAgBIABgBIAAAAIAAAAIABgBIgBAAIgBAAIAAgBIAAgTIAAgTIAAgVIAAgUIAAgRIAAgYIAAgBIAAgKIgDgCQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIADgTQACgIAGgLQAHgLAFgFIAAAAIAMgKIAAgBQAJgGALgDQALgCANAAIAWABIAOACIABAAIAHAAIADgCIABAAQAHgDAJADIAAAAIABABQAHACAKgCIAAAAQAOgEAHADIgBAAQAGACALgCIAAAAIAXgDIAAAAQALgBAKACQAKACAJAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAAIgBADQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgKAAgLgCQgJgCgJABIgWADIgBAAQgOADgHgDIAAgBQgFgBgJACQgNAEgKgEIgPACIgJAGQgKAHgKADQgFABgEAJIAAAAIgGATIAAAAQgCAHAAALIAAABQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAIgDABIgBAAIgFgBIgOgCQgDgBgKACQgMACgHADQgEADgCADQAAADACAEQAEADAJAAIAAAAQAMgBALADQAIACAHgCIAAAEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAXQABAFgDAKQgCAJAAALQgBALACAIQADAJABAMQABAMgBAJQgBAJABALQACAMgBAKIgCASQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIgDABIAAAAgAvmoqIAAATIAAAAIABgBQACgGgCgIIgBgIIAAAEgAvmpSIAAAVIAAALIABgIQACgKgCgKIgBgHIAAADgAKqoqQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgWQAAgMABgKQACgJgBgKIAAAAQgBgJgDgKIAAAAQgDgMAEgIIAAgBQAEgGAAgKIAAAAQAAgLgFgIQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAAAAIADAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAHALAAANIAAAAQAAANgFAIIAAAAQgCAFACAIIAAABQADALABAKQABAKgCALQgBAJAAALIAAAWQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIAAAAIAAAAIgDgBgAPmpdQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQgDgLACgNIAAAAQACgMgCgGQgDgIADgMIAAAAQACgKAAgHIgDgWIAAAAQgDgPAGgIQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIABAAIADABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgDAFACAKIAAABIADAWQAAAJgDALIABAAQgCAJABAGQADAIgCAOIAAAAQgCALADAJQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABIgCAAIAAAAIgCgBgAKirDIgRgQQgFgGgIgCIAAAAQgIgDgKABQgKAAgJgCIAAAAQgHgBgMACIAAAAQgOACgKgCQgIgCgJAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQALAAAJACIAAAAQAIACALgCIAAAAQAPgCAIABIAAABQAIABAJAAQALgBAJADIABAAQAKADAHAIIARAQQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgCABIgCAAIAAAAIgDgBgAidrgIAAAAQgJgEgJAAIgUACIgUADIgBAAQgJABgLgCQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgDIAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAJACAJgBIAAAAIATgDIAAAAIAWgCQAKAAAMAFIAAAAQAKADAHgBIAAAAIAVgDIAAAAIASgBIAUAAIAAAAIAWABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABADIAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgWgBIAAAAIgTAAIgSABIgUADIAAAAIgHABQgHAAgJgEgAC7reQgIgCgKgBIgVgCIgSgBQgIAAgKADQgKADgKAAIgBAAQgKABgNgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgCIAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAMADAJgBIAAAAQAJAAAKgDQALgDAJAAIAAAAIATABIAVACQALABAJADQAHACAJgCQALgDAMAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgLAAgKACIgLABQgFAAgFgBgAplreQgMgBgIgCQgGgCgJABQgKABgLgBQgKgBgKADIAAAAQgLADgNgBIgTgCQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgBgDIAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIASACQALABAKgDIAAAAQAMgDALABQAKABAJgBQALgBAIADQAHABALABIAAAAQALACALgCIAOgCQABgCAFAAIAGABIABgOIAAAAIACgTIgBgUQgBgMABgJIAAAAQACgJAHgMIAAgBQAHgNAGgDIABgBQAFgDAIgGQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABACIAAACQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgJAIgGADQgFADgGAKIABAAQgGALgCAIIAAAAQgBAHABALIABAVIgCAUIgBAPQAIAAAIAAQAMgBAKABIAAAAQAKABAHgBQAKgCAKABQAJABALgCQAOgEAKAEIgBAAQAIADAIgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAABIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQgLADgKgEIAAgBQgHgDgLADQgMADgLgBQgJgBgIACQgJABgLgBQgJgBgLABQgMABgLgCIAAAAIgHgCIgBABIgDABIgSACIgNABIgLgBgAmEreIgTgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgBgDIAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAUACQAJACAHgCQAIgCANAAIAAAAIAWAAIAAAAIAUgBIAAAAQALgBAKADQAJACAKgCIAAAAIAUgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgSABIgBAAQgLACgLgCQgJgDgJABIgVABIgWAAIAAAAQgLAAgIACIgLABIgJgBgAgWrgQgHgCgMACQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAIAAgBIABgDQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAPgCAKADIAAAAQAHACAIgBIASgEIAAAAQAMgDAOADQALACAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAABIgBADQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgGAAgNgCQgMgCgKACIAAAAIgTAEIgGAAQgHAAgHgCgAEqrfQgGgBgMAAQgMABgLgCQgJgCgFACQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIgBgCIAAgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAHgEANADQAKACALgBQANAAAHABQAHACAKgDIABAAQANgDAMABIAAAAIASADQAGABANgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAABIgBADQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgPACgIgBIgRgDIgBAAQgKgBgLADIAAAAQgJACgHAAIgGgBgAHrrgIgTgCIAAAAQgIgBgKACIAAAAQgMACgKgBQgIgCgLAAQgLAAgHACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgBIABgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAIgCAMAAQAMAAAJACQAIABAJgCIABAAQAMgDAKACIAAAAIARACIABAAQAIABALgBQANgBAKABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABADIAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgWAAIgLABIgKgBgAPlrjQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgTQABgLgCgJIAAAAIgCgWQAAgLgDgHIAAABIgIgTIAAABQgDgJgGgGQgGgGgJgDQgJgEgKAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIABgDQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAMAAALAEQALAEAIAIQAIAHAEALIAAAAIAHARIAAAAQAEAIAAANIACAVQACALgBANIgCARQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAkFtiIAAAAQgJgEgJAAIgUACIgUADIgBAAQgJABgLgCQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgDIAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAJACAJgBIAAAAIATgDIAAAAIAWgCQALAAALAFIAAAAQAKADAHgBIAAAAIAVgDIAAAAIASgBIAUAAIAAAAIAWABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABADIAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgWgBIAAAAIgTAAIgSABIgUADIAAAAIgHABQgHAAgJgEgABTtgQgIgCgKgBIgVgCIgSgBQgIAAgKADQgJADgKAAIgBAAQgKABgNgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgCIAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAMADAJgBIAAAAQAJAAAJgDQALgDAJAAIAAAAIATABIAVACQALABAJADQAHACAJgCQALgDAMAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgLAAgKACIgLABQgFAAgFgBgAnstfIgTgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgCgCIAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAUABQAJABAHgCQAIgCANAAIAAAAIAWAAIAAAAIAUgBIAAAAQALgBAKADQAJACAKgCIAAAAIAUgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgSABIgBAAQgLACgLgCQgJgDgJABIgVABIgWAAIAAAAQgLAAgIACQgGABgGAAIgHAAgAHLtgQgIgCgJAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQALAAAJACIAAAAQAIACALgCIAAAAQAPgCAIABIAAABQAHABAJgCIAAAAIAVgCIATAAIAAAAIAWABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEIAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgWgBIAAAAIgTAAIgTACIAAAAQgLACgJgCIAAAAQgHgBgMACIAAAAIgNABQgGAAgFgBgAh+tiIABAAQgIgCgMACQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAIAAgBIABgDQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAPgCAKADIAAAAQAHACAIgBIATgEIAAAAQAMgDAOADQALACAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAABIgBADQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgGAAgNgCQgMgCgKACIAAAAIgUAEIgGAAQgHAAgHgCgAJpthQgJgBgOAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAPAAAJABIABAAQAHACAEgCIABgBQAHgDAOAAIAAAAIAXAAIABAAIATAAIATABIABAAQAJACAKAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAAIgBADQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgLAAgKgCIgSgBIgTAAIgYAAIAAAAQgLAAgGACIAAAAQgFADgGAAIgHgBgALqtiQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIgBgCIAAgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAJADALgCIAAAAIATgCQAJgBAKABIABAAQAJACAJgBIAAAAIATgBQALAAAKABQAJABAKgBIAAAAIAWgBIAUABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABADIAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgUgBIgVABQgLABgKgBIgTgBIgTABIgBAAQgJABgLgCQgJgBgHABIgUACIAAAAIgJABQgIAAgHgCgADDthQgGgBgMAAQgMABgLgCQgJgCgFACQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIgBgCIAAgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAHgEANADQAKACALgBQANAAAHABQAHACAKgDIABAAQANgDAMABIAAAAIASADQAGABANgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAABIgBADQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgPACgIgBIgRgDIgBAAQgKgBgLADIAAAAQgJACgHAAIgGgBgAGDtiIgTgCIAAAAQgIgBgKACIAAAAQgMACgKgBQgIgCgLAAQgLAAgHACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgBIABgDQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAIgCAMAAQAMAAAJACQAIABAJgCIABAAQAMgDAKACIAAAAIARACIABAAQAIABALgBQANgBAKABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABADIAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgWAAIgLABIgKgBg");
	this.shape_189.setTransform(215.9,469.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,112.2).s().p("ALkMnQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgSAAIgBAAQgKABgIgDQgKgCgMACIAAAAQgKADgKgBIAAAAIgVACQgJACgJgDQAAAAgBAAQAAgBgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIAAACIgDAAIAAgCQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgIgFgNACIgBAAIgWADQgJACgJgCQgLgBgKAAIAAAAIgTAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAgBABIgBAAIgBgEQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBQgNgBgJAAIAAAAIgTADQgJABgKgBQgLgCgKAAIgUAAIgTABIgTABIgBAAQgJABgKgCIAAAAIgWgBQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIgDAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAgBIgVABQgMACgKgCIAAAAQgKgCgIADIgBAAQgFACgLgCIAAAAIgWgDIAAAAIgUgBQgKAAgMADQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIAAADIgCAAIgBgDQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgOgEgJACQgJACgKABIAAAAQgKABgMgCIgWgBIAAAAQgJAAgGgBQgHgCgNABIgBAAQgLACgIAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAgBABIgBAAIAAgDQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgPgEgJACIAAAAQgGACgKgCQgMgCgKABIAAABQgIABgJgCIAAAAQgNgCgLACIAAAAQgKADgJgBQgJgBgLABQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgCAEIgCAAIAAgBQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgUABIgUACIAAAAQgJABgIAAIgTgEQgNgEgMAFQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABIAAACIgDAAIAAgCQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAABgBAAQAAAAAAAAQgGACgLABIAAAAQgLAAgJgCIgBAAQgKgCgMABIAAAAQgKACgIgDIAAAAQgKgDgKAAIgVABIgUACQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgBAEIgDAAIAAgCQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAABQgBAAAAAAQgJADgHgBQgIgDgNABQgLABgKgBQgLgBgJABIAAAAQgJACgMAAQgMAAgLgCIAAAAIgRgBQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIgCAAIgBgCQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgNgFgKACIgBAAQgIADgKgBIAAAAQgJABgIgCIAAAAQgJgCgOABIgUACQgBABAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAIgBAEIgCAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgKAAgJgBIgVgCQgMgCgMAEIAAAAQgJADgIgEQgJgDgFgFIAAAAQgFgFgFgIQgFgIgBgJQgBgLgFgJQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBgBIAAgBIAAgBIADgBQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQACgHgBgMIgBgVIAAAAQAAgMgCgIIAAAAQgBgHABgMIAEgVQADgIgBgNIAAAAIgCgUIAAAAIgCgTIABgVQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgBAAIAAgEQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgKACgMQADgNgCgIIAAgBIgBgQIgCgTIAAgTQABgNgBgJIgBgUIAAgUIABgUQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBIgBAAIAAgDIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQgBgLACgJQAEgKgBgKIAAgBQAAgKgEgIQgDgGACgJQABgLAAgKIAAgBIAAgSIAAAAIAAgSIAAgBIgBgVQAAgIACgJIAAAAQADgLgEgLQgDgKAAgJIABgUIACgUQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgBAAIAAgCIABAAQAAgBABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAAgSQACgOgBgKIgDgUQgBgIACgJQACgJACgKQABgLgCgKIgDgUQgBgJACgKQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAgDQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAIABgUQABgNgBgKQgBgIABgJQACgJgCgOIgBgWIAAgSQABgJgBgJQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgDgBIAAgCIADgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQADgHgBgNIgBgVIAAgVIAAgBIAAgVQgBgMABgGIADgRQABgMgFgNQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgCAAIAAgCQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAAgTIgBgTQgBgJABgLIACgVQABgLgDgLQgCgJACgIQAAAAAAgBQABAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgBIAAgCIAEgCQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBABAAIABgSQABgKgBgMQgBgLABgJQABgJgBgNQgCgMgCgJQgCgHAAgLQAAgLADgJQACgKAAgFIAAgXQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgUIADgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAIAAgBQgBgMACgHIAAABIAHgUIAAABQADgJAGgCQAJgCALgHIAIgHIAPgBQALADAMgDQAJgDAFACIAAAAQAIADAOgCIAAAAIAWgDQAJgBAJACQALACALAAQAAgBABAAQAAAAABAAQAAAAABgBQAAAAAAAAIABgEIADAAIABAEQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABABIASABQANACAMgEIAAABQAKgDAJABQAMABAJgBQAJgBAHACQAIACALABQANACAMgDIASgBIACgBIABgBIAHACIABAAQAKACAMgCQALAAAKAAQAKACAJgCQAJgBAIABQALABANgDQAKgDAHADIAAAAQALAEALgDQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAIAAgDIADAAIABAEQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAABIAUACQALACAJgDQAHgCALABIABAAIAWAAIAUgBQAKgBAIACQALADAMgCIAAAAIATgBQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIADAAIAAADQABABAAAAQAAAAABABQAAAAABAAQAAAAAAABQALACAKgCIAAAAIAVgCIAUgCQAIAAAKAEIAAAAQAMAFAKgDIAAAAIAUgCIARgBIATAAIABAAIAVABQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBABAAIAAgBIACAAIAAABQABABAAAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAMgCAIACQAJADALgCIAUgEIgBABQALgDALADQAOACAFAAQAAgBABAAQAAAAABAAQAAAAABgBQAAAAAAAAIABgEIADAAIAAADQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAOAEAKgBIAAAAQAKgBALgDQAKgCAIgBIASACIAUACQAKAAAIADQAKADAMgDQAKgDALABQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIADAAIAAADQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAgBABAAQAAAAABAAQAFgCAIACQALACANgBQALAAAHABQAIACANgEIAAABQAMgDAKABIAAAAIASACQAHACAPgCQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABgEIAEAAIAAABQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQAIgCAKAAQALAAAJACQAKABALgDIAAABQAKgDAJACIAAAAIASACQAJABAMgBIAWAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgBIAEAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAABQAKgBAHACQAKADAOgDIABAAQALgBAIABIgBAAQAJACALgBQAJAAAIACIAAAAQAIADAFAFIARARQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIAAADIAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAFAJAAAKIAAAAQAAALgDAGIAAAAQgFAJAEAMIAAAAQADAKAAAJIAAAAQABAJgCAKQgBAKAAAMIAAAWQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAEABIAAAEIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQABAOACAIQACAIgCAHQgDAKAAAMIAAAAQAAAMAAAIQgCAKABAKIAAAUIAAAAQgBAMABAJIAAAAIABATIAAAAIAAAUQAAABABAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAABIABAAIAAACIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIACASIgBAVIgCAVQgCAMACAHIAAAAQABAIAAAKQAAANABAKIAAABQACAJgBALIgCASQABABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABABIAAABIgCAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQgFAHACAQIAAAAIADAVQAAAIgCAJIAAAAQgCAMACAIQACAHgCALIAAAAQgCAOAEALQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAIADAAIAAADQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAgBAAQABAKgDAJQgDAMACAKIACAUIABARQAAAIACAMIAAAAQADAKgDAJQgCANAAAKQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAEABIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABQgBAAAAABIACAXIAAAAQACAKgBAIIAAAAIgBATIgBAVIgBAUIAAASIAAAAIAAAVIAAAAQAAAJgBADIAAABQgDAGAEAIIAAARIAAAAQABAKgBALIgCAVIAAAAIgBASIAAABQgBAKACAKIAAABQABAJABAKQABALACALQACAIgEAIQAAABAAAAQAAABgBAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAIADABIAAACIgBAAQAAABgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQABAKgCAJIAAAAQgDAKABALIAAAAIADASQABAHAAAOIAAAWIAAAAQABAIgCAJIAAAAQgBAMABAKQABABAAAAQAAABAAAAQAAAAABABQAAAAAAABIAEABIAAABIgEABQAAABAAAAQgBABAAAAQAAAAAAABQAAAAgBABQgBAIABAMIABATIAAAUIAAAAIgBAUIAAABIAAAUQABALgDAJIAAAAQgCALAFALQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIACABIAAACIgCABQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgFALADAMQACAJgCAIIAAABQgDAJABALIAAABIABATQAAAHgFAJQgFAKgHAEIAAAAQgIAEgKAEIgRAFQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIgBACIgEABgAsFsgIABAAIgKAFIAJgFg");
	this.shape_190.setTransform(203.7,475.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.2,0,0,-0.2,0,94.8).s().p("AJII6IAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgMABgJAAIAAAAQgKgBgKACQgJABgIgCIgBAAIgUgCIgQgCQgHgCgLAEIgBgDQADgFgBgMIAAAAIAAgUIAAgBIAAgRIABgTIABgXIABgSIAAAAQABgJgCgLIgCgWQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDgBIAAgCIAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQABgBgBAAQAAgJACgLQADgNgDgMIAAAAQgCgKAAgIIgBgRIgCgVQgBgIACgKQACgKAAgLQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAIAAgCIABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBQgCgJABgLIAAAAQACgOgCgIQgCgGACgJIAAAAQADgLgBgJIgDgWIAAgBQgCgKAEgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgCgBIAAgCQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIACgRQACgNgDgLQgBgJAAgMQAAgMgBgIIAAAAQgBgGABgKIACgVQACgKgBgMIgCgSQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgDgBIAAgCIADgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgVIAAAAQABgKgCgKIAAgSQABgMgBgKIABgSQABgJgBgNIAAAAQAAgKACgJQADgKgCgKQgCgHgBgNQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgDgBIAAgDIAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQABgBgBAAIAAgVQAAgMABgJQACgLgBgKQgBgKgDgLIAAAAQgCgIADgGIgBAAQAFgHAAgOIAAAAQAAgNgGgLQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgEAAIAAgDIABgBQABAAAAgBQAAAAAAgBQAAAAAAgBQABAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgRgQQgHgHgKgEIAAAAQgKgCgLAAQgJABgHgCIgBgBQgIgBgOACIAAAAQgMACgIgCIAAAAQgJgCgLAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAABIgEAAIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgLgBgNABQgLABgIgBIAAAAIgSgCIAAAAQgKgCgMADIAAAAQgKACgIgBQgJgCgMAAQgMAAgIACQAAAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAIAAADIgEAAIAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgNACgHgBIgSgDIAAAAQgMgBgNADIAAAAQgLADgGgCQgIgBgNAAQgLABgKgCQgNgCgHADQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAAABIgDAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgMAAgLADQgJACgHgCQgJgDgLgBIgVgCIgSgBIgBAAQgJABgLACQgKADgJABIAAAAQgJAAgLgDQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIAAABIgDAAIAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQgFAAgLgCQgOgDgMADIAAAAIgTAEQgHABgIgCIAAAAQgJgDgPACQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABgBAAIgBADIgCAAIgCgDQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgWgBIAAAAIgUAAIgSABIAAAAIgVADIgBAAQgHACgKgEIAAAAQgLgFgLABIgVABIgBAAIgTADIAAAAQgIABgKgCQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAABIgDAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAIgVABIAAAAQgJACgJgCQgKgCgLAAIgBAAIgUABIAAAAIgVAAIAAAAQgNAAgJACQgHACgJgBIgUgDQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAAAIgDAAIAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgIACgHgDIAAAAQgKgEgOAEQgKACgKgBQgKgBgJACQgIABgJgBIAAAAQgLgBgMABQgIABgHgBIABgOIABgVIgBgVQgBgKABgIIAAAAQACgIAGgLIAAAAQAGgKAEgDQAHgDAIgIQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBABAAIgBgCIADgBIABADQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIATABQAKABAJgCQAHgCALAAIABAAIAWAAIAVgBQAJAAAIACQALADAMgDIAAAAIASgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAABgBIACAAIABADQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAKACAKgBIAAAAIAUgCIAVgCQAIgBAJAEIAAAAQANAFAKgCIABAAIATgCIASgBIATgBIAAAAIAWABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAEAAIAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAMgCAIACIAAAAQAJAEALgCIAUgEIAAAAQAKgCALACQAOADAFgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIACgDIABAAIABADQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQAOAEAKgCIAAAAQAKAAALgDQAKgDAIAAIARABIAVACQAKABAIACQAKADAMgDQAKgCAKAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAABgBIACAAIABACQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAFgDAIACQALACANAAQALgBAGABQAJACANgDIAAAAQALgCAKABIAAAAIASACQAHABAPgCQABAAAAAAQABAAAAgBQAAAAABAAQAAgBABAAIABgDIABAAIAAABQABABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAHgBAKAAQALAAAJABQAKACALgDIAAAAQAKgCAIABIABAAIASADQAJABANgBIAVgBQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAABgBIAAAAIABAAQABABAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAJAAAHACQAKADAOgDIAAAAQAMgCAHABIAAAAQAJADALgDIAAAAIAUgBIASgBIABAAIAVABQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAABgBIAAAAIACAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQAPAAAIABQALADAHgEIAAgBQAGgCALAAIABAAIAXAAIAUAAIARACQALACALgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIACgDIADAAIAAACQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQALAEANgDIABAAIATgCQAHgBAJACQALACAKgBIAAAAIATgBIATAAQAKABAMgBIAUAAIAUAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIADAAIAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAQABABAAAAQAKgBAJAEQAJADAHAGQAGAGADAJIAAgBIAHATIAAAAQADAGABALIABAWIAAAAQACAKgBAKIgCATQABABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAAADIgCAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgFAIACAPIAAAAIADAWQAAAIgCAJIAAAAQgCAMACAIQACAHgCALIAAAAQgCAOAEALQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAABIADAAIAAADQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAgBABQABAJgDAKQgDALACALIACATIABASQAAAIACAMIAAAAQADAKgDAKQgCANAAAJQABABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAEABIAAADIgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIACAXIAAAAQACAKgBAIIAAAAIgBAUIgBAUIgBAUIAAASIAAABIAAAUIAAAAQAAAKgBAIIAAAAQgCALAEALQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIADABIAAACIgEABQAAABgBAAQAAAAAAABQAAAAAAABQAAAAgBABIAAAVIAAAAQAAAJgBAKIAAABIgBASIgBATQgCAMADALQADAJgBAKIAAAAQAAALACAKIAAAAQACAIgDAJQAAABAAAAQgBABAAAAQABABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIACAAIAAADIgCAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAABQgFALADALQACAHgCALIAAAAQgCANACAJQABAJAAAKIAAABIACAXQABAMgCAGIAAAAIgBATQABABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAAADQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAgBABIAAAWIAAARIAAAAQgBAJACAMIAAAAQACAMAAAHIgBATIgCAVIAAAAIgBATQgCAJgEAHIAAAAIgIAPIAAAAQgFAIgLAGQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAAAIAAADIgCABIgCgDQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQgFABgKAAQgMgBgMABIgTABIgRgBIAAAAIgTABIgVABIgYAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAgBABg");
	this.shape_191.setTransform(238.2,439);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.rf(["#FFFFFF","#000000"],[0,1],8.4,0,0,8.4,0,12.5).s().p("AAdALQgHACgHgCQgMgDgLABIAAAAQgJAAgDgEQgDgDABgCQABgEAFgCQAGgDALgCQALgCADAAIAOADIAFABIAAAAIAAATQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAgEgAgfAKIgBgCIAAgCIgBgBIAAgBIAAgDIAAgBIAAgEIAAAAIABgBIgBgCIACgDQAEgDAEgBQgHAFgCAGQgCAHAGAIIABABIgEgDg");
	this.shape_192.setTransform(119.5,403.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.rf(["#FFFFFF","#000000"],[0,1],0,-6.5,0,0,-6.5,7.6).s().p("AAAAEIAAgDIAAAAIAAADIAAAAgAAAgCIAAgBIAAAAIAAABg");
	this.shape_193.setTransform(116,416);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.rf(["#FFFFFF","#000000"],[0,1],56.3,0.1,0,56.3,0.1,77.9).s().p("AgBH2QgIAAgFgDIAAAAIgPgMQgJgGgDgIQgEgJgBgKIAAgUQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIAAAAIAAgCIABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIABgSQABgNgBgLIgCgUQgCgIACgIQADgKABgLQABgLgCgKIgCgUQgBgJABgJQAAgBAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgBAAIAAgCQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIABgUQACgMgCgKQgBgJACgIQACgKgCgOIgCgWIABgRQAAgJgBgKQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgDgBIAAgCIACgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQACgHgBgMIgBgWIAAgVIAAAAIAAgWQAAgMABgFIACgRQACgMgFgMQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgCAAIAAgCQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgUIgBgTQgBgJABgLIACgVQABgLgDgLQgCgJADgIQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgCAAIAAgDIADgCQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIACgSQABgKgCgMQgBgLABgJQABgJgBgMQgBgLgCgFIACgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgBAAIAAgDIABgCIACgEQADgGgCgKQgCgIACgLQACgKgCgKIgDgUIAAgTIAAgSIACACIAEACQAGAHANgBIABAAQAKAAAKACQAHADAJgCIAAASIAAABQABADgCAHQgDAKAAAMQgBANADAJQACAIABALQABALgBAJQgBAKABAMIAAAAQACALgBAJIgCASQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIAAADIgCABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAgBABQgDALADALQACAKgBAJIgCAVQgBAMABAKIABASIAAATQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAAACIgCABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAEAKgBAJIgCARQgBAHAAANIAAAVIAAAAIAAAUIABAXQABAKgCAGQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAIABAAIAAACIAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABAQIgBATIACAXIAAAAQABAMgBAIIAAABQgCAKABAJIAAAAQACAJgCAMIgBAUQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAAACIgDABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAKABALIACAUIAAAAQACAJgBAKQgBAJgCAKQgDAKACAKIACAUQABAJgBAMIgBAVQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAAACIgDACQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgBAUIAAAAIgBAVQAAALADAKQADAJgCAJIAAAAQgCAKAAAJIAAAAIAAAOQgHgCgHAAgAgykuIAAgTIAAgEIABAIQACAJgCAFIgBABgAgylUIAAgVIAAgDIABAHQACAKgCAKIgBAJIAAgMgAgymxIACAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIADgSQABgHAGgJQAFgJAEgEIABAAIALgKIAAAAQAHgGAIgBQAKgCAMAAIAVABIAJABIgKAFIgEACQgKACgGAOIAAAAIgHATIAAAAQgCAGAAAKIgMgDQgDgBgOACIAAAAQgOADgHAEIgCABQgFABgDADIgCADIgBgDg");
	this.shape_194.setTransform(121.1,445.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},17).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.instance_3},{t:this.text},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({scaleX:0.48,scaleY:1.3,x:-8,y:-10},0).wait(1).to({y:0},0).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(330.6,350,1028.9,710);
// library properties:
lib.properties = {
	width: 900,
	height: 700,
	fps: 10,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/introduccionSimulacion_atlas_.png", id:"introduccionSimulacion_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
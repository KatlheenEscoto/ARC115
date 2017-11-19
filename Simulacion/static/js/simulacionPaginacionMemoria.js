(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1000);// helper functions:

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


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,110.8).s().p("AwyELIAAoVMAhlAAAIAAIVg");
	this.shape.setTransform(107.5,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(0,0,215,53.4), null);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,4.2,0,0,4.2,111.2).s().p("AwyDyIAAnjMAhlAAAIAAHjg");
	this.shape.setTransform(107.5,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(0,0,215,48.3), null);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,110.6).s().p("AwyECIAAoDMAhlAAAIAAIDg");
	this.shape.setTransform(107.5,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(0,0,215,51.7), null);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,111).s().p("AwyETIAAolMAhlAAAIAAIlg");
	this.shape.setTransform(107.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,215,55), null);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,111).s().p("AwyETIAAolMAhlAAAIAAIlg");
	this.shape.setTransform(107.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0,0,215,55), null);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,111.2).s().p("AwyEcIAAo3MAhlAAAIAAI3g");
	this.shape.setTransform(107.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,215,56.7), null);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,111.6).s().p("AwyEsIAApXMAhlAAAIAAJXg");
	this.shape.setTransform(107.5,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,215,60), null);


// stage content:
(lib._Escena2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_244 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(244).call(this.frame_244).wait(1));

	// Capa 4
	this.text = new cjs.Text("Ejemplo:", "70px 'Tw Cen MT'", "#CCCCCC");
	this.text.lineHeight = 78;
	this.text.lineWidth = 307;
	this.text.parent = this;
	this.text.setTransform(37.6,149);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({rotation:7.3,x:53.2,y:134.6},0).wait(1).to({rotation:14.7,x:70.1,y:121.1},0).wait(1).to({rotation:22,x:88.2,y:108.7},0).wait(1).to({rotation:29.4,x:107.3,y:97.5},0).wait(1).to({rotation:36.7,x:127.4,y:87.6},0).wait(1).to({rotation:44.1,x:148.2,y:79.2},0).wait(1).to({rotation:51.4,x:169.7,y:72.2},0).wait(1).to({rotation:58.8,x:191.6,y:66.8},0).wait(1).to({rotation:66.1,x:213.8,y:63},0).wait(1).to({rotation:73.5,x:236.1,y:60.8},0).wait(1).to({rotation:80.8,x:258.3,y:60.1},0).wait(1).to({rotation:88.2,x:280.2,y:61},0).wait(1).to({rotation:95.5,x:301.8,y:63.4},0).wait(1).to({rotation:102.9,x:322.7,y:67.2},0).wait(1).to({rotation:110.2,x:342.9,y:72.4},0).wait(1).to({rotation:117.6,x:362.2,y:78.8},0).wait(1).to({rotation:124.9,x:380.5,y:86.2},0).wait(1).to({rotation:132.2,x:397.6,y:94.6},0).wait(1).to({rotation:139.6,x:413.6,y:103.8},0).wait(1).to({rotation:146.9,x:428.3,y:113.6},0).wait(1).to({rotation:154.3,x:441.7,y:123.8},0).wait(1).to({rotation:161.6,x:453.8,y:134.3},0).wait(1).to({rotation:169,x:464.5,y:144.9},0).wait(1).to({rotation:176.3,x:473.9,y:155.5},0).wait(1).to({rotation:183.7,x:482,y:165.7},0).wait(1).to({rotation:191,x:488.8,y:175.6},0).wait(1).to({rotation:198.4,x:494.6,y:184.9},0).wait(1).to({rotation:205.7,x:499.3,y:193.4},0).wait(1).to({rotation:213.1,x:503.1,y:201.1},0).wait(1).to({rotation:220.4,x:506.1,y:207.9},0).wait(1).to({rotation:227.8,x:508.5,y:213.6},0).wait(1).to({rotation:235.1,x:510.4,y:218.2},0).wait(1).to({rotation:242.4,x:512,y:221.6},0).wait(1).to({rotation:249.8,x:513.4,y:223.8},0).wait(1).to({rotation:257.1,x:514.9,y:224.7},0).wait(1).to({rotation:264.5,x:516.6,y:224.5},0).wait(1).to({rotation:271.8,x:518.6,y:223.1},0).wait(1).to({rotation:279.2,x:521.2,y:220.6},0).wait(1).to({rotation:286.5,x:524.4,y:217.1},0).wait(1).to({rotation:293.9,x:528.5,y:212.6},0).wait(1).to({rotation:301.2,x:533.5,y:207.3},0).wait(1).to({rotation:308.6,x:539.5,y:201.3},0).wait(1).to({rotation:315.9,x:546.7,y:194.8},0).wait(1).to({rotation:323.3,x:555.2,y:187.8},0).wait(1).to({rotation:330.6,x:564.9,y:180.6},0).wait(1).to({rotation:338,x:575.9,y:173.4},0).wait(1).to({rotation:345.3,x:588.2,y:166.2},0).wait(1).to({rotation:352.7,x:601.9,y:159.3},0).wait(1).to({rotation:360,x:616.8,y:152.9},0).to({_off:true},1).wait(195));

	// Capa 8
	this.instance = new lib.Símbolo5();
	this.instance.parent = this;
	this.instance.setTransform(147.2,373.4,1,1,0,0,0,107.5,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).wait(1).to({x:148.1,y:363.8},0).wait(1).to({x:149.4,y:354.4},0).wait(1).to({x:151.2,y:345},0).wait(1).to({x:153.4,y:335.7},0).wait(1).to({x:156.3,y:326.6},0).wait(1).to({x:159.7,y:317.7},0).wait(1).to({x:163.7,y:309},0).wait(1).to({x:168.4,y:300.7},0).wait(1).to({x:173.8,y:292.8},0).wait(1).to({x:179.8,y:285.3},0).wait(1).to({x:186.4,y:278.4},0).wait(1).to({x:193.5,y:272.1},0).wait(1).to({x:201.1,y:266.3},0).wait(1).to({x:209.2,y:261.2},0).wait(1).to({x:217.6,y:256.7},0).wait(1).to({x:226.4,y:252.8},0).wait(1).to({x:235.3,y:249.4},0).wait(1).to({x:244.4,y:246.6},0).wait(1).to({x:253.7,y:244.2},0).wait(1).to({x:263.1,y:242.3},0).wait(1).to({x:272.5,y:240.8},0).wait(1).to({x:282,y:239.6},0).wait(1).to({x:291.5,y:238.8},0).wait(1).to({x:301,y:238.3},0).wait(1).to({x:310.6,y:238.1},0).wait(1).to({x:320.1},0).wait(1).to({x:329.7,y:238.4},0).wait(1).to({x:339.2,y:238.9},0).wait(1).to({x:348.8,y:239.6},0).wait(1).to({x:358.3,y:240.5},0).wait(1).to({x:367.8,y:241.5},0).wait(1).to({x:377.3,y:242.7},0).wait(1).to({x:386.7,y:244.1},0).wait(1).to({x:396.2,y:245.6},0).wait(1).to({x:405.6,y:247.2},0).wait(1).to({x:415,y:249},0).wait(1).to({x:424.4,y:250.8},0).wait(1).to({x:433.7,y:252.8},0).wait(1).to({x:443,y:254.9},0).wait(1).to({x:452.3,y:257},0).wait(1).to({x:461.6,y:259.3},0).wait(1).to({x:470.9,y:261.7},0).wait(1).to({x:409.7,y:245.9},0).wait(1).to({x:409.6,y:245.8},0).wait(1).to({x:470.9,y:261.7},0).to({_off:true},1).wait(135));

	// Capa 10
	this.instance_1 = new lib.Símbolo6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(147.2,431.8,1,1,0,0,0,107.5,28.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).wait(1).to({x:154.4,y:421.7},0).wait(1).to({x:162.1,y:412.1},0).wait(1).to({x:170.4,y:403},0).wait(1).to({x:179.3,y:394.4},0).wait(1).to({x:188.6,y:386.3},0).wait(1).to({x:198.4,y:378.8},0).wait(1).to({x:208.6,y:371.8},0).wait(1).to({x:219.1,y:365.4},0).wait(1).to({x:229.9,y:359.5},0).wait(1).to({x:241,y:354.1},0).wait(1).to({x:252.4,y:349.2},0).wait(1).to({x:263.9,y:344.8},0).wait(1).to({x:275.5,y:340.8},0).wait(1).to({x:287.4,y:337.2},0).wait(1).to({x:299.3,y:334},0).wait(1).to({x:311.3,y:331.2},0).wait(1).to({x:323.4,y:328.8},0).wait(1).to({x:335.6,y:326.7},0).wait(1).to({x:347.7,y:324.8},0).wait(1).to({x:360,y:323.3},0).wait(1).to({x:372.3,y:322.1},0).wait(1).to({x:384.6,y:321.1},0).wait(1).to({x:396.9,y:320.3},0).wait(1).to({x:409.2,y:319.8},0).wait(1).to({x:421.6,y:319.4},0).wait(1).to({x:433.9,y:319.3},0).wait(1).to({x:446.2,y:319.4},0).wait(1).to({x:458.6,y:319.6},0).wait(1).to({x:470.9,y:320.1},0).to({_off:true},1).wait(135));

	// Capa 11
	this.instance_2 = new lib.Símbolo7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(147.2,487.6,1,1,0,0,0,107.5,27.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).wait(1).to({x:160.2,y:466.9},0).wait(1).to({x:175.3,y:447.7},0).wait(1).to({x:192.5,y:430.4},0).wait(1).to({x:211.6,y:415.2},0).wait(1).to({x:232.3,y:402.3},0).wait(1).to({x:254.3,y:391.7},0).wait(1).to({x:277.2,y:383.4},0).wait(1).to({x:300.9,y:377.2},0).wait(1).to({x:324.9,y:372.8},0).wait(1).to({x:349.2,y:370.2},0).wait(1).to({x:373.6,y:369},0).wait(1).to({x:398,y:369.1},0).wait(1).to({x:422.4,y:370.4},0).wait(1).to({x:446.7,y:372.7},0).wait(1).to({x:470.9,y:375.9},0).to({_off:true},1).wait(135));

	// Capa 12
	this.instance_3 = new lib.Símbolo8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(147.2,392.6,1,1,0,0,0,107.5,27.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(111).to({_off:false},0).wait(1).to({x:157.2,y:384.7},0).wait(1).to({x:167.7,y:377.3},0).wait(1).to({x:178.5,y:370.6},0).wait(1).to({x:189.7,y:364.5},0).wait(1).to({x:201.3,y:359.2},0).wait(1).to({x:213.2,y:354.6},0).wait(1).to({x:225.4,y:350.8},0).wait(1).to({x:237.9,y:348},0).wait(1).to({x:250.5,y:346},0).wait(1).to({x:263.2,y:344.9},0).wait(1).to({x:276,y:344.6},0).wait(1).to({x:288.7,y:345.2},0).wait(1).to({x:301.4,y:346.7},0).wait(1).to({x:314,y:348.9},0).wait(1).to({x:326.4,y:351.7},0).wait(1).to({x:338.7,y:355.3},0).wait(1).to({x:350.7,y:359.4},0).wait(1).to({x:362.6,y:364},0).wait(1).to({x:374.3,y:369.1},0).wait(1).to({x:385.8,y:374.7},0).wait(1).to({x:397.1,y:380.7},0).wait(1).to({x:408.2,y:387},0).wait(1).to({x:419.1,y:393.6},0).wait(1).to({x:429.8,y:400.6},0).wait(1).to({x:440.3,y:407.8},0).wait(1).to({x:450.7,y:415.3},0).wait(1).to({x:460.9,y:423},0).wait(1).to({x:470.9,y:430.9},0).wait(1).to({_off:true},1).wait(104));

	// Capa 13
	this.instance_4 = new lib.Símbolo9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(147.2,445.9,1,1,0,0,0,107.5,25.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).wait(1).to({x:168.1,y:437.7},0).wait(1).to({x:189.7,y:431.3},0).wait(1).to({x:211.7,y:426.8},0).wait(1).to({x:234.1,y:424.1},0).wait(1).to({x:256.5,y:423.2},0).wait(1).to({x:279,y:424},0).wait(1).to({x:301.4,y:426.2},0).wait(1).to({x:323.6,y:429.9},0).wait(1).to({x:345.6,y:434.8},0).wait(1).to({x:367.2,y:440.9},0).wait(1).to({x:388.6,y:447.9},0).wait(1).to({x:409.6,y:455.8},0).wait(1).to({x:430.4,y:464.6},0).wait(1).to({x:450.8,y:474},0).wait(1).to({x:470.9,y:484.2},0).wait(1).to({_off:true},1).wait(104));

	// Capa 14
	this.instance_5 = new lib.Símbolo10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(147.2,387.6,1,1,0,0,0,107.5,24.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(142).to({_off:false},0).wait(1).to({regY:24.1,x:161.9,y:387.8},0).wait(1).to({x:176.7,y:388.5},0).wait(1).to({x:191.4,y:389.6},0).wait(1).to({x:206.1,y:391},0).wait(1).to({x:220.7,y:392.9},0).wait(1).to({x:235.3,y:395.2},0).wait(1).to({x:249.8,y:398},0).wait(1).to({x:264.2,y:401.2},0).wait(1).to({x:278.4,y:404.9},0).wait(1).to({x:292.6,y:409.1},0).wait(1).to({x:306.6,y:413.9},0).wait(1).to({x:320.3,y:419.1},0).wait(1).to({x:333.9,y:424.9},0).wait(1).to({x:347.2,y:431.2},0).wait(1).to({x:360.3,y:438.1},0).wait(1).to({x:373.1,y:445.5},0).wait(1).to({x:385.5,y:453.4},0).wait(1).to({x:397.6,y:461.9},0).wait(1).to({x:409.3,y:470.8},0).wait(1).to({x:420.6,y:480.3},0).wait(1).to({x:431.5,y:490.2},0).wait(1).to({x:442,y:500.6},0).wait(1).to({x:452.1,y:511.4},0).wait(1).to({x:461.7,y:522.5},0).wait(1).to({x:470.9,y:534.1},0).wait(1).to({x:438.2,y:491.4},0).wait(1).to({x:470.9,y:534.1},0).to({_off:true},1).wait(75));

	// Capa 17
	this.instance_6 = new lib.Símbolo11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(147.2,438.4,1,1,0,0,0,107.5,26.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(155).to({_off:false},0).wait(1).to({x:172.7,y:441.8},0).wait(1).to({x:198,y:446.6},0).wait(1).to({x:223,y:452.6},0).wait(1).to({x:247.7,y:459.8},0).wait(1).to({x:272,y:468.2},0).wait(1).to({x:296,y:477.7},0).wait(1).to({x:319.4,y:488.2},0).wait(1).to({x:342.5,y:499.6},0).wait(1).to({x:365.1,y:512},0).wait(1).to({x:387.2,y:525.2},0).wait(1).to({x:408.8,y:539.1},0).wait(1).to({x:430,y:553.8},0).wait(1).to({x:450.7,y:569.1},0).wait(1).to({x:470.9,y:585},0).to({_off:true},1).wait(75));

	// Capa 19
	this.instance_7 = new lib.Símbolo5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(147.2,441.7,1,1,0,0,0,107.5,30);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(170).to({_off:false},0).wait(1).to({x:185.1,y:416.6},0).wait(1).to({x:225,y:394.8},0).wait(1).to({x:266.5,y:376.3},0).wait(1).to({x:309.2,y:360.7},0).wait(1).to({x:352.8,y:347.9},0).wait(1).to({x:397.1,y:337.6},0).wait(1).to({x:441.8,y:329.6},0).wait(1).to({x:486.9,y:323.7},0).wait(1).to({x:532.1,y:319.7},0).wait(1).to({x:577.5,y:317.3},0).wait(1).to({x:623,y:316.4},0).wait(1).to({x:668.4,y:317},0).wait(1).to({x:713.8,y:318.7},0).wait(1).to({x:759.3,y:321.7},0).to({_off:true},1).wait(60));

	// Capa 18
	this.instance_8 = new lib.Símbolo5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(147.2,381.7,1,1,0,0,0,107.5,30);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(170).to({_off:false},0).wait(1).to({x:176.9,y:308},0).wait(1).to({x:215.2,y:238.5},0).wait(1).to({x:265.2,y:177},0).wait(1).to({x:329.6,y:130.9},0).wait(1).to({x:405.6,y:109.3},0).wait(1).to({x:484.6,y:113.5},0).wait(1).to({x:560.6,y:136.5},0).wait(1).to({x:631.9,y:171.5},0).wait(1).to({x:699,y:214},0).wait(1).to({x:762.6,y:261.7},0).to({_off:true},1).wait(64));

	// Capa 21
	this.instance_9 = new lib.Símbolo5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(470.9,433.4,1,1,0,0,0,107.5,30);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(185).to({_off:false},0).wait(1).to({x:455.8,y:409.3},0).wait(1).to({x:439.1,y:386.4},0).wait(1).to({x:420.7,y:364.8},0).wait(1).to({x:400.1,y:345.3},0).wait(1).to({x:377.2,y:328.6},0).wait(1).to({x:351.9,y:315.8},0).wait(1).to({x:324.6,y:308.2},0).wait(1).to({x:296.3,y:306.5},0).wait(1).to({x:268.2,y:310.4},0).wait(1).to({x:241.2,y:319.1},0).wait(1).to({x:215.7,y:331.3},0).wait(1).to({x:191.5,y:346.3},0).wait(1).to({x:168.8,y:363.2},0).wait(1).to({x:147.2,y:381.7},0).to({_off:true},1).wait(45));

	// Capa 23
	this.instance_10 = new lib.Símbolo5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(470.9,486.4,1,1,0,0,0,107.5,30);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185).to({_off:false},0).wait(1).to({x:463.3,y:473.3},0).wait(1).to({x:455.5,y:460.5},0).wait(1).to({x:447.4,y:447.8},0).wait(1).to({x:438.9,y:435.3},0).wait(1).to({x:430.1,y:423.1},0).wait(1).to({x:420.8,y:411.2},0).wait(1).to({x:411.1,y:399.7},0).wait(1).to({x:400.9,y:388.6},0).wait(1).to({x:390.1,y:378.1},0).wait(1).to({x:378.7,y:368.3},0).wait(1).to({x:366.5,y:359.4},0).wait(1).to({x:353.6,y:351.6},0).wait(1).to({x:340,y:345.3},0).wait(1).to({x:325.6,y:340.8},0).wait(1).to({x:310.8,y:338.3},0).wait(1).to({x:295.7,y:338.2},0).wait(1).to({x:280.8,y:340.5},0).wait(1).to({x:266.4,y:344.8},0).wait(1).to({x:252.7,y:351},0).wait(1).to({x:239.7,y:358.7},0).wait(1).to({x:227.5,y:367.5},0).wait(1).to({x:216,y:377.2},0).wait(1).to({x:205.2,y:387.6},0).wait(1).to({x:194.9,y:398.7},0).wait(1).to({x:185.2,y:410.2},0).wait(1).to({x:175.9,y:422},0).wait(1).to({x:167,y:434.2},0).wait(1).to({x:158.5,y:446.7},0).to({_off:true},1).wait(31));

	// Capa 24
	this.instance_11 = new lib.Símbolo5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(759.3,261.7,1,1,0,0,0,107.5,30);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(215).to({_off:false},0).wait(1).to({x:732.9,y:260.3},0).wait(1).to({x:706.5,y:260.4},0).wait(1).to({x:680.1,y:262.1},0).wait(1).to({x:653.9,y:265.6},0).wait(1).to({x:628.1,y:271.2},0).wait(1).to({x:603,y:279.3},0).wait(1).to({x:578.9,y:290.1},0).wait(1).to({x:556.3,y:303.8},0).wait(1).to({x:535.7,y:320.3},0).wait(1).to({x:517.5,y:339.4},0).wait(1).to({x:502,y:360.8},0).wait(1).to({x:489.1,y:383.8},0).wait(1).to({x:478.9,y:408.2},0).wait(1).to({x:470.9,y:433.4},0).to({_off:true},1).wait(15));

	// Capa 26
	this.instance_12 = new lib.Símbolo5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(758.8,321.7,1,1,0,0,0,107.5,30);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(215).to({_off:false},0).wait(1).to({x:746.2,y:320.3},0).wait(1).to({x:733.5,y:319.4},0).wait(1).to({x:720.8,y:318.7},0).wait(1).to({x:708.2,y:318.4},0).wait(1).to({x:695.5,y:318.6},0).wait(1).to({x:682.8,y:319.1},0).wait(1).to({x:670.2,y:320.1},0).wait(1).to({x:657.6,y:321.7},0).wait(1).to({x:645.1,y:323.7},0).wait(1).to({x:632.7,y:326.4},0).wait(1).to({x:620.4,y:329.6},0).wait(1).to({x:608.3,y:333.4},0).wait(1).to({x:596.5,y:338},0).wait(1).to({x:584.9,y:343.2},0).wait(1).to({x:573.7,y:349.1},0).wait(1).to({x:562.9,y:355.7},0).wait(1).to({x:552.5,y:363},0).wait(1).to({x:542.6,y:370.9},0).wait(1).to({x:533.3,y:379.5},0).wait(1).to({x:524.5,y:388.6},0).wait(1).to({x:516.3,y:398.3},0).wait(1).to({x:508.7,y:408.4},0).wait(1).to({x:501.6,y:419},0).wait(1).to({x:495.2,y:429.9},0).wait(1).to({x:489.3,y:441.1},0).wait(1).to({x:484,y:452.6},0).wait(1).to({x:479.1,y:464.4},0).wait(1).to({x:474.8,y:476.3},0).wait(1).to({x:470.9,y:488.4},0).wait(1));

	// Capa 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfCNQg2g5AAhSQAAhTA4g6QA3g6BOAAQAzAAA7AaIAABeQg/gmgvAAQguAAgcAhQgcAgAAA1QAAA0AdAfQAeAfAwAAQAsAAA9gjIAABdQhFAXgtAAQhMAAg3g5g");
	this.shape.setTransform(268.2,187.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheBcQgjgoAAgzQAAg6AlglQAlglA6AAQA2AAAlAmQAkAmAAA3QAAA5gkAlQglAlg3AAQg+ABgigogAgmgsQgRASAAAYQAAAbARATQAQATAXAAQAWAAARgSQARgTAAgZQAAgZgRgTQgRgTgWAAQgWAAgRASg");
	this.shape_1.setTransform(218.6,194.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BzQgcgPgTggIA9gcQAUAkAVAAQAKAAAIgHQAIgGgBgIQAAgLgJgFQgIgGgFAAQgBgCgTgGQhLgYgBg3QAAghAbgVQAcgWAqAAQAxAAAnApIgzAfQgWgWgTAAQgJAAgGAFQgHAFAAAIQAAAMAIAGQAHAFAiAMQAhALATARQAUATAAAgQAAAggeAYQgcAXgpAAQgcAAgbgQg");
	this.shape_2.setTransform(189.8,194);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcBfQgjgkAAg8QAAg3AlglQAlglA1AAQA3AAAlAnQAkAnAAA6IAAAMIizAAQACAYAOAPQAPAPATAAQAiAAATgfIBFAXQgmBDhRAAQg7AAgjgkgAghhDQgOANgDAWIBkAAQgKgvgmAAQgVAAgOAMg");
	this.shape_3.setTransform(162.6,194.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BeQgmgmAAg4QAAg4AkglQAiglA2AAQAmAAAjARIAABHQgggQgcAAQgZAAgOAQQgQAPAAAZQAAAYAQAQQAOAPAYAAQAXAAAmgPIAABLQgnASgaAAQg3AAgnglg");
	this.shape_4.setTransform(136.1,194.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AheBcQgjgoAAgzQAAg6AlglQAlglA6AAQA2AAAlAmQAkAmAAA3QAAA5gkAlQglAlg3AAQg+ABgigogAgmgsQgRASAAAYQAAAbARATQAQATAXAAQAWAAARgSQARgTAAgZQAAgZgRgTQgRgTgWAAQgWAAgRASg");
	this.shape_5.setTransform(108.2,194.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHCAIAAj7IBLAAIAAAlIABAAQAKgTAQgLQAPgLAMAAIANABIAABSQgJgBgJAAQgXAAgNAQQgMAQAAAdIAABwg");
	this.shape_6.setTransform(83.9,193.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah8DAIAAl/ICDAAQA1AAAhAfQAgAeAAAzQAAAhgQAeQgQAcghAPQgfAPgYAAIgvABIAACVgAgqh6IAABiIAfAAQAUAAAPgPQAPgPAAgUQAAgYgRgNQgQgMgeAAg");
	this.shape_7.setTransform(58.3,187.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AheCNQg2g5AAhSQAAhTA3g6QA3g6BOAAQAzAAA7AaIAABeQg/gmgvAAQguAAgcAhQgcAgAAA1QAAA0AeAfQAdAfAwAAQAsAAA9gjIAABdQhEAXguAAQhMAAg2g5g");
	this.shape_8.setTransform(827.8,55.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgYBoQgKgLAAgOQAAgPAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAPQAAAOgKALQgKALgPAAQgOAAgKgLgAgYg1QgKgLAAgPQAAgOAKgKQAKgLAOAAQAPAAAKALQAKAKAAAOQAAAPgKALQgKAKgPAAQgOAAgKgKg");
	this.shape_9.setTransform(228.4,309.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAuBkQgJgHgCgKQgHAMgQAGQgQAIgSgBQghAAgUgRQgTgRAAgeQgBglAcgTQAbgVAxAAQAJAAAMADQgBglgtAAQgcAAgSAKIgLgnQAZgMAkABQAuAAAXAVQAVAWAAA9IAAAsQABApARALQgGALgIACQgIADgJgBQgKABgJgJgAguAqQABAcAgAAQArgBAAgrIAAgUQgNgDgFAAQg6AAAAAng");
	this.shape_10.setTransform(211,309.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AArBrIAAh5QAAgagKgMQgLgNgWAAQgLAAgMAGQgMAHgHAJIAACWIgxAAIAAjRIAjAAIAJAUQAUgYAmABQAlgBAWAXQAWAWAAAoIAACAg");
	this.shape_11.setTransform(188.4,309);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAIgMAAQgMAAgHgIg");
	this.shape_12.setTransform(169.9,305.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AhbB9IAfgmQAZAYAggBQAUABAOgHQANgGAAgLQAAgSgegBIgXADIgYACQgzgBAAgjQAAgLAIgKQAJgKALgEQgkgXAAgqQABgiAYgWQAYgWAlAAQAaAAAUAKIASgVIAjAeIgYARQANATAAAZQAAAjgXAVQgWAVghAAIgNgBIgHgCIgLAFQgJAEAAAFQAAAHAOABQAFgBAOgDQAOgCAKAAQBIAAAAA5QgBAfgcATQgdARgnABQgwgBgngcgAgfhaQgLAKAAARQAAASALAMQAKALARAAQARAAAJgLQAJgLAAgTQAAgQgKgLQgKgLgPAAQgRAAgKALg");
	this.shape_13.setTransform(154.8,312.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAuCNQgIgHgDgKQgHALgRAHQgPAHgSAAQgiAAgTgRQgTgRgBgfQAAgkAcgVQAbgUAxAAQAJAAALADQAAgkgtAAQgbAAgTAJIgKgmQAZgMAiAAQAvAAAWAWQAXAWAAA7IAAAtQgBAqASALQgHAKgHADQgIACgJAAQgLAAgIgIgAgtBSQgBAcAhAAQArAAAAgsIAAgTQgMgDgHAAQg4AAAAAmgAgjhbIAig5IAuAAIgsA5g");
	this.shape_14.setTransform(134.1,305.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AhgCUIAAkjIAxAAIAAAOQASgRAbAAQBjAAAABtQAAAzgbAbQgdAcguAAQgYAAgSgJIAABYgAgvhcIAABtQANALASAAQAhAAAOgQQAPgPAAgjQAAglgPgPQgOgPghAAQgSAAgNANg");
	this.shape_15.setTransform(111.9,313.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegeAqAAQAtAAAcAaQAbAcAAAqQAAAIgEASIiUAAQABAZAQANQAQAPAaAAQAhgBARgRIATAmQgZAUg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_16.setTransform(76.4,309.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhGB8QgagcAAgyQAAgwAdggQAdgfAqABQAYgBAUAKIAAhTIAxgNIAAErIgxAAIAAgNQgGAGgPAGQgOAEgPAAQgrAAgZgbgAgdgFQgQAQAAAiQAABBA+AAQAHAAAKgEQALgEADgFIAAhrQgQgNgRAAQgcAAgQASg");
	this.shape_17.setTransform(53,304.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgwAcgeQAbgdAtAAQAvAAAaAdQAaAcAAAyQABAxgbAeQgbAdguABQgwAAgZgfgAgjgyQgOASAAAgQAABEAyAAQAWABAOgTQANgSAAggQAAhDgxgBQgXAAgNASg");
	this.shape_18.setTransform(173.6,260.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AArCNIAAh5QAAgagKgMQgLgNgWAAQgLAAgMAHQgMAGgHAJIAACWIgxAAIAAjQIAjAAIAJATQAUgXAmAAQAlAAAWAWQAWAWAAAnIAACBgAgChhQgQgIgFAAQgKAAgHAPIgcAAQADgWAMgOQALgOARAAQAPAAAOAIQAPAHAFAAQALAAAGgPIAcAAQgHAdgLALQgKAKgRAAQgMAAgOgHg");
	this.shape_19.setTransform(150.5,257.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAuBlQgIgIgDgJQgHAKgRAHQgPAIgSAAQgigBgTgQQgTgRgBgfQAAglAcgUQAbgUAxAAQAJAAALADQAAglgtAAQgbAAgTAJIgKglQAZgMAiAAQAvgBAWAWQAXAWAAA8IAAAsQgBAqASALQgHAKgHADQgIACgJABQgLgBgIgHgAgtApQgBAcAhAAQArAAAAgrIAAgUQgMgCgHgBQg4ABAAAlg");
	this.shape_20.setTransform(128.2,260.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("ABhBqIAAiBQAAgqgmAAQgKAAgLAHQgKAGgDAJIAACVIgxAAIAAiJQAAgPgJgKQgJgJgSAAQgJAAgLAHQgLAHgFAIIAACVIgwAAIAAjQIAhAAIAKASQAUgWAgABQAqAAAUAWQAJgKAQgHQARgFARAAQAigBAUAVQAUATgBAjIAACJg");
	this.shape_21.setTransform(100.2,260.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAuBlQgIgIgDgJQgHAKgRAHQgPAIgSAAQghgBgUgQQgTgRgBgfQAAglAcgUQAbgUAxAAQAJAAALADQAAglgtAAQgbAAgTAJIgKglQAZgMAjAAQAugBAWAWQAXAWAAA8IAAAsQgBAqASALQgHAKgHADQgIACgJABQgLgBgIgHgAgtApQAAAcAgAAQArAAAAgrIAAgUQgMgCgHgBQg4ABAAAlg");
	this.shape_22.setTransform(72.5,260.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgaCPIAAjwIhbAAIAAgtIDrAAIAAAtIhfAAIAADwg");
	this.shape_23.setTransform(54,256.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AhxBxIB+jOIh4AAIAAgzIDdAAIixEhg");
	this.shape_24.setTransform(326.9,634.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AhMByQgcgcAAgsQAAgeAOggQAOghASgYIAthAIBJAAIhFBeQAOgCAMAAQAkAAAaAbQAaAaAAAmQAAArgfAdQgfAcguAAQgsAAgdgcgAggAJQgNAOAAATQAAASANANQANANATAAQARAAAMgNQAMgNAAgTQAAgTgMgNQgMgMgRABQgTgBgNAMg");
	this.shape_25.setTransform(326.9,583.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("Ag4CJQgQgHgUgNIAGhAQAuAeAaAAQASAAAOgOQAOgNAAgSQAAgUgOgOQgOgMgUABQgagBgdALIAPiQICJAAIAAAzIhTAAIgDAhQAvAAAaAcQAZAcAAAmQAAAqghAgQghAggtAAQgVgBgRgFg");
	this.shape_26.setTransform(326.9,532.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AASCMIAAhDIh7AAIAAg0ICAigIA5AAIAAChIAaAAIAAAzIgaAAIAABDgAg2AWIBIAAIAAhbIgBAAg");
	this.shape_27.setTransform(326.2,480.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AhAB6QgZgXgHgpIA6AAQAKAoAdAAQAOAAALgKQAKgLAAgPQAAgTgMgMQgNgMgRAAIgLAAIAAguIAGAAQATAAANgKQAMgKgBgQQAAgPgJgKQgKgLgNAAQggAAgFApIg4AAQACgnAagXQAZgXAkAAQAmAAAcAWQAbAWAAAgQAAAighAcQAVAMAKAPQAKAPAAAUQAAAogaAYQgaAXgrAAQgnAAgbgWg");
	this.shape_28.setTransform(326.7,429.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AhgCPIBgh5QAUgaAJgRQAJgRAAgPQAAgRgLgKQgLgLgQAAQgSAAgHAOQgJANgCAcIg+AAQAAgzAegcQAegbArAAQApAAAbAYQAaAYAAAlQAAAlgfArIgRAZQgJAPgPATIgIAJIBQAAIAAA0g");
	this.shape_29.setTransform(326.9,378.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AgJCMIAAjkIgpAAIALgzIBaAAIAAEXg");
	this.shape_30.setTransform(324.9,328);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("AhOBpQgfgmAAg/QAAhCAegoQAegpAxAAIABAAQAxAAAfAnQAdAmAABAQAABKghAkQghAkgrAAQgwAAgfgngAgkhAQgOAYAAArQAAAoAOAXQAOAYAWAAQAXAAAOgYQAOgXAAgpQAAgqgNgYQgOgYgXAAQgXAAgOAYg");
	this.shape_31.setTransform(326.9,276.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAbgeQAcgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQguAAgagegAgjgyQgNASAAAgQgBBEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_32.setTransform(176.9,593.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgnBpQgNgEgUgKIASgnQAVARAdAAQAbABAAgVQAAgMgJgHQgIgIgYgKQg2gWgBgoQAAgcAWgPQAUgPAfAAQAhAAAcAPIgNAmQgRgNgcAAQgZgBABAVQAAAIAIAGQAIAHAbAKQAbALAMAOQANAQAAAWQgBAdgVARQgWAQgjAAQgWAAgMgDg");
	this.shape_33.setTransform(157,593.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegfAqAAQAtAAAcAbQAbAbAAAqQAAAKgEARIiUAAQABAZAQANQAQAOAaABQAhAAARgSIATAlQgZAWg0gBQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_34.setTransform(136.8,593.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("Ag8BQQgdgcAAgyQAAgxAfgeQAfgfA0AAQAkABAbAUIgVAlQgRgRgdAAQgbAAgQATQgQASAAAgQAABCA+AAQAbgBAVgRIASAmQgWANgPAEQgQADgWAAQgvAAgcgcg");
	this.shape_35.setTransform(115.1,593.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAcgeQAbgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQgvAAgZgegAgjgyQgOASAAAgQAABEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_36.setTransform(93.6,593.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_37.setTransform(74.9,593.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AheCQIAAkdIA7gCQBDAAAgAVQAfAVAAArQAABihzAAIgXgBIAABpgAgrhhIAABcIAUABQAiAAAQgLQAQgNAAgaQAAgshHAAIgPABg");
	this.shape_38.setTransform(54.1,590);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AhGBrIAAjRIAxAAIAAAUQAUgYAhAAQAZABAOAHIgVAqQgNgJgQAAQgRAAgMAPQgNAQAAAWIAAB3g");
	this.shape_39.setTransform(197.7,545.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AAuBkQgIgHgDgKQgHAMgRAGQgPAIgSgBQgiAAgTgRQgUgRAAgeQABglAbgTQAbgVAyAAQAIAAALADQABglguAAQgbAAgTAKIgKgnQAYgMAjAAQAvABAWAVQAXAWgBA9IAAAsQAAApARALQgFALgIACQgHADgKgBQgKABgJgJgAgtAqQgBAcAhAAQArgBAAgrIAAgUQgNgDgGAAQg4AAAAAng");
	this.shape_40.setTransform(177.5,545.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AhcBpIAAgRIBwiVIhuAAIAAgrIC2AAIAAARIhtCVIBuAAIAAArg");
	this.shape_41.setTransform(156.1,545.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAIgMAAQgMAAgHgIg");
	this.shape_42.setTransform(138.9,541.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgjBqIAAj0IAwgNIAADrQAAAnAXAHQgLAWgbgBQghAAAAgtg");
	this.shape_43.setTransform(128.9,541.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAuBkQgIgHgDgKQgHAMgQAGQgQAIgSgBQgiAAgTgRQgUgRAAgeQABglAbgTQAbgVAyAAQAIAAALADQABglguAAQgbAAgTAKIgKgnQAYgMAjAAQAvABAXAVQAWAWgBA9IAAAsQAAApARALQgFALgIACQgHADgKgBQgKABgJgJgAgtAqQgBAcAhAAQArgBAAgrIAAgUQgNgDgFAAQg5AAAAAng");
	this.shape_44.setTransform(111.4,545.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AArBrIAAh5QAAgagKgMQgLgNgWAAQgLAAgMAGQgMAHgHAJIAACWIgxAAIAAjRIAjAAIAJAUQAUgYAmAAQAlAAAWAXQAWAWAAAoIAACAg");
	this.shape_45.setTransform(88.8,545.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAIgMAAQgMAAgHgIg");
	this.shape_46.setTransform(70.3,541.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AhdCPIAAkdIC7AAIAAAtIiJAAIAABDIBkAAIAAAqIhkAAIAACDg");
	this.shape_47.setTransform(54.1,541.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AhpCQIAAkdIBMgCQA9AAAlAlQAlAkAAA9QAACZiTAAgAg3hhIAADDQANABAOAAQAmAAAWgcQAVgcAAgxQAAhchUAAIgYABg");
	this.shape_48.setTransform(774.8,185.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AA5CPIAAiBIhxAAIAACBIgyAAIAAkdIAyAAIAABwIBxAAIAAhwIAyAAIAAEdg");
	this.shape_49.setTransform(747.6,185.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgjBqIAAj1IAwgMIAADrQAAAmAXAIQgLAVgbABQghgBAAgtg");
	this.shape_50.setTransform(717.2,185.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AhJBRQgcgcAAgzQAAgwAfgfQAegfAqABQAtAAAcAbQAbAbAAApQAAAKgEARIiUAAQABAZAQAOQAQAOAagBQAhAAARgRIATAlQgZAWg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_51.setTransform(698.6,189.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AhGB8QgagcAAgyQAAgxAdgfQAdgeAqAAQAYAAAUAJIAAhUIAxgMIAAEqIgxAAIAAgMQgGAHgPAEQgOAGgPAAQgrAAgZgcgAgdgFQgQARAAAhQAABBA+AAQAHAAAKgEQALgEADgEIAAhsQgQgNgRAAQgcAAgQASg");
	this.shape_52.setTransform(675.2,185.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AAuBlQgJgIgCgJQgHAKgQAIQgQAGgSAAQghAAgUgQQgUgRABggQgBgkAcgTQAbgVAyAAQAIAAAMADQAAglguAAQgcAAgSAKIgLgmQAZgNAkAAQAuAAAXAXQAVAVAAA9IAAAsQAAApARALQgFAKgIADQgHACgKAAQgLAAgIgHgAguApQAAAcAhAAQArAAAAgsIAAgTQgNgDgFABQg6gBAAAmg");
	this.shape_53.setTransform(813.6,141.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgMAIgIQAHgIAMAAQAMAAAIAIQAIAIAAAMQAAAMgIAIQgIAJgMAAQgMAAgHgJg");
	this.shape_54.setTransform(796.1,137.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_55.setTransform(783.5,141);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AhJBOQgbgdAAgxQAAgvAdgeQAbgfAtAAQAvAAAbAeQAaAcAAAyQgBAxgaAeQgbAdguAAQgwAAgagegAgjgyQgOASAAAgQAABEAyABQAWgBAOgRQANgSAAghQAAhEgxABQgXAAgNARg");
	this.shape_56.setTransform(762.4,141.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("ABhBqIAAiCQgBgpgkAAQgLAAgLAHQgKAGgDAIIAACWIgxAAIAAiJQAAgPgJgJQgKgKgRAAQgJAAgLAHQgLAHgFAIIAACVIgwAAIAAjPIAhAAIAKASQAUgXAgAAQAqABAUAWQAKgKAPgHQARgFARgBQAiAAAUAVQAUATgBAkIAACIg");
	this.shape_57.setTransform(733.9,141);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegfAqAAQAtAAAcAbQAbAbAAAqQAAAJgEASIiUAAQABAZAQANQAQAOAaABQAhAAARgSIATAlQgZAWg0gBQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_58.setTransform(705.2,141.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgHCRIg6idIgfCZIgxAAIA5kdIAcAAIA9C/IA8i/IAbAAIA6EdIgxAAIgeiZIg5Cdg");
	this.shape_59.setTransform(678.9,137.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AAuBlQgIgIgDgKQgHALgRAIQgPAHgSAAQgigBgTgQQgUgRAAgfQABglAbgUQAbgUAyAAQAIAAALADQABglguAAQgbAAgTAJIgKgmQAYgLAjAAQAvgBAWAWQAXAWgBA8IAAAsQAAAqARALQgFAKgIADQgHACgKABQgKgBgJgHgAgtApQgBAcAhAAQArAAAAgrIAAgUQgNgCgGgBQg4ABAAAlg");
	this.shape_60.setTransform(538.4,189.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AArBqIAAh3QAAgbgKgMQgLgNgWAAQgLAAgMAHQgMAFgHAKIAACVIgxAAIAAjQIAjAAIAJAUQAUgXAmAAQAlAAAWAWQAWAWAAAoIAAB/g");
	this.shape_61.setTransform(515.9,189.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAJgMAAQgMAAgHgJg");
	this.shape_62.setTransform(497.4,185.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AhbB9IAfgmQAZAXAgABQAUgBAOgGQAOgGAAgLQAAgTgfABIgXABIgZACQgyAAAAgkQAAgKAIgKQAJgKALgEQgkgXABgrQAAghAYgWQAZgWAjAAQAcAAASALIATgXIAiAfIgXARQANATAAAYQAAAkgXAWQgVAUgiAAIgMgBIgIgBIgLAEQgJAEAAAEQAAAJANgBQAHAAANgCQAOgDAKAAQBHAAAAA5QABAggdARQgdATgngBQgwAAgngcgAgghbQgKALAAARQAAASAKAMQAKALASAAQARAAAIgLQAKgLAAgTQAAgQgKgLQgKgLgPAAQgRAAgLAKg");
	this.shape_63.setTransform(482.3,193);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AAuCNQgJgHgCgKQgHALgQAHQgQAHgSAAQghAAgUgRQgTgRAAgfQAAgkAbgVQAbgUAxAAQAJAAAMADQgBgkgtAAQgcAAgSAJIgLgmQAZgMAkAAQAuAAAXAWQAVAWABA7IAAAtQAAAqARALQgHAKgHADQgIACgJAAQgLAAgIgIgAguBSQABAcAgAAQArAAAAgsIAAgTQgNgDgFAAQg6AAAAAmgAgjhbIAhg5IAvAAIgsA5g");
	this.shape_64.setTransform(461.5,185.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AhgCTIAAkiIAxAAIAAAPQASgTAbABQBjAAAABuQAAAygbAcQgdAcguAAQgXAAgTgKIAABXgAgvhbIAABtQANAKASAAQAgAAAQgQQAOgPAAgjQAAglgOgPQgPgPghAAQgSAAgNAOg");
	this.shape_65.setTransform(439.4,193.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AhJBRQgcgcAAgzQAAgwAfgfQAegfAqABQAtAAAcAbQAbAbAAApQAAAKgEARIiUAAQABAZAQAOQAQAOAagBQAhAAARgRIATAlQgZAWg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_66.setTransform(403.8,189.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AhGB8QgagcAAgyQAAgxAdgfQAdgeAqAAQAYAAAUAJIAAhUIAxgMIAAEqIgxAAIAAgMQgGAHgPAEQgOAGgPAAQgrAAgZgcgAgdgFQgQARAAAhQAABBA+AAQAHAAAKgEQALgEADgEIAAhsQgQgNgRAAQgcAAgQASg");
	this.shape_67.setTransform(380.5,185.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgnBpQgNgEgUgKIASgnQAVARAdAAQAbABAAgVQAAgMgJgHQgIgIgYgKQg2gWgBgoQAAgcAWgPQAUgPAfAAQAhAAAcAPIgNAmQgRgNgcAAQgZgBABAVQAAAHAIAHQAIAHAbAKQAbALAMAOQANAQAAAWQgBAdgVARQgWAQgjAAQgWAAgMgDg");
	this.shape_68.setTransform(489.1,141.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAcgeQAbgfAtAAQAvAAAaAeQAbAcAAAyQgBAxgaAeQgbAdguAAQgwAAgZgegAgjgyQgOASAAAgQAABEAyABQAWgBAOgRQANgSAAghQAAhEgxABQgXAAgNARg");
	this.shape_69.setTransform(469.1,141.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("Ag8BQQgdgcAAgyQAAgxAfgeQAfgfA0AAQAkABAbAUIgVAlQgRgRgdAAQgbAAgQATQgQASAAAgQAABCA+AAQAbgBAVgRIASAmQgWANgPAEQgQADgWAAQgvAAgcgcg");
	this.shape_70.setTransform(447.6,141.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_71.setTransform(430,141);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAuBlQgJgIgCgJQgHAKgQAIQgQAGgSAAQghAAgUgQQgTgRAAggQAAgkAbgTQAbgVAxAAQAJAAAMADQgBglgtAAQgcAAgSAKIgLgmQAZgNAkAAQAuAAAXAXQAVAVABA9IAAAsQAAApARALQgHAKgHADQgIACgJAAQgLAAgIgHgAguApQABAcAgAAQArAAAAgsIAAgTQgNgDgFABQg6gBAAAmg");
	this.shape_72.setTransform(409.8,141.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgHCRIg6idIgfCZIgxAAIA5kdIAcAAIA9C/IA8i/IAbAAIA6EdIgxAAIgeiZIg5Cdg");
	this.shape_73.setTransform(384.2,137.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAbgeQAcgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQguAAgagegAgjgyQgNASAAAgQgBBEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_74.setTransform(176.9,141.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgnBpQgNgEgUgKIASgnQAVARAdAAQAbABAAgVQAAgMgJgHQgIgIgYgKQg2gWgBgoQAAgcAWgPQAUgPAfAAQAhAAAcAPIgNAmQgRgNgcAAQgZgBABAVQAAAHAIAHQAIAHAbAKQAbALAMAOQANAQAAAWQgBAdgVARQgWAQgjAAQgWAAgMgDg");
	this.shape_75.setTransform(157,141.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegfAqAAQAtAAAcAbQAbAbAAAqQAAAJgEASIiUAAQABAZAQANQAQAOAaABQAhAAARgSIATAlQgZAWg0gBQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_76.setTransform(136.8,141.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("Ag8BQQgdgcAAgyQAAgxAfgeQAfgfA0AAQAkABAbAUIgVAlQgRgRgdAAQgbAAgQATQgQASAAAgQAABCA+AAQAbgBAVgRIASAmQgWANgPAEQgQADgWAAQgvAAgcgcg");
	this.shape_77.setTransform(115.1,141.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAcgeQAbgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQgvAAgZgegAgjgyQgOASAAAgQAABEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_78.setTransform(93.6,141.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_79.setTransform(74.9,141);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AheCQIAAkdIA7gCQBDAAAgAVQAfAVAAArQAABihzAAIgXgBIAABpgAgrhhIAABcIAUABQAiAAAQgLQAQgNAAgaQAAgshHAAIgPABg");
	this.shape_80.setTransform(54.1,137.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CCCCCC").s().p("AgVBJQgJgJAAgMQAAgNAKgKQAIgIAMgBQANABAJAIQAKAKAAANQAAAMgKAJQgJAJgNAAQgMAAgJgJgAgVgcQgJgJAAgNQAAgMAJgKQAJgJAMAAQANAAAIAJQAKAKAAAMQAAANgKAJQgIAJgNAAQgMAAgJgJg");
	this.shape_81.setTransform(783.5,62.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CCCCCC").s().p("Ag/A9QgXgaAAgjQAAgmAZgYQAZgYAmgBQAkAAAYAZQAZAZAAAlQAAAmgZAZQgYAZglAAQgpAAgXgbgAgZgdQgLAMAAARQAAAQALANQALANAPAAQAPAAAKgNQAMgMAAgRQAAgPgMgNQgKgNgPAAQgPAAgLAMg");
	this.shape_82.setTransform(767.7,61.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CCCCCC").s().p("AgjBNQgTgKgMgWIAogSQAOAYANAAQAHAAAGgFQAEgEAAgFQAAgHgFgEQgHgEgCAAQgCgBgLgEQgzgRAAgjQAAgXASgOQASgOAdAAQAgAAAaAbIgiAVQgPgPgNAAQgFAAgFADQgEAEAAAFQAAAIAFAEQAGAEAVAHQAWAIANALQAOAMAAAWQgBAVgTAQQgTAPgcAAQgSAAgSgKg");
	this.shape_83.setTransform(748.5,61.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCCCC").s().p("Ag9A/QgXgYAAgnQAAgkAZgaQAYgZAjAAQAlABAYAaQAYAaAAAmIAAAIIh2AAQABAQAJAKQAKAKANAAQAWABANgWIAuAQQgaAtg2AAQgmAAgYgZgAgVgsQgKAIgCAQIBDAAQgHgggaAAQgNAAgJAIg");
	this.shape_84.setTransform(730.4,61.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CCCCCC").s().p("AgoA/QgZgaAAglQAAgkAXgaQAYgZAkAAQAZABAXAMIAAAvQgWgLgSAAQgQAAgKALQgKAKAAARQAAAPAKALQAJAKARAAQAOAAAZgKIAAAyQgZAMgSAAQgkAAgagZg");
	this.shape_85.setTransform(712.8,61.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CCCCCC").s().p("Ag/A9QgXgaAAgjQAAgmAZgYQAZgYAmgBQAkAAAZAZQAYAZAAAlQAAAmgYAZQgZAZglAAQgpAAgXgbgAgZgdQgLAMAAARQAAAQALANQALANAPAAQAPAAALgNQAKgMABgRQgBgPgKgNQgLgNgPAAQgPAAgLAMg");
	this.shape_86.setTransform(694.1,61.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CCCCCC").s().p("AgvBVIAAinIAxAAIAAAZIABAAQAHgMAKgIQAKgHAIAAIAKABIAAA2IgNgBQgPAAgJALQgIALAAASIAABLg");
	this.shape_87.setTransform(677.9,61.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CCCCCC").s().p("AhWB7IAAjxIAyAAIAAAZIAAAAQALgPANgHQALgHAQAAQAeAAAVAbQAVAaAAAmQAAAhgUAZQgVAZgdAAQgQAAgMgHQgLgIgNgPIgBAAIAABlgAgYg8QgLAMAAARQAAAQALALQALALAOAAQAOAAAKgKQAKgLAAgRQAAgRgLgMQgKgMgOAAQgPAAgJAMg");
	this.shape_88.setTransform(661,65.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CCCCCC").s().p("AgvBVIAAinIAxAAIAAAZIABAAQAHgMAKgIQAKgHAIAAIAKABIAAA2IgNgBQgPAAgJALQgIALAAASIAABLg");
	this.shape_89.setTransform(633.5,61.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CCCCCC").s().p("AhCA+QgUgZAAglQAAgjAWgZQAWgaAeAAQANAAAMAGQAMAHAMAOIAAgXIAyAAIAACmIgyAAIAAgcIAAAAQgMAQgMAIQgMAHgQAAQgeAAgVgZgAgXgYQgKAMAAARQAAAQAJALQAKAKAOAAQAPAAALgMQAKgMAAgRQAAgOgKgMQgLgLgOAAQgOAAgKAMg");
	this.shape_90.setTransform(615.3,61.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CCCCCC").s().p("Ag4BrQgVgNgJgfIA4AAQARAWASABQAPAAAJgNQAJgMAAgUIAAgUQgWAdgdAAQgfAAgVgZQgWgYAAgkQAAgjAWgZQAWgZAfAAQAZAAAZAbIAAgXIAyAAIAACpQAAAOgJATQgJARgVAJQgWAJgbAAQgjAAgVgOgAgWhAQgLAMAAASQAAANALAMQALAMAOAAQAPAAAKgLQALgMAAgQQAAgSgKgKQgKgLgQAAQgPAAgKALg");
	this.shape_91.setTransform(594.1,65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CCCCCC").s().p("AgvBVIAAinIAxAAIAAAZIABAAQAHgMAKgIQAKgHAIAAIAKABIAAA2IgNgBQgPAAgJALQgIALAAASIAABLg");
	this.shape_92.setTransform(578,61.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CCCCCC").s().p("AhCA+QgUgZAAglQAAgjAWgZQAWgaAeAAQANAAAMAGQAMAHAMAOIAAgXIAyAAIAACmIgyAAIAAgcIAAAAQgMAQgMAIQgMAHgQAAQgeAAgVgZgAgXgYQgKAMAAARQAAAQAJALQAKAKAOAAQAPAAALgMQAKgMAAgRQAAgOgKgMQgLgLgOAAQgOAAgKAMg");
	this.shape_93.setTransform(559.8,61.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CCCCCC").s().p("Ag/BeQgjgmgBg3QABg3AkgmQAlgnAzAAQAjAAAmARIAAA/QgpgZggAAQgeAAgSAVQgTAWAAAjQAAAjAUAUQATAVAhAAQAcAAAogXIAAA+QgtAPgeAAQgzAAgkgmg");
	this.shape_94.setTransform(538.6,57.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#990000").s().p("AgeCjIAAlFIA9AAIAAFFg");
	this.shape_95.setTransform(551.3,546);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#990000").s().p("AhSBNQgagfAAguQAAgsAbggQAcggAmAAQARAAAOAIQAPAIAQASIAAgeIA+AAIAADRIg+AAIAAgkIgBAAQgPAVgPAJQgPAKgVAAQglAAgZgggAgdgeQgNAOAAAWQAAAUAMANQAMANASAAQATAAANgPQANgOAAgWQAAgSgNgOQgNgOgSAAQgSgBgMAQg");
	this.shape_96.setTransform(530.7,551.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#990000").s().p("AhsCZIAAktIA+AAIAAAfIABAAQAOgTAPgIQAPgIATAAQAmAAAaAhQAbAhAAAvQAAAqgaAfQgaAfgjAAQgVAAgOgJQgPgJgQgUIgBAAIAAB+gAgfhLQgNAOAAAVQAAAUAOAPQANANASAAQASAAANgMQAMgOgBgWQABgUgNgPQgOgPgRAAQgSAAgNAPg");
	this.shape_97.setTransform(506,556.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#990000").s().p("AgeCjIAAjRIA9AAIAADRgAgahgQgMgLAAgQQAAgQAMgMQALgLAPAAQAQAAAMALQALAMAAAQQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_98.setTransform(485.3,545.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#990000").s().p("AgyBOQgfgfAAgvQAAguAdgfQAegfArAAQAgAAAeAOIAAA7QgcgNgXAAQgUAAgMANQgNANAAAVQAAAUANANQALAMAVAAQATAAAfgMIAAA+QggAPgVAAQgvAAgggfg");
	this.shape_99.setTransform(468.8,551.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#990000").s().p("AAkBrIAAh0QAAgSgKgMQgKgNgOAAQgQAAgLAQQgLAQAAAYIAABnIg+AAIAAjQIA+AAIAAAZQAggfAiAAQAeAAAUAZQATAYABAnIAAB+g");
	this.shape_100.setTransform(445.6,551.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#990000").s().p("AgeCjIAAjRIA9AAIAADRgAgahgQgMgLAAgQQAAgQAMgMQALgLAPAAQAQAAAMALQALAMAAAQQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_101.setTransform(425.6,545.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#990000").s().p("Ag7BqIAAjQIA+AAIAAAeIABAAQAJgPANgJQAMgKAKABIAMABIAABEIgQgCQgTAAgKAOQgLANAAAYIAABdg");
	this.shape_102.setTransform(412.2,551.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#990000").s().p("AhnCgIAAk/IBsAAQAtAAAbAaQAbAZAAAqQAAAcgNAZQgOAXgbANQgaAMgUAAIgmABIAAB8gAgjhmIAABSIAbAAQAQAAAMgMQAMgNAAgRQAAgTgNgLQgOgLgZAAg");
	this.shape_103.setTransform(390.8,546.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#990000").s().p("AhSBNQgagfAAguQAAgsAbggQAcggAmAAQARAAAOAIQAPAIAQARIAAgdIA+AAIAADRIg+AAIAAgkIgBAAQgPAVgPAKQgPAJgVAAQglAAgZgggAgdgfQgNAPAAAVQAAAVAMANQAMANASAAQATAAANgPQANgOAAgWQAAgSgNgOQgNgOgSAAQgSAAgMAOg");
	this.shape_104.setTransform(577.5,495.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#990000").s().p("AgeCjIAAjRIA9AAIAADRgAgahgQgMgLAAgQQAAgQAMgMQALgLAPAAQAQAAAMALQALAMAAAQQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_105.setTransform(558.7,489.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#990000").s().p("Ag7BqIAAjQIA+AAIAAAeIABAAQAJgPANgJQAMgKAKAAIAMABIAABFIgQgBQgTAAgKANQgLANAAAYIAABdg");
	this.shape_106.setTransform(545.3,495.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#990000").s().p("AhPBMQgdghAAgqQABgwAfgfQAfgfAvABQAtgBAfAgQAfAfAAAuQAAAvgfAfQgfAfguAAQgzABgdgigAgfgkQgPAPAAAUQAAAWAPAQQANAQATAAQASAAAOgQQAOgQAAgUQAAgVgOgPQgOgQgSgBQgTABgNAPg");
	this.shape_107.setTransform(523.4,495.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#990000").s().p("ABnBrIAAhzQAAgSgJgLQgKgMgNAAQgQAAgMANQgMAOAAASIAABvIg9AAIAAhwQABgTgKgMQgKgNgNAAQgQAAgMAOQgMAOAAATIAABtIg/AAIAAjRIA/AAIAAAiIANgLQAIgJAJgFQAHgGAMgEQAKgDAJAAQAPAAARAKQAPAKAMAaQAUgZASgLQATgKAQAAQAcAAAUAXQAUAYAAAiIAACEg");
	this.shape_108.setTransform(490.4,495.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#990000").s().p("AhMBPQgdgeAAgyQAAgtAegfQAfgfAtAAQAtAAAeAgQAfAhAAAwIAAAKIiVAAQABAUANANQALAMARAAQAbAAARgaIA5ATQggA4hEAAQgwAAgdgegAgbg3QgMAKgDATIBUAAQgJgoggAAQgQAAgMALg");
	this.shape_109.setTransform(458.4,495.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#990000").s().p("AB0CgIgdjgIhGDgIgfAAIhIjiIgbDiIhDAAIAnk/IBSAAIA8C/IA8i/IBPAAIApE/g");
	this.shape_110.setTransform(426.7,489.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#990000").s().p("AAkBrIAAh0QAAgSgKgMQgKgNgOAAQgQAAgLAQQgLAQAAAXIAABoIg/AAIAAjQIA/AAIAAAYQAggeAiAAQAeABAUAYQATAYAAAnIAAB+g");
	this.shape_111.setTransform(380.5,495.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#990000").s().p("AhMBPQgdgegBgyQAAgtAggfQAegfAsAAQAuAAAeAgQAfAhAAAwIAAAKIiVAAQABAUANANQAMAMAQAAQAcAAAQgaIA5ATQggA4hEAAQgwAAgdgegAgbg3QgMAKgDATIBUAAQgJgoggAAQgQAAgMALg");
	this.shape_112.setTransform(355,495.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#990000").s().p("AhMBPQgdgeAAgyQAAgtAegfQAfgfAtAAQAtAAAeAgQAeAhAAAwIAAAKIiUAAQABAUAMANQAMAMAQAAQAcAAAQgaIA6ATQggA4hDAAQgxAAgdgegAgbg3QgMAKgCATIBTAAQgJgogfAAQgSAAgLALg");
	this.shape_113.setTransform(563.9,438.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#990000").s().p("AgeCjIAAlFIA9AAIAAFFg");
	this.shape_114.setTransform(545.4,433.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#990000").s().p("AgNCcQgQgJgRgUIAAAiIg+AAIAAlFIA+AAIAACRQAcghAjAAQAlAAAcAhQAbAfAAAuQAAArgbAgQgbAggkAAQgSAAgOgJgAggAXQgMANAAAXQAAAVANAOQANAOASAAQASAAAMgNQAMgOAAgVQAAgVgNgOQgNgPgRAAQgTAAgMANg");
	this.shape_115.setTransform(526.3,433.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#990000").s().p("AgeCjIAAjRIA+AAIAADRgAgbhgQgLgLAAgQQAAgQALgMQAMgLAPAAQAQAAAMALQALAMAAAQQAAAQgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_116.setTransform(505.8,433);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#990000").s().p("AAkBsIAAh1QAAgSgKgNQgKgMgOAAQgQAAgLAQQgLAPAAAYIAABpIg+AAIAAjSIA+AAIAAAZQAggdAiAAQAegBAUAZQAUAYAAAnIAAB/g");
	this.shape_117.setTransform(486.3,438.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#990000").s().p("AhPBMQgcghgBgqQAAgwAggfQAegfAwAAQAtAAAfAgQAfAfgBAuQABAvgfAfQgfAfguABQgzAAgdgigAgfglQgPAQAAAUQAAAWAPAQQANAPASAAQATAAAOgPQAOgQAAgUQAAgVgOgPQgOgRgTABQgRgBgOAPg");
	this.shape_118.setTransform(459.6,438.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#990000").s().p("AhsCZIAAktIA+AAIAAAfIABAAQAOgTAPgIQAOgIAVAAQAlAAAbAhQAaAhAAAvQAAAqgZAfQgaAfgkAAQgVAAgOgJQgPgJgPgUIgCAAIAAB+gAgfhLQgMAOAAAVQAAAUANAPQANANASAAQASAAAMgMQAMgOAAgWQAAgUgMgPQgOgPgRAAQgSAAgNAPg");
	this.shape_119.setTransform(433.8,443.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#990000").s().p("AgsBgQgXgNgQgaIAygYQARAeASAAQAIAAAHgFQAGgFAAgHQAAgKgHgEQgIgFgEABQgBgCgPgFQg/gVAAgtQAAgbAWgTQAXgRAjAAQApAAAgAhIgqAaQgSgSgRAAQgGAAgGAFQgGAEAAAGQAAALAHAEQAGAFAcAJQAcAKAQAOQAQAPAAAbQAAAbgYAUQgZATgiAAQgWAAgXgNg");
	this.shape_120.setTransform(409,438.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#990000").s().p("AgeCjIAAjRIA9AAIAADRgAgahgQgMgLAAgQQAAgQAMgMQALgLAPAAQAQAAAMALQALAMAAAQQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_121.setTransform(391.8,433);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#990000").s().p("AhSCFQgagfAAguQAAgtAbgfQAaggAlAAQAUAAAOAHQAPAIAPARIAAiQIA/AAIAAFFIg+AAIAAgkIgBAAQgbAogoAAQgkAAgZgggAgcAXQgNAOAAAYQAAATALAOQAMAOARAAQATAAANgPQAOgPAAgWQAAgTgNgOQgNgOgTAAQgPAAgNAOg");
	this.shape_122.setTransform(371.2,433.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#990000").s().p("AhPBNQgcgiAAgrQAAgvAegfQAggeAvgBQAtABAfAfQAfAfAAAuQAAAvgfAfQgfAgguAAQgzgBgdgggAggglQgOAPAAAVQAAAWAOAPQAOARATgBQASAAAOgPQAOgPAAgWQAAgTgOgRQgOgPgSAAQgTAAgOAOg");
	this.shape_123.setTransform(480.7,382.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#990000").s().p("AAkBsIAAh1QAAgSgKgNQgKgMgOAAQgQAAgLAQQgLAPAAAZIAABoIg/AAIAAjSIA/AAIAAAZQAggdAiAAQAeAAAUAYQATAZAAAmIAAB/g");
	this.shape_124.setTransform(454.3,382.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#990000").s().p("AhPBNQgdgiAAgrQAAgvAggfQAegeAwAAQAtAAAfAfQAeAfAAAuQAAAvgeAfQgfAggugBQgzAAgdgggAgfglQgPAQAAAUQAAAWAPAPQANAQASAAQATAAAOgPQAOgPAAgWQAAgTgOgRQgOgQgTAAQgRAAgOAPg");
	this.shape_125.setTransform(533.2,326);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#990000").s().p("AgeCjIAAjRIA+AAIAADRgAgbhgQgLgLAAgQQAAgQALgMQAMgLAPAAQAQAAALALQAMAMAAAQQAAAQgMALQgLAMgQAAQgPAAgMgMg");
	this.shape_126.setTransform(513.3,320.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#990000").s().p("AgxBOQghgfAAgvQABguAdgfQAdgfAtAAQAfAAAeAOIAAA7QgbgNgYAAQgVAAgLANQgNANAAAVQAAAUAMANQANAMAUAAQATAAAfgMIAAA+QggAPgVAAQgvAAgfgfg");
	this.shape_127.setTransform(496.7,326);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#990000").s().p("AhSBNQgagfAAguQAAgsAbggQAcggAmAAQARAAAOAIQAPAIAQASIAAgdIA+AAIAADQIg+AAIAAgkIgBAAQgPAVgPAJQgPAKgVAAQglAAgZgggAgdgeQgNAOAAAWQAAAUAMAOQAMAMASAAQATAAANgPQANgOAAgWQAAgSgNgOQgNgPgSAAQgSABgMAPg");
	this.shape_128.setTransform(472.5,326);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#990000").s().p("AhsCZIAAktIA+AAIAAAfIABAAQAOgTAPgIQAOgIAVAAQAlAAAbAhQAaAhAAAvQAAAqgZAfQgaAfgkAAQgVAAgOgJQgPgJgPgUIgCAAIAAB+gAgfhLQgMAOAAAVQAAAUANAPQANANASAAQASAAAMgMQAMgOAAgWQAAgUgMgPQgOgPgRAAQgSAAgNAPg");
	this.shape_129.setTransform(447.8,330.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#990000").s().p("AgsBgQgXgNgQgbIAygWQARAdASAAQAIAAAHgFQAGgGAAgHQAAgIgHgFQgIgEgEgBQgBgBgPgFQg/gVAAgtQAAgcAWgSQAXgRAjAAQApAAAgAiIgqAaQgSgTgRAAQgGAAgGAEQgGAEAAAHQAAALAHAEQAGAFAcAJQAcAKAQAOQAQAPAAAbQAAAbgYATQgZAUgiAAQgWAAgXgNg");
	this.shape_130.setTransform(423,326);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#990000").s().p("AhZCgIAAk/ICzAAIAAA/IhuAAIAABBIBuAAIAAA9IhuAAIAABDIBuAAIAAA/g");
	this.shape_131.setTransform(400.8,320.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AieDAIAAl/ICDAAQBTAAA0A1QAzA1AABVQAABXg0A1Qg1A0hYAAgAhKB2IAgAAQAyAAAigcQAggcAAhAQAAgmgPgdQgRgdgegKQgcgLgcAAIgeAAg");
	this.shape_132.setTransform(270.1,187.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AieDAIAAl/ICDAAQBUAAAzA1QAzA1AABVQAABXg1A1Qg1A0hWAAgAhLB2IAiAAQAxAAAhgcQAhgcAAhAQAAgmgPgdQgQgdgegKQgdgLgcAAIgfAAg");
	this.shape_133.setTransform(829.7,55.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AiFDAIAAl/IBxAAQBFAAAZAdQAaAdAAAnQAAAZgJARQgKASgUARQAnAOARAaQARAbAAAeQAAA1glAeQgkAdhBAAgAgyCAIAeAAQBDAAAAgyQAAgbgRgPQgQgOgeAAIgiAAgAgygrIATAAQAVAAANgNQAPgNAAgUQAAgQgOgLQgNgLgVAAIgUAAg");
	this.shape_134.setTransform(256.4,639.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AheBbQgjgnAAg0QAAg4AlglQAlglA6AAQA2AAAlAmQAkAlAAA3QAAA4gkAmQglAmg3AAQg+gBgigogAgmgsQgRASAAAZQAAAaARATQAQATAXAAQAWAAARgTQARgSAAgaQAAgYgRgTQgRgTgWAAQgWAAgRASg");
	this.shape_135.setTransform(207.4,646.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("Ag1BzQgcgPgTggIA8gcQAVAkAVAAQAKAAAIgHQAHgGAAgIQABgLgKgFQgJgGgEAAQgCgCgSgGQhMgYABg3QAAghAbgVQAagWAsAAQAvAAAoApIgzAfQgWgWgUAAQgIAAgHAFQgGAFAAAIQAAAMAHAGQAJAFAgAMQAiALAUARQATATAAAgQAAAggdAYQgdAXgqAAQgbAAgbgQg");
	this.shape_136.setTransform(178.6,646.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("Ag8BeQgmgmAAg4QAAg4AjglQAkglA1AAQAlAAAkARIAABHQghgQgbAAQgZAAgPAQQgPAPAAAZQAAAYAPAQQAOAPAaAAQAWAAAlgPIAABLQgnASgZAAQg4AAgmglg");
	this.shape_137.setTransform(124.9,646.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AheBbQgjgnAAg0QAAg4AlglQAlglA6AAQA2AAAlAmQAkAlAAA3QAAA4gkAmQglAmg3AAQg+gBgigogAgmgsQgRASAAAZQAAAaARATQAQATAXAAQAWAAARgTQARgSAAgaQAAgYgRgTQgRgTgWAAQgWAAgRASg");
	this.shape_138.setTransform(97,646.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhGCAIAAj7IBJAAIAAAlIABAAQAMgTAOgLQAPgLANAAIAOABIAABSQgJgBgKAAQgXAAgMAQQgNAQgBAdIAABwg");
	this.shape_139.setTransform(72.7,646.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("Ah8DAIAAl/ICDAAQA1AAAhAfQAgAeAAAzQAAAhgQAeQgQAcghAPQgfAPgXAAIgvABIAACVgAgrh6IAABiIAgAAQAVAAAPgPQAOgPAAgUQAAgYgQgNQgRgMgeAAg");
	this.shape_140.setTransform(47.1,639.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AiFDAIAAl/IBxAAQBFAAAZAdQAaAdAAAnQAAAZgJARQgKASgUARQAnAOARAaQARAbAAAeQAAA1glAeQgkAdhBAAgAgyCAIAeAAQBDAAAAgyQAAgbgRgPQgQgOgeAAIgiAAgAgygrIATAAQAVAAANgNQAPgNAAgUQAAgQgOgLQgNgLgVAAIgUAAg");
	this.shape_141.setTransform(843.1,54.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CCCCCC").s().p("AgVBJQgJgJAAgMQAAgNAJgKQAJgIAMgBQANABAJAIQAJAKAAANQAAAMgJAJQgJAJgNAAQgMAAgJgJgAgWgcQgIgJgBgNQABgMAIgKQAKgJAMAAQAMAAAJAJQAKAKAAAMQAAANgKAJQgJAJgMAAQgMAAgKgJg");
	this.shape_142.setTransform(816.5,62.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CCCCCC").s().p("Ag/A9QgXgaAAgjQAAgmAZgYQAZgYAlgBQAlAAAYAZQAZAZAAAlQAAAmgZAZQgYAZglAAQgpAAgXgbgAgZgdQgLAMAAARQAAAQALANQALANAOAAQAPAAALgNQALgMAAgRQAAgPgLgNQgLgNgPAAQgOAAgLAMg");
	this.shape_143.setTransform(800.7,61.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCCCCC").s().p("AgjBNQgTgKgNgWIApgSQAOAYANAAQAHAAAFgFQAGgEAAgFQAAgHgHgEQgGgEgDAAQAAgBgMgEQgzgRAAgjQAAgXASgOQASgOAcAAQAhAAAaAbIgiAVQgPgPgNAAQgFAAgEADQgFAEAAAFQAAAIAGAEQAFAEAVAHQAXAIANALQAMAMAAAWQAAAVgTAQQgUAPgbAAQgRAAgTgKg");
	this.shape_144.setTransform(781.5,61.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CCCCCC").s().p("AgoA/QgZgaAAglQAAgkAYgaQAXgZAkAAQAYABAYAMIAAAvQgWgLgSAAQgQAAgKALQgKAKAAARQAAAPAKALQAJAKAQAAQAQAAAZgKIAAAyQgbAMgRAAQgkAAgagZg");
	this.shape_145.setTransform(745.8,61.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CCCCCC").s().p("Ag/A9QgXgaAAgjQAAgmAZgYQAZgYAmgBQAkAAAYAZQAZAZAAAlQAAAmgZAZQgYAZglAAQgpAAgXgbgAgZgdQgLAMAAARQAAAQALANQALANAOAAQAQAAAKgNQAMgMAAgRQAAgPgMgNQgKgNgQAAQgOAAgLAMg");
	this.shape_146.setTransform(727.1,61.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CCCCCC").s().p("AhWB7IAAjxIAyAAIAAAZIAAAAQAMgPAMgHQALgHAQAAQAeAAAVAbQAVAaAAAmQAAAhgVAZQgUAZgcAAQgRAAgLgHQgMgIgNgPIgBAAIAABlgAgZg8QgKAMAAARQAAAQALALQAKALAPAAQAOAAALgKQAJgLAAgRQAAgRgKgMQgLgMgOAAQgPAAgKAMg");
	this.shape_147.setTransform(694,65.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CCCCCC").s().p("AhVBUIBYh5IhKAAIAAguICdAAIhXB5IBJAAIAAAug");
	this.shape_148.setTransform(629,61.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CCCCCC").s().p("AgYCDIAAinIAxAAIAACngAgVhMQgJgJAAgNQAAgNAJgJQAJgKAMAAQANAAAJAKQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_149.setTransform(614.1,56.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CCCCCC").s().p("AgYCCIAAkDIAxAAIAAEDg");
	this.shape_150.setTransform(603.7,57);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CCCCCC").s().p("AAdBWIAAhdQAAgOgIgLQgIgKgLAAQgNAAgJANQgIANgBATIAABTIgxAAIAAinIAxAAIAAAUQAagYAbAAQAZAAAPATQAPAVAAAeIAABlg");
	this.shape_151.setTransform(567,61.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CCCCCC").s().p("AgYCDIAAinIAxAAIAACngAgVhMQgJgJAAgNQAAgNAJgJQAJgKAMAAQANAAAJAKQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_152.setTransform(551,56.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CCCCCC").s().p("AhHCAIAAj/ICPAAIAAAxIhYAAIAAA1IBYAAIAAAxIhYAAIAABog");
	this.shape_153.setTransform(536.6,57.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AheBcQgjgoAAg0QAAg4AlglQAlgmA6ABQA2gBAlAmQAkAmAAA3QAAA5gkAlQglAlg3AAQg+ABgigogAgmgsQgRASAAAYQAAAbARATQAQATAXAAQAWAAARgTQARgSAAgaQAAgYgRgTQgRgTgWAAQgWAAgRASg");
	this.shape_154.setTransform(218.6,194.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AheBcQgjgoAAg0QAAg4AlglQAlgmA6ABQA2gBAlAmQAkAmAAA3QAAA5gkAlQglAlg3AAQg+ABgigogAgmgsQgRASAAAYQAAAbARATQAQATAXAAQAWAAARgTQARgSAAgaQAAgYgRgTQgRgTgWAAQgWAAgRASg");
	this.shape_155.setTransform(108.2,194.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AieDAIAAl/ICDAAQBUAAAzA1QAzA1AABVQAABXg1A1Qg1A0hWAAgAhLB2IAiAAQAyAAAggcQAhgcAAhAQAAgmgQgdQgPgdgegKQgdgLgcAAIgfAAg");
	this.shape_156.setTransform(845.6,54.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CCCCCC").s().p("AgjBNQgTgKgMgWIAogSQAOAYANAAQAHAAAGgFQAEgEAAgFQAAgHgFgEQgHgEgCAAQgCgBgMgEQgygRAAgjQAAgXASgOQATgOAcAAQAfAAAbAbIgiAVQgPgPgNAAQgFAAgFADQgEAEAAAFQAAAIAFAEQAGAEAVAHQAWAIANALQAOAMAAAWQgBAVgTAQQgTAPgcAAQgSAAgSgKg");
	this.shape_157.setTransform(771.5,61.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CCCCCC").s().p("AgoA/QgZgaAAglQAAgkAXgaQAYgZAkAAQAZABAXAMIAAAvQgWgLgSAAQgRAAgJALQgKAKAAARQAAAPAKALQAJAKARAAQAOAAAZgKIAAAyQgZAMgSAAQgkAAgagZg");
	this.shape_158.setTransform(735.7,61.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CCCCCC").s().p("AhCBrQgUgaAAgkQAAglAWgYQAUgZAdgBQAQAAAMAHQAMAFAMAOIAAhzIAyAAIAAEEIgxAAIAAgdIgBAAQgWAfgfABQgdAAgVgZgAgWATQgLAKAAAUQAAAQAJAKQAKALAOAAQAOAAALgMQALgLAAgSQAAgPgKgLQgLgMgPAAQgLAAgLAMg");
	this.shape_159.setTransform(629.4,57.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CCCCCC").s().p("AAdBWIAAhdQAAgOgIgLQgIgKgLAAQgNAAgIANQgKANABATIAABTIgzAAIAAinIAzAAIAAAUQAZgYAcAAQAYAAAPATQAQAVAAAeIAABlg");
	this.shape_160.setTransform(609,61.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CCCCCC").s().p("Ag+BeQglgmABg3QgBg3AlgmQAlgnA0AAQAhAAAoARIAAA/QgqgZgfAAQgeAAgUAVQgSAWAAAjQAAAjATAUQAVAVAfAAQAdAAApgXIAAA+QgtAPgeAAQgzAAgkgmg");
	this.shape_161.setTransform(510.3,57.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_94},{t:this.shape_93,p:{x:559.8}},{t:this.shape_92},{t:this.shape_91,p:{x:594.1}},{t:this.shape_90,p:{x:615.3}},{t:this.shape_89,p:{x:633.5}},{t:this.shape_88,p:{x:661}},{t:this.shape_87,p:{x:677.9}},{t:this.shape_86,p:{x:694.1}},{t:this.shape_85},{t:this.shape_84,p:{x:730.4}},{t:this.shape_83},{t:this.shape_82,p:{x:767.7}},{t:this.shape_81,p:{x:783.5}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{y:187.4}},{t:this.shape_6,p:{y:193.9}},{t:this.shape_5},{t:this.shape_4,p:{y:194.1}},{t:this.shape_3,p:{x:162.6,y:194.1}},{t:this.shape_2,p:{y:194}},{t:this.shape_1},{t:this.shape}]},142).to({state:[{t:this.shape_94},{t:this.shape_93,p:{x:559.8}},{t:this.shape_92},{t:this.shape_91,p:{x:594.1}},{t:this.shape_90,p:{x:615.3}},{t:this.shape_89,p:{x:633.5}},{t:this.shape_88,p:{x:661}},{t:this.shape_87,p:{x:677.9}},{t:this.shape_86,p:{x:694.1}},{t:this.shape_85},{t:this.shape_84,p:{x:730.4}},{t:this.shape_83},{t:this.shape_82,p:{x:767.7}},{t:this.shape_81,p:{x:783.5}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{y:187.4}},{t:this.shape_6,p:{y:193.9}},{t:this.shape_5},{t:this.shape_4,p:{y:194.1}},{t:this.shape_3,p:{x:162.6,y:194.1}},{t:this.shape_2,p:{y:194}},{t:this.shape_1},{t:this.shape}]},27).to({state:[{t:this.shape_94},{t:this.shape_93,p:{x:559.8}},{t:this.shape_92},{t:this.shape_91,p:{x:594.1}},{t:this.shape_90,p:{x:615.3}},{t:this.shape_89,p:{x:633.5}},{t:this.shape_88,p:{x:661}},{t:this.shape_87,p:{x:677.9}},{t:this.shape_86,p:{x:694.1}},{t:this.shape_85},{t:this.shape_84,p:{x:730.4}},{t:this.shape_83},{t:this.shape_82,p:{x:767.7}},{t:this.shape_81,p:{x:783.5}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_133},{t:this.shape_7,p:{y:187.4}},{t:this.shape_6,p:{y:193.9}},{t:this.shape_5},{t:this.shape_4,p:{y:194.1}},{t:this.shape_3,p:{x:162.6,y:194.1}},{t:this.shape_2,p:{y:194}},{t:this.shape_1},{t:this.shape_132,p:{y:187.4}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93,p:{x:559.8}},{t:this.shape_92},{t:this.shape_91,p:{x:594.1}},{t:this.shape_90,p:{x:615.3}},{t:this.shape_89,p:{x:633.5}},{t:this.shape_88,p:{x:661}},{t:this.shape_87,p:{x:677.9}},{t:this.shape_86,p:{x:694.1}},{t:this.shape_85},{t:this.shape_84,p:{x:730.4}},{t:this.shape_83},{t:this.shape_82,p:{x:767.7}},{t:this.shape_81,p:{x:783.5}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_133},{t:this.shape_7,p:{y:187.4}},{t:this.shape_6,p:{y:193.9}},{t:this.shape_5},{t:this.shape_4,p:{y:194.1}},{t:this.shape_3,p:{x:162.6,y:194.1}},{t:this.shape_2,p:{y:194}},{t:this.shape_1},{t:this.shape_132,p:{y:187.4}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},14).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_93,p:{x:587.3}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_90,p:{x:648.3}},{t:this.shape_89,p:{x:666.5}},{t:this.shape_147},{t:this.shape_87,p:{x:710.9}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_84,p:{x:763.4}},{t:this.shape_144},{t:this.shape_143,p:{x:800.7}},{t:this.shape_142},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_3,p:{x:151.4,y:646.5}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_93,p:{x:587.3}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_90,p:{x:648.3}},{t:this.shape_89,p:{x:666.5}},{t:this.shape_147},{t:this.shape_87,p:{x:710.9}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_84,p:{x:763.4}},{t:this.shape_144},{t:this.shape_143,p:{x:800.7}},{t:this.shape_142},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_3,p:{x:151.4,y:646.5}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},28).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_93,p:{x:587.3}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_90,p:{x:648.3}},{t:this.shape_89,p:{x:666.5}},{t:this.shape_147},{t:this.shape_87,p:{x:710.9}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_84,p:{x:763.4}},{t:this.shape_144},{t:this.shape_143,p:{x:800.7}},{t:this.shape_142},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_3,p:{x:151.4,y:646.5}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_161},{t:this.shape_93,p:{x:531.5}},{t:this.shape_89,p:{x:549.7}},{t:this.shape_91,p:{x:565.8}},{t:this.shape_90,p:{x:587}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_143,p:{x:651.4}},{t:this.shape_88,p:{x:683.9}},{t:this.shape_87,p:{x:700.9}},{t:this.shape_86,p:{x:717.1}},{t:this.shape_158},{t:this.shape_84,p:{x:753.3}},{t:this.shape_157},{t:this.shape_82,p:{x:790.7}},{t:this.shape_81,p:{x:806.5}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_156},{t:this.shape_7,p:{y:188.1}},{t:this.shape_6,p:{y:194.6}},{t:this.shape_155},{t:this.shape_4,p:{y:194.8}},{t:this.shape_3,p:{x:162.6,y:194.8}},{t:this.shape_2,p:{y:194.7}},{t:this.shape_154},{t:this.shape_132,p:{y:188.1}}]},1).to({state:[{t:this.shape_161},{t:this.shape_93,p:{x:531.5}},{t:this.shape_89,p:{x:549.7}},{t:this.shape_91,p:{x:565.8}},{t:this.shape_90,p:{x:587}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_143,p:{x:651.4}},{t:this.shape_88,p:{x:683.9}},{t:this.shape_87,p:{x:700.9}},{t:this.shape_86,p:{x:717.1}},{t:this.shape_158},{t:this.shape_84,p:{x:753.3}},{t:this.shape_157},{t:this.shape_82,p:{x:790.7}},{t:this.shape_81,p:{x:806.5}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_156},{t:this.shape_7,p:{y:188.1}},{t:this.shape_6,p:{y:194.6}},{t:this.shape_155},{t:this.shape_4,p:{y:194.8}},{t:this.shape_3,p:{x:162.6,y:194.8}},{t:this.shape_2,p:{y:194.7}},{t:this.shape_154},{t:this.shape_132,p:{y:188.1}}]},29).wait(1));

	// Capa 9
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AhXB3IAagnQAWAYAbAAQAvAAAAguQAAgUgOgNQgOgNgXAAIgJAAIAAgpIAIAAQArAAAAglQAAglgogBQgVABgUATIgYgjQAJgLAUgJQATgHAUgBQAqABAYATQAXATAAAkQAAAqgkAVQAuAVAAAyQAAAogbAXQgbAXgvgBQgrAAgfgcg");
	this.shape_162.setTransform(251.9,305.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("ABoDAIgfhLIiSAAIgeBLIhUAAICal/IBAAAICcF/gAguAvIBbAAIgthwg");
	this.shape_163.setTransform(271.1,187.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AheBcQgjgoAAgzQAAg6AlglQAlglA6AAQA2AAAlAmQAkAmAAA3QAAA5gkAlQglAlg3AAQg+ABgigogAgmgsQgRASAAAYQAAAbARATQAQATAXAAQAWAAARgSQARgTAAgZQAAgZgRgTQgRgTgWAAQgWAAgRASg");
	this.shape_164.setTransform(218.6,194.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("Ag1BzQgcgPgTggIA9gcQAUAkAVAAQAKAAAIgHQAIgGgBgIQAAgLgJgFQgIgGgFAAQgBgCgTgGQhLgYgBg3QAAghAbgVQAcgWAqAAQAxAAAnApIgzAfQgWgWgTAAQgJAAgGAFQgHAFAAAIQAAAMAIAGQAHAFAiAMQAhALATARQAUATAAAgQAAAggeAYQgcAXgpAAQgcAAgbgQg");
	this.shape_165.setTransform(189.8,194);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AhcBfQgjgkAAg8QAAg3AlglQAlglA1AAQA3AAAlAnQAkAnAAA6IAAAMIizAAQACAYAOAPQAPAPATAAQAiAAATgfIBFAXQgmBDhRAAQg7AAgjgkgAghhDQgOANgDAWIBkAAQgKgvgmAAQgVAAgOAMg");
	this.shape_166.setTransform(162.6,194.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("Ag8BeQgmgmAAg4QAAg4AkglQAiglA2AAQAmAAAjARIAABHQgggQgcAAQgZAAgOAQQgQAPAAAZQAAAYAQAQQAOAPAYAAQAXAAAmgPIAABLQgnASgaAAQg3AAgnglg");
	this.shape_167.setTransform(136.1,194.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AheBcQgjgoAAgzQAAg6AlglQAlglA6AAQA2AAAlAmQAkAmAAA3QAAA5gkAlQglAlg3AAQg+ABgigogAgmgsQgRASAAAYQAAAbARATQAQATAXAAQAWAAARgSQARgTAAgZQAAgZgRgTQgRgTgWAAQgWAAgRASg");
	this.shape_168.setTransform(108.2,194.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AhHCAIAAj7IBLAAIAAAlIABAAQAKgTAQgLQAPgLAMAAIANABIAABSQgJgBgJAAQgXAAgNAQQgMAQAAAdIAABwg");
	this.shape_169.setTransform(83.9,193.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("Ah8DAIAAl/ICDAAQA1AAAhAfQAgAeAAAzQAAAhgQAeQgQAcghAPQgfAPgYAAIgvABIAACVgAgqh6IAABiIAfAAQAUAAAPgPQAPgPAAgUQAAgYgRgNQgQgMgeAAg");
	this.shape_170.setTransform(58.3,187.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("ABoDAIgfhLIiTAAIgdBLIhTAAICal/IA/AAICcF/gAguAvIBbAAIgthwg");
	this.shape_171.setTransform(830.7,55.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgYBoQgKgLAAgOQAAgPAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAPQAAAOgKALQgKALgPAAQgOAAgKgLgAgYg1QgKgLAAgPQAAgOAKgKQAKgLAOAAQAPAAAKALQAKAKAAAOQAAAPgKALQgKAKgPAAQgOAAgKgKg");
	this.shape_172.setTransform(228.4,309.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AAuBkQgJgHgCgKQgHAMgQAGQgQAIgSgBQghAAgUgRQgTgRAAgeQgBglAcgTQAbgVAxAAQAJAAAMADQgBglgtAAQgcAAgSAKIgLgnQAZgMAkABQAuAAAXAVQAVAWAAA9IAAAsQABApARALQgGALgIACQgIADgJgBQgKABgJgJgAguAqQABAcAgAAQArgBAAgrIAAgUQgNgDgFAAQg6AAAAAng");
	this.shape_173.setTransform(211,309.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AArBrIAAh5QAAgagKgMQgLgNgWAAQgLAAgMAGQgMAHgHAJIAACWIgxAAIAAjRIAjAAIAJAUQAUgYAmABQAlgBAWAXQAWAWAAAoIAACAg");
	this.shape_174.setTransform(188.4,309);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAIgMAAQgMAAgHgIg");
	this.shape_175.setTransform(169.9,305.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AhbB9IAfgmQAZAYAggBQAUABAOgHQANgGAAgLQAAgSgegBIgXADIgYACQgzgBAAgjQAAgLAIgKQAJgKALgEQgkgXAAgqQABgiAYgWQAYgWAlAAQAaAAAUAKIASgVIAjAeIgYARQANATAAAZQAAAjgXAVQgWAVghAAIgNgBIgHgCIgLAFQgJAEAAAFQAAAHAOABQAFgBAOgDQAOgCAKAAQBIAAAAA5QgBAfgcATQgdARgnABQgwgBgngcgAgfhaQgLAKAAARQAAASALAMQAKALARAAQARAAAJgLQAJgLAAgTQAAgQgKgLQgKgLgPAAQgRAAgKALg");
	this.shape_176.setTransform(154.8,312.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AAuCNQgIgHgDgKQgHALgRAHQgPAHgSAAQgiAAgTgRQgTgRgBgfQAAgkAcgVQAbgUAxAAQAJAAALADQAAgkgtAAQgbAAgTAJIgKgmQAZgMAiAAQAvAAAWAWQAXAWAAA7IAAAtQgBAqASALQgHAKgHADQgIACgJAAQgLAAgIgIgAgtBSQgBAcAhAAQArAAAAgsIAAgTQgMgDgHAAQg4AAAAAmgAgjhbIAig5IAuAAIgsA5g");
	this.shape_177.setTransform(134.1,305.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AhgCUIAAkjIAxAAIAAAOQASgRAbAAQBjAAAABtQAAAzgbAbQgdAcguAAQgYAAgSgJIAABYgAgvhcIAABtQANALASAAQAhAAAOgQQAPgPAAgjQAAglgPgPQgOgPghAAQgSAAgNANg");
	this.shape_178.setTransform(111.9,313.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegeAqAAQAtAAAcAaQAbAcAAAqQAAAIgEASIiUAAQABAZAQANQAQAPAaAAQAhgBARgRIATAmQgZAUg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_179.setTransform(76.4,309.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AhGB8QgagcAAgyQAAgwAdggQAdgfAqABQAYgBAUAKIAAhTIAxgNIAAErIgxAAIAAgNQgGAGgPAGQgOAEgPAAQgrAAgZgbgAgdgFQgQAQAAAiQAABBA+AAQAHAAAKgEQALgEADgFIAAhrQgQgNgRAAQgcAAgQASg");
	this.shape_180.setTransform(53,304.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgwAcgeQAbgdAtAAQAvAAAaAdQAaAcAAAyQABAxgbAeQgbAdguABQgwAAgZgfgAgjgyQgOASAAAgQAABEAyAAQAWABAOgTQANgSAAggQAAhDgxgBQgXAAgNASg");
	this.shape_181.setTransform(173.6,260.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AArCNIAAh5QAAgagKgMQgLgNgWAAQgLAAgMAHQgMAGgHAJIAACWIgxAAIAAjQIAjAAIAJATQAUgXAmAAQAlAAAWAWQAWAWAAAnIAACBgAgChhQgQgIgFAAQgKAAgHAPIgcAAQADgWAMgOQALgOARAAQAPAAAOAIQAPAHAFAAQALAAAGgPIAcAAQgHAdgLALQgKAKgRAAQgMAAgOgHg");
	this.shape_182.setTransform(150.5,257.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AAuBlQgIgIgDgJQgHAKgRAHQgPAIgSAAQgigBgTgQQgTgRgBgfQAAglAcgUQAbgUAxAAQAJAAALADQAAglgtAAQgbAAgTAJIgKglQAZgMAiAAQAvgBAWAWQAXAWAAA8IAAAsQgBAqASALQgHAKgHADQgIACgJABQgLgBgIgHgAgtApQgBAcAhAAQArAAAAgrIAAgUQgMgCgHgBQg4ABAAAlg");
	this.shape_183.setTransform(128.2,260.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("ABhBqIAAiBQAAgqgmAAQgKAAgLAHQgKAGgDAJIAACVIgxAAIAAiJQAAgPgJgKQgJgJgSAAQgJAAgLAHQgLAHgFAIIAACVIgwAAIAAjQIAhAAIAKASQAUgWAgABQAqAAAUAWQAJgKAQgHQARgFARAAQAigBAUAVQAUATgBAjIAACJg");
	this.shape_184.setTransform(100.2,260.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AAuBlQgIgIgDgJQgHAKgRAHQgPAIgSAAQghgBgUgQQgTgRgBgfQAAglAcgUQAbgUAxAAQAJAAALADQAAglgtAAQgbAAgTAJIgKglQAZgMAjAAQAugBAWAWQAXAWAAA8IAAAsQgBAqASALQgHAKgHADQgIACgJABQgLgBgIgHgAgtApQAAAcAgAAQArAAAAgrIAAgUQgMgCgHgBQg4ABAAAlg");
	this.shape_185.setTransform(72.5,260.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgaCPIAAjwIhbAAIAAgtIDrAAIAAAtIhfAAIAADwg");
	this.shape_186.setTransform(54,256.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CCCCCC").s().p("AhxBxIB+jOIh4AAIAAgzIDdAAIixEhg");
	this.shape_187.setTransform(326.9,634.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CCCCCC").s().p("AhMByQgcgcAAgsQAAgeAOggQAOghASgYIAthAIBJAAIhFBeQAOgCAMAAQAkAAAaAbQAaAaAAAmQAAArgfAdQgfAcguAAQgsAAgdgcgAggAJQgNAOAAATQAAASANANQANANATAAQARAAAMgNQAMgNAAgTQAAgTgMgNQgMgMgRABQgTgBgNAMg");
	this.shape_188.setTransform(326.9,583.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#CCCCCC").s().p("Ag4CJQgQgHgUgNIAGhAQAuAeAaAAQASAAAOgOQAOgNAAgSQAAgUgOgOQgOgMgUABQgagBgdALIAPiQICJAAIAAAzIhTAAIgDAhQAvAAAaAcQAZAcAAAmQAAAqghAgQghAggtAAQgVgBgRgFg");
	this.shape_189.setTransform(326.9,532.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CCCCCC").s().p("AASCMIAAhDIh7AAIAAg0ICAigIA5AAIAAChIAaAAIAAAzIgaAAIAABDgAg2AWIBIAAIAAhbIgBAAg");
	this.shape_190.setTransform(326.2,480.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#CCCCCC").s().p("AhAB6QgZgXgHgpIA6AAQAKAoAdAAQAOAAALgKQAKgLAAgPQAAgTgMgMQgNgMgRAAIgLAAIAAguIAGAAQATAAANgKQAMgKgBgQQAAgPgJgKQgKgLgNAAQggAAgFApIg4AAQACgnAagXQAZgXAkAAQAmAAAcAWQAbAWAAAgQAAAighAcQAVAMAKAPQAKAPAAAUQAAAogaAYQgaAXgrAAQgnAAgbgWg");
	this.shape_191.setTransform(326.7,429.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CCCCCC").s().p("AhgCPIBgh5QAUgaAJgRQAJgRAAgPQAAgRgLgKQgLgLgQAAQgSAAgHAOQgJANgCAcIg+AAQAAgzAegcQAegbArAAQApAAAbAYQAaAYAAAlQAAAlgfArIgRAZQgJAPgPATIgIAJIBQAAIAAA0g");
	this.shape_192.setTransform(326.9,378.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CCCCCC").s().p("AgJCMIAAjkIgpAAIALgzIBaAAIAAEXg");
	this.shape_193.setTransform(324.9,328);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#CCCCCC").s().p("AhOBpQgfgmAAg/QAAhCAegoQAegpAxAAIABAAQAxAAAfAnQAdAmAABAQAABKghAkQghAkgrAAQgwAAgfgngAgkhAQgOAYAAArQAAAoAOAXQAOAYAWAAQAXAAAOgYQAOgXAAgpQAAgqgNgYQgOgYgXAAQgXAAgOAYg");
	this.shape_194.setTransform(326.9,276.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAbgeQAcgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQguAAgagegAgjgyQgNASAAAgQgBBEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_195.setTransform(176.9,593.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgnBpQgNgEgUgKIASgnQAVARAdAAQAbABAAgVQAAgMgJgHQgIgIgYgKQg2gWgBgoQAAgcAWgPQAUgPAfAAQAhAAAcAPIgNAmQgRgNgcAAQgZgBABAVQAAAIAIAGQAIAHAbAKQAbALAMAOQANAQAAAWQgBAdgVARQgWAQgjAAQgWAAgMgDg");
	this.shape_196.setTransform(157,593.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegfAqAAQAtAAAcAbQAbAbAAAqQAAAKgEARIiUAAQABAZAQANQAQAOAaABQAhAAARgSIATAlQgZAWg0gBQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_197.setTransform(136.8,593.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("Ag8BQQgdgcAAgyQAAgxAfgeQAfgfA0AAQAkABAbAUIgVAlQgRgRgdAAQgbAAgQATQgQASAAAgQAABCA+AAQAbgBAVgRIASAmQgWANgPAEQgQADgWAAQgvAAgcgcg");
	this.shape_198.setTransform(115.1,593.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAcgeQAbgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQgvAAgZgegAgjgyQgOASAAAgQAABEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_199.setTransform(93.6,593.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_200.setTransform(74.9,593.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AheCQIAAkdIA7gCQBDAAAgAVQAfAVAAArQAABihzAAIgXgBIAABpgAgrhhIAABcIAUABQAiAAAQgLQAQgNAAgaQAAgshHAAIgPABg");
	this.shape_201.setTransform(54.1,590);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AhGBrIAAjRIAxAAIAAAUQAUgYAhAAQAZABAOAHIgVAqQgNgJgQAAQgRAAgMAPQgNAQAAAWIAAB3g");
	this.shape_202.setTransform(197.7,545.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AAuBkQgIgHgDgKQgHAMgRAGQgPAIgSgBQgiAAgTgRQgUgRAAgeQABglAbgTQAbgVAyAAQAIAAALADQABglguAAQgbAAgTAKIgKgnQAYgMAjAAQAvABAWAVQAXAWgBA9IAAAsQAAApARALQgFALgIACQgHADgKgBQgKABgJgJgAgtAqQgBAcAhAAQArgBAAgrIAAgUQgNgDgGAAQg4AAAAAng");
	this.shape_203.setTransform(177.5,545.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AhcBpIAAgRIBwiVIhuAAIAAgrIC2AAIAAARIhtCVIBuAAIAAArg");
	this.shape_204.setTransform(156.1,545.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAIgMAAQgMAAgHgIg");
	this.shape_205.setTransform(138.9,541.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgjBqIAAj0IAwgNIAADrQAAAnAXAHQgLAWgbgBQghAAAAgtg");
	this.shape_206.setTransform(128.9,541.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AAuBkQgIgHgDgKQgHAMgQAGQgQAIgSgBQgiAAgTgRQgUgRAAgeQABglAbgTQAbgVAyAAQAIAAALADQABglguAAQgbAAgTAKIgKgnQAYgMAjAAQAvABAXAVQAWAWgBA9IAAAsQAAApARALQgFALgIACQgHADgKgBQgKABgJgJgAgtAqQgBAcAhAAQArgBAAgrIAAgUQgNgDgFAAQg5AAAAAng");
	this.shape_207.setTransform(111.4,545.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AArBrIAAh5QAAgagKgMQgLgNgWAAQgLAAgMAGQgMAHgHAJIAACWIgxAAIAAjRIAjAAIAJAUQAUgYAmAAQAlAAAWAXQAWAWAAAoIAACAg");
	this.shape_208.setTransform(88.8,545.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAIgMAAQgMAAgHgIg");
	this.shape_209.setTransform(70.3,541.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AhdCPIAAkdIC7AAIAAAtIiJAAIAABDIBkAAIAAAqIhkAAIAACDg");
	this.shape_210.setTransform(54.1,541.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AhpCQIAAkdIBMgCQA9AAAlAlQAlAkAAA9QAACZiTAAgAg3hhIAADDQANABAOAAQAmAAAWgcQAVgcAAgxQAAhchUAAIgYABg");
	this.shape_211.setTransform(774.8,185.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AA5CPIAAiBIhxAAIAACBIgyAAIAAkdIAyAAIAABwIBxAAIAAhwIAyAAIAAEdg");
	this.shape_212.setTransform(747.6,185.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgjBqIAAj1IAwgMIAADrQAAAmAXAIQgLAVgbABQghgBAAgtg");
	this.shape_213.setTransform(717.2,185.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AhJBRQgcgcAAgzQAAgwAfgfQAegfAqABQAtAAAcAbQAbAbAAApQAAAKgEARIiUAAQABAZAQAOQAQAOAagBQAhAAARgRIATAlQgZAWg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_214.setTransform(698.6,189.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AhGB8QgagcAAgyQAAgxAdgfQAdgeAqAAQAYAAAUAJIAAhUIAxgMIAAEqIgxAAIAAgMQgGAHgPAEQgOAGgPAAQgrAAgZgcgAgdgFQgQARAAAhQAABBA+AAQAHAAAKgEQALgEADgEIAAhsQgQgNgRAAQgcAAgQASg");
	this.shape_215.setTransform(675.2,185.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AAuBlQgJgIgCgJQgHAKgQAIQgQAGgSAAQghAAgUgQQgUgRABggQgBgkAcgTQAbgVAyAAQAIAAAMADQAAglguAAQgcAAgSAKIgLgmQAZgNAkAAQAuAAAXAXQAVAVAAA9IAAAsQAAApARALQgFAKgIADQgHACgKAAQgLAAgIgHgAguApQAAAcAhAAQArAAAAgsIAAgTQgNgDgFABQg6gBAAAmg");
	this.shape_216.setTransform(813.6,141.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgMAIgIQAHgIAMAAQAMAAAIAIQAIAIAAAMQAAAMgIAIQgIAJgMAAQgMAAgHgJg");
	this.shape_217.setTransform(796.1,137.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_218.setTransform(783.5,141);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AhJBOQgbgdAAgxQAAgvAdgeQAbgfAtAAQAvAAAbAeQAaAcAAAyQgBAxgaAeQgbAdguAAQgwAAgagegAgjgyQgOASAAAgQAABEAyABQAWgBAOgRQANgSAAghQAAhEgxABQgXAAgNARg");
	this.shape_219.setTransform(762.4,141.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("ABhBqIAAiCQgBgpgkAAQgLAAgLAHQgKAGgDAIIAACWIgxAAIAAiJQAAgPgJgJQgKgKgRAAQgJAAgLAHQgLAHgFAIIAACVIgwAAIAAjPIAhAAIAKASQAUgXAgAAQAqABAUAWQAKgKAPgHQARgFARgBQAiAAAUAVQAUATgBAkIAACIg");
	this.shape_220.setTransform(733.9,141);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegfAqAAQAtAAAcAbQAbAbAAAqQAAAJgEASIiUAAQABAZAQANQAQAOAaABQAhAAARgSIATAlQgZAWg0gBQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_221.setTransform(705.2,141.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgHCRIg6idIgfCZIgxAAIA5kdIAcAAIA9C/IA8i/IAbAAIA6EdIgxAAIgeiZIg5Cdg");
	this.shape_222.setTransform(678.9,137.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AAuBlQgIgIgDgKQgHALgRAIQgPAHgSAAQgigBgTgQQgUgRAAgfQABglAbgUQAbgUAyAAQAIAAALADQABglguAAQgbAAgTAJIgKgmQAYgLAjAAQAvgBAWAWQAXAWgBA8IAAAsQAAAqARALQgFAKgIADQgHACgKABQgKgBgJgHgAgtApQgBAcAhAAQArAAAAgrIAAgUQgNgCgGgBQg4ABAAAlg");
	this.shape_223.setTransform(538.4,189.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AArBqIAAh3QAAgbgKgMQgLgNgWAAQgLAAgMAHQgMAFgHAKIAACVIgxAAIAAjQIAjAAIAJAUQAUgXAmAAQAlAAAWAWQAWAWAAAoIAAB/g");
	this.shape_224.setTransform(515.9,189.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAJgMAAQgMAAgHgJg");
	this.shape_225.setTransform(497.4,185.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AhbB9IAfgmQAZAXAgABQAUgBAOgGQAOgGAAgLQAAgTgfABIgXABIgZACQgyAAAAgkQAAgKAIgKQAJgKALgEQgkgXABgrQAAghAYgWQAZgWAjAAQAcAAASALIATgXIAiAfIgXARQANATAAAYQAAAkgXAWQgVAUgiAAIgMgBIgIgBIgLAEQgJAEAAAEQAAAJANgBQAHAAANgCQAOgDAKAAQBHAAAAA5QABAggdARQgdATgngBQgwAAgngcgAgghbQgKALAAARQAAASAKAMQAKALASAAQARAAAIgLQAKgLAAgTQAAgQgKgLQgKgLgPAAQgRAAgLAKg");
	this.shape_226.setTransform(482.3,193);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AAuCNQgJgHgCgKQgHALgQAHQgQAHgSAAQghAAgUgRQgTgRAAgfQAAgkAbgVQAbgUAxAAQAJAAAMADQgBgkgtAAQgcAAgSAJIgLgmQAZgMAkAAQAuAAAXAWQAVAWABA7IAAAtQAAAqARALQgHAKgHADQgIACgJAAQgLAAgIgIgAguBSQABAcAgAAQArAAAAgsIAAgTQgNgDgFAAQg6AAAAAmgAgjhbIAhg5IAvAAIgsA5g");
	this.shape_227.setTransform(461.5,185.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AhgCTIAAkiIAxAAIAAAPQASgTAbABQBjAAAABuQAAAygbAcQgdAcguAAQgXAAgTgKIAABXgAgvhbIAABtQANAKASAAQAgAAAQgQQAOgPAAgjQAAglgOgPQgPgPghAAQgSAAgNAOg");
	this.shape_228.setTransform(439.4,193.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AhJBRQgcgcAAgzQAAgwAfgfQAegfAqABQAtAAAcAbQAbAbAAApQAAAKgEARIiUAAQABAZAQAOQAQAOAagBQAhAAARgRIATAlQgZAWg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_229.setTransform(403.8,189.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AhGB8QgagcAAgyQAAgxAdgfQAdgeAqAAQAYAAAUAJIAAhUIAxgMIAAEqIgxAAIAAgMQgGAHgPAEQgOAGgPAAQgrAAgZgcgAgdgFQgQARAAAhQAABBA+AAQAHAAAKgEQALgEADgEIAAhsQgQgNgRAAQgcAAgQASg");
	this.shape_230.setTransform(380.5,185.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgnBpQgNgEgUgKIASgnQAVARAdAAQAbABAAgVQAAgMgJgHQgIgIgYgKQg2gWgBgoQAAgcAWgPQAUgPAfAAQAhAAAcAPIgNAmQgRgNgcAAQgZgBABAVQAAAHAIAHQAIAHAbAKQAbALAMAOQANAQAAAWQgBAdgVARQgWAQgjAAQgWAAgMgDg");
	this.shape_231.setTransform(489.1,141.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAcgeQAbgfAtAAQAvAAAaAeQAbAcAAAyQgBAxgaAeQgbAdguAAQgwAAgZgegAgjgyQgOASAAAgQAABEAyABQAWgBAOgRQANgSAAghQAAhEgxABQgXAAgNARg");
	this.shape_232.setTransform(469.1,141.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("Ag8BQQgdgcAAgyQAAgxAfgeQAfgfA0AAQAkABAbAUIgVAlQgRgRgdAAQgbAAgQATQgQASAAAgQAABCA+AAQAbgBAVgRIASAmQgWANgPAEQgQADgWAAQgvAAgcgcg");
	this.shape_233.setTransform(447.6,141.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_234.setTransform(430,141);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AAuBlQgJgIgCgJQgHAKgQAIQgQAGgSAAQghAAgUgQQgTgRAAggQAAgkAbgTQAbgVAxAAQAJAAAMADQgBglgtAAQgcAAgSAKIgLgmQAZgNAkAAQAuAAAXAXQAVAVABA9IAAAsQAAApARALQgHAKgHADQgIACgJAAQgLAAgIgHgAguApQABAcAgAAQArAAAAgsIAAgTQgNgDgFABQg6gBAAAmg");
	this.shape_235.setTransform(409.8,141.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgHCRIg6idIgfCZIgxAAIA5kdIAcAAIA9C/IA8i/IAbAAIA6EdIgxAAIgeiZIg5Cdg");
	this.shape_236.setTransform(384.2,137.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAbgeQAcgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQguAAgagegAgjgyQgNASAAAgQgBBEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_237.setTransform(176.9,141.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AgnBpQgNgEgUgKIASgnQAVARAdAAQAbABAAgVQAAgMgJgHQgIgIgYgKQg2gWgBgoQAAgcAWgPQAUgPAfAAQAhAAAcAPIgNAmQgRgNgcAAQgZgBABAVQAAAHAIAHQAIAHAbAKQAbALAMAOQANAQAAAWQgBAdgVARQgWAQgjAAQgWAAgMgDg");
	this.shape_238.setTransform(157,141.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegfAqAAQAtAAAcAbQAbAbAAAqQAAAJgEASIiUAAQABAZAQANQAQAOAaABQAhAAARgSIATAlQgZAWg0gBQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_239.setTransform(136.8,141.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("Ag8BQQgdgcAAgyQAAgxAfgeQAfgfA0AAQAkABAbAUIgVAlQgRgRgdAAQgbAAgQATQgQASAAAgQAABCA+AAQAbgBAVgRIASAmQgWANgPAEQgQADgWAAQgvAAgcgcg");
	this.shape_240.setTransform(115.1,141.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAcgeQAbgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQgvAAgZgegAgjgyQgOASAAAgQAABEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_241.setTransform(93.6,141.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_242.setTransform(74.9,141);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AheCQIAAkdIA7gCQBDAAAgAVQAfAVAAArQAABihzAAIgXgBIAABpgAgrhhIAABcIAUABQAiAAAQgLQAQgNAAgaQAAgshHAAIgPABg");
	this.shape_243.setTransform(54.1,137.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#CCCCCC").s().p("AgVBJQgJgJAAgMQAAgNAKgKQAIgIAMgBQANABAJAIQAKAKAAANQAAAMgKAJQgJAJgNAAQgMAAgJgJgAgVgcQgJgJAAgNQAAgMAJgKQAJgJAMAAQANAAAIAJQAKAKAAAMQAAANgKAJQgIAJgNAAQgMAAgJgJg");
	this.shape_244.setTransform(783.5,62.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#CCCCCC").s().p("Ag/A9QgXgaAAgjQAAgmAZgYQAZgYAmgBQAkAAAYAZQAZAZAAAlQAAAmgZAZQgYAZglAAQgpAAgXgbgAgZgdQgLAMAAARQAAAQALANQALANAPAAQAPAAAKgNQAMgMAAgRQAAgPgMgNQgKgNgPAAQgPAAgLAMg");
	this.shape_245.setTransform(767.7,61.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#CCCCCC").s().p("AgjBNQgTgKgMgWIAogSQAOAYANAAQAHAAAGgFQAEgEAAgFQAAgHgFgEQgHgEgCAAQgCgBgLgEQgzgRAAgjQAAgXASgOQASgOAdAAQAgAAAaAbIgiAVQgPgPgNAAQgFAAgFADQgEAEAAAFQAAAIAFAEQAGAEAVAHQAWAIANALQAOAMAAAWQgBAVgTAQQgTAPgcAAQgSAAgSgKg");
	this.shape_246.setTransform(748.5,61.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#CCCCCC").s().p("Ag9A/QgXgYAAgnQAAgkAZgaQAYgZAjAAQAlABAYAaQAYAaAAAmIAAAIIh2AAQABAQAJAKQAKAKANAAQAWABANgWIAuAQQgaAtg2AAQgmAAgYgZgAgVgsQgKAIgCAQIBDAAQgHgggaAAQgNAAgJAIg");
	this.shape_247.setTransform(730.4,61.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#CCCCCC").s().p("AgoA/QgZgaAAglQAAgkAXgaQAYgZAkAAQAZABAXAMIAAAvQgWgLgSAAQgQAAgKALQgKAKAAARQAAAPAKALQAJAKARAAQAOAAAZgKIAAAyQgZAMgSAAQgkAAgagZg");
	this.shape_248.setTransform(712.8,61.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#CCCCCC").s().p("Ag/A9QgXgaAAgjQAAgmAZgYQAZgYAmgBQAkAAAZAZQAYAZAAAlQAAAmgYAZQgZAZglAAQgpAAgXgbgAgZgdQgLAMAAARQAAAQALANQALANAPAAQAPAAALgNQAKgMABgRQgBgPgKgNQgLgNgPAAQgPAAgLAMg");
	this.shape_249.setTransform(694.1,61.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#CCCCCC").s().p("AgvBVIAAinIAxAAIAAAZIABAAQAHgMAKgIQAKgHAIAAIAKABIAAA2IgNgBQgPAAgJALQgIALAAASIAABLg");
	this.shape_250.setTransform(677.9,61.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#CCCCCC").s().p("AhWB7IAAjxIAyAAIAAAZIAAAAQALgPANgHQALgHAQAAQAeAAAVAbQAVAaAAAmQAAAhgUAZQgVAZgdAAQgQAAgMgHQgLgIgNgPIgBAAIAABlgAgYg8QgLAMAAARQAAAQALALQALALAOAAQAOAAAKgKQAKgLAAgRQAAgRgLgMQgKgMgOAAQgPAAgJAMg");
	this.shape_251.setTransform(661,65.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#CCCCCC").s().p("AgvBVIAAinIAxAAIAAAZIABAAQAHgMAKgIQAKgHAIAAIAKABIAAA2IgNgBQgPAAgJALQgIALAAASIAABLg");
	this.shape_252.setTransform(633.5,61.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#CCCCCC").s().p("AhCA+QgUgZAAglQAAgjAWgZQAWgaAeAAQANAAAMAGQAMAHAMAOIAAgXIAyAAIAACmIgyAAIAAgcIAAAAQgMAQgMAIQgMAHgQAAQgeAAgVgZgAgXgYQgKAMAAARQAAAQAJALQAKAKAOAAQAPAAALgMQAKgMAAgRQAAgOgKgMQgLgLgOAAQgOAAgKAMg");
	this.shape_253.setTransform(615.3,61.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#CCCCCC").s().p("Ag4BrQgVgNgJgfIA4AAQARAWASABQAPAAAJgNQAJgMAAgUIAAgUQgWAdgdAAQgfAAgVgZQgWgYAAgkQAAgjAWgZQAWgZAfAAQAZAAAZAbIAAgXIAyAAIAACpQAAAOgJATQgJARgVAJQgWAJgbAAQgjAAgVgOgAgWhAQgLAMAAASQAAANALAMQALAMAOAAQAPAAAKgLQALgMAAgQQAAgSgKgKQgKgLgQAAQgPAAgKALg");
	this.shape_254.setTransform(594.1,65);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#CCCCCC").s().p("AgvBVIAAinIAxAAIAAAZIABAAQAHgMAKgIQAKgHAIAAIAKABIAAA2IgNgBQgPAAgJALQgIALAAASIAABLg");
	this.shape_255.setTransform(578,61.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#CCCCCC").s().p("AhCA+QgUgZAAglQAAgjAWgZQAWgaAeAAQANAAAMAGQAMAHAMAOIAAgXIAyAAIAACmIgyAAIAAgcIAAAAQgMAQgMAIQgMAHgQAAQgeAAgVgZgAgXgYQgKAMAAARQAAAQAJALQAKAKAOAAQAPAAALgMQAKgMAAgRQAAgOgKgMQgLgLgOAAQgOAAgKAMg");
	this.shape_256.setTransform(559.8,61.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#CCCCCC").s().p("Ag/BeQgjgmgBg3QABg3AkgmQAlgnAzAAQAjAAAmARIAAA/QgpgZggAAQgeAAgSAVQgTAWAAAjQAAAjAUAUQATAVAhAAQAcAAAogXIAAA+QgtAPgeAAQgzAAgkgmg");
	this.shape_257.setTransform(538.6,57.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AiFDAIAAl/IBxAAQBFAAAZAdQAaAdAAAnQAAAZgJARQgKASgUARQAnAOARAaQARAbAAAeQAAA1glAeQgkAdhBAAgAgyCAIAeAAQBDAAAAgyQAAgbgRgPQgQgOgeAAIgiAAgAgygrIATAAQAVAAANgNQAPgNAAgUQAAgQgOgLQgNgLgVAAIgUAAg");
	this.shape_258.setTransform(267.6,187.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AiFDAIAAl/IBxAAQBFAAAZAdQAaAdAAAnQAAAZgJARQgKASgUARQAnAOARAaQARAbAAAeQAAA1glAeQgkAdhBAAgAgyCAIAeAAQBDAAAAgyQAAgbgRgPQgQgOgeAAIgiAAgAgygrIATAAQAVAAANgNQAPgNAAgUQAAgQgOgLQgNgLgVAAIgUAAg");
	this.shape_259.setTransform(827.3,55.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#333333").ss(1,1,1).p("AwyAQIAAo1MAhlAAAIAAI1gAQzAQIAAIWMghlAAAIAAoW");
	this.shape_260.setTransform(470.9,565);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,110.8).s().p("AwyELIAAoVMAhlAAAIAAIVg");
	this.shape_261.setTransform(147.2,438.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#333333").ss(1,1,1).p("AwyAQIAAo1MAhlAAAIAAI1IAAIWMghlAAAgAQzAQMghlAAA");
	this.shape_262.setTransform(470.9,565);

	this.instance_13 = new lib.Símbolo5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(470.9,600,1,1,0,0,0,107.5,30);

	this.instance_14 = new lib.Símbolo5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(470.9,540,1,1,0,0,0,107.5,30);

	this.instance_15 = new lib.Símbolo5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(470.9,540,1,1,0,0,0,107.5,30);

	this.instance_16 = new lib.Símbolo5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(470.9,540,1,1,0,0,0,107.5,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},64).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},15).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163}]},30).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_259},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_258}]},1).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_259},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_258}]},30).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_259},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_262}]},27).to({state:[{t:this.shape_262},{t:this.instance_14,p:{y:540,x:470.9}},{t:this.instance_13,p:{x:470.9,y:600}}]},1).to({state:[{t:this.shape_260},{t:this.instance_15,p:{y:540}},{t:this.instance_14,p:{y:600,x:470.9}},{t:this.instance_13,p:{x:759.3,y:261.7}}]},14).to({state:[{t:this.shape_260},{t:this.instance_16},{t:this.instance_15,p:{y:600}},{t:this.instance_14,p:{y:261.7,x:759.3}},{t:this.instance_13,p:{x:759.3,y:321.7}}]},1).to({state:[{t:this.shape_262},{t:this.instance_16},{t:this.instance_15,p:{y:600}},{t:this.instance_14,p:{y:261.7,x:759.3}},{t:this.instance_13,p:{x:759.3,y:321.7}}]},28).to({state:[{t:this.shape_260},{t:this.instance_16},{t:this.instance_15,p:{y:600}},{t:this.instance_14,p:{y:261.7,x:759.3}},{t:this.instance_13,p:{x:759.3,y:321.7}}]},1).to({state:[{t:this.shape_260},{t:this.instance_14,p:{y:540,x:470.9}},{t:this.instance_13,p:{x:470.9,y:600}}]},1).to({state:[{t:this.shape_262},{t:this.instance_15,p:{y:540}},{t:this.instance_14,p:{y:600,x:470.9}},{t:this.instance_13,p:{x:470.9,y:428.4}}]},29).wait(1));

	// Capa 2
	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#CCCCCC").s().p("AgQBpQgHgIAAgJQAAgLAHgHQAHgHAJAAQAKAAAHAHQAHAHAAALQAAAJgHAIQgHAHgKAAQgJAAgHgHgAgQhFQgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAHQAHAHAAALQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_263.setTransform(641.9,296.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#CCCCCC").s().p("AgMCTIAAklIAZAAIAAElg");
	this.shape_264.setTransform(631.8,292.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#CCCCCC").s().p("AhOBPQgfghAAguQAAgtAfghQAhghAtAAQAZAAAVALQAWAMAPAWIAAgnIAbAAIAADTIgbAAIAAgkQgRAVgUAKQgWALgYAAQguAAggghgAgohJQgTALgLAUQgMAVAAAVQAAAXAMAUQALAVATALQAUAMAVAAQAXAAAUgMQAUgLALgTQAKgUAAgYQAAgkgXgZQgZgYgkAAQgVAAgUALg");
	this.shape_265.setTransform(613.7,296.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#CCCCCC").s().p("AhuCUIAAkhIAbAAIAAAnQARgWAVgMQAVgLAZAAQAtAAAgAhQAhAhAAAtQgBAugfAhQggAhgtAAQgYAAgWgLQgVgKgSgVIAABygAg8hgQgYAZAAAlQAAAYAKATQALATAVALQATAMAXAAQAVAAATgMQAUgLAMgVQALgTAAgXQAAgWgLgVQgMgUgTgLQgUgLgWAAQgjAAgYAYg");
	this.shape_266.setTransform(587.4,300.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#CCCCCC").s().p("AgNCWIAAjTIAaAAIAADTgAgPhvQgHgGAAgJQAAgKAHgGQAHgHAIAAQAJAAAHAHQAHAGgBAKQABAJgHAGQgHAHgJAAQgIAAgHgHg");
	this.shape_267.setTransform(569.2,292.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#CCCCCC").s().p("AhKBQQghggAAguQAAgeAPgaQAQgbAbgPQAcgPAgAAQAVAAAUAHQATAGAOALQANAKAKAQIgWANQgbglgxAAQgmAAgaAZQgZAZAAAjQAAAXAMAUQALAVAVALQAVAMAYAAQAvAAAdgmIAWAOQgPAXgaANQgaANggAAQgyAAghggg");
	this.shape_268.setTransform(552.2,296.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#CCCCCC").s().p("ABBBtIAAhmQAAgjgDgMQgFgWgNgKQgOgLgVAAQgYAAgUARQgTAQgHAYQgDAQAAApIAABOIgcAAIAAjTIAcAAIAAAlQAQgWAUgKQAUgLAWAAQAYAAATAMQASAMAJAVQAJAUAAArIAABtg");
	this.shape_269.setTransform(527.2,296.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CCCCCC").s().p("AgMCWIAAjTIAaAAIAADTgAgPhvQgHgGABgJQgBgKAHgGQAHgHAIAAQAJAAAHAHQAHAGAAAKQAAAJgHAGQgHAHgJAAQgIAAgHgHg");
	this.shape_270.setTransform(510.9,292.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#CCCCCC").s().p("Ag1BtIAAjTIAcAAIAAAeQANgSANgJQAOgJAPAAQALAAANAHIgOAYQgJgFgGAAQgOAAgLAMQgNALgHAXQgFATAAA2IAABIg");
	this.shape_271.setTransform(502.2,296.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#CCCCCC").s().p("AhuCUIAAkhIAbAAIAAAnQARgWAVgMQAVgLAZAAQAtAAAgAhQAhAhAAAtQgBAugfAhQggAhgtAAQgYAAgWgLQgVgKgSgVIAABygAg8hgQgYAZAAAlQAAAYAKATQALATAVALQATAMAXAAQAVAAATgMQAUgLAMgVQALgTAAgXQAAgWgLgVQgMgUgTgLQgUgLgVAAQgkAAgYAYg");
	this.shape_272.setTransform(481.7,300.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#CCCCCC").s().p("AhNBPQghghAAguQAAgtAhghQAgghAtAAQAZAAAWALQAVAMAQAWIAAgnIAbAAIAADTIgbAAIAAgkQgRAVgVAKQgWALgZAAQgtAAgfghgAgohJQgTALgLAUQgMAVAAAVQAAAXAMAUQALAVATALQAUAMAWAAQAVAAAUgMQAVgLALgTQAKgUAAgYQAAgkgYgZQgYgYgjAAQgXAAgTALg");
	this.shape_273.setTransform(442.4,296.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#CCCCCC").s().p("AgNCWIAAjTIAaAAIAADTgAgPhvQgHgGAAgJQAAgKAHgGQAHgHAIAAQAJAAAHAHQAHAGgBAKQABAJgHAGQgHAHgJAAQgIAAgHgHg");
	this.shape_274.setTransform(425.2,292.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CCCCCC").s().p("Ag1BtIAAjTIAcAAIAAAeQANgSANgJQAOgJAPAAQALAAANAHIgOAYQgJgFgGAAQgOAAgLAMQgNALgHAXQgFATAAA2IAABIg");
	this.shape_275.setTransform(416.5,296.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#CCCCCC").s().p("AhPBPQgfgiAAgsQAAgsAdggQAhgkAwAAQAxAAAgAkQAeAgAAAsQAAAsgfAiQgfAhgxAAQgwAAgfghgAg5g7QgZAZAAAjQAAAXALAUQALAUATALQATALAWAAQAWAAAUgLQATgLALgUQALgUAAgXQAAgjgYgZQgZgZgiAAQghAAgYAZg");
	this.shape_276.setTransform(396.1,296.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#CCCCCC").s().p("ACDBtIAAhzQAAgigFgNQgFgNgMgIQgLgIgRAAQgUABgQALQgQAMgIAUQgIATAAAtIAABTIgaAAIAAhtQAAgmgFgNQgFgOgMgIQgLgJgRAAQgTAAgQAMQgRAMgIATQgIATAAAnIAABaIgbAAIAAjTIAbAAIAAAkQAPgUAPgJQAUgNAXAAQAQAAAOAGQAOAGAIALQAIAJAHATQANgZAVgNQAUgNAYAAQAWAAARALQAQAMAJATQAIAUAAAoIAABzg");
	this.shape_277.setTransform(364.4,296.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#CCCCCC").s().p("AhPBOQgegiAAgrQAAgoAZgfQAggpA0AAQA2AAAgApQAXAeABAqIi/AAQABAlAXAYQAXAYAiAAQAPAAAPgGQAQgGAKgJQALgJANgVIAXAMQgMAWgOAOQgPANgTAIQgSAHgYAAQgzAAgdgigAg1hAQgQAOgJAeICeAAQgGgWgKgNQgLgOgRgIQgRgIgTAAQgfAAgWAVg");
	this.shape_278.setTransform(332.4,296.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#CCCCCC").s().p("ACDBtIAAhzQAAgigFgNQgFgNgMgIQgLgIgRAAQgUABgQALQgQAMgIAUQgIATAAAtIAABTIgaAAIAAhtQAAgmgFgNQgFgOgMgIQgLgJgRAAQgTAAgQAMQgRAMgIATQgIATAAAnIAABaIgbAAIAAjTIAbAAIAAAkQAPgUAPgJQAUgNAXAAQAQAAAOAGQAOAGAIALQAIAJAHATQANgZAVgNQAUgNAYAAQAWAAARALQAQAMAJATQAIAUAAAoIAABzg");
	this.shape_279.setTransform(300.9,296.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#CCCCCC").s().p("AhPBOQgegiAAgrQAAgoAZgfQAggpA0AAQA2AAAgApQAXAeABAqIi/AAQABAlAXAYQAXAYAiAAQAPAAAPgGQAQgGAKgJQALgJANgVIAXAMQgMAWgOAOQgPANgTAIQgSAHgYAAQgzAAgdgigAg1hAQgQAOgJAeICeAAQgGgWgKgNQgLgOgRgIQgRgIgTAAQgfAAgWAVg");
	this.shape_280.setTransform(257.9,296.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#CCCCCC").s().p("AhOB2QgfgiAAgvQAAgsAfghQAgghAuABQAZAAAVALQAWALAPAWIAAh5IAbAAIAAEmIgbAAIAAglQgQAVgWAKQgVALgYAAQguAAgggggAgogjQgTAMgLATQgMAUAAAWQAAAXAMAVQALAUATALQAUAMAVAAQAWAAAVgMQATgLALgTQALgUAAgYQAAglgYgYQgYgYgkAAQgWAAgTALg");
	this.shape_281.setTransform(230.7,292.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#CCCCCC").s().p("AhPBPQgfgiAAgsQAAgsAeggQAggkAwAAQAxAAAhAkQAdAgAAAsQAAAsgfAiQggAhgwAAQgwAAgfghgAg6g7QgYAZAAAjQAAAXALAUQALAUATALQATALAWAAQAXAAASgLQAUgLALgUQALgUAAgXQAAgjgZgZQgYgZgiAAQghAAgZAZg");
	this.shape_282.setTransform(193.4,296.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#CCCCCC").s().p("ABBCUIAAhlQAAglgDgLQgFgVgNgLQgOgLgVAAQgYAAgUARQgTAQgHAYQgDAPAAAqIAABOIgcAAIAAjTIAcAAIAAAmQAQgWAUgLQAUgLAWAAQAYAAATAMQASANAJAUQAJAVAAAqIAABtgAgChxIgQgHQgEgCgGAAQgHAAgGADQgGACgMAJIgNgUQASgTAaAAQANAAAQAIQARAHAJAAQALAAATgKIAOATQgPAKgJADQgKAEgLAAQgOAAgOgHg");
	this.shape_283.setTransform(168.2,292.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#CCCCCC").s().p("AhOBPQgfghAAguQAAgtAfghQAhghAtAAQAaAAAUALQAWAMAPAWIAAgnIAbAAIAADTIgbAAIAAgkQgQAVgVAKQgWALgYAAQguAAggghgAgohJQgTALgLAUQgMAVAAAVQAAAXAMAUQALAVATALQAUAMAVAAQAWAAAVgMQAUgLALgTQALgUgBgYQABgkgYgZQgZgYgkAAQgWAAgTALg");
	this.shape_284.setTransform(141.7,296.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#CCCCCC").s().p("ACDBtIAAhzQAAgigFgNQgFgNgMgIQgLgIgRAAQgUABgQALQgQAMgIAUQgIATAAAtIAABTIgaAAIAAhtQAAgmgFgNQgFgOgMgIQgLgJgRAAQgTAAgQAMQgRAMgIATQgIATAAAnIAABaIgbAAIAAjTIAbAAIAAAkQAPgUAPgJQAUgNAXAAQAQAAAOAGQAOAGAIALQAIAJAHATQANgZAVgNQAUgNAYAAQAWAAARALQAQAMAJATQAIAUAAAoIAABzg");
	this.shape_285.setTransform(110,296.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#CCCCCC").s().p("AhOBPQgfghAAguQAAgtAfghQAhghAtAAQAaAAAUALQAWAMAPAWIAAgnIAbAAIAADTIgbAAIAAgkQgQAVgWAKQgVALgYAAQguAAggghgAgohJQgTALgMAUQgLAVAAAVQAAAXALAUQAMAVATALQAUAMAVAAQAWAAAVgMQAUgLALgTQALgUgBgYQABgkgYgZQgZgYgkAAQgWAAgTALg");
	this.shape_286.setTransform(76.9,296.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#CCCCCC").s().p("AgOCQIAAkCIhAAAIAAgdICdAAIAAAdIhAAAIAAECg");
	this.shape_287.setTransform(55.2,292.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("ABFCXQgNgMgEgOQgKARgZAKQgYALgbAAQgyAAgdgaQgdgZAAgvQAAg2ApgeQApgfBKAAQANAAARAFQAAg4hFAAQgpAAgcAOIgQg5QAmgSA0AAQBHAAAhAhQAiAgAABcIAABCQAAA+AZAQQgJAQgLAEQgLAEgPAAQgPAAgNgMgAhFA+QAAAqAxAAQBBAAAAhCIAAgdQgTgEgJAAQhWAAAAA5g");
	this.shape_288.setTransform(760.6,75);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgTDaIAAj9IgoAAIAAg8IBxAAIAAE5gAgLiQQgNgNAAgRQAAgSANgMQALgNASAAQARAAANANQAMAMAAASQAAARgMANQgNAMgRAAQgSAAgLgMg");
	this.shape_289.setTransform(734.4,68.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AhpCgIAAk5IBJAAIAAAdQAfgjAyAAQAlAAAUAMIgfA+QgTgNgYAAQgZAAgTAXQgUAYAAAhIAACyg");
	this.shape_290.setTransform(715.4,74.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AhuB2QgogtAAhJQAAhIAqgtQApgtBDAAQBIAAAnArQAoAsAABLQAABKgoAsQgpAthGAAQhGAAgogtgAg1hLQgVAbAAAwQAABnBKAAQAiAAAVgbQAUgbAAgxQAAhmhLAAQghAAgUAbg");
	this.shape_291.setTransform(683.9,75);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("ACRCgIAAjEQAAg+g3AAQgRAAgPAKQgPAKgGAMIAADiIhJAAIAAjPQAAgXgOgOQgOgOgaAAQgOAAgQALQgRAKgHAMIAADhIhJAAIAAk5IAyAAIAPAcQAfgiAwAAQA+AAAfAiQAOgPAYgKQAZgJAZAAQA0AAAdAeQAdAeAAA1IAADOg");
	this.shape_292.setTransform(641.1,74.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AhuB5QgqgqgBhMQABhJAtguQAuguA/AAQBEAAAqApQApApAAA/QAAANgGAaIjfAAQACAmAYAVQAXAUAnAAQAzAAAagaIAcA4QgnAghMAAQhHAAgpgqgAhJggICZAAQgIhFhFAAQg9AAgPBFg");
	this.shape_293.setTransform(598.1,75);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgMDZIhWjsIguDnIhKAAIBWmtIAoAAIBdEgIBbkgIAnAAIBYGtIhJAAIgtjnIhXDsg");
	this.shape_294.setTransform(558.7,69.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AhuB5QgrgqABhMQAAhJAtguQAuguA/AAQBEAAAqApQApApAAA/QAAANgGAaIjfAAQACAmAYAVQAYAUAmAAQAzAAAagaIAcA4QgmAghNAAQhHAAgpgqgAhJggICZAAQgIhFhFAAQg9AAgPBFg");
	this.shape_295.setTransform(500.8,75);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AhqC5QgmgqAAhKQAAhJAsgvQArguBAAAQAjAAAeAOIAAh+IBJgRIAAG/IhJAAIAAgTQgJAKgWAHQgWAIgWAAQhCAAglgqgAgsgIQgYAZAAAyQAABiBeAAQAKAAAQgGQAPgHAFgGIAAijQgYgSgZAAQgrAAgYAbg");
	this.shape_296.setTransform(465.7,68.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("ABACgIAAi1QAAgogPgSQgPgTgiAAQgRAAgRAJQgTAKgKANIAADiIhJAAIAAk5IA0AAIAOAdQAegjA5AAQA4AAAhAiQAfAhAAA8IAADAg");
	this.shape_297.setTransform(413,74.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AhuCzQgogtAAhJQAAhIAqgsQApguBDABQBIgBAnAsQAoArAABLQAABKgoAsQgpAthGAAQhGAAgogtgAg1gOQgVAaAAAxQAABnBKAAQAiAAAVgbQAUgbAAgxQAAhmhLAAQghAAgUAbgAgziJIAxhWIBIAAIhDBWg");
	this.shape_298.setTransform(378.3,68.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AgTDaIAAj9IgoAAIAAg8IBxAAIAAE5gAgLiQQgNgNAAgRQAAgSANgMQALgNASAAQARAAANANQAMAMAAASQAAARgMANQgNAMgRAAQgSAAgLgMg");
	this.shape_299.setTransform(351.3,68.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AhcB4QgpgqAAhLQgBhJAvguQAtguBPAAQA3AAAoAfIgfA3QgagZgsAAQgoAAgYAcQgZAcAAAwQAABiBeAAQAoAAAfgbIAbA6QgfAUgYAFQgYAGghAAQhHAAgrgrg");
	this.shape_300.setTransform(328.1,75);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("ABFCXQgNgMgEgOQgKARgZAKQgYALgbAAQgyAAgdgaQgdgZAAgvQAAg2ApgeQApgfBKAAQANAAARAFQAAg4hFAAQgpAAgcAOIgQg5QAmgSA0AAQBHAAAhAhQAiAgAABcIAABCQAAA+AZAQQgJAQgLAEQgLAEgPAAQgPAAgNgMgAhFA+QAAAqAxAAQBBAAAAhCIAAgdQgTgEgJAAQhWAAAAA5g");
	this.shape_301.setTransform(297,75);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("ABACgIAAi1QAAgogPgSQgPgTgiAAQgRAAgRAJQgTAKgKANIAADiIhJAAIAAk5IA0AAIAOAdQAegjA5AAQA4AAAhAiQAfAhAAA8IAADAg");
	this.shape_302.setTransform(263.1,74.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgTDaIAAj9IgoAAIAAg8IBxAAIAAE5gAgLiQQgNgNAAgRQAAgSANgMQALgNASAAQARAAANANQAMAMAAASQAAARgMANQgNAMgRAAQgSAAgLgMg");
	this.shape_303.setTransform(235.4,68.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AiJC8IAvg5QAmAjAwAAQAeAAAVgKQAUgIAAgRQAAgcgtAAQgMAAgYADQgYADgMAAQhMAAAAg2QAAgQANgOQAMgQARgHQg2ghAAhBQAAgyAlggQAlgiA2AAQApAAAcAQIAdgiIAzAuIgjAaQASAcAAAlQAAA2ghAgQggAfgyAAIgUgCIgMgBIgPAGQgOAGgBAHQAAAMAVAAQAJAAAWgFQATgEAQAAQBrAAAABWQAAAvgrAbQgrAbg7AAQhIAAg7gqgAgwiIQgPAQAAAZQAAAcAPAQQAQARAaAAQAZAAAOgQQAOgRAAgcQAAgYgPgQQgQgQgWAAQgaAAgQAPg");
	this.shape_304.setTransform(212.8,80);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("ABFCXQgNgMgEgOQgKARgZAKQgYALgbAAQgyAAgdgaQgdgZAAgvQAAg2ApgeQApgfBKAAQANAAARAFQAAg4hFAAQgpAAgcAOIgQg5QAmgSA0AAQBHAAAhAhQAiAgAABcIAABCQAAA+AZAQQgJAQgLAEQgLAEgPAAQgPAAgNgMgAhFA+QAAAqAxAAQBBAAAAhCIAAgdQgTgEgJAAQhWAAAAA5g");
	this.shape_305.setTransform(181.7,75);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AiNDYIAAmsIBZgDQBkAAAwAfQAuAgAABCQAACSitAAIgigCIAACegAhBiSIAACJIAeACQAzAAAZgRQAYgRAAgoQAAhDhrABQgMgBgLACg");
	this.shape_306.setTransform(151.7,69.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#333333").ss(1,1,1).p("EBGoAFPMiNFAAAIgKAAIAAqdIAKAAMCNFAAA");
	this.shape_307.setTransform(451,72.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#CCCCCC").s().p("EBGeAFPMiNFAAAIAAqdMCNFAAAIAKAAIAAKdg");
	this.shape_308.setTransform(452,72.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AhDBcIANgjQAfAUATAAQAhAAAAgcQAAgVgggPQgZgMgJgFQgJgGgHgIQgGgHgDgJQgEgJAAgKQAAgaATgOQATgPAdAAQAXAAAjAPIgLAiQgWgRgWAAQgMgBgJAHQgKAGAAAJQAAAVAXAKIAaANQAYALALANQALAOAAAWQAAAcgTAPQgUARgigBQghAAgdgQg");
	this.shape_309.setTransform(801.1,296.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AhABRQgggdAAgyQAAgyAgggQAcgcAlAAQAuAAAZAaQAYAYABAoQAAAMgEAKIiVAAQAAAkAUAUQASARAbAAQAfAAAWgSIAQAbQgJAIgSAGQgWAIgcAAQgmAAgbgbgAglg9QgQAQgCAXIBzAAQAAgXgPgPQgPgQgbAAQgXAAgRAPg");
	this.shape_310.setTransform(782.2,296.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgYB1QgSgTAAgcIAAh1IgYAAIAAgdIAYAAIAAgsIAmgPIAAA7IA4AAIAAAdIg4AAIAABmQAAAbAHALQAJALAUAAQAOAAAQgHIAFAhQgXAFgcAAQgXAAgRgSg");
	this.shape_311.setTransform(763.6,294);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AhKBwQAYABAQgMQARgLAAgPQAAgRgGgRIgQgpIg4iQIAlAAIA9CgIA3igIAmAAIhYDzQgIAUgWANQgXANgdABg");
	this.shape_312.setTransform(745.5,300.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgkCQQgPgFgHgJIgNATIgTAAIAAkqIAlAAIAABmQAGgIAOgFQAPgHAOAAQAqABAaAdQAbAeAAAsQAAA1gbAeQgbAdgsAAQgPABgOgGgAglgeQgMAHgEAEIAAB4QAAADAOAHQAOAHAHAAQAlAAAQgSQARgSAAgrQAAgkgTgSQgTgVggABQgHAAgMAFg");
	this.shape_313.setTransform(725.1,292.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AhWCSIAAgIIBZiJQAcgrAAgeQAAgogsAAQgQAAgNAJQgPAIgGANIgZgVQAHgTATgLQATgMAcAAQAoAAAYAUQAXASAAAjQAAAggfAxIhABmIBwAAIAAAjg");
	this.shape_314.setTransform(690.4,292.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgzCMQgTgHgKgKIASgeQATAVAeAAQA1AAAAg1QAAgYgQgPQgQgPgZAAIgDAAIAAgfIACAAQAwAAAAgsQAAgugtAAQgaABgPAQIgRgaQASgYArAAQAkAAAYAVQAXATAAAfQAAAYgNATQgNASgSAHQAZAHAPATQAOATAAAbQAAAogZAWQgZAVgtAAQgTABgSgIg");
	this.shape_315.setTransform(669.7,292.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AhABRQgfgdAAgyQgBgyAgggQAdgcAkAAQAuAAAZAaQAZAYAAAoQAAAMgDAKIiWAAQAAAkAUAUQARARAbAAQAhAAAUgSIARAbQgJAIgSAGQgWAIgcAAQgmAAgbgbgAglg9QgQAQgDAXIB0AAQgBgXgOgPQgPgQgaAAQgYAAgRAPg");
	this.shape_316.setTransform(773.8,296.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AhWCSIAAgIIBYiJQAdgrAAgeQAAgogsAAQgQAAgNAJQgOAIgHANIgZgVQAHgTATgLQATgMAcAAQAoAAAXAUQAYASAAAjQAAAggfAxIhABmIBwAAIAAAjg");
	this.shape_317.setTransform(682.1,292.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#CCCCCC").s().p("AhOBPQgfghAAguQAAgtAfghQAhghAtAAQAaAAAUALQAWAMAPAWIAAgnIAbAAIAADTIgbAAIAAgkQgQAVgWAKQgVALgYAAQguAAggghgAgohJQgTALgLAUQgMAVAAAVQAAAXAMAUQALAVATALQAUAMAVAAQAWAAAVgMQAUgLALgTQALgUgBgYQABgkgYgZQgZgYgkAAQgWAAgTALg");
	this.shape_318.setTransform(409,402.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#CCCCCC").s().p("ABBBtIAAhlQAAgkgDgNQgFgUgNgLQgOgLgVAAQgYAAgUAQQgTARgHAZQgDAPAAApIAABOIgcAAIAAjUIAcAAIAAAnQAQgXAUgKQAUgLAWAAQAYAAATAMQASAMAJAVQAJAVAAAqIAABtg");
	this.shape_319.setTransform(383.8,402.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#CCCCCC").s().p("AgMCWIAAjUIAaAAIAADUgAgPhuQgHgHABgKQgBgJAHgHQAHgGAIAAQAJAAAHAGQAGAHABAJQgBAKgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_320.setTransform(367.5,398.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#CCCCCC").s().p("AguCPQgWgHgOgOQgNgNgMgZIAeAAQAMAVATALQATAKAbAAQAdAAATgLQATgLAIgPQAIgQAAgjIAAgLQgPAUgWAKQgXALgYgBQgdAAgagOQgagOgOgZQgOgYAAgeQAAgdAPgZQAPgaAagOQAZgPAdgBQAXABAVAJQAUALATAWIAAglIAcAAIAACpQAAAsgIAVQgLAdgaAQQgbAQglAAQgbAAgVgIgAgnhwQgUALgMAVQgLATAAAXQAAAjAXAWQAYAWAkABQAmgBAXgWQAXgWAAglQAAgXgLgTQgKgTgUgLQgTgLgWAAQgWAAgUALg");
	this.shape_321.setTransform(349.6,406.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#CCCCCC").s().p("AhOB+QgfghgBgvQABgtAfggQAhghAtAAQAZAAAWALQAUAMARAWIAAgnIAaAAIAADTIgaAAIAAgkQgSAVgUAKQgWALgYAAQguAAggghgAgogaQgTALgLATQgMAVAAAWQAAAXAMAUQALAVATALQAUAMAWAAQAWAAAUgMQAUgLALgTQAKgUAAgYQAAglgXgYQgZgYgjAAQgWAAgUALgAgYhiIAqg8IAqAAIg6A8g");
	this.shape_322.setTransform(322.4,397.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#CCCCCC").s().p("AhuCUIAAkhIAbAAIAAAnQARgWAVgMQAVgLAZAAQAtAAAgAhQAhAhAAAtQgBAugfAhQggAhgtAAQgYAAgWgLQgVgKgSgVIAABygAg8hgQgYAZAAAlQAAAYAKATQALATAVALQATAMAXAAQAVAAATgMQAUgLALgVQAMgTAAgXQAAgWgMgVQgLgUgTgLQgUgLgWAAQgjAAgYAYg");
	this.shape_323.setTransform(296.1,406);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#CCCCCC").s().p("AhOB1QgfghAAguQAAgtAfghQAgggAugBQAZABAVAKQAWAMAPAWIAAh5IAbAAIAAElIgbAAIAAgkQgQAVgWALQgVAKgYAAQguAAggghgAgogjQgTALgLAVQgMATAAAXQAAAWAMAUQALAVATALQAUAMAVAAQAWAAAVgMQATgLALgTQALgTAAgYQAAglgYgYQgYgZgkAAQgWAAgTALg");
	this.shape_324.setTransform(230.7,398.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#CCCCCC").s().p("ACDBtIAAhzQAAgigFgNQgFgNgMgHQgLgIgRAAQgUAAgQAMQgQALgIATQgIAUAAAtIAABTIgaAAIAAhtQAAgmgFgNQgFgOgMgIQgLgJgRABQgTAAgQALQgRALgIAUQgIATAAAnIAABaIgbAAIAAjUIAbAAIAAAlQAPgUAPgKQAUgMAXAAQAQAAAOAGQAOAGAIAKQAIALAHASQANgZAVgNQAUgNAYAAQAWAAARALQAQALAJAUQAIAUAAAoIAABzg");
	this.shape_325.setTransform(110,402.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AhBBRQgegdAAgyQgBgyAgggQAdgcAlAAQAsAAAaAaQAZAYgBAoQAAAMgCAKIiWAAQAAAkAUAUQARARAbAAQAhAAAUgSIAQAbQgJAIgRAGQgWAIgbAAQgnAAgcgbgAglg9QgQAQgDAXIBzAAQABgXgOgPQgQgQgaAAQgZAAgQAPg");
	this.shape_326.setTransform(781.2,296.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AhWCSIAAgIIBYiJQAdgrAAgeQAAgogsAAQgQAAgOAJQgNAIgHANIgZgVQAGgTAUgLQAUgMAbAAQApAAAWAUQAYASAAAjQAAAggfAxIhABmIBwAAIAAAjg");
	this.shape_327.setTransform(689.5,292.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#CCCCCC").s().p("AgQBpQgHgIAAgJQAAgLAHgHQAHgHAJAAQAKAAAHAHQAHAHAAALQAAAJgHAIQgHAHgKAAQgJAAgHgHgAgQhFQgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAHQAHAHAAALQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_328.setTransform(641.9,296.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#CCCCCC").s().p("AhPBOQgegiAAgrQAAgoAZgfQAggpA0AAQA2AAAgApQAXAeABAqIi/AAQABAlAXAYQAXAYAiAAQAPAAAPgGQAQgGAKgJQALgJANgVIAXAMQgMAWgOAOQgPANgTAIQgSAHgYAAQgzAAgdgigAg1hAQgQAOgJAeICeAAQgGgWgKgNQgLgOgRgIQgRgIgTAAQgfAAgWAVg");
	this.shape_329.setTransform(257.9,296.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#CCCCCC").s().p("AhPBPQgfgiAAgsQAAgsAeggQAggkAwAAQAxAAAhAkQAdAgAAAsQAAAsgfAiQggAhgwAAQgwAAgfghgAg6g7QgYAZAAAjQAAAXALAUQALAUATALQATALAWAAQAXAAASgLQAUgLALgUQALgUAAgXQAAgjgZgZQgYgZgiAAQghAAgZAZg");
	this.shape_330.setTransform(193.4,296.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#CCCCCC").s().p("ABBCUIAAhlQAAglgDgLQgFgVgNgLQgOgLgVAAQgYAAgUARQgTAQgHAYQgDAPAAAqIAABOIgcAAIAAjTIAcAAIAAAmQAQgWAUgLQAUgLAWAAQAYAAATAMQASANAJAUQAJAVAAAqIAABtgAgChxIgQgHQgEgCgGAAQgHAAgGADQgGACgMAJIgNgUQASgTAaAAQANAAAQAIQARAHAJAAQALAAATgKIAOATQgPAKgJADQgKAEgLAAQgOAAgOgHg");
	this.shape_331.setTransform(168.2,292.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#CCCCCC").s().p("AhOBPQgfghAAguQAAgtAfghQAhghAtAAQAaAAAUALQAWAMAPAWIAAgnIAbAAIAADTIgbAAIAAgkQgQAVgVAKQgWALgYAAQguAAggghgAgohJQgTALgLAUQgMAVAAAVQAAAXAMAUQALAVATALQAUAMAVAAQAWAAAVgMQAUgLALgTQALgUgBgYQABgkgYgZQgZgYgkAAQgWAAgTALg");
	this.shape_332.setTransform(141.7,296.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#CCCCCC").s().p("AhOBPQgfghAAguQAAgtAfghQAhghAtAAQAaAAAUALQAWAMAPAWIAAgnIAbAAIAADTIgbAAIAAgkQgQAVgWAKQgVALgYAAQguAAggghgAgohJQgTALgMAUQgLAVAAAVQAAAXALAUQAMAVATALQAUAMAVAAQAWAAAVgMQAUgLALgTQALgUgBgYQABgkgYgZQgZgYgkAAQgWAAgTALg");
	this.shape_333.setTransform(76.9,296.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#CCCCCC").s().p("AgOCQIAAkCIhAAAIAAgdICdAAIAAAdIhAAAIAAECg");
	this.shape_334.setTransform(55.2,292.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AhABRQgggdAAgyQABgyAfggQAcgcAlAAQAtAAAaAaQAZAYAAAoQgBAMgDAKIiVAAQAAAkAUAUQARARAcAAQAfAAAWgSIAPAbQgIAIgSAGQgXAIgbAAQgmAAgbgbgAglg9QgQAQgCAXIByAAQAAgXgNgPQgQgQgbAAQgYAAgQAPg");
	this.shape_335.setTransform(782.9,296.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AhWCSIAAgIIBZiJQAcgrAAgeQAAgogsAAQgQAAgNAJQgPAIgGANIgZgVQAGgTAUgLQATgMAcAAQAoAAAYAUQAXASAAAjQAAAggfAxIg/BmIBvAAIAAAjg");
	this.shape_336.setTransform(691.1,292.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AhDBcIANgjQAfAUATAAQAhAAAAgcQAAgWgggOQgZgMgJgFQgJgGgHgIQgGgHgDgJQgEgJAAgKQAAgZATgPQATgPAdAAQAXAAAjAPIgLAiQgWgRgWAAQgMAAgJAGQgKAGAAAJQAAAVAXAKIAaAMQAYAMALANQALAOAAAWQAAAbgTARQgUAPgiAAQghAAgdgQg");
	this.shape_337.setTransform(570.7,401.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AhABRQgggdAAgxQAAgzAgggQAcgcAlAAQAuAAAZAZQAYAZABAoQAAAMgEAKIiVAAQAAAkAUAUQASARAaAAQAgAAAWgSIAQAbQgKAIgRAGQgWAJgcgBQgmAAgbgbgAglg8QgQAPgCAXIBzAAQAAgXgPgPQgPgQgbAAQgXgBgRARg");
	this.shape_338.setTransform(551.8,401.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgYB1QgSgTAAgcIAAh2IgYAAIAAgcIAYAAIAAgsIAmgPIAAA7IA4AAIAAAcIg4AAIAABoQAAAaAHALQAJALAUAAQAOAAAQgHIAFAhQgXAFgcAAQgXAAgRgSg");
	this.shape_339.setTransform(533.2,398.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AhKBwQAYAAAQgLQARgLAAgPQAAgRgGgRIgQgpIg4iQIAlAAIA9CgIA3igIAmAAIhYDzQgIAUgWAOQgXANgdgBg");
	this.shape_340.setTransform(515.1,405.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgkCQQgPgFgHgJIgNATIgTAAIAAkqIAlAAIAABmQAGgIAOgGQAPgFAOgBQAqAAAaAeQAbAeAAAsQAAA0gbAeQgbAegsAAQgPABgOgGgAglgeQgMAHgEAEIAAB4QAAADAOAHQAOAHAHAAQAlAAAQgSQARgSAAgrQAAgkgTgTQgTgTggAAQgHAAgMAFg");
	this.shape_341.setTransform(494.7,397.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AAgCQIAAhOIiBAAIAAgWICZi7IANAAIAACzIAdAAIAAAeIgdAAIAABOgAgzAkIBTAAIAAhlg");
	this.shape_342.setTransform(460.3,397.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AhABRQgggdAAgyQAAgyAgggQAcgcAlAAQAuAAAZAaQAYAYABAoQAAAMgEAKIiVAAQAAAkAUAUQASARAaAAQAgAAAWgSIAQAbQgJAIgSAGQgWAIgcAAQgmAAgbgbgAglg9QgQAQgCAXIBzAAQAAgXgPgPQgPgQgbAAQgXAAgRAPg");
	this.shape_343.setTransform(786.2,296.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AhWCSIAAgIIBZiJQAcgrAAgeQAAgogsAAQgQAAgNAJQgPAIgGANIgZgVQAHgTATgLQAUgMAbAAQAoAAAXAUQAYASAAAjQAAAggfAxIhABmIBwAAIAAAjg");
	this.shape_344.setTransform(694.5,292.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AggC2QgOgOAAgTQAAgUAOgOQANgNATAAQATAAAOANQAOAOAAAUQAAATgOAOQgOANgTAAQgTAAgNgNgAgpA7IAAj9IBSAAIAAD9g");
	this.shape_345.setTransform(893,654.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AhGCAIAAj7IBKAAIAAAlIAAAAQAMgTAPgLQAOgLANAAIANABIAABSQgIgBgKAAQgXAAgNAQQgNAQAAAdIAABwg");
	this.shape_346.setTransform(878.4,661);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AhjBdQgfgmAAg3QAAg1AhgmQAhgnAtAAQAWAAAQAKQASAKATAVIAAgjIBLAAIAAD6IhLAAIAAgrIgBAAQgSAZgSAMQgSALgZAAQgsAAgfgmgAgjglQgPASAAAaQAAAZAOAPQAOAQAWAAQAXAAAPgSQARgSgBgZQABgWgRgRQgPgSgWAAQgVAAgPASg");
	this.shape_347.setTransform(851.1,661.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AiAB+ICFi2IhwAAIAAhFIDsAAIiEC2IBvAAIAABFg");
	this.shape_348.setTransform(822,661.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AhcBfQgjgkAAg8QAAg3AlglQAlglA1AAQA3AAAlAnQAkAnAAA6IAAAMIizAAQACAYAOAPQAPAPATAAQAiAAATgfIBFAXQgmBDhRAAQg7AAgjgkgAghhDQgOANgDAWIBkAAQgKgvgmAAQgVAAgOAMg");
	this.shape_349.setTransform(793.2,661.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AiCC4IAAlqIBLAAIAAAlIACAAQAQgWASgJQARgLAYAAQAtAAAgAnQAgAoAAA5QAAAzgfAlQgfAlgqAAQgaAAgRgLQgSgLgSgXIgBAAIAACXgAglhaQgPARAAAZQgBAZARAQQAPARAWAAQAWAAAPgQQAPgQAAgaQAAgYgQgSQgRgSgUAAQgWAAgPASg");
	this.shape_350.setTransform(764,666.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AB8CBIAAiLQAAgVgLgOQgMgOgQAAQgTAAgOAQQgOAQAAAWIAACGIhKAAIAAiHQAAgWgLgPQgMgQgQAAQgUAAgOARQgOAQAAAYIAACDIhLAAIAAj7IBLAAIAAAoQAGgEAKgKQAKgKAKgGQAJgHAOgEQANgFALAAQARAAAUANQATAMAOAfQAXgeAXgNQAWgNATAAQAjAAAXAdQAYAcAAApIAACfg");
	this.shape_351.setTransform(723.5,660.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AhrDAIAAl/IDXAAIAABMIiEAAIAABNICEAAIAABKIiEAAIAABQICEAAIAABMg");
	this.shape_352.setTransform(685.7,654.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgoDDIAAj8IBSAAIAAD8gAgghyQgOgNAAgUQAAgTAOgOQAOgOASAAQATAAAOAOQAOAOAAATQAAATgOAOQgOAOgTAAQgSAAgOgOg");
	this.shape_353.setTransform(664.6,661);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AhDBcIANgjQAfAUATAAQAhAAAAgcQAAgWgggOQgZgMgJgFQgJgGgHgIQgGgIgDgIQgEgJAAgKQAAgaATgOQATgPAdAAQAXAAAjAPIgLAiQgWgRgWAAQgMgBgJAHQgKAGAAAJQAAAVAXAKIAaANQAYALALANQALAOAAAWQAAAbgTARQgUAPgiAAQghAAgdgQg");
	this.shape_354.setTransform(810.4,514.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AhFBPQgZgeAAgxQAAgwAbgdQAagfApAAQAtABAZAcQAZAcAAAzQAAAygaAdQgZAdgsAAQgsAAgZgdgAgng4QgPAUAAAkQAABOA2AAQAaAAAPgVQAPgVAAgkQAAhOg4ABQgYgBgPAWg");
	this.shape_355.setTransform(791.6,514.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("Ag5BPQgcgcAAgxQAAgxAdgeQAcgfAyAAQAQAAAUAIQASAGAJAIIgSAZQgGgFgOgGQgPgEgOAAQgdAAgRAVQgSAVAAAkQAAAlASATQASATAgAAQAYAAAZgTIAQAfQgeATgsAAQgrAAgbgdg");
	this.shape_356.setTransform(771,514.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("Ag+BrIAAjQIAlAAIAAAgQAUgkAogBQAJABATADIgQAkQgLgJgNABQgTAAgOASQgPASAAAaIAAB3g");
	this.shape_357.setTransform(754.8,514.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AhGBaQgTgRAAgbQAAgfAcgWQAcgVAqgBQAMAAAPAGQAAgzgtAAQgiAAgTATIgPgfQAKgKATgFQASgHASAAQAsAAAUAVQAVAVAAAtIAABKQAAAcAQAIIAAATQgWAAgMgGQgKgGgFgQQgXAcgtAAQgYABgSgTgAgiANQgSAOAAATQAAAhAnAAQAbAAAWgbIAAgyQgSgDgGAAQgcAAgSAOg");
	this.shape_358.setTransform(735.1,514.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("ABnBrIAAiEQgBgxgqAAQgOgBgLAJQgMAIgFALIAACaIgkAAIAAiUQAAgQgLgIQgMgJgTAAQgLAAgMAJQgNAIgFAKIAACaIglAAIAAjQIAXAAIANAXQAVgcAhAAQAsAAASAcQAFgMARgIQARgHASgBQAhAAASAUQASATAAAiIAACMg");
	this.shape_359.setTransform(708,514.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AhXBAQAAgYAOgXQAQgWAVgKQgRgKgMgRQgMgRAAgTQAAggAWgSQAWgSAhAAQAlAAAUASQAUASAAAgQAAATgMATQgMAUgRAJQA0AcAAAvQAAAogYAWQgYAWgpgBQhWAAAAhTgAgwBAQAAAVANAPQAOAOAUAAQAWAAANgOQAPgOAAgWQAAgQgKgNQgKgPgigTQgrAYAAAngAgmhOQAAAaAyAZQAagZAAgbQAAgQgLgJQgKgKgRAAQgmAAAAAkg");
	this.shape_360.setTransform(669,510.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#CCCCCC").s().p("ABBBtIAAhlQAAgkgDgNQgFgUgNgLQgOgLgVAAQgYAAgUAQQgTARgHAZQgDAPAAApIAABOIgcAAIAAjUIAcAAIAAAmQAQgVAUgLQAUgLAWAAQAYAAATAMQASANAJAUQAJAUAAArIAABtg");
	this.shape_361.setTransform(599.7,515.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#CCCCCC").s().p("AgMCWIAAjUIAaAAIAADUgAgPhuQgHgHABgJQgBgKAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAKQAAAJgHAHQgHAGgJAAQgIAAgHgGg");
	this.shape_362.setTransform(583.4,511.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#CCCCCC").s().p("AguCPQgWgHgOgOQgNgNgMgZIAeAAQAMAVATALQATAJAbABQAdAAATgLQATgLAIgPQAIgQAAgjIAAgLQgPAUgWAKQgXAKgYAAQgdAAgagOQgagOgOgZQgOgYAAgeQAAgdAPgZQAPgaAagOQAZgPAdgBQAXAAAVAKQAUALATAWIAAglIAcAAIAACpQAAAsgIAVQgLAdgaAQQgbAPglABQgbAAgVgIgAgnhwQgUALgMAVQgLATAAAXQAAAjAXAWQAYAWAkAAQAmAAAXgWQAXgVAAgmQAAgXgLgTQgKgTgUgLQgTgLgWAAQgWAAgUALg");
	this.shape_363.setTransform(565.5,519.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#CCCCCC").s().p("AhNB+QghghAAgvQAAgtAhggQAgghAtAAQAZAAAWALQAUAMARAWIAAgnIAbAAIAADTIgbAAIAAgkQgSAVgUAKQgWALgZAAQgtAAgfghgAgogaQgTALgLATQgMAVAAAWQAAAXAMAUQALAVATALQAUAMAWAAQAVAAAUgMQAVgLALgTQAKgUAAgYQAAglgYgYQgYgYgjAAQgXAAgTALgAgXhiIApg8IAqAAIg5A8g");
	this.shape_364.setTransform(538.3,511);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#CCCCCC").s().p("AhuCUIAAkhIAbAAIAAAnQARgWAVgMQAVgLAZAAQAtAAAgAhQAgAhABAtQAAAuggAhQggAhgtAAQgZAAgVgLQgVgKgSgVIAABygAg8hgQgYAZAAAlQAAAYAKATQALATAVALQATAMAXAAQAVAAAUgMQATgLALgVQAMgTAAgXQAAgWgMgVQgLgUgTgLQgTgLgXAAQgjAAgYAYg");
	this.shape_365.setTransform(512,519.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#CCCCCC").s().p("AhOB1QgfgggBgwQABgsAfghQAgggAugBQAZAAAWALQAUAMAQAWIAAh5IAbAAIAAElIgbAAIAAgkQgQAVgWALQgWAKgXAAQguAAggghgAgogjQgTALgLAVQgMATAAAXQAAAWAMAUQALAVATAMQAUALAVAAQAWAAAVgLQATgMALgTQAMgUgBgXQABglgZgYQgYgZgjAAQgXAAgTALg");
	this.shape_366.setTransform(446.6,511.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#CCCCCC").s().p("AgjBoQgRgIgKgOIARgUQAUAYAYAAQAPAAAMgLQAMgKAAgPQgBgLgHgKQgIgIgagOQgcgOgKgOQgLgPAAgSQAAgZARgQQAQgQAYAAQAeAAAeAdIgSASQgWgVgVAAQgMAAgKAJQgKAIAAAMQABALAHAJQAIAJAYANQAfAPALAPQALAPAAASQAAAagTATQgSASgbAAQgTAAgQgIg");
	this.shape_367.setTransform(414.2,515.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#CCCCCC").s().p("AhPBPQgfgiAAgsQAAgsAeggQAggkAwAAQAxAAAhAkQAdAgAAAsQAAAsgfAiQggAhgwAAQgwAAgfghgAg6g7QgYAZAAAjQAAAXALAUQALAUATALQATALAWAAQAWAAAUgLQATgLALgUQALgUAAgXQAAgjgZgZQgYgZgiAAQghAAgZAZg");
	this.shape_368.setTransform(393.7,515.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#CCCCCC").s().p("AhKBQQghggAAguQAAgeAPgaQAQgbAbgPQAcgPAgAAQAVAAAUAHQATAGAOALQANAKAKAQIgWANQgbglgxAAQgmAAgaAZQgaAZAAAjQAAAXANAUQALAVAVALQAUAMAZAAQAvAAAdgmIAWAOQgPAXgZANQgbANggAAQgyAAghggg");
	this.shape_369.setTransform(367.6,515.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#CCCCCC").s().p("Ag1BtIAAjUIAcAAIAAAgQANgTANgJQAOgJAPAAQALAAANAHIgOAYQgJgEgGAAQgOgBgLAMQgNALgHAYQgFASAAA2IAABIg");
	this.shape_370.setTransform(350,515.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#CCCCCC").s().p("ACDBtIAAhzQAAgigFgNQgFgNgMgIQgLgHgRAAQgUAAgQAMQgQALgIATQgIAUAAAtIAABTIgaAAIAAhtQAAgmgFgNQgFgOgMgIQgLgJgRABQgTgBgQAMQgRALgIAUQgIATAAAnIAABaIgbAAIAAjUIAbAAIAAAlQAPgUAPgKQAUgMAXAAQAQAAAOAGQAOAGAIAKQAIAKAHATQANgZAVgNQAUgNAYAAQAWAAARALQAQALAJAUQAIAUAAAoIAABzg");
	this.shape_371.setTransform(296.8,515.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#CCCCCC").s().p("AhNB1QghggABgwQgBgsAhghQAfggAugBQAZAAAVALQAVAMARAWIAAh5IAbAAIAAElIgbAAIAAgkQgSAVgVALQgWAKgYAAQgtAAgfghgAgogjQgTALgMAVQgLATAAAXQAAAWALAUQAMAVAUAMQATALAVAAQAXAAATgLQAVgMALgTQAKgUABgXQgBglgYgYQgYgZgkAAQgVAAgUALg");
	this.shape_372.setTransform(226.6,511.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#CCCCCC").s().p("AhPBPQgfgiAAgsQAAgsAdggQAhgkAwAAQAxAAAgAkQAeAgAAAsQAAAsggAiQgfAhgwAAQgwAAgfghgAg5g7QgZAZAAAjQAAAXALAUQALAUAUALQASALAWAAQAWAAAUgLQATgLALgUQALgUAAgXQAAgjgYgZQgZgZgiAAQghAAgYAZg");
	this.shape_373.setTransform(189.3,515.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#CCCCCC").s().p("Ag1BtIAAjUIAcAAIAAAgQANgTANgJQAOgJAPAAQALAAANAHIgOAYQgJgEgGAAQgOgBgLAMQgNALgHAYQgFASAAA2IAABIg");
	this.shape_374.setTransform(171.5,515.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#CCCCCC").s().p("ACDBtIAAhzQAAgigFgNQgFgNgMgIQgLgHgRAAQgUAAgQAMQgQALgIATQgIAUAAAtIAABTIgaAAIAAhtQAAgmgFgNQgFgOgMgIQgLgJgRABQgTgBgQAMQgRALgIAUQgIATAAAnIAABaIgbAAIAAjUIAbAAIAAAlQAPgUAPgKQAUgMAXAAQAQAAAOAGQAOAGAIAKQAIAKAHATQANgZAVgNQAUgNAYAAQAWAAARALQAQALAJAUQAIAUAAAoIAABzg");
	this.shape_375.setTransform(119.5,515.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#CCCCCC").s().p("AgyCSQgWgMgKgXQgKgXAAgtIAAhlIAbAAIAABiQAAAkAEAOQAGAUAQALQARALAWAAQAXAAAQgLQAQgLAGgSQAEgMAAgoIAAhiIAcAAIAABnQAAAsgKAWQgLAXgUAMQgVANgfAAQgeAAgUgNgAgahiIApg8IAqAAIg5A8g");
	this.shape_376.setTransform(88.3,511);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#CCCCCC").s().p("ABrCQIi9jZIAADZIgeAAIAAkfIAGAAIC+DcIAAjcIAdAAIAAEfg");
	this.shape_377.setTransform(61.5,512);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AhBBRQgfgdAAgxQABgzAfggQAcgcAmAAQAsAAAaAZQAYAZAAAoQAAAMgDAKIiVAAQAAAkAUAUQARARAcAAQAfAAAWgSIAPAbQgIAIgSAGQgXAJgagBQgnAAgcgbgAglg8QgQAPgDAXIBzAAQAAgXgNgPQgQgQgbAAQgYgBgQARg");
	this.shape_378.setTransform(540.2,401.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AAgCQIAAhOIiBAAIAAgWICYi7IAPAAIAACzIAcAAIAAAeIgcAAIAABOgAgzAkIBTAAIAAhlg");
	this.shape_379.setTransform(448.7,397.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#CCCCCC").s().p("AhPBOQgegiAAgrQAAgoAZgfQAggpA0AAQA2AAAgApQAXAeABAqIi/AAQABAlAXAYQAXAYAiAAQAPAAAPgGQAQgGAKgJQALgJANgVIAXAMQgMAWgOAOQgPANgTAIQgSAHgYAAQgzAAgdgigAg1hAQgQAOgJAeICeAAQgGgWgKgNQgLgOgRgIQgRgIgTAAQgfAAgWAVg");
	this.shape_380.setTransform(257.9,402.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AhABRQgggdAAgyQABgyAfggQAcgcAlAAQAuAAAZAaQAZAYAAAoQAAAMgEAKIiVAAQAAAkAUAUQASARAbAAQAfAAAWgSIAQAbQgKAIgRAGQgXAIgbAAQgmAAgbgbgAglg9QgQAQgCAXIBzAAQAAgXgOgPQgQgQgbAAQgYAAgQAPg");
	this.shape_381.setTransform(781.2,296.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AhWCSIAAgIIBZiJQAcgrAAgeQAAgogsAAQgQAAgNAJQgPAIgGANIgZgVQAHgTATgLQATgMAcAAQAoAAAYAUQAXASAAAjQAAAggfAxIg/BmIBvAAIAAAjg");
	this.shape_382.setTransform(689.4,292.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#CCCCCC").s().p("AgQBpQgHgIAAgJQAAgLAHgHQAHgHAJAAQAKAAAHAHQAHAHAAALQAAAJgHAIQgHAHgKAAQgJAAgHgHgAgQhFQgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAHQAHAHAAALQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_383.setTransform(641.9,296.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#CCCCCC").s().p("AhOBPQgfghAAguQAAgtAfghQAhghAtAAQAZAAAVALQAWAMAPAWIAAgnIAbAAIAADTIgbAAIAAgkQgRAVgUAKQgWALgYAAQguAAggghgAgohJQgTALgLAUQgMAVAAAVQAAAXAMAUQALAVATALQAUAMAVAAQAXAAAUgMQAUgLALgTQAKgUAAgYQAAgkgXgZQgZgYgkAAQgVAAgUALg");
	this.shape_384.setTransform(613.7,296.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#CCCCCC").s().p("AhNBPQghghAAguQAAgtAhghQAgghAtAAQAZAAAWALQAVAMAQAWIAAgnIAbAAIAADTIgbAAIAAgkQgRAVgVAKQgWALgZAAQgtAAgfghgAgohJQgTALgLAUQgMAVAAAVQAAAXAMAUQALAVATALQAUAMAWAAQAVAAAUgMQAVgLALgTQAKgUAAgYQAAgkgYgZQgYgYgjAAQgXAAgTALg");
	this.shape_385.setTransform(442.4,296.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#CCCCCC").s().p("AhPBOQgegiAAgrQAAgoAZgfQAggpA0AAQA2AAAgApQAXAeABAqIi/AAQABAlAXAYQAXAYAiAAQAPAAAPgGQAQgGAKgJQALgJANgVIAXAMQgMAWgOAOQgPANgTAIQgSAHgYAAQgzAAgdgigAg1hAQgQAOgJAeICeAAQgGgWgKgNQgLgOgRgIQgRgIgTAAQgfAAgWAVg");
	this.shape_386.setTransform(332.4,296.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#CCCCCC").s().p("AhPBOQgegiAAgrQAAgoAZgfQAggpA0AAQA2AAAgApQAXAeABAqIi/AAQABAlAXAYQAXAYAiAAQAPAAAPgGQAQgGAKgJQALgJANgVIAXAMQgMAWgOAOQgPANgTAIQgSAHgYAAQgzAAgdgigAg1hAQgQAOgJAeICeAAQgGgWgKgNQgLgOgRgIQgRgIgTAAQgfAAgWAVg");
	this.shape_387.setTransform(257.9,296.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#333333").ss(1,1,1).p("EhGdAllMCM4AAAIAAOEMiM4AAAgEBGogpKMiNFAAAIgKAAIAAqeIAKAAMCNFAAA");
	this.shape_388.setTransform(451,369.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("EhGbAHCIAAuDMCM3AAAIAAODg");
	this.shape_389.setTransform(450.9,655);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("Ag+BrIAAjQIAlAAIAAAgQAUgkAngBQAKABATADIgQAkQgLgJgNABQgTAAgOASQgPASAAAaIAAB3g");
	this.shape_390.setTransform(765.6,514.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AhGBaQgTgRAAgbQAAgfAcgWQAcgVAqgBQAMAAAPAGQAAgzgtAAQgiAAgTATIgPgfQAKgKATgFQATgHARAAQAsAAAUAVQAVAVAAAtIAABKQAAAcAQAIIAAATQgWAAgMgGQgKgGgFgQQgXAcgtAAQgYABgSgTgAgiANQgSAOAAATQAAAhAnAAQAbAAAWgbIAAgyQgSgDgGAAQgcAAgSAOg");
	this.shape_391.setTransform(745.9,514.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AhXBAQAAgYAOgXQAQgWAVgKQgRgKgMgRQgMgRAAgTQAAggAWgSQAWgSAhAAQAlAAAUASQAUASAAAgQAAATgMATQgMAUgRAJQA0AcAAAvQAAAogYAWQgYAWgpgBQhWAAAAhTgAgwBAQAAAVANAPQAOAOAUAAQAWAAANgOQAPgOAAgWQAAgQgKgNQgKgPgigTQgrAYAAAngAgmhOQAAAaAyAZQAagZAAgbQAAgQgLgJQgLgKgQAAQgmAAAAAkg");
	this.shape_392.setTransform(679.8,510.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#333333").s().p("AgYBoQgKgLAAgOQAAgPAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAPQAAAOgKALQgKALgPAAQgOAAgKgLgAgYg1QgKgLAAgPQAAgOAKgKQAKgLAOAAQAPAAAKALQAKAKAAAOQAAAPgKALQgKAKgPAAQgOAAgKgKg");
	this.shape_393.setTransform(228.4,309.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#333333").s().p("AAuBkQgJgHgCgKQgHAMgQAGQgQAIgSgBQghAAgUgRQgTgRAAgeQgBglAcgTQAbgVAxAAQAJAAAMADQgBglgtAAQgcAAgSAKIgLgnQAZgMAkABQAuAAAXAVQAVAWAAA9IAAAsQABApARALQgGALgIACQgIADgJgBQgKABgJgJgAguAqQABAcAgAAQArgBAAgrIAAgUQgNgDgFAAQg6AAAAAng");
	this.shape_394.setTransform(211,309.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#333333").s().p("AArBrIAAh5QAAgagKgMQgLgNgWAAQgLAAgMAGQgMAHgHAJIAACWIgxAAIAAjRIAjAAIAJAUQAUgYAmABQAlgBAWAXQAWAWAAAoIAACAg");
	this.shape_395.setTransform(188.4,309);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAIgMAAQgMAAgHgIg");
	this.shape_396.setTransform(169.9,305.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#333333").s().p("AhbB9IAfgmQAZAYAggBQAUABAOgHQANgGAAgLQAAgSgegBIgXADIgYACQgzgBAAgjQAAgLAIgKQAJgKALgEQgkgXAAgqQABgiAYgWQAYgWAlAAQAaAAAUAKIASgVIAjAeIgYARQANATAAAZQAAAjgXAVQgWAVghAAIgNgBIgHgCIgLAFQgJAEAAAFQAAAHAOABQAFgBAOgDQAOgCAKAAQBIAAAAA5QgBAfgcATQgdARgnABQgwgBgngcgAgfhaQgLAKAAARQAAASALAMQAKALARAAQARAAAJgLQAJgLAAgTQAAgQgKgLQgKgLgPAAQgRAAgKALg");
	this.shape_397.setTransform(154.8,312.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#333333").s().p("AAuCNQgIgHgDgKQgHALgRAHQgPAHgSAAQgiAAgTgRQgTgRgBgfQAAgkAcgVQAbgUAxAAQAJAAALADQAAgkgtAAQgbAAgTAJIgKgmQAZgMAiAAQAvAAAWAWQAXAWAAA7IAAAtQgBAqASALQgHAKgHADQgIACgJAAQgLAAgIgIgAgtBSQgBAcAhAAQArAAAAgsIAAgTQgMgDgHAAQg4AAAAAmgAgjhbIAig5IAuAAIgsA5g");
	this.shape_398.setTransform(134.1,305.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#333333").s().p("AhgCUIAAkjIAxAAIAAAOQASgRAbAAQBjAAAABtQAAAzgbAbQgdAcguAAQgYAAgSgJIAABYgAgvhcIAABtQANALASAAQAhAAAOgQQAPgPAAgjQAAglgPgPQgOgPghAAQgSAAgNANg");
	this.shape_399.setTransform(111.9,313.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegeAqAAQAtAAAcAaQAbAcAAAqQAAAIgEASIiUAAQABAZAQANQAQAPAaAAQAhgBARgRIATAmQgZAUg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_400.setTransform(76.4,309.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#333333").s().p("AhGB8QgagcAAgyQAAgwAdggQAdgfAqABQAYgBAUAKIAAhTIAxgNIAAErIgxAAIAAgNQgGAGgPAGQgOAEgPAAQgrAAgZgbgAgdgFQgQAQAAAiQAABBA+AAQAHAAAKgEQALgEADgFIAAhrQgQgNgRAAQgcAAgQASg");
	this.shape_401.setTransform(53,304.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgwAcgeQAbgdAtAAQAvAAAaAdQAaAcAAAyQABAxgbAeQgbAdguABQgwAAgZgfgAgjgyQgOASAAAgQAABEAyAAQAWABAOgTQANgSAAggQAAhDgxgBQgXAAgNASg");
	this.shape_402.setTransform(173.6,260.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#333333").s().p("AArCNIAAh5QAAgagKgMQgLgNgWAAQgLAAgMAHQgMAGgHAJIAACWIgxAAIAAjQIAjAAIAJATQAUgXAmAAQAlAAAWAWQAWAWAAAnIAACBgAgChhQgQgIgFAAQgKAAgHAPIgcAAQADgWAMgOQALgOARAAQAPAAAOAIQAPAHAFAAQALAAAGgPIAcAAQgHAdgLALQgKAKgRAAQgMAAgOgHg");
	this.shape_403.setTransform(150.5,257.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#333333").s().p("AAuBlQgIgIgDgJQgHAKgRAHQgPAIgSAAQgigBgTgQQgTgRgBgfQAAglAcgUQAbgUAxAAQAJAAALADQAAglgtAAQgbAAgTAJIgKglQAZgMAiAAQAvgBAWAWQAXAWAAA8IAAAsQgBAqASALQgHAKgHADQgIACgJABQgLgBgIgHgAgtApQgBAcAhAAQArAAAAgrIAAgUQgMgCgHgBQg4ABAAAlg");
	this.shape_404.setTransform(128.2,260.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#333333").s().p("ABhBqIAAiBQAAgqgmAAQgKAAgLAHQgKAGgDAJIAACVIgxAAIAAiJQAAgPgJgKQgJgJgSAAQgJAAgLAHQgLAHgFAIIAACVIgwAAIAAjQIAhAAIAKASQAUgWAgABQAqAAAUAWQAJgKAQgHQARgFARAAQAigBAUAVQAUATgBAjIAACJg");
	this.shape_405.setTransform(100.2,260.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#333333").s().p("AAuBlQgIgIgDgJQgHAKgRAHQgPAIgSAAQghgBgUgQQgTgRgBgfQAAglAcgUQAbgUAxAAQAJAAALADQAAglgtAAQgbAAgTAJIgKglQAZgMAjAAQAugBAWAWQAXAWAAA8IAAAsQgBAqASALQgHAKgHADQgIACgJABQgLgBgIgHgAgtApQAAAcAgAAQArAAAAgrIAAgUQgMgCgHgBQg4ABAAAlg");
	this.shape_406.setTransform(72.5,260.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#333333").s().p("AgaCPIAAjwIhbAAIAAgtIDrAAIAAAtIhfAAIAADwg");
	this.shape_407.setTransform(54,256.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#CCCCCC").s().p("AhxBxIB+jOIh4AAIAAgzIDdAAIixEhg");
	this.shape_408.setTransform(326.9,634.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#CCCCCC").s().p("AhMByQgcgcAAgsQAAgeAOggQAOghASgYIAthAIBJAAIhFBeQAOgCAMAAQAkAAAaAbQAaAaAAAmQAAArgfAdQgfAcguAAQgsAAgdgcgAggAJQgNAOAAATQAAASANANQANANATAAQARAAAMgNQAMgNAAgTQAAgTgMgNQgMgMgRABQgTgBgNAMg");
	this.shape_409.setTransform(326.9,583.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#CCCCCC").s().p("Ag4CJQgQgHgUgNIAGhAQAuAeAaAAQASAAAOgOQAOgNAAgSQAAgUgOgOQgOgMgUABQgagBgdALIAPiQICJAAIAAAzIhTAAIgDAhQAvAAAaAcQAZAcAAAmQAAAqghAgQghAggtAAQgVgBgRgFg");
	this.shape_410.setTransform(326.9,532.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#CCCCCC").s().p("AASCMIAAhDIh7AAIAAg0ICAigIA5AAIAAChIAaAAIAAAzIgaAAIAABDgAg2AWIBIAAIAAhbIgBAAg");
	this.shape_411.setTransform(326.2,480.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#CCCCCC").s().p("AhAB6QgZgXgHgpIA6AAQAKAoAdAAQAOAAALgKQAKgLAAgPQAAgTgMgMQgNgMgRAAIgLAAIAAguIAGAAQATAAANgKQAMgKgBgQQAAgPgJgKQgKgLgNAAQggAAgFApIg4AAQACgnAagXQAZgXAkAAQAmAAAcAWQAbAWAAAgQAAAighAcQAVAMAKAPQAKAPAAAUQAAAogaAYQgaAXgrAAQgnAAgbgWg");
	this.shape_412.setTransform(326.7,429.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#CCCCCC").s().p("AhgCPIBgh5QAUgaAJgRQAJgRAAgPQAAgRgLgKQgLgLgQAAQgSAAgHAOQgJANgCAcIg+AAQAAgzAegcQAegbArAAQApAAAbAYQAaAYAAAlQAAAlgfArIgRAZQgJAPgPATIgIAJIBQAAIAAA0g");
	this.shape_413.setTransform(326.9,378.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#CCCCCC").s().p("AgJCMIAAjkIgpAAIALgzIBaAAIAAEXg");
	this.shape_414.setTransform(324.9,328);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#CCCCCC").s().p("AhOBpQgfgmAAg/QAAhCAegoQAegpAxAAIABAAQAxAAAfAnQAdAmAABAQAABKghAkQghAkgrAAQgwAAgfgngAgkhAQgOAYAAArQAAAoAOAXQAOAYAWAAQAXAAAOgYQAOgXAAgpQAAgqgNgYQgOgYgXAAQgXAAgOAYg");
	this.shape_415.setTransform(326.9,276.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#333333").s().p("AhIBPQgbgeAAgxQAAgvAbgfQAcgeAsAAQAwAAAaAdQAaAdAAAyQABAygbAdQgbAegvgBQguAAgagdgAgjgyQgNASAAAgQgBBEAxABQAXgBANgRQAOgTAAggQAAhDgyAAQgWAAgNARg");
	this.shape_416.setTransform(176.9,590.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#333333").s().p("AgnBpQgNgDgUgLIASgnQAVASAdAAQAbAAAAgVQAAgMgJgIQgIgHgYgLQg2gUgBgpQAAgbAWgPQAUgPAfgBQAhAAAcAPIgNAmQgRgOgcAAQgZAAABAVQAAAHAIAHQAIAGAbALQAbALAMAOQANAQAAAWQgBAdgVARQgWAQgjAAQgWABgMgEg");
	this.shape_417.setTransform(157,590.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegeAqgBQAtAAAcAbQAbAcAAAqQAAAIgEASIiUAAQABAZAQANQAQAPAaAAQAhAAARgSIATAmQgZAUg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_418.setTransform(136.8,590.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("Ag8BQQgdgcAAgyQAAgxAfgeQAfgeA0gBQAkAAAbAVIgVAkQgRgQgdAAQgbAAgQATQgQASAAAgQAABCA+AAQAbAAAVgSIASAmQgWANgPAEQgQAEgWgBQgvAAgcgcg");
	this.shape_419.setTransform(115.1,590.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#333333").s().p("AhIBPQgbgeAAgxQAAgvAcgfQAbgeAsAAQAwAAAaAdQAaAdAAAyQABAygbAdQgbAegvgBQgvAAgZgdgAgjgyQgOASAAAgQAABEAxABQAXgBANgRQAOgTAAggQAAhDgyAAQgWAAgNARg");
	this.shape_420.setTransform(93.6,590.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#333333").s().p("AhGBrIAAjQIAxAAIAAATQAUgYAhAAQAZABAOAHIgVAqQgNgJgQAAQgRAAgMAPQgNAQAAAXIAAB2g");
	this.shape_421.setTransform(74.9,590.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#333333").s().p("AheCQIAAkdIA7gCQBDAAAgAVQAfAUAAAtQAABhhzAAIgXgBIAABpgAgrhhIAABcIAUABQAiAAAQgMQAQgLAAgbQAAgshHAAIgPABg");
	this.shape_422.setTransform(54.1,586.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333333").s().p("AhGBqIAAjQIAxAAIAAATQAUgWAhAAQAZAAAOAHIgVAqQgNgJgQAAQgRAAgMAPQgNAQAAAWIAAB2g");
	this.shape_423.setTransform(197.7,541.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#333333").s().p("AAuBkQgIgHgDgKQgHAMgRAGQgPAIgSAAQgigBgTgRQgUgQAAgfQABglAbgUQAbgUAyAAQAIAAALADQABglguAAQgbAAgTAJIgKgmQAYgMAjABQAvAAAWAVQAXAWgBA8IAAAsQAAAqARALQgFAKgIADQgHACgKABQgKAAgJgJgAgtApQgBAcAhABQArAAAAgsIAAgUQgNgCgGgBQg4ABAAAlg");
	this.shape_424.setTransform(177.5,542.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#333333").s().p("AhcBoIAAgQIBwiVIhuAAIAAgrIC2AAIAAARIhtCVIBuAAIAAAqg");
	this.shape_425.setTransform(156.1,542.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgMAIgIQAHgIAMAAQAMAAAIAIQAIAIAAAMQAAAMgIAIQgIAIgMABQgMgBgHgIg");
	this.shape_426.setTransform(138.9,538.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#333333").s().p("AgjBqIAAj0IAwgNIAADrQAAAmAXAIQgLAWgbAAQghgBAAgtg");
	this.shape_427.setTransform(128.9,537.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#333333").s().p("AAuBkQgIgHgDgKQgHAMgQAGQgQAIgSAAQgigBgTgRQgUgQAAgfQABglAbgUQAbgUAyAAQAIAAALADQABglguAAQgbAAgTAJIgKgmQAYgMAjABQAvAAAXAVQAWAWgBA8IAAAsQAAAqARALQgFAKgIADQgHACgKABQgKAAgJgJgAgtApQgBAcAhABQArAAAAgsIAAgUQgNgCgFgBQg5ABAAAlg");
	this.shape_428.setTransform(111.4,542.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#333333").s().p("AArBqIAAh3QAAgbgKgMQgLgNgWAAQgLAAgMAHQgMAFgHAKIAACVIgxAAIAAjQIAjAAIAJAUQAUgYAmABQAlgBAWAXQAWAWAAAoIAAB/g");
	this.shape_429.setTransform(88.8,541.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgMAIgIQAHgIAMAAQAMAAAIAIQAIAIAAAMQAAAMgIAIQgIAIgMABQgMgBgHgIg");
	this.shape_430.setTransform(70.3,538.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#333333").s().p("AhdCPIAAkdIC7AAIAAAtIiJAAIAABDIBkAAIAAAqIhkAAIAACDg");
	this.shape_431.setTransform(54.1,538.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#333333").s().p("AhpCQIAAkdIBMgCQA9AAAlAlQAlAkAAA9QAACZiTAAgAg3hhIAADDQANABAOAAQAmAAAWgcQAVgcAAgxQAAhchUAAIgYABg");
	this.shape_432.setTransform(774.8,185.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#333333").s().p("AA5CPIAAiBIhxAAIAACBIgyAAIAAkdIAyAAIAABwIBxAAIAAhwIAyAAIAAEdg");
	this.shape_433.setTransform(747.6,185.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#333333").s().p("AgjBqIAAj1IAwgMIAADrQAAAmAXAIQgLAVgbABQghgBAAgtg");
	this.shape_434.setTransform(717.2,185.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#333333").s().p("AhJBRQgcgcAAgzQAAgwAfgfQAegfAqABQAtAAAcAbQAbAbAAApQAAAKgEARIiUAAQABAZAQAOQAQAOAagBQAhAAARgRIATAlQgZAWg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_435.setTransform(698.6,189.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#333333").s().p("AhGB8QgagcAAgyQAAgxAdgfQAdgeAqAAQAYAAAUAJIAAhUIAxgMIAAEqIgxAAIAAgMQgGAHgPAEQgOAGgPAAQgrAAgZgcgAgdgFQgQARAAAhQAABBA+AAQAHAAAKgEQALgEADgEIAAhsQgQgNgRAAQgcAAgQASg");
	this.shape_436.setTransform(675.2,185.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#333333").s().p("AAuBlQgJgIgCgJQgHAKgQAIQgQAGgSAAQghAAgUgQQgUgRABggQgBgkAcgTQAbgVAyAAQAIAAAMADQAAglguAAQgcAAgSAKIgLgmQAZgNAkAAQAuAAAXAXQAVAVAAA9IAAAsQAAApARALQgFAKgIADQgHACgKAAQgLAAgIgHgAguApQAAAcAhAAQArAAAAgsIAAgTQgNgDgFABQg6gBAAAmg");
	this.shape_437.setTransform(813.6,141.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgMAIgIQAHgIAMAAQAMAAAIAIQAIAIAAAMQAAAMgIAIQgIAJgMAAQgMAAgHgJg");
	this.shape_438.setTransform(796.1,137.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_439.setTransform(783.5,141);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#333333").s().p("AhJBOQgbgdAAgxQAAgvAdgeQAbgfAtAAQAvAAAbAeQAaAcAAAyQgBAxgaAeQgbAdguAAQgwAAgagegAgjgyQgOASAAAgQAABEAyABQAWgBAOgRQANgSAAghQAAhEgxABQgXAAgNARg");
	this.shape_440.setTransform(762.4,141.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#333333").s().p("ABhBqIAAiCQgBgpgkAAQgLAAgLAHQgKAGgDAIIAACWIgxAAIAAiJQAAgPgJgJQgKgKgRAAQgJAAgLAHQgLAHgFAIIAACVIgwAAIAAjPIAhAAIAKASQAUgXAgAAQAqABAUAWQAKgKAPgHQARgFARgBQAiAAAUAVQAUATgBAkIAACIg");
	this.shape_441.setTransform(733.9,141);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegfAqAAQAtAAAcAbQAbAbAAAqQAAAJgEASIiUAAQABAZAQANQAQAOAaABQAhAAARgSIATAlQgZAWg0gBQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_442.setTransform(705.2,141.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#333333").s().p("AgHCRIg6idIgfCZIgxAAIA5kdIAcAAIA9C/IA8i/IAbAAIA6EdIgxAAIgeiZIg5Cdg");
	this.shape_443.setTransform(678.9,137.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#333333").s().p("AAuBlQgIgIgDgKQgHALgRAIQgPAHgSAAQgigBgTgQQgUgRAAgfQABglAbgUQAbgUAyAAQAIAAALADQABglguAAQgbAAgTAJIgKgmQAYgLAjAAQAvgBAWAWQAXAWgBA8IAAAsQAAAqARALQgFAKgIADQgHACgKABQgKgBgJgHgAgtApQgBAcAhAAQArAAAAgrIAAgUQgNgCgGgBQg4ABAAAlg");
	this.shape_444.setTransform(538.4,189.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#333333").s().p("AArBqIAAh3QAAgbgKgMQgLgNgWAAQgLAAgMAHQgMAFgHAKIAACVIgxAAIAAjQIAjAAIAJAUQAUgXAmAAQAlAAAWAWQAWAWAAAoIAAB/g");
	this.shape_445.setTransform(515.9,189.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#333333").s().p("AgMCRIAAioIgbAAIAAgoIBLAAIAADQgAgHhgQgIgIAAgMQAAgLAIgJQAHgIAMAAQAMAAAIAIQAIAJAAALQAAAMgIAIQgIAJgMAAQgMAAgHgJg");
	this.shape_446.setTransform(497.4,185.6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#333333").s().p("AhbB9IAfgmQAZAXAgABQAUgBAOgGQAOgGAAgLQAAgTgfABIgXABIgZACQgyAAAAgkQAAgKAIgKQAJgKALgEQgkgXABgrQAAghAYgWQAZgWAjAAQAcAAASALIATgXIAiAfIgXARQANATAAAYQAAAkgXAWQgVAUgiAAIgMgBIgIgBIgLAEQgJAEAAAEQAAAJANgBQAHAAANgCQAOgDAKAAQBHAAAAA5QABAggdARQgdATgngBQgwAAgngcgAgghbQgKALAAARQAAASAKAMQAKALASAAQARAAAIgLQAKgLAAgTQAAgQgKgLQgKgLgPAAQgRAAgLAKg");
	this.shape_447.setTransform(482.3,193);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#333333").s().p("AAuCNQgJgHgCgKQgHALgQAHQgQAHgSAAQghAAgUgRQgTgRAAgfQAAgkAbgVQAbgUAxAAQAJAAAMADQgBgkgtAAQgcAAgSAJIgLgmQAZgMAkAAQAuAAAXAWQAVAWABA7IAAAtQAAAqARALQgHAKgHADQgIACgJAAQgLAAgIgIgAguBSQABAcAgAAQArAAAAgsIAAgTQgNgDgFAAQg6AAAAAmgAgjhbIAhg5IAvAAIgsA5g");
	this.shape_448.setTransform(461.5,185.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#333333").s().p("AhgCTIAAkiIAxAAIAAAPQASgTAbABQBjAAAABuQAAAygbAcQgdAcguAAQgXAAgTgKIAABXgAgvhbIAABtQANAKASAAQAgAAAQgQQAOgPAAgjQAAglgOgPQgPgPghAAQgSAAgNAOg");
	this.shape_449.setTransform(439.4,193.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#333333").s().p("AhJBRQgcgcAAgzQAAgwAfgfQAegfAqABQAtAAAcAbQAbAbAAApQAAAKgEARIiUAAQABAZAQAOQAQAOAagBQAhAAARgRIATAlQgZAWg0AAQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_450.setTransform(403.8,189.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#333333").s().p("AhGB8QgagcAAgyQAAgxAdgfQAdgeAqAAQAYAAAUAJIAAhUIAxgMIAAEqIgxAAIAAgMQgGAHgPAEQgOAGgPAAQgrAAgZgcgAgdgFQgQARAAAhQAABBA+AAQAHAAAKgEQALgEADgEIAAhsQgQgNgRAAQgcAAgQASg");
	this.shape_451.setTransform(380.5,185.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#333333").s().p("AgnBpQgNgEgUgKIASgnQAVARAdAAQAbABAAgVQAAgMgJgHQgIgIgYgKQg2gWgBgoQAAgcAWgPQAUgPAfAAQAhAAAcAPIgNAmQgRgNgcAAQgZgBABAVQAAAHAIAHQAIAHAbAKQAbALAMAOQANAQAAAWQgBAdgVARQgWAQgjAAQgWAAgMgDg");
	this.shape_452.setTransform(489.1,141.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAcgeQAbgfAtAAQAvAAAaAeQAbAcAAAyQgBAxgaAeQgbAdguAAQgwAAgZgegAgjgyQgOASAAAgQAABEAyABQAWgBAOgRQANgSAAghQAAhEgxABQgXAAgNARg");
	this.shape_453.setTransform(469.1,141.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#333333").s().p("Ag8BQQgdgcAAgyQAAgxAfgeQAfgfA0AAQAkABAbAUIgVAlQgRgRgdAAQgbAAgQATQgQASAAAgQAABCA+AAQAbgBAVgRIASAmQgWANgPAEQgQADgWAAQgvAAgcgcg");
	this.shape_454.setTransform(447.6,141.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_455.setTransform(430,141);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#333333").s().p("AAuBlQgJgIgCgJQgHAKgQAIQgQAGgSAAQghAAgUgQQgTgRAAggQAAgkAbgTQAbgVAxAAQAJAAAMADQgBglgtAAQgcAAgSAKIgLgmQAZgNAkAAQAuAAAXAXQAVAVABA9IAAAsQAAApARALQgHAKgHADQgIACgJAAQgLAAgIgHgAguApQABAcAgAAQArAAAAgsIAAgTQgNgDgFABQg6gBAAAmg");
	this.shape_456.setTransform(409.8,141.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#333333").s().p("AgHCRIg6idIgfCZIgxAAIA5kdIAcAAIA9C/IA8i/IAbAAIA6EdIgxAAIgeiZIg5Cdg");
	this.shape_457.setTransform(384.2,137.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAbgeQAcgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQguAAgagegAgjgyQgNASAAAgQgBBEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_458.setTransform(176.9,141.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#333333").s().p("AgnBpQgNgEgUgKIASgnQAVARAdAAQAbABAAgVQAAgMgJgHQgIgIgYgKQg2gWgBgoQAAgcAWgPQAUgPAfAAQAhAAAcAPIgNAmQgRgNgcAAQgZgBABAVQAAAHAIAHQAIAHAbAKQAbALAMAOQANAQAAAWQgBAdgVARQgWAQgjAAQgWAAgMgDg");
	this.shape_459.setTransform(157,141.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#333333").s().p("AhJBQQgcgbAAgzQAAgxAfgeQAegfAqAAQAtAAAcAbQAbAbAAAqQAAAJgEASIiUAAQABAZAQANQAQAOAaABQAhAAARgSIATAlQgZAWg0gBQguAAgcgcgAgwgVIBlAAQgFgugtAAQgpAAgKAug");
	this.shape_460.setTransform(136.8,141.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#333333").s().p("Ag8BQQgdgcAAgyQAAgxAfgeQAfgfA0AAQAkABAbAUIgVAlQgRgRgdAAQgbAAgQATQgQASAAAgQAABCA+AAQAbgBAVgRIASAmQgWANgPAEQgQADgWAAQgvAAgcgcg");
	this.shape_461.setTransform(115.1,141.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#333333").s().p("AhIBOQgbgdAAgxQAAgvAcgeQAbgfAsAAQAwAAAaAeQAaAcAAAyQABAxgbAeQgbAdgvAAQgvAAgZgegAgjgyQgOASAAAgQAABEAxABQAXgBANgRQAOgSAAghQAAhEgyABQgWAAgNARg");
	this.shape_462.setTransform(93.6,141.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#333333").s().p("AhGBqIAAjPIAxAAIAAATQAUgYAhAAQAZAAAOAIIgVAqQgNgJgQAAQgRAAgMAQQgNAPAAAXIAAB1g");
	this.shape_463.setTransform(74.9,141);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#333333").s().p("AheCQIAAkdIA7gCQBDAAAgAVQAfAVAAArQAABihzAAIgXgBIAABpgAgrhhIAABcIAUABQAiAAAQgLQAQgNAAgaQAAgshHAAIgPABg");
	this.shape_464.setTransform(54.1,137.3);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#CCCCCC").s().p("AgVBJQgJgJAAgMQAAgNAKgKQAIgIAMgBQANABAJAIQAKAKAAANQAAAMgKAJQgJAJgNAAQgMAAgJgJgAgVgcQgJgJAAgNQAAgMAJgKQAJgJAMAAQANAAAIAJQAKAKAAAMQAAANgKAJQgIAJgNAAQgMAAgJgJg");
	this.shape_465.setTransform(783.5,62.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#CCCCCC").s().p("Ag/A9QgXgaAAgjQAAgmAZgYQAZgYAmgBQAkAAAYAZQAZAZAAAlQAAAmgZAZQgYAZglAAQgpAAgXgbgAgZgdQgLAMAAARQAAAQALANQALANAPAAQAPAAAKgNQAMgMAAgRQAAgPgMgNQgKgNgPAAQgPAAgLAMg");
	this.shape_466.setTransform(767.7,61.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#CCCCCC").s().p("AgjBNQgTgKgMgWIAogSQAOAYANAAQAHAAAGgFQAEgEAAgFQAAgHgFgEQgHgEgCAAQgCgBgLgEQgzgRAAgjQAAgXASgOQASgOAdAAQAgAAAaAbIgiAVQgPgPgNAAQgFAAgFADQgEAEAAAFQAAAIAFAEQAGAEAVAHQAWAIANALQAOAMAAAWQgBAVgTAQQgTAPgcAAQgSAAgSgKg");
	this.shape_467.setTransform(748.5,61.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#CCCCCC").s().p("Ag9A/QgXgYAAgnQAAgkAZgaQAYgZAjAAQAlABAYAaQAYAaAAAmIAAAIIh2AAQABAQAJAKQAKAKANAAQAWABANgWIAuAQQgaAtg2AAQgmAAgYgZgAgVgsQgKAIgCAQIBDAAQgHgggaAAQgNAAgJAIg");
	this.shape_468.setTransform(730.4,61.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#CCCCCC").s().p("AgoA/QgZgaAAglQAAgkAXgaQAYgZAkAAQAZABAXAMIAAAvQgWgLgSAAQgQAAgKALQgKAKAAARQAAAPAKALQAJAKARAAQAOAAAZgKIAAAyQgZAMgSAAQgkAAgagZg");
	this.shape_469.setTransform(712.8,61.6);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#CCCCCC").s().p("Ag/A9QgXgaAAgjQAAgmAZgYQAZgYAmgBQAkAAAZAZQAYAZAAAlQAAAmgYAZQgZAZglAAQgpAAgXgbgAgZgdQgLAMAAARQAAAQALANQALANAPAAQAPAAALgNQAKgMABgRQgBgPgKgNQgLgNgPAAQgPAAgLAMg");
	this.shape_470.setTransform(694.1,61.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#CCCCCC").s().p("AgvBVIAAinIAxAAIAAAZIABAAQAHgMAKgIQAKgHAIAAIAKABIAAA2IgNgBQgPAAgJALQgIALAAASIAABLg");
	this.shape_471.setTransform(677.9,61.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#CCCCCC").s().p("AhWB7IAAjxIAyAAIAAAZIAAAAQALgPANgHQALgHAQAAQAeAAAVAbQAVAaAAAmQAAAhgUAZQgVAZgdAAQgQAAgMgHQgLgIgNgPIgBAAIAABlgAgYg8QgLAMAAARQAAAQALALQALALAOAAQAOAAAKgKQAKgLAAgRQAAgRgLgMQgKgMgOAAQgPAAgJAMg");
	this.shape_472.setTransform(661,65.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#CCCCCC").s().p("AgvBVIAAinIAxAAIAAAZIABAAQAHgMAKgIQAKgHAIAAIAKABIAAA2IgNgBQgPAAgJALQgIALAAASIAABLg");
	this.shape_473.setTransform(633.5,61.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#CCCCCC").s().p("AhCA+QgUgZAAglQAAgjAWgZQAWgaAeAAQANAAAMAGQAMAHAMAOIAAgXIAyAAIAACmIgyAAIAAgcIAAAAQgMAQgMAIQgMAHgQAAQgeAAgVgZgAgXgYQgKAMAAARQAAAQAJALQAKAKAOAAQAPAAALgMQAKgMAAgRQAAgOgKgMQgLgLgOAAQgOAAgKAMg");
	this.shape_474.setTransform(615.3,61.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#CCCCCC").s().p("Ag4BrQgVgNgJgfIA4AAQARAWASABQAPAAAJgNQAJgMAAgUIAAgUQgWAdgdAAQgfAAgVgZQgWgYAAgkQAAgjAWgZQAWgZAfAAQAZAAAZAbIAAgXIAyAAIAACpQAAAOgJATQgJARgVAJQgWAJgbAAQgjAAgVgOgAgWhAQgLAMAAASQAAANALAMQALAMAOAAQAPAAAKgLQALgMAAgQQAAgSgKgKQgKgLgQAAQgPAAgKALg");
	this.shape_475.setTransform(594.1,65);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#CCCCCC").s().p("AgvBVIAAinIAxAAIAAAZIABAAQAHgMAKgIQAKgHAIAAIAKABIAAA2IgNgBQgPAAgJALQgIALAAASIAABLg");
	this.shape_476.setTransform(578,61.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#CCCCCC").s().p("AhCA+QgUgZAAglQAAgjAWgZQAWgaAeAAQANAAAMAGQAMAHAMAOIAAgXIAyAAIAACmIgyAAIAAgcIAAAAQgMAQgMAIQgMAHgQAAQgeAAgVgZgAgXgYQgKAMAAARQAAAQAJALQAKAKAOAAQAPAAALgMQAKgMAAgRQAAgOgKgMQgLgLgOAAQgOAAgKAMg");
	this.shape_477.setTransform(559.8,61.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#CCCCCC").s().p("Ag/BeQgjgmgBg3QABg3AkgmQAlgnAzAAQAjAAAmARIAAA/QgpgZggAAQgeAAgSAVQgTAWAAAjQAAAjAUAUQATAVAhAAQAcAAAogXIAAA+QgtAPgeAAQgzAAgkgmg");
	this.shape_478.setTransform(538.6,57.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#333333").ss(1,1,1).p("EhH3gzKMCPvAAAIAAK8MiPvAAAgAfxyGMAgDAAAMAAAAmRMggDAAAgAtyyGMAhlAAAMAAABFRMghlAAAg");
	this.shape_479.setTransform(451.7,347.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#CCCCCC").s().p("EgmyAipMAAAhFRMAhmAAAMAAABFRgAGxDpMAAAgmRMAgDAAAMAAAAmRg");
	this.shape_480.setTransform(611.8,453.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#333333").s().p("EhH3AFeIAAq7MCPvAAAIAAK7g");
	this.shape_481.setTransform(451.7,55.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#333333").ss(1,1,1).p("EhH3gzKMCPvAAAIAAK8MiPvAAAgAfxyGMAgDAAAMAAAAmRMggDAAAgAtyouIAApYMAhlAAAIAAJYIAAI2MghlAAAgATzouMghlAAAATzIuMghlAAAIAAomATzIuMAAAAqdMghlAAAMAAAgqdATzAIIAAIm");
	this.shape_482.setTransform(451.7,347.5);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,111).s().p("AwyETIAAolMAhlAAAIAAIlg");
	this.shape_483.setTransform(147.2,487.6);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,111.2).s().p("AwyEcIAAo2MAhlAAAIAAI2g");
	this.shape_484.setTransform(147.2,431.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#CCCCCC").s().p("EgmyAipMAAAgqcMAhmAAAMAAAAqcgAGxDpMAAAgmRMAgDAAAMAAAAmRg");
	this.shape_485.setTransform(611.8,453.3);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#333333").ss(1,1,1).p("EhH3gzKMCPvAAAIAAK8MiPvAAAgAfxyGMAgDAAAMAAAAmRMggDAAAgAtyouIAApYMAhlAAAIAAJYIAAI2MghlAAAgATzouMghlAAAATzIuMAAAAqdMghlAAAMAAAgqdATzIuMghlAAAIAAomATzAIIAAIm");
	this.shape_486.setTransform(451.7,347.5);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#333333").ss(1,1,1).p("EhH3gzKMCPvAAAIAAK8MiPvAAAgAfxyGMAgDAAAMAAAAmRMggDAAAgAtyouIAApYMAhlAAAIAAJYIAAI2MghlAAAgATzouMghlAAAATzIuIAAImIAAIFIAAZyMghlAAAIAA5yIAAoFIAAomIAAomATzIuMghlAAAATzRUMghlAAAATzZZMghlAAAATzAIIAAIm");
	this.shape_487.setTransform(451.7,347.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#CCCCCC").s().p("EgmyAipIAA5yMAhmAAAIAAZygAGxDpMAAAgmRMAgDAAAMAAAAmRg");
	this.shape_488.setTransform(611.8,453.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#333333").ss(1,1,1).p("EhH3gzKMCPvAAAIAAK8MiPvAAAgAfxyGMAgDAAAMAAAAmRMggDAAAgAtyouIAApYMAhlAAAIAAJYIAAI2MghlAAAgATzouMghlAAAATzIuIAAImIAAIFMghlAAAIAAoFIAAomIAAomATzZZIAAZyMghlAAAIAA5yATzRUMghlAAAATzIuMghlAAAATzAIIAAIm");
	this.shape_489.setTransform(451.7,347.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#333333").ss(1,1,1).p("EhH3gzKMCPvAAAIAAK8MiPvAAAgAfxyGMAgDAAAMAAAAmRMggDAAAgAtyouIAApYMAhlAAAIAAJYIAAI2MghlAAAgATzouMghlAAAATzIuIAAImIAAIFMghlAAAIAAoFIAAomATzZZIAAZyMghlAAAIAA5yATzRUMghlAAAATzIuMghlAAAIAAomATzAIIAAIm");
	this.shape_490.setTransform(451.7,347.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287,p:{y:292.9}},{t:this.shape_286,p:{y:296.6}},{t:this.shape_285},{t:this.shape_284,p:{y:296.6}},{t:this.shape_283,p:{y:292.4}},{t:this.shape_282,p:{y:296.6}},{t:this.shape_281},{t:this.shape_280,p:{x:257.9,y:296.6}},{t:this.shape_279},{t:this.shape_278,p:{x:332.4,y:296.6}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:442.4,y:296.6}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:613.7,y:296.6}},{t:this.shape_264},{t:this.shape_263,p:{x:641.9,y:296.6}}]}).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287,p:{y:292.9}},{t:this.shape_286,p:{y:296.6}},{t:this.shape_285},{t:this.shape_284,p:{y:296.6}},{t:this.shape_283,p:{y:292.4}},{t:this.shape_282,p:{y:296.6}},{t:this.shape_281},{t:this.shape_280,p:{x:257.9,y:296.6}},{t:this.shape_279},{t:this.shape_278,p:{x:332.4,y:296.6}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:442.4,y:296.6}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:613.7,y:296.6}},{t:this.shape_264},{t:this.shape_263,p:{x:641.9,y:296.6}},{t:this.shape_315,p:{x:669.7}},{t:this.shape_314},{t:this.shape_313,p:{x:725.1}},{t:this.shape_312,p:{x:745.5}},{t:this.shape_311,p:{x:763.6}},{t:this.shape_310},{t:this.shape_309,p:{x:801.1}}]},9).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287,p:{y:292.9}},{t:this.shape_286,p:{y:296.6}},{t:this.shape_285},{t:this.shape_284,p:{y:296.6}},{t:this.shape_283,p:{y:292.4}},{t:this.shape_282,p:{y:296.6}},{t:this.shape_281},{t:this.shape_280,p:{x:257.9,y:296.6}},{t:this.shape_279},{t:this.shape_278,p:{x:332.4,y:296.6}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:442.4,y:296.6}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:613.7,y:296.6}},{t:this.shape_264},{t:this.shape_263,p:{x:641.9,y:296.6}},{t:this.shape_315,p:{x:661.3}},{t:this.shape_317},{t:this.shape_313,p:{x:716.7}},{t:this.shape_312,p:{x:737.2}},{t:this.shape_311,p:{x:755.3}},{t:this.shape_316},{t:this.shape_309,p:{x:792.8}}]},5).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_334},{t:this.shape_333},{t:this.shape_285},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_281},{t:this.shape_329,p:{x:257.9,y:296.6}},{t:this.shape_279},{t:this.shape_280,p:{x:332.4,y:296.6}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:442.4,y:296.6}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:613.7,y:296.6}},{t:this.shape_264},{t:this.shape_328,p:{x:641.9,y:296.6}},{t:this.shape_315,p:{x:668.7}},{t:this.shape_327},{t:this.shape_313,p:{x:724.1}},{t:this.shape_312,p:{x:744.6}},{t:this.shape_311,p:{x:762.7}},{t:this.shape_326},{t:this.shape_309,p:{x:800.2}},{t:this.shape_287,p:{y:398.7}},{t:this.shape_286,p:{y:402.4}},{t:this.shape_325},{t:this.shape_284,p:{y:402.4}},{t:this.shape_283,p:{y:398.2}},{t:this.shape_282,p:{y:402.4}},{t:this.shape_324},{t:this.shape_278,p:{x:257.9,y:402.4}},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_263,p:{x:429.2,y:402.4}}]},5).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_334},{t:this.shape_333},{t:this.shape_285},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_281},{t:this.shape_329,p:{x:257.9,y:296.6}},{t:this.shape_279},{t:this.shape_280,p:{x:332.4,y:296.6}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:442.4,y:296.6}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:613.7,y:296.6}},{t:this.shape_264},{t:this.shape_328,p:{x:641.9,y:296.6}},{t:this.shape_315,p:{x:670.4}},{t:this.shape_336},{t:this.shape_313,p:{x:725.8}},{t:this.shape_312,p:{x:746.2}},{t:this.shape_311,p:{x:764.3}},{t:this.shape_335},{t:this.shape_309,p:{x:801.8}},{t:this.shape_287,p:{y:398.7}},{t:this.shape_286,p:{y:402.4}},{t:this.shape_325},{t:this.shape_284,p:{y:402.4}},{t:this.shape_283,p:{y:398.2}},{t:this.shape_282,p:{y:402.4}},{t:this.shape_324},{t:this.shape_278,p:{x:257.9,y:402.4}},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_263,p:{x:429.2,y:402.4}}]},5).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_334},{t:this.shape_333},{t:this.shape_285},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_281},{t:this.shape_329,p:{x:257.9,y:296.6}},{t:this.shape_279},{t:this.shape_280,p:{x:332.4,y:296.6}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:442.4,y:296.6}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:613.7,y:296.6}},{t:this.shape_264},{t:this.shape_328,p:{x:641.9,y:296.6}},{t:this.shape_315,p:{x:673.7}},{t:this.shape_344},{t:this.shape_313,p:{x:729.1}},{t:this.shape_312,p:{x:749.6}},{t:this.shape_311,p:{x:767.7}},{t:this.shape_343},{t:this.shape_309,p:{x:805.2}},{t:this.shape_287,p:{y:398.7}},{t:this.shape_286,p:{y:402.4}},{t:this.shape_325},{t:this.shape_284,p:{y:402.4}},{t:this.shape_283,p:{y:398.2}},{t:this.shape_282,p:{y:402.4}},{t:this.shape_324},{t:this.shape_278,p:{x:257.9,y:402.4}},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_263,p:{x:429.2,y:402.4}},{t:this.shape_342},{t:this.shape_341,p:{x:494.7}},{t:this.shape_340,p:{x:515.1}},{t:this.shape_339,p:{x:533.2}},{t:this.shape_338},{t:this.shape_337,p:{x:570.7}}]},5).to({state:[{t:this.shape_308},{t:this.shape_389},{t:this.shape_388},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_334},{t:this.shape_333},{t:this.shape_285},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_281},{t:this.shape_387},{t:this.shape_279},{t:this.shape_386},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_385},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_384},{t:this.shape_264},{t:this.shape_383},{t:this.shape_315,p:{x:668.7}},{t:this.shape_382},{t:this.shape_313,p:{x:724.1}},{t:this.shape_312,p:{x:744.5}},{t:this.shape_311,p:{x:762.6}},{t:this.shape_381},{t:this.shape_309,p:{x:800.1}},{t:this.shape_287,p:{y:398.7}},{t:this.shape_286,p:{y:402.4}},{t:this.shape_325},{t:this.shape_284,p:{y:402.4}},{t:this.shape_283,p:{y:398.2}},{t:this.shape_282,p:{y:402.4}},{t:this.shape_324},{t:this.shape_380},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_328,p:{x:429.2,y:402.4}},{t:this.shape_379},{t:this.shape_341,p:{x:483.1}},{t:this.shape_340,p:{x:503.6}},{t:this.shape_339,p:{x:521.7}},{t:this.shape_378},{t:this.shape_337,p:{x:559.2}},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_329,p:{x:151.1,y:515.7}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_280,p:{x:253.8,y:515.7}},{t:this.shape_371},{t:this.shape_273,p:{x:328.5,y:515.7}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_278,p:{x:473.8,y:515.7}},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_265,p:{x:624.9,y:515.7}},{t:this.shape_263,p:{x:645.1,y:515.7}},{t:this.shape_360},{t:this.shape_359,p:{x:708}},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356,p:{x:771}},{t:this.shape_355,p:{x:791.6}},{t:this.shape_354,p:{x:810.4}},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345}]},5).to({state:[{t:this.shape_308},{t:this.shape_389},{t:this.shape_388},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_334},{t:this.shape_333},{t:this.shape_285},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_281},{t:this.shape_387},{t:this.shape_279},{t:this.shape_386},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_385},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_384},{t:this.shape_264},{t:this.shape_383},{t:this.shape_315,p:{x:668.7}},{t:this.shape_382},{t:this.shape_313,p:{x:724.1}},{t:this.shape_312,p:{x:744.5}},{t:this.shape_311,p:{x:762.6}},{t:this.shape_381},{t:this.shape_309,p:{x:800.1}},{t:this.shape_287,p:{y:398.7}},{t:this.shape_286,p:{y:402.4}},{t:this.shape_325},{t:this.shape_284,p:{y:402.4}},{t:this.shape_283,p:{y:398.2}},{t:this.shape_282,p:{y:402.4}},{t:this.shape_324},{t:this.shape_380},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_328,p:{x:429.2,y:402.4}},{t:this.shape_379},{t:this.shape_341,p:{x:483.1}},{t:this.shape_340,p:{x:503.6}},{t:this.shape_339,p:{x:521.7}},{t:this.shape_378},{t:this.shape_337,p:{x:559.2}},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_329,p:{x:151.1,y:515.7}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_280,p:{x:253.8,y:515.7}},{t:this.shape_371},{t:this.shape_273,p:{x:328.5,y:515.7}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_278,p:{x:473.8,y:515.7}},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_265,p:{x:624.9,y:515.7}},{t:this.shape_263,p:{x:645.1,y:515.7}},{t:this.shape_392},{t:this.shape_359,p:{x:718.8}},{t:this.shape_391},{t:this.shape_390},{t:this.shape_356,p:{x:781.8}},{t:this.shape_355,p:{x:802.4}},{t:this.shape_354,p:{x:821.2}},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345}]},15).to({state:[{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393}]},1).to({state:[{t:this.shape_481},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482}]},14).to({state:[{t:this.shape_481},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482}]},15).to({state:[{t:this.shape_481},{t:this.shape_485},{t:this.shape_486}]},30).to({state:[{t:this.shape_481},{t:this.shape_485},{t:this.shape_486}]},1).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_487}]},29).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_487}]},1).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_487}]},1).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_489}]},1).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_487}]},27).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_487}]},1).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_489}]},14).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_489}]},1).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_487}]},28).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_490}]},1).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_490}]},1).to({state:[{t:this.shape_481},{t:this.shape_488},{t:this.shape_487}]},29).wait(1));

	// Capa 1
	this.instance_17 = new lib.Background();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-7,0,0.572,0.715);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#333333").ss(1,1,1).p("AGIF3IAAFeIsPAAIAAleIAAxLIMPAAIAARLIsPAA");
	this.shape_491.setTransform(402.6,304.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,67.6).s().p("AmHImIAAxLIMPAAIAARLg");
	this.shape_492.setTransform(402.6,286.7);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.rf(["#FFFFFF","#000000"],[0,1],0,-55,0,0,-55,82.4).s().p("AmHCvIAAldIMPAAIAAFdg");
	this.shape_493.setTransform(402.6,359.2);

	this.instance_18 = new lib.Símbolo5();
	this.instance_18.parent = this;
	this.instance_18.setTransform(470.9,381.7,1,1,0,0,0,107.5,30);

	this.instance_19 = new lib.Símbolo5();
	this.instance_19.parent = this;
	this.instance_19.setTransform(470.9,321.7,1,1,0,0,0,107.5,30);

	this.instance_20 = new lib.Símbolo5();
	this.instance_20.parent = this;
	this.instance_20.setTransform(470.9,261.7,1,1,0,0,0,107.5,30);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AhbCSIAAgQIBaiEQAagoAAgbQABgggmgBQgeABgSAfIgigbQAKgUAVgOQAXgOAZAAQAsAAAYAVQAaAUAAAjQAAAhghAvIg5BaIBrAAIAAAtg");
	this.shape_494.setTransform(252.6,305.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#333333").ss(1,1,1).p("AGIF3IAAFeIsPAAIAAleAGIF3IsPAAIAAxLIMPAAg");
	this.shape_495.setTransform(402.6,304.2);

	this.instance_21 = new lib.Símbolo5();
	this.instance_21.parent = this;
	this.instance_21.setTransform(470.9,321.7,1,1,0,0,0,107.5,30);

	this.instance_22 = new lib.Símbolo5();
	this.instance_22.parent = this;
	this.instance_22.setTransform(470.9,261.7,1,1,0,0,0,107.5,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.instance_17,p:{x:-7,y:0}}]},50).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_495},{t:this.instance_17,p:{x:-7,y:0}},{t:this.shape_494},{t:this.instance_20,p:{y:261.7}},{t:this.instance_19,p:{y:321.7,x:470.9}},{t:this.instance_18,p:{y:381.7,x:470.9}}]},60).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_495},{t:this.instance_17,p:{x:-7,y:0}},{t:this.shape_494},{t:this.instance_20,p:{y:261.7}},{t:this.instance_19,p:{y:321.7,x:470.9}},{t:this.instance_18,p:{y:381.7,x:470.9}}]},29).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_495},{t:this.instance_17,p:{x:-7,y:0}},{t:this.shape_494},{t:this.instance_20,p:{y:261.7}},{t:this.instance_19,p:{y:321.7,x:470.9}},{t:this.instance_18,p:{y:381.7,x:470.9}}]},1).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_495},{t:this.instance_17,p:{x:-7,y:0}},{t:this.shape_494},{t:this.instance_22},{t:this.instance_21,p:{y:321.7}},{t:this.instance_20,p:{y:381.7}},{t:this.instance_19,p:{y:428.4,x:470.9}},{t:this.instance_18,p:{y:486.4,x:470.9}}]},1).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.instance_17,p:{x:-8,y:-15}},{t:this.shape_494},{t:this.instance_22},{t:this.instance_21,p:{y:321.7}},{t:this.instance_20,p:{y:381.7}},{t:this.instance_19,p:{y:428.4,x:470.9}},{t:this.instance_18,p:{y:486.4,x:470.9}}]},1).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_495},{t:this.instance_17,p:{x:-8,y:-15}},{t:this.shape_494},{t:this.instance_22},{t:this.instance_21,p:{y:321.7}},{t:this.instance_20,p:{y:381.7}},{t:this.instance_19,p:{y:428.4,x:470.9}},{t:this.instance_18,p:{y:486.4,x:470.9}}]},27).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_495},{t:this.instance_17,p:{x:-8,y:-15}},{t:this.shape_494},{t:this.instance_22},{t:this.instance_21,p:{y:321.7}},{t:this.instance_20,p:{y:381.7}},{t:this.instance_19,p:{y:428.4,x:470.9}},{t:this.instance_18,p:{y:486.4,x:470.9}}]},1).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_495},{t:this.instance_17,p:{x:-8,y:-15}},{t:this.shape_494},{t:this.instance_22},{t:this.instance_21,p:{y:321.7}},{t:this.instance_20,p:{y:381.7}},{t:this.instance_19,p:{y:428.4,x:470.9}},{t:this.instance_18,p:{y:486.4,x:470.9}}]},14).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_495},{t:this.instance_17,p:{x:-8,y:-15}},{t:this.shape_494},{t:this.instance_20,p:{y:261.7}},{t:this.instance_19,p:{y:321.7,x:470.9}},{t:this.instance_18,p:{y:381.7,x:470.9}}]},1).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.instance_17,p:{x:-8,y:-15}},{t:this.shape_494},{t:this.instance_21,p:{y:261.7}},{t:this.instance_20,p:{y:321.7}},{t:this.instance_19,p:{y:381.7,x:470.9}},{t:this.instance_18,p:{y:381.7,x:158.5}}]},28).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.instance_17,p:{x:-8,y:-15}},{t:this.shape_494},{t:this.instance_22},{t:this.instance_21,p:{y:321.7}},{t:this.instance_20,p:{y:381.7}},{t:this.instance_19,p:{y:381.7,x:158.5}},{t:this.instance_18,p:{y:441.7,x:158.5}}]},1).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.instance_17,p:{x:-8,y:-15}},{t:this.shape_494},{t:this.instance_20,p:{y:261.7}},{t:this.instance_19,p:{y:321.7,x:470.9}},{t:this.instance_18,p:{y:381.7,x:470.9}}]},1).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_495},{t:this.instance_17,p:{x:-8,y:-15}},{t:this.shape_494},{t:this.instance_20,p:{y:261.7}},{t:this.instance_19,p:{y:321.7,x:470.9}},{t:this.instance_18,p:{y:381.7,x:470.9}}]},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(448.1,382.4,906,285.7);
// library properties:
lib.properties = {
	width: 900,
	height: 700,
	fps: 10,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Background.jpg", id:"Background"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
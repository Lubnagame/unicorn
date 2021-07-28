gdjs.gameCode = {};
gdjs.gameCode.GDunicornObjects1= [];
gdjs.gameCode.GDunicornObjects2= [];
gdjs.gameCode.GDfloorObjects1= [];
gdjs.gameCode.GDfloorObjects2= [];
gdjs.gameCode.GDbgObjects1= [];
gdjs.gameCode.GDbgObjects2= [];
gdjs.gameCode.GDtopObjects1= [];
gdjs.gameCode.GDtopObjects2= [];
gdjs.gameCode.GDbuttonObjects1= [];
gdjs.gameCode.GDbuttonObjects2= [];
gdjs.gameCode.GDcObjects1= [];
gdjs.gameCode.GDcObjects2= [];
gdjs.gameCode.GDc2Objects1= [];
gdjs.gameCode.GDc2Objects2= [];
gdjs.gameCode.GDc3Objects1= [];
gdjs.gameCode.GDc3Objects2= [];
gdjs.gameCode.GDskObjects1= [];
gdjs.gameCode.GDskObjects2= [];
gdjs.gameCode.GDscoreObjects1= [];
gdjs.gameCode.GDscoreObjects2= [];
gdjs.gameCode.GDgameoObjects1= [];
gdjs.gameCode.GDgameoObjects2= [];
gdjs.gameCode.GDrestartObjects1= [];
gdjs.gameCode.GDrestartObjects2= [];
gdjs.gameCode.GDwowObjects1= [];
gdjs.gameCode.GDwowObjects2= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};


gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDunicornObjects1Objects = Hashtable.newFrom({"unicorn": gdjs.gameCode.GDunicornObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDtopObjects1Objects = Hashtable.newFrom({"top": gdjs.gameCode.GDtopObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDunicornObjects1Objects = Hashtable.newFrom({"unicorn": gdjs.gameCode.GDunicornObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.gameCode.GDbuttonObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDunicornObjects1Objects = Hashtable.newFrom({"unicorn": gdjs.gameCode.GDunicornObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDfloorObjects1Objects = Hashtable.newFrom({"floor": gdjs.gameCode.GDfloorObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDunicornObjects1Objects = Hashtable.newFrom({"unicorn": gdjs.gameCode.GDunicornObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDskObjects1Objects = Hashtable.newFrom({"sk": gdjs.gameCode.GDskObjects1});gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.gameCode.GDrestartObjects1});gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.gameCode.GDunicornObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDunicornObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


{
}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gameo"), gdjs.gameCode.GDgameoObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.gameCode.GDrestartObjects1);
{for(var i = 0, len = gdjs.gameCode.GDgameoObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDgameoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDrestartObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);
{for(var i = 0, len = gdjs.gameCode.GDunicornObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDunicornObjects1[i].addForce(130, 0, 0);
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);
{for(var i = 0, len = gdjs.gameCode.GDunicornObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDunicornObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.gameCode.GDunicornObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDunicornObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(200);
}
}{for(var i = 0, len = gdjs.gameCode.GDunicornObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDunicornObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("top"), gdjs.gameCode.GDtopObjects1);
gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDunicornObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDtopObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.gameCode.GDfloorObjects1);
{for(var i = 0, len = gdjs.gameCode.GDfloorObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfloorObjects1[i].activateBehavior("Platform", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "gameee.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.gameCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDunicornObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDbuttonObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.gameCode.GDfloorObjects1);
{for(var i = 0, len = gdjs.gameCode.GDfloorObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfloorObjects1[i].activateBehavior("Platform", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "gameee.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.gameCode.GDfloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDunicornObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDfloorObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDfloorObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDfloorObjects1[i].activateBehavior("Platform", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "gameee.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.gameCode.GDfloorObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDfloorObjects1.length;i<l;++i) {
    if ( !(gdjs.gameCode.GDfloorObjects1[i].behaviorActivated("Platform")) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDfloorObjects1[k] = gdjs.gameCode.GDfloorObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDfloorObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);
{for(var i = 0, len = gdjs.gameCode.GDunicornObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDunicornObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.gameCode.GDunicornObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDunicornObjects1[i].setAngle(70);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDunicornObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDunicornObjects1[i].hasNoForces() ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDunicornObjects1[k] = gdjs.gameCode.GDunicornObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDunicornObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gameo"), gdjs.gameCode.GDgameoObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.gameCode.GDrestartObjects1);
{for(var i = 0, len = gdjs.gameCode.GDgameoObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDgameoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDrestartObjects1[i].hide(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("sk"), gdjs.gameCode.GDskObjects1);
{for(var i = 0, len = gdjs.gameCode.GDskObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDskObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sk"), gdjs.gameCode.GDskObjects1);
gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDunicornObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDskObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDskObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDskObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDskObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ski.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.gameCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.gameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDscoreObjects1[i].setString("score :" + (gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.gameCode.GDrestartObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("wow"), gdjs.gameCode.GDwowObjects1);
{for(var i = 0, len = gdjs.gameCode.GDwowObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDwowObjects1[i].hide();
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 50;
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.gameCode.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("unicorn"), gdjs.gameCode.GDunicornObjects1);
gdjs.copyArray(runtimeScene.getObjects("wow"), gdjs.gameCode.GDwowObjects1);
{for(var i = 0, len = gdjs.gameCode.GDunicornObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDunicornObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDwowObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDwowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDrestartObjects1[i].hide(false);
}
}}

}


{


{
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDunicornObjects1.length = 0;
gdjs.gameCode.GDunicornObjects2.length = 0;
gdjs.gameCode.GDfloorObjects1.length = 0;
gdjs.gameCode.GDfloorObjects2.length = 0;
gdjs.gameCode.GDbgObjects1.length = 0;
gdjs.gameCode.GDbgObjects2.length = 0;
gdjs.gameCode.GDtopObjects1.length = 0;
gdjs.gameCode.GDtopObjects2.length = 0;
gdjs.gameCode.GDbuttonObjects1.length = 0;
gdjs.gameCode.GDbuttonObjects2.length = 0;
gdjs.gameCode.GDcObjects1.length = 0;
gdjs.gameCode.GDcObjects2.length = 0;
gdjs.gameCode.GDc2Objects1.length = 0;
gdjs.gameCode.GDc2Objects2.length = 0;
gdjs.gameCode.GDc3Objects1.length = 0;
gdjs.gameCode.GDc3Objects2.length = 0;
gdjs.gameCode.GDskObjects1.length = 0;
gdjs.gameCode.GDskObjects2.length = 0;
gdjs.gameCode.GDscoreObjects1.length = 0;
gdjs.gameCode.GDscoreObjects2.length = 0;
gdjs.gameCode.GDgameoObjects1.length = 0;
gdjs.gameCode.GDgameoObjects2.length = 0;
gdjs.gameCode.GDrestartObjects1.length = 0;
gdjs.gameCode.GDrestartObjects2.length = 0;
gdjs.gameCode.GDwowObjects1.length = 0;
gdjs.gameCode.GDwowObjects2.length = 0;

gdjs.gameCode.eventsList0(runtimeScene);
return;

}

gdjs['gameCode'] = gdjs.gameCode;

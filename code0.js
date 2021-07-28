gdjs.startCode = {};
gdjs.startCode.GDbgObjects1= [];
gdjs.startCode.GDbgObjects2= [];
gdjs.startCode.GDgameoverObjects1= [];
gdjs.startCode.GDgameoverObjects2= [];
gdjs.startCode.GDrestarObjects1= [];
gdjs.startCode.GDrestarObjects2= [];
gdjs.startCode.GDSummerTilePlatformCenterObjects1= [];
gdjs.startCode.GDSummerTilePlatformCenterObjects2= [];
gdjs.startCode.GDscoreObjects1= [];
gdjs.startCode.GDscoreObjects2= [];
gdjs.startCode.GDuniObjects1= [];
gdjs.startCode.GDuniObjects2= [];
gdjs.startCode.GDgetRObjects1= [];
gdjs.startCode.GDgetRObjects2= [];

gdjs.startCode.conditionTrue_0 = {val:false};
gdjs.startCode.condition0IsTrue_0 = {val:false};
gdjs.startCode.condition1IsTrue_0 = {val:false};
gdjs.startCode.condition2IsTrue_0 = {val:false};


gdjs.startCode.mapOfGDgdjs_46startCode_46GDgetRObjects1Objects = Hashtable.newFrom({"getR": gdjs.startCode.GDgetRObjects1});gdjs.startCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("getR"), gdjs.startCode.GDgetRObjects1);

gdjs.startCode.condition0IsTrue_0.val = false;
gdjs.startCode.condition1IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.startCode.condition0IsTrue_0.val ) {
{
gdjs.startCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.startCode.mapOfGDgdjs_46startCode_46GDgetRObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.startCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}{gdjs.evtTools.facebookInstantGames.showRewardedVideo(gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.showInterstitialAd(gdjs.VariablesContainer.badVariable);
}}

}


{


gdjs.startCode.condition0IsTrue_0.val = false;
{
gdjs.startCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.startCode.condition0IsTrue_0.val) {
{gdjs.evtTools.facebookInstantGames.loadRewardedVideo("507888106973251_508409820254413", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.loadInterstitialAd("507888106973251_508458880249507", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.loadInterstitialAd("507888106973251_507917130303682", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.loadRewardedVideo("507888106973251_508214800273915", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.loadInterstitialAd("507888106973251_507909230304472", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.loadRewardedVideo("507888106973251_508211476940914", gdjs.VariablesContainer.badVariable);
}}

}


{


{
}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDbgObjects1.length = 0;
gdjs.startCode.GDbgObjects2.length = 0;
gdjs.startCode.GDgameoverObjects1.length = 0;
gdjs.startCode.GDgameoverObjects2.length = 0;
gdjs.startCode.GDrestarObjects1.length = 0;
gdjs.startCode.GDrestarObjects2.length = 0;
gdjs.startCode.GDSummerTilePlatformCenterObjects1.length = 0;
gdjs.startCode.GDSummerTilePlatformCenterObjects2.length = 0;
gdjs.startCode.GDscoreObjects1.length = 0;
gdjs.startCode.GDscoreObjects2.length = 0;
gdjs.startCode.GDuniObjects1.length = 0;
gdjs.startCode.GDuniObjects2.length = 0;
gdjs.startCode.GDgetRObjects1.length = 0;
gdjs.startCode.GDgetRObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
return;

}

gdjs['startCode'] = gdjs.startCode;

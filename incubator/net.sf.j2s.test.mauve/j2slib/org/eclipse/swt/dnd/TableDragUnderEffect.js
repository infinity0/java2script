﻿$_L(["$wt.dnd.DragUnderEffect"],"$wt.dnd.TableDragUnderEffect",null,function(){
c$=$_C(function(){
this.table=null;
this.scrollIndex=0;
this.scrollBeginTime=0;
$_Z(this,arguments);
},$wt.dnd,"TableDragUnderEffect",$wt.dnd.DragUnderEffect);
$_K(c$,
function(table){
$_R(this,$wt.dnd.TableDragUnderEffect,[]);
this.table=table;
},"$wt.widgets.Table");
$_M(c$,"checkEffect",
($fz=function(effect){
if((effect&1)!=0)effect=effect&-5&-3;
if((effect&2)!=0)effect=effect&-5;
return effect;
},$fz.isPrivate=true,$fz),"~N");
$_V(c$,"show",
function(effect,x,y){
effect=this.checkEffect(effect);
},"~N,~N,~N");
$_S(c$,
"SCROLL_HYSTERESIS",150);
});

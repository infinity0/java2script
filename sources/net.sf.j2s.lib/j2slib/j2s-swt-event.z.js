/*=j2s=
#Java2Script Configuration
#Sun Jan 22 00:50:30 CST 2006
j2s.resources.list=j2s-swt-basic.z.js,org/eclipse/swt/widgets/Event.js,org/eclipse/swt/events/TypedEvent.js,org/eclipse/swt/events/ArmEvent.js,org/eclipse/swt/events/ControlEvent.js,org/eclipse/swt/events/DisposeEvent.js,org/eclipse/swt/events/FocusEvent.js,org/eclipse/swt/events/HelpEvent.js,org/eclipse/swt/events/KeyEvent.js,org/eclipse/swt/events/MenuEvent.js,org/eclipse/swt/events/ModifyEvent.js,org/eclipse/swt/events/MouseAdapter.js,org/eclipse/swt/events/MouseEvent.js,org/eclipse/swt/events/PaintEvent.js,org/eclipse/swt/events/SelectionEvent.js,org/eclipse/swt/events/ShellEvent.js,org/eclipse/swt/events/TraverseEvent.js,org/eclipse/swt/events/TreeEvent.js,org/eclipse/swt/events/VerifyEvent.js,org/eclipse/swt/widgets/Listener.js,org/eclipse/swt/widgets/TypedListener.js,org/eclipse/swt/events/ArmListener.js,org/eclipse/swt/events/ControlListener.js,org/eclipse/swt/events/ControlAdapter.js,org/eclipse/swt/events/DisposeListener.js,org/eclipse/swt/events/FocusListener.js,org/eclipse/swt/events/FocusAdapter.js,org/eclipse/swt/events/HelpListener.js,org/eclipse/swt/events/KeyListener.js,org/eclipse/swt/events/KeyAdapter.js,org/eclipse/swt/events/MenuListener.js,org/eclipse/swt/events/MenuAdapter.js,org/eclipse/swt/events/ModifyListener.js,org/eclipse/swt/events/MouseListener.js,org/eclipse/swt/events/MouseMoveListener.js,org/eclipse/swt/events/MouseTrackListener.js,org/eclipse/swt/events/MouseTrackAdapter.js,org/eclipse/swt/events/PaintListener.js,org/eclipse/swt/events/SelectionListener.js,org/eclipse/swt/events/SelectionAdapter.js,org/eclipse/swt/events/ShellListener.js,org/eclipse/swt/events/ShellAdapter.js,org/eclipse/swt/events/TraverseListener.js,org/eclipse/swt/events/TreeListener.js,org/eclipse/swt/events/TreeAdapter.js,org/eclipse/swt/events/VerifyListener.js,org/eclipse/swt/widgets/EventTable.js
=*/
c$=$_C(function(){
this.display=null;
this.widget=null;
this.type=0;
this.detail=0;
this.item=null;
this.gc=null;
this.x=0;
this.y=0;
this.width=0;
this.height=0;
this.count=0;
this.time=0;
this.button=0;
this.character=0;
this.keyCode=0;
this.stateMask=0;
this.start=0;
this.end=0;
this.text=null;
this.doit=true;
this.data=null;
$_Z(this,arguments);
},$wt.widgets,"Event");
$_M(c$,"getBounds",
function(){
return new $wt.graphics.Rectangle(this.x,this.y,this.width,this.height);
});
$_M(c$,"setBounds",
function(rect){
this.x=rect.x;
this.y=rect.y;
this.width=rect.width;
this.height=rect.height;
},"$wt.graphics.Rectangle");
$_V(c$,"toString",
function(){
return"Event {type="+this.type+",widget="+this.widget+",x="+this.x+",y="+this.y+",width="+this.width+",height="+this.height+"}";
});
$_M(c$,"releaseResource",
function(){
this.gc=null;
this.data=null;
this.item=null;
this.widget=null;
this.display=null;
});
c$=$_C(function(){
this.display=null;
this.widget=null;
this.time=0;
this.data=null;
$_Z(this,arguments);
},$wt.events,"TypedEvent",$wt.internal.SWTEventObject);
$_K(c$,
function(object){
$_R(this,$wt.events.TypedEvent,[object]);
},"~O");
$_K(c$,
function(e){
$_R(this,$wt.events.TypedEvent,[e.widget]);
this.display=e.display;
this.widget=e.widget;
this.time=e.time;
this.data=e.data;
},"$wt.widgets.Event");
$_M(c$,"getName",
function(){
var string=this.getClass().getName();
var index=string.lastIndexOf('.');
if(index==-1)return string;
return string.substring(index+1,string.length);
});
$_V(c$,"toString",
function(){
return this.getName()+"{"+this.widget+" time="+this.time+" data="+this.data+"}";
});
$_S(c$,
"serialVersionUID",3257285846578377524);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"ArmEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.ArmEvent,[e]);
},"$wt.widgets.Event");
$_S(c$,
"serialVersionUID",3258126964249212217);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"ControlEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.ControlEvent,[e]);
},"$wt.widgets.Event");
$_S(c$,
"serialVersionUID",3258132436155119161);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"DisposeEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.DisposeEvent,[e]);
},"$wt.widgets.Event");
$_S(c$,
"serialVersionUID",3257566187633521206);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"FocusEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.FocusEvent,[e]);
},"$wt.widgets.Event");
$_S(c$,
"serialVersionUID",3258134643684227381);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"HelpEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.HelpEvent,[e]);
},"$wt.widgets.Event");
$_S(c$,
"serialVersionUID",3257001038606251315);
c$=$_C(function(){
this.character=0;
this.keyCode=0;
this.stateMask=0;
this.doit=false;
$_Z(this,arguments);
},$wt.events,"KeyEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.KeyEvent,[e]);
this.character=e.character;
this.keyCode=e.keyCode;
this.stateMask=e.stateMask;
this.doit=e.doit;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.KeyEvent,"toString",[]);
return string.substring(0,string.length-1)+" character='"+(((this.character).charCodeAt(0)==0)?"\\0":""+this.character)+"'"+" keyCode="+this.keyCode+" stateMask="+this.stateMask+" doit="+this.doit+"}";
});
$_S(c$,
"serialVersionUID",3256442491011412789);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"MenuEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.MenuEvent,[e]);
},"$wt.widgets.Event");
$_S(c$,
"serialVersionUID",3258132440332383025);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"ModifyEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.ModifyEvent,[e]);
},"$wt.widgets.Event");
$_S(c$,
"serialVersionUID",3258129146227011891);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"MouseAdapter",null,$wt.events.MouseListener);
$_V(c$,"mouseDoubleClick",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseDown",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseUp",
function(e){
},"$wt.events.MouseEvent");
c$=$_C(function(){
this.button=0;
this.stateMask=0;
this.x=0;
this.y=0;
$_Z(this,arguments);
},$wt.events,"MouseEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.MouseEvent,[e]);
this.x=e.x;
this.y=e.y;
this.button=e.button;
this.stateMask=e.stateMask;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.MouseEvent,"toString",[]);
return string.substring(0,string.length-1)+" button="+this.button+" stateMask="+this.stateMask+" x="+this.x+" y="+this.y+"}";
});
$_S(c$,
"serialVersionUID",3257288037011566898);
c$=$_C(function(){
this.gc=null;
this.x=0;
this.y=0;
this.width=0;
this.height=0;
this.count=0;
$_Z(this,arguments);
},$wt.events,"PaintEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.PaintEvent,[e]);
this.gc=e.gc;
this.x=e.x;
this.y=e.y;
this.width=e.width;
this.height=e.height;
this.count=e.count;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.PaintEvent,"toString",[]);
return string.substring(0,string.length-1)+" gc="+this.gc+" x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+" count="+this.count+"}";
});
$_S(c$,
"serialVersionUID",3256446919205992497);
c$=$_C(function(){
this.item=null;
this.detail=0;
this.x=0;
this.y=0;
this.width=0;
this.height=0;
this.stateMask=0;
this.text=null;
this.doit=false;
$_Z(this,arguments);
},$wt.events,"SelectionEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.SelectionEvent,[e]);
this.item=e.item;
this.x=e.x;
this.y=e.y;
this.width=e.width;
this.height=e.height;
this.detail=e.detail;
this.stateMask=e.stateMask;
this.text=e.text;
this.doit=e.doit;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.SelectionEvent,"toString",[]);
return string.substring(0,string.length-1)+" item="+this.item+" detail="+this.detail+" x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+" stateMask="+this.stateMask+" text="+this.text+" doit="+this.doit+"}";
});
$_S(c$,
"serialVersionUID",3976735856884987953);
c$=$_C(function(){
this.doit=false;
$_Z(this,arguments);
},$wt.events,"ShellEvent",$wt.events.TypedEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.ShellEvent,[e]);
this.doit=e.doit;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.ShellEvent,"toString",[]);
return string.substring(0,string.length-1)+" doit="+this.doit+"}";
});
$_S(c$,
"serialVersionUID",3257569490479888441);
c$=$_C(function(){
this.detail=0;
$_Z(this,arguments);
},$wt.events,"TraverseEvent",$wt.events.KeyEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.TraverseEvent,[e]);
this.detail=e.detail;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.TraverseEvent,"toString",[]);
return string.substring(0,string.length-1)+" detail="+this.detail+"}";
});
$_S(c$,
"serialVersionUID",3257565105301239349);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"TreeEvent",$wt.events.SelectionEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.TreeEvent,[e]);
},"$wt.widgets.Event");
$_S(c$,
"serialVersionUID",3257282548009677109);
c$=$_C(function(){
this.start=0;
this.end=0;
this.text=null;
$_Z(this,arguments);
},$wt.events,"VerifyEvent",$wt.events.KeyEvent);
$_K(c$,
function(e){
$_R(this,$wt.events.VerifyEvent,[e]);
this.character=e.character;
this.keyCode=e.keyCode;
this.stateMask=e.stateMask;
this.start=e.start;
this.end=e.end;
this.text=e.text;
},"$wt.widgets.Event");
$_M(c$,"toString",
function(){
var string=$_U(this,$wt.events.VerifyEvent,"toString",[]);
return string.substring(0,string.length-1)+" start="+this.start+" end="+this.end+" text="+this.text+"}";
});
$_S(c$,
"serialVersionUID",3257003246269577014);
$_I($wt.widgets,"Listener");
c$=$_C(function(){
this.eventListener=null;
$_Z(this,arguments);
},$wt.widgets,"TypedListener",null,$wt.widgets.Listener);
$_K(c$,
function(listener){
this.eventListener=listener;
},"$wt.internal.SWTEventListener");
$_M(c$,"getEventListener",
function(){
return this.eventListener;
});
$_V(c$,"handleEvent",
function(e){
var eventListener=this.eventListener;
switch(e.type){
case 9:
{
var event=new $wt.events.PaintEvent(e);
(eventListener).paintControl(event);
e.gc=event.gc;
break;
}case 13:
{
var event=new $wt.events.SelectionEvent(e);
(eventListener).widgetSelected(event);
e.x=event.x;
e.y=event.y;
e.doit=event.doit;
break;
}case 14:
{
(eventListener).widgetDefaultSelected(new $wt.events.SelectionEvent(e));
break;
}case 12:
{
(eventListener).widgetDisposed(new $wt.events.DisposeEvent(e));
break;
}case 15:
{
(eventListener).focusGained(new $wt.events.FocusEvent(e));
break;
}case 16:
{
(eventListener).focusLost(new $wt.events.FocusEvent(e));
break;
}case 23:
{
(eventListener).menuHidden(new $wt.events.MenuEvent(e));
break;
}case 22:
{
(eventListener).menuShown(new $wt.events.MenuEvent(e));
break;
}case 1:
{
var event=new $wt.events.KeyEvent(e);
(eventListener).keyPressed(event);
e.doit=event.doit;
break;
}case 2:
{
var event=new $wt.events.KeyEvent(e);
(eventListener).keyReleased(event);
e.doit=event.doit;
break;
}case 3:
{
(eventListener).mouseDown(new $wt.events.MouseEvent(e));
break;
}case 4:
{
(eventListener).mouseUp(new $wt.events.MouseEvent(e));
break;
}case 8:
{
(eventListener).mouseDoubleClick(new $wt.events.MouseEvent(e));
break;
}case 5:
{
(eventListener).mouseMove(new $wt.events.MouseEvent(e));
return;
}case 11:
{
(eventListener).controlResized(new $wt.events.ControlEvent(e));
break;
}case 10:
{
(eventListener).controlMoved(new $wt.events.ControlEvent(e));
break;
}case 21:
{
var event=new $wt.events.ShellEvent(e);
(eventListener).shellClosed(event);
e.doit=event.doit;
break;
}case 26:
{
(eventListener).shellActivated(new $wt.events.ShellEvent(e));
break;
}case 27:
{
(eventListener).shellDeactivated(new $wt.events.ShellEvent(e));
break;
}case 19:
{
(eventListener).shellIconified(new $wt.events.ShellEvent(e));
break;
}case 20:
{
(eventListener).shellDeiconified(new $wt.events.ShellEvent(e));
break;
}case 17:
{
(eventListener).treeExpanded(new $wt.events.TreeEvent(e));
break;
}case 18:
{
(eventListener).treeCollapsed(new $wt.events.TreeEvent(e));
break;
}case 24:
{
(eventListener).modifyText(new $wt.events.ModifyEvent(e));
break;
}case 25:
{
var event=new $wt.events.VerifyEvent(e);
(eventListener).verifyText(event);
e.text=event.text;
e.doit=event.doit;
break;
}case 28:
{
(eventListener).helpRequested(new $wt.events.HelpEvent(e));
break;
}case 30:
{
(eventListener).widgetArmed(new $wt.events.ArmEvent(e));
break;
}case 7:
{
(eventListener).mouseExit(new $wt.events.MouseEvent(e));
break;
}case 6:
{
(eventListener).mouseEnter(new $wt.events.MouseEvent(e));
break;
}case 32:
{
(eventListener).mouseHover(new $wt.events.MouseEvent(e));
break;
}case 31:
{
var event=new $wt.events.TraverseEvent(e);
(eventListener).keyTraversed(event);
e.detail=event.detail;
e.doit=event.doit;
break;
}}
},"$wt.widgets.Event");
$_I($wt.events,"ArmListener",$wt.internal.SWTEventListener);
$_I($wt.events,"ControlListener",$wt.internal.SWTEventListener);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"ControlAdapter",null,$wt.events.ControlListener);
$_V(c$,"controlMoved",
function(e){
},"$wt.events.ControlEvent");
$_V(c$,"controlResized",
function(e){
},"$wt.events.ControlEvent");
$_I($wt.events,"DisposeListener",$wt.internal.SWTEventListener);
$_I($wt.events,"FocusListener",$wt.internal.SWTEventListener);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"FocusAdapter",null,$wt.events.FocusListener);
$_V(c$,"focusGained",
function(e){
},"$wt.events.FocusEvent");
$_V(c$,"focusLost",
function(e){
},"$wt.events.FocusEvent");
$_I($wt.events,"HelpListener",$wt.internal.SWTEventListener);
$_I($wt.events,"KeyListener",$wt.internal.SWTEventListener);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"KeyAdapter",null,$wt.events.KeyListener);
$_V(c$,"keyPressed",
function(e){
},"$wt.events.KeyEvent");
$_V(c$,"keyReleased",
function(e){
},"$wt.events.KeyEvent");
$_I($wt.events,"MenuListener",$wt.internal.SWTEventListener);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"MenuAdapter",null,$wt.events.MenuListener);
$_V(c$,"menuHidden",
function(e){
},"$wt.events.MenuEvent");
$_V(c$,"menuShown",
function(e){
},"$wt.events.MenuEvent");
$_I($wt.events,"ModifyListener",$wt.internal.SWTEventListener);
$_I($wt.events,"MouseListener",$wt.internal.SWTEventListener);
$_I($wt.events,"MouseMoveListener",$wt.internal.SWTEventListener);
$_I($wt.events,"MouseTrackListener",$wt.internal.SWTEventListener);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"MouseTrackAdapter",null,$wt.events.MouseTrackListener);
$_V(c$,"mouseEnter",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseExit",
function(e){
},"$wt.events.MouseEvent");
$_V(c$,"mouseHover",
function(e){
},"$wt.events.MouseEvent");
$_I($wt.events,"PaintListener",$wt.internal.SWTEventListener);
$_I($wt.events,"SelectionListener",$wt.internal.SWTEventListener);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"SelectionAdapter",null,$wt.events.SelectionListener);
$_V(c$,"widgetSelected",
function(e){
},"$wt.events.SelectionEvent");
$_V(c$,"widgetDefaultSelected",
function(e){
},"$wt.events.SelectionEvent");
$_I($wt.events,"ShellListener",$wt.internal.SWTEventListener);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"ShellAdapter",null,$wt.events.ShellListener);
$_V(c$,"shellActivated",
function(e){
},"$wt.events.ShellEvent");
$_V(c$,"shellClosed",
function(e){
},"$wt.events.ShellEvent");
$_V(c$,"shellDeactivated",
function(e){
},"$wt.events.ShellEvent");
$_V(c$,"shellDeiconified",
function(e){
},"$wt.events.ShellEvent");
$_V(c$,"shellIconified",
function(e){
},"$wt.events.ShellEvent");
$_I($wt.events,"TraverseListener",$wt.internal.SWTEventListener);
$_I($wt.events,"TreeListener",$wt.internal.SWTEventListener);
c$=$_C(function(){
$_Z(this,arguments);
},$wt.events,"TreeAdapter",null,$wt.events.TreeListener);
$_V(c$,"treeCollapsed",
function(e){
},"$wt.events.TreeEvent");
$_V(c$,"treeExpanded",
function(e){
},"$wt.events.TreeEvent");
$_I($wt.events,"VerifyListener",$wt.internal.SWTEventListener);
c$=$_C(function(){
this.types=null;
this.listeners=null;
this.level=0;
$_Z(this,arguments);
},$wt.widgets,"EventTable");
$_M(c$,"hook",
function(eventType,listener){
if(this.types==null)this.types=$_A(4,0);
if(this.listeners==null)this.listeners=new Array(4);
var length=this.types.length;
var index=length-1;
while(index>=0){
if(this.types[index]!=0)break;
--index;
}
index++;
if(index==length){
var newTypes=$_A(length+4,0);
System.arraycopy(this.types,0,newTypes,0,length);
this.types=newTypes;
var newListeners=new Array(length+4);
System.arraycopy(this.listeners,0,newListeners,0,length);
this.listeners=newListeners;
}this.types[index]=eventType;
this.listeners[index]=listener;
},"~N,$wt.widgets.Listener");
$_M(c$,"hooks",
function(eventType){
if(this.types==null)return false;
for(var i=0;i<this.types.length;i++){
if(this.types[i]==eventType)return true;
}
return false;
},"~N");
$_M(c$,"sendEvent",
function(event){
if(this.types==null)return;
this.level+=this.level>=0?1:-1;
try{
for(var i=0;i<this.types.length;i++){
if(event.type==0)return;
if(this.types[i]==event.type){
var listener=this.listeners[i];
if(listener!=null)listener.handleEvent(event);
}}
}finally{
var compact=this.level<0;
this.level-=this.level>=0?1:-1;
if(compact&&this.level==0){
var index=0;
for(var i=0;i<this.types.length;i++){
if(this.types[i]!=0){
this.types[index]=this.types[i];
this.listeners[index]=this.listeners[i];
index++;
}}
for(var i=index;i<this.types.length;i++){
this.types[i]=0;
this.listeners[i]=null;
}
}}
},"$wt.widgets.Event");
$_M(c$,"size",
function(){
if(this.types==null)return 0;
var count=0;
for(var i=0;i<this.types.length;i++){
if(this.types[i]!=0)count++;
}
return count;
});
$_M(c$,"remove",
function(index){
if(this.level==0){
var end=this.types.length-1;
System.arraycopy(this.types,index+1,this.types,index,end-index);
System.arraycopy(this.listeners,index+1,this.listeners,index,end-index);
index=end;
}else{
if(this.level>0)this.level=-this.level;
}this.types[index]=0;
this.listeners[index]=null;
},"~N");
$_M(c$,"unhook",
function(eventType,listener){
if(this.types==null)return;
for(var i=0;i<this.types.length;i++){
if(this.types[i]==eventType&&this.listeners[i]==listener){
this.remove(i);
return;
}}
},"~N,$wt.widgets.Listener");
$_M(c$,"unhook",
function(eventType,listener){
if(this.types==null)return;
for(var i=0;i<this.types.length;i++){
if(this.types[i]==eventType){
if($_O(this.listeners[i],$wt.widgets.TypedListener)){
var typedListener=this.listeners[i];
if(typedListener.getEventListener()==listener){
this.remove(i);
return;
}}}}
},"~N,$wt.internal.SWTEventListener");
$_M(c$,"releaseResource",
function(){
if(this.listeners!=null){
for(var i=0;i<this.listeners.length;i++){
this.listeners[i]=null;
}
this.listeners=null;
}});
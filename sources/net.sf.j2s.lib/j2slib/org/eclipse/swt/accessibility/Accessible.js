Clazz.load(["java.util.Vector"],"$wt.accessibility.Accessible",["$wt.SWT"],function(){
c$=$_C(function(){
this.accessibleListeners=null;
this.accessibleControlListeners=null;
this.textListeners=null;
this.control=null;
$_Z(this,arguments);
},$wt.accessibility,"Accessible");
$_Y(c$,function(){
this.accessibleListeners=new java.util.Vector();
this.accessibleControlListeners=new java.util.Vector();
this.textListeners=new java.util.Vector();
});
$_M(c$,"addAccessibleListener",
function(listener){
this.accessibleListeners.addElement(listener);
},"$wt.accessibility.AccessibleListener");
$_M(c$,"addAccessibleControlListener",
function(listener){
this.accessibleControlListeners.addElement(listener);
},"$wt.accessibility.AccessibleControlListener");
$_M(c$,"addAccessibleTextListener",
function(listener){
this.textListeners.addElement(listener);
},"$wt.accessibility.AccessibleTextListener");
$_M(c$,"getControl",
function(){
return this.control;
});
$_M(c$,"removeAccessibleListener",
function(listener){
this.accessibleListeners.removeElement(listener);
},"$wt.accessibility.AccessibleListener");
$_M(c$,"removeAccessibleControlListener",
function(listener){
this.accessibleControlListeners.removeElement(listener);
},"$wt.accessibility.AccessibleControlListener");
$_M(c$,"removeAccessibleTextListener",
function(listener){
this.textListeners.removeElement(listener);
},"$wt.accessibility.AccessibleTextListener");
$_M(c$,"selectionChanged",
function(){
});
$_M(c$,"setFocus",
function(childID){
},"~N");
$_M(c$,"textCaretMoved",
function(index){
},"~N");
$_M(c$,"textChanged",
function(type,startIndex,length){
},"~N,~N,~N");
$_M(c$,"textSelectionChanged",
function(){
});
});
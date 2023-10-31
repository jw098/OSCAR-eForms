<!--  Drawing code: part 2 -->

var cnv = document.getElementById("myCanvas"); 
var jg = new jsGraphics(cnv);
var cnvLeft = parseInt(document.getElementById('myCanvas').style.left); 
var cnvTop = parseInt(document.getElementById('myCanvas').style.top);

var pvcnv = document.getElementById("preview");
var pv = new jsGraphics(pvcnv);

var SubmitData = new Array();
var DrawData  = new Array();
var TempData = new Array();

jg.setPrintable(true);
var StrokeColor = "black";
var StrokeThickness = 3;
var x0 = 0;
var y0 = 0;
var txt = "";

function SetStrokeColor(c){
	StrokeColor = c;
}

var FontSize = "12px";
function SetFontSize(n){
	FontSize = n;
}

var MouseDown = false;
function SetMouseDown(){
	MouseDown = true;
}
function SetMouseUp(){
	MouseDown = false;
}

var DrawSwitch = false;
function SetDrawOn(){
	DrawSwitch = true;
}
function SetDrawOff(){
	DrawSwitch  = false;
}

function SetThickness(x){
	StrokeThickness = parseInt(x);
}

var TextSwitch = false;
var FreehandSwitch = false;

function SetSwitchesOff(){
	TextSwitch = false;
	FreehandSwitch = false;
}

var DrawTool = "Freehand";
function SetSwitchOn(n){	
	SetSwitchesOff();
	DrawTool = n;
	if(n=="Text"){
		TextSwitch = true;
	}else if(n=="Freehand"){
		FreehandSwitch=true;
	}
}

function SetStart(){
	x0 = mousex - cnvLeft;
	y0 = mousey - cnvTop;
	if(FreehandSwitch){
		Xposition.push(x0);
		Yposition.push(y0);
	}
}

function GetTxt(){
	txt = prompt("Enter Text Here:","");
}

function DrawText(canvas,x,y,txt,StrokeColor,FontSize){
	//draws a sting of text
	canvas.setColor(StrokeColor);
	canvas.setStroke(StrokeThickness);
	var FontFamily = "arial";		//sets font
	var FontStyle = Font.PLAIN;		//Font.PLAIN, Font.BOLD, Font.ITALIC, Font.ITALIC_BOLD
	canvas.setFont(FontFamily,FontSize,FontStyle);

	var x1 = x;
	var y1 = y - 10;

	if ((txt != null) && (txt != "")){
		canvas.drawString(txt, x1, y1);
		canvas.paint();

		//store parameters in an array 
		if(canvas == jg){
			var Parameter = "Text" + "_" +  x + "_" + y + "_" + txt + "_" +  StrokeColor + "_" + FontSize;
			DrawData.push(Parameter);
			document.getElementById("DrawData").value = DrawData;
		}
	}
}
var Xposition = new Array();
var Yposition = new Array();

function GetXY(x,y){
var s = StrokeThickness;
var l = Xposition.length - 1;	//l = last position
	if ( (Math.abs(Xposition[l] - x) > s) ||  (Math.abs(Yposition[l] - y) > s)){
		Xposition.push(x);
		Yposition.push(y);

	}
}

function ClearXY(){
	Xposition = new Array();
	Yposition = new Array();
}

function ArrToStr(Arr,s){
	//convert array values to string
	var Str = "";
	for (n = 0; (n < Arr.length); n++)
	 {
		if (n > 0) 
		{
			Str += s; // each set of data separated by s
		}
		Str += Arr[n]; 
	}
 	return Str;
}

function StrToArr(Str,s){
	//converts string to an array
	var Arr  = Str.split(s);
	for (n=0;n<Arr.length;n++){
		Arr[n] = parseInt(Arr[n]);
	}
	return Arr;
}

function DrawFreehand(canvas,X,Y,StrokeColor){
	if (canvas == pv){
		jg.setColor(StrokeColor);
		jg.setStroke(StrokeThickness);
		if(X.length<2){
			var x = X[0];
			var y = Y[0];
			jg.drawLine(x,y,x,y);
			jg.paint();
		}
		else if (X.length>1){
			var a = X.length - 2;
			var b = a + 1;
			var x1 = parseInt(X[a]);
			var y1 = parseInt(Y[a]);
			var x2 = parseInt(X[b]);
			var y2 = parseInt(Y[b]);
			jg.drawLine(x1,y1,x2,y2);
			jg.paint();
		}
	}
	if (canvas == jg){
		canvas.setColor(StrokeColor);
		canvas.setStroke(StrokeThickness);
		if(X.length<2){
			var x = X[0];
			var y = Y[0];
			canvas.drawLine(x,y,x,y);
			canvas.paint();
		}
		if(X.length > 1){
			canvas.drawPolyline(X,Y);
			canvas.paint();
		}

		//store parameters in an array
		var StrX = ArrToStr(X, ':');
		var StrY = ArrToStr(Y, ':');

		var Parameter = "Freehand" + "_" +  StrX + "_" + StrY + "_" + StrokeColor;
		DrawData.push(Parameter);
		document.getElementById("DrawData").value = DrawData;
	}
}

function DrawMarker(){
	if(DrawSwitch){
		var x = parseInt(mousex - cnvLeft);	
		var y = parseInt(mousey - cnvTop);
		if(TextSwitch){
			DrawText(jg,x,y,txt,StrokeColor,FontSize);
		}
		else if(FreehandSwitch){
			DrawFreehand(jg,Xposition,Yposition,StrokeColor);
			ClearXY();
		}
	}
}
		
function DrawPreview(){
	pv.clear();
	var x = parseInt(mousex-cnvLeft);
	var y = parseInt(mousey-cnvTop);
	if (MouseDown){
		if(TextSwitch){
			DrawText(pv,x,y,txt,StrokeColor,FontSize);
		}
		else if(FreehandSwitch){
			GetXY(x,y);
			DrawFreehand(pv,Xposition,Yposition,StrokeColor);
		}
	}

}

function RedrawImage(RedrawParameter){
		var DrawingType = RedrawParameter[0];
		if(DrawingType == "Text"){
			var x = parseInt(RedrawParameter[1]);
			var y = parseInt(RedrawParameter[2]);
			var txt = RedrawParameter[3];
			StrokeColor = RedrawParameter[4];
			FontSize = RedrawParameter[5];
			DrawText(jg,x,y,txt,StrokeColor,FontSize);
		}
		else if(DrawingType == "Freehand"){
			var X = StrToArr(RedrawParameter[1], ':');
			var Y = StrToArr(RedrawParameter[2], ':');
			StrokeColor = RedrawParameter[3];
			DrawFreehand(jg,X,Y,StrokeColor);
		}
}

function Undo(){
	jg.clear();
	TempData = DrawData;
	DrawData = new Array();
	document.getElementById("DrawData").value = "";

	for (i=0; (i < (TempData.length - 1) ); i++){
		var Parameters = TempData[i].split("_");
		RedrawImage(Parameters);
	}
}

function RecallImage(){
	for (i=0; (i < TempData.length);i++){
		var Parameters = new Array();
		Parameters =  TempData[i].split("_");
		RedrawImage(Parameters);
	}
}

function Clear(){
	jg.clear();
	TempData = new Array();
	DrawData = new Array();
	SubmitData = new Array();
	document.getElementById("TempData").value = "";
	document.getElementById("DrawData").value = "";
	document.getElementById("SubmitData").value = "";
	Xposition = new Array();
	Yposition = new Array();
}

function ClearExceptSubmit(){
	jg.clear();
	TempData = new Array();
	DrawData = new Array();
	document.getElementById("TempData").value = "";
	document.getElementById("DrawData").value = "";
	Xposition = new Array();
	Yposition = new Array();
}

function SubmitImage(){
	EncodeData();
}

function EncodeData(){
	var packed = "";  // Initialize packed or we get the word 'undefined'
	//Converting image data in array into a string
	for (i = 0; (i < DrawData.length); i++)
	 {
		if (i > 0) 
		{
			packed += ","; // each set of data separated by comma
		}
		packed += escape(DrawData[i]); 	//'escape' encodes dataset into unicode
	}
	document.getElementById("SubmitData").value = packed;  //stores image data into hidden form field
}

function DecodeData(){
	var query = document.getElementById("SubmitData").value;
	var data = query.split(',');
	for (i = 0; (i < data.length); i++)
	{
		data[i] = unescape(data[i]);
	}
	TempData = data;
	DrawData = new Array();
	document.getElementById("DrawData").value = document.getElementById("SubmitData").value;
	document.getElementById("SubmitData").value = "";
}

function ReloadImage(){
	DecodeData();
	RecallImage();
}

<!-- Drawing Code: End -->
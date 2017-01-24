
function drawCurve(curveId, x0,y0, x1,y1, x2,y2){
 var c;	
c = document.getElementById(curveId).getContext("2d");
c.beginPath();
c.moveTo(x0, y0);
c.quadraticCurveTo(x1, y1, x2, y2);
c.strokeStyle = "rgba(241, 241, 241, 0.4)";
c.lineWidth = 2;
c.stroke();	  
};

setTimeout(function(){
drawCurve("curve1-mob",10,7,40,5,40,5);
drawCurve("curve2-mob",15,5,20,5,25,5);
drawCurve("curve3-mob",35,5,40,5,45,5);
drawCurve("curve4-mob",20,5,50,5,110,15); }, 200);



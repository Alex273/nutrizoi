
function drawCurve(curveId, x0,y0, x1,y1, x2,y2){
 var c;	
c = document.getElementById(curveId).getContext("2d");
c.beginPath();
c.moveTo(x0, y0);
c.quadraticCurveTo(x1, y1, x2, y2);
c.strokeStyle = "rgba(241, 241, 241, 0.4)";
c.lineWidth = 1;
c.stroke();	  
};

setTimeout(function(){
drawCurve("curve1",40,40,250,110,500,50);
drawCurve("curve2",70,15,120,5,160,0);
drawCurve("curve3",40,0,110,5,150,15);
drawCurve("curve4",20,35,250,90,440,60); }, 200);


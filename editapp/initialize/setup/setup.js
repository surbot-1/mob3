<!DOCTYPE html>
<html lang=”en”>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>editApp</title>
</head>
  
<body style="margin:0px; padding:0px"> 
  
<script src="function/keypad.js"></script> 
<script src="database/asctochar.js"></script>
<script src="database/chatbot2.js"></script>
<script src="ubuntufont.js"></script>
<script src="ubuntubold.js"></script> 
<script src="inconsolafont.js"></script>
<script src="font1632.js"></script>
<script src="font2448.js"></script>
<script src="font3264.js"></script>
<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
	
<script>
	
var elem = document.createElement('div');
elem.setAttribute("id", "divCanv");
// elem.setAttribute("border", "solid black 1px");
// elem.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000';
document.body.appendChild(elem);

var canvs = document.createElement("canvas");
canvs.setAttribute("id", "canvas");
canvs.setAttribute("width", "1080");
canvs.setAttribute("height", "2176");  // 2400-112-112=2176
// canv.setAttribute("border", "solid black 1px");
document.getElementById("divCanv").appendChild(canvs); 
	
</script> 
	
</body> 
</html> 




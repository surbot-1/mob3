function saybot() { 
	
var msgbot=[[[""],
	     ["Have a nice day. Thank you"]],
	    [["Hi"],
	     ["Hi"]],
	    [["Hello"],
	     ["Hello"]],
	    [["Bye"],
	     ["Bye Bye"]],
	    [["How are you?"], // ?
	     ["I am fine. you?"]],
	    [["I am fine"],
	     ["Good"]],
	    [["Good"],
	     ["Thank you"]],
	    [["Thank you"],
	     ["Welcome"]],
	    [["What are you doing?"], // ? 
	     ["Enjoying the real world. How beautiful this is!"]],
	    [["Good morning"],
	     ["Good morning"]],
	    [["Good evening"],
	     ["Good evening"]],
	    [["What is your name?"], // ? 
	     ["My name is sAy"]],
	    [["Tell me yourself"],
	     ["I am sAy. I am a chatbot integrated with AI and ML."]],
	    [["What is your favorite color?"], // ? 
	     ["My favorite color is blue"]],
	    [["What is your age?"], // ? 
	     ["I am a software. I have been created when you installed the sAy app."]],
	    [[""],
	     [""]],
	    [[""],
	     [""]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]],
	    [[],[]]]; 
	
	var mcnt=15; 
	
	var nbot=""; // = new Uint8Array(512); 
	var cbot="";
	var mbot=""; // = new Uint8Array(512);
	var rbot=""; // = new Uint8Array(512);
	var length=0;
	var ptr = msgCntPtr-512*1; 
	var minfo = msgCntArr[ptr+510];
	var msize = msgCntArr[ptr+511]; 
	var b=false;
	
	for(let i=0; i<msize; i++) { 
		var charc=msgCntArr[ptr+i]; 
		nbot += ascChar(charc); 
		length++;
	} alert((nbot.length)); 
	ptr = ptr+512*1; 
	
	for(let i=0; i<(nbot.length); i++) { 
		var charc=nbot.charCodeAt(i);
		if(i==0) { 
			if(charc>=65 && charc<=90){
			} else if(charc>=97 && charc<=112) {charc-=32;} 
		} else { 
			if (charc>=65 && charc<=90){ charc+=32;
			} else if(charc>=97 && charc<=112) { } 
		} 
		cbot += ascChar(charc); 
	} alert(cbot);
	
	if(cbot.charCodeAt((cbot.length)-1)==(" ".charCodeAt(0))) {  
		cbot = cbot.slice(0, (cbot.length)-1); 
		mbot=cbot; 
	} else {mbot=cbot;} alert(mbot);
	
	
	for(let i=0; i<mcnt; i++) { 
		for(let j=0; j<1; j++) { 
			if(mbot==msgbot[i][0]) { 
			rbot=msgbot[i][1]; b=true; break; 
			}
		} 
		if(b) {break;}
	} 
	if(!b) {rbot=msgbot[0][1];} 
	for(let i=0; i<rbot.length; i++) {  
		msgCntArr[ptr+i]=rbot.charCodeAt(i); 
	} 
	msgCntArr[ptr+510]=0x01;
	msgCntArr[ptr+511]=rbot.length; 
	saybotrpl=true;
}

	
	
	
	
	
	
	
	

function chatbot() { 

var msgbot=[[[""],
	     ["Have a nice day\nThank you"]],
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
	
	

	var nbot = document.getElementById("inField").value; 
	var mbot; 
	var rbot; 
	var b=false;
	
	if (nbot.charCodeAt((nbot.length)-1)==(" ".charCodeAt(0))) { 
		mbot = nbot.slice(0, (nbot.length)-1); 
		// document.getElementById("div1").innerHTML += "<br>" + nbot +" "+ mbot; 
	} else {mbot=nbot;}
	
	for(let i=0; i<mcnt; i++) { 
		for(let j=0; j<1; j++) { 
			/*
			if (mbot.charCoadAt((mbot[i][0].length)-1)==63) {
				for(let k=0; k<(msgbot[i][0].length)-2; k++) { 
					var tmbot+=msgbot[i][0].charCoadAt(k); 
				} 
			} */
			
			if(mbot==msgbot[i][0]) { 
			rbot=msgbot[i][1]; b=true; break; 
			}
		} 
		if(b) {break;}
	} 
	if(!b) {rbot=msgbot[0][1];}
	document.getElementById("div1").innerHTML += "<br>" + rbot; 
}

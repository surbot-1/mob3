function drawKeypad(x, y) {
  // var x=0; var y=0; 
  // var w=80*10; var h=80*4; 
  var kc=10; var kr=4; 
  var kx=0; var ky=0; 
  var kl=8; var kt=8; 
  var kw=64; var kh=64; 
  
  var cvs = document.getElementById("canvas"); 
  var ctx = cvs.getContext('2d'); 
  var imgData = ctx.createImageData(kw, kh); 
  
  var imgBuf = new ArrayBuffer(kw*4*kh*kr*kc); 
  var imgView = new Uint8Array(imgBuf); 
  
  for (let i=0; i<kw*4*kh*kr*kc; i+=4) { 
    imgViwe[i+0] = 0xFF; 
    imgViwe[i+1] = 0x00; 
    imgViwe[i+2] = 0x00; 
    imgViwe[i+3] = 0xFF; 
  }
  
  cord(); 
  draw();
  
  function cord() { 
  for (let j=0; j<kr; j++) { 
    for (let i=0; i<kc; i++) { 
      if (i==0 && j==0) {} 
      if (i==1 && j==0) {} 
      if (i==2 && j==0) {} 
      if (i==3 && j==0) {} 
      kx=(kw+2*kl)*i; ky=(kh+2*kt)*j;
      draw(kx, ky, kw, kh, kl, kt); 
    } 
  }  
  }
  
  function draw(kx, ky. kw, kh, kl, kt) { 
      for (let i=0; i<kw*4*kh; i++) { 
        imgData.data[i] = imgView[kx*ky+i]; 
      } 
    ctx.putImageData(imgData,x+kx+kl, y+ky+kt);
  } 
  
}

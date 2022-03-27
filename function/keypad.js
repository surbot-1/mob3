function drawKeypad(x, y) {
  // var x=0; var y=0; 
  // var w=80*10; var h=80*4; 
  var kcl=10; var krw=4; 
  var kc=0; var kr=0; 
  var kl=8; var kt=8; 
  var kw=64; var kh=64; 
  
  var cvs = document.getElementById("canvas"); 
  var ctx = cvs.getContext('2d'); 
  var imgData = ctx.createImageData(kw, kh); 
  
  var imgBuf = new ArrayBuffer(kw*4*kh*krw*kcl); 
  var imgView = new Uint8Array(imgBuf); 
  
  for (let i=0; i<kw*4*kh*krw*kcl; i+=4) { 
    imgViwe[i+0] = 0xFF; 
    imgViwe[i+1] = 0x00; 
    imgViwe[i+2] = 0x00; 
    imgViwe[i+3] = 0xFF; 
  } 
  
  function draw(kc, kr. kw, kh, kl, kt) { 
      for (let i=0; i<kw*4*kh; i++) { 
        var kx=x+(kw+kl*2)*kc; 
        var ky=y+(kh+kt*2)*kr; 
        imgData.data[i] = imgView[(kcl*kw)*kr+kc+i]; 
      } 
    ctx.putImageData(imgData,kx, ky);
  } 
  
  for (let j=0; j<krw; j++) { 
    for (let i=0; i<kcl; i++) { 
      if (i==0 && j==0) {} 
      if (i==1 && j==0) {} 
      if (i==2 && j==0) {} 
      if (i==3 && j==0) {} 
      kc=i; kr=j;
      draw(kc, kr, kw, kh, kl, kt); 
    } 
  }  
  
}

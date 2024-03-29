
    var canvas = document.getElementById("ephemeralClock");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.70;
    drawClock();

    setInterval(drawClock, 1000);

    function drawClock() {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
    }

    function drawFace(ctx, radius) {
      var grad;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2*Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      grad = ctx.createRadialGradient(0,0,radius*0.75, 0,0,radius*1.08);
      grad.addColorStop(0, 'grey');
      grad.addColorStop(0.95, 'white');
      grad.addColorStop(1, 'grey');
      ctx.strokeStyle = grad;
      ctx.lineWidth = radius*.09;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius*0.03, 0, 2 * Math.PI);
      ctx.fillStyle = 'grey';
      ctx.fill();
    }

    function drawNumbers(ctx, radius) {
      var ang;
      var num;

      ctx.font = radius*0.15 + '35px Courier New' ;

      ctx.textBaseline="left";
      ctx.textAlign="center";
      for(num = 6; num < 18; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
      }
    }

    function drawTime(ctx, radius){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour=hour%12;
        hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60));
        drawHand(ctx, hour, radius*0.5, radius*0.07);
        //minute
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
        drawHand(ctx, minute, radius*0.8, radius*0.07);
        // second
        second=(second*Math.PI/30);
        drawHand(ctx, second, radius*0.9, radius*0.02);
    }

    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = 1.8;
        ctx.lineCap = "square";
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }

    window.addEventListener("click", () => {
                console.log("Woah! You found me?");
                console.log("Did you know there's a clock in here?");
    });


var xHeight = 10;
var maxHeight = 400;

document.getElementById("resize").addEventListener("mouseenter", function (event) {
    event.preventDefault();
    console.log(xHeight);
    requestID = requestAnimationFrame(animate);
    
}
);

function animate() {
    requestID = requestAnimationFrame(animate);
 
    if (xHeight <= 400) {
       
        document.getElementById("resize").style.height = xHeight + 'px';
        xHeight = xHeight + 2;
        console.log(xHeight);
    }
    else {
        cancelAnimationFrame(requestID);
    }
    
}

document.getElementById("resize").addEventListener("click", function (event) {
    event.preventDefault();
    console.log(maxHeight);
    requestID = requestAnimationFrame(animateClick);
    xHeight = 10;
}
);

function animateClick() {
    requestID = requestAnimationFrame(animateClick);

    if (maxHeight >= 8) {
        document.getElementById("resize").style.height = maxHeight + 'px';
        maxHeight = maxHeight - 2;
        console.log(maxHeight);
    }
    else {
        cancelAnimationFrame(requestID);
    }

}


    

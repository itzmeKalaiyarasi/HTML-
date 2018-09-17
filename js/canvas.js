var canvas=document.getElementById("canvasId")
var context = canvas.getContext("2d")

//drawing the canvas
context.moveTo(0,0)
context.lineTo(200,500)
context.stroke()
context.strokeRect(50,42,50,30)
context.fillStyle = "#FF0000";
context.fillRect(50,42,50,30)

context.moveTo(30,40)
context.lineTo(200,100)
context.lineTo(250,200)
context.fill()

context.fillText("Gopi",200,100)

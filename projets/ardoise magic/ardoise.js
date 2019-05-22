"use strict";
window.onload = function(){
	
    var btnClear;
    var btnSave;
    var  inputColor;
    var inputSize;
    var ctx;
    var canvasWidth = 1000;
    var canvasHeight = 600;
    var isDrawing = false;
    var lineWidth = 3;
    initialize();

function initialize() {
	var canvasArea = document.createElement('canvas');
    canvasArea.width = canvasWidth;
    canvasArea.height = canvasHeight;
    canvasArea.style.border = "10px solid #FF5500FF";
    canvasArea.style.backgroundColor = 'white';
    document.body.appendChild(canvasArea);
    ctx = canvasArea.getContext("2d");
    btnClear = document.querySelector("#clear");
    btnSave = document.querySelector("#save");
    $('.pen-color').click(function(){
    	getColor(this);
    })
    $('#gomme').click(function(){
    	getColor(this);
    })
    inputColor = document.querySelector("#color");
    inputSize = document.querySelector("#size");
    window.onmouseup = function () {
        isDrawing = false;
        ctx.beginPath();
    }

    canvasArea.onmousedown = function (e) {
        isDrawing = true;
    }

    canvasArea.onmousemove = function (e) {
        if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.lineWidth = lineWidth * 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, lineWidth, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    }

    btnClear.onclick = function () {
        ctx.clearRect(0, 0, canvasArea.width, canvasArea.height);
    }

    btnSave.onclick = function () {
        	canvasArea.toBlob(function (blob) {
            var link = document.createElement("a");
            link.download = "imagehouss.png";
            link.href = URL.createObjectURL(blob);
            link.dispatchEvent(new MouseEvent('click'));
        }, 'image/png', 1);
    }
    inputColor.onchange = function () {
        ctx.fillStyle = this.value;
        ctx.strokeStyle = this.value;
    }


  function getColor(elm){
  		ctx.fillStyle = $(elm).data('color');
        ctx.strokeStyle = $(elm).data('color');
  }

    inputSize.onchange = function () {
        lineWidth = this.value;
    }
}

}
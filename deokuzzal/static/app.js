class CanvasHelper {
  constructor() {
    this.canvas = $("#cvs-zzal")[0];
    this.target = new Image();
  }

  static drawText(ctx, text, x, y) {
    ctx.shadowColor = "transparent";
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, y);
  }

  drawTextToCanvas(text) {
    const ctx = this.canvas.getContext("2d");
    ctx.shadowColor = "transparent";
    ctx.drawImage(this.target, 0, 0);
    ctx.font = "42pt 'Nanum Gothic'";
    ctx.textAlign = "center";
    CanvasHelper.drawText(ctx, text, 350, 395);
    ctx.textAlign = "start";
  }

  initCanvas() {
    const canvas = this.canvas;
    const target = this.target;
    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 17;
    ctx.textBaseline = 'alphabetic';
    ctx.scale(1, 1);
    this.target.onload = function () {
      let s = Math.max(canvas.width / target.width, canvas.height / target.height);
      ctx.scale(s, s);
      ctx.drawImage(target, 0, 0);
      $('.input-txt').keyup();
    };
    this.target.src = "static/IMG_3437.jpg";
  }
}

let helper = new CanvasHelper();
$('#btnDownload').click(function () {
  const href = $("#cvs-zzal")[0].toDataURL();
  this.href = href;
  this.download = "gvsc.png";
});

$('.input-txt').keyup(function (e) {
  helper.drawTextToCanvas($(this).val());
});

window.onload = function () {
  helper.initCanvas();
}

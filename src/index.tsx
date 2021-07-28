import './index.css';

const canvas = document.getElementById("canvas");

if (!canvas) {
  console.log('uh oh.... no canvas! this is a canvvas hackathon how do we do somethign w/o a canvas?!?!?!fawnsjfha sfka');
}

// @ts-ignore
const ctx = canvas.getContext("2d");
ctx.font = "34px serif";
ctx.textAlign = "center";
ctx.textBaseline="middle";
ctx.fillStyle = "#FFF";
ctx.fillText("Hello World",150,50);

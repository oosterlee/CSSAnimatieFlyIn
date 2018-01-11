/*jshint esversion: 6 */
function generateBlocks(amount, ...colors) {
	var blocks = document.querySelectorAll('.block');
	var lengthOfBlocks = blocks.length;
	for (var i = 0; i < amount; i++) {
		var block = new Block(colors[i], 250);
		document.body.appendChild(block);
		block.animate = function(timeout, ind, thisblock) {
			if (timeout == true) {
				setTimeout(function() {
					if (thisblock.style.animation == "test 1.5s 1") {
						thisblock.style.animation = "testInverted 1.5s 1";
						thisblock.style.transform = "translateX(0px)";
					} else {
						thisblock.style.animation = "test 1.5s 1";
						thisblock.style.transform = "translateX(-245px)";
					}
				}, 1000*ind);
			} else {
				console.log("Animating");

				if (this.style.animation == "test 1.5s 1") {
					this.style.animation = "testInverted 1.5s 1";
					this.style.transform = "translateX(0px)";
				} else {
					this.style.animation = "test 1.5s 1";
					this.style.transform = "translateX(-245px)";
				}
			}
		}

		block.onclick = function() {
			this.animate(false, 0, this);
		}
	}

	animateBlocks(lengthOfBlocks);

	return "Done";
}

function Block(color, w, h) {
	var colorList = ["red", "orange", "blue", "green", "darkgreen", "yellow", "grey", "black", "pink", "purple"];
	var b = document.createElement('div');
	b.classList.add("block");
	b.style.width = w ? w+"px" : "50px";
	b.style.height = h ? h+"px" : "50px";
	var cIndex = Math.floor(Math.random()*colorList.length);
	b.style.backgroundColor = color ? color : colorList[cIndex];

	return b;
}

function animateBlocks(fromIndex) {

	var blocks = document.querySelectorAll(".block");
	var start = 0;
	if (fromIndex >= 0) {
		start = fromIndex;
	}

	var msg = document.querySelector('.messageAnimate');

	if (blocks.length == 0) {
		msg.innerHTML = "No blocks to animate. Please generate some.";
	} else {
		msg.innerHTML = "Animating...";
	}
	console.log(start);
	console.log(blocks[start]);
	for (var i = start; i < blocks.length; i++) {
		if (i == start) {
			blocks[i].animate(false, i-start, blocks[i]);
		} else {
			blocks[i].animate(true, i-start, blocks[i]);
		}
	}
}

function removeBlocks() {
	var blocks = document.querySelectorAll(".block");
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].parentNode.removeChild(blocks[i]);
	}
}
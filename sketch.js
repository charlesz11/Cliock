function setup() {
	createCanvas(800, 800); // make an HTML canvas element width x height pixels

}

function draw() {
	background(200);
	initBox()
	initDate()
}

/**
 * fill  填充色 RGB
 * noStroke() 无边框
 * stroke() 边框填充色RGB
 * strokeWeight(5); 边框宽度 px

**/
let statuss = true  //是否输出值

// 绘制边框
function initBox() {
	strokeWeight(25)
	stroke(221, 239, 248)
	quad(150, 340, 450, 340, 450, 200, 150, 200);

}

// 绘制文本内容
function initDate() {
	// 文字边框宽度  文字边框颜色
	strokeWeight(14)
	stroke(10, 10, 10)
	// 文字大小
	textSize(50);
	// 文字填充
	fill(43, 109, 203);
	// 当时间小于10 是一个数字时在前面加上0
	if (hour() < 10) {
		// 显示文本内容，x坐标  Y坐标
		text('0' + hour(), 175, 287);
	} else {
		text(hour(), 175, 287);
	}
	text(":", 245, 280)
	// 文字填充颜色
	fill(80, 152, 56);
	if (minute() < 10) {
		text('0' + minute(), 270, 285);
	} else {
		text(minute(), 270, 285);
	}
	text(":", 339, 280)
	// 文字填充颜色
	fill(255, 245, 245);
	if (second() < 10) {
		if (second() < 10) {
			statuss = true
		}
		text('0' + second(), 360, 285);
	} else {
		if (second() >= 59 && statuss) {
			statuss = false
			if (minute() + 1 > 59) {
				console.log('current minutes is ', '01')
			} else {
				let minutes = minute() + 1
				if (minutes < 10) {
					console.log('current minutes is ', '0' + minutes)
				} else {
					console.log('current minutes is ', minutes)
				}

			}
		}
		text(second(), 360, 285);
	}
}

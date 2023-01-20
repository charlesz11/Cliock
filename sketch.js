function setup() {
	createCanvas(1900, 600); // make an HTML canvas element width x height pixels

}

function draw() {
	background(200);
	// initBox()
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


// 绘制水漏时钟
function initDate() {
	let H = hour()
	let M = minute()
	let S = second()



	// 时
	noStroke()
	fill(255, 255, 255)
	quad(100, 500, 200, 500, 200, 350, 100, 350);

	fill(0, 194, 151)
	quad(100, 500, 200, 500, 200, 500 - (H * 6.25), 100, 500 - (H * 6.25));


	// 链接器
	fill(255, 255, 255)
	strokeWeight(4)
	stroke(85, 85, 79)
	quad(200, 380, 300, 380, 300, 370, 200, 370);


	// 分
	noStroke()
	fill(255, 255, 255)
	quad(300, 400, 400, 400, 400, 250, 300, 250);
	fill(44, 153, 58)
	quad(300, 400, 400, 400, 400, 400 - (M * 2.5), 300, 400 - (M * 2.5));


	// 链接器
	strokeWeight(4)
	stroke(85, 85, 79)
	fill(255, 255, 255)
	quad(400, 260, 500, 260, 500, 270, 400, 270);


	// 秒
	noStroke()
	fill(255, 255, 255)
	quad(500, 300, 600, 300, 600, 150, 500, 150);
	fill(33, 160, 255)
	quad(500, 300, 600, 300, 600, 150 + (S * 2.5), 500, 150 + (S * 2.5));




	// 打印时间
	if (S < 10) {
		statuss = true
	}
	if (S >= 59 && statuss) {
		statuss = false
		if (M + 1 >= 60) {
			console.log('当前分钟', M + 1 - 60)

		} else {
			console.log('当前分钟', M + 1)
		}

	}

}

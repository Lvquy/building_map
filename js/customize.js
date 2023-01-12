
function CloseWindow() {
	window.close();
}

var count_close = 0;
function countTouches(event) {
  var x = event.touches.length;
  console.log('so diem cham',x);
  if (x >1) {
  	count_close +=1;
  	setTimeout(CloseWindow, 5000);
  	// console.log('count_close', count_close)
  }
}

// disable ctrl + , ctrl - 
$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscore key
    // 61 Plus key  +/= key
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});
// disable ctrl + , ctrl - 

var click = 0;
var choice_phong_id = 0;

function reload(){
	window.location.reload();
}

function f5(){
	var desc = $("#desc")
	var div_choice = $("#"+choice_phong_id)

	div_choice.html(choice_phong_id)
	div_choice.css({"background":"none"})
	desc.html("")
}

function choice(cs) {
	const time_close = 1400000000; // timeout close browser 
	f5();
	choice_phong_id = cs;
	console.log(choice_phong_id)	
	click +=1;
	if (click == 1){
		console.log('click = 1')
		console.log('check count close',count_close)
		if (count_close == 0){
			a = setTimeout(CloseWindow, time_close);
		}
		
	}
	
	if (click > 1){
		console.log('click > 1');
		if (count_close == 0){
			clearTimeout(a);
			a = setTimeout(CloseWindow, time_close);
		}
		
	}
	var div = $("#"+cs)
	var desc = $("#desc")
	var description_p = $("#description_p")
	var bgimg = $("#bg-img")
	var  select_p = $("#select_p")
	select_p.css({"display":"none"})
	div.html('<h6 class="text-center">Đang chọn</h6>'+cs.toUpperCase() )
	div.css({"background-color":"red"})

	if (cs == "P2"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ trái vào hành lang T1</li><li>B2: Đi thẳng 10m P2 bên tay phải</li></ul>"
		bg_image = '<img src="img/1-2.png" class="img-fluid" >'
		desc_p_content = "Chức năng P2: Gửi tiết kiệm"
	}
	if (cs == "P3"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ trái vào hành lang T1</li><li>B2: Đi thẳng 20m P3 bên tay phải</li></ul>"
		bg_image = '<img src="img/1-3.png" class="img-fluid" >'
		desc_p_content = "Chức năng P3: Làm thẻ ATM"
	}
	if (cs == "P4"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ trái vào hành lang T1</li><li>B2: Đi thẳng 20m P4 bên tay trái</li></ul>"
		bg_image = '<img src="img/1-4.png" class="img-fluid" >'
		desc_p_content = "Chức năng P4: Rút tiền"
	}
	if (cs == "P5"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ trái vào hành lang T1</li><li>B2: Đi thẳng 10m P5 bên tay phải</li></ul>"
		bg_image = '<img src="img/1-5.png" class="img-fluid" >'
		desc_p_content = "Chức năng P5: Xử lý nội bộ"
	}
	if (cs == "P6"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ trái vào hành lang T1</li><li>B2: P6 đối diện P1 gần cầu thang</li></ul>"
		bg_image = '<img src="img/1-6.png" class="img-fluid" >'
		desc_p_content = "Chức năng P6: Xử lý khiếu nại"
	}
	if (cs == "P7"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ trái</li><li>B3: P7 bên tay trái gần cầu thang</li></ul>"
		bg_image = '<img src="img/1-7.png" class="img-fluid" >'
		desc_p_content = "Chức năng P7: Phòng Giám đốc"
	}
	if (cs == "P8"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ trái</li><li>B3: Đi thẳng 10m P8 bên tay trái</li></ul>"
		bg_image = '<img src="img/1-8.png" class="img-fluid" >'
		desc_p_content = "Chức năng P8: Phòng Phó giám đốc"
	}
	if (cs == "P9"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ trái</li><li>B3: Đi thẳng 20m P9 bên tay trái</li></ul>"
		bg_image = '<img src="img/1-9.png" class="img-fluid" >'
		desc_p_content = "Chức năng P9: Phòng kế toán"
	}
	if (cs == "P10"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ trái</li><li>B3: Đi thẳng 20m P10 bên tay phải</li></ul>"
		bg_image = '<img src="img/1-10.png" class="img-fluid" >'
		desc_p_content = "Chức năng P10: Phòng họp"
	}
	if (cs == "P11"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ trái</li><li>B3: Đi thẳng 10m P11 bên tay phải</li></ul>"
		bg_image = '<img src="img/1-11.png" class="img-fluid" >'
		desc_p_content = "Chức năng P11: Phòng ăn"
	}
	if (cs == "P12"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ trái</li><li>B3: P12 bên tay phải gần cầu thang</li></ul>"
		bg_image = '<img src="img/1-12.png" class="img-fluid" >'
		desc_p_content = "Chức năng P12: Xử lý abc..."
	}
	if (cs == "P13"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ phải</li><li>B3: P13 bên tay trái gần cầu thang</li></ul>"
		bg_image = '<img src="img/1-13.png" class="img-fluid" >'
		desc_p_content = "Chức năng P13: Xử lý abc..."
	}
	if (cs == "P14"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ phải</li><li>B3: Đi thẳng 20m P14 bên tay trái</li></ul>"
		bg_image = '<img src="img/1-14.png" class="img-fluid">'
		desc_p_content = "Chức năng P14: Xử lý abc..."
	}
	if (cs == "P15"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ phải</li><li>B3: Đi thẳng 40m P15 bên tay trái</li></ul>"
		bg_image = '<img src="img/1-15.png" class="img-fluid" >'
		desc_p_content = "Chức năng P15: Xử lý abc..."
	}
	if (cs == "P16"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ phải</li><li>B3: Đi thẳng 40m P16 bên tay phải</li></ul>"
		bg_image = '<img src="img/1-16.png" class="img-fluid" >'
		desc_p_content = "Chức năng P16: Xử lý abc..."
	}
	if (cs == "P17"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ phải</li><li>B3: Đi thẳng 20m P17 bên tay phải</li></ul>"
		bg_image = '<img src="img/1-17.png" class="img-fluid" >'
		desc_p_content = "Chức năng P17: Đón tiếp dân"
	}
	if (cs == "P18"){
		decs_content = "<h6>Đường đi: P1 -> "+cs.toUpperCase()+"</h6><ul><li>B1: Đi thẳng 5m rẽ phải cầu thang</li><li>B2: Đi lên tầng 2 rẽ phải</li><li>B3: P18 bên tay phải gần cầu thang</li></ul>"
		bg_image = '<img src="img/1-18.png" class="img-fluid" >'
		desc_p_content = "Chức năng P18: Tư vấn, giải đáp thắc mắc"
		
	}

	desc.html(decs_content);
	bgimg.html(bg_image);
	description_p.html(desc_p_content)

	}
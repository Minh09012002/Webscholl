

// function
function showTime(){
	var dateTime = document.querySelector(".vu-date-time");
	var d = new Date();
	var date = ["chủ nhật", "Thứ hai", "Thứ ba", "Thứ bốn", "Thứ năm", "Thứ sáu", "Thứ bảy"];
	var month= ["01", "02","03","04","05","06","07","08","09","10","11","12"];
	
	 if(d.getMinutes() < 10){
		var m = "0"+ d.getMinutes()
	}else{
		var m = d.getMinutes();
	}
	dateTime.innerHTML= date[d.getDay()]+ ","+ " " + "ngày"+ " " + d.getDate()+ " " + "tháng"+ " " + month[d.getMonth()]+ " " + "năm" + " " +d.getFullYear() + " [" + [d.getHours() +":"+ m +":" + d.getSeconds()+ " (GTM +7)"] + "]"
}
setInterval(() => {
	showTime();
}, 1000);

// slider
$(document).ready(function(){
	$('.slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  fade: true,
	  prevArrow:false,
	  nextArrow:false,
	});
  });
  // slider hợp tác
  $(document).ready(function(){
	  $('.slider-cooperate-list').slick({
		  infinite: true,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  prevArrow: '<div class="class-to-style slider-cooperate-pre"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',

		  nextArrow: '<div class="class-to-style slider-cooperate-next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
	  
	  });
  });

//  menu-mobile;
const btnMenuMobile = document.querySelector(".mobile-button");
const menuMobile= document.querySelector(".menu-mobile");
const closeMenuMobile = document.querySelector(".close-menu-mobile");
const subMenus = document.querySelectorAll(".sub-menu");
 btnMenuMobile.onclick = function(){
	Object.assign(menuMobile.style,{
		transform: "translateX(0px)",
		transition :"all 0.3s linear",
		opacity : "1",
		height: "100%",
		position : "fixed"
	})
 }
 closeMenuMobile.onclick = function(){
	Object.assign(menuMobile.style,{
		transform: "translateX(-770px)",
		transition :"all 0.3s linear",
		opacity : "0"
	})
 }
 
 // xử lí khi header khi scroll
 const vuHeader = document.querySelector(".vu-header")
 const header = document.querySelector(".header");
 const vuHeaderHeight = vuHeader.offsetHeight;

 
  function onscroll(){
	  window.addEventListener("scroll", callbackfc);
	  function callbackfc(){
		const y = window.pageYOffset;
		  if(y > vuHeaderHeight){
			  header.classList.add("scroll")
		  }else{
			  header.classList.remove("scroll")
		  }
		  
	  }
  }
  onscroll();

// nút backtop
const btn = document.querySelector(".back-top")
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			Object.assign(btn.style,{
				opacity: 1,
				transform: "translateY(0px)",
				transition:"all 0.3s linear"
			})
		}
		else{
			btn.style.opacity = 0;
			transition:"all 0.3s linear"
		}
	});
	$('#toTopBtn').click(function(){
		$("html, body").animate({
			scrollTop : 0
		},1000)
	});
})

// tuyển sinh
window.addEventListener("load", function(){
	const infoAdm = document.querySelector(".info-admissions");
	const infoAdmWrap = document.querySelector(".info-admissions-wrap");
	const infoAdmMain = document.querySelector(".info-admissions-main");
	const infoAdmItem = document.querySelectorAll(".info-admissions-item");
	const infoAdmImg = document.querySelectorAll(".admissions-image");
	const infoAdmText = document.querySelectorAll(".admissions-text")
	const btnAdmNext = document.querySelector(".btn-next")
	const btnAdmPrev = document.querySelector(".btn-prev");
	const infoAdmItemWidth = infoAdmItem[0].offsetWidth;
	const infoAdmItemLenght = infoAdmItem.length;
	let position = 0;
	let index = 0;
	btnAdmNext.addEventListener("click", function(){
		handlechangeInfo(1)
	});
	btnAdmPrev.addEventListener("click", function(){
		handlechangeInfo(-1)
	})

	function handlechangeInfo(direction){
		
		infoAdmImg[index].style.transform= "translateY(10px)";
		infoAdmText[index].style.transform="translate(-14px, -4px)"
		if(direction === 1){
			if(index >= infoAdmItemLenght - 1){
				position= infoAdmItemWidth;
				index = -1;
			}
			position = position - infoAdmItemWidth;
			infoAdmMain.style = `transform : translateX(${position}px)`;
			index++
			infoAdmImg[index].style.transform= "translateY(0px)";
			infoAdmText[index].style.transform="translate(0px, 0px)"
		}else if(direction === -1){
			
			infoAdmImg[index].style.transform= "translateY(10px)";
			infoAdmText[index].style.transform="translate(-14px, -4px)"
			if(index<= 0){
				position= -(infoAdmItemLenght) * infoAdmItemWidth;
				index = infoAdmItemLenght;
			}
			position =position + infoAdmItemWidth;
			infoAdmMain.style = `transform : translateX(${position}px)`;
			index--;
			infoAdmImg[index].style.transform= "translateY(0px)";
			infoAdmText[index].style.transform="translate(0px, 0px)"
		}
	}
	
})
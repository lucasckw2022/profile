/*$(document).ready(function(){
			$("div.block.list").mouseenter(function(){
				$(this).find(".projectName").slideUp();
				$(this).find(".projectDescription").delay(300).fadeIn(500);
				$(this).find(".projectIcon img").delay(300).fadeIn(500);
				});
			$("div.block.list").mouseleave(function(){
				$(this).find(".projectName").delay(400).slideDown();
				$(this).find(".projectDescription").fadeOut(400);
				$(this).find(".projectIcon img").fadeOut(500);
				});
			
		});	*/
			$(document).scroll(scrollcount)	
			$(document).ready(popUp)
			$(document).ready(mobileMenu)
			$(document).scroll(scrollToShow)
			$(document).scroll(scrollHighlight)
			
			function scrollcount(){
				i = 2;
				backgroundImg = "url(image/background/0" + i +".jpg) no-repeat fixed"
				checkposition = $(".contentBox > div:nth-child("+ i +")").position().top;
				scrollPosition = $(document).scrollTop();
				if (scrollPosition >= checkposition){
					$("body").css({"background": backgroundImg,"background-size":"cover"}).fadeIn(1000);
					i++
				}
				else if (scrollPosition < checkposition){
					i--;
					backgroundImg = "url(image/background/0" + i +".jpg) no-repeat fixed"
					$("body").css({"background": backgroundImg,"background-size":"cover"}).fadeIn(1000);
				}
			}
			

			function popUp(){
				$(".block").click(function(){
					findFirstClass = "." + $(this).attr("class").split(" ")[0];
					findSameClass = $(".projectList").find(findFirstClass);
					$(findSameClass).css({"visibility": "visible", "opacity": "1"});
				});
				$(".popUpFrame").click(function(){
					$(".popUpFrame").css({"opacity": "0","visibility": "hidden"});
				})
			}

			function mobileMenu(){
				$("ul.mobile.menu").click(function(){
				$(this).find("ul").slideToggle();
				});
			}
			
			function scrollToShow(){
				scrollPosition = $(document).scrollTop();
				pointToShow = $("#titleBox").position().top - 300;
				pointToHide = $("#titleBox").position().top + 50;
				if (scrollPosition >= pointToShow && scrollPosition <= pointToHide){
					$("#titleBox h1,#titleBox p").fadeIn(500);
				}
				else if (scrollPosition <= pointToHide || scrollPosition >= pointToHide){
					$("#titleBox h1,#titleBox p").fadeOut(500);
				}
			}

			function scrollHighlight(){
				scrollPosition = $(document).scrollTop();
				if (scrollPosition >= $("#titleBox").position().top && 
					scrollPosition <= $(".background1").position().top){
					$(".menu li").removeClass("active")
					$(".menu li:first-child").addClass("active")
					$(".mobile.menu").removeClass("active")
				}
				else if(scrollPosition >=$("#project").position().top){
					$(".menu li").removeClass("active")
					$(".menu li:nth-child(2)").addClass("active")
				}
				else ($(".menu li").removeClass("active"))
			}

			
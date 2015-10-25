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
			
			function scrollcount(){
				i = 2;
				backgroundImg = "url(image/background/0" + i +".jpg) no-repeat fixed"
				checkposition = $(".contentBox > div:nth-child("+ i +")").position().top;
				scrollPosition = $(document).scrollTop();
				if (scrollPosition >= checkposition){
					$("body").css({"background": backgroundImg}).fadeIn(1000);
					i++
				}
				else if (scrollPosition < checkposition){
					i--;
					backgroundImg = "url(image/background/0" + i +".jpg) no-repeat fixed"
					$("body").css({"background": backgroundImg}).fadeIn(1000);
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
			
			
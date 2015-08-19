$(document).ready(function(){
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
			});
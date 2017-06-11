	(function(global){
		function remChange(){
			document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
		}
		remChange();
			global.addEventListener('resize',remChange,false);
		})(window);
		
	$(document).ready(function(){
			$(".tc.one").fadeOut(1);	
			$(".tc.two").fadeOut(1);	
			$(".tc.thr").fadeOut(1);	
			$(".tc.fou").fadeOut(1);	
		$('.button.one').click(function(){
			$(".xlz").animate({'margin-left':'0'},300);
			//中奖弹窗
			
	        //showMask();
			//$(".tc.thr").fadeIn(500);
			
			//
			//没中奖返回随机内容弹窗
			var ran = parseInt(4 * Math.random() + 1);
			if(ran == 1){
				$('.tbg03 .notice,.button.thrtwo').css('display','block');
				$('.tbg02').html('<p>皇上微服私访去了<br/>改日再来碰碰运气吧～</p>');
				}else if(ran == 2){
				$('.tbg03 .notice,.button.thrtwo').css('display','block');
					$('.tbg02').html('<p>今日国库亏空<br/>并未得到赏赐～</p>');
					}else if(ran == 3){
				$('.tbg03 .notice,.button.thrtwo').css('display','block');
						$('.tbg02').html('<p>今日手气欠佳啊<br />小李子送客～</p>');
						}else if(ran == 4){
				$('.tbg02').html('<p>今日抽奖机会已用尽<br>请改日再来碰碰运气</p>');
				$('.tbg03 .notice,.button.thrtwo').css('display','none');
			}
			setTimeout('showMask()',1000);			
			$(".tc.two").delay(1000).fadeIn(500);
			//
		});
		
		var flag = true;//如果有奖品
		$('.jiangpin').click(function(){
			if(!flag){
				$('.tc.six').fadeIn(500);
				showMask();
			}
	        showMask();
			$(".tc.fou").fadeIn(500);
		});
		$('.rule').click(function(){
	        showMask();
			$(".tc.one").fadeIn(500);
		});
		$('.button.two').click(function(){
			$(".tc.one").fadeOut(500);
	        hideMask();		
		});
		$('.button.thr').click(function(){
			$(".tc.two").fadeOut(500);
	        hideMask();	
			$(".xlz").css('margin-left','-20.2rem');
					
		});	
	//立即兑奖跳出
		$('.button.fou').click(function(){
		});
	//
	//去看看跳出
		$('.button.thrtwo').click(function(){
		});
	//
		$('.button.fiv').click(function(){
			$(".tc.thr").fadeOut(500);				
	        hideMask();			
		});
		$('.button.six').click(function(){
			$(".tc.fou").fadeOut(500);				
	        hideMask();			
		});
		$('#back').click(function () {
			$('.tc.six').fadeOut(500);
			hideMask();
		});
		
	//奖品领取
		$('.jp.l>div').html('<div class="ll"><p>点击领取</p></div>');
		$('.jp.ml>div').html('<div class="mlml"></div>');
		$('.ss').html('');
		$('.ll').click(function(){
			$(this).removeClass("ll");
			$(this).empty();
			$(this).addClass("mlml");
			$(this).parent().parent().removeClass("l");
			$(this).parent().parent().addClass("ml");
			})
	//
	timer();			
	});
	function timer(){
		$('.button.one').fadeToggle(800);
		setTimeout(timer(),10000);
	}
    function showMask(){     
        $("#mask").css("height",$(document).height());     
        $("#mask").css("width",$(document).width());     
        $("#mask").show();     
    }  
    function hideMask(){     
        $("#mask").hide();     
    }  
     
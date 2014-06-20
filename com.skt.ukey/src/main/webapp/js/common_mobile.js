
//auto height
function fnc_autoH(){
	var w_height = $(window).height(),
	w_width = $(window).width(),
	h_height = $('.header').height(),
	f_height = $('.footer').height(),
	c_height = w_height - (h_height + f_height)+'px';
	
	var sc_height = w_height - (h_height + f_height)+20+'px';
	
	$('.content,').css('height',c_height);
	$('aside,').css('height',sc_height);

	$('#ts_main').css('height',c_height);
	$('#ts_main .ts_item').css('height',c_height);
	
	var sc_width = $(window).width()+'px';

	$('.scroll_wrap').css('height',sc_height);
	//$('.grid>div').css({'height':c_height,'width':sc_width});
	var scroll_wrap = document.querySelector('.scroll_wrap');

	$('.demo_wrap').css('height',w_height);

	$('.footer').css({'top':((w_height - f_height)+'px')})
}

fnc_autoH();

var es = 'easeOutExpo', dur = 300,dur2 = 1000,dly = 300;
// easing options : easeOutQuart

//btn01
$('#lnbMenu_btn').click(function(){
	// $('#container').animate({left:-118},{complete:function(){
	// 	$('.lnb').removeClass('on');
	// 	$('.all').addClass('on');
	// },
	// easing:es,
	// duration :dur
	// }).delay(dly).animate({left:261},{complete:function(){
	// },
	// easing:es,
	// duration :dur
	// });
	$('.icon').animate({
		left:-118
	});
	$('.all').animate({
		left:0
	});
	//$('li','.lnb.all').trigger('click');


	$('img','.def').attr('src',$('img','.def').attr('src').replace('_off.png','_on.png'));
	$('.sub01').animate({left:118},{easing:es,duration:dur2});

});


//btn02
$('#lnbMenu_btnIcon').click(function(){
	// $('#container').animate({left:-279},{complete:function(){
	// 	$('.all').removeClass('on');
	// 	$('.icon').addClass('on');
	// 	$('.content').css('margin-left','97px')
	// },
	// easing:es,
	// duration :dur
	// }).delay(dly).animate({left:0},{complete:function(){
	// },
	// easing:es,
	// duration :dur
	// });
	$('.icon').animate({
		left:0
	});
	$('.all').animate({
		left:-118
	});
	$('.sb_menu').animate({left:-300},{easing:es,duration:dur})
	
});

//lnb menu state on

$('li','.lnb.all').click(function(init_data){
	var idx = $('li','.lnb.all').index(this);

	$('li','.lnb.all').each(function(){
		$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_on.png','_off.png'))
	});

	$('img',this).attr('src',$('img',this).attr('src').replace('_off.png','_on.png'));
	var sub_idx = '.sub0'+idx;
	console.log(sub_idx);
	$('.sb_menu').animate({left:-300},{easing:es,duration:dur});
	$(sub_idx).animate({left:118},{easing:es,duration:dur2});

});

/*$('li','.lnb.all').each(function(idx){
	$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_on.png','_off.png'));
	$(this).click(function(){
		//console.log(idx)
	});

});*/


$('li','.sb_menu').click(function(){
	$('li','.sb_menu').each(function(){
		$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_on.png','_off.png'))
	});
	$('img',this).attr('src',$('img',this).attr('src').replace('_off.png','_on.png'));
});

$('.btn_temp').click(function(){
	$('.demo_wrap').show();
});

$('.btn_ok').click(function(){
	$('.demo').animate({top:-500},
		{
			easing:'easeInBack',
			duration:dur2,
			complete:function(){
				$('.demo_wrap').hide();
				$('.demo').css({'top':'50%','margin-top':'-235px'});
				}
		});
});

$('.btn_cancel, .btn_close').click(function(){
	$('.demo_wrap').hide();
});

// 검색박스 자동완성
$('.searchInput').bind({
	'click':function(){
		$('.autoComp').show();
		$('.search fieldset').css('border-color','red');
		$('.searchInput').val('고객').css('font-weight','bold');
	},
	'focusout':function(){
		$('.autoComp').hide();
		$('.search fieldset').css('border-color','#ccc');
		$('.searchInput').val('');
	}
});


$('.sysSpeech').click(function(){
	$('.speech_wrap').show();
});

$('.speech').click(function(){
	$('.speech_wrap').hide();
});

$('.sysWindow').click(function(){
	$('.window_wrap').show();
});

$('.window').click(function(){
	$('.window_wrap').hide();
});
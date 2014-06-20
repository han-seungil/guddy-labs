
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

	$('.scroll_wrap').css('height',w_height+20+'px');

	$('.grid>div').css({'height':c_height,'width':sc_width});
	var scroll_wrap = document.querySelector('.scroll_wrap');

	$('.demo_wrap').css('height',w_height);

	$('.movie_wrap').css('height',w_height);
		
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

$('.btn_ukeymap').click(function(){
	$('.ukeymap_wrap').show();
});

$('.ukeymap').click(function(){
	$('.ukeymap_wrap').hide();
});

$('.sysSpeech').click(function(){
	$('.speech_default_wrap').show();
});

$('.speech_default').click(function(){
	$('.speech_default_wrap').hide();
});

$('.memo').click(function(){
	$('.memoOpen_wrap').show();
});

$('.memoOpen').click(function(){
	$('.memoOpen_wrap').hide();
});

$('.btn_mic01').click(function(){
	$('.speech_wrap01').show();
});

$('.btn_mic02').click(function(){
	$('.speech_wrap02').show();
});

$('.speechEnter01, .n102_tit').click(function(){
	$('.speech_wrap01').hide();
	$('.n102').val('010');
	$('.n103').val('1234');
	$('.n104').val('5678');
	$('.speechTxt01').val('');
});

$('.speechEnter02, .n111_tit').click(function(){
	$('.speech_wrap02').hide();
	$('.n111').val('하나SK카드');
	$('.speechTxt02').val('');
});

$('.n113_tit').click(function(){
	$('.n113').val('1111222233334444');
});

$('.inTxt01').click(function(){
	$('.speechTxt01').val('010-1234-5678');
});

$('.inTxt02').click(function(){
	$('.speechTxt02').val('하나SK카드');
});

$('.speechCancel').click(function(){
	$('.speech_wrap01, .speech_wrap02').hide();
});

$('.sysWindow').click(function(){
	$('.window_wrap').show();
});

$('.window').click(function(){
	$('.window_wrap').hide();
});

$('.btn_ocr').click(function(){
	$('.ocr_wrap').show();
});

$('.lightWrap').click(function(){
	$('.scanLight').show();
	$('.scanLight').animate({
    left: +770,
		}, {
			easing:'easeInOutQuint',
			duration:2000,
			complete:function(){
			$('.scanLight').hide().css('left','0');	
			}
		});
});

$('.ocrComplete, .n101_tit').click(function(){
	$('.ocr_wrap').fadeOut();
	$('.n101,.n112').val('홍길동');
	$('.n105').val('781116');
	$('.n106').val('1234567');
	$('.n107').val('100');
	$('.n108').val('999');
	$('.n109').val('서울특별시 중구 을지로2가 11');
	$('.n110').val('SK T-타워');
	$('.n114').val('781116');
	$('.n115').val('1234567');
	$('.n116').val('본인');
	}
);

/*
$('.m02_00').click(function(){
	$('.m02_00').hide();
	$('.m02_01').show();
});
*/

$('.m02_01').click(function(){
	$('.m02_01').hide();
	$('.m02_02').show();
});

$('.m02_02').click(function(){
		$('.m02_02').hide();
		$('.m02_02_hideWrap').show();
		$('.m02_02_hide1').animate({left:1000},
		{easing:'easeInOutCirc',
		duration:dur2,
		complete:function(){
			$('.m02_02_hide1').hide();
			$('.m02_02_hide2').animate({top:137});
			$('.m02_02_hideWrap').animate({height:770});
		}}
	);
});

$('.m02_02_hideWrap').click(function(){
	$('.m02_02_hideWrap').css('height','908px');
	$('.m02_02_hide1').show().css('left','0');
	$('.m02_02_hide2').css('top','282px');
	$('.m02_02_hideWrap').hide();
	$('.m02_01').show();
});



//MOVIE CONTROLS
var  movie_clip = document.getElementById('movie01');
$('.sysMovie').click(function(){
	$('.movie_wrap').show();

	movie_clip.defaultPlaybackRate = 1;
	movie_clip.load();
	movie_clip.play();

	console.log(movie_clip.audioTracks);
	//volume control
	movie_clip.volume = 0;
	while(movie_clip.volume <0.7){
		movie_clip.volume += 0.01;
	}
});
$('.movie .btn_x').click(function(){
	movie_clip.pause();
	$('.movie_wrap').hide();
});



//CUSTOMER CONTROLS
$('.sysCustomer').click(function(){
$('.customer_con_wrap').effect('fade',{distance:26,times:5,direction:'down'},700);
});
$('img','.customer_con_wrap').click(function(){
	$(this).parent().effect('fade',{mode:'hide'},500);
});


//ALERT CONTROLS
$('.alert').click(function(){
$('.alert_con_wrap').effect('bounce',{distance:26,times:5,direction:'down'},700);
});
$('img','.alert_con_wrap').click(function(){
	$(this).parent().effect('fade',{mode:'hide'},500);
});

//RECENT CONTROLS
$('.recently').click(function(){
	$('.recent_wrap').show();
});
$('.btn_close').click(function(){
	$('.recent_wrap').hide();
});

//SIGN CONTROLS -보내는쪽-
$('.n117').click(function(){
	$('.req_sign_wrap').show();
});
$('.btn_ok','.req_sign_wrap').click(function(){
	$('.req_sign').animate({top:-500},
	{
		easing:'easeInBack',
		duration:dur2,
		complete:function(){
			$('.req_sign_02').fadeIn();
		}
	});
});

$('.req_sign_02').click(function(){
	$(this).hide();
	$('.req_sign_03').show()
});

$('.req_sign_03').click(function(){
	$(this).hide();
	$('.req_sign_wrap').hide();
	$('.req_sign').css({'top':'50%','margin-top':'-235px'});
	$('.n117').css('background','url(../imgs/main/signed_name.png) no-repeat center top')
});

$('.n117_tit').click(function(){
	$('.n117').css('background','url(../imgs/main/signed_name.png) no-repeat center top')
});

$('.btn_close ,.btn_cancel','.req_sign_wrap').click(function(){
	$('.req_sign_wrap').hide();
});
$('.btn_close ,.btn_cancel','.req_sign_wrap_user').click(function(){
	$('.req_sign_wrap_user').hide();
});
$('.btn_close ,.btn_cancel','.req_card_wrap').click(function(){
	$('.req_card_wrap').hide();
});
$('.btn_close ,.btn_cancel','.req_card_wrap_user').click(function(){
	$('.req_card_wrap_user').hide();
});



//SIGN CONTROLS -받는쪽-
$('.n120').click(function(){
	$('.req_sign_wrap_user').show();
	$('.req_sign_user').animate({top:'50%'},800);
});
$('.req_sign_user').click(function(){
	$('.req_sign_user').append('<div class="act_sign"><img src="../imgs/main/pop_sign.gif" alt=""></div>')
})
$('.btn_ok','.req_sign_wrap_user').click(function(){
	$('.req_sign_user').animate({top:-500},
		{easing:'easeInBack',
		duration:dur2,
		complete:function(){
			$('.req_sign_wrap_user').hide();
			$('.req_sign_user').css({'top':'50%','margin-top':'-235px'});
		}}
	);
});



//CARD CONTROLS -보내는쪽-
/*
$('.n111').click(function(){
	$('.req_card_wrap').show();
});
$('.btn_ok','.req_card_wrap').click(function(){
	$('.req_card').animate({top:-500},
	{
		easing:'easeInBack',
		duration:dur2,
		complete:function(){
			$('.req_card_02').fadeIn();
		}
	});
});
$('.req_card_02').click(function(){
	$(this).hide();
	$('.req_card_03').show()
});
$('.req_card_03').click(function(){
	$(this).hide();
	$('.req_card_wrap').hide();
	$('.req_card').css({'top':'50%','margin-top':'-235px'});
	$('.n111').val('하나SK카드')
});
*/

//CARD CONTROLS -받는쪽-
$('.n111').click(function(){
	$('.req_card_wrap_user').fadeIn();
	$('.req_card_user').css('top','50%');
});
$('.cardList').click(function() {
	$('img','.cardList').attr('src',$('img','.cardList').attr('src').replace('_list.png','_list_sel.png'));
});
$('.btn_ok','.req_card_wrap_user').click(function(){
	$('.req_card_wrap_user').fadeOut();
	$('img','.cardList').attr('src',$('img','.cardList').attr('src').replace('_list_sel.png','_list.png'));
	$('.n111').val('하나SK카드')
});
/////////////////////////////////
//Windowsサイズを取得
/////////////////////////////////
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
var viewport = updateViewportDimensions();



/////////////////////////////////
// 画面のサイズ変更が完了した時にjqueryを動かす
/////////////////////////////////
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();
var timeToWaitForLast = 100;


function loadGravatars() {
  viewport = updateViewportDimensions();
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
}


/////////////////////////////////
// target Link内に画像がはいっている場合にクラスを追加
/////////////////////////////////
jQuery(function($){
$("a:has(img)").addClass("no-icon");
});


/////////////////////////////////
// ページトップへ戻るボタン
/////////////////////////////////
jQuery(document).ready(function($) {
$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    //スクロールが400に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '10px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 200); 
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
  loadGravatars();
});

/////////////////////////////////
// glitch!!
/////////////////////////////////
/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
    setTimeout(() => document.body.classList.add('render'), 60);
    const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
    const total = navdemos.length;
    const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
    const navigate = (linkEl) => {
        document.body.classList.remove('render');
        document.body.addEventListener('transitionend', () => window.location = linkEl.href);
    };
    navdemos.forEach(link => link.addEventListener('click', (ev) => {
        ev.preventDefault();
        navigate(ev.target);
    }));
    document.addEventListener('keydown', (ev) => {
        const keyCode = ev.keyCode || ev.which;
        let linkEl;
        if ( keyCode === 37 ) {
            linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
        }
        else if ( keyCode === 39 ) {
            linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
        }
        else {
            return false;
        }
        navigate(linkEl);
    });
    imagesLoaded('.glitch__img', { background: true }, () => {
        document.body.classList.remove('loading');
        document.body.classList.add('imgloaded');
    });
}
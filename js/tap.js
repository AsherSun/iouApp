//移动端事件封装
var EventTap = {
	addTap:function(el, type, fn){
		if(el.addEventListener){
			el.addEventListener(type, fn, false);
		}else if(el.attachEvent){
			el.attachEvent('on'+type, fn);
		}else{
			el['on' +type] = fn;
		}
	},
	removeTap:function(el, type, fn){
		if(el.removeEventListener){
			el.removeEventListener(type, fn, false);
		}else if(el.detachEvent){
			el.detachEvent('on' +type, fn);
		}else{
			el['on' +type] = null;
		}
	}
}
function nextNode(obj){
	return obj.nextElementSibling || obj.nextSibling
}

//跳转场景
function tapNewView(btn,targetUrl,targetId,animate){
	EventTap.addTap(btn, 'tap', function(){
		mui.openWindow({
		    url:targetUrl,
		    id:targetId,
		    styles:{
		      top:'0px',
		      bottom:'0px',
		    },
		    createNew:false,
		    show:{
		      autoShow:true,
		      aniShow: animate || 'pop-in',
		      duration:'200',
		      event:'titleUpdate',//页面显示时机，默认为titleUpdate事件时显示
		      extras:{}//窗口动画是否使用图片加速
		    },
		    waiting:{
		      autoShow:false,//自动显示等待框，默认为true
		      title:'正在加载...'
		    }
		})
	});
}

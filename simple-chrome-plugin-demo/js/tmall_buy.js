

KISSY.ready(function(S) {
	url = window.location.href;
	if (url.indexOf("https://detail.tmall.com") >= 0)
	{
		id = getUrlParameterByName('id');
		leftSpan = KISSY.all('.tm-change-left');
		if(leftSpan && leftSpan.length>0){
			localStorage.setItem(id,true);
			setTimeout("refresh();", 1000);
		}else{
			KISSY.all(".tb-amount").append('<input id="tmall_order_once" type="checkbox">一键购买锁定</input>')
			tmallOrderOnce = KISSY.all("#tmall_order_once");
			chrome.storage.local.get(id,function(value){
				console.log(value);
				isOrder =value[id]
				if(isOrder){
					tmallOrderOnce.attr('checked','checked')
				}
			})
			
			tmallOrderOnce.on("change",function(){
				isOrder = KISSY.all(this).attr('checked')=='checked';
				saveItem(id,isOrder);
				
			})
			check_buy();
		}
	} else if (url.indexOf("https://buy.tmall.com/order/confirm") >= 0){
		id = getUrlParameterByName('x-itemid');
		place_order("#submitOrder_1 a.go-btn");
	}

	if (url.indexOf("https://item.jd.com") >= 0)
	{
		id = location.href.split('/')[3].split('.')[0];
		console.log(id);
		KISSY.all(".sku-name").append('<br/><input id="jd_order_once" type="checkbox">一键秒杀锁定</input>')
		jdOrderOnce = KISSY.all("#jd_order_once");
		chrome.storage.local.get(id,function(value){
			console.log(value);
			isOrder =value[id]
			if(isOrder){
				jdOrderOnce.attr('checked','checked')
			}
		})
		
		jdOrderOnce.on("change",function(){
			isOrder = KISSY.all(this).attr('checked')=='checked';
			saveItem(id,isOrder);
			
		})
		check_jd_buy();
	} else if (url.indexOf("https://trade.jd.com") >= 0){
		item = KISSY.one(".goods-item")
		id = item.attr('goods-id');
		// id = getUrlParameterByName('x-itemid');
		place_order("#order-submit");
	}


});




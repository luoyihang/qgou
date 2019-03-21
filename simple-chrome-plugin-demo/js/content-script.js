console.log('启动');

reloadPage();


KISSY.ready(function(S) {
    url = window.location.href;
    console.log("当前URL是：" + url);
    // 天猫
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
            });
            check_buy();
        }
    } else if (url.indexOf("https://buy.tmall.com/order/confirm") >= 0){
        id = getUrlParameterByName('x-itemid');
        // place_order("#submitOrder_1 a.go-btn");
    }

    // 京东
    if (url.indexOf("https://item.jd.com") >= 0)
    {
        id = location.href.split('/')[3].split('.')[0];
        console.log("商品ID" + id);
        KISSY.all(".sku-name").append('<br/><input id="jd_order_once" type="checkbox">一键秒杀锁定</input>')
        jdOrderOnce = KISSY.all("#jd_order_once");
        chrome.storage.local.get(id,function(value){
            console.log(value);
            isOrder =value[id]
            if(isOrder){
                jdOrderOnce.attr('checked','checked')
            }
        });
        // 一键秒杀锁定按钮
        jdOrderOnce.on("change",function(){
            isOrder = KISSY.all(this).attr('checked')==='checked';
            saveItem(id,isOrder);

        });
        check_jd_buy();
    } else if (url.indexOf("https://cart.jd.com") >= 0) {
        // 购物车
        jd_cart();
    } else if (url.indexOf("https://trade.jd.com") >= 0) {
        // 提交订单
        jd_trade();
    }
});


function check_jd_buy()
{
    if (!buy_btn)
    {
        buy_btn = KISSY.all("#btn-onkeybuy");
    }
    if (buy_btn && buy_btn.attr('class')!='noPost' && buy_btn.parent().css('display') != 'none') {
        if(isOrder){
            buy_btn.fire("click");
            localStorage.setItem(id,false);
            console.log('click');
        }else{
            setTimeout("check_jd_buy();", 1);
        }
    } else {
        setTimeout("check_jd_buy();", 1);
    }
}




function refresh(){
    window.location.reload();
}

function place_order(str_query)
{
    if (!order_btn)
    {
        order_btn = KISSY.all(str_query);
    }
    console.log(id);
    chrome.storage.local.get(id,function(value){
        if(value[id]){
            if (order_btn && order_btn.length>0) {
                saveItem(id,false);
                order_btn.fire("click");
            } else {
                history.go('-1');
                //setTimeout("place_order();", 50);
            }
        }
    })

}

function getUrlParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "": decodeURIComponent(results[1]);
}

function saveItem(id,value){
    item = {};
    item[id]=value;
    chrome.storage.local.set(item);
}
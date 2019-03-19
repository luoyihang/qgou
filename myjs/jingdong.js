var nIntervId;
var count = 1;
var goDate;
function go() {
    console.log(" ^_^ 正在帮你抢购＊＊＊＊＊＊＊＊＊＊＊＊＊ 刷新" + count + "次");
    //console.log("host:" + window.location.hostname);
    count++;
    // iPhone X go set time
    if (Date.now() >= new Date("2019-02-23 00:00:00")) {
        console.log("开始抢购" + Date.now());

        //  抢购
        if ($(parent.frames[0].document).find("#choose-btn-ko").length == 1) {
            console.log("(++++++++++++ 抢购");
            var sku = window.location.pathname.replace(/[^0-9]/ig, "");
            var ref = "//cart.jd.com/gate.action?pid=" + sku + "&pcount=1&ptype=1";
            console.log("https:" + ref);
            //5089237
            $(parent.frames[0].document).find("#choose-btn-ko").attr("href", ref);//
            parent.frames[0].document.getElementById("choose-btn-ko").click();
            return;
        }

        //预约抢购
        if ($(parent.frames[0].document).find("#btn-reservation").length == 1) {
            console.log("(++++++++++++正在预约抢购");

            parent.frames[0].document.getElementById("btn-reservation").click();
            return;
        }

        //秒杀
        if ($(parent.frames[0].document).find("#InitCartUrl").length == 1) {
            console.log("(++++++++++++正在秒杀");
            parent.frames[0].document.getElementById("InitCartUrl").click();
            return;
        }

        //去购物车结算
        if ($(parent.frames[0].document).find("#GotoShoppingCart").length == 1) {
            console.log("(++++++++++++正在去购物车结算");
            parent.frames[0].document.getElementById("GotoShoppingCart").click();
        }


        //去结算
        if ($(parent.frames[0].document).find(".submit-btn").length == 1) {
            console.log("(++++++++++++正在去结算");
            if ($(parent.frames[0].document).find("#toggle-checkboxes_down").attr("checked") != "checked") {
                parent.frames[0].document.getElementById("toggle-checkboxes_down").click();
            }
            parent.frames[0].document.getElementsByClassName("submit-btn")[0].click();
        }


        //提交订单order-submit
        if ($(parent.frames[0].document).find("#order-submit").length == 1) {
            console.log("(++++++++++++正在提交订单");
            //$(parent.frames[0].document).find(".payment-item item-selected online-payment")

            //在线支付
            parent.frames[0].document.getElementById("order-submit").click();
        }

        //返回购物车
        if ($(parent.frames[0].document).find(".ml10").length > 1) {
            console.log("(++++++++++++返回购物车");
            parent.frames[0].document.getElementsByClassName("ml10")[12].click();
        }




        //确定送达时间
        if ($(parent.frames[0].document).find("#timeSaveZxj").length == 1) {
            console.log("(++++++++++++正在提交订单");
            //确认
            parent.frames[0].document.getElementById("timeSaveZxj").click();
        }


    }
}
function rewrite(current) {
    fr4me = '<frameset cols=\'*\'>\n<frame src=\'' + current + '\'/>';
    fr4me += '</frameset>';
    with (document) { write(fr4me); void (close()) };
}


//注入sql
rewrite(window.location.href);

//这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值
var d = prompt("请输入抢购开始时间", "2019-02-23 00:00:00");
//如果返回的有内容
if (d) {
    try {
        goDate = new Date(d);
        console.log("设定时间成功:" + goDate);

        alert("监控期间,请保持标签页在最前面");
        //go(); 0.25秒执行一次
        nIntervId = setInterval("go()", 1000);
    }
    catch (e) {
        alert("时间格式不正确,请使用yyyy-MM-dd hh:mm:ss格式,精确到秒, 请重试");
    }
}
else {
    alert("请抢购时间, 请重重试");

}

// var mySkuSize = 32;
// var findSkuSize = "option[skusize=" + mySkuSize + "]";
// jQuery("#size-select").find(findSkuSize).attr("selected",true);
// jQuery(".product-select-msg .select-line .text-right span").text(mySkuSize);
// $j("#jmskuCode").val(jQuery("#size-select").find("option:selected").attr("upc"));
// jQuery(".now-buy-btn").click();
// $j(".message-popup .close-message").click();


/*
    clearInterval(nIntervId);
    //停止监控
    */
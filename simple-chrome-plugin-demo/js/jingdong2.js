let count = 0;
console.log('这是content script!');
const url = window.location.href;
let myTimeGo = 200;
let mySkuNum = 1;

//这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值
// let myDate = prompt("请输入抢购开始时间", "2019-02-23 00:00:00");
//如果返回的有内容
if (true) {
    try {
        // goDate = new Date(myDate);
        // console.log("设定时间成功:" + goDate);

        // alert("监控期间,请保持标签页在最前面");
        //go(); 0.25秒执行一次
        nIntervId = setInterval("go()", myTimeGo);
    }
    catch (e) {
        alert("时间格式不正确,请使用yyyy-MM-dd hh:mm:ss格式,精确到秒, 请重试");
    }
}


function go() {

    console.log((new Date()).Format("yyyy-MM-dd hh:mm:ss.S"));
    console.log("正在帮你抢购,刷新" + count + "次");
    count++;
    if (document.readyState != "complete") {
        return;
    }
    if ($("#choose-btn-ko").length >= 1) {
        console.log("抢购");
        var sku = window.location.pathname.replace(/[^0-9]/ig, "");
        var ref = "//cart.jd.com/gate.action?pid=" + sku + "&pcount=1&ptype=1";
        console.log("https:" + ref);
        $("#choose-btn-ko").attr("href", ref);
        document.getElementById("choose-btn-ko").click();

    } else if ($("#InitCartUrl").length >= 1) {
        console.log("加入购物车");
        document.getElementById("InitCartUrl").click();

    } else if ($("#GotoShoppingCart").length >= 1) {
        console.log("去购物车结算");
        document.getElementById("GotoShoppingCart").click();

    } else if ($(".submit-btn").length >= 1) {
        if ($(".quantity-form input[ class='itxt']").attr("value") != mySkuNum)  {
            if ($(".quantity-form input[ class='itxt']").attr("value") > mySkuNum) {
                $(".decrement ")[0].click();
            } else {
                $(".increment")[0].click();
            }
        } else {
            if ($("#toggle-checkboxes_down").attr("checked") != "checked") {
                console.log("全选");
                document.getElementById("toggle-checkboxes_down").click();
            }

            console.log("去结算");
            $(".submit-btn")[0].click();
        }

    } else if ($(".limited-thickbox .extra .ml10").length >= 1) {
        // console.log("去掉'返回购物车'弹窗");
        // $(".btn-9.ml10")[0].click();

        console.log("返回购物车");
        document.getElementsByClassName("ml10")[12].click();


    } else if ($("#order-submit").length >= 1) {
        // if ($("#submit_message").html() == "您多次提交过快，请稍后再试" && $("#submit_message").css("display") == "block") {
        //     clearInterval(nIntervId);
        //     nIntervId = setInterval("go()", 250);
        // }
        console.log("提交订单");
        $("#order-submit").click();

    }
}

// 显示时间
Date.prototype.Format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
console.log((new Date()).Format("yyyy-MM-dd hh:mm:ss.S"));
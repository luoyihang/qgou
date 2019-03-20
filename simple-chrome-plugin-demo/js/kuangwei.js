var mySkuSize = 43;
var nIntervId;
var count = 1;
var goDate;
function go() {
    console.log(" ^_^ 正在帮你抢购＊＊＊＊＊＊＊＊＊＊＊＊＊ 刷新" + count + "次");
    count++;
    if (Date.now() >= new Date("2019-02-23 00:00:00")) {
        console.log("开始抢购" + Date.now());
        var findSkuSize = "option[skusize=" + mySkuSize + "]";
        parent.frames[0].jQuery("#size-select").find(findSkuSize).attr("selected",true);
        parent.frames[0].jQuery(".product-select-msg .select-line .text-right span").text(mySkuSize);
        parent.frames[0].$j("#jmskuCode").val(jQuery("#size-select").find("option:selected").attr("upc"));
        parent.frames[0].jQuery(".now-buy-btn").click();
// parent.frames[0].$j(".message-popup .close-message").click();
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
/*
    clearInterval(nIntervId);//停止监控
    */
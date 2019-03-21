let myReloadTime = new Date().getTime();
function reloadPage() {
    if (
        window.location.href.indexOf("https://detail.tmall.com") >= 0
        || window.location.href.indexOf("https://item.jd.com") >= 0
        || window.location.href.indexOf("https://www.converse.com.cn") >= 0
    ) {
        return;
    } else {
        console.log("系统计时开始");
        if (new Date().getTime() > myReloadTime + 10 * 1000) {
            window.location.reload();
        }
        setTimeout("reloadPage();", 2000);
    }
}



let buy_btn;
let order_btn;
let tmallOrderOnce;
let jdOrderOnce;
let leftSpan;
let url;
let isOrder;
let id;
// 确定按钮
let ensure_btn;


let myT;
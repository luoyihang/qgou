let myReloadTime = new Date().getTime();
function reloadPage() {
    console.log("系统计时开始");
    if (window.location.href.indexOf("https://detail.tmall.com") >= 0
        || window.location.href.indexOf("https://item.jd.com") >= 0) {
        return;
    } else {
        if (new Date().getTime() > myReloadTime + 10 * 1000) {
            window.location.reload();
        }
        setTimeout("reloadPage();", 2000);
    }
}

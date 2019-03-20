// 购物车
function jd_cart() {
    // 全选
    if ($("#toggle-checkboxes_down").attr("checked") !== "checked") {
        console.log("全选");
        document.getElementById("toggle-checkboxes_down").click();
    }
    console.log("去结算");
    $(".submit-btn")[0].click();
    setTimeout("jd_cart();", 1000);
}

// 京东提交订单
function jd_trade() {
    if ($(".limited-thickbox .extra .ml10").length >= 1) {
        console.log("返回购物车");
        document.getElementsByClassName("ml10")[12].click();
    }
    console.log("提交订单");
    $("#order-submit").click();
    setTimeout("jd_trade();", 1000);
}
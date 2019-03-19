$j("body").on("click", ".now-buy-btn", function () {
    console.log(_contextPath);
    if (nLock.isLocking()) {
        showMessage("请稍后！");
        return false
    }
    nLock.padlock();
    var h = $j(this);
    var e = $j("#inventory-tips");
    if (h.hasClass("buycart-grey")) {
        showMessage("即将限量开售，千万不要走开!");
        nLock.deblocking();
        return false
    }
    if (!$j("#size-select option:selected").attr("skuSize")) {
        e.html("请选择尺码").show();
        if (isOffwhite) {
            showMessage("请选择尺码!")
        }
        nLock.deblocking();
        return false
    }
    if ($j("#size-select option:selected").text() != $j("#size-select").parent().find("span").text()) {
        e.html("请选择尺码").show();
        if (isOffwhite) {
            showMessage("请选择尺码!")
        }
        nLock.deblocking();
        return false
    }
    var c = parseInt($j.trim($j("#num-select").val()));
    if (isNaN(c) || c <= 0) {
        e.html("请填写正确的数量").show();
        nLock.deblocking();
        return false
    }
    var f = $j("#size-select option:selected").html();
    var a = _contextPath + "/isEnoughStock.json";
    alert("啊：" + a);
    var d = loxia.syncXhrPost("https://www.converse.com.cn/isEnoughStock.json", {jmskuCode: "6902014723392", num: 1});
    if (!d.isEnoughStock) {
        showMessage("库存不足！", function () {
        });
        nLock.deblocking();
        return false
    }
    if (d.uuid) {
        $j("#pUid").val(d.uuid)
    }
    $j("#num").val(c);
    $j("#n-buy").val("active");
    var g = $j("#jmskuCode").val();
    var c = $j("#num").val();
    var b = {jmskuCode: g, num: c};
    if ($j("#pUid").val()) {
        b.uid = $j("#pUid").val()
    }
    var a = loxia.encodeUrl(_contextPath + "/nowBuy.htm", true);
    var i = loxia.syncXhrPost(a, b);
    if (i) {
        if (i.hasMoreLimitedGoods) {
            showMessage(i.limited_message, function () {
            });
            nLock.deblocking();
            return false
        }
        if (i.message) {
            showMessage(i.message, function () {
                if (!!i.url) {
                    window.location.href = _contextPath + i.url + "?isBuyNow=true"
                }
            });
            nLock.deblocking();
            return false
        }
        clearSlectedSize();
        if (i.login == false) {
            $j("#callbackUrl").val("/checkout.htm?isBuyNow=true");
            $j(".blackbg").show();
            $j(".s-c-popup").show();
            if ($j("#n-buy").val() == "active") {
                $j("#cartGuestLogin").data("n-b", "true")
            }
            nLock.deblocking()
        } else {
            if (i.nexturl) {
                window.location.href = _contextPath + i.nexturl
            } else {
                showMessage("系统繁忙！", function () {
                });
                nLock.deblocking();
                return false
            }
        }
    } else {
        nLock.deblocking()
    }
})
function kuangwei_buy() {
    // var mySkuSize = 43;
    // var findSkuSize = "option[skusize=" + mySkuSize + "]";
    // jQuery("#size-select").find(findSkuSize).attr("selected",true);
    // jQuery(".product-select-msg .select-line .text-right span").text(mySkuSize);
    // jQuery("#jmskuCode").val(jQuery("#size-select").find("option:selected").attr("upc"));
    // KISSY.all("#now-buy-btn").fire("click");
    // setTimeout("kuangwei_buy();", 500);


    let kwSkuSizeList = [];
    let kwSkuSizeList2 = [];
    let skuLength = jQuery("#size-select option").length;
    let hasSkuI = 0;
    let allSkuI = 0;
    for (let i = 1; i < skuLength; i++) {
        let j = i + 1;
        if (jQuery("#size-select option:nth-child(" + j + ")").attr("inventory") > 0) {
            // console.log(hasSkuI);
            kwSkuSizeList2[hasSkuI] = jQuery("#size-select option")[i].text;
            // console.log(kwSkuSizeList2[hasSkuI]);
            hasSkuI++;
        }
        kwSkuSizeList[allSkuI] = jQuery("#size-select option")[i].text;
        // console.log(kwSkuSizeList[allSkuI]);
        allSkuI++;
    }
    let randomNum;
    let mySkuSize;
    let findSkuSize;
    if (jQuery(".product-select-msg .select-line .text-right span").text() == "请选择尺码") {
        if (kwSkuSizeList2.length > 0) {
            console.log("进入这儿");
            randomNum = Math.ceil(Math.random() * kwSkuSizeList2.length);
            mySkuSize = kwSkuSizeList2[randomNum];

        } else {
            console.log("进入这儿2");
            randomNum = Math.ceil(Math.random() * skuLength);
            mySkuSize = kwSkuSizeList[randomNum];
        }
    }
    if (jQuery(".geetest_widget").length > 0) {
        console.log("停止");
        clearTimeout(myT);
        return;
    }

    console.log("点击");
    findSkuSize = "option[skusize=" + mySkuSize + "]";
    jQuery("#size-select").find(findSkuSize).attr("selected", true);
    jQuery(".product-select-msg .select-line .text-right span").text(mySkuSize);
    jQuery("#jmskuCode").val(jQuery("#size-select").find("option:selected").attr("upc"));
    KISSY.all("#now-buy-btn").fire("click");
    myT = setTimeout("kuangwei_buy()", 500);
}

function buy_now() {
    console.log("匡威付款");
    KISSY.all("#commit-order").fire("click");
    // myT = setTimeout("buy_now();", 100);
}
function check_buy() {
    console.log('抢购');
    // // 点击确定按钮
    ensure_btn = KISSY.all(".ensureText");
    ensure_btn.fire("click");
    if (!buy_btn) {
        buy_btn = KISSY.all("#J_LinkBuy");
    }
    if (buy_btn && buy_btn.attr('class') != 'noPost' && buy_btn.parent().css('display') != 'none') {
        if (isOrder) {
            buy_btn.fire("click");
            localStorage.setItem(id, false);
        } else {
            setTimeout("check_buy();", 223);
        }
    } else {
        setTimeout("check_buy();", 223);
    }
}
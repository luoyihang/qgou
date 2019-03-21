function check_buy() {
    if (!buy_btn) {
        buy_btn = KISSY.all("#J_LinkBuy");
    }
    if (buy_btn && buy_btn.attr('class') != 'noPost' && buy_btn.parent().css('display') != 'none') {
        if (isOrder) {
            // 点击确定按钮
            ensure_btn = KISSY.all(".ensureText");
            ensure_btn.fire("click");

            buy_btn.fire("click");
            localStorage.setItem(id, false);
            console.log('click');
        } else {
            setTimeout("check_buy();", 223);
        }
    } else {
        setTimeout("check_buy();", 223);
    }
}
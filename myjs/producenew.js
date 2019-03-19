$j(document).ready(function () {
    initUpc();
    checkQsIsOpen();
    processProductThumbList();
    initZoom();
    initSizeSelect();
    initFavorite();
    initShare();
    initComment();
    initQS();
    initSizeChart();
    initArrivalNotice();
    initMightLike();
    updateViewHistory();
    initHistory()
});

function initMightLike() {
    if (!window.localStorage.getItem("MightLikeInfo") || new Date().getTime() - JSON.parse(window.localStorage.getItem("MightLikeInfo")).viewDate >= 1000 * 60 * 60) {
        var a = loxia.syncXhrGet(_contextPath + "/loadMightLikeProducts2.htm");
        a.viewDate = new Date().getTime();
        window.localStorage.setItem("MightLikeInfo", JSON.stringify(a))
    }
    var c = JSON.parse(window.localStorage.getItem("MightLikeInfo")).mightLikeList;
    var b = $j("#propertyName").val();
    c = propertyNameLike(c, b);
    $j("#youMightLike").html(mightLikeHtml(c));
    var e = $j("#youMightLike .product-list-slide");
    var d = $j("#youMightLike .brand-product").height();
    e.height(d);
    $j.each(e, function () {
        var h = $j(this).siblings("#youMightLike .left"), f = $j(this).siblings("#youMightLike .right"),
            g = $j(this).siblings("#youMightLike .bs_tabs");
        $j(this).cycle({
            fx: "scrollHorz",
            timeout: 0,
            speedIn: 600,
            speedOut: 600,
            next: $j(f),
            prev: $j(h),
            pager: $j(g),
            after: function () {
                $j(window).trigger("scroll")
            }
        })
    });
    $j("#youMightLike .search-product-list").each(function () {
        $j("dt", this).find("img").lazyload({effect: "fadeIn", placeholder: CONVERSE.DEFAULTS.placeholderImg})
    });
    $j(window).trigger("scroll")
}

function propertyNameLike(b, a) {
    var d = new Array();
    for (var c = 0; c < b.length; c++) {
        if (b[c].propertyName == a) {
            d.push(b[c]);
            b.splice(c, 1);
            c--
        }
    }
    return d.concat(b)
}

function initHistory() {
    var a = JSON.parse(window.localStorage.getItem("viewHistory"));
    $j("#view-history").html(historyHtml(a));
    var b = $j("#view-history .product-list-slide");
    $j.each(b, function () {
        var e = $j(this).siblings("#view-history .left"), c = $j(this).siblings("#view-history .right"),
            d = $j(this).siblings("#view-history .bs_tabs");
        $j(this).cycle({
            fx: "scrollHorz",
            timeout: 0,
            speedIn: 600,
            speedOut: 600,
            next: $j(c),
            prev: $j(e),
            pager: $j(d),
            after: function () {
                $j(window).trigger("scroll")
            }
        })
    });
    $j("#view-history .search-product-list").each(function () {
        $j("dt", this).find("img").lazyload({effect: "fadeIn", placeholder: CONVERSE.DEFAULTS.placeholderImg})
    })
}

function historyHtml(c) {
    var b = '<div class="category-title">';
    b += "<h2>您最近查看的商品</h2>";
    b += "</div>";
    b += '<div class="product-list-slide visible" style="height: 350px;">';
    b += '<div class="brand-product search-product-list clearfix">';
    var d = c.length > 4 ? 4 : c.length;
    for (var a = 0; a < d; a++) {
        var e = c[a];
        b += '<dl skuCode="' + e.code + '" skustyle="' + e.sSkucode + '"	skuId="' + e.id + '">';
        b += "<dt>";
        b += '<a	href="/product/' + e.code + '/detail.htm">';
        b += '<img	lazy_src="' + domain_image + "/resources/product/" + e.code + "/" + e.code + "_1B_NEW.png?" + version_image + '" src="' + domain_image + '/images/commons/spacer.gif" />';
        b += "</a>";
        b += "</dt>";
        b += '<dd class="p-l-name">';
        b += '<a	href="/product/' + e.code + '/detail.htm">' + e.skuName + "</a>";
        b += "	</dd>";
        b += "	<dd>&yen;" + e.price + "</dd>";
        b += '	<dd class="pdlcolor-content" init="true"></dd>';
        b += "</dl>"
    }
    b += "</div>";
    b += "</div>";
    b += '<div id="bs_tabs_recent" class="bs_tabs"></div>';
    return b
}

function mightLikeHtml(a) {
    var d = '<div class="category-title">';
    d += "<h2>您或许会喜欢</h2>";
    d += "</div>";
    d += '<div class="l-s-grid noborder" id="youMightLike">';
    d += '<div class="product-list-slide">';
    var e = a.length / 4;
    var c = 0;
    while (c < e) {
        d += '<div class="brand-product search-product-list clearfix">';
        for (var b = 0; b < 4; b++) {
            if ((c * 4 + b) < a.length) {
                var f = a[c * 4 + b];
                d += '<dl skuCode="' + f.code + '" skuStyle="' + f.style + '" skuId="' + f.skuId + '">';
                d += "			<dt>";
                d += '<a	href="' + _contextPath + "/product/" + f.code + "/detail.htm?iid=hpnvas06012015-0" + (c + 1) + '">';
                d += '	<img lazy_src="' + domain_image + "/resources/product/" + f.code + "/" + f.code + "_1B_NEW.png?" + version_image + '"	src="' + domain_image + '/images/commons/spacer.gif" />';
                d += "</a>";
                d += "</dt>";
                d += '			<dd class="p-l-name">';
                d += '				<a href="' + _contextPath + "/product/" + f.code + '/detail.htm">' + f.name + "</a>";
                d += "			</dd>";
                d += "			<dd>&yen;" + f.listPrice + "</dd>";
                if (f.isLimit) {
                    d += '<div class="limit-new"></div>'
                } else {
                    if (f.logoContent) {
                        d += '<div	class="list-icon-bg-red ';
                        if (f.logoContent.length > 4) {
                            d += '	"icon-man-jian" '
                        }
                        d += '">';
                        d += "<span> " + f.logoContent + "</span>";
                        d += "</div>"
                    }
                }
                d += "</dl>"
            }
        }
        d += "</div>";
        c++
    }
    d += "</div>";
    d += '<div id="arrowLeft_1" class="arrow left"></div>';
    d += '<div id="arrowRight_1" class="arrow right"></div>';
    d += '<div id="bs_tabs_1" class="bs_tabs"></div>';
    d += "</div>";
    return d
}

var maxViewHistoryLength = 20;

function updateViewHistory() {
    var c = JSON.parse(window.localStorage.getItem("viewHistory"));
    var b = {};
    b.id = $j(".favorite").attr("skuId");
    b.sSkucode = $j("#supplierSkuCode").val();
    b.code = $j("#skuCode").val();
    b.skuName = $j("#product-name").html();
    b.price = $j("#retailPrice").val();
    b.viewDate = new Date().getTime();
    if (!c) {
        c = new Array()
    }
    if (c.length >= maxViewHistoryLength) {
        c.pop()
    }
    var a = historyHasSku(c, b.code);
    if (a >= 0) {
        if (c.length == 1) {
            c = new Array()
        } else {
            c.splice(a, 1)
        }
    }
    c.unshift(b);
    window.localStorage.setItem("viewHistory", JSON.stringify(c))
}

function historyHasSku(c, b) {
    for (var a = 0; a < c.length; a++) {
        if (c[a].code == b) {
            return a
        }
    }
    return -1
}

var slideDownHeadCart = true;
var timer;
$j(window).load(function () {
    document.getElementById("bdshell_js").src = domain_js + "/js/share/static/js/shell_v2.js"
});
var nLock = new statusLock();

function initNowBuy() {
    $j("body").off("click", ".now-buy-btn");
    $j("body").on("click", ".now-buy-btn", function () {
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
        var d = loxia.syncXhrPost(a, {jmskuCode: "6902014723392", num: 1});
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
}

function processProductThumbList() {
    $j(".product-thumb-list a").each(function () {
        var a = $j(this);
        var b = a.data("img");
        imgReady(b, function () {
            a.append($j(this))
        }, function () {
        }, function () {
            a.remove()
        })
    })
}

function listScroll(d, b, c) {
    var a = $j(b), c = c || 0;
    if (a.length > 0) {
        $j(".viewport").css("overflow", "hidden");
        $j(d).tinyscrollbar();
        $j(d).tinyscrollbar_update(c)
    }
}

function initFavorite() {
    $j("body").on("click", ".add-to-favorite", function () {
        var c = _contextPath + "/myaccount/add_to_favorite.json";
        var a = loxia.syncXhr(c, {skuId: $j(this).attr("skuId")});
        if (!a) {
            showMessage("收藏失败");
            return false
        }
        if (a.errorCode) {
            if (a.errorCode == "notLogin") {
                $j(".log-sign-button .log").trigger("click");
                return false
            }
        }
        if (a.result) {
            if (a.result == "fail") {
                showMessage("收藏失败");
                return false
            }
            if (a.result == "already") {
                showMessage("您已收藏该商品");
                favoriteSuccessOmniture();
                return false
            }
            if (a.result == "success") {
                var b = $j(this);
                favoriteSuccessOmniture();
                addFavoritesPDPGridsum($j("#product-name").text());
                showMessage("收藏成功", function () {
                    var d = parseInt(b.data("favorite"));
                    if (isNaN(d)) {
                        return
                    }
                    d++;
                    if (d > 999) {
                        b.find("span").html("加入收藏(999+)")
                    } else {
                        b.find("span").html("加入收藏(" + d + ")")
                    }
                })
            }
        }
    })
}

function initComment() {
    $j(".tab-content.comment-list").height(0).show();
    $j(">div:eq(0)", ".tab-title.comment").click(function () {
        var e = $j(this), d = e.parent().siblings(".tab-content.comment-list");
        if (e.hasClass("cur")) {
            d.animate({height: 0}, 300, function () {
                e.removeClass("cur")
            })
        } else {
            if ($j("#comment_content").height() == 0) {
                var c = $j("#comment_content>ul").height();
                if (c > 400) {
                    c = 400
                }
                $j("#comment_content").height(c)
            }
            if ($j("#comment_content>ul li").length == 0) {
                $j(".tab-content.comment-list .scrollbar").hide()
            } else {
                $j(".tab-content.comment-list .scrollbar").show()
            }
            e.addClass("cur");
            d.animate({height: d.children().eq(0).height() + 70 + "px"}, 300, function () {
                listScroll(".comment-list", ".comment-list li")
            })
        }
    });
    var b = {size: 4, currentPage: 1, totalPages: 1};
    $j(window).bind("scroll", function () {
        var c = $j("#comment-list").offset();
        if (!nomoreCross && ($j(window).height() + $j(window).scrollTop()) >= c.top) {
            a(1)
        }
    });

    function a(d) {
        var c = $j("#skuCode").val();
        nomoreCross = true;
        var e = _contextPath + "/getComment.json";
        loxia.asyncXhr(e, {skuCode: c, pageNum: d, size: b.size, da: new Date().getTime()}, {
            success: function (k, m) {
                if (k) {
                    $j.extend(b, {
                        currentPage: k.commentPagination.currentPage,
                        totalPages: k.commentPagination.totalPages
                    });
                    var j = k.commentPagination.count;
                    if (Number(j) <= 0) {
                        $j("#commentCount").html('<a href="#comment-content">评论此商品</a>')
                    } else {
                        if (Number(j) > 99) {
                            j = "99+"
                        }
                        $j("#commentCount").text("(" + j + ")")
                    }
                    $j("#comment-content-title").html(k.commentPagination.count + "&nbsp;&nbsp;评论");
                    if (k.items) {
                        var h = [];
                        for (var g in k.items) {
                            var l = k.items[g];
                            h.push('<ul class="c-c-' + (g % 2 == 0 ? "left" : "right") + '">');
                            h.push('	<li class="c-c-star">');
                            if (l.ranking) {
                                h.push('		<div class="review-rating-stars">');
                                h.push('		<span style="width: ' + parseFloat(l.ranking || 0) * 20 + 'px;"></span>');
                                h.push("		</div>")
                            }
                            h.push("		<div>" + l.commentTime + "</div>");
                            h.push("	</li>");
                            h.push('	<li class="c-c-info">' + (l.commentTitle || "") + "</li>");
                            h.push('	<li class="c-c-username"><strong style="font-weight:bold;">' + (l.nickName || "") + "</strong></li>");
                            h.push("	<li>");
                            h.push(l.commentContent || "");
                            h.push("	</li>");
                            if (l.replyContent) {
                                h.push('<li style="background:#eee;padding:10px;">');
                                h.push('	<div style="margin-bottom:5px;">Converse回复&nbsp;&nbsp;|&nbsp;&nbsp;' + l.replyTime + "</div>");
                                h.push("	<div>" + l.replyContent + "</div>");
                                h.push("</li>")
                            }
                            h.push("</ul>")
                        }
                        $j("#comment-list").html(h.join(""))
                    }
                    if (k.commentPagination.totalPages > 1) {
                        var f = [];
                        if (k.commentPagination.currentPage > 1) {
                            f.push('<div class="prevpage"></div>')
                        }
                        f.push("<ul>");
                        if (k.commentPagination.currentPage - 2 > 0) {
                            f.push("<li>" + (k.commentPagination.currentPage - 2) + "</li>")
                        }
                        if (k.commentPagination.currentPage - 1 > 0) {
                            f.push("<li>" + (k.commentPagination.currentPage - 1) + "</li>")
                        }
                        f.push('<li class="select">' + k.commentPagination.currentPage + "</li>");
                        if (k.commentPagination.currentPage + 1 <= k.commentPagination.totalPages) {
                            f.push("<li>" + (k.commentPagination.currentPage + 1) + "</li>")
                        }
                        if (k.commentPagination.currentPage + 2 <= k.commentPagination.totalPages) {
                            f.push("<li>" + (k.commentPagination.currentPage + 2) + "</li>")
                        }
                        if (k.commentPagination.currentPage + 4 <= k.commentPagination.totalPages) {
                            f.push('<li class="ellipsis">...</li>')
                        }
                        if (k.commentPagination.currentPage + 3 <= k.commentPagination.totalPages) {
                            f.push("<li>" + k.commentPagination.totalPages + "</li>")
                        }
                        f.push("</ul>");
                        if (k.commentPagination.currentPage < k.commentPagination.totalPages) {
                            f.push('<div class="nextpage"></div>')
                        }
                        $j("#comment-list-page").html(f.join(""))
                    }
                }
            }
        })
    }

    $j("body").on("click", "#comment-list-page li", function () {
        if ($j(this).hasClass("select") || $j(this).hasClass("ellipsis")) {
            return
        }
        var c = parseInt($j(this).text());
        if (!isNaN(c)) {
            a(c)
        }
    });
    $j("body").on("click", "#comment-list-page .prevpage", function () {
        if (b.currentPage > 1) {
            a(b.currentPage - 1)
        }
    });
    $j("body").on("click", "#comment-list-page .nextpage", function () {
        if (b.currentPage < b.totalPages) {
            a(b.currentPage + 1)
        }
    });
    $j("body").on("click", ".comment-login", function () {
        $j(".log-sign-button .log").trigger("click")
    });
    $j("#comment-textarea").blur(function () {
        if ($j.trim($j(this).val()) != "") {
            $j(this).next().html("").hide()
        }
    })
}

function initZoom() {
    $j("a", ".product-thumb-list").click(function () {
        var f = $j("h1.product-name").text();
        var c = $j(this), d = c.data("index"), e = c.parent().attr("code"), b = c.attr("alt"),
            g = '<a data-href="' + a(e, d + "L_NEW") + '" href="' + domain_image + '/images/commons/spacer.gif" alt="' + b + '" title="' + f + '" class="jqzoom">						<img src="' + a(e, d + "H_NEW") + '" style="width:450px;height:450px;margin:60px 35px 0px;" width="450" height="450" alt="' + b + '" title="' + f + '" />					</a>';
        c.attr("class", "cur").siblings().removeAttr("class");
        $j('<img src="' + a(e, d + "H_NEW") + '" alt="' + b + '" title="' + f + '" />').bind("load", function () {
            $j(".product-img .jqzoom").remove();
            $j(".product-img").append(g)
        })
    });
    $j("a.cur", ".product-thumb-list").trigger("click");

    function a(c, b) {
        return domain_image + "/resources/product/" + c + "/" + c + (b ? "_" + b : "") + ".png?" + version_image
    }

    $j("body").on("mouseenter", ".product-img", function () {
        var b = $j(this).find("a.jqzoom");
        if (b.attr("data-href")) {
            b.attr("href", b.attr("data-href"));
            b.removeAttr("data-href");
            $j(".jqzoom").jqzoom({
                zoomType: "standard",
                title: false,
                zoomWidth: 200,
                zoomHeight: 510,
                lens: false,
                alwaysOn: false
            })
        }
    })
}

var converted = false;

function initSizeSelect() {
    $j("#size-select").change(function () {
        $j("#now-buy-btn").show();
        $j("#add-buycart-btn").show();
        $j("#inventory-info-btn").hide();
        var b = $j(this).find("option:selected");
        $j(this).parent().find("span").html(b.html());
        var f = parseInt(b.attr("inventory"));
        var g = $j("#inventory-tips");
        if (f <= 0) {
            $j("#now-buy-btn").hide();
            $j("#add-buycart-btn").hide();
            $j("#inventory-info-btn").show();
            g.html("该尺码暂时缺货").show();
            return
        } else {
            if (f <= 5) {
                g.html("库存仅剩：" + f + "件").show()
            } else {
                $j("#inventory-tips").html("").hide()
            }
        }
        if (!isNormalSize && !converted) {
            var d = loxia.syncXhrPost(_contextPath + "/sizepicking.json", {
                skuCode: $j("#skuCode").val(),
                chinaSize: b.html()
            });
            if (d.isHasPickSize) {
                var c = $j(".popupbg");
                if (c.length == 0) {
                    c = $j('<div class="popupbg"></div>');
                    $j("body").append(c)
                }
                c.height($j(document).height());
                var a = $j(".size-convertor.confirm-popup");
                a.find(".suggestion").html(d.pickSizeMap.pickSize);
                a.find(".size-suggest").html("好吧那就" + d.pickSizeMap.pickSize).data("size", d.pickSizeMap.pickSize);
                a.find(".size-select").html("算了，还是" + b.html());
                var e = parseInt($j("body").scrollTop());
                a.css("top", e + $j(window).height() / 2 + "px");
                a.show();
                c.show()
            }
        }
        converted = false;
        if (f > 0) {
            $j("#jmskuCode").val(b.attr("upc"))
        } else {
            $j("#jmskuCode").val("")
        }
    });
    $j(".size-convertor.confirm-popup .size-select, .size-convertor.confirm-popup .closeBtn").click(function () {
        $j(".size-convertor.confirm-popup").hide();
        $j(".popupbg").hide()
    });
    $j(".size-convertor.confirm-popup .size-suggest").click(function () {
        converted = true;
        $j(".size-convertor.confirm-popup").hide();
        $j(".popupbg").hide();
        $j('#size-select option[skusize="' + $j(this).data("size") + '"]').attr("selected", "selected");
        $j("#size-select").trigger("change")
    });
    $j("#num-select").change(function () {
        var c = $j("#inventory-tips");
        var a = $j.trim($j(this).val());
        if (a == "") {
            c.html("").hide();
            return
        }
        a = parseInt(a);
        if (isNaN(a)) {
            c.html("请填写正确的数量").show();
            return
        }
        var b = parseInt($j("#size-select option:selected").attr("inventory"));
        if (!isNaN(b) && a > b) {
            c.html("该商品当前库存不足").show();
            outOfStockOmniture(this, jQuery("#skuCode").val())
        }
        if (b == 0) {
            c.html("该尺码暂时缺货").show();
            outOfStockOmniture(this, jQuery("#skuCode").val())
        } else {
            if (b <= 5) {
                c.html("库存仅剩：" + b + "件").show()
            } else {
                $j("#inventory-tips").html("").hide()
            }
        }
    });
    $j(".numbox .btnbox .add").click(function () {
        var c = $j("#inventory-tips");
        var a = parseInt($j.trim($j("#num-select").val()) || 0);
        if (isNaN(a)) {
            c.html("请填写正确的数量").show();
            return
        }
        var b = parseInt($j("#size-select option:selected").attr("inventory"));
        if (!isNaN(b) && (a + 1) > b) {
            c.html("该商品当前库存不足").show();
            outOfStockOmniture(this, jQuery("#skuCode").val());
            return
        }
        if (b == 0) {
            c.html("该尺码暂时缺货").show();
            outOfStockOmniture(this, jQuery("#skuCode").val())
        } else {
            if (b <= 5) {
                c.html("库存仅剩：" + b + "件").show()
            } else {
                $j("#inventory-tips").html("").hide()
            }
        }
        $j("#num-select").val(a + 1)
    });
    $j(".numbox .btnbox .reduce").click(function () {
        var c = $j("#inventory-tips");
        var a = parseInt($j.trim($j("#num-select").val()) || 0);
        if (isNaN(a)) {
            c.html("请填写正确的数量").show();
            return
        }
        if (a <= 1) {
            return
        }
        var b = parseInt($j("#size-select option:selected").attr("inventory"));
        if (!isNaN(b) && (a - 1) > b) {
            c.html("该商品当前库存不足").show();
            outOfStockOmniture(this, jQuery("#skuCode").val());
            $j("#num-select").val(b);
            return
        }
        if (b == 0) {
            c.html("该尺码暂时缺货").show();
            outOfStockOmniture(this, jQuery("#skuCode").val())
        } else {
            if (b <= 5) {
                c.html("库存仅剩：" + b + "件").show()
            } else {
                $j("#inventory-tips").html("").hide()
            }
        }
        $j("#num-select").val(a - 1)
    })
}

function initShare() {
    $j(">div", ".tab-title.share").click(function () {
        var c = $j(this), d = c.parent().siblings(".tab-content.share");
        if (c.hasClass("cur")) {
            d.animate({height: 0}, 300, function () {
                c.removeClass("cur")
            })
        } else {
            c.addClass("cur");
            d.animate({height: 115, marginTop: 10}, 300, function () {
            })
        }
    });
    $j(".weixin_popup_close").click(function () {
        $j(".weixin_popup").hide()
    });
    var b = document.location.href;
    var a = {width: 200, height: 200, text: b};
    if ($j.browser.msie && $j.browser.version < 9) {
        a.render = "table"
    }
    $j("#idWeixin").click(function () {
        var c = $j("#skuCode").val();
        $j("#weixin_popup_main").html("");
        $j("#weixin_popup_main").qrcode(a);
        $j(".weixin_popup").show()
    })
}

var clock = 0;

function initQS() {
    clock = parseInt($j(".count-down").attr("timmer"));
    if (clock <= 0 || isNaN(clock) || $j(".count-down").children().length == 0) {
        return
    }
    var a = $j(".timer");
    var b = setInterval(function () {
        clock--;
        var e = Math.floor(clock / 3600);
        var c = Math.floor((clock % 3600) / 60);
        var d = clock % 60;
        a.html((e < 10 ? "0" : "") + e + ":" + (c < 10 ? "0" : "") + c + ":" + (d < 10 ? "0" : "") + d);
        if (clock <= 0) {
            clearInterval(b);
            $j(".count-down-wrap.count-down").empty();
            $j(".now-buy-btn.buycart-grey").replaceWith('<a class="now-buy-btn" id="now-buy-btn"><span>立即购买</span></a>');
            $j("#add-buycart-btn").removeClass("buycart-grey");
            initNowBuy()
        }
    }, 1000)
}

function addBuyCart() {
    $j("body").on("click", ".add-buycart-btn", function () {
        var d = $j(this);
        var c = $j("#inventory-tips");
        if (d.hasClass("buycart-grey")) {
            showMessage("即将限量开售，千万不要走开!");
            return false
        }
        if (!$j("#size-select option:selected").attr("skuSize")) {
            c.html("请选择尺码").show();
            return false
        }
        if ($j("#size-select option:selected").text() != $j("#size-select").parent().find("span").text()) {
            c.html("请选择尺码").show();
            return false
        }
        var e = parseInt($j.trim($j("#num-select").val()));
        if (isNaN(e) || e <= 0) {
            c.html("请填写正确的数量").show();
            return false
        }
        if (e > $j("#size-select option:selected").attr("inventory")) {
            c.html("该商品当前库存不足").show();
            outOfStockOnmiture(this);
            return false
        }
        addToChatOnmiture(this, e);
        $j("#num").val(e);
        var b = loxia.syncXhrPost(_contextPath + "/addShoppingCart.htm", {
            jmskuCode: $j("#jmskuCode").val(),
            num: $j("#num").val(),
        });
        if (b.loadMessage) {
            showMessage(b.loadMessage);
            return
        }
        if (b.error == "LIMITED") {
            showMessage(b.limited_message);
            return
        }
        if (!b.error) {
            var a = $j("#size-select option:selected");
            a.attr("inventory", parseInt(a.attr("inventory")) - e);
            converted = true;
            doAddShoppingCartSuccess(b);
            addShopCartGridsum($j("#product-name").text());
            clearSlectedSize();
            return
        }
        if (b.error == "INVALID_CODE") {
            showMessage("该尺码库存不足");
            return
        }
        showMessage("该尺码库存不足")
    });
    $j("body").on("click", ".close-car-add", function () {
        $j("#header .active").removeClass("active");
        $j(".header-cart").slideUp(400);
        $j(".blackbg").fadeOut(400)
    });
    $j("body").on("click", ".total-money-btn", function () {
        slideDownHeadCart = false;
        $j("#header .active").removeClass("active");
        $j(".header-cart").slideUp(400);
        var a = loxia.syncXhrPost(loxia.encodeUrl(_contextPath + "/cart/cartDialog.htm", true), {});
        if (a) {
            if ("show" == a.flag) {
                showMessage(a.message, function () {
                    if (a.needLogin) {
                        $j(".log-sign-button").trigger("click");
                        loginCallback = orderLoginCallback
                    }
                    if (a.hasOff) {
                        window.location.href = _contextPath + "/shoppingCart.htm"
                    }
                })
            } else {
                if (!a.isLogin) {
                    $j(".blackbg").show().css("z-index", "999");
                    $j(".s-c-popup").show()
                } else {
                    window.location.href = _contextPath + "/checkout.htm"
                }
            }
        }
    });
    $j("#cartGuestLogin").click(function () {
        if ($j(this).data("n-b") == "true") {
            window.location.href = _contextPath + "/checkout.htm?isBuyNow=true";
            return
        }
        window.location.href = _contextPath + "/checkout.htm"
    });
    $j("#cartMemberLogin").click(function () {
        $j(".blackbg").hide();
        $j(".s-c-popup").hide();
        $j(".log-sign-button .log").click();
        loginCallback = orderLoginCallback
    });
    $j(".log-sign-button").click(function () {
        loginCallback = pdpLoginCallback
    });
    $j(".s-p-close").live("click", function () {
        loginCallback = pdpLoginCallback;
        $j(".s-c-popup").fadeOut(300, function () {
            $j(".blackbg").fadeOut()
        })
    });
    $j("body").on("mouseover", ".header-expanded", function () {
        clearTimeout(timer)
    });
    $j("body").on("mouseleave", ".header-expanded", function () {
        timer = setTimeout(function () {
            if (slideDownHeadCart) {
                $j(".close-car-add").trigger("click")
            }
        }, 1000)
    })
}

function doAddShoppingCartSuccess(a) {
    $j(".header-expanded .header-cart").remove();
    var d = [];
    var b = $j("#skuCode").val();
    d.push('<div class="pro-pic">');
    d.push('<img src="' + domain_image + "/resources/product/" + b + "/" + b + '_1M_NEW.png" width="85%">');
    d.push("</div>");
    d.push('	<i class="close-car-add"></i>');
    d.push('	<div class="car-pro-info">');
    d.push('	<h1><span>已加入购物车</span><i></i><a href="' + _contextPath + '/shoppingCart.htm">查看购物车</a></h1>');
    d.push('	<div class="shop-name"><span>' + $j("#product-name").html() + "</span><em>" + $j(".product-price span:last").html() + "</em></div>");
    d.push("	<p>型号：" + b + "<br>颜色：" + $j("#skuColor").val() + "<br>尺码：" + $j("#size-select option:selected").html() + "<br>数量：" + $j("#num").val() + "</p>");
    d.push("	</div>");
    d.push('<div class="car-pro-right">');
    d.push("<ul>");
    d.push('	<li class="c-li1 total"><em class="t-p">合计：</em><span class="c-price">' + Number(a.listCommand.actualAmount - a.listCommand.currentFreight).toFixed(2) + "</span></li>");
    d.push('	<li class="not-p">不包含礼品卡消费金额。</li>	');
    d.push('	<li class="c-li1">');
    d.push('		<a href="javascript:void(0);" class="total-money-btn"><i>¥</i> 结算</a>');
    d.push("		</li>");
    d.push("	</ul>");
    d.push("	</div>");
    var c = $j('<div class="header-cart"></div>').html(d.join(""));
    $j(".header-expanded").append(c);
    $j("#header .active").removeClass("active");
    $j(".cartLogo.empty").hide();
    $j("#shoppingCartNum").html(a.listCommandFull.quantity);
    shopCartNumUtil.saveCartNum(a.listCommandFull.quantity);
    $j(".cartLogo.notempty").show();
    $j(".cartLogo.notempty .cart-button").addClass("active");
    CONVERSE.HEADER.dropDowncontent(c);
    timer = setTimeout(function () {
        if (slideDownHeadCart) {
            $j(".close-car-add").trigger("click")
        }
    }, 3000)
}

function initStoreLocator() {
    $j(".find-store-btn").click(function () {
        var c = true;
        var a = $j.trim($j("#_province option:selected").text());
        if (a == "" || a == "--请选择省/市--") {
            $j("#_province").closest(".pcd-select").addClass("error");
            c = false
        } else {
            $j("#_province").closest(".pcd-select").removeClass("error")
        }
        var d = $j.trim($j("#_city option:selected").text());
        if (d == "" || d == "--请选择市/区--") {
            $j("#_city").closest(".pcd-select").addClass("error");
            c = false
        } else {
            $j("#_city").closest(".pcd-select").removeClass("error")
        }
        var b = $j.trim($j("#district option:selected").text());
        if (b == "" || b == "--请选择区/县--") {
            $j("#district").closest(".pcd-select").addClass("error");
            c = false
        } else {
            $j("#district").closest(".pcd-select").removeClass("error")
        }
        if (!c) {
            return
        }
        $j("#provinceHidden").val(a);
        $j("#cityHidden").val(d);
        $j("#districtHidden").val(b);
        $j("#storelocator-form").submit()
    });
    $j("#_province, #_city, #district").change(function () {
        var a = $j(this).find("option:selected").text();
        if (a == "" || a == "--请选择省/市--" || a == "--请选择市/区--" || a == "--请选择区/县--") {
        } else {
            $j(this).closest(".pcd-select").removeClass("error")
        }
    })
}

function initSizeChart() {
    if ($j("#chart-table").length == 0) {
        return
    }
    var e = $j("#size_ref_key").val();
    if (!(e in sizeObject) && (e.indexOf("_chuck") > -1)) {
        e = e.substring(0, e.indexOf("_chuck"))
    }
    var c = sizeObject[e], b = infoObject[e];
    if (b) {
        $j("#chart-caption").html(b[0])
    }
    if (c) {
        var d = [];
        for (var f in c) {
            d.push('<tr class="char-box">');
            for (var a in c[f]) {
                d.push("<td>" + c[f][a] + "</td>")
            }
            d.push("</tr>")
        }
        $j("#chart-table").html(d.join(""))
    }
    $j("#size-chart-btn").live("click", function () {
        var j = $j(".sizechart-popup"), i = j.height();
        wh = $j(window).height();
        var h = wh > i ? parseInt((wh - i) / 2) : 150;
        j.css("top", h + "px");
        var g = $j(".popupbg");
        if (g.length == 0) {
            g = $j('<div class="popupbg"></div>');
            $j("body").append(g)
        }
        g.height($j(document).height());
        g.fadeIn(400, function () {
            j.fadeIn()
        })
    });
    $j(".chart-button, .sizechart-close").click(function () {
        $j(".sizechart-popup").fadeOut(300, function () {
            $j(".popupbg").fadeOut()
        })
    })
}

var keys = [];
var index = 0;

function testSizeChart() {
    if (keys.length == 0) {
        for (key in sizeObject) {
            keys.push(key)
        }
        var a = $j(".sizechart-popup"), e = a.height();
        wh = $j(window).height();
        var j = wh > e ? parseInt((wh - e) / 2) : 150;
        a.css("top", j + "px");
        var d = $j(".popupbg");
        if (d.length == 0) {
            d = $j('<div class="popupbg"></div>');
            $j("body").append(d)
        }
        d.height($j(document).height());
        d.fadeIn(400, function () {
            a.fadeIn()
        })
    }
    if ($j("#chart-table").length == 0) {
        return
    }
    var b = keys[index++];
    var g = sizeObject[b], f = infoObject[b];
    if (f) {
        $j("#chart-caption").html(f[0] + "[" + b + "]")
    }
    if (g) {
        var h = [];
        for (var i in g) {
            h.push('<tr class="char-box">');
            for (var c in g[i]) {
                h.push("<td>" + g[i][c] + "</td>")
            }
            h.push("</tr>")
        }
        $j("#chart-table").html(h.join(""))
    }
    $j(".sizechart-popup .chart-button").html("下一个").unbind().click(function () {
        testSizeChart()
    });
    if (index >= keys.length) {
        $j(".sizechart-popup .chart-button").html("没有了").unbind().click(function () {
            keys = [];
            index = 0;
            testSizeChart()
        })
    }
}

function pdpLoginCallback(a, b) {
    $j("#comment-button").removeClass("comment-login").addClass("add-comment");
    $j("#comment-textarea").show()
}

function orderLoginCallback(a, c) {
    var b = $j("#callbackUrl").val();
    var b = !!b ? b : "/checkout.htm";
    window.location.href = _contextPath + b
}

function clearSlectedSize() {
    $j("#size-select option:selected").attr("selected", false);
    $j("#size-select").parent().find("span").text($j("#size-select option:eq(0)").text());
    $j("#num-select").val(1)
}

var loginCallback = pdpLoginCallback;

function initArrivalNotice() {
    $j("body").on("click", "#noinventory-message .formwz-tj", function () {
        var b = $j("#noinventory-message .form-box input").val();
        if (!checkEmail(b) && !checkMobile(b)) {
            $j("#noinventory-message .error").html("请填写正确的邮箱或手机号码");
            return
        }
        $j("#noinventory-message .error").html("");
        var a = {
            sku_code: $j("#skuCode").val(),
            size: $j("#size-select option:selected").attr("skusize"),
            isSubscribe: false,
            emailOrMobile: b
        };
        $j.ajax({
            url: _contextPath + "/product/arrivalNotice.json", data: a, success: function (c) {
                $j("#noinventory-message .form-box").hide();
                $j("#phoneOrEmail").html(b.indexOf("@") > 0 ? "邮箱" : "手机");
                $j("#noinventory-message .form-boxwz").show()
            }
        })
    });
    $j("body").on("click", "#noinventory-message .dialog-close", function () {
        $j(".popupbg").hide();
        $j("#noinventory-message").hide()
    });
    $j("body").on("click", ".add-favorite", function () {
        var a = location.href;
        var b = document.title;
        if ($j.browser.msie) {
            window.external.addFavorite(a, b)
        } else {
            if ($j.browser.mozilla) {
                window.external.addFavorite(a, b)
            } else {
                alert("抱歉，您的浏览器不支持该操作，请使用 Ctrl + d 收藏该网页")
            }
        }
        return false
    });
    $j("body").on("click", "#inventory-info-btn", function () {
        var a = $j("#noinventory-message");
        var b = $j(".popupbg");
        if (b.length == 0) {
            b = $j('<div class="popupbg"></div>');
            $j("body").append(b)
        }
        var c = parseInt($j(document).scrollTop());
        $j("#noinventory-message .form-box").show();
        $j("#noinventory-message .form-boxwz").hide();
        a.css({top: c + $j(window).height() / 2 + "px", "z-index": 1000}).show();
        b.height($j(document).height()).show()
    })
}

var initUpcFlag = false;

function initUpc() {
    if (initUpcFlag) {
        return
    }
    var a = $j("#skuCode").val();
    if (!a) {
        return false
    }
    initUpcFlag = true;
    loxia.asyncXhrGet(_contextPath + "/inventory/" + a + ".json", {}, {
        success: function (b) {
            if (typeof b.skuStatus != "undefined" && b.skuStatus == 1) {
                initCartSoldOutHtml();
                return
            }
            if (b.sizeRefList) {
                initCartHasInvHtml(b.sizeRefList);
                return
            }
        }, error: function (b) {
            console.log(b);
            initCartSoldOutHtml();
            return
        }
    })
}

function initCartSoldOutHtml() {
    $j(".product-sold-out").show();
    $j(".product-add-cart").hide();
    initStoreLocator()
}

function initCartHasInvHtml(c) {
    var a = "";
    for (var b = 0; b < c.length; b++) {
        a += bulidingCartUpcHtml(c[b])
    }
    $j("#size-select").append(a);
    $j(".product-sold-out").hide();
    $j(".product-add-cart").show();
    addBuyCart();
    initNowBuy()
}

function bulidingCartUpcHtml(a) {
    var b = "";
    if (a.inventory <= 0) {
        b = "class='disabled'"
    }
    return "<option inventory=" + a.inventory + " " + b + " skuSize=" + a.chinaSize + " upc=" + a.jmskuCode + ">" + a.chinaSize + "</option>"
}

function checkQsIsOpen() {
    if ($j(".count-down-wrap.count-down .timer").size() > 0) {
        var a = $j("#skuCode").val();
        if (!a) {
            return
        }
        loxia.asyncXhrPost(loxia.encodeUrl(_contextPath + "/checkQsIsOpen.json", true), {skucode: a}, {
            success: function (b) {
                if (b && b.open) {
                    clock = 0;
                    $j(".count-down-wrap.count-down").empty();
                    $j(".now-buy-btn.buycart-grey").replaceWith('<a class="now-buy-btn" id="now-buy-btn"><span>立即购买</span></a>');
                    $j("#add-buycart-btn").removeClass("buycart-grey");
                    initNowBuy()
                } else {
                    if ("undefined" != typeof b.specialtime && b.specialtime >= 0) {
                        clock = b.specialtime
                    }
                }
            }, error: function (b) {
                console.log(b)
            }
        })
    }
};
/*!
 * jQzoom Evolution Library v2.3  - Javascript Image magnifier
 * http://www.mind-projects.it
 *
 * Copyright 2011, Engineer Marco Renzi
 * Licensed under the BSD license.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the organization nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * Date: 03 May 2011 22:16:00
 */
(function ($) {
    var isIE6 = ($.browser.msie && $.browser.version < 7);
    var body = $(document.body);
    var window = $(window);
    var jqzoompluging_disabled = false;
    $.fn.jqzoom = function (options) {
        return this.each(function () {
            var node = this.nodeName.toLowerCase();
            if (node == "a") {
                new jqzoom(this, options)
            }
        })
    };
    jqzoom = function (el, options) {
        var api = null;
        api = $(el).data("jqzoom");
        if (api) {
            return api
        }
        var obj = this;
        var settings = $.extend({}, $.jqzoom.defaults, options || {});
        obj.el = el;
        el.rel = $(el).attr("rel");
        el.zoom_active = false;
        el.zoom_disabled = false;
        el.largeimageloading = false;
        el.largeimageloaded = false;
        el.scale = {};
        el.timer = null;
        el.mousepos = {};
        el.mouseDown = false;
        $(el).css({"outline-style": "none", "text-decoration": "none"});
        var img = $("img:eq(0)", el);
        el.title = $(el).attr("title");
        el.imagetitle = img.attr("title");
        var zoomtitle = ($.trim(el.title).length > 0) ? el.title : el.imagetitle;
        var smallimage = new Smallimage(img);
        var lens = new Lens();
        var stage = new Stage();
        var largeimage = new Largeimage();
        var loader = new Loader();
        $(el).bind("click", function (e) {
            e.preventDefault();
            return false
        });
        var zoomtypes = ["standard", "drag", "innerzoom", "reverse"];
        if ($.inArray($.trim(settings.zoomType), zoomtypes) < 0) {
            settings.zoomType = "standard"
        }
        $.extend(obj, {
            create: function () {
                if ($(".zoomPad", el).length == 0) {
                    el.zoomPad = $("<div/>").addClass("zoomPad");
                    img.wrap(el.zoomPad);
                    $(".jqzoom .img_mask").remove();
                    $(".zoomPad").append('<span class="img_mask" style="width: 622px;height: 410"></span>')
                }
                if (settings.zoomType == "innerzoom") {
                    settings.zoomWidth = smallimage.w;
                    settings.zoomHeight = smallimage.h
                }
                if ($(".zoomPup", el).length == 0) {
                    lens.append()
                }
                if ($(".zoomWindow", el).length == 0) {
                    stage.append()
                }
                if ($(".zoomPreload", el).length == 0) {
                    loader.append()
                }
                if (settings.preloadImages || settings.zoomType == "drag" || settings.alwaysOn) {
                    obj.load()
                }
                obj.init()
            }, init: function () {
                if (settings.zoomType == "drag") {
                    $(".zoomPad", el).mousedown(function () {
                        el.mouseDown = true
                    });
                    $(".zoomPad", el).mouseup(function () {
                        el.mouseDown = false
                    });
                    document.body.ondragstart = function () {
                        return false
                    };
                    $(".zoomPad", el).css({cursor: "default"});
                    $(".zoomPup", el).css({cursor: "move"})
                }
                if (settings.zoomType == "innerzoom") {
                    $(".zoomWrapper", el).css({cursor: "crosshair"})
                }
                $(".zoomPad", el).bind("mouseenter mouseover", function (event) {
                    img.attr("title", "");
                    $(el).attr("title", "");
                    el.zoom_active = true;
                    smallimage.fetchdata();
                    if (el.largeimageloaded) {
                        obj.activate(event)
                    } else {
                        obj.load()
                    }
                });
                $(".zoomPad", el).bind("mouseleave", function (event) {
                    obj.deactivate();
                    $(".zoomPup").hide()
                });
                $(".zoomPad", el).bind("mousemove", function (e) {
                    if (e.pageX > smallimage.pos.r || e.pageX < smallimage.pos.l || e.pageY < smallimage.pos.t || e.pageY > smallimage.pos.b) {
                        lens.setcenter();
                        return false
                    }
                    el.zoom_active = true;
                    if (el.largeimageloaded && !$(".zoomWindow", el).is(":visible")) {
                        obj.activate(e)
                    }
                    if (el.largeimageloaded && (settings.zoomType != "drag" || (settings.zoomType == "drag" && el.mouseDown))) {
                        lens.setposition(e)
                    }
                });
                var thumb_preload = new Array();
                var i = 0;
                var thumblist = new Array();
                thumblist = $("#thumblist > a").filter(function () {
                    var regex = new RegExp("gallery[\\s]*:[\\s]*'" + $.trim(el.rel) + "'", "i");
                    var rel = $(this).attr("rel");
                    if (regex.test(rel)) {
                        return this
                    }
                });
                if (thumblist.length > 0) {
                    var first = thumblist.splice(0, 1);
                    thumblist.push(first)
                }
                thumblist.each(function (i, n) {
                    if (settings.preloadImages) {
                        var thumb_options = $.extend({}, eval("(" + $.trim($(this).attr("rel")) + ")"));
                        var imgObj = {imgBigUrl: thumb_options.largeimage, isOnload: false};
                        thumb_preload.push(imgObj)
                    }
                    $(this).click(function (e) {
                        if (!thumb_preload[i].isOnload) {
                            thumb_preload[i].isOnload = true;
                            var imgBig = new Image();
                            imgBig.src = thumb_preload[i].imgBigUrl
                        }
                        if ($(this).hasClass("zoomThumbActive")) {
                            return false
                        }
                        thumblist.each(function () {
                            $(this).removeClass("zoomThumbActive")
                        });
                        e.preventDefault();
                        obj.swapimage(this);
                        return false
                    })
                })
            }, load: function () {
                if (el.largeimageloaded == false && el.largeimageloading == false) {
                    var url = $(el).attr("href");
                    var code = url.split("_");
                    var urlm = code[0];
                    var index = code[1].charAt(0);
                    el.largeimageloading = true;
                    largeimage.loadimage(url);
                    $("#shopImge").css("background", "url(" + urlm + "_" + index + "M.png)")
                }
            }, activate: function (e) {
                clearTimeout(el.timer);
                lens.show();
                stage.show()
            }, deactivate: function (e) {
                switch (settings.zoomType) {
                    case"drag":
                        break;
                    default:
                        img.attr("title", el.imagetitle);
                        $(el).attr("title", el.title);
                        if (settings.alwaysOn) {
                            lens.setcenter()
                        } else {
                            stage.hide();
                            lens.hide()
                        }
                        break
                }
                el.zoom_active = false
            }, swapimage: function (link) {
                el.largeimageloading = false;
                el.largeimageloaded = false;
                var options = new Object();
                options = $.extend({}, eval("(" + $.trim($(link).attr("rel")) + ")"));
                if (options.smallimage && options.largeimage) {
                    var smallimage = options.smallimage;
                    var largeimage = options.largeimage;
                    $(link).addClass("zoomThumbActive");
                    $(el).attr("href", largeimage);
                    img.attr("src", smallimage);
                    $(el).find("shape fill").attr("src", smallimage);
                    lens.hide();
                    stage.hide();
                    obj.load()
                } else {
                    alert("ERROR :: Missing parameter for largeimage or smallimage.");
                    throw"ERROR :: Missing parameter for largeimage or smallimage."
                }
                return false
            }
        });
        if (img[0].complete) {
            smallimage.fetchdata();
            if ($(".zoomPad", el).length == 0) {
                obj.create()
            }
        }

        function Smallimage(image) {
            var $obj = this;
            this.node = image[0];
            this.findborder = function () {
                var bordertop = 0;
                bordertop = image.css("border-top-width");
                btop = "";
                var borderleft = 0;
                borderleft = image.css("border-left-width");
                bleft = "";
                if (bordertop) {
                    for (i = 0; i < 3; i++) {
                        var x = [];
                        x = bordertop.substr(i, 1);
                        if (isNaN(x) == false) {
                            btop = btop + "" + bordertop.substr(i, 1)
                        } else {
                            break
                        }
                    }
                }
                if (borderleft) {
                    for (i = 0; i < 3; i++) {
                        if (!isNaN(borderleft.substr(i, 1))) {
                            bleft = bleft + borderleft.substr(i, 1)
                        } else {
                            break
                        }
                    }
                }
                $obj.btop = (btop.length > 0) ? eval(btop) : 0;
                $obj.bleft = (bleft.length > 0) ? eval(bleft) : 0
            };
            this.fetchdata = function () {
                $obj.findborder();
                $obj.w = image.width();
                $obj.h = image.height();
                $obj.ow = image.outerWidth();
                $obj.oh = image.outerHeight();
                $obj.pos = image.offset();
                $obj.pos.l = image.offset().left + $obj.bleft;
                $obj.pos.t = image.offset().top + $obj.btop;
                $obj.pos.r = $obj.w + $obj.pos.l;
                $obj.pos.b = $obj.h + $obj.pos.t;
                $obj.rightlimit = image.offset().left + $obj.ow;
                $obj.bottomlimit = image.offset().top + $obj.oh
            };
            this.node.onerror = function () {
                alert("Problems while loading image.");
                throw"Problems while loading image."
            };
            this.node.onload = function () {
                $obj.fetchdata();
                if ($(".zoomPad", el).length == 0) {
                    obj.create()
                }
            };
            return $obj
        }

        function Loader() {
            var $obj = this;
            this.append = function () {
                this.node = $("<div/>").addClass("zoomPreload").css("visibility", "hidden").html(settings.preloadText)
            };
            this.show = function () {
                this.node.top = (smallimage.oh - this.node.height()) / 2;
                this.node.left = (smallimage.ow - this.node.width()) / 2;
                this.node.css({top: this.node.top, left: this.node.left, position: "absolute", visibility: "visible"})
            };
            this.hide = function () {
                this.node.css("visibility", "hidden")
            };
            return this
        }

        function Lens() {
            var $obj = this;
            this.node = $("<div/>").addClass("zoomPup");
            this.append = function () {
                $(".zoomPad", el).append($(this.node).hide());
                if (settings.zoomType == "reverse") {
                    this.image = new Image();
                    this.image.src = smallimage.node.src;
                    $(this.node).empty().append(this.image)
                }
            };
            this.setdimensions = function () {
                this.node.w = (parseInt((settings.zoomWidth) / el.scale.x) > smallimage.w) ? smallimage.w : (parseInt(settings.zoomWidth / el.scale.x));
                this.node.h = (parseInt((settings.zoomHeight) / el.scale.y) > smallimage.h) ? smallimage.h : (parseInt(settings.zoomHeight / el.scale.y));
                this.node.top = (smallimage.oh - this.node.h - 2) / 2;
                this.node.left = (smallimage.ow - this.node.w - 2) / 2;
                this.node.css({
                    top: 0,
                    left: 0,
                    width: this.node.w + "px",
                    height: this.node.h + "px",
                    position: "absolute",
                    display: "none",
                    borderWidth: 1 + "px"
                });
                if (settings.zoomType == "reverse") {
                    this.image.src = smallimage.node.src;
                    $(this.image).css({
                        position: "absolute",
                        display: "block",
                        left: -(this.node.left + 1 - smallimage.bleft) + "px",
                        top: -(this.node.top + 1 - smallimage.btop) + "px"
                    })
                }
            };
            this.setcenter = function () {
                this.node.top = (smallimage.oh - this.node.h - 2) / 2;
                this.node.left = (smallimage.ow - this.node.w - 2) / 2;
                this.node.css({top: this.node.top, left: this.node.left});
                if (settings.zoomType == "reverse") {
                    $(this.image).css({
                        position: "absolute",
                        display: "block",
                        left: -(this.node.left + 1 - smallimage.bleft) + "px",
                        top: -(this.node.top + 1 - smallimage.btop) + "px"
                    })
                }
                largeimage.setposition()
            };
            this.setposition = function (e) {
                el.mousepos.x = e.pageX;
                el.mousepos.y = e.pageY;
                var lensleft = 0;
                var lenstop = 0;

                function overleft(lens) {
                    return el.mousepos.x - (lens.w) / 2 < smallimage.pos.l
                }

                function overright(lens) {
                    return el.mousepos.x + (lens.w) / 2 > smallimage.pos.r
                }

                function overtop(lens) {
                    return el.mousepos.y - (lens.h) / 2 < smallimage.pos.t
                }

                function overbottom(lens) {
                    return el.mousepos.y + (lens.h) / 2 > smallimage.pos.b
                }

                lensleft = el.mousepos.x + smallimage.bleft - smallimage.pos.l - (this.node.w + 2) / 2;
                lenstop = el.mousepos.y + smallimage.btop - smallimage.pos.t - (this.node.h + 2) / 2;
                if (overleft(this.node)) {
                    lensleft = smallimage.bleft - 1
                } else {
                    if (overright(this.node)) {
                        lensleft = smallimage.w + smallimage.bleft - this.node.w - 1
                    }
                }
                if (overtop(this.node)) {
                    lenstop = smallimage.btop - 1
                } else {
                    if (overbottom(this.node)) {
                        lenstop = smallimage.h + smallimage.btop - this.node.h - 1
                    }
                }
                this.node.left = lensleft;
                this.node.top = lenstop;
                this.node.css({left: lensleft + "px", top: lenstop + "px", display: "block"});
                if (settings.zoomType == "reverse") {
                    if ($.browser.msie && $.browser.version > 7) {
                        $(this.node).empty().append(this.image)
                    }
                    $(this.image).css({
                        position: "absolute",
                        display: "block",
                        left: -(this.node.left + 1 - smallimage.bleft) + "px",
                        top: -(this.node.top + 1 - smallimage.btop) + "px"
                    })
                }
                largeimage.setposition()
            };
            this.hide = function () {
            };
            this.show = function () {
                if (settings.zoomType != "innerzoom" && (settings.lens || settings.zoomType == "drag")) {
                    this.node.show()
                }
                if (settings.zoomType == "reverse") {
                }
            };
            this.getoffset = function () {
                var o = {};
                o.left = $obj.node.left;
                o.top = $obj.node.top;
                return o
            };
            return this
        }

        function Stage() {
            var $obj = this;
            this.node = $("<div class='zoomWindow'><div class='zoomWrapper'><div class='zoomWrapperTitle'></div><div class='zoomWrapperImage'></div></div></div>");
            this.ieframe = $('<iframe class="zoomIframe" src="javascript:\'\';" marginwidth="0" marginheight="0" align="bottom" scrolling="no" frameborder="0" ></iframe>');
            this.setposition = function () {
                this.node.leftpos = 0;
                this.node.toppos = 0;
                if (settings.zoomType != "innerzoom") {
                    switch (settings.position) {
                        case"left":
                            this.node.leftpos = (smallimage.pos.l - smallimage.bleft - Math.abs(settings.xOffset) - settings.zoomWidth > 0) ? (0 - settings.zoomWidth - Math.abs(settings.xOffset)) : (smallimage.ow + Math.abs(settings.xOffset));
                            this.node.toppos = Math.abs(settings.yOffset);
                            this.node.leftpos = 0 - settings.zoomWidth - Math.abs(settings.xOffset);
                            this.node.toppos = Math.abs(settings.yOffset);
                            break;
                        case"top":
                            this.node.leftpos = Math.abs(settings.xOffset);
                            this.node.toppos = (smallimage.pos.t - smallimage.btop - Math.abs(settings.yOffset) - settings.zoomHeight > 0) ? (0 - settings.zoomHeight - Math.abs(settings.yOffset)) : (smallimage.oh + Math.abs(settings.yOffset));
                            break;
                        case"bottom":
                            this.node.leftpos = Math.abs(settings.xOffset);
                            this.node.toppos = (smallimage.pos.t - smallimage.btop + smallimage.oh + Math.abs(settings.yOffset) + settings.zoomHeight < screen.height) ? (smallimage.oh + Math.abs(settings.yOffset)) : (0 - settings.zoomHeight - Math.abs(settings.yOffset));
                            break;
                        default:
                            this.node.leftpos = (smallimage.rightlimit + Math.abs(settings.xOffset) + settings.zoomWidth < screen.width) ? (smallimage.ow + Math.abs(settings.xOffset)) : (0 - settings.zoomWidth - Math.abs(settings.xOffset));
                            this.node.toppos = Math.abs(settings.yOffset);
                            break
                    }
                }
                this.node.css({left: this.node.leftpos + "px", top: this.node.toppos + "px"});
                return this
            };
            this.append = function () {
                $(".zoomPad", el).append(this.node);
                this.node.css({position: "absolute", display: "none", zIndex: 5001});
                if (settings.zoomType == "innerzoom") {
                    this.node.css({cursor: "default"});
                    var thickness = (smallimage.bleft == 0) ? 1 : smallimage.bleft;
                    $(".zoomWrapper", this.node).css({borderWidth: thickness + "px"})
                }
                $(".zoomWrapper", this.node).css({width: Math.round(settings.zoomWidth) + "px"});
                $(".zoomWrapperImage", this.node).css({width: "100%", height: Math.round(settings.zoomHeight) + "px"});
                $(".zoomWrapperTitle", this.node).css({width: "100%", position: "absolute"});
                $(".zoomWrapperTitle", this.node).hide();
                if (settings.title && zoomtitle.length > 0) {
                    $(".zoomWrapperTitle", this.node).html(zoomtitle).show()
                }
                $obj.setposition()
            };
            this.hide = function () {
                switch (settings.hideEffect) {
                    case"fadeout":
                        this.node.fadeOut(settings.fadeoutSpeed, function () {
                        });
                        break;
                    default:
                        this.node.hide();
                        break
                }
                this.ieframe.hide()
            };
            this.show = function () {
                switch (settings.showEffect) {
                    case"fadein":
                        this.node.fadeIn();
                        this.node.fadeIn(settings.fadeinSpeed, function () {
                        });
                        break;
                    default:
                        this.node.show();
                        break
                }
                if (isIE6 && settings.zoomType != "innerzoom") {
                    this.ieframe.width = this.node.width();
                    this.ieframe.height = this.node.height();
                    this.ieframe.left = this.node.leftpos;
                    this.ieframe.top = this.node.toppos;
                    this.ieframe.css({
                        display: "block",
                        position: "absolute",
                        left: this.ieframe.left,
                        top: this.ieframe.top,
                        zIndex: 99,
                        width: this.ieframe.width + "px",
                        height: this.ieframe.height + "px"
                    });
                    $(".zoomPad", el).append(this.ieframe);
                    this.ieframe.show()
                }
            }
        }

        function Largeimage() {
            var $obj = this;
            this.node = new Image();
            this.loadimage = function (url) {
                loader.show();
                this.url = url;
                this.node.style.position = "absolute";
                this.node.style.border = "0px";
                this.node.style.display = "none";
                this.node.style.left = "-5000px";
                this.node.style.top = "0px";
                document.body.appendChild(this.node);
                this.node.src = url
            };
            this.fetchdata = function () {
                var image = $(this.node);
                var scale = {};
                this.node.style.display = "block";
                $obj.w = 1600;
                $obj.h = 1600;
                $obj.pos = image.offset();
                $obj.pos.l = image.offset().left;
                $obj.pos.t = image.offset().top;
                $obj.pos.r = $obj.w + $obj.pos.l;
                $obj.pos.b = $obj.h + $obj.pos.t;
                scale.x = ($obj.w / smallimage.w);
                scale.y = ($obj.h / smallimage.h);
                el.scale = scale;
                document.body.removeChild(this.node);
                $(".zoomWrapperImage", el).empty().append(this.node);
                lens.setdimensions()
            };
            this.node.onerror = function () {
                throw"Problems while loading the big image."
            };
            this.node.onload = function () {
                $obj.fetchdata();
                loader.hide();
                el.largeimageloading = false;
                el.largeimageloaded = true;
                if (settings.zoomType == "drag" || settings.alwaysOn) {
                    lens.show();
                    stage.show();
                    lens.setcenter()
                }
            };
            this.setposition = function () {
                var left = -el.scale.x * (lens.getoffset().left - smallimage.bleft + 1 + settings.largeimageXoffset);
                var top = -el.scale.y * (lens.getoffset().top - smallimage.btop + 1 + settings.largeimageYoffset);
                $(this.node).css({left: left + "px", top: top + "px"})
            };
            return this
        }

        $(el).data("jqzoom", obj)
    };
    $.jqzoom = {
        defaults: {
            zoomType: "standard",
            zoomWidth: 300,
            zoomHeight: 300,
            xOffset: 2,
            yOffset: 0,
            position: "left",
            preloadImages: true,
            preloadText: "Loading zoom",
            title: true,
            lens: true,
            imageOpacity: 0.4,
            alwaysOn: false,
            showEffect: "show",
            hideEffect: "hide",
            fadeinSpeed: "slow",
            fadeoutSpeed: "2000",
            largeimageXoffset: 0,
            largeimageYoffset: 0
        }, disable: function (el) {
            var api = $(el).data("jqzoom");
            api.disable();
            return false
        }, enable: function (el) {
            var api = $(el).data("jqzoom");
            api.enable();
            return false
        }, disableAll: function (el) {
            jqzoompluging_disabled = true
        }, enableAll: function (el) {
            jqzoompluging_disabled = false
        }
    }
})(jQuery);

function addToFavorite(b) {
    var c = _contextPath + "/myaccount/add_to_favorite.json";
    var a = loxia.syncXhr(c, {skuId: b});
    if (!a) {
        showMessage("收藏失败");
        return false
    }
    if (a.errorCode) {
        if (a.errorCode == "notLogin") {
            $j(".log-sign-button .log").trigger("click");
            return false
        }
    }
    if (a.result) {
        if (a.result == "fail") {
            showMessage("收藏失败");
            return false
        }
        if (a.result == "already") {
            showMessage("您已收藏该商品");
            return false
        }
        if (a.result == "success") {
            showMessage("收藏成功");
            return true
        }
    }
};
var sizeObject = {
    size_ref_1: [["美国码(中性/男性)", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], ["美国码 女性", 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45], ["厘米", 22, 22.5, 23, 23.5, 24, 24.5, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5]],
    size_ref_2: [["美国码(中性/男性)", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], ["美国码 女性", 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45], ["厘米", 22, 22.5, 23, 23.5, 24, 24.5, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5]],
    size_ref_3: [["美国码(中性/男性)", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], ["美国码 女性", 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45], ["厘米", 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29]],
    size_ref_4: [["美国码(中性/男性)", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], ["美国码 女性", 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45], ["厘米", 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29]],
    size_ref_5: [["美国码 女性", 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], ["中国码", 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43], ["厘米", 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28]],
    size_ref_6: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["上装号型", "165/84A", "165/88A", "170/92A", "175/96A", "180/100A", "185/104A", "190/108B"], ["适合胸围(厘米)", "84", "86 88", "90 92", "94 96", "100 103", "104 106", "108 110"], ["适合胸围(英寸)", "33", "33 7/8 34 4/8", "35 2/8 36 1/8", "37 37 1/8", "39 2/8 40 1/8", "40 7/8 41 5/8", "42 4/8 43 2/8"]],
    size_ref_7: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "165/70A", "165/72A 165/74A", "170/78A", "175/80A 175/82A", "180/84A 180/86A", "185/92A", "190/98B"], ["数字型(英寸)", "27", "28  29", "30", "31  32", "33  34", "36", "38"], ["适合腰围(厘米)", "70", "72  74", "78", "80  82", "84  86", "92", "98"], ["适合腰围(英寸)", "27 4/8", "28 2/8 29", "30 4/8", "31 3/8  32 2/8", "33  33 7/8", "36 1/8", "38 4/8"], ["适合臂围(厘米)", "84", "86  88", "92", "94  96", "98  102", "106", "110"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_8: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["宽松标示", "", "S/M", "S/M", "L/XL", "L/XL", "XXL/XXXL", "XXL/XXXL"], ["上装号型", "150/76A", "155/80A", "160/84A", "165/88A", "170/92A", "175/96A", "180/100B"], ["适合胸围(厘米)", "76  78", "80  82", "84  86", "88  90", "92  94", "96  98", "100  102"], ["适合胸围(英寸)", "29 6/8  30 4/8", "31 3/8  32 2/8", "33  33 7/8", "34 4/8  35 2/8", "361/8  37", "37 7/8  38 4/8", "39 2/8 40 1/8"]],
    size_ref_9: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "150/60A", "155/62A 155/64A", "160/66A 160/68A", "165/72A 165/74A", "170/76A 170/78A", "175/82A", "180/88B"], ["数字码(英寸)", "23", "24  25", "26  27", "28  29", "30  31", "32", "34"], ["适合腰围(厘米)", "60", "62  64", "66  68", "72  74", "76  78", "82  84", "88  90"], ["适合腰围(英寸)", "23  4/8", "24 2/8  25", "25 7/8  26 7/8", "28 2/8  29", "29 6/8  30 4/8", "32 2/8  33", "34 4/8  35 2/8"], ["适合臂围", "84", "86  88", "90  92", "94  96", "98  100", "102 104", "106 108"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_12: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "165/70A", "165/72A 165/74A", "170/78A", "175/80A 175/82A", "180/84A 180/86A", "185/92A", "190/98B"], ["数字型(英寸)", "27", "28 29", "30", "31 32", "33 34", "36", "38"], ["适合腰围(厘米)", "70", "72 74", "78", "80 82", "84 86", "92", "98"], ["适合腰围(英寸)", "27 4/8", "28 2/8 29", "30 4/8", "31 3/8 32 2/8", "33 33 7/8", "36 1/8", "38 4/8"], ["适合臂围(厘米)", "84", "86 88", "92", "94 96", "98 102", "106", "110"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_13: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "150/60A", "155/62A 155/64A", "160/66A  160/68A", "165/72A 165/74A", "170/76A 170/78A", "175/82A", "180/88B"], ["数字码(英寸)", "23", "24  25", "26  27", "28  29", "30  31", "32", "34"], ["适合腰围(厘米)", "60", "62  64", "66  68", "72  74", "76  78", "82 84", "88 90"], ["适合腰围(英寸)", "23  4/8", "24 2/8  25", "25 7/8  26 7/8", "28 2/8  29", "29 6/8  30 4/8", "32 2/8 33", "34 4/8 35 2/8"], ["适合臂围", "84", "86  88", "90  92", "94  96", "98  100", "102 104", "106 108"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_14: [["美国码 男性", 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["中国码", 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46], ["厘米", 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5]],
    size_ref_6_chuck: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["上装号型", "165/84A", "165/88A", "170/92A", "175/96A", "180/100A", "185/104A", "190/108B"], ["适合胸围(厘米)", "84", "86 88", "90 92", "94 96", "100 103", "104 106", "108 110"], ["适合胸围(英寸)", "33", "33 7/8 34 4/8", "35 2/8 36 1/8", "37 37 1/8", "39 2/8 40 1/8", "40 7/8 41 5/8", "42 4/8 43 2/8"]],
    size_ref_7_chuck: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "165/70A", "165/72A 165/74A", "170/78A", "175/80A 175/82A", "180/84A 180/86A", "185/92A", "190/98B"], ["数字型(英寸)", "27", "28  29", "30", "31  32", "33  34", "36", "38"], ["适合腰围(厘米)", "70", "72  74", "78", "80  82", "84  86", "92", "98"], ["适合腰围(英寸)", "27 4/8", "28 2/8 29", "30 4/8", "31 3/8  32 2/8", "33  33 7/8", "36 1/8", "38 4/8"], ["适合臂围(厘米)", "84", "86  88", "92", "94  96", "98  102", "106", "110"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_8_chuck: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["宽松标示", "", "S/M", "S/M", "L/XL", "L/XL", "XXL/XXXL", "XXL/XXXL"], ["上装号型", "150/76A", "155/80A", "160/84A", "165/88A", "170/92A", "175/96A", "180/100B"], ["适合胸围(厘米)", "76  78", "80  82", "84  86", "88  90", "92  94", "96  98", "100  102"], ["适合胸围(英寸)", "29 6/8  30 4/8", "31 3/8  32 2/8", "33  33 7/8", "34 4/8  35 2/8", "361/8  37", "37 7/8  38 4/8", "39 2/8 40 1/8"]],
    size_ref_9_chuck: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "150/60A", "155/62A 155/64A", "160/66A 160/68A", "165/72A 165/74A", "170/76A 170/78A", "175/82A", "180/88B"], ["数字码(英寸)", "23", "24  25", "26  27", "28  29", "30  31", "32", "34"], ["适合腰围(厘米)", "60", "62  64", "66  68", "72  74", "76  78", "82  84", "88  90"], ["适合腰围(英寸)", "23  4/8", "24 2/8  25", "25 7/8  26 7/8", "28 2/8  29", "29 6/8  30 4/8", "32 2/8  33", "34 4/8  35 2/8"], ["适合臂围", "84", "86  88", "90  92", "94  96", "98  100", "102 104", "106 108"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_12_chuck: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "165/70A", "165/72A 165/74A", "170/78A", "175/80A 175/82A", "180/84A 180/86A", "185/92A", "190/98B"], ["数字型(英寸)", "27", "28 29", "30", "31 32", "33 34", "36", "38"], ["适合腰围(厘米)", "70", "72 74", "78", "80 82", "84 86", "92", "98"], ["适合腰围(英寸)", "27 4/8", "28 2/8 29", "30 4/8", "31 3/8 32 2/8", "33 33 7/8", "36 1/8", "38 4/8"], ["适合臂围(厘米)", "84", "86 88", "92", "94 96", "98 102", "106", "110"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_13_chuck: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "150/60A", "155/62A 155/64A", "160/66A  160/68A", "165/72A 165/74A", "170/76A 170/78A", "175/82A", "180/88B"], ["数字码(英寸)", "23", "24  25", "26  27", "28  29", "30  31", "32", "34"], ["适合腰围(厘米)", "60", "62  64", "66  68", "72  74", "76  78", "82 84", "88 90"], ["适合腰围(英寸)", "23  4/8", "24 2/8  25", "25 7/8  26 7/8", "28 2/8  29", "29 6/8  30 4/8", "32 2/8 33", "34 4/8 35 2/8"], ["适合臂围", "84", "86  88", "90  92", "94  96", "98  100", "102 104", "106 108"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_14_chuck: [["美国码 男性", 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["中国码", 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46], ["厘米", 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5]],
    size_ref_15: [["美国码(中性/男性)", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["美国码 女性", 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13], ["中国码", 35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46], ["厘米", 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5]],
    size_ref_15_chuck: [["美国码(中性/男性)", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["美国码 女性", 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13], ["中国码", 35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46], ["厘米", 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5]],
    size_ref_20: [["美国码 女性", 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["中国码", 34.5, 35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 43.5], ["厘米", 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5]],
    size_ref_20_chuck: [["美国码 女性", 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["中国码", 34.5, 35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 43.5], ["厘米", 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5]],
    size_ref_21: [["美国码(中性/男性)", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["美国码 女性", 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45, 46], ["厘米", 22, 22.5, 23, 23.5, 24, 24.5, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30]],
    size_ref_21_chuck: [["美国码(中性/男性)", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["美国码 女性", 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45, 46], ["厘米", 22, 22.5, 23, 23.5, 24, 24.5, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30]],
    size_ref_22: [["美国码 女性", 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43], ["厘米", 22, 22.5, 23, 23.5, 24, 24.5, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28]],
    size_ref_22_chuck: [["美国码 女性", 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43], ["厘米", 22, 22.5, 23, 23.5, 24, 24.5, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28]],
    size_ref_23: [["美国码 男性", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45, 46], ["厘米", 22, 22.5, 23, 23.5, 24, 24.5, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30]],
    size_ref_23_chuck: [["美国码 男性", 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5], ["中国码", 35, 36, 36.5, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45, 46], ["厘米", 22, 22.5, 23, 23.5, 24, 24.5, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30]],
    size_ref_25: [["美国码(中性/男性)", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], ["美国码 女性", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], ["中国码", 35, 36, 37.5, 38.5, 40, 41, 42.5, 44, 45, 46.5, 47.5], ["厘米", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]],
    size_ref_25_chuck: [["美国码(中性/男性)", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], ["美国码 女性", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], ["中国码", 35, 36, 37.5, 38.5, 40, 41, 42.5, 44, 45, 46.5, 47.5], ["厘米", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]],
    size_ref_17: [["美国码(中性/男性)", 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 1, 1.5, 2, 2.5, 3], ["中国码", 27, 28, 28.5, 29, 30, 31, 31.5, 32, 33, 33.5, 34, 35], ["厘米", 17, 17, 17.5, 18, 18.5, 19, 19, 19.5, 20, 20.5, 21, 22]],
    size_ref_18: [["美国码(中性/男性)", 2, 3, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], ["中国码", 18, 19, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27], ["厘米", 11, 11, 11.5, 12, 12.5, 13, 13, 13.5, 14, 14.5, 15, 15, 15.5, 16, 16.5, 17, 17.5]],
    size_ref_24: [["美国码(中性/男性)", 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7], ["中国码", 26, 27, 28, 28.5, 29, 30, 31, 31.5, 32, 33, 33.5, 34, 35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40], ["厘米", 16.5, 17, 17, 17.5, 18, 18.5, 19, 19, 19.5, 20, 20.5, 21, 21.5, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25]],
    size_ref_17_chuck: [["美国码(中性/男性)", 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 1, 1.5, 2, 2.5, 3], ["中国码", 27, 28, 28.5, 29, 30, 31, 31.5, 32, 33, 33.5, 34, 35], ["厘米", 17, 17, 17.5, 18, 18.5, 19, 19, 19.5, 20, 20.5, 21, 22]],
    size_ref_18_chuck: [["美国码(中性/男性)", 2, 3, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], ["中国码", 18, 19, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27], ["厘米", 11, 11, 11.5, 12, 12.5, 13, 13, 13.5, 14, 14.5, 15, 15, 15.5, 16, 16.5, 17, 17.5]],
    size_ref_24_chuck: [["美国码(中性/男性)", 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7], ["中国码", 26, 27, 28, 28.5, 29, 30, 31, 31.5, 32, 33, 33.5, 34, 35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40], ["厘米", 16.5, 17, 17, 17.5, 18, 18.5, 19, 19, 19.5, 20, 20.5, 21, 21.5, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25]],
    size_ref_45: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "36.0", "37.2", "38.5", "40.0", "42.0", "44.5", "47.5", "50.5"], ["衣长（厘米）", "41.2", "43.2", "45.0", "46.0", "49.5", "53.5", "57.0", "61.0"], ["胸围（厘米）", "59.0", "61.0", "64.0", "66.0", "68.0", "72.0", "78.0", "84.0"]],
    size_ref_46: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "28.0", "29.0", "30.5", "31.5", "34.0", "36.0", "38.5", "40.5"], ["袖长（厘米）", "13.5", "14.3", "15.3", "16.2", "17.5", "18.8", "20.0", "21.0"], ["衣长（厘米）", "44.5", "46.4", "48.3", "50.0", "57.0", "61.0", "65.0", "69.0"], ["胸围（厘米）", "71.0", "72.0", "76.0", "79.0", "84.5", "90.0", "96.0", "101.0"]],
    size_ref_47: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "33.0", "34.3", "35.5", "36.8", "37.5", "39.5", "42.5", "45.0"], ["袖长（厘米）", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0", "14.5", "16.0"], ["衣长（厘米）", "42.0", "44.0", "46.0", "47.0", "51.0", "54.5", "58.4", "61.0"], ["胸围（厘米）", "71.0", "73.5", "76.0", "78.5", "81.0", "84.5", "90.0", "96.0"]],
    size_ref_48: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "29.0", "30.0", "31.0", "32.5", "35.0", "36.2", "38.4", "40.6"], ["长袖长（厘米）", "34.3", "40.0", "41.6", "45.1", "48.9", "51.8", "55.2", "59.1"], ["衣长（厘米）", "43.8", "45.7", "47.6", "48.6", "56.5", "60.3", "64.1", "67.9"], ["胸围（厘米）", "68.5", "71.0", "73.5", "76.0", "84.2", "90.0", "95.5", "102.0"]],
    size_ref_49: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "23.2", "24.4", "25.7", "26.0", "30.8", "32.7", "34.6", "36.5"], ["长袖长（厘米）", "41.6", "43.2", "44.1", "45.7", "50.2", "53.3", "57.2", "61.0"], ["衣长（厘米）", "41.3", "43.2", "45.1", "46.0", "50.2", "54.0", "57.8", "61.6"], ["胸围（厘米）", "59.5", "61.0", "62.0", "66.0", "70.0", "75.5", "81.0", "88.0"]],
    size_ref_50: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "29.8", "31.1", "32.4", "33.7", "37.1", "39.4", "41.6", "43.8"], ["长袖长（厘米）", "38.1", "40.6", "43.2", "45.7", "48.9", "53.3", "57.8", "62.2"], ["短袖长（厘米）", "14.3", "15.6", "16.8", "18.1", "20.3", "22.2", "24.1", "26.0"], ["衣长（厘米）", "46.4", "48.3", "50.2", "52.1", "59.1", "62.9", "66.7", "70.5"], ["胸围（厘米）", "72.0", "73.5", "76.0", "78.5", "87.0", "92.5", "98.5", "104.0"]],
    size_ref_51: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "27.9", "29.2", "30.5", "31.0", "34.0", "36.2", "38.4", "40.6"], ["袖长（厘米）", "40.6", "42.5", "44.5", "46.4", "50.8", "54.6", "58.4", "63.5"], ["衣长（厘米）", "46.4", "48.3", "50.2", "51.5", "56.5", "60.3", "64.1", "67.9"], ["胸围（厘米）", "71.5", "74.0", "76.5", "79.5", "84.0", "90.0", "95.5", "102.5"]],
    size_ref_52: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "29.8", "31.1", "32.4", "32.7", "35.9", "38.1", "40.3", "42.5"], ["袖长（厘米）", "39.4", "40.6", "41.9", "43.2", "49.8", "54.3", "58.1", "61.9"], ["衣长（厘米）", "41.9", "43.8", "45.7", "46.7", "52.1", "55.9", "58.4", "63.5"], ["胸围（厘米）", "73.0", "75.5", "78.0", "80.5", "85.0", "90.5", "97.0", "104.0"]],
    size_ref_53: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "33.0", "34.3", "35.6", "35.9", "41.3", "43.2", "45.1", "47.0"], ["袖长（厘米）", "38.1", "40.0", "41.9", "43.8", "47.0", "49.5", "52.1", "56.5"], ["衣长（厘米）", "40.6", "42.5", "44.5", "45.4", "51.4", "55.2", "59.1", "62.9"], ["胸围（厘米）", "71.5", "74.0", "77.0", "79.5", "82.0", "87.0", "93.0", "100.0"]],
    size_ref_54: [["尺码标示", "W21", "W21.5", "W22", "W23", "W24", "W25", "W26", "W27"], ["下装号型", "100/50", "110/53", "120/56", "130/59", "140/60", "150/63", "155/66", "160/69"], ["腰围（厘米）", "45.7", "49.5", "53.3", "57.2", "61.0", "64.8", "68.6", "72.4"], ["脾围（厘米）", "40.6", "42.5", "44.5", "46.4", "48.3", "50.2", "52.1", "54.0"], ["臀围（厘米）", "66.0", "69.9", "73.7", "77.5", "81.3", "85.1", "88.9", "92.7"], ["内长（厘米）", "16.5", "17.8", "19.1", "20.3", "21.6", "22.9", "24.1", "25.4"]],
    size_ref_55: [["尺码标示", "W21", "W21.5", "W22", "W22.5", "W24", "W25", "W26", "W27"], ["下装号型", "100/50", "110/53", "120/56", "130/59", "140/60", "150/63", "155/66", "160/69"], ["腰围（厘米）", "47.0", "49.5", "52.1", "54.6", "61.0", "63.5", "66.0", "68.6"], ["脾围（厘米）", "37.5", "39.4", "41.3", "43.2", "45.1", "46.7", "48.3", "49.8"], ["臀围（厘米）", "59.7", "63.5", "67.3", "71.1", "74.9", "78.1", "81.3", "84.5"], ["内长（厘米）", "5.7", "6.4", "7.0", "7.0", "7.6", "7.6", "8.3", "8.3"]],
    size_ref_56: [["尺码标示", "W21", "W21.5", "W22", "W23", "W24", "W25", "W26", "W27"], ["下装号型", "100/50", "110/53", "120/56", "130/59", "140/60", "150/63", "155/66", "160/69"], ["腰围（厘米）", "48.3", "50.8", "53.3", "55.9", "63.5", "66.0", "68.6", "71.1"], ["脾围（厘米）", "40.6", "42.5", "44.5", "46.4", "48.3", "50.2", "52.1", "54.0"], ["臀围（厘米）", "66.0", "69.9", "73.7", "77.5", "81.3", "85.1", "88.9", "92.7"], ["内长（厘米）", "41.9", "48.3", "54.6", "61.0", "67.3", "71.1", "74.9", "78.7"]],
    size_ref_57: [["尺码标示", "4", "5", "6", "6X/7", "S", "M", "L", "XL"], ["上装号型", "100/52(S)", "110/56", "120/60", "130/64", "140/68", "150/72", "155/76", "160/80"], ["肩宽（厘米）", "21.9", "23.2", "24.4", "24.8", "29.5", "31.5", "33.5", "35.2"], ["衣长（厘米）", "53.3", "57.2", "61.0", "64.8", "68.6", "72.4", "76.2", "80.0"], ["胸围（厘米）", "55.0", "57.5", "60.0", "63.0", "68.0", "73.5", "79.5", "85.0"]],
    size_ref_92: [["尺码标示", "2T", "3T", "4T"], ["肩宽（厘米）", "27.3", "28.3", "29.2"], ["袖长（厘米）", "11.7", "12.7", "14.0"], ["衣长（厘米）", "37.1", "40.0", "43.8"], ["胸围（厘米）", "66.0", "68.0", "70.0"], ["腰围（厘米）", "39.0", "40.5", "42.0"], ["臀围（厘米）", "54.5", "55.5", "57.0"], ["外长（厘米）", "7.0", "7.6", "8.3"]],
    size_ref_58: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["领围（厘米）", "50.8", "50.8", "52.1", "53.3", "54.6", "55.9", "57.2", "58.4", "59.7", "61.0"], ["肩宽（厘米）", "26.7", "27.6", "28.6", "29.5", "30.5", "31.8", "33.0", "34.3", "36.2", "38.1"], ["短袖长（厘米）", "24.8", "25.7", "26.7", "27.6", "28.6", "30.5", "32.4", "34.3", "36.8", "39.4"], ["长袖长（厘米）", "43.8", "44.8", "48.3", "51.8", "55.2", "59.7", "64.1", "68.6", "73.7", "78.7"], ["衣长（厘米）", "32.4", "34.9", "37.5", "40.0", "42.5", "45.7", "48.9", "52.1", "56.5", "61.0"], ["胸围（厘米）", "29.2", "30.5", "31.8", "33.0", "34.3", "36.2", "38.1", "40.0", "42.5", "45.1"]],
    size_ref_59: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["领围（厘米）", "50.8", "50.8", "52.1", "53.3", "54.6", "55.9", "57.2", "58.4", "59.7", "61.0"], ["肩宽（厘米）", "23.5", "24.4", "25.4", "26.4", "27.3", "28.6", "29.8", "31.1", "33.0", "34.9"], ["短袖长（厘米）", "7.6", "7.6", "8.3", "8.3", "8.9", "8.9", "9.5", "9.5", "10.2", "10.2"], ["长袖长（厘米）", "43.8", "44.8", "48.3", "51.8", "55.2", "59.7", "64.1", "68.6", "73.7", "78.7"], ["衣长（厘米）", "31.1", "33.7", "36.2", "38.7", "41.3", "44.5", "47.6", "50.8", "55.2", "59.7"], ["胸围（厘米）", "26.7", "27.9", "29.2", "30.5", "31.8", "33.7", "35.6", "37.5", "40.0", "42.5"]],
    size_ref_60: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "26.0", "27.0", "27.9", "28.9", "29.8", "31.1", "32.4", "33.7", "35.6", "37.5"], ["短袖长（厘米）", "26.0", "27.0", "27.9", "28.9", "29.8", "31.8", "33.7", "35.6", "38.1", "40.6"], ["长袖长（厘米）", "43.8", "44.8", "48.3", "51.8", "55.2", "59.7", "64.1", "68.6", "73.7", "78.7"], ["衣长（厘米）", "34.9", "37.5", "40.0", "42.5", "45.1", "48.3", "51.4", "54.6", "59.1", "63.5"], ["胸围（厘米）", "29.8", "31.1", "32.4", "33.7", "34.9", "36.8", "38.7", "40.6", "43.2", "45.7"]],
    size_ref_61: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "24.8", "25.7", "26.7", "27.6", "28.6", "29.8", "31.1", "32.4", "34.3", "36.2"], ["短袖长（厘米）", "8.3", "8.3", "8.9", "8.9", "9.5", "9.5", "10.2", "10.2", "10.8", "10.8"], ["长袖长（厘米）", "43.8", "44.8", "48.3", "51.8", "55.2", "59.7", "64.1", "68.6", "73.7", "78.7"], ["衣长（厘米）", "32.4", "34.9", "37.5", "40.0", "42.5", "45.7", "48.9", "52.1", "56.5", "61.0"], ["胸围（厘米）", "27.3", "28.6", "29.8", "31.1", "32.4", "34.3", "36.2", "38.1", "40.6", "43.2"]],
    size_ref_62: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["领围（厘米）", "50.8", "50.8", "52.1", "53.3", "54.6", "55.9", "57.2", "58.4", "61.0", "63.5"], ["肩宽（厘米）", "28.6", "29.5", "30.5", "31.4", "32.4", "33.7", "34.9", "36.2", "38.1", "40.0"], ["袖长（厘米）", "43.8", "44.8", "48.3", "51.8", "55.2", "59.7", "64.1", "68.6", "73.7", "78.7"], ["衣长（厘米）", "33.7", "36.2", "38.7", "41.3", "43.8", "47.0", "50.2", "53.3", "57.8", "62.2"], ["胸围（厘米）", "31.8", "33.0", "34.3", "35.6", "36.8", "38.7", "40.6", "42.5", "45.1", "47.6"]],
    size_ref_63: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["领围（厘米）", "50.8", "50.8", "52.1", "53.3", "54.6", "55.9", "57.2", "58.4", "61.0", "63.5"], ["肩宽（厘米）", "26.7", "27.6", "28.6", "29.5", "30.5", "31.8", "33.0", "34.3", "36.2", "38.1"], ["袖长（厘米）", "43.8", "44.8", "48.3", "51.8", "55.2", "59.7", "64.1", "68.6", "73.7", "78.7"], ["衣长（厘米）", "32.4", "34.9", "37.5", "40.0", "42.5", "45.7", "48.9", "52.1", "56.5", "61.0"], ["胸围（厘米）", "29.2", "30.5", "31.8", "33.0", "34.3", "36.2", "38.1", "40.0", "42.5", "45.1"]],
    size_ref_64: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "26.7", "27.6", "28.6", "29.5", "30.5", "31.8", "33.0", "34.3", "36.2", "38.1"], ["衣长（厘米）", "33.7", "36.2", "38.7", "41.3", "43.8", "47.0", "50.2", "53.3", "57.8", "62.2"], ["胸围（厘米）", "34.3", "35.6", "36.8", "38.1", "39.4", "41.3", "43.2", "45.1", "47.6", "50.2"]],
    size_ref_65: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "24.1", "25.1", "26.0", "27.0", "27.9", "29.2", "30.5", "31.8", "33.7", "35.6"], ["衣长（厘米）", "32.4", "34.9", "37.5", "40.0", "42.5", "45.7", "48.9", "52.1", "56.5", "61.0"], ["胸围（厘米）", "31.8", "33.0", "34.3", "35.6", "36.8", "38.7", "40.6", "42.5", "45.1", "47.6"]],
    size_ref_66: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "28.6", "29.5", "30.5", "31.4", "32.4", "33.7", "34.9", "36.2", "38.1", "40.0"], ["袖长（厘米）", "45.7", "46.7", "50.2", "53.7", "57.2", "61.6", "66.0", "70.5", "75.6", "80.6"], ["衣长（厘米）", "34.9", "37.5", "40.0", "42.5", "45.1", "48.3", "51.4", "54.6", "59.1", "63.5"], ["胸围（厘米）", "35.6", "36.8", "38.1", "39.4", "40.6", "42.5", "44.5", "46.4", "48.9", "51.4"]],
    size_ref_67: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "27.3", "28.3", "29.2", "30.2", "31.1", "32.4", "33.7", "34.9", "36.8", "38.7"], ["袖长（厘米）", "45.7", "46.7", "50.2", "53.7", "57.2", "61.6", "66.0", "70.5", "75.6", "80.6"], ["衣长（厘米）", "33.7", "36.2", "38.7", "41.3", "43.8", "47.0", "50.2", "53.3", "57.8", "62.2"], ["胸围（厘米）", "33.0", "34.3", "35.6", "36.8", "38.1", "40.0", "41.9", "43.8", "46.4", "48.9"]],
    size_ref_68: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "28.6", "29.5", "30.5", "31.4", "32.4", "33.7", "34.9", "36.2", "38.1", "40.0"], ["袖长（厘米）", "45.7", "46.7", "50.2", "53.7", "57.2", "61.6", "66.0", "70.5", "75.6", "80.6"], ["衣长（厘米）", "41.3", "43.8", "46.4", "48.9", "51.4", "54.6", "57.8", "61.0", "65.4", "69.9"], ["胸围（厘米）", "35.6", "36.8", "38.1", "39.4", "40.6", "42.5", "44.5", "46.4", "48.9", "51.4"]],
    size_ref_69: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "27.3", "28.3", "29.2", "30.2", "31.1", "32.4", "33.7", "34.9", "36.8", "38.7"], ["袖长（厘米）", "45.7", "46.7", "50.2", "53.7", "57.2", "61.6", "66.0", "70.5", "75.6", "80.6"], ["衣长（厘米）", "40.0", "42.5", "45.1", "47.6", "50.2", "53.3", "56.5", "59.7", "64.1", "68.6"], ["胸围（厘米）", "33.0", "34.3", "35.6", "36.8", "38.1", "40.0", "41.9", "43.8", "46.4", "48.9"]],
    size_ref_70: [["尺码标示", "18M", "24M", "36M", "4.0", "5.0", "6.0", "7.0", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "28.6", "29.5", "30.5", "31.4", "32.4", "33.7", "34.9", "36.2", "38.1", "40.0"], ["袖长（厘米）", "45.7", "46.7", "50.2", "53.7", "57.2", "61.6", "66.0", "70.5", "75.6", "80.6"], ["衣长（厘米）", "44.5", "47.6", "50.8", "54.0", "57.2", "61.0", "64.8", "68.6", "73.7", "78.7"], ["胸围（厘米）", "35.6", "36.8", "38.1", "39.4", "40.6", "42.5", "44.5", "46.4", "48.9", "51.4"]],
    size_ref_71: [["尺码标示", "18M", "24M", "36M", "4.0", "5.0", "6.0", "7.0", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["肩宽（厘米）", "27.3", "28.3", "29.2", "30.2", "31.1", "32.4", "33.7", "34.9", "36.8", "38.7"], ["袖长（厘米）", "45.7", "46.7", "50.2", "53.7", "57.2", "61.6", "66.0", "70.5", "75.6", "80.6"], ["衣长（厘米）", "44.5", "47.6", "50.8", "54.0", "57.2", "61.0", "64.8", "68.6", "73.7", "78.7"], ["胸围（厘米）", "33.0", "34.3", "35.6", "36.8", "38.1", "40.0", "41.9", "43.8", "46.4", "48.9"]],
    size_ref_72: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "41.3", "43.2", "45.1", "47.0", "49.5", "52.1", "54.6", "57.2", "61.0", "64.8"], ["前浪（厘米）", "17.5", "18.4", "19.4", "20.3", "21.6", "22.9", "24.1", "25.4", "26.7", "27.9"], ["后浪（厘米）", "25.1", "26.0", "27.0", "27.9", "29.2", "30.5", "31.8", "33.0", "34.3", "35.6"], ["臀围（厘米）", "59.7", "62.2", "64.8", "67.3", "71.1", "74.9", "78.7", "82.6", "87.6", "92.7"], ["内长（厘米）", "9.5", "10.8", "12.1", "13.3", "15.2", "17.1", "19.1", "21.0", "22.2", "23.5"]],
    size_ref_73: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "43.8", "45.7", "47.6", "49.5", "51.4", "54.6", "57.8", "61.0", "64.1", "67.3"], ["前浪（厘米）", "14.9", "15.9", "16.8", "17.8", "19.1", "20.3", "21.6", "22.9", "24.1", "25.4"], ["后浪（厘米）", "22.5", "23.5", "24.4", "25.4", "26.7", "27.9", "29.2", "30.5", "31.8", "33.0"], ["臀围（厘米）", "57.2", "59.7", "62.2", "64.8", "67.3", "71.1", "74.9", "80.0", "85.1", "90.2"], ["内长（厘米）", "3.2", "3.8", "3.8", "4.4", "4.4", "5.1", "5.1", "5.7", "5.7", "6.4"]],
    size_ref_74: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "41.3", "43.2", "45.1", "47.0", "49.5", "52.1", "54.6", "57.2", "61.0", "64.8"], ["前浪（厘米）", "17.5", "18.4", "19.4", "20.3", "21.6", "22.9", "24.1", "25.4", "26.7", "27.9"], ["后浪（厘米）", "25.1", "26.0", "27.0", "27.9", "29.2", "30.5", "31.8", "33.0", "34.3", "35.6"], ["臀围（厘米）", "61.0", "63.5", "66.0", "68.6", "72.4", "76.2", "80.0", "83.8", "88.9", "94.0"], ["内长（厘米）", "16.5", "19.1", "21.6", "24.1", "27.9", "31.8", "35.6", "39.4", "41.9", "44.5"]],
    size_ref_75: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "43.8", "45.7", "47.6", "49.5", "51.4", "54.6", "57.8", "61.0", "64.1", "67.3"], ["前浪（厘米）", "16.5", "17.5", "18.4", "19.4", "20.3", "21.6", "22.9", "24.1", "25.4", "26.7"], ["后浪（厘米）", "24.1", "25.1", "26.0", "27.0", "27.9", "29.2", "30.5", "31.8", "33.0", "34.3"], ["臀围（厘米）", "57.2", "59.7", "62.2", "64.8", "67.3", "71.1", "74.9", "80.0", "85.1", "90.2"], ["内长（厘米）", "17.8", "20.3", "22.9", "25.4", "27.9", "31.8", "35.6", "39.4", "41.9", "44.5"]],
    size_ref_76: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "42.5", "44.5", "46.4", "48.3", "50.2", "53.3", "56.5", "59.7", "62.9", "66.0"], ["前浪（厘米）", "17.8", "18.7", "19.7", "20.6", "21.6", "22.9", "24.1", "25.4", "26.7", "27.9"], ["后浪（厘米）", "25.4", "26.4", "27.3", "28.3", "29.2", "30.5", "31.8", "33.0", "34.3", "35.6"], ["臀围（厘米）", "62.2", "64.8", "67.3", "69.9", "72.4", "76.2", "80.0", "85.1", "90.2", "95.3"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_77: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "42.5", "44.5", "46.4", "48.3", "50.2", "53.3", "56.5", "59.7", "62.9", "66.0"], ["前浪（厘米）", "16.5", "17.5", "18.4", "19.4", "20.3", "21.6", "22.9", "24.1", "25.4", "26.7"], ["后浪（厘米）", "24.1", "25.1", "26.0", "27.0", "27.9", "29.2", "30.5", "31.8", "33.0", "34.3"], ["臀围（厘米）", "57.2", "59.7", "62.2", "64.8", "67.3", "71.1", "74.9", "80.0", "85.1", "90.2"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_78: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "42.5", "44.5", "46.4", "48.3", "50.2", "53.3", "56.5", "59.7", "62.9", "66.0"], ["前浪（厘米）", "17.8", "18.7", "19.7", "20.6", "21.6", "22.9", "24.1", "25.4", "26.7", "27.9"], ["后浪（厘米）", "25.4", "26.4", "27.3", "28.3", "29.2", "30.5", "31.8", "33.0", "34.3", "35.6"], ["臀围（厘米）", "64.8", "67.3", "69.9", "72.4", "74.9", "78.7", "82.6", "87.6", "92.7", "97.8"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_79: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "41.3", "44.5", "46.4", "48.3", "50.2", "53.3", "56.5", "59.7", "62.9", "66.0"], ["前浪（厘米）", "16.5", "17.5", "18.4", "19.4", "20.3", "21.6", "22.9", "24.1", "25.4", "26.7"], ["后浪（厘米）", "24.1", "25.1", "26.0", "27.0", "27.9", "29.2", "30.5", "31.8", "33.0", "34.3"], ["臀围（厘米）", "59.7", "62.2", "64.8", "67.3", "69.9", "73.7", "77.5", "82.6", "87.6", "92.7"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_80: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "40.0", "41.9", "43.8", "45.7", "47.6", "50.8", "54.0", "60.3", "65.4", "70.5"], ["前浪（厘米）", "17.8", "18.7", "19.7", "20.6", "21.6", "22.9", "24.1", "25.4", "26.7", "27.9"], ["后浪（厘米）", "25.4", "26.4", "27.3", "28.3", "29.2", "30.5", "31.8", "33.0", "34.3", "35.6"], ["臀围（厘米）", "62.2", "64.8", "67.3", "69.9", "72.4", "76.2", "80.0", "85.1", "90.2", "95.3"], ["内长（厘米）", "11.1", "12.4", "13.7", "14.9", "16.8", "19.1", "21.3", "23.5", "24.8", "26.0"]],
    size_ref_81: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "42.5", "44.5", "46.4", "48.3", "50.8", "53.3", "55.9", "62.2", "66.0", "69.9"], ["前浪（厘米）", "15.2", "16.2", "17.1", "18.1", "19.1", "20.3", "21.6", "22.9", "24.1", "25.4"], ["后浪（厘米）", "22.9", "23.8", "24.8", "25.7", "26.7", "27.9", "29.2", "30.5", "31.8", "33.0"], ["臀围（厘米）", "55.9", "58.4", "61.0", "63.5", "67.3", "71.1", "74.9", "78.7", "83.8", "88.9"], ["内长（厘米）", "3.2", "3.8", "4.4", "4.4", "5.1", "5.1", "5.7", "5.7", "6.4", "6.4"]],
    size_ref_82: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "43.2", "45.1", "47.0", "48.9", "50.8", "53.3", "58.4", "62.9", "67.3", "71.8"], ["前浪（厘米）", "17.8", "18.7", "19.7", "20.6", "21.6", "22.9", "24.1", "25.4", "26.7", "27.9"], ["后浪（厘米）", "26.7", "27.6", "28.6", "29.5", "30.5", "31.8", "33.0", "34.3", "35.6", "36.8"], ["臀围（厘米）", "61.0", "63.5", "66.0", "68.6", "71.1", "74.9", "78.7", "83.8", "88.9", "94.0"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_83: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "41.9", "43.8", "45.7", "47.6", "49.5", "52.1", "57.2", "61.0", "64.8", "68.6"], ["前浪（厘米）", "14.0", "14.9", "15.9", "16.8", "17.8", "19.1", "20.3", "21.6", "22.9", "24.1"], ["后浪（厘米）", "21.6", "22.5", "23.5", "24.4", "25.4", "26.7", "27.9", "29.2", "30.5", "31.8"], ["臀围（厘米）", "53.3", "55.9", "58.4", "61.0", "63.5", "67.3", "71.1", "76.2", "81.3", "86.4"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_84: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "43.2", "45.1", "47.0", "48.9", "50.8", "53.3", "58.4", "62.9", "67.3", "71.8"], ["前浪（厘米）", "17.8", "18.7", "19.7", "20.6", "21.6", "22.9", "24.1", "25.4", "26.7", "27.9"], ["后浪（厘米）", "26.7", "27.6", "28.6", "29.5", "30.5", "31.8", "33.0", "34.3", "35.6", "36.8"], ["臀围（厘米）", "63.5", "66.0", "68.6", "71.1", "73.7", "77.5", "81.3", "86.4", "91.4", "96.5"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_85: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "41.9", "43.8", "45.7", "47.6", "49.5", "52.1", "57.2", "61.0", "64.8", "68.6"], ["前浪（厘米）", "15.2", "16.2", "17.1", "18.1", "19.1", "20.3", "21.6", "22.9", "24.1", "25.4"], ["后浪（厘米）", "22.9", "23.8", "24.8", "25.7", "26.7", "27.9", "29.2", "30.5", "31.8", "33.0"], ["臀围（厘米）", "55.9", "58.4", "61.0", "63.5", "66.0", "69.9", "73.7", "78.7", "83.8", "88.9"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_86: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["前裙长（厘米）", "18.4", "19.7", "21.0", "22.2", "24.8", "27.3", "29.8", "32.4", "34.3", "36.2"], ["后裙长（厘米）", "20.3", "21.6", "22.9", "24.1", "26.7", "29.2", "31.8", "34.3", "36.2", "38.1"], ["腰围（厘米）", "42.5", "44.5", "46.4", "48.3", "50.8", "53.3", "55.9", "59.7", "63.5", "67.3"], ["臀围（厘米）", "52.1", "54.6", "57.2", "59.7", "63.5", "67.3", "71.1", "74.9", "80.0", "85.1"]],
    size_ref_87: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["领围（厘米）", "50.8", "50.8", "52.1", "53.3", "54.6", "55.9", "57.2", "58.4", "61.0", "63.5"], ["肩宽（厘米）", "24.1", "25.1", "26.0", "27.0", "27.9", "29.2", "30.5", "31.8", "33.7", "35.6"], ["袖长（厘米）", "7.0", "7.0", "7.6", "7.6", "8.3", "8.3", "8.9", "8.9", "9.5", "9.5"], ["衣长（厘米）", "43.2", "46.4", "49.5", "52.7", "55.9", "59.7", "63.5", "67.3", "71.8", "76.2"], ["胸围（厘米）", "26.0", "27.3", "28.6", "29.8", "31.1", "33.0", "34.9", "36.8", "39.4", "41.9"]],
    size_ref_88: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["领围（厘米）", "50.8", "50.8", "52.1", "53.3", "54.6", "55.9", "57.2", "58.4", "61.0", "63.5"], ["肩宽（厘米）", "28.6", "29.5", "30.5", "31.4", "32.4", "33.7", "34.9", "36.2", "38.1", "40.0"], ["袖长（厘米）", "41.3", "44.8", "48.3", "51.8", "55.2", "59.7", "64.1", "68.6", "73.7", "78.7"], ["衣长（厘米）", "33.7", "36.2", "38.7", "41.3", "43.8", "47.0", "50.2", "53.3", "57.8", "62.2"], ["胸围（厘米）", "31.8", "33.0", "34.3", "35.6", "36.8", "38.7", "40.6", "42.5", "45.1", "47.6"], ["腰围（厘米）", "41.3", "43.2", "45.1", "47.0", "48.9", "52.1", "55.2", "59.1", "62.9", "66.7"], ["前浪（厘米）", "17.8", "18.7", "19.7", "20.6", "21.6", "22.9", "24.1", "25.4", "26.7", "27.9"], ["后浪（厘米）", "25.4", "26.4", "27.3", "28.3", "29.2", "30.5", "31.8", "33.0", "34.3", "35.6"], ["臀围（厘米）", "62.2", "64.8", "67.3", "69.9", "72.4", "76.2", "80.0", "85.1", "90.2", "95.3"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_90: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["肩宽（厘米）", "26.7", "27.6", "28.6", "29.5", "30.5", "31.8", "33.0", "34.3", "36.2", "38.1"], ["袖长（厘米）", "43.8", "44.8", "48.3", "51.8", "55.2", "59.7", "64.1", "68.6", "73.7", "78.7"], ["衣长（厘米）", "31.1", "33.7", "36.2", "38.7", "41.3", "44.5", "47.6", "50.8", "54.6", "58.4"], ["胸围（厘米）", "29.2", "30.5", "31.8", "33.0", "34.3", "36.2", "38.1", "40.0", "42.5", "45.1"], ["腰围（厘米）", "41.3", "43.2", "45.1", "47.0", "48.9", "52.1", "55.2", "59.1", "62.9", "66.7"], ["前浪（厘米）", "16.5", "17.5", "18.4", "19.4", "20.3", "21.6", "22.9", "24.1", "25.4", "26.7"], ["后浪（厘米）", "24.1", "25.1", "26.0", "27.0", "27.9", "29.2", "30.5", "31.8", "33.0", "34.3"], ["臀围（厘米）", "57.2", "59.7", "62.2", "64.8", "67.3", "71.1", "74.9", "80.0", "85.1", "90.2"], ["内长（厘米）", "31.8", "35.6", "39.4", "43.2", "47.0", "53.3", "59.7", "66.0", "69.9", "73.7"]],
    size_ref_93: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["领围（厘米）", "50.8", "50.8", "52.1", "53.3", "54.6", "55.9", "57.2", "58.4", "59.7", "61.0"], ["肩宽（厘米）", "21.6", "22.5", "23.5", "24.4", "25.4", "26.7", "27.9", "29.2", "31.1", "33.0"], ["衣长（厘米）", "33.7", "36.2", "38.7", "41.3", "43.8", "47.0", "50.2", "53.3", "57.8", "62.2"], ["胸围（厘米）", "29.2", "30.5", "31.8", "33.0", "34.3", "36.2", "38.1", "40.0", "42.5", "45.1"]],
    size_ref_94: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["领围（厘米）", "50.8", "50.8", "52.1", "53.3", "54.6", "55.9", "57.2", "58.4", "59.7", "61.0"], ["肩宽（厘米）", "20.3", "21.3", "22.2", "23.2", "24.1", "25.4", "26.7", "27.9", "29.8", "31.8"], ["衣长（厘米）", "32.4", "34.9", "37.5", "40.0", "42.5", "45.7", "48.9", "52.1", "56.5", "61.0"], ["胸围（厘米）", "26.7", "27.9", "29.2", "30.5", "31.8", "33.7", "35.6", "37.5", "40.0", "42.5"]],
    size_ref_95: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["上装号型", "80/48", "90/52", "100/52", "100/56", "110/56", "120/60", "130/64", "140/68", "150/72", "160/76"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["领围（厘米）", "50.8", "50.8", "52.1", "53.3", "54.6", "55.9", "57.2", "58.4", "59.7", "61.0"], ["肩宽（厘米）", "20.3", "21.3", "22.2", "23.2", "24.1", "25.4", "26.7", "27.9", "29.8", "31.8"], ["衣长（厘米）", "32.4", "34.9", "37.5", "40.0", "42.5", "45.7", "48.9", "52.1", "56.5", "61.0"], ["胸围（厘米）", "26.7", "27.9", "29.2", "30.5", "31.8", "33.7", "35.6", "37.5", "40.0", "42.5"], ["腰围（厘米）", "43.8", "45.7", "47.6", "49.5", "51.4", "54.6", "57.8", "61.0", "64.1", "67.3"], ["前浪（厘米）", "14.9", "15.9", "16.8", "17.8", "19.1", "20.3", "21.6", "22.9", "24.1", "25.4"], ["后浪（厘米）", "22.5", "23.5", "24.4", "25.4", "26.7", "27.9", "29.2", "30.5", "31.8", "33.0"], ["臀围（厘米）", "57.2", "59.7", "62.2", "64.8", "67.3", "71.1", "74.9", "80.0", "85.1", "90.2"], ["内长（厘米）", "3.2", "3.8", "3.8", "4.4", "4.4", "5.1", "5.1", "5.7", "5.7", "6.4"]],
    size_ref_100: [["美国码", "3", "4", "5", "6", "7", "8", "9", "10"], ["中国码", "19", "20", "21", "22", "23", "24", "25", "26"], ["厘米", "11.7", "12.6", "13.5", "14.4", "15.2", "16", "16.8", "17.8"]],
    size_ref_101: [["美国码", "3", "4", "5", "6", "7", "8", "9", "10"], ["中国码", "19", "20", "21", "22", "23", "24", "25", "26"], ["厘米", "11.7", "12.6", "13.4", "14.4", "15.2", "16", "16.8", "17.9"]],
    size_ref_102: [["美国码", "11", "11.5", "12", "12.5", "13", "1", "1.5", "2", "2.5", "3"], ["中国码", "28", "28.5", "29", "30", "31", "32", "33", "33.5", "34", "35"], ["厘米", "18.8", "19.1", "19.6", "20.1", "20.5", "21.3", "21.8", "22.4", "22.7", "23.1"]],
    size_ref_103: [["美国码", "11", "11.5", "12", "12.5", "13", "1", "1.5", "2", "2.5", "3"], ["中国码", "28", "28.5", "29", "30", "31", "32", "33", "33.5", "34", "35"], ["厘米", "18.7", "19.3", "19.6", "20.1", "20.6", "21.5", "21.7", "22.3", "22.6", "23.1"]],
    size_ref_104: [["尺码标示", "18M", "24M", "36M", "4", "5", "6", "7", "S", "M", "L"], ["下装号型", "80/50", "90/50", "100/50", "100/53", "110/53", "120/56", "130/59", "140/60", "150/63", "160/66"], ["腰围（厘米）", "40.0", "41.9", "43.8", "45.7", "48.3", "50.8", "53.3", "55.9", "59.7", "63.5"], ["前浪（厘米）", "13.7", "14.6", "15.6", "16.5", "17.8", "19.1", "20.3", "21.6", "22.9", "24.1"], ["后浪（厘米）", "20.0", "21.0", "21.9", "22.9", "24.1", "25.4", "26.7", "27.9", "29.2", "30.5"], ["臀围（厘米）", "45.7", "48.3", "50.8", "53.3", "57.2", "61.0", "64.8", "68.6", "73.7", "78.7"], ["内长（厘米）", "24.1", "27.9", "31.8", "35.6", "41.9", "48.3", "54.6", "61.0", "64.8", "68.6"]],
    size_ref_105: [["美国码（男性）", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "14", "15", "16", "17", "18"], ["美国码（女性）", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5", "15", "16", "17", "18", "19", "20"], ["中国码", "34", "35", "36", "36.5", "37", "37.5", "38", "39", "39.5", "40", "41", "41.5", "42", "42.5", "43", "44", "44.5", "45", "46", "46.5", "47", "48", "49", "50", "51.5", "53", "54"], ["厘米", "21", "22", "22.5", "23", "23.5", "24", "24.5", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31", "31.5", "32", "33", "34", "35", "36"]],
    size_ref_106: [["美国码（男性）", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "14", "15", "16", "17", "18"], ["美国码（女性）", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5", "15", "16", "17", "18", "19", "20"], ["中国码", "34", "35", "36", "36.5", "37", "37.5", "38", "39", "39.5", "40", "41", "41.5", "42", "42.5", "43", "44", "44.5", "45", "46", "46.5", "47", "48", "49", "50", "51.5", "53", "54"], ["厘米", "21", "22", "22.5", "23", "23.5", "24", "24.5", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31", "31.5", "32", "33", "34", "35", "36"]],
    size_ref_107: [["美国码（女性）", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5", "15", "16", "17", "18", "19", "20"], ["中国码", "35", "36", "36.5", "37", "37.5", "38", "39", "39.5", "40", "41", "41.5", "42", "42.5", "43", "44", "44.5", "45", "46", "46.5", "47", "48", "49", "50", "51.5", "53", "54"], ["厘米", "22", "22.5", "23", "23.5", "24", "24.5", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31", "31.5", "32", "33", "34", "35", "36"]],
    size_ref_108: [["美国码（男性）", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "14", "15", "16", "17", "18"], ["中国码", "35", "36", "36.5", "37", "37.5", "38", "39", "39.5", "40", "41", "41.5", "42", "42.5", "43", "44", "44.5", "45", "46", "46.5", "47", "48", "49", "50", "51.5", "53", "54"], ["厘米", "22", "22.5", "23", "23.5", "24", "24.5", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31", "31.5", "32", "33", "34", "35", "36"]],
    size_ref_109: [["美国码（男性）", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"], ["美国码（女性）", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"], ["中国码", "35", "35.5", "36", "37", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42", "42.5", "43", "44", "44.5", "45", "46", "46.5", "47", "47.5"], ["厘米", "21", "21.5", "22", "22.5", "23", "23.5", "24", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31"]],
    size_ref_110: [["美国码（男性）", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"], ["美国码（女性）", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"], ["中国码", "35", "35.5", "36", "37", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42", "42.5", "43", "44", "44.5", "45", "46", "46.5", "47", "47.5"], ["厘米", "21", "21.5", "22", "22.5", "23", "23.5", "24", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31"]],
    size_ref_111: [["美国码（女性）", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"], ["中国码", "35", "35.5", "36", "37", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42", "42.5", "43", "44", "44.5", "45", "46", "46.5"], ["厘米", "21", "21.5", "22", "22.5", "23", "23.5", "24", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30"]],
    size_ref_112: [["美国码（男性）", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"], ["中国码", "35", "35.5", "36", "37", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42", "42.5", "43", "44", "44.5", "45", "46", "46.5", "47", "47.5"], ["厘米", "21", "21.5", "22", "22.5", "23", "23.5", "24", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31"]],
    size_ref_113: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["上装号型", "165/88A", "165/92A", "170/96A", "175/100A", "180/104A", "185/108A", "190/112B"], ["适合胸围(厘米)", "88  90", "92  94", "96  98", "100  102", "104  106", "108  110", "112  114"], ["适合胸围(英寸)", "34 5/8  35 3/8", "36 2/8  37", "37 6/8  38 4/8", "39 3/8  40 1/8", "41  41 5/8", "42 4/8  43 2/8", "44  44 7/8"]],
    size_ref_114: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "165/70A", "165/72A 165/74A", "170/78A 170/80A", "175/82A 175/84A", "180/86A 180/88A", "185/92A 185/94A", "190/98B 190/100B"], ["数字码(英寸)", "27", "28  29", "30  31", "32  33", "34  35", "36  37", "38  39"], ["适合腰围(厘米)", "70", "72  74", "78  80", "82  84", "86  88", "92  94", "98  100"], ["适合腰围(英寸)", "27 4/8", "28 2/8  29", "30 4/8  31 3/8", "32 2/8  33", "33 7/8	34 5/8", "36 1/8  37", "38 4/8  39 3/8"], ["适合臂围", "84", "86  88", "92  94", "96  98", "102  104", "106  108", "110  112"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_115: [["尺码标示", "XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "165/70A", "165/72A 165/74A", "170/78A 170/80A", "175/82A 175/84A", "180/86A 180/88A", "185/92A 185/94A", "190/98B 190/100B"], ["数字码(英寸)", "27", "28  29", "30  31", "32  33", "34  35", "36  37", "38  39"], ["适合腰围(厘米)", "70", "72  74", "78  80", "82  84", "86  88", "92  94", "98  100"], ["适合腰围(英寸)", "27 4/8", "28 2/8  29", "30 4/8  31 3/8", "32 2/8  33", "33 7/8	34 5/8", "36 1/8  37", "38 4/8  39 3/8"], ["适合臂围", "84", "86  88", "92  94", "96  98", "102  104", "106  108", "110  112"], ["体型", "A", "A", "A", "A", "A", "A", "B"]],
    size_ref_116: [["尺码标示", "S", "M", "L", "XL", "XXL", "XXXL"], ["下装号型", "155/64A", "160/66A", "160/68A", "165/72A", "165/74A", "170/76A"], ["数字码(英寸)", "25", "26", "27", "28", "29", "30"], ["适合腰围(厘米)", "64", "66", "68", "72", "74", "76"]],
    size_ref_117: [["尺码标示", "00", "0", "2", "4", "6", "8"], ["下装号型", "155/62A", "155/64A", "160/66A", "160/68A", "165/72A", "165/74A"], ["数字码(英寸)", "24", "25", "26", "27", "28", "29"], ["适合腰围(厘米)", "62", "64", "66", "68", "72", "74"]],
    size_ref_118: [["美国码", "1", "2", "3", "4"], ["中国码", "17", "18", "19", "20"], ["厘米", "10.5", "11", "11.5", "12"]],
    size_ref_119: [["美国码", "2", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"], ["中国码", "18", "18.5", "19", "19.5", "20", "20.5", "21", "21.5", "22", "22.5", "23", "23.5", "24", "24.5", "25", "25.5", "26", "26.5", "27"], ["厘米", "10", "10.5", "11", "11", "11.5", "12", "12.5", "13", "13", "13.5", "14", "14.5", "15", "15", "15.5", "16", "16.5", "17", "17.5"]],
    size_ref_120: [["美国码", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "1", "1.5", "2", "2.5", "3"], ["中国码", "27", "28", "28.5", "29", "30", "31", "31.5", "32", "33", "33.5", "34", "35"], ["厘米", "17", "17", "17.5", "18", "18.5", "19", "19", "19.5", "20", "20.5", "21", "21.5"]],
    size_ref_121: [["美国码", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5"], ["中国码", "26", "27", "28", "28.5", "29", "30", "31", "31.5", "32", "33", "33.5", "34", "35", "35.5", "36", "37", "37.5", "38", "38.5", "39", "40", "40.5"], ["厘米", "16.5", "17", "17", "17.5", "18", "18.5", "19", "19", "19.5", "20", "20.5", "21", "21.5", "21.5", "22", "22.5", "23", "23.5", "24", "24.5", "25", "25.5"]],
    size_ref_122: [["美国码", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5"], ["中国码", "35.5", "36", "37", "37.5", "38", "38.5", "39", "40", "40.5"], ["厘米", "21.5", "22", "22.5", "23", "23.5", "24", "24.5", "25", "25.5"]]
};
var infoObject = {
    size_ref_1: ["鞋类尺码对照表", "硫化鞋(Chuck Taylor/Converse All Star/Star Player)", true],
    size_ref_2: ["鞋类尺码对照表", "硫化鞋(Chuck Taylor/Converse All Star/Star Player)", true],
    size_ref_3: ["鞋类尺码对照表", "硫化鞋(Jack Purcel/One Star/滑板鞋)", false],
    size_ref_4: ["鞋类尺码对照表", "硫化鞋(Jack Purcel/One Star/滑板鞋)", false],
    size_ref_5: ["鞋类尺码对照表", "All star Light", true],
    size_ref_6: ["男士上衣尺码对照表", "", false],
    size_ref_7: ["男士下装尺码对照表", "", false],
    size_ref_8: ["女士上衣尺码对照表", "", false],
    size_ref_9: ["女士下装尺码对照表", "", false],
    size_ref_12: ["男士下装尺码对照表", "", false],
    size_ref_13: ["女士下装尺码对照表", "", false],
    size_ref_6_chuck: ["男士上衣尺码对照表", "", true],
    size_ref_7_chuck: ["男士下装尺码对照表", "", true],
    size_ref_8_chuck: ["女士上衣尺码对照表", "", true],
    size_ref_9_chuck: ["女士下装尺码对照表", "", true],
    size_ref_12_chuck: ["男士下装尺码对照表", "", true],
    size_ref_13_chuck: ["女士下装尺码对照表", "", true],
    size_ref_14: ["鞋类尺码对照表", "", false],
    size_ref_14_chuck: ["鞋类尺码对照表", "", true],
    size_ref_15: ["鞋类尺码对照表", "", false],
    size_ref_15_chuck: ["鞋类尺码对照表", "", true],
    size_ref_20: ["鞋类尺码对照表", "", false],
    size_ref_20_chuck: ["鞋类尺码对照表", "", true],
    size_ref_21: ["鞋类尺码对照表", "", false],
    size_ref_21_chuck: ["鞋类尺码对照表", "", true],
    size_ref_22: ["鞋类尺码对照表", "", false],
    size_ref_22_chuck: ["鞋类尺码对照表", "", true],
    size_ref_23: ["鞋类尺码对照表", "", false],
    size_ref_23_chuck: ["鞋类尺码对照表", "", true],
    size_ref_25: ["鞋类尺码对照表", "", false],
    size_ref_25_chuck: ["鞋类尺码对照表", "硫化鞋(Chuck Taylor/Converse All Star/Star Player)", true],
    size_ref_17: ["鞋类尺码对照表", "", false],
    size_ref_18: ["鞋类尺码对照表", "", false],
    size_ref_24: ["鞋类尺码对照表", "", false],
    size_ref_17_chuck: ["鞋类尺码对照表", "", false],
    size_ref_18_chuck: ["鞋类尺码对照表", "", false],
    size_ref_24_chuck: ["鞋类尺码对照表", "", false],
    size_ref_45: ["女童背心尺码对照表", "", false],
    size_ref_46: ["男童短T恤尺码对照表", "", false],
    size_ref_47: ["女童短T恤尺码对照表", "", false],
    size_ref_48: ["男童POLO衫尺码对照表", "", false],
    size_ref_49: ["女童POLO衫尺码对照表", "", false],
    size_ref_50: ["男童衬衣尺码对照表", "", false],
    size_ref_51: ["男童套头卫衣尺码对照表", "", false],
    size_ref_52: ["男童套头卫衣尺码对照表", "", false],
    size_ref_53: ["女童套头卫衣尺码对照表", "", false],
    size_ref_54: ["男童短裤尺码对照表", "", false],
    size_ref_55: ["女童短裤尺码对照表", "", false],
    size_ref_56: ["男童长裤尺码对照表", "", false],
    size_ref_57: ["女童连衣裙尺码对照表", "", false],
    size_ref_92: ["女童套装尺码对照表", "", false],
    size_ref_58: ["男童T恤/POLO衫尺码对照表", "", false],
    size_ref_59: ["女童T恤/POLO衫尺码对照表", "", false],
    size_ref_60: ["男童衬衣尺码对照表", "", false],
    size_ref_61: ["女童衬衣尺码对照表", "", false],
    size_ref_62: ["男童卫衣/夹克/皮衣尺码对照表", "", false],
    size_ref_63: ["女童卫衣/夹克/皮衣尺码对照表", "", false],
    size_ref_64: ["男童马夹尺码对照表", "", false],
    size_ref_65: ["女童马夹尺码对照表", "", false],
    size_ref_66: ["男童短羽绒/棉服尺码对照表", "", false],
    size_ref_67: ["女童短羽绒/棉服尺码对照表", "", false],
    size_ref_68: ["男童中长羽绒/棉服尺码对照表", "", false],
    size_ref_69: ["女童中长羽绒/棉服尺码对照表", "", false],
    size_ref_70: ["男童长羽绒/棉服尺码对照表", "", false],
    size_ref_71: ["女童长羽绒/棉服尺码对照表", "", false],
    size_ref_72: ["男童针织短裤尺码对照表", "", false],
    size_ref_73: ["女童针织短裤尺码对照表", "", false],
    size_ref_74: ["男童针织7分裤尺码对照表", "", false],
    size_ref_75: ["女童针织7分裤尺码对照表", "", false],
    size_ref_76: ["男童针织长裤尺码对照表", "", false],
    size_ref_77: ["女童针织长裤尺码对照表", "", false],
    size_ref_78: ["男童针织棉裤尺码对照表", "", false],
    size_ref_79: ["女童针织棉裤尺码对照表", "", false],
    size_ref_80: ["男童梭织短裤尺码对照表", "", false],
    size_ref_81: ["女童梭织短裤尺码对照表", "", false],
    size_ref_82: ["男童梭织长裤尺码对照表", "", false],
    size_ref_83: ["女童梭织长裤尺码对照表", "", false],
    size_ref_84: ["男童梭织棉裤尺码对照表", "", false],
    size_ref_85: ["女童梭织棉裤尺码对照表", "", false],
    size_ref_86: ["女童短裙尺码对照表", "", false],
    size_ref_87: ["女童连衣裙尺码对照表", "", false],
    size_ref_88: ["男童套装尺码对照表", "", false],
    size_ref_90: ["女童套装尺码对照表", "", false],
    size_ref_93: ["男童背心尺码对照表", "", false],
    size_ref_94: ["女童背心尺码对照表", "", false],
    size_ref_95: ["女童套装尺码对照表", "", false],
    size_ref_100: ["鞋类尺寸对照表", "", false],
    size_ref_101: ["鞋类尺寸对照表", "", false],
    size_ref_102: ["鞋类尺寸对照表", "", false],
    size_ref_103: ["鞋类尺寸对照表", "", false],
    size_ref_104: ["女童打底裤尺码对照表", "", false],
    size_ref_105: ["鞋类尺码对照表", "", false],
    size_ref_106: ["鞋类尺码对照表", "", false],
    size_ref_107: ["鞋类尺码对照表", "", false],
    size_ref_108: ["鞋类尺码对照表", "", false],
    size_ref_109: ["鞋类尺码对照表", "", false],
    size_ref_110: ["鞋类尺码对照表", "", false],
    size_ref_111: ["鞋类尺码对照表", "", false],
    size_ref_112: ["鞋类尺码对照表", "", false],
    size_ref_113: ["男士上装尺码对照表", "", false],
    size_ref_114: ["男士下装尺码对照表", "", false],
    size_ref_115: ["男士下装尺码对照表", "", false],
    size_ref_116: ["女士下装尺码对照表", "", false],
    size_ref_117: ["女士下装尺码对照表", "", false],
    size_ref_118: ["新生婴幼儿尺码对照表", "", false],
    size_ref_119: ["婴幼儿尺码对照表", "", false],
    size_ref_120: ["小童尺码对照表", "", false],
    size_ref_121: ["儿童尺码对照表", "", false],
    size_ref_122: ["大童尺码对照表", "", false],
};
(function (r) {
    r.fn.qrcode = function (h) {
        var s;

        function u(a) {
            this.mode = s;
            this.data = a
        }

        function o(a, c) {
            this.typeNumber = a;
            this.errorCorrectLevel = c;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = []
        }

        function q(a, c) {
            if (void 0 == a.length) throw Error(a.length + "/" + c);
            for (var d = 0; d < a.length && 0 == a[d];) d++;
            this.num = Array(a.length - d + c);
            for (var b = 0; b < a.length - d; b++) this.num[b] = a[b + d]
        }

        function p(a, c) {
            this.totalCount = a;
            this.dataCount = c
        }

        function t() {
            this.buffer = [];
            this.length = 0
        }

        u.prototype = {
            getLength: function () {
                return this.data.length
            },
            write: function (a) {
                for (var c = 0; c < this.data.length; c++) a.put(this.data.charCodeAt(c), 8)
            }
        };
        o.prototype = {
            addData: function (a) {
                this.dataList.push(new u(a));
                this.dataCache = null
            }, isDark: function (a, c) {
                if (0 > a || this.moduleCount <= a || 0 > c || this.moduleCount <= c) throw Error(a + "," + c);
                return this.modules[a][c]
            }, getModuleCount: function () {
                return this.moduleCount
            }, make: function () {
                if (1 > this.typeNumber) {
                    for (var a = 1, a = 1; 40 > a; a++) {
                        for (var c = p.getRSBlocks(a, this.errorCorrectLevel), d = new t, b = 0, e = 0; e < c.length; e++) b += c[e].dataCount;
                        for (e = 0; e < this.dataList.length; e++) c = this.dataList[e], d.put(c.mode, 4), d.put(c.getLength(), j.getLengthInBits(c.mode, a)), c.write(d);
                        if (d.getLengthInBits() <= 8 * b) break
                    }
                    this.typeNumber = a
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            }, makeImpl: function (a, c) {
                this.moduleCount = 4 * this.typeNumber + 17;
                this.modules = Array(this.moduleCount);
                for (var d = 0; d < this.moduleCount; d++) {
                    this.modules[d] = Array(this.moduleCount);
                    for (var b = 0; b < this.moduleCount; b++) this.modules[d][b] = null
                }
                this.setupPositionProbePattern(0, 0);
                this.setupPositionProbePattern(this.moduleCount -
                    7, 0);
                this.setupPositionProbePattern(0, this.moduleCount - 7);
                this.setupPositionAdjustPattern();
                this.setupTimingPattern();
                this.setupTypeInfo(a, c);
                7 <= this.typeNumber && this.setupTypeNumber(a);
                null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
                this.mapData(this.dataCache, c)
            }, setupPositionProbePattern: function (a, c) {
                for (var d = -1; 7 >= d; d++) if (!(-1 >= a + d || this.moduleCount <= a + d)) for (var b = -1; 7 >= b; b++) -1 >= c + b || this.moduleCount <= c + b || (this.modules[a + d][c + b] =
                    0 <= d && 6 >= d && (0 == b || 6 == b) || 0 <= b && 6 >= b && (0 == d || 6 == d) || 2 <= d && 4 >= d && 2 <= b && 4 >= b ? !0 : !1)
            }, getBestMaskPattern: function () {
                for (var a = 0, c = 0, d = 0; 8 > d; d++) {
                    this.makeImpl(!0, d);
                    var b = j.getLostPoint(this);
                    if (0 == d || a > b) a = b, c = d
                }
                return c
            }, createMovieClip: function (a, c, d) {
                a = a.createEmptyMovieClip(c, d);
                this.make();
                for (c = 0; c < this.modules.length; c++) for (var d = 1 * c, b = 0; b < this.modules[c].length; b++) {
                    var e = 1 * b;
                    this.modules[c][b] && (a.beginFill(0, 100), a.moveTo(e, d), a.lineTo(e + 1, d), a.lineTo(e + 1, d + 1), a.lineTo(e, d + 1), a.endFill())
                }
                return a
            },
            setupTimingPattern: function () {
                for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
                for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
            }, setupPositionAdjustPattern: function () {
                for (var a = j.getPatternPosition(this.typeNumber), c = 0; c < a.length; c++) for (var d = 0; d < a.length; d++) {
                    var b = a[c], e = a[d];
                    if (null == this.modules[b][e]) for (var f = -2; 2 >= f; f++) for (var i = -2; 2 >= i; i++) this.modules[b + f][e + i] = -2 == f || 2 == f || -2 == i || 2 == i || 0 == f && 0 == i ? !0 : !1
                }
            }, setupTypeNumber: function (a) {
                for (var c =
                    j.getBCHTypeNumber(this.typeNumber), d = 0; 18 > d; d++) {
                    var b = !a && 1 == (c >> d & 1);
                    this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = b
                }
                for (d = 0; 18 > d; d++) b = !a && 1 == (c >> d & 1), this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = b
            }, setupTypeInfo: function (a, c) {
                for (var d = j.getBCHTypeInfo(this.errorCorrectLevel << 3 | c), b = 0; 15 > b; b++) {
                    var e = !a && 1 == (d >> b & 1);
                    6 > b ? this.modules[b][8] = e : 8 > b ? this.modules[b + 1][8] = e : this.modules[this.moduleCount - 15 + b][8] = e
                }
                for (b = 0; 15 > b; b++) e = !a && 1 == (d >> b & 1), 8 > b ? this.modules[8][this.moduleCount -
                b - 1] = e : 9 > b ? this.modules[8][15 - b - 1 + 1] = e : this.modules[8][15 - b - 1] = e;
                this.modules[this.moduleCount - 8][8] = !a
            }, mapData: function (a, c) {
                for (var d = -1, b = this.moduleCount - 1, e = 7, f = 0, i = this.moduleCount - 1; 0 < i; i -= 2) for (6 == i && i--; ;) {
                    for (var g = 0; 2 > g; g++) if (null == this.modules[b][i - g]) {
                        var n = !1;
                        f < a.length && (n = 1 == (a[f] >>> e & 1));
                        j.getMask(c, b, i - g) && (n = !n);
                        this.modules[b][i - g] = n;
                        e--;
                        -1 == e && (f++, e = 7)
                    }
                    b += d;
                    if (0 > b || this.moduleCount <= b) {
                        b -= d;
                        d = -d;
                        break
                    }
                }
            }
        };
        o.PAD0 = 236;
        o.PAD1 = 17;
        o.createData = function (a, c, d) {
            for (var c = p.getRSBlocks(a,
                c), b = new t, e = 0; e < d.length; e++) {
                var f = d[e];
                b.put(f.mode, 4);
                b.put(f.getLength(), j.getLengthInBits(f.mode, a));
                f.write(b)
            }
            for (e = a = 0; e < c.length; e++) a += c[e].dataCount;
            if (b.getLengthInBits() > 8 * a) throw Error("code length overflow. (" + b.getLengthInBits() + ">" + 8 * a + ")");
            for (b.getLengthInBits() + 4 <= 8 * a && b.put(0, 4); 0 != b.getLengthInBits() % 8;) b.putBit(!1);
            for (; !(b.getLengthInBits() >= 8 * a);) {
                b.put(o.PAD0, 8);
                if (b.getLengthInBits() >= 8 * a) break;
                b.put(o.PAD1, 8)
            }
            return o.createBytes(b, c)
        };
        o.createBytes = function (a, c) {
            for (var d =
                0, b = 0, e = 0, f = Array(c.length), i = Array(c.length), g = 0; g < c.length; g++) {
                var n = c[g].dataCount, h = c[g].totalCount - n, b = Math.max(b, n), e = Math.max(e, h);
                f[g] = Array(n);
                for (var k = 0; k < f[g].length; k++) f[g][k] = 255 & a.buffer[k + d];
                d += n;
                k = j.getErrorCorrectPolynomial(h);
                n = (new q(f[g], k.getLength() - 1)).mod(k);
                i[g] = Array(k.getLength() - 1);
                for (k = 0; k < i[g].length; k++) h = k + n.getLength() - i[g].length, i[g][k] = 0 <= h ? n.get(h) : 0
            }
            for (k = g = 0; k < c.length; k++) g += c[k].totalCount;
            d = Array(g);
            for (k = n = 0; k < b; k++) for (g = 0; g < c.length; g++) k < f[g].length &&
            (d[n++] = f[g][k]);
            for (k = 0; k < e; k++) for (g = 0; g < c.length; g++) k < i[g].length && (d[n++] = i[g][k]);
            return d
        };
        s = 4;
        for (var j = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52,
                78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (a) {
                for (var c = a << 10; 0 <= j.getBCHDigit(c) - j.getBCHDigit(j.G15);) c ^= j.G15 << j.getBCHDigit(c) - j.getBCHDigit(j.G15);
                return (a << 10 | c) ^ j.G15_MASK
            },
            getBCHTypeNumber: function (a) {
                for (var c = a << 12; 0 <= j.getBCHDigit(c) -
                j.getBCHDigit(j.G18);) c ^= j.G18 << j.getBCHDigit(c) - j.getBCHDigit(j.G18);
                return a << 12 | c
            },
            getBCHDigit: function (a) {
                for (var c = 0; 0 != a;) c++, a >>>= 1;
                return c
            },
            getPatternPosition: function (a) {
                return j.PATTERN_POSITION_TABLE[a - 1]
            },
            getMask: function (a, c, d) {
                switch (a) {
                    case 0:
                        return 0 == (c + d) % 2;
                    case 1:
                        return 0 == c % 2;
                    case 2:
                        return 0 == d % 3;
                    case 3:
                        return 0 == (c + d) % 3;
                    case 4:
                        return 0 == (Math.floor(c / 2) + Math.floor(d / 3)) % 2;
                    case 5:
                        return 0 == c * d % 2 + c * d % 3;
                    case 6:
                        return 0 == (c * d % 2 + c * d % 3) % 2;
                    case 7:
                        return 0 == (c * d % 3 + (c + d) % 2) % 2;
                    default:
                        throw Error("bad maskPattern:" +
                            a);
                }
            },
            getErrorCorrectPolynomial: function (a) {
                for (var c = new q([1], 0), d = 0; d < a; d++) c = c.multiply(new q([1, l.gexp(d)], 0));
                return c
            },
            getLengthInBits: function (a, c) {
                if (1 <= c && 10 > c) switch (a) {
                    case 1:
                        return 10;
                    case 2:
                        return 9;
                    case s:
                        return 8;
                    case 8:
                        return 8;
                    default:
                        throw Error("mode:" + a);
                } else if (27 > c) switch (a) {
                    case 1:
                        return 12;
                    case 2:
                        return 11;
                    case s:
                        return 16;
                    case 8:
                        return 10;
                    default:
                        throw Error("mode:" + a);
                } else if (41 > c) switch (a) {
                    case 1:
                        return 14;
                    case 2:
                        return 13;
                    case s:
                        return 16;
                    case 8:
                        return 12;
                    default:
                        throw Error("mode:" +
                            a);
                } else throw Error("type:" + c);
            },
            getLostPoint: function (a) {
                for (var c = a.getModuleCount(), d = 0, b = 0; b < c; b++) for (var e = 0; e < c; e++) {
                    for (var f = 0, i = a.isDark(b, e), g = -1; 1 >= g; g++) if (!(0 > b + g || c <= b + g)) for (var h = -1; 1 >= h; h++) 0 > e + h || c <= e + h || 0 == g && 0 == h || i == a.isDark(b + g, e + h) && f++;
                    5 < f && (d += 3 + f - 5)
                }
                for (b = 0; b < c - 1; b++) for (e = 0; e < c - 1; e++) if (f = 0, a.isDark(b, e) && f++, a.isDark(b + 1, e) && f++, a.isDark(b, e + 1) && f++, a.isDark(b + 1, e + 1) && f++, 0 == f || 4 == f) d += 3;
                for (b = 0; b < c; b++) for (e = 0; e < c - 6; e++) a.isDark(b, e) && !a.isDark(b, e + 1) && a.isDark(b, e +
                    2) && a.isDark(b, e + 3) && a.isDark(b, e + 4) && !a.isDark(b, e + 5) && a.isDark(b, e + 6) && (d += 40);
                for (e = 0; e < c; e++) for (b = 0; b < c - 6; b++) a.isDark(b, e) && !a.isDark(b + 1, e) && a.isDark(b + 2, e) && a.isDark(b + 3, e) && a.isDark(b + 4, e) && !a.isDark(b + 5, e) && a.isDark(b + 6, e) && (d += 40);
                for (e = f = 0; e < c; e++) for (b = 0; b < c; b++) a.isDark(b, e) && f++;
                a = Math.abs(100 * f / c / c - 50) / 5;
                return d + 10 * a
            }
        }, l = {
            glog: function (a) {
                if (1 > a) throw Error("glog(" + a + ")");
                return l.LOG_TABLE[a]
            }, gexp: function (a) {
                for (; 0 > a;) a += 255;
                for (; 256 <= a;) a -= 255;
                return l.EXP_TABLE[a]
            }, EXP_TABLE: Array(256),
            LOG_TABLE: Array(256)
        }, m = 0; 8 > m; m++) l.EXP_TABLE[m] = 1 << m;
        for (m = 8; 256 > m; m++) l.EXP_TABLE[m] = l.EXP_TABLE[m - 4] ^ l.EXP_TABLE[m - 5] ^ l.EXP_TABLE[m - 6] ^ l.EXP_TABLE[m - 8];
        for (m = 0; 255 > m; m++) l.LOG_TABLE[l.EXP_TABLE[m]] = m;
        q.prototype = {
            get: function (a) {
                return this.num[a]
            }, getLength: function () {
                return this.num.length
            }, multiply: function (a) {
                for (var c = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++) for (var b = 0; b < a.getLength(); b++) c[d + b] ^= l.gexp(l.glog(this.get(d)) + l.glog(a.get(b)));
                return new q(c, 0)
            }, mod: function (a) {
                if (0 >
                    this.getLength() - a.getLength()) return this;
                for (var c = l.glog(this.get(0)) - l.glog(a.get(0)), d = Array(this.getLength()), b = 0; b < this.getLength(); b++) d[b] = this.get(b);
                for (b = 0; b < a.getLength(); b++) d[b] ^= l.gexp(l.glog(a.get(b)) + c);
                return (new q(d, 0)).mod(a)
            }
        };
        p.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27],
            [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146,
                116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15,
                43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45,
                3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19,
                55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10,
                45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
        p.getRSBlocks = function (a, c) {
            var d = p.getRsBlockTable(a, c);
            if (void 0 == d) throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + c);
            for (var b = d.length / 3, e = [], f = 0; f < b; f++) for (var h = d[3 * f + 0], g = d[3 * f + 1], j = d[3 * f + 2], l = 0; l < h; l++) e.push(new p(g, j));
            return e
        };
        p.getRsBlockTable = function (a, c) {
            switch (c) {
                case 1:
                    return p.RS_BLOCK_TABLE[4 * (a - 1) + 0];
                case 0:
                    return p.RS_BLOCK_TABLE[4 * (a - 1) + 1];
                case 3:
                    return p.RS_BLOCK_TABLE[4 *
                    (a - 1) + 2];
                case 2:
                    return p.RS_BLOCK_TABLE[4 * (a - 1) + 3]
            }
        };
        t.prototype = {
            get: function (a) {
                return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
            }, put: function (a, c) {
                for (var d = 0; d < c; d++) this.putBit(1 == (a >>> c - d - 1 & 1))
            }, getLengthInBits: function () {
                return this.length
            }, putBit: function (a) {
                var c = Math.floor(this.length / 8);
                this.buffer.length <= c && this.buffer.push(0);
                a && (this.buffer[c] |= 128 >>> this.length % 8);
                this.length++
            }
        };
        "string" === typeof h && (h = {text: h});
        h = r.extend({}, {
            render: "canvas", width: 256, height: 256, typeNumber: -1,
            correctLevel: 2, background: "#ffffff", foreground: "#000000"
        }, h);
        return this.each(function () {
            var a;
            if ("canvas" == h.render) {
                a = new o(h.typeNumber, h.correctLevel);
                a.addData(h.text);
                a.make();
                var c = document.createElement("canvas");
                c.width = h.width;
                c.height = h.height;
                for (var d = c.getContext("2d"), b = h.width / a.getModuleCount(), e = h.height / a.getModuleCount(), f = 0; f < a.getModuleCount(); f++) for (var i = 0; i < a.getModuleCount(); i++) {
                    d.fillStyle = a.isDark(f, i) ? h.foreground : h.background;
                    var g = Math.ceil((i + 1) * b) - Math.floor(i * b),
                        j = Math.ceil((f + 1) * b) - Math.floor(f * b);
                    d.fillRect(Math.round(i * b), Math.round(f * e), g, j)
                }
            } else {
                a = new o(h.typeNumber, h.correctLevel);
                a.addData(h.text);
                a.make();
                c = r("<table></table>").css("width", h.width + "px").css("height", h.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", h.background);
                d = h.width / a.getModuleCount();
                b = h.height / a.getModuleCount();
                for (e = 0; e < a.getModuleCount(); e++) {
                    f = r("<tr></tr>").css("height", b + "px").appendTo(c);
                    for (i = 0; i < a.getModuleCount(); i++) r("<td></td>").css("width",
                        d + "px").css("background-color", a.isDark(e, i) ? h.foreground : h.background).appendTo(f)
                }
            }
            a = c;
            jQuery(a).appendTo(this)
        })
    }
})(jQuery);

var province = ["北京", "上海", "天津", "重庆", "广东省", "浙江省", "江苏省", "福建省", "辽宁省", "安徽省", "四川省", "山东省", "河北省", "河南省", "湖北省", "湖南省", "江西省", "陕西省", "黑龙江省", "内蒙古自治区", "山西省", "甘肃省", "青海省", "吉林省", "广西壮族自治区", "云南省", "西藏自治区", "新疆维吾尔自治区", "海南省", "贵州省", "宁夏回族自治区"];
var city = [];
city[0] = [{
    city: "北京市",
    data: ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县", "其它区"]
}];
city[1] = [{
    city: "上海市",
    data: ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "川沙区", "崇明县", "其它区"]
}];
city[2] = [{
    city: "天津市",
    data: ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "滨海新区", "宁河县", "静海县", "蓟县", "其它区"]
}];
city[3] = [{
    city: "重庆市",
    data: ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "黔江区", "长寿区", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "梁平县", "城口县", "丰都县", "垫江县", "武隆县", "忠县", "开县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "江津区", "合川区", "永川区", "南川区", "其它区"]
}];
city[4] = [{
    city: "广州市",
    data: ["越秀区", "荔湾区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "萝岗区", "增城市", "从化市", "东山区", "其它区"]
}, {city: "深圳市", data: ["福田区", "罗湖区", "南山区", "宝安区", "龙岗区", "盐田区", "其它区"]}, {
    city: "珠海市",
    data: ["香洲区", "斗门区", "金湾区", "金唐区", "南湾区", "其它区"]
}, {city: "汕头市", data: ["金平区", "龙湖区", "濠江区", "潮阳市", "潮南区", "澄海区", "南澳县", "其它区"]}, {
    city: "韶关市",
    data: ["浈江区", "武江区", "曲江区", "乐昌市", "南雄市", "始兴县", "仁化县", "翁源县", "乳源瑶族自治县", "新丰县", "其它区"]
}, {city: "佛山市", data: ["禅城区", "南海区", "顺德区", "三水区", "高明区", "其它区"]}, {
    city: "江门市",
    data: ["江海区", "蓬江区", "新会区", "台山市", "开平市", "鹤山市", "恩平市", "其它区"]
}, {city: "湛江市", data: ["赤坎区", "霞山区", "坡头区", "麻章区", "廉江市", "雷州市", "吴川市", "遂溪县", "徐闻县", "其它区"]}, {
    city: "茂名市",
    data: ["茂南区", "茂港区", "高州市", "化州市", "信宜市", "电白县", "其它区"]
}, {city: "肇庆市", data: ["端州区", "鼎湖区", "高要市", "四会市", "广宁县", "怀集县", "封开县", "德庆县", "其它区"]}, {
    city: "惠州市",
    data: ["惠城区", "惠阳区", "博罗县", "惠东县", "龙门县", "其它区"]
}, {city: "梅州市", data: ["梅江区", "兴宁市", "梅县", "丰顺县", "大埔县", "五华县", "平远县", "蕉岭县", "其它区"]}, {
    city: "汕尾市",
    data: ["城区", "陆丰市", "海丰县", "陆河县", "其它区"]
}, {city: "河源市", data: ["源城区", "紫金县", "龙川县", "东源县", "连平县", "和平县", "其它区"]}, {
    city: "阳江市",
    data: ["江城区", "阳春市", "阳西县", "阳东县", "其它区"]
}, {city: "清远市", data: ["清城区", "英德市", "连州市", "佛冈县", "阳山县", "清新县", "连南瑶族自治县", "连山壮族瑶族自治县", "其它区"]}, {
    city: "东莞市",
    data: ["东城街道", "南城街道", "万江街道", "莞城街道", "石碣镇", "石龙镇", "茶山镇", "石排镇", "企石镇", "横沥镇", "桥头镇", "谢岗镇", "东坑镇", "常平镇", "寮步镇", "樟木头镇", "大朗镇", "黄江镇", "清溪镇", "塘厦镇", "凤岗镇", "大岭山镇", "长安镇", "虎门镇", "厚街镇", "沙田镇", "道滘镇", "洪梅镇", "麻涌镇", "望牛墩镇", "中堂镇", "高埗镇", "松山湖管委会", "虎门港管委会", "东莞生态园", "其他区"]
}, {
    city: "中山市",
    data: ["石岐区街道", "东区街道", "火炬开发区街道", "西区街道", "南区街道", "五桂山街道", "小榄镇", "黄圃镇", "民众镇", "东凤镇", "东升镇", "古镇镇", "沙溪镇", "坦洲镇", "港口镇", "三角镇", "横栏镇", "南头镇", "阜沙镇", "南朗镇", "三乡镇", "板芙镇", "大涌镇", "神湾镇", "其他区"]
}, {city: "潮州市", data: ["湘桥区", "潮安县", "饶平县", "枫溪区", "其它区"]}, {
    city: "揭阳市",
    data: ["榕城区", "普宁市", "揭东县", "惠来县", "东山区", "揭西县", "其它区"]
}, {city: "云浮市", data: ["云城区", "罗定市", "新兴县", "郁南县", "云安县", "其它区"]}];
city[5] = [{
    city: "杭州市",
    data: ["拱墅区", "上城区", "下城区", "江干区", "西湖区", "滨江区", "萧山区", "余杭区", "建德市", "富阳市", "临安市", "桐庐县", "淳安县", "其它区"]
}, {
    city: "宁波市",
    data: ["海曙区", "江东区", "江北区", "北仑区", "镇海区", "鄞州区", "余姚市", "慈溪市", "奉化市", "象山县", "宁海县", "鄞州区", "其它区"]
}, {
    city: "温州市",
    data: ["鹿城区", "龙湾区", "瓯海区", "瑞安市", "乐清市", "永嘉县", "平阳县", "苍南县", "洞头县", "文成县", "泰顺县", "其它区"]
}, {city: "嘉兴市", data: ["南湖区", "秀洲区", "海宁市", "平湖市", "桐乡市", "嘉善县", "海盐县", "其它区"]}, {
    city: "湖州市",
    data: ["吴兴区", "南浔区", "德清县", "长兴县", "安吉县", "其它区"]
}, {city: "绍兴市", data: ["越城区", "诸暨市", "上虞市", "嵊州市", "绍兴县", "新昌县", "其它区"]}, {
    city: "衢州市",
    data: ["柯城区", "衢江区", "江山市", "龙游县", "常山县", "开化县", "其它区"]
}, {city: "金华市", data: ["婺城区", "金东区", "兰溪市", "义乌市", "东阳市", "永康市", "武义县", "浦江县", "磐安县", "其它区"]}, {
    city: "舟山市",
    data: ["定海区", "普陀区", "岱山县", "嵊泗县", "其它区"]
}, {city: "台州市", data: ["椒江区", "黄岩区", "路桥区", "温岭市", "临海市", "玉环县", "仙居县", "三门县", "天台县", "其它区"]}, {
    city: "丽水市",
    data: ["莲都区", "青田县", "缙云县", "云和县", "遂昌县", "松阳县", "庆元县", "景宁畲族自治县", "龙泉市", "其它区"]
}];
city[6] = [{
    city: "南京市",
    data: ["玄武区", "白下区", "秦淮区", "建邺区", "鼓楼区", "下关区", "浦口区", "栖霞区", "江宁区", "六合区", "溧水县", "雨花台区", "高淳县", "其它区"]
}, {city: "无锡市", data: ["崇安区", "南长区", "北塘区", "滨湖区", "锡山区", "惠山区", "江阴市", "宜兴市", "新区", "其它区"]}, {
    city: "徐州市",
    data: ["云龙区", "鼓楼区", "九里区", "泉山区", "贾汪区", "丰县", "沛县", "铜山县", "睢宁县", "新沂市", "邳州市", "其它区"]
}, {city: "常州市", data: ["钟楼区", "天宁区", "戚墅堰区", "新北区", "武进区", "溧阳市", "金坛市", "其它区"]}, {
    city: "苏州市",
    data: ["金阊区", "沧浪区", "平江区", "虎丘区", "吴中区", "相城区", "常熟市", "张家港市", "昆山市", "吴江市", "太仓市", "新区", "园区", "其它区"]
}, {city: "南通市", data: ["崇川区", "港闸区", "启东市", "如皋市", "通州市", "海门市", "海安县", "如东县", "通州市", "开发区", "其它区"]}, {
    city: "连云港市",
    data: ["新浦区", "连云区", "海州区", "赣榆县", "东海县", "灌云县", "灌南县", "其它区"]
}, {city: "淮安市", data: ["清河区", "清浦区", "楚州区", "淮阴区", "涟水县", "洪泽县", "盱眙县", "金湖县", "其它区"]}, {
    city: "盐城市",
    data: ["亭湖县", "盐都县", "东台市", "大丰市", "建湖县", "响水县", "滨海县", "阜宁县", "射阳县", "其它区"]
}, {city: "扬州市", data: ["广陵区", "邗江区", "维扬区", "仪征市", "高邮市", "江都市", "宝应县", "经济开发区", "其它区"]}, {
    city: "镇江市",
    data: ["京口区", "润州区", "丹徒区", "丹阳市", "扬中市", "句容市", "其它区"]
}, {city: "泰州市", data: ["海陵区", "高港区", "靖江市", "泰兴市", "姜堰市", "兴化市", "其它区"]}, {
    city: "宿迁市",
    data: ["宿城区", "宿豫区", "沭阳县", "泗阳县", "泗洪县", "其它区"]
}];
city[7] = [{
    city: "福州市",
    data: ["鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "闽候县", "连江县", "罗源县", "闽清县", "永泰县", "福清市", "长乐市", "平潭县", "其它区"]
}, {city: "厦门市", data: ["思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区", "其它区"]}, {
    city: "莆田市",
    data: ["城厢区", "涵江区", "荔城区", "秀屿区", "仙游县", "其它区"]
}, {
    city: "三明市",
    data: ["梅列区", "三元区", "明溪县", "尤溪县", "沙县", "将乐县", "永安市", "清流县", "宁化县", "大田县", "泰宁县", "建宁县", "其它区"]
}, {
    city: "泉州市",
    data: ["鲤城区", "丰泽区", "洛江区", "泉港区", "惠安县", "安溪县", "永春县", "德化县", "石狮市", "晋江市", "南安市", "金门县", "其它区"]
}, {
    city: "漳州市",
    data: ["芗城区", "龙文区", "云霄县", "漳浦县", "诏安县", "长泰县", "东山县", "南靖县", "平和县", "华安县", "龙海市", "其它区"]
}, {city: "南平市", data: ["延平区", "顺昌县", "浦城县", "光泽县", "松溪县", "政和县", "邵武市", "武夷山市", "建瓯市", "建阳市", "其它区"]}, {
    city: "龙岩市",
    data: ["新罗区", "长汀县", "漳平市", "永定县", "上杭县", "武平县", "连城县", "其它区"]
}, {city: "宁德市", data: ["蕉城区", "霞浦县", "古田县", "屏南县", "寿宁县", "周宁县", "柘荣县", "福安市", "福鼎市", "柘荣县", "其它区"]}];
city[8] = [{
    city: "沈阳市",
    data: ["沈河区", "和平区", "大东区", "皇姑区", "铁西区", "苏家屯区", "东陵区", "沈北新区", "于洪区", "新城子区", "辽中县", "康平县", "法库县", "新民市", "浑南新区", "张士开发区", "其它区"]
}, {
    city: "大连市",
    data: ["西岗区", "中山区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "瓦房店市", "普兰店市", "长海县", "开发区", "庄河市", "岭前区", "其它区"]
}, {city: "鞍山市", data: ["铁东区", "铁西区", "立山区", "千山区", "海城市", "台安县", "岫岩满族自治县", "高新区", "其它区"]}, {
    city: "抚顺市",
    data: ["顺城区", "新抚区", "东洲区", "望花区", "抚顺县", "新宾满族自治县", "清原满族自治县", "其它区"]
}, {city: "本溪市", data: ["平山区", "明山区", "溪湖区", "南芬区", "本溪满族自治县", "桓仁满族自治县", "其它区"]}, {
    city: "丹东市",
    data: ["振兴区", "元宝区", "振安区", "东港市", "宽甸满族自治县", "凤城市", "其它区"]
}, {city: "锦州市", data: ["太和区", "古塔区", "凌河区", "黑山县", "义县", "凌海市", "北镇市", "其它区"]}, {
    city: "营口市",
    data: ["站前区", "西市区", "鲅鱼圈区", "老边区", "大石桥市", "盖州市", "其它区"]
}, {city: "阜新市", data: ["海州区", "新邱区", "太平区", "清河门区", "细河区", "阜新蒙古族自治县", "彰武县", "其它区"]}, {
    city: "辽阳市",
    data: ["白塔区", "文圣区", "宏伟区", "太子河区", "灯塔市", "辽阳县", "弓长岭区", "其它区"]
}, {city: "盘锦市", data: ["兴隆台区", "双台子区", "大洼县", "盘山县", "其它区"]}, {
    city: "铁岭市",
    data: ["银州区", "清河区", "铁岭县", "西丰县", "昌图县", "调兵山市", "开原市", "其它区"]
}, {city: "朝阳市", data: ["双塔区", "龙城区", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "北票市", "凌源市", "其它区"]}, {
    city: "葫芦岛市",
    data: ["龙港区", "连山区", "兴城市", "南票区", "绥中县", "建昌县", "其它区"]
}];
city[9] = [{city: "合肥市", data: ["庐阳区", "瑶海区", "蜀山区", "包河区", "长丰县", "肥东县", "肥西县", "高新区", "中区", "其它区"]}, {
    city: "芜湖市",
    data: ["镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "繁昌县", "南陵县", "其它区"]
}, {city: "蚌埠市", data: ["蚌山区", "龙子湖区", "禹会区", "淮上区", "怀远县", "五河县", "固镇县", "其它区"]}, {
    city: "淮南市",
    data: ["大通区", "田家庵区", "谢家集区", "八公山区", "潘集区", "凤台县", "其它区"]
}, {city: "马鞍山市", data: ["雨山区", "金家庄区", "花山区", "当涂县", "其它区"]}, {
    city: "铜陵市",
    data: ["铜官山区", "狮子山区", "郊区", "铜陵县", "其它区"]
}, {
    city: "安庆市",
    data: ["迎江区", "大观区", "宜秀区", "怀宁县", "枞阳县", "潜山县", "太湖县", "宿松县", "望江县", "岳西县", "桐城市", "其它区"]
}, {city: "黄山市", data: ["屯溪区", "徽州区", "黄山区", "歙县", "休宁县", "黟县", "祁门县", "其它区"]}, {
    city: "滁州市",
    data: ["琅琊区", "南谯区", "来安县", "全椒县", "定远县", "凤阳县", "天长市", "明光市", "其它区"]
}, {city: "巢湖市", data: ["居巢区", "庐江县", "无为县", "含山县", "和县", "其它区"]}, {
    city: "六安市",
    data: ["金安区", "裕安区", "寿县", "霍邱县", "舒城县", "金寨县", "霍山县", "其它区"]
}, {city: "宣城市", data: ["宣州区", "宁国市", "广德县", "郎溪县", "泾县", "绩溪县", "旌德县", "其它区"]}, {
    city: "池州市",
    data: ["贵池区", "东至县", "石台县", "青阳县", "其它区"]
}, {city: "淮北市", data: ["杜集区", "相山区", "烈山区", "濉溪县", "其它区"]}, {
    city: "阜阳市",
    data: ["颍州区", "颍东区", "颍泉区", "临泉县", "太和县", "阜南县", "颍上县", "界首市", "其它区"]
}, {city: "宿州市", data: ["埇桥区", "砀山县", "萧县", "灵璧县", "泗县", "其它区"]}, {
    city: "亳州市",
    data: ["利辛县", "蒙城县", "涡阳县", "谯城区", "其它区"]
}];
city[10] = [{
    city: "成都市",
    data: ["锦江区", "青羊区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "都江堰市", "崇州市", "双流县", "郫县", "新津县", "金堂县", "大邑县", "蒲江县", "彭州市", "邛崃市", "其它区"]
}, {city: "自贡市", data: ["自流井区", "贡井区", "大安区", "沿滩区", "荣县", "富顺县", "其它区"]}, {
    city: "泸州市",
    data: ["古蔺县", "叙永县", "合江县", "泸县", "龙马潭区", "纳溪区", "江阳区", "其它区"]
}, {city: "德阳市", data: ["绵竹市", "什邡市", "广汉市", "罗江县", "中江县", "旌阳区", "其它区"]}, {
    city: "内江市",
    data: ["隆昌县", "资中县", "威远县", "东兴区", "市中区", "其它区"]
}, {
    city: "乐山市",
    data: ["峨眉山市", "马边彝族自治县", "峨边彝族自治县", "沐川县", "夹江县", "井研县", "犍为县", "金口河区", "五通桥区", "沙湾区", "市中区", "其它区"]
}, {city: "南充市", data: ["阆中市", "西充县", "仪陇县", "蓬安县", "营山县", "南部县", "嘉陵区", "高坪区", "顺庆区", "其它区"]}, {
    city: "宜宾市",
    data: ["屏山县", "兴文县", "筠连县", "珙县", "高县", "长宁县", "江安县", "南溪县", "宜宾县", "翠屏区", "其它区"]
}, {city: "眉山市", data: ["青神县", "丹棱县", "洪雅县", "彭山县", "仁寿县", "东坡区", "其它区"]}, {
    city: "攀枝花市",
    data: ["盐边县", "米易县", "仁和区", "西区", "东区", "其它区"]
}, {city: "绵阳市", data: ["江油市", "高新区", "平武县", "北川羌族自治县", "梓潼县", "安县", "盐亭县", "三台县", "游仙区", "涪城区", "其它区"]}, {
    city: "广元市",
    data: ["苍溪县", "剑阁县", "青川县", "旺苍县", "朝天区", "元坝区", "利州区", "其它区"]
}, {city: "遂宁市", data: ["大英县", "射洪县", "蓬溪县", "安居区", "船山区", "其它区"]}, {
    city: "广安市",
    data: ["市辖区", "华蓥市", "邻水县", "武胜县", "岳池县", "广安区", "其它区"]
}, {city: "达州市", data: ["万源市", "渠县", "大竹县", "开江县", "宣汉县", "达县", "通川区", "其它区"]}, {
    city: "雅安市",
    data: ["宝兴县", "芦山县", "天全县", "石棉县", "汉源县", "荥经县", "名山县", "雨城区", "其它区"]
}, {city: "巴中市", data: ["平昌县", "南江县", "通江县", "巴州区", "其它区"]}, {
    city: "资阳市",
    data: ["简阳市", "乐至县", "安岳县", "雁江区", "其它区"]
}, {
    city: "阿坝藏族羌族自治州",
    data: ["红原县", "若尔盖县", "阿坝县", "壤塘县", "马尔康县", "黑水县", "小金县", "金川县", "九寨沟县", "松潘县", "茂县", "理县", "汶川县", "其它区"]
}, {
    city: "甘孜藏族自治州",
    data: ["得荣县", "稻城县", "乡城县", "巴塘县", "理塘县", "色达县", "石渠县", "白玉县", "德格县", "新龙县", "甘孜县", "炉霍县", "道孚县", "雅江县", "九龙县", "丹巴县", "泸定县", "康定县", "其它区"]
}, {
    city: "凉山彝族自治州",
    data: ["雷波县", "美姑县", "甘洛县", "越西县", "冕宁县", "喜德县", "昭觉县", "金阳县", "布拖县", "普格县", "宁南县", "会东县", "会理县", "德昌县", "盐源县", "木里藏族自治县", "西昌市", "其它区"]
}];
city[11] = [{
    city: "济南市",
    data: ["章丘市", "商河县", "济阳县", "平阴县", "长清区", "历城区", "天桥区", "槐荫区", "市中区", "历下区", "其它区"]
}, {
    city: "青岛市",
    data: ["莱西市", "胶南市", "平度市", "即墨市", "胶州市", "开发区", "城阳区", "李沧区", "崂山区", "黄岛区", "四方区", "市北区", "市南区", "其它区"]
}, {city: "淄博市", data: ["沂源县", "高青县", "桓台县", "周村区", "临淄区", "博山区", "张店区", "淄川区", "其它区"]}, {
    city: "枣庄市",
    data: ["山亭区", "台儿庄区", "峄城区", "薛城区", "市中区", "滕州市", "其它区"]
}, {city: "东营市", data: ["东城区", "西城区", "广饶县", "利津县", "垦利县", "河口区", "东营区", "其它区"]}, {
    city: "烟台市",
    data: ["海阳市", "栖霞市", "招远市", "蓬莱市", "莱州市", "莱阳市", "龙口市", "长岛县", "莱山区", "牟平区", "福山区", "芝罘区", "其它区"]
}, {
    city: "潍坊市",
    data: ["昌邑市", "高密市", "安丘市", "寿光市", "诸城市", "青州市", "开发区", "昌乐县", "临朐县", "奎文区", "坊子区", "寒亭区", "潍城区", "其它区"]
}, {city: "威海市", data: ["环翠区", "文登市", "荣成市", "乳山市", "其它区"]}, {
    city: "济宁市",
    data: ["邹城市", "兖州市", "曲阜市", "梁山县", "泗水县", "汶上县", "嘉祥县", "金乡县", "鱼台县", "微山县", "任城区", "市中区", "其它区"]
}, {city: "泰安市", data: ["肥城市", "新泰市", "东平县", "宁阳县", "岱岳区", "泰山区", "其它区"]}, {
    city: "日照市",
    data: ["东港区", "岚山区", "五莲县", "莒县", "其它区"]
}, {city: "莱芜市", data: ["莱城区", "钢城区", "其它区"]}, {
    city: "临沂市",
    data: ["临沭县", "蒙阴县", "莒南县", "平邑县", "费县", "苍山县", "沂水县", "郯城县", "沂南县", "河东区", "罗庄区", "兰山区", "其它区"]
}, {
    city: "德州市",
    data: ["禹城市", "乐陵市", "开发区", "武城县", "夏津县", "平原县", "齐河县", "临邑县", "庆云县", "宁津县", "陵县", "德城区", "其它区"]
}, {city: "聊城市", data: ["临清市", "高唐县", "冠县", "东阿县", "茌平县", "莘县", "阳谷县", "东昌府区", "其它区"]}, {
    city: "滨州市",
    data: ["邹平县", "博兴县", "沾化县", "无棣县", "阳信县", "惠民县", "滨城区", "其它区"]
}, {city: "菏泽市", data: ["东明县", "定陶县", "鄄城县", "郓城县", "巨野县", "成武县", "单县", "曹县", "牡丹区", "其它区"]}];
city[12] = [{
    city: "石家庄市",
    data: ["鹿泉市", "新乐市", "晋州市", "藁城市", "辛集市", "赵县", "元氏县", "平山县", "无极县", "赞皇县", "深泽县", "高邑县", "灵寿县", "行唐县", "栾城县", "正定县", "井陉县", "裕华区", "井陉矿区", "新华区", "桥西区", "桥东区", "长安区", "其它区"]
}, {
    city: "唐山市",
    data: ["迁安市", "遵化市", "唐海县", "玉田县", "迁西县", "乐亭县", "滦南县", "滦县", "丰润区", "丰南区", "开平区", "古冶区", "路北区", "路南区", "其它区"]
}, {city: "秦皇岛市", data: ["经济技术开发区", "卢龙县", "抚宁县", "昌黎县", "青龙满族自治县", "北戴河区", "山海关区", "海港区", "其它区"]}, {
    city: "邯郸市",
    data: ["武安市", "曲周县", "魏县", "馆陶县", "广平县", "鸡泽县", "邱县", "永年县", "肥乡县", "磁县", "涉县", "大名县", "成安县", "临漳县", "邯郸县", "峰峰矿区", "复兴区", "丛台区", "邯山区", "其它区"]
}, {
    city: "邢台市",
    data: ["沙河市", "南宫市", "临西县", "清河县", "威县", "平乡县", "广宗县", "新河县", "巨鹿县", "宁晋县", "南和县", "任县", "隆尧县", "柏乡县", "内丘县", "临城县", "邢台县", "桥西区", "桥东区", "其它区"]
}, {
    city: "保定市",
    data: ["高开区", "高碑店市", "安国市", "定州市", "涿州市", "雄县", "博野县", "顺平县", "蠡县", "曲阳县", "易县", "安新县", "望都县", "涞源县", "容城县", "高阳县", "唐县", "定兴县", "徐水县", "阜平县", "涞水县", "清苑县", "南市区", "北市区", "新市区", "满城县", "其它区"]
}, {
    city: "沧州市",
    data: ["河间市", "黄骅市", "任丘市", "泊头市", "孟村回族自治县", "献县", "吴桥县", "南皮县", "肃宁县", "盐山县", "海兴县", "东光县", "青县", "沧县", "运河区", "新华区", "其它区"]
}, {
    city: "廊坊市",
    data: ["三河市", "霸州市", "燕郊经济技术开发区", "开发区", "大厂回族自治县", "文安县", "大城县", "香河县", "永清县", "固安县", "广阳区", "安次区", "其它区"]
}, {
    city: "衡水市",
    data: ["深州市", "冀州市", "阜城县", "故城县", "安平县", "饶阳县", "武强县", "武邑县", "枣强县", "桃城区", "景县", "其它区"]
}, {
    city: "张家口市",
    data: ["崇礼县", "赤城县", "涿鹿县", "怀来县", "万全县", "怀安县", "阳原县", "蔚县", "尚义县", "沽源县", "康保县", "张北县", "宣化县", "下花园区", "宣化区", "桥西区", "桥东区", "其它区"]
}, {
    city: "承德市",
    data: ["围场满族蒙古族自治县", "宽城满族自治县", "丰宁满族自治县", "隆化县", "滦平县", "平泉县", "兴隆县", "承德县", "鹰手营子矿区", "双滦区", "双桥区", "其它区"]
}];
city[13] = [{
    city: "郑州市",
    data: ["中原区", "二七区", "管城回族区", "金水区", "上街区", "惠济区", "中牟县", "巩义市", "荥阳市", "新密市", "新郑市", "登封市", "郑东新区", "高新区", "其它区"]
}, {city: "开封市", data: ["龙亭区", "顺河回族区", "鼓楼区", "禹王台区", "金明区", "杞县", "通许县", "尉氏县", "开封县", "兰考县", "其它区"]}, {
    city: "洛阳市",
    data: ["老城区", "西工区", "廛河回族区", "涧西区", "吉利区", "洛龙区", "孟津县", "新安县", "栾川县", "嵩县", "汝阳县", "宜阳县", "洛宁县", "伊川县", "偃师市", "高新区", "其它区"]
}, {city: "平顶山市", data: ["新华区", "卫东区", "石龙区", "湛河区", "宝丰县", "叶县", "鲁山县", "郏县", "舞钢市", "汝州市", "其它区"]}, {
    city: "焦作市",
    data: ["解放区", "中站区", "马村区", "山阳区", "修武县", "博爱县", "武陟县", "温县", "沁阳市", "孟州市", "其它区"]
}, {city: "鹤壁市", data: ["鹤山区", "山城区", "淇滨区", "浚县", "淇县", "其它区"]}, {
    city: "新乡市",
    data: ["红旗区", "卫滨区", "凤泉区", "牧野区", "新乡县", "获嘉县", "原阳县", "延津县", "封丘县", "长垣县", "卫辉市", "辉县市", "其它区"]
}, {city: "安阳市", data: ["文峰区", "北关区", "殷都区", "龙安区", "安阳县", "汤阴县", "滑县", "内黄县", "林州市", "其它区"]}, {
    city: "濮阳市",
    data: ["华龙区", "清丰县", "南乐县", "范县", "台前县", "濮阳县", "其它区"]
}, {city: "许昌市", data: ["魏都区", "许昌县", "鄢陵县", "襄城县", "禹州市", "长葛市", "其它区"]}, {
    city: "漯河市",
    data: ["源汇区", "郾城区", "召陵区", "舞阳县", "临颍县", "其它区"]
}, {
    city: "南阳市",
    data: ["宛城区", "卧龙区", "南召县", "方城县", "西峡县", "镇平县", "内乡县", "淅川县", "社旗县", "唐河县", "新野县", "桐柏县", "邓州市", "其它区"]
}, {city: "商丘市", data: ["梁园区", "睢阳区", "民权县", "睢县", "宁陵县", "柘城县", "虞城县", "夏邑县", "永城市", "其它区"]}, {
    city: "周口市",
    data: ["川汇区", "扶沟县", "西华县", "商水县", "沈丘县", "郸城县", "淮阳县", "太康县", "鹿邑县", "项城市", "其它区"]
}, {city: "驻马店市", data: ["驿城区", "西平县", "上蔡县", "平舆县", "正阳县", "确山县", "泌阳县", "汝南县", "遂平县", "新蔡县", "其它区"]}, {
    city: "济源市",
    data: ["沁园街道", "济水街道", "北海街道", "天坛街道", "玉泉街道", "克井镇", "五龙口镇", "轵城镇", "承留镇", "邵原镇", "坡头镇", "梨林镇", "大峪镇", "思礼镇", "王屋镇", "下冶镇", "其他区"]
}, {city: "三门峡市", data: ["湖滨区", "渑池县", "陕县", "卢氏县", "义马市", "灵宝市", "其它区"]}, {
    city: "信阳市",
    data: ["浉河区", "平桥区", "罗山县", "光山县", "新县", "商城县", "固始县", "潢川县", "淮滨县", "息县", "其它区"]
}];
city[14] = [{
    city: "武汉市",
    data: ["江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区", "其它区"]
}, {city: "黄石市", data: ["黄石港区", "西塞山区", "下陆区", "铁山区", "阳新县", "大冶市", "其它区"]}, {
    city: "襄阳市",
    data: ["襄城区", "樊城区", "襄州区", "南漳县", "谷城县", "保康县", "老河口市", "枣阳市", "宜城市", "其它区"]
}, {city: "十堰市", data: ["茅箭区", "张湾区", "郧县", "郧西县", "竹山县", "竹溪县", "房县", "丹江口市", "城区", "其它区"]}, {
    city: "荆州市",
    data: ["沙市区", "荆州区", "公安县", "监利县", "江陵县", "石首市", "洪湖市", "松滋市", "其它区"]
}, {
    city: "宜昌市",
    data: ["西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "远安县", "兴山县", "秭归县", "长阳土家族自治县", "五峰土家族自治县", "葛洲坝区", "开发区", "宜都市", "当阳市", "枝江市", "其它区"]
}, {city: "荆门市", data: ["东宝区", "掇刀区", "京山县", "沙洋县", "钟祥市", "其它区"]}, {
    city: "鄂州市",
    data: ["梁子湖区", "华容区", "鄂城区", "其它区"]
}, {city: "孝感市", data: ["孝南区", "孝昌县", "大悟县", "云梦县", "应城市", "安陆市", "汉川市", "其它区"]}, {
    city: "黄冈市",
    data: ["黄州区", "团风县", "红安县", "罗田县", "英山县", "浠水县", "蕲春县", "黄梅县", "麻城市", "武穴市", "其它区"]
}, {city: "咸宁市", data: ["咸安区", "嘉鱼县", "通城县", "崇阳县", "通山县", "赤壁市", "温泉城区", "其它区"]}, {
    city: "随州市",
    data: ["曾都区", "随县", "广水市", "其它区"]
}, {city: "恩施土家族苗族自治州", data: ["恩施市", "利川市", "建始县", "巴东县", "宣恩县", "咸丰县", "来凤县", "鹤峰县", "其它区"]}, {
    city: "仙桃市",
    data: ["沙嘴街道", "干河街道", "龙华山办事处", "郑场镇", "毛嘴镇", "豆河镇", "三伏潭镇", "胡场镇", "长倘口镇", "西流河镇", "沙湖镇", "杨林尾镇", "彭场镇", "张沟镇", "郭河镇", "沔城回族镇", "通海口镇", "陈场镇", "工业园区", "九合垸原种场", "沙湖原种场", "五湖渔场", "赵西垸林场", "畜禽良种场", "排湖风景区", "其他区"]
}, {
    city: "潜江市",
    data: ["园林办事处", "杨市办事处", "周矶办事处", "广华办事处", "泰丰办事处", "高场办事处", "竹根滩镇", "渔洋镇", "王场镇", "高石碑镇", "熊口镇", "老新镇", "浩口镇", "积玉口镇", "张金镇", "龙湾镇", "江汉石油管理局", "潜江经济开发区", "周矶管理区", "后湖管理区", "熊口管理区", "总口管理区", "白鹭湖管理区", "运粮湖管理区", "浩口原种场", "其他区"]
}, {
    city: "天门市",
    data: ["竟陵街道", "侨乡街道开发区", "杨林街道", "多宝镇", "拖市镇", "张港镇", "蒋场镇", "汪场镇", "渔薪镇", "黄潭镇", "岳口镇", "横林镇", "彭市镇", "麻洋镇", "多祥镇", "干驿镇", "马湾镇", "卢市镇", "小板镇", "九真镇", "皂市镇", "胡市镇", "石河镇", "佛子山镇", "净潭乡", "蒋湖农场", "白茅湖农场", "沉湖管委会", "其他区"]
}, {city: "神农架林区", data: ["松柏镇", "阳日镇", "木鱼镇", "红坪镇", "新华镇", "九湖镇", "宋洛乡", "下谷坪", "土家族乡", "其他区"]}];
city[15] = [{city: "长沙市", data: ["芙蓉区", "天心区", "岳麓区", "开福区", "雨花区", "长沙县", "望城县", "宁乡县", "浏阳市", "其它区"]}, {
    city: "株洲市",
    data: ["荷塘区", "芦淞区", "石峰区", "天元区", "株洲县", "攸县", "茶陵县", "炎陵县", "醴陵市", "其它区"]
}, {city: "湘潭市", data: ["雨湖区", "岳塘区", "湘潭县", "湘乡市", "韶山市", "其它区"]}, {
    city: "衡阳市",
    data: ["珠晖区", "雁峰区", "石鼓区", "蒸湘区", "南岳区", "衡阳县", "衡南县", "衡山县", "衡东县", "祁东县", "耒阳市", "常宁市", "其它区"]
}, {
    city: "邵阳市",
    data: ["双清区", "大祥区", "北塔区", "邵东县", "新邵县", "邵阳县", "隆回县", "洞口县", "绥宁县", "新宁县", "城步苗族自治县", "武冈市", "其它区"]
}, {city: "岳阳市", data: ["岳阳楼区", "云溪区", "君山区", "岳阳县", "华容县", "湘阴县", "平江县", "汨罗市", "临湘市", "其它区"]}, {
    city: "常德市",
    data: ["武陵区", "鼎城区", "安乡县", "汉寿县", "澧县", "临澧县", "桃源县", "石门县", "津市市", "其它区"]
}, {city: "张家界市", data: ["永定区", "武陵源区", "慈利县", "桑植县", "其它区"]}, {
    city: "益阳市",
    data: ["资阳区", "赫山区", "南县", "桃江县", "安化县", "沅江市", "其它区"]
}, {
    city: "郴州市",
    data: ["北湖区", "苏仙区", "桂阳县", "宜章县", "永兴县", "嘉禾县", "临武县", "汝城县", "桂东县", "安仁县", "资兴市", "其它区"]
}, {
    city: "永州市",
    data: ["零陵区", "冷水滩区", "祁阳县", "东安县", "双牌县", "道县", "江永县", "宁远县", "蓝山县", "新田县", "江华瑶族自治县", "其它区"]
}, {
    city: "怀化市",
    data: ["鹤城区", "中方县", "沅陵县", "辰溪县", "溆浦县", "会同县", "麻阳苗族自治县", "新晃侗族自治县", "芷江侗族自治县", "靖州苗族侗族自治县", "通道侗族自治县", "洪江市", "其它区"]
}, {city: "娄底市", data: ["娄星区", "双峰县", "新化县", "冷水江市", "涟源市", "其它区"]}, {
    city: "湘西土家族苗族自治州",
    data: ["吉首市", "泸溪县", "凤凰县", "花垣县", "保靖县", "古丈县", "永顺县", "龙山县", "其它区"]
}];
city[16] = [{
    city: "南昌市",
    data: ["东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "南昌县", "新建县", "安义县", "进贤县", "红谷滩新区", "经济技术开发区", "昌北区", "其它区"]
}, {city: "景德镇市", data: ["昌江区", "珠山区", "浮梁县", "乐平市", "其它区"]}, {
    city: "萍乡市",
    data: ["安源区", "湘东区", "莲花县", "上栗县", "芦溪县", "其它区"]
}, {
    city: "九江市",
    data: ["庐山区", "浔阳区", "九江县", "武宁县", "修水县", "永修县", "德安县", "星子县", "都昌县", "湖口县", "彭泽县", "瑞昌市", "其它区"]
}, {city: "新余市", data: ["渝水区", "分宜县", "其它区"]}, {city: "鹰潭市", data: ["月湖区", "余江县", "贵溪市", "其它区"]}, {
    city: "赣州市",
    data: ["章贡区", "赣县", "信丰县", "大余县", "上犹县", "崇义县", "安远县", "龙南县", "定南县", "全南县", "宁都县", "于都县", "兴国县", "会昌县", "寻乌县", "石城县", "黄金区", "瑞金市", "南康市", "其它区"]
}, {
    city: "吉安市",
    data: ["吉州区", "青原区", "吉安县", "吉水县", "峡江县", "新干县", "永丰县", "泰和县", "遂川县", "万安县", "安福县", "永新县", "井冈山市", "其它区"]
}, {city: "宜春市", data: ["袁州区", "奉新县", "万载县", "上高县", "宜丰县", "靖安县", "铜鼓县", "丰城市", "樟树市", "高安市", "其它区"]}, {
    city: "抚州市",
    data: ["临川区", "南城县", "黎川县", "南丰县", "崇仁县", "乐安县", "宜黄县", "金溪县", "资溪县", "东乡县", "广昌县", "其它区"]
}, {city: "上饶市", data: ["信州区", "上饶县", "广丰县", "玉山县", "铅山县", "横峰县", "弋阳县", "余干县", "鄱阳县", "万年县", "婺源县", "德兴市", "其它区"]}];
city[17] = [{
    city: "西安市",
    data: ["新城区", "碑林区", "莲湖区", "灞桥区", "未央区", "雁塔区", "阎良区", "临潼区", "长安区", "蓝田县", "周至县", "户县", "高陵县", "其它区"]
}, {city: "铜川市", data: ["王益区", "印台区", "耀州区", "宜君县", "其它区"]}, {
    city: "宝鸡市",
    data: ["渭滨区", "金台区", "陈仓区", "凤翔县", "岐山县", "扶风县", "眉县", "陇县", "千阳县", "麟游县", "凤县", "太白县", "其它区"]
}, {
    city: "咸阳市",
    data: ["秦都区", "杨凌区", "渭城区", "三原县", "泾阳县", "乾县", "礼泉县", "永寿县", "彬县", "长武县", "旬邑县", "淳化县", "武功县", "兴平市", "其它区"]
}, {
    city: "渭南市",
    data: ["临渭区", "华县", "潼关县", "大荔县", "合阳县", "澄城县", "蒲城县", "白水县", "富平县", "韩城市", "华阴市", "其它区"]
}, {
    city: "延安市",
    data: ["宝塔区", "延长县", "延川县", "子长县", "安塞县", "志丹县", "吴起县", "甘泉县", "富县", "洛川县", "宜川县", "黄龙县", "黄陵县", "其它区"]
}, {
    city: "汉中市",
    data: ["汉台区", "南郑县", "城固县", "洋县", "西乡县", "勉县", "宁强县", "略阳县", "镇巴县", "留坝县", "佛坪县", "其它区"]
}, {
    city: "榆林市",
    data: ["榆阳区", "神木县", "府谷县", "横山县", "靖边县", "定边县", "绥德县", "米脂县", "佳县", "吴堡县", "清涧县", "子洲县", "其它区"]
}, {city: "安康市", data: ["汉滨区", "汉阴县", "石泉县", "宁陕县", "紫阳县", "岚皋县", "平利县", "镇坪县", "旬阳县", "白河县", "其它区"]}, {
    city: "商洛市",
    data: ["商州区", "洛南县", "丹凤县", "商南县", "山阳县", "镇安县", "柞水县", "其它区"]
}];
city[18] = [{
    city: "哈尔滨市",
    data: ["道里区", "南岗区", "道外区", "香坊区", "动力区", "平房区", "松北区", "呼兰区", "依兰县", "方正县", "宾县", "巴彦县", "木兰县", "通河县", "延寿县", "阿城市", "双城市", "尚志市", "五常市", "其它区"]
}, {
    city: "齐齐哈尔市",
    data: ["龙沙区", "建华区", "铁锋区", "昂昂溪区", "富拉尔基区", "碾子山区", "梅里斯达斡尔族区", "龙江县", "依安县", "泰来县", "甘南县", "富裕县", "克山县", "克东县", "拜泉县", "讷河市", "其它区"]
}, {city: "鸡西市", data: ["鸡冠区", "恒山区", "滴道区", "梨树区", "城子河区", "麻山区", "鸡东县", "虎林市", "密山市", "其它区"]}, {
    city: "鹤岗市",
    data: ["向阳区", "工农区", "南山区", "兴安区", "东山区", "兴山区", "萝北县", "绥滨县", "其它区"]
}, {city: "双鸭山市", data: ["尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "友谊县", "宝清县", "饶河县", "其它区"]}, {
    city: "大庆市",
    data: ["萨尔图区", "龙凤区", "让胡路区", "红岗区", "大同区", "肇州县", "肇源县", "林甸县", "杜尔伯特蒙古族自治县", "其它区"]
}, {
    city: "伊春市",
    data: ["伊春区", "南岔区", "友好区", "西林区", "翠峦区", "新青区", "美溪区", "金山屯区", "五营区", "乌马河区", "汤旺河区", "带岭区", "乌伊岭区", "红星区", "上甘岭区", "嘉荫县", "铁力市", "其它区"]
}, {
    city: "佳木斯市",
    data: ["永红区", "向阳区", "前进区", "东风区", "郊区", "桦南县", "桦川县", "汤原县", "抚远县", "同江市", "富锦市", "其它区"]
}, {city: "七台河市", data: ["新兴区", "桃山区", "茄子河区", "勃利县", "其它区"]}, {
    city: "牡丹江市",
    data: ["东安区", "阳明区", "爱民区", "西安区", "东宁县", "林口县", "绥芬河市", "海林市", "宁安市", "穆棱市", "其它区"]
}, {city: "黑河市", data: ["爱辉区", "嫩江县", "逊克县", "孙吴县", "北安市", "五大连池市", "其它区"]}, {
    city: "绥化市",
    data: ["北林区", "望奎县", "兰西县", "青冈县", "庆安县", "明水县", "绥棱县", "安达市", "肇东市", "海伦市", "其它区"]
}, {city: "大兴安岭地区", data: ["呼玛县", "塔河县", "漠河县", "加格达奇区", "其它区"]}];
city[19] = [{
    city: "呼和浩特市",
    data: ["新城区", "回民区", "玉泉区", "赛罕区", "土默特左旗", "托克托县", "和林格尔县", "清水河县", "武川县", "其它区"]
}, {city: "包头市", data: ["东河区", "昆都仑区", "青山区", "石拐区", "白云矿区", "九原区", "土默特右旗", "固阳县", "达尔罕茂明安联合旗", "其它区"]}, {
    city: "乌海市",
    data: ["海勃湾区", "海南区", "乌达区", "其它区"]
}, {
    city: "赤峰市",
    data: ["红山区", "元宝山区", "松山区", "阿鲁科尔沁旗", "巴林左旗", "巴林右旗", "林西县", "克什克腾旗", "翁牛特旗", "喀喇沁旗", "宁城县", "敖汉旗", "其它区"]
}, {city: "通辽市", data: ["科尔沁区", "科尔沁左翼中旗", "科尔沁左翼后旗", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗", "霍林郭勒市", "其它区"]}, {
    city: "鄂尔多斯市",
    data: ["东胜区", "达拉特旗", "准格尔旗", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗", "其它区"]
}, {
    city: "呼伦贝尔市",
    data: ["海拉尔区", "阿荣旗", "莫力达瓦达斡尔族自治旗", "鄂伦春自治旗", "鄂温克族自治旗", "陈巴尔虎旗", "新巴尔虎左旗", "新巴尔虎右旗", "满洲里市", "牙克石市", "扎兰屯市", "额尔古纳市", "根河市", "其它区"]
}, {city: "巴彦淖尔市", data: ["临河区", "五原县", "磴口县", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "杭锦后旗", "其它区"]}, {
    city: "乌兰察布市",
    data: ["集宁区", "卓资县", "化德县", "商都县", "兴和县", "凉城县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗", "丰镇市", "其它区"]
}, {city: "兴安盟", data: ["乌兰浩特市", "阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "扎赉特旗", "突泉县", "其它区"]}, {
    city: "锡林郭勒盟",
    data: ["二连浩特市", "锡林浩特市", "阿巴嘎旗", "苏尼特左旗", "苏尼特右旗", "东乌珠穆沁旗", "西乌珠穆沁旗", "太仆寺旗", "镶黄旗", "正镶白旗", "正蓝旗", "多伦县", "其它区"]
}, {city: "阿拉善盟", data: ["阿拉善左旗", "阿拉善右旗", "额济纳旗", "其它区"]}];
city[20] = [{
    city: "太原市",
    data: ["小店区", "迎泽区", "杏花岭区", "尖草坪区", "万柏林区", "晋源区", "清徐县", "阳曲县", "娄烦县", "古交市", "其它区"]
}, {
    city: "大同市",
    data: ["城区", "矿区", "南郊区", "新荣区", "阳高县", "天镇县", "广灵县", "灵丘县", "浑源县", "左云县", "大同县", "其它区"]
}, {city: "阳泉市", data: ["城区", "矿区", "郊区", "平定县", "盂县", "其它区"]}, {
    city: "长治市",
    data: ["长治县", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁县", "沁源县", "潞城市", "城区", "郊区", "高新区", "其它区"]
}, {city: "晋城市", data: ["城区", "沁水县", "阳城县", "陵川县", "泽州县", "高平市", "其它区"]}, {
    city: "朔州市",
    data: ["朔城区", "平鲁区", "山阴县", "应县", "右玉县", "怀仁县", "其它区"]
}, {
    city: "晋中市",
    data: ["榆次区", "榆社县", "左权县", "和顺县", "昔阳县", "寿阳县", "太谷县", "祁县", "平遥县", "灵石县", "介休市", "其它区"]
}, {
    city: "运城市",
    data: ["盐湖区", "临猗县", "万荣县", "闻喜县", "稷山县", "新绛县", "绛县", "垣曲县", "夏县", "平陆县", "芮城县", "永济市", "河津市", "其它区"]
}, {
    city: "忻州市",
    data: ["忻府区", "定襄县", "五台县", "代县", "繁峙县", "宁武县", "静乐县", "神池县", "五寨县", "岢岚县", "河曲县", "保德县", "偏关县", "原平市", "其它区"]
}, {
    city: "临汾市",
    data: ["尧都区", "曲沃县", "翼城县", "襄汾县", "洪洞县", "古县", "安泽县", "浮山县", "吉县", "乡宁县", "大宁县", "隰县", "永和县", "蒲县", "汾西县", "侯马市", "霍州市", "其它区"]
}, {
    city: "吕梁市",
    data: ["离石区", "文水县", "交城县", "兴县", "临县", "柳林县", "石楼县", "岚县", "方山县", "中阳县", "交口县", "孝义市", "汾阳市", "其它区"]
}];
city[21] = [{city: "兰州市", data: ["城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县", "其它区"]}, {
    city: "嘉峪关市",
    data: ["新城镇", "峪泉镇", "文殊镇", "雄关区", "镜铁区", "长城区", "其他区"]
}, {city: "金昌市", data: ["金川区", "永昌县", "其它区"]}, {
    city: "白银市",
    data: ["白银区", "平川区", "靖远县", "会宁县", "景泰县", "其它区"]
}, {city: "天水市", data: ["秦州区", "麦积区", "清水县", "秦安县", "甘谷县", "武山县", "张家川回族自治县", "其它区"]}, {
    city: "武威市",
    data: ["凉州区", "民勤县", "古浪县", "天祝藏族自治县", "其它区"]
}, {city: "张掖市", data: ["甘州区", "肃南裕固族自治县", "民乐县", "临泽县", "高台县", "山丹县", "其它区"]}, {
    city: "平凉市",
    data: ["崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县", "其它区"]
}, {city: "酒泉市", data: ["肃州区", "金塔县", "安西县", "肃北蒙古族自治县", "阿克塞哈萨克族自治县", "玉门市", "敦煌市", "其它区"]}, {
    city: "庆阳市",
    data: ["西峰区", "庆城县", "环县", "华池县", "合水县", "正宁县", "宁县", "镇原县", "其它区"]
}, {city: "定西市", data: ["安定区", "通渭县", "陇西县", "渭源县", "临洮县", "漳县", "岷县", "其它区"]}, {
    city: "陇南市",
    data: ["武都区", "成县", "文县", "宕昌县", "康县", "西和县", "礼县", "徽县", "两当县", "其它区"]
}, {
    city: "临夏回族自治州",
    data: ["临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡族自治县", "积石山保安族东乡族撒拉族自治县", "其它区"]
}, {city: "甘南藏族自治州", data: ["合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县", "其它区"]}];
city[22] = [{city: "西宁市", data: ["城东区", "城中区", "城西区", "城北区", "大通回族土族自治县", "湟中县", "湟源县", "其它区"]}, {
    city: "海东地区",
    data: ["平安县", "民和回族土族自治县", "乐都县", "互助土族自治县", "化隆回族自治县", "循化撒拉族自治县", "其它区"]
}, {city: "海北藏族自治州", data: ["门源回族自治县", "祁连县", "海晏县", "刚察县", "其它区"]}, {
    city: "黄南藏族自治州",
    data: ["同仁县", "尖扎县", "泽库县", "河南蒙古族自治县", "其它区"]
}, {city: "海南藏族自治州", data: ["共和县", "同德县", "贵德县", "兴海县", "贵南县", "其它区"]}, {
    city: "果洛藏族自治州",
    data: ["玛沁县", "班玛县", "甘德县", "达日县", "久治县", "玛多县", "其它区"]
}, {city: "玉树藏族自治州", data: ["玉树县", "杂多县", "称多县", "治多县", "囊谦县", "曲麻莱县", "其它区"]}, {
    city: "海西蒙古族藏族自治州",
    data: ["格尔木市", "德令哈市", "乌兰县", "都兰县", "天峻县", "其它区"]
}];
city[23] = [{
    city: "长春市",
    data: ["南关区", "宽城区", "朝阳区", "二道区", "绿园区", "双阳区", "农安县", "九台市", "榆树市", "德惠市", "高新技术产业开发区", "汽车产业开发区", "经济技术开发区", "净月旅游开发区", "其它区"]
}, {city: "吉林市", data: ["昌邑区", "龙潭区", "船营区", "丰满区", "永吉县", "蛟河市", "桦甸市", "舒兰市", "磐石市", "其它区"]}, {
    city: "四平市",
    data: ["铁西区", "铁东区", "梨树县", "伊通满族自治县", "公主岭市", "双辽市", "其它区"]
}, {city: "辽源市", data: ["龙山区", "西安区", "东丰县", "东辽县", "其它区"]}, {
    city: "通化市",
    data: ["东昌区", "二道江区", "通化县", "辉南县", "柳河县", "梅河口市", "集安市", "其它区"]
}, {city: "白山市", data: ["八道江区", "抚松县", "靖宇县", "长白朝鲜族自治县", "江源县", "临江市", "其它区"]}, {
    city: "松原市",
    data: ["宁江区", "前郭尔罗斯蒙古族自治县", "长岭县", "乾安县", "扶余县", "其它区"]
}, {city: "白城市", data: ["洮北区", "镇赉县", "通榆县", "洮南市", "大安市", "其它区"]}, {
    city: "延边朝鲜族自治州",
    data: ["延吉市", "图们市", "敦化市", "珲春市", "龙井市", "和龙市", "汪清县", "安图县", "其它区"]
}];
city[24] = [{
    city: "南宁市",
    data: ["兴宁区", "青秀区", "江南区", "西乡塘区", "良庆区", "邕宁区", "武鸣县", "隆安县", "马山县", "上林县", "宾阳县", "横县", "其它区"]
}, {
    city: "柳州市",
    data: ["城中区", "鱼峰区", "柳南区", "柳北区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县", "其它区"]
}, {
    city: "桂林市",
    data: ["秀峰区", "叠彩区", "象山区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "兴安县", "永福县", "灌阳县", "龙胜各族自治县", "资源县", "平乐县", "荔浦县", "恭城瑶族自治县", "其它区"]
}, {city: "梧州市", data: ["万秀区", "蝶山区", "长洲区", "苍梧县", "藤县", "蒙山县", "岑溪市", "其它区"]}, {
    city: "北海市",
    data: ["海城区", "银海区", "铁山港区", "合浦县", "其它区"]
}, {city: "防城港市", data: ["港口区", "防城区", "上思县", "东兴市", "其它区"]}, {
    city: "钦州市",
    data: ["钦南区", "钦北区", "灵山县", "浦北县", "其它区"]
}, {city: "贵港市", data: ["港北区", "港南区", "覃塘区", "平南县", "桂平市", "其它区"]}, {
    city: "玉林市",
    data: ["玉州区", "容县", "陆川县", "博白县", "兴业县", "北流市", "其它区"]
}, {
    city: "百色市",
    data: ["右江区", "田阳县", "田东县", "平果县", "德保县", "靖西县", "那坡县", "凌云县", "乐业县", "田林县", "西林县", "隆林各族自治县", "其它区"]
}, {city: "贺州市", data: ["八步区", "昭平县", "钟山县", "富川瑶族自治县", "其它区"]}, {
    city: "河池市",
    data: ["金城江区", "南丹县", "天峨县", "凤山县", "东兰县", "罗城仫佬族自治县", "环江毛南族自治县", "巴马瑶族自治县", "都安瑶族自治县", "大化瑶族自治县", "宜州市", "其它区"]
}, {city: "来宾市", data: ["兴宾区", "忻城县", "象州县", "武宣县", "金秀瑶族自治县", "合山市", "其它区"]}, {
    city: "崇左市",
    data: ["江州区", "扶绥县", "宁明县", "龙州县", "大新县", "天等县", "凭祥市", "其它区"]
}];
city[25] = [{
    city: "昆明市",
    data: ["五华区", "盘龙区", "官渡区", "西山区", "东川区", "呈贡县", "晋宁县", "富民县", "宜良县", "石林彝族自治县", "嵩明县", "禄劝彝族苗族自治县", "寻甸回族彝族自治县", "安宁市", "其它区"]
}, {city: "曲靖市", data: ["麒麟区", "马龙县", "陆良县", "师宗县", "罗平县", "富源县", "会泽县", "沾益县", "宣威市", "其它区"]}, {
    city: "玉溪市",
    data: ["红塔区", "江川县", "澄江县", "通海县", "华宁县", "易门县", "峨山彝族自治县", "新平彝族傣族自治县", "元江哈尼族彝族傣族自治县", "其它区"]
}, {city: "保山市", data: ["隆阳区", "施甸县", "腾冲县", "龙陵县", "昌宁县", "其它区"]}, {
    city: "昭通市",
    data: ["昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县", "其它区"]
}, {city: "丽江市", data: ["古城区", "玉龙纳西族自治县", "永胜县", "华坪县", "宁蒗彝族自治县", "其它区"]}, {
    city: "普洱市",
    data: ["思茅区", "宁洱哈尼族彝族自治县", "墨江哈尼族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "镇沅彝族哈尼族拉祜族自治县", "江城哈尼族彝族自治县", "孟连傣族拉祜族佤族自治县", "澜沧拉祜族自治县", "西盟佤族自治县", "其它区"]
}, {
    city: "临沧市",
    data: ["临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江拉祜族佤族布朗族傣族自治县", "耿马傣族佤族自治县", "沧源佤族自治县", "其它区"]
}, {
    city: "楚雄彝族自治州",
    data: ["楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县", "其它区"]
}, {
    city: "红河哈尼族彝族自治州",
    data: ["个旧市", "开远市", "蒙自县", "屏边苗族自治县", "建水县", "石屏县", "弥勒县", "泸西县", "元阳县", "红河县", "金平苗族瑶族傣族自治县", "绿春县", "河口瑶族自治县", "其它区"]
}, {city: "文山壮族苗族自治州", data: ["文山县", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县", "其它区"]}, {
    city: "西双版纳傣族自治州",
    data: ["景洪市", "勐海县", "勐腊县", "其它区"]
}, {
    city: "大理白族自治州",
    data: ["大理市", "漾濞彝族自治县", "祥云县", "宾川县", "弥渡县", "南涧彝族自治县", "巍山彝族回族自治县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县", "其它区"]
}, {city: "德宏傣族景颇族自治州", data: ["瑞丽市", "潞西市", "梁河县", "盈江县", "陇川县", "其它区"]}, {
    city: "怒江傈僳族自治州",
    data: ["泸水县", "福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县", "其它区"]
}, {city: "迪庆藏族自治州", data: ["香格里拉县", "德钦县", "维西傈僳族自治县", "其它区"]}];
city[26] = [{city: "拉萨市", data: ["城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县", "其它区"]}, {
    city: "昌都地区",
    data: ["昌都县", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县", "其它区"]
}, {
    city: "山南地区",
    data: ["乃东县", "扎囊县", "贡嘎县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县", "其它区"]
}, {
    city: "日喀则地区",
    data: ["日喀则市", "南木林县", "江孜县", "定日县", "萨迦县", "拉孜县", "昂仁县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "聂拉木县", "萨嘎县", "岗巴县", "其它区"]
}, {city: "那曲地区", data: ["那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "索县", "班戈县", "巴青县", "尼玛县", "其它区"]}, {
    city: "阿里地区",
    data: ["普兰县", "札达县", "噶尔县", "日土县", "革吉县", "改则县", "措勤县", "其它区"]
}, {city: "林芝地区", data: ["林芝县", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县", "其它区"]}];
city[27] = [{
    city: "乌鲁木齐市",
    data: ["天山区", "沙依巴克区", "新市区", "水磨沟区", "头屯河区", "达坂城区", "东山区", "米东区", "乌鲁木齐县", "其它区"]
}, {city: "克拉玛依市", data: ["独山子区", "克拉玛依区", "白碱滩区", "乌尔禾区", "其它区"]}, {
    city: "吐鲁番地区",
    data: ["吐鲁番市", "鄯善县", "托克逊县", "其它区"]
}, {city: "哈密地区", data: ["哈密市", "巴里坤哈萨克自治县", "伊吾县", "其它区"]}, {
    city: "昌吉回族自治州",
    data: ["昌吉市", "阜康市", "米泉市", "呼图壁县", "玛纳斯县", "奇台县", "吉木萨尔县", "木垒哈萨克自治县", "其它区"]
}, {city: "博尔塔拉蒙古自治州", data: ["博乐市", "精河县", "温泉县", "其它区"]}, {
    city: "巴音郭楞蒙古自治州",
    data: ["库尔勒市", "轮台县", "尉犁县", "若羌县", "且末县", "焉耆回族自治县", "和静县", "和硕县", "博湖县", "其它区"]
}, {
    city: "阿克苏地区",
    data: ["阿克苏市", "温宿县", "库车县", "沙雅县", "新和县", "拜城县", "乌什县", "阿瓦提县", "柯坪县", "其它区"]
}, {city: "克孜勒苏柯尔克孜自治州", data: ["阿图什市", "阿克陶县", "阿合奇县", "乌恰县", "其它区"]}, {
    city: "喀什地区",
    data: ["喀什市", "疏附县", "疏勒县", "英吉沙县", "泽普县", "莎车县", "叶城县", "麦盖提县", "岳普湖县", "伽师县", "巴楚县", "塔什库尔干塔吉克自治县", "其它区"]
}, {city: "和田地区", data: ["和田市", "和田县", "墨玉县", "皮山县", "洛浦县", "策勒县", "于田县", "民丰县", "其它区"]}, {
    city: "伊犁哈萨克自治州",
    data: ["伊宁市", "奎屯市", "伊宁县", "察布查尔锡伯自治县", "霍城县", "巩留县", "新源县", "昭苏县", "特克斯县", "尼勒克县", "其它区"]
}, {city: "塔城地区", data: ["塔城市", "乌苏市", "额敏县", "沙湾县", "托里县", "裕民县", "和布克赛尔蒙古自治县", "其它区"]}, {
    city: "阿勒泰地区",
    data: ["阿勒泰市", "布尔津县", "富蕴县", "福海县", "哈巴河县", "青河县", "吉木乃县", "其它区"]
}, {city: "石河子市", data: ["新城街道", "向阳街道", "红山街道", "老街街道", "东城街道", "北泉镇", "石河子乡", "兵团一五二团", "其他区"]}, {
    city: "阿拉尔市",
    data: ["金银川路街道", "幸福路街道", "青松路街道", "南口街道", "托喀依乡工业园区", "兵团七团", "兵团八团", "兵团十团", "兵团十一团", "兵团十二团", "兵团十三团", "兵团十四团", "兵团十六团", "兵团第一师水利水电工程处", "兵团第一师塔里木灌区水利管理处", "阿拉尔农场", "兵团第一师幸福农场", "中心监狱", "其他区"]
}, {
    city: "图木舒克市",
    data: ["齐干却勒街道", "前海街道", "永安坝街道", "兵团四十四团", "兵团四十九团", "兵团五十团", "兵团五十一团", "兵团五十三团", "兵团图木舒克市喀拉拜勒镇", "兵团图木舒克市永安坝", "其他区"]
}, {city: "五家渠市", data: ["军垦路街道", "青湖路街道", "人民路街道", "兵团一零一团", "兵团一零二团", "兵团一零三团", "其他区"]}];
city[28] = [{city: "海口市", data: ["秀英区", "龙华区", "琼山区", "美兰区", "其它区"]}, {
    city: "三亚市",
    data: ["海棠湾镇", "吉阳镇", "凤凰镇", "崖城镇", "天涯镇", "育才镇", "国营南田农场", "国营南新农场", "国营立才农场", "国营南滨农场", "河西区街道", "河东区街道", "其它区"]
}, {city: "五指山市", data: ["通什镇", "南圣镇", "毛阳镇", "番阳镇", "畅好乡", "毛道乡", "水满乡", "国营畅好农场", "其它区"]}, {
    city: "琼海市",
    data: ["嘉积镇", "万泉镇", "石壁镇", "中原镇", "博鳌镇", "阳江镇", "龙江镇", "潭门镇", "塔洋镇", "长坡镇", "大路镇", "会山镇", "国营东太农场", "国营东红农场", "国营东升农场", "彬村山华侨农场", "其它区"]
}, {
    city: "儋州市",
    data: ["那大镇", "和庆镇", "南丰镇", "大成镇", "雅星镇", "兰洋镇", "光村镇", "木棠镇", "海头镇", "峨蔓镇", "三都镇", "王五镇", "白马井镇", "中和镇", "排浦镇", "东成镇", "新州镇", "国营西培农场", "国营西联农场", "国营蓝洋农场", "国营八一农场", "洋浦经济开发区", "华南热作学院", "其它区"]
}, {
    city: "文昌市",
    data: ["文城镇", "重兴镇", "蓬莱镇", "会文镇", "东路镇", "潭牛镇", "东阁镇", "文教镇", "东郊镇", "龙楼镇", "昌洒镇", "翁田镇", "抱罗镇", "冯坡镇", "锦山镇", "铺前镇", "公坡镇", "国营东路农场", "国营南阳农场", "国营罗豆农场", "其它区"]
}, {
    city: "万宁市",
    data: ["万城镇", "龙滚镇", "和乐镇", "后安镇", "大茂镇", "东澳镇", "礼纪镇", "长丰镇", "山根镇", "北大镇", "南桥镇", "三更罗镇", "国营东兴农场", "国营东和农场", "国营新中农场", "兴隆华侨农场", "地方国营六连林场", "其它区"]
}, {
    city: "东方市",
    data: ["八所镇", "东河镇", "大田镇", "感城镇", "板桥镇", "三家镇", "四更镇", "新龙镇", "天安乡", "江边乡", "国营广坝农场", "东方华侨农场", "其它区"]
}, {
    city: "定安县",
    data: ["定城镇", "新竹镇", "龙湖镇", "黄竹镇", "雷鸣镇", "龙门镇", "龙河镇", "岭口镇", "翰林镇", "富文镇", "国营中瑞农场", "国营南海农场", "国营金鸡岭农场", "其它区"]
}, {
    city: "屯昌县",
    data: ["屯城镇", "新兴镇", "枫木镇", "乌坡镇", "南吕镇", "南坤镇", "坡心镇", "西昌镇", "国营中建农场", "国营中坤农场", "其它区"]
}, {
    city: "澄迈县",
    data: ["金江镇", "老城镇", "瑞溪镇", "永发镇", "加乐镇", "文儒镇", "中兴镇", "仁兴镇", "福山镇", "桥头镇", "大丰镇", "国营红光农场", "国营西达农场", "国营金安农场", "其它区"]
}, {
    city: "临高县",
    data: ["临城镇", "波莲镇", "东英镇", "博厚镇", "皇桐镇", "多文镇", "和舍镇", "南宝镇", "新盈镇", "调楼镇", "国营红华农场", "国营加来农场", "其它区"]
}, {
    city: "白沙黎族自治县",
    data: ["牙叉镇", "七坊镇", "邦溪镇", "打安镇", "细水乡", "元门乡", "南开乡", "阜龙乡", "青松乡", "金波乡", "荣邦乡", "国营白沙农场", "国营龙江农场", "国营邦溪农场", "其它区"]
}, {
    city: "昌江黎族自治县",
    data: ["石碌镇", "叉河镇", "十月田镇", "乌烈镇", "昌化镇", "海尾镇", "七叉镇", "王下乡", "国营红林农场", "国营霸王岭林场", "海南矿业联合有限公司", "其它区"]
}, {
    city: "乐东黎族自治县",
    data: ["抱由镇", "万冲镇", "大安镇", "志仲镇", "千家镇", "九所镇", "利国镇", "黄流镇", "佛罗镇", "尖峰镇", "莺歌海镇", "国营山荣农场", "国营乐光农场", "国营保国农场", "国营尖峰岭林业公司", "国营莺歌海盐场", "其它区"]
}, {
    city: "陵水黎族自治县",
    data: ["椰林镇", "光坡镇", "三才镇", "英州镇", "隆广镇", "文罗镇", "本号镇", "新村镇", "黎安镇", "提蒙乡", "群英乡", "国营岭门农场", "国营南平农场", "国营吊罗山林业公司", "其它区"]
}, {
    city: "保亭黎族苗族自治县",
    data: ["保城镇", "什玲镇", "加茂镇", "响水镇", "新政镇", "三道镇", "六弓乡", "南林乡", "毛感乡", "国营新星农场", "海南保亭热带作物研究所", "国营金江农场", "国营三道农场", "其它区"]
}, {
    city: "琼中黎族苗族自治县",
    data: ["营根镇", "湾岭镇", "黎母山镇", "和平镇", "长征镇", "红毛镇", "中平镇", "吊罗山乡", "上安乡", "什运乡", "国营阳江农场", "国营乌石农场", "国营加钗农场", "国营长征农场", "国营黎母山林业公司", "其它区"]
}, {city: "三沙市", data: ["西沙群岛", "南沙群岛", "中沙群岛的岛礁及其海域", "其它区"]}];
city[29] = [{
    city: "贵阳市",
    data: ["南明区", "云岩区", "花溪区", "乌当区", "白云区", "小河区", "开阳县", "息烽县", "修文县", "金阳开发区", "清镇市", "其它区"]
}, {city: "六盘水市", data: ["钟山区", "六枝特区", "水城县", "盘县", "其它区"]}, {
    city: "遵义市",
    data: ["红花岗区", "汇川区", "遵义县", "桐梓县", "绥阳县", "正安县", "道真仡佬族苗族自治县", "务川仡佬族苗族自治县", "凤冈县", "湄潭县", "余庆县", "习水县", "赤水市", "仁怀市", "其它区"]
}, {city: "安顺市", data: ["西秀区", "平坝县", "普定县", "镇宁布依族苗族自治县", "关岭布依族苗族自治县", "紫云苗族布依族自治县", "其它区"]}, {
    city: "铜仁地区",
    data: ["铜仁市", "江口县", "玉屏侗族自治县", "石阡县", "思南县", "印江土家族苗族自治县", "德江县", "沿河土家族自治县", "松桃苗族自治县", "万山特区", "其它区"]
}, {city: "黔西南布依族苗族自治州", data: ["兴义市", "兴仁县", "普安县", "晴隆县", "贞丰县", "望谟县", "册亨县", "安龙县", "其它区"]}, {
    city: "毕节地区",
    data: ["毕节市", "大方县", "黔西县", "金沙县", "织金县", "纳雍县", "威宁彝族回族苗族自治县", "赫章县", "其它区"]
}, {
    city: "黔东南苗族侗族自治州",
    data: ["凯里市", "黄平县", "施秉县", "三穗县", "镇远县", "岑巩县", "天柱县", "锦屏县", "剑河县", "台江县", "黎平县", "榕江县", "从江县", "雷山县", "麻江县", "丹寨县", "其它区"]
}, {
    city: "黔南布依族苗族自治州",
    data: ["都匀市", "福泉市", "荔波县", "贵定县", "瓮安县", "独山县", "平塘县", "罗甸县", "长顺县", "龙里县", "惠水县", "三都水族自治县", "其它区"]
}];
city[30] = [{city: "银川市", data: ["兴庆区", "西夏区", "金凤区", "永宁县", "贺兰县", "灵武市", "其它区"]}, {
    city: "石嘴山市",
    data: ["大武口区", "惠农区", "平罗县", "其它区"]
}, {city: "吴忠市", data: ["利通区", "红寺堡区", "盐池县", "同心县", "青铜峡市", "其它区"]}, {
    city: "固原市",
    data: ["原州区", "西吉县", "隆德县", "泾源县", "彭阳县", "其它区"]
}, {city: "中卫市", data: ["沙坡头区", "中宁县", "海原县", "其它区"]}];

function addCity(c, b) {
    if (b == undefined) {
        b = $j("#_province").val()
    }
    $j("#_city>option").remove();
    var d = $j("<option value=''>--请选择市/区--</option>");
    d.appendTo($j("#_city"));
    if (city[b] != undefined) {
        for (var a = 0; a < city[b].length; a++) {
            var d = $j("<option value=" + a + ">" + city[b][a].city + "</option>");
            d.appendTo($j("#_city"))
        }
    }
    $j("#district>option").remove();
    var d = $j("<option value=''>--请选择区/县--</option>");
    d.appendTo($j("#district"));
    $j("#_city").trigger("change");
    $j("#district").trigger("change")
}

function addData(f, d) {
    if (d == undefined) {
        d = $j("#_province").val()
    }
    if (city[d] != undefined) {
        for (var c = 0; c < city[d].length; c++) {
            var e = city[d][c];
            if (e.city == $j("#_city").find("option:selected").text()) {
                var b = e.data;
                $j("#district>option").remove();
                var g = $j("<option value=''>--请选择区/县--</option>");
                g.appendTo($j("#district"));
                if (b != undefined) {
                    for (var a = 0; a < b.length; a++) {
                        var g = $j("<option value=" + b[a] + ">" + b[a] + "</option>");
                        g.appendTo($j("#district"))
                    }
                }
            }
        }
    }
    $j("#district").trigger("change")
}

$j(document).ready(function () {
    for (var a = 0; a < province.length; a++) {
        var b = $j("<option value=" + a + ">" + province[a] + "</option>");
        b.appendTo($j("#_province"))
    }
    $j("#_province").change(addCity);
    $j("#_city").change(addData);
    $j(".pcd-select select").change(function () {
        $j(this).parent().find("span").html($j(this).find("option:selected").html())
    })
});
jQuery(document).ready(function () {

    function checkHeight() {
        var windowH = jQuery(window).height();
        if (jQuery('.homepage').length) {
            var bannerH = jQuery('.banner').height();
            var pathH = 0;
        } else {
            var bannerH = 0;
            var pathH = jQuery('.pathway').height();
        }
        var topH = jQuery('.top').height();
        var contentH = jQuery('body > .content').height();
        var footerH = jQuery('.footer').height();

        var contentSum = topH + footerH + contentH + pathH + bannerH;
        var footerSpace = (windowH - contentSum)-1;
        var footerNewH = footerH + footerSpace;
        if (footerSpace > 0) {
            jQuery('.footer').css('height', footerNewH + 'px');
        }
    }

    checkHeight();

    jQuery("select, input:file").uniform({
        fileDefaultText:'Wybierz plik z dysku ...',
        fileBtnText:'Wybierz plik'
    });

    jQuery('.submenu li:last-child').addClass('last');

    jQuery('.menu>li').hover(
        function () {
            jQuery('.submenu').each(function(){
                jQuery(this).hide();
                jQuery(this).removeClass('show-menu');
                jQuery('.menu li.hover').removeClass('hover');
            });
            if (jQuery(this).find('.submenu').length === 1) {
                var elementWidth = jQuery(this).find('.submenu').width() / 2;
                var hoverW = jQuery(this).width() / 2;
                var leftP = elementWidth - hoverW;
                jQuery(this).find('.submenu').css('left', '-' + leftP + 'px');
                jQuery(this).find('.submenu').attr('aria-hidden', 'false');
                jQuery(this).find('.submenu').stop(1, 1).fadeIn();
                jQuery(this).addClass('hover');
            }
        },
        function () {
            jQuery(this).find('.submenu').attr('aria-hidden', 'true');
            jQuery(this).find('.submenu').stop(1, 1).fadeOut();
            jQuery(this).removeClass('hover');
        }
    );
    jQuery('.noclick').click(function(e){
        e.preventDefault();
    });
    jQuery('.menu>li > a').focus(
        function () {
            jQuery('.submenu').each(function () {
                jQuery(this).hide();
                jQuery('.menu > li.hover').removeClass('hover');
                jQuery(this).removeClass('show-menu')
            });
            if (jQuery(this).parent().find('.submenu').length === 1) {
                var elementWidth = jQuery(this).parent().find('.submenu').width() / 2;
                var hoverW = jQuery(this).parent().width() / 2;
                var leftP = elementWidth - hoverW;
                jQuery(this).parent().find('.submenu').css('left', '-' + leftP + 'px');
                jQuery(this).parent().find('.submenu').attr('aria-hidden', 'false');
                jQuery(this).parent().find('.submenu').stop(1, 1).fadeIn();
                jQuery(this).parent().addClass('hover');
            }
    });

    jQuery('.submenu li a').focus(
        function () {
            jQuery('.submenu').stop(1, 1);
            jQuery(this).parents('.submenu').addClass('show-menu');
            jQuery(this).parents('.submenu').attr('aria-hidden', 'false');
        }
    );
    jQuery('.submenu').blur(
        function () {
            jQuery(this).hide();
            jQuery('.submenu').stop(1, 1);
            jQuery(this).removeClass('show-menu').attr('aria-hidden', 'true');
        }
    );
    jQuery('.submenu li a').click(
        function (e) {
            e.stopPropagation();
        }
    );
    jQuery('html').click(function() {
        jQuery('.submenu').each(function(){
            jQuery(this).hide();
            jQuery(this).removeClass('show-menu');
            jQuery('.menu li.hover').removeClass('hover');
        })
    });



    jQuery('.two-column .column:first').addClass('noMargin');

    if (jQuery('.one-column').length) {
        var oneColumnH = jQuery('.one-column').height();
        jQuery('.content .wrap .column:first-child').css('height', oneColumnH + 'px');
    }

//GOOGLE MAPS
    if (jQuery('.contact-left').length) {
        var ll_1 = new google.maps.LatLng(52.217977, 21.014303);
        var ll_2 = new google.maps.LatLng(52.2177377, 21.0139338);
        var ll_3 = new google.maps.LatLng(52.2178868, 21.0166029);
        var ll_4 = new google.maps.LatLng(52.217808, 21.0081723);
        var ll_5 = new google.maps.LatLng(52.4010711, 16.9657946);
        var ll_6 = new google.maps.LatLng(51.754028, 19.456290);
		var ll_7 = new google.maps.LatLng(50.086658, 19.976048);

        var mapOptions = {
            zoom:14,
            center:ll_1,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var mapOptions2 = {
            zoom:14,
            center:ll_5,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var mapOptions3 = {
            zoom:14,
            center:ll_6,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
		var mapOptions4 = {
            zoom:14,
            center:ll_7,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-wwa"), mapOptions);
        var map2 = new google.maps.Map(document.getElementById("map-pzn"), mapOptions2);
        var map3 = new google.maps.Map(document.getElementById("map-ldz"), mapOptions3);
		var map4 = new google.maps.Map(document.getElementById("map-krk"), mapOptions4);

        var marker = new google.maps.Marker({
            position:ll_1,
            title:"International Business Center IBC2",
            icon:'images/a.png'
        });
        var marker2 = new google.maps.Marker({
            position:ll_2,
            title:"International Business Center IBC1",
            icon:'images/b.png'
        });
        var marker3 = new google.maps.Marker({
            position:ll_3,
            title:"Zebra Tower",
            icon:'images/c.png'
        });
        var marker4 = new google.maps.Marker({
            position:ll_4,
            title:"Focus",
            icon:'images/d.png'
        });
        var marker5 = new google.maps.Marker({
            position:ll_5,
            title:"Poznań Malta Office Park",
            icon:'images/a.png'
        });
        var marker6 = new google.maps.Marker({
            position:ll_6,
            title:"University Business Park",
            icon:'images/a.png'
        });
		 var marker7 = new google.maps.Marker({
            position:ll_7,
            title:"Quattro Business Park",
            icon:'images/a.png'
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
        marker2.setMap(map);
        marker3.setMap(map);
        marker4.setMap(map);
        marker5.setMap(map2);
        marker6.setMap(map3);
		marker7.setMap(map4);

        jQuery('.show-map-1').click(function () {
            map.setZoom(18);
            map.panTo(ll_1);
        });
        jQuery('.show-map-2').click(function () {
            map.setZoom(18);
            map.panTo(ll_2);
        });
        jQuery('.show-map-3').click(function () {
            map.setZoom(18);
            map.panTo(ll_3);
        });
        jQuery('.show-map-4').click(function () {
            map.setZoom(18);
            map.panTo(ll_4);
        });
        jQuery('.show-map-5').click(function () {
            map2.setZoom(18);
            map2.panTo(ll_5);
        });
        jQuery('.show-map-6').click(function (e) {
            e.preventDefault();
            map3.setZoom(18);
            map3.panTo(ll_6);
        });
		jQuery('.show-map-7').click(function (e) {
            e.preventDefault();
            map4.setZoom(18);
            map4.panTo(ll_7);
        });
    }
//    BANNER ANIMATION
    var baner = {
        time:12000,
        clearSpots:function () {
            jQuery('#spots li').each(function () {
                jQuery(this).removeClass('active');
            });
        },
        hide:function (showL) {
            var currentAct = parseInt(jQuery('#spots li.active').index());
            jQuery('#step-' + currentAct + '').animate({
                opacity:0
            }, 600, function () {
                jQuery('#step-' + currentAct + '').animate({
                    opacity:0
                }, 500, function () {
                    jQuery('#step-' + currentAct + '').hide();
                    baner.curtain();
                    if (showL == undefined) {
                    }
                    else {
                        showL();
                    }
                })
            });
        },
        show:function () {
            var currentAct = parseInt(jQuery('#spots li.active').index());
            jQuery('#step-' + currentAct + '').show();
            jQuery('#step-' + currentAct + '').animate({
                opacity:1
            }, 600, function () {
                jQuery('#step-' + currentAct + '').animate({
                    opacity:1
                }, 500);
            });
        },
        switchtab:function (pointer) {
            this.clearSpots();
            jQuery('#spots li').eq(pointer).addClass('active');
        },
        curtain:function () {
            var pointer = parseInt(jQuery('#spots li.active').index());
            if (pointer == 0) {
                var move = 0;
            }
            if (pointer == 1) {
                var move = 0;
            }
            if (pointer == 2) {
                var move = -400;
            }
            if (pointer == 3) {
                var move = -800;
            }
            if (pointer == 4) {
                var move = -1200;
            }
            if (pointer == 5) {
                var move = -1600;
            }
            jQuery('.curtain').animate({
                height:400
            }, 200, function () {
                jQuery('.banner-wrap').css('backgroundPosition', 'center ' + move + 'px');
                jQuery('.curtain').animate({
                    height:0
                }, 200, function () {
                    baner.show();
                });
            });
        }
    };

    if (jQuery('#step-1').length) {

        function goBaner() {
            var activeID = parseInt(jQuery('#spots li.active').index());

            bannerInt = window.setInterval(function () {
                baner.hide();
                activeID++;
                if (activeID > 4) {
                    activeID = 1;
                }
                baner.switchtab(activeID);

            }, baner.time);
        }

        goBaner();

        jQuery('.spot').click(function () {
            if (!(jQuery(this).hasClass('active'))) {
                var showL = baner.show();
                baner.hide(showL);
                baner.clearSpots();
                window.clearInterval(bannerInt);
                jQuery(this).addClass('active');
                if (doplay == 1) {
                    goBaner();
                }
            }
        });
        doplay = 1;
        jQuery('.pause').click(function () {
            if (jQuery(this).hasClass('stoped')) {
                jQuery(this).removeClass('stoped');
                jQuery(this).attr('title', 'pause');
                doplay = 1;
                goBaner();
            } else {
                jQuery(this).addClass('stoped');
                jQuery(this).attr('title', 'play');
                doplay = 0;
                window.clearInterval(bannerInt);
            }
        });

        function resizeW() {
            var screenW = jQuery('body').width();
            jQuery('.banner').css('width', screenW + 'px');
        }

        resizeW();
        jQuery(window).bind('resize', function () {
            resizeW();
        });
    }

    if (jQuery('.pathway').length) {
        jQuery('.wrap ul li:last-child').addClass('last-child');
    }
});




























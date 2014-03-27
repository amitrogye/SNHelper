window.bookmarklet = function(opts) {
    fullFunc(opts)
};

// These are the styles, scripts and callbacks we include in our bookmarklet:
window.bookmarklet({

    css: ['https://amitrogye.github.io/SNHelper/css/jquery.ferro.ferroMenu.css'],
    js: ['https://amitrogye.github.io/SNHelper/js/jquery.ferro.ferroMenu-1.2.2.min.js'],
    jqpath: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js',
    ready: function() {


        //alert("hello -- " + jQuery.fn.jquery);
        //window.open($(\'gsft_main\').contentWindow.location.href);
        var flg = false;
        if (jQuery("#ferromenu-controller-0").length <= 0) {
            var wheel = '<ul id="nav">';
            wheel += '<li><a href="javascript:window.frames[\'gsft_main\'].location.href = \'sys_ui_page_list.do\';collapseMenu();">up</a></li>';
            wheel += '<li><a href="javascript:window.frames[\'gsft_main\'].location.href = \'sys_ui_macro_list.do\';collapseMenu();">um</a></li>';
            wheel += '<li><a href="javascript:window.frames[\'gsft_main\'].location.href = \'sys_script_include_list.do\';collapseMenu();">si</a></li>';
            wheel += '<li><a href="javascript:window.frames[\'gsft_main\'].location.href = \'sys_script_list.do\';collapseMenu();">br</a></li>';
            wheel += '<li><a href="javascript:window.frames[\'gsft_main\'].location.href = \'sys.scripts.do\';collapseMenu();">bs</a></li>';
            wheel += '<li><a href="javascript:window.frames[\'gsft_main\'].location.href = \'syslog_list.do?sysparm_query=sys_created_onONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)^EQ\';collapseMenu();">lg</a></li>';
            wheel += '<li><a href="javascript:console.log(this.top);window.open(window.frames[\'gsft_main\'].location.href);collapseMenu();">nw</a></li>';
            wheel += '</ul>';
            jQuery("body").append(wheel);
            jQuery(document).ready(function() {
                jQuery("#nav").ferroMenu({
                    position: 'center-top',
                    delay: 50,
                    rotation: 720,
                    margin: 20,
                    opened: false
                });
            });
            flg = true;
        }

        if (!flg) {
            if (jQuery("#ferromenu-controller-0").is(":visible")) {
                if (jQuery(".ferromenu-controller").hasClass("open")) {
                    jQuery.fn.ferroMenu.toggleMenu(jQuery("a#ferromenu-controller-0").data("ferromenuitem"))
                }
                jQuery("#ferromenu-controller-0").hide('slow');
            } else {
                jQuery("#ferromenu-controller-0").show('slow');
            }
        }

    }
});

function collapseMenu() {
    jQuery.fn.ferroMenu.toggleMenu(jQuery("a#ferromenu-controller-0").data("ferromenuitem"));
}

function fullFunc(a) {
    function d(b) {
        if (b.length === 0) {
            a.ready();
            return false
        }
        jQuery.getScript(b[0], function() {
            d(b.slice(1))
        })
    }

    function e(b) {
        jQuery.each(b, function(c, f) {
            jQuery("<link>").attr({
                href: f,
                rel: "stylesheet"
            }).appendTo("head")
        })
    }
    a.jqpath = a.jqpath || "https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js";
    (function(b) {
        var c = document.createElement("script");
        c.type = "text/javascript";
        c.src = b;
        c.onload = function() {
            jQuery.noConflict();
            e(a.css);
            d(a.js)
        };
        document.body.appendChild(c)
    })(a.jqpath)
};
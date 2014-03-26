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
            var wheel = '<ul id="nav"><li><a href="javascript:window.frames[\'gsft_main\'].location.href = \'sys_ui_page_list.do\';collapseMenu();">UP</a></li><li><a href="javascript:console.log(this.top);window.open(window.frames[\'gsft_main\'].location.href);collapseMenu();">New</a></li></ul>';
            jQuery("body").append(wheel);
            jQuery(document).ready(function() {
                jQuery("#nav").ferroMenu({
                     position : 'center-top'
                });
            });
            flg = true;
        }

        if(!flg){
            if(jQuery("#ferromenu-controller-0").is(":visible")){
                if(jQuery(".ferromenu-controller").hasClass("open")){
                    jQuery.fn.ferroMenu.toggleMenu(jQuery("a#ferromenu-controller-0").data("ferromenuitem"))
                }
                jQuery("#ferromenu-controller-0").hide('slow');
            }else{
                jQuery("#ferromenu-controller-0").show('slow');
            }
        }

    }
});

function collapseMenu(){
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
            e(a.css);
            d(a.js)
        };
        document.body.appendChild(c)
    })(a.jqpath)
};
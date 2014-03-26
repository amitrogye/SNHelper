window.bookmarklet = function(opts) {
    fullFunc(opts)
};

// These are the styles, scripts and callbacks we include in our bookmarklet:
window.bookmarklet({

	css: ['https://amitrogye.github.io/SNHelper/css/wheelmenu.css'],
    js: ['https://amitrogye.github.io/SNHelper/js/jquery.wheelmenu.min.js'],
    jqpath: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js',
    ready: function() {


        alert("hello -- " + jQuery.fn.jquery);

    }
})

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
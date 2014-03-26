window.bookmarklet = function(opts) {
    fullFunc(opts)
};

window.bookmarklet({
    css: ['https://gist.github.com/amitrogye/7818568/raw/5a01c375673572fc0a4e704e2a4e35ca753bf6ff/zebra_dialog.css'],
    js: ['https://gist.github.com/amitrogye/7818521/raw/4f27f1b64ece3537ddab27fa3255d87eae353edb/zebra_dialog.js'],
    ready: function() {
        alert('Hello world');
    }
});

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
    a.jqpath = a.jqpath || "jquery-2.0.3.min.js";
    (function(b) {
        e(a.css);
        d(a.js)

    })(a.jqpath)
};
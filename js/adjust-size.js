$(window).setBreakpoints({
// use only largest available vs use all available
    distinct: true,
// array of widths in pixels where breakpoints
// should be triggered
    breakpoints: [
        320,
        480,
        768,
        1024,
        1280
    ]
});

$(window).bind("enterBreakpoint320",function() {
    setup_site_for_320();
});

$(window).bind("enterBreakpoint480",function() {
    setup_site_for_480();
});

$(window).bind("enterBreakpoint768",function() {
    setup_site_for_768();
});

$(window).bind("enterBreakpoint1024",function() {
    setup_site_for_1024();
});

$(window).bind("enterBreakpoint1280",function() {
    setup_site_for_1280();
});


function setup_site_for_320() {
    var settings = {
        "formWrapper": {"left": "3%", "height": "80%", "width": "280px"},
        "postFormWrapper": {"left": "3%", "height": "440px", "width": "280px"},
        "footer": {"left":"3.9%"}
    };

    /*,
     "formLabel": {"left":"", "height":"", "width":""},
     "formItem": {"left":"", "height":"", "width":""},
     "raptor_texas": {"left":"", "height":"", "width":""},
     "raptor_other": {"left":"", "height":"", "width":""},
     "r_o": {"left":"", "height":"", "width":""},
     "r_t": {"left":"", "height":"", "width":""},
     "svgAnchor": {"left":"", "height":"", "width":""},
     "texas": {"left":"", "height":"", "width":""},
     "phrase": {"left":"", "height":"", "width":""}
     };
     */
    render_layout(settings);
}

function setup_site_for_480() {
    var settings = {
        "formWrapper": {"left": "10%", "height": "440px", "width": "860px"},
        "postFormWrapper": {"left":"7%", "height":"560px", "width":"800px"},
        "footer": {"left":"31.9%"}
    };

    /*,
     "formLabel": {"left":"", "height":"", "width":""},
     "formItem": {"left":"", "height":"", "width":""},
     "raptor_texas": {"left":"", "height":"", "width":""},
     "raptor_other": {"left":"", "height":"", "width":""},
     "r_o": {"left":"", "height":"", "width":""},
     "r_t": {"left":"", "height":"", "width":""},
     "svgAnchor": {"left":"", "height":"", "width":""},
     "texas": {"left":"", "height":"", "width":""},
     "phrase": {"left":"", "height":"", "width":""}
     };
     */
    render_layout(settings);
}

function setup_site_for_768() {
    var settings = {
        "formWrapper": {"left": "8%", "height": "440px", "width": "760px"},
        "postFormWrapper": {"left":"5%", "height":"560px", "width":"730px"},
        "footer": {"left":"21.9%"}
    };

    /*,
     "formLabel": {"left":"", "height":"", "width":""},
     "formItem": {"left":"", "height":"", "width":""},
     "raptor_texas": {"left":"", "height":"", "width":""},
     "raptor_other": {"left":"", "height":"", "width":""},
     "r_o": {"left":"", "height":"", "width":""},
     "r_t": {"left":"", "height":"", "width":""},
     "svgAnchor": {"left":"", "height":"", "width":""},
     "texas": {"left":"", "height":"", "width":""},
     "phrase": {"left":"", "height":"", "width":""}
     };
     */
    render_layout(settings);
}

function setup_site_for_1024() {
    var settings = {
        "formWrapper": {"left": "14%", "height": "440px", "width": "960px"},
        "postFormWrapper": {"left":"10%", "height":"560px", "width":"1060px"},
        "footer": {"left":"31.9%"}
    };

    /*,
     "formLabel": {"left":"", "height":"", "width":""},
     "formItem": {"left":"", "height":"", "width":""},
     "raptor_texas": {"left":"", "height":"", "width":""},
     "raptor_other": {"left":"", "height":"", "width":""},
     "r_o": {"left":"", "height":"", "width":""},
     "r_t": {"left":"", "height":"", "width":""},
     "svgAnchor": {"left":"", "height":"", "width":""},
     "texas": {"left":"", "height":"", "width":""},
     "phrase": {"left":"", "height":"", "width":""}
     };
     */
    render_layout(settings);
}

function setup_site_for_1280() {
    var settings = {
        "formWrapper": {"left": "14%", "height": "440px", "width": "960px"},
        "postFormWrapper": {"left":"10%", "height":"560px", "width":"1060px"},
        "footer": {"left":"31.9%"}
    };

/*,
        "formLabel": {"left":"", "height":"", "width":""},
        "formItem": {"left":"", "height":"", "width":""},
        "raptor_texas": {"left":"", "height":"", "width":""},
        "raptor_other": {"left":"", "height":"", "width":""},
        "r_o": {"left":"", "height":"", "width":""},
        "r_t": {"left":"", "height":"", "width":""},
        "svgAnchor": {"left":"", "height":"", "width":""},
        "texas": {"left":"", "height":"", "width":""},
        "phrase": {"left":"", "height":"", "width":""}
    };
*/
    render_layout(settings);
}

function render_layout(settings) {
    var id, element, pointer;
    for (var key in settings) {
        id = "#" + key;
        console.log(id);
        element = $(id)[0];
        console.log(element);
        if (typeof element == 'undefined') {
            continue;
        }
        pointer = settings[key];
        for (var styleKey in pointer) {
            switch(styleKey) {
                case 'height':  element.style.height = pointer[styleKey];
                                break;
                case 'width' :  element.style.width = pointer[styleKey];
                                break;
                case 'left'  : element.style.left = pointer[styleKey];
                                break;
                default:
                                break;
            }
        }
    }
}
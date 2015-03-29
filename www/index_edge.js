/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'page_2th',
                display: 'none',
                type: 'rect',
                rect: ['23', '11','auto','auto','auto', 'auto']
            },
            {
                id: 'page_1th',
                display: 'block',
                type: 'rect',
                rect: ['7', '-1','auto','auto','auto', 'auto']
            },
            {
                id: 'help',
                display: 'block',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"help.png",'0px','0px']
            },
            {
                id: 'action',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'page_1th',
                symbolName: 'main',
                autoPlay: {

                }
            },
            {
                id: 'page_2th',
                symbolName: 'page_2th_symbol',
                autoPlay: {

                }
            },
            {
                id: 'action',
                symbolName: 'action'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '640px'],
                ["style", "width", '480px']
            ],
            "${_help}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_page_2th}": [
                ["style", "top", '11px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "height", '617px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.5'],
                ["style", "left", '480px'],
                ["style", "width", '433px']
            ],
            "${_page_1th}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.98798'],
                ["transform", "scaleX", '0.98798'],
                ["style", "opacity", '0.7'],
                ["style", "left", '-462px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 19566,
            autoPlay: false,
            timeline: [
                { id: "eid150", tween: [ "style", "${_page_1th}", "left", '2px', { fromValue: '-462px'}], position: 0, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid42", tween: [ "style", "${_page_1th}", "left", '-260px', { fromValue: '2px'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid64", tween: [ "style", "${_page_1th}", "left", '224px', { fromValue: '-260px'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid74", tween: [ "style", "${_page_1th}", "left", '8px', { fromValue: '224px'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid89", tween: [ "style", "${_page_1th}", "left", '2px', { fromValue: '8px'}], position: 7500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid142", tween: [ "style", "${_page_1th}", "left", '-463px', { fromValue: '2px'}], position: 9000, duration: 1500 },
                { id: "eid130", tween: [ "style", "${_page_2th}", "left", '23px', { fromValue: '480px'}], position: 9000, duration: 1500 },
                { id: "eid171", tween: [ "style", "${_page_2th}", "left", '24px', { fromValue: '23px'}], position: 10500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid179", tween: [ "style", "${_page_2th}", "left", '-135px', { fromValue: '24px'}], position: 12000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid185", tween: [ "style", "${_page_2th}", "left", '382px', { fromValue: '-135px'}], position: 13500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid195", tween: [ "style", "${_page_2th}", "left", '24px', { fromValue: '382px'}], position: 15000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid208", tween: [ "style", "${_page_2th}", "left", '23px', { fromValue: '24px'}], position: 18000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid57", tween: [ "style", "${_help}", "left", '480px', { fromValue: '0px'}], position: 0, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid144", tween: [ "style", "${_page_1th}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid43", tween: [ "style", "${_page_1th}", "top", '375px', { fromValue: '0px'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid67", tween: [ "style", "${_page_1th}", "top", '309px', { fromValue: '375px'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid75", tween: [ "style", "${_page_1th}", "top", '-91px', { fromValue: '309px'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid81", tween: [ "style", "${_page_1th}", "top", '-299px', { fromValue: '-91px'}], position: 6000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid90", tween: [ "style", "${_page_1th}", "top", '0px', { fromValue: '-299px'}], position: 7500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid137", tween: [ "style", "${_page_1th}", "top", '0px', { fromValue: '0px'}], position: 10500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid146", tween: [ "transform", "${_page_1th}", "scaleY", '0.98798', { fromValue: '0.98798'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid41", tween: [ "transform", "${_page_1th}", "scaleY", '2.1712', { fromValue: '0.98798'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid66", tween: [ "transform", "${_page_1th}", "scaleY", '1.96237', { fromValue: '2.1712'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid73", tween: [ "transform", "${_page_1th}", "scaleY", '1.03226', { fromValue: '1.96237'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid92", tween: [ "transform", "${_page_1th}", "scaleY", '0.99', { fromValue: '1.03226'}], position: 7500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid135", tween: [ "transform", "${_page_1th}", "scaleY", '0.99', { fromValue: '0.99'}], position: 10500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid165", tween: [ "transform", "${_page_2th}", "scaleY", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid170", tween: [ "transform", "${_page_2th}", "scaleY", '1.46189', { fromValue: '1'}], position: 10500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid178", tween: [ "transform", "${_page_2th}", "scaleY", '1.84194', { fromValue: '1.46189'}], position: 12000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid187", tween: [ "transform", "${_page_2th}", "scaleY", '2.76573', { fromValue: '1.84194'}], position: 13500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid194", tween: [ "transform", "${_page_2th}", "scaleY", '1.43211', { fromValue: '2.76573'}], position: 15000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid207", tween: [ "transform", "${_page_2th}", "scaleY", '1', { fromValue: '1.43211'}], position: 18000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid166", tween: [ "transform", "${_page_2th}", "scaleX", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid169", tween: [ "transform", "${_page_2th}", "scaleX", '1.46189', { fromValue: '1'}], position: 10500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid177", tween: [ "transform", "${_page_2th}", "scaleX", '1.84194', { fromValue: '1.46189'}], position: 12000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid186", tween: [ "transform", "${_page_2th}", "scaleX", '2.76573', { fromValue: '1.84194'}], position: 13500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid193", tween: [ "transform", "${_page_2th}", "scaleX", '1.43211', { fromValue: '2.76573'}], position: 15000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid206", tween: [ "transform", "${_page_2th}", "scaleX", '1', { fromValue: '1.43211'}], position: 18000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid134", tween: [ "style", "${_page_2th}", "opacity", '1', { fromValue: '0.5'}], position: 9000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid123", tween: [ "style", "${_page_2th}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid122", tween: [ "style", "${_page_2th}", "display", 'none', { fromValue: 'none'}], position: 8900, duration: 0, easing: "easeInOutQuart" },
                { id: "eid117", tween: [ "style", "${_page_2th}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid116", tween: [ "style", "${_page_1th}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid105", tween: [ "style", "${_page_1th}", "display", 'block', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid115", tween: [ "style", "${_page_1th}", "display", 'none', { fromValue: 'block'}], position: 10643, duration: 0, easing: "easeInOutQuart" },
                { id: "eid145", tween: [ "transform", "${_page_1th}", "scaleX", '0.98798', { fromValue: '0.98798'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid40", tween: [ "transform", "${_page_1th}", "scaleX", '2.1712', { fromValue: '0.98798'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid65", tween: [ "transform", "${_page_1th}", "scaleX", '1.96237', { fromValue: '2.1712'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid72", tween: [ "transform", "${_page_1th}", "scaleX", '1.03226', { fromValue: '1.96237'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid91", tween: [ "transform", "${_page_1th}", "scaleX", '0.99', { fromValue: '1.03226'}], position: 7500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid136", tween: [ "transform", "${_page_1th}", "scaleX", '0.99', { fromValue: '0.99'}], position: 10500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid56", tween: [ "style", "${_help}", "opacity", '0.7', { fromValue: '1'}], position: 0, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid112", tween: [ "style", "${_help}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid113", tween: [ "style", "${_help}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid114", tween: [ "style", "${_help}", "display", 'none', { fromValue: 'block'}], position: 1572, duration: 0, easing: "easeInOutQuart" },
                { id: "eid149", tween: [ "style", "${_page_1th}", "opacity", '1', { fromValue: '0.7'}], position: 0, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid141", tween: [ "style", "${_page_1th}", "opacity", '0.5', { fromValue: '1'}], position: 9000, duration: 1500 },
                { id: "eid119", tween: [ "style", "${_page_2th}", "top", '11px', { fromValue: '11px'}], position: 9000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid172", tween: [ "style", "${_page_2th}", "top", '194px', { fromValue: '11px'}], position: 10500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid180", tween: [ "style", "${_page_2th}", "top", '193px', { fromValue: '194px'}], position: 12000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid188", tween: [ "style", "${_page_2th}", "top", '291px', { fromValue: '193px'}], position: 13500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid196", tween: [ "style", "${_page_2th}", "top", '-43px', { fromValue: '291px'}], position: 15000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid201", tween: [ "style", "${_page_2th}", "top", '-306px', { fromValue: '-43px'}], position: 16500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid209", tween: [ "style", "${_page_2th}", "top", '11px', { fromValue: '-306px'}], position: 18000, duration: 1500, easing: "easeInOutQuart" }            ]
        }
    }
},
"main": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'start',
                    type: 'image',
                    rect: ['0px', '0px', '465px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/start.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '465px']
            ],
            "${_start}": [
                ["style", "top", '0px'],
                ["style", "height", '640px'],
                ["style", "left", '0px'],
                ["style", "width", '465px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"action": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'action',
                    type: 'image',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blank.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_action}": [
                ["style", "height", '100%'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '100.01%']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '480px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"page_2th": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'action',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'action',
                symbolName: 'action'
            }            ]
        },
    states: {
        "Base State": {
            "${_action}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '480px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"page_2th_symbol": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'page_2th',
                    type: 'image',
                    rect: ['0px', '0px', '433px', '617px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/page_2th.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_page_2th}": [
                ["style", "top", '0px'],
                ["style", "height", '617px'],
                ["style", "left", '0px'],
                ["style", "width", '433px']
            ],
            "${symbolSelector}": [
                ["style", "height", '617px'],
                ["style", "width", '433px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "smgroup-786");

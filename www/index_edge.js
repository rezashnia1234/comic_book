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
    scaleToFit: "height",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'main',
                type: 'rect',
                rect: ['7', '-1','auto','auto','auto', 'auto']
            },
            {
                id: 'help',
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
                id: 'main',
                symbolName: 'main'
            },
            {
                id: 'action',
                symbolName: 'action'
            }
            ]
        },
    states: {
        "Base State": {
            "${_main}": [
                ["transform", "scaleX", '0.98798'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.98798'],
                ["style", "left", '2px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '480px'],
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden']
            ],
            "${_help}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7500,
            autoPlay: false,
            timeline: [
                { id: "eid41", tween: [ "transform", "${_main}", "scaleY", '2.1712', { fromValue: '0.98798'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid66", tween: [ "transform", "${_main}", "scaleY", '1.96237', { fromValue: '2.1712'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid73", tween: [ "transform", "${_main}", "scaleY", '1.03226', { fromValue: '1.96237'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid78", tween: [ "transform", "${_main}", "scaleY", '1.03226', { fromValue: '1.03226'}], position: 7500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid57", tween: [ "style", "${_help}", "left", '501px', { fromValue: '0px'}], position: 0, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid42", tween: [ "style", "${_main}", "left", '-260px', { fromValue: '2px'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid64", tween: [ "style", "${_main}", "left", '224px', { fromValue: '-260px'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid74", tween: [ "style", "${_main}", "left", '8px', { fromValue: '224px'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid82", tween: [ "style", "${_main}", "left", '8px', { fromValue: '8px'}], position: 7500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid43", tween: [ "style", "${_main}", "top", '375px', { fromValue: '0px'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid67", tween: [ "style", "${_main}", "top", '309px', { fromValue: '375px'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid75", tween: [ "style", "${_main}", "top", '-91px', { fromValue: '309px'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid81", tween: [ "style", "${_main}", "top", '-299px', { fromValue: '-91px'}], position: 6000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid40", tween: [ "transform", "${_main}", "scaleX", '2.1712', { fromValue: '0.98798'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid65", tween: [ "transform", "${_main}", "scaleX", '1.96237', { fromValue: '2.1712'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid72", tween: [ "transform", "${_main}", "scaleX", '1.03226', { fromValue: '1.96237'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid79", tween: [ "transform", "${_main}", "scaleX", '1.03226', { fromValue: '1.03226'}], position: 7500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid56", tween: [ "style", "${_help}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 1500, easing: "easeInOutQuart" }            ]
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
            "${_start}": [
                ["style", "height", '640px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '465px']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
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
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '480px']
            ],
            "${_action}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["style", "left", '0px'],
                ["style", "width", '100.01%']
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

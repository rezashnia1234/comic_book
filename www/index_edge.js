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
            },
            {
                id: 'blank--0',
                type: 'image',
                rect: ['0px', '0px','39px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blank--0.png",'0px','0px']
            },
            {
                id: 'blank--0Copy',
                type: 'image',
                rect: ['441px', '0px','39px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blank--0.png",'0px','0px']
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
                symbolName: 'action',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_blank--0Copy}": [
                ["style", "height", '42px'],
                ["style", "top", '0px'],
                ["style", "left", '441px'],
                ["style", "width", '39px']
            ],
            "${_page_1th}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.98798'],
                ["transform", "scaleX", '0.98798'],
                ["style", "opacity", '0.7'],
                ["style", "left", '-462px'],
                ["style", "display", 'block']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '480px'],
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden']
            ],
            "${_blank--0}": [
                ["style", "top", '0px'],
                ["style", "height", '42px'],
                ["style", "left", '0px'],
                ["style", "width", '39px']
            ],
            "${_page_2th}": [
                ["style", "top", '12px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "height", '617px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '-433px'],
                ["style", "width", '433px']
            ],
            "${_help}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
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
            duration: 19566,
            autoPlay: false,
            timeline: [
                { id: "eid216", tween: [ "style", "${_page_2th}", "top", '11px', { fromValue: '12px'}], position: 9000, duration: 1500 },
                { id: "eid172", tween: [ "style", "${_page_2th}", "top", '194px', { fromValue: '11px'}], position: 10500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid180", tween: [ "style", "${_page_2th}", "top", '193px', { fromValue: '194px'}], position: 12000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid188", tween: [ "style", "${_page_2th}", "top", '291px', { fromValue: '193px'}], position: 13500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid196", tween: [ "style", "${_page_2th}", "top", '-43px', { fromValue: '291px'}], position: 15000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid201", tween: [ "style", "${_page_2th}", "top", '-306px', { fromValue: '-43px'}], position: 16500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid209", tween: [ "style", "${_page_2th}", "top", '11px', { fromValue: '-306px'}], position: 18000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid150", tween: [ "style", "${_page_1th}", "left", '2px', { fromValue: '-462px'}], position: 0, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid42", tween: [ "style", "${_page_1th}", "left", '-263px', { fromValue: '2px'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid64", tween: [ "style", "${_page_1th}", "left", '224px', { fromValue: '-263px'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid74", tween: [ "style", "${_page_1th}", "left", '8px', { fromValue: '224px'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid89", tween: [ "style", "${_page_1th}", "left", '2px', { fromValue: '8px'}], position: 7500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid142", tween: [ "style", "${_page_1th}", "left", '478px', { fromValue: '2px'}], position: 9000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid215", tween: [ "style", "${_page_2th}", "opacity", '1', { fromValue: '0.7'}], position: 9000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid149", tween: [ "style", "${_page_1th}", "opacity", '1', { fromValue: '0.7'}], position: 0, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid368", tween: [ "style", "${_page_1th}", "opacity", '0.82', { fromValue: '1'}], position: 1500, duration: 6000, easing: "easeInOutQuart" },
                { id: "eid369", tween: [ "style", "${_page_1th}", "opacity", '1', { fromValue: '0.82'}], position: 7500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid214", tween: [ "style", "${_page_1th}", "opacity", '0.7', { fromValue: '1'}], position: 9000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid123", tween: [ "style", "${_page_2th}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid122", tween: [ "style", "${_page_2th}", "display", 'none', { fromValue: 'none'}], position: 8900, duration: 0, easing: "easeInOutQuart" },
                { id: "eid117", tween: [ "style", "${_page_2th}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid57", tween: [ "style", "${_help}", "left", '480px', { fromValue: '0px'}], position: 0, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid144", tween: [ "style", "${_page_1th}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid43", tween: [ "style", "${_page_1th}", "top", '375px', { fromValue: '0px'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid67", tween: [ "style", "${_page_1th}", "top", '309px', { fromValue: '375px'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid75", tween: [ "style", "${_page_1th}", "top", '-91px', { fromValue: '309px'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid81", tween: [ "style", "${_page_1th}", "top", '-299px', { fromValue: '-91px'}], position: 6000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid90", tween: [ "style", "${_page_1th}", "top", '0px', { fromValue: '-299px'}], position: 7500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid137", tween: [ "style", "${_page_1th}", "top", '0px', { fromValue: '0px'}], position: 10500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid116", tween: [ "style", "${_page_1th}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid105", tween: [ "style", "${_page_1th}", "display", 'block', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid115", tween: [ "style", "${_page_1th}", "display", 'none', { fromValue: 'block'}], position: 10643, duration: 0, easing: "easeInOutQuart" },
                { id: "eid145", tween: [ "transform", "${_page_1th}", "scaleX", '0.98798', { fromValue: '0.98798'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid40", tween: [ "transform", "${_page_1th}", "scaleX", '2.1712', { fromValue: '0.98798'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid65", tween: [ "transform", "${_page_1th}", "scaleX", '1.96237', { fromValue: '2.1712'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid72", tween: [ "transform", "${_page_1th}", "scaleX", '1.03226', { fromValue: '1.96237'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid91", tween: [ "transform", "${_page_1th}", "scaleX", '0.99', { fromValue: '1.03226'}], position: 7500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid136", tween: [ "transform", "${_page_1th}", "scaleX", '0.99', { fromValue: '0.99'}], position: 10500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid112", tween: [ "style", "${_help}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid113", tween: [ "style", "${_help}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid114", tween: [ "style", "${_help}", "display", 'none', { fromValue: 'block'}], position: 1572, duration: 0, easing: "easeInOutQuart" },
                { id: "eid146", tween: [ "transform", "${_page_1th}", "scaleY", '0.98798', { fromValue: '0.98798'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid41", tween: [ "transform", "${_page_1th}", "scaleY", '2.1712', { fromValue: '0.98798'}], position: 1500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid66", tween: [ "transform", "${_page_1th}", "scaleY", '1.96237', { fromValue: '2.1712'}], position: 3000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid73", tween: [ "transform", "${_page_1th}", "scaleY", '1.03226', { fromValue: '1.96237'}], position: 4500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid92", tween: [ "transform", "${_page_1th}", "scaleY", '0.99', { fromValue: '1.03226'}], position: 7500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid135", tween: [ "transform", "${_page_1th}", "scaleY", '0.99', { fromValue: '0.99'}], position: 10500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid56", tween: [ "style", "${_help}", "opacity", '0.7', { fromValue: '1'}], position: 0, duration: 1500, easing: "easeInOutQuart" },
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
                { id: "eid130", tween: [ "style", "${_page_2th}", "left", '23px', { fromValue: '-433px'}], position: 9000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid171", tween: [ "style", "${_page_2th}", "left", '24px', { fromValue: '23px'}], position: 10500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid179", tween: [ "style", "${_page_2th}", "left", '-135px', { fromValue: '24px'}], position: 12000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid185", tween: [ "style", "${_page_2th}", "left", '382px', { fromValue: '-135px'}], position: 13500, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid195", tween: [ "style", "${_page_2th}", "left", '24px', { fromValue: '382px'}], position: 15000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid208", tween: [ "style", "${_page_2th}", "left", '23px', { fromValue: '24px'}], position: 18000, duration: 1500, easing: "easeInOutQuart" }            ]
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
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['247', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'F01'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['8', '434', 'auto', 'auto', 'auto', 'auto'],
                    id: 'F06_mother3'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'P01F03'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['0', '213', 'auto', 'auto', 'auto', 'auto'],
                    id: 'P01F05'
                }
            ],
            symbolInstances: [
            {
                id: 'P01F03',
                symbolName: 'P01F03',
                autoPlay: {

               }
            },
            {
                id: 'F01',
                symbolName: 'F01',
                autoPlay: {

               }
            },
            {
                id: 'F06_mother3',
                symbolName: 'F06_mother',
                autoPlay: {

               }
            },
            {
                id: 'P01F05',
                symbolName: 'P01F05',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_F06_mother3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_F01}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '465px']
            ],
            "${_P01F05}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_start}": [
                ["style", "height", '640px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '465px']
            ],
            "${_P01F03}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10577,
            autoPlay: false,
            labels: {
                "frame_1": 1000,
                "frame_6": 4000,
                "frame_3": 7000,
                "frame_5": 9000
            },
            timeline: [
                { id: "eid315", tween: [ "style", "${_F06_mother3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid314", tween: [ "style", "${_F06_mother3}", "display", 'none', { fromValue: 'none'}], position: 3918, duration: 0, easing: "easeInOutQuart" },
                { id: "eid313", tween: [ "style", "${_F06_mother3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid318", tween: [ "style", "${_F06_mother3}", "display", 'block', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid320", tween: [ "style", "${_F06_mother3}", "display", 'none', { fromValue: 'block'}], position: 5577, duration: 0, easing: "easeInOutQuart" },
                { id: "eid502", tween: [ "style", "${_P01F05}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 1500 },
                { id: "eid319", tween: [ "style", "${_F06_mother3}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 1500, easing: "easeInOutQuart" },
                { id: "eid261", tween: [ "style", "${_F01}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid262", tween: [ "style", "${_F01}", "display", 'block', { fromValue: 'none'}], position: 1058, duration: 0 },
                { id: "eid549", tween: [ "style", "${_P01F03}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 1500 },
                { id: "eid503", tween: [ "style", "${_P01F05}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid499", tween: [ "style", "${_P01F05}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid500", tween: [ "style", "${_P01F05}", "display", 'block', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid504", tween: [ "style", "${_P01F05}", "display", 'none', { fromValue: 'block'}], position: 10577, duration: 0 },
                { id: "eid384", tween: [ "style", "${_P01F03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid382", tween: [ "style", "${_P01F03}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid385", tween: [ "style", "${_P01F03}", "display", 'block', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid387", tween: [ "style", "${_P01F03}", "display", 'none', { fromValue: 'block'}], position: 8619, duration: 0 },
                { id: "eid264", tween: [ "style", "${_F01}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 58 },
                { id: "eid266", tween: [ "style", "${_F01}", "opacity", '1', { fromValue: '0'}], position: 1058, duration: 942 }            ]
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
            "${symbolSelector}": [
                ["style", "height", '640px'],
                ["style", "width", '480px']
            ],
            "${_action}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                ["style", "height", '617px'],
                ["style", "top", '0px'],
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
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"snow": {
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
                    display: 'none',
                    type: 'rect',
                    rect: ['-170', '-457', 'auto', 'auto', 'auto', 'auto'],
                    id: 'snow_2'
                }
            ],
            symbolInstances: [
            {
                id: 'snow_2',
                symbolName: 'snow_2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_snow_2}": [
                ["style", "top", '0px'],
                ["style", "left", '-170px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '240px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid232", tween: [ "style", "${_snow_2}", "left", '-170px', { fromValue: '-170px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid236", tween: [ "style", "${_snow_2}", "left", '-170px', { fromValue: '-170px'}], position: 66, duration: 0, easing: "easeInOutQuart" },
                { id: "eid229", tween: [ "style", "${_snow_2}", "left", '-170px', { fromValue: '-170px'}], position: 6000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid233", tween: [ "style", "${_snow_2}", "top", '-454px', { fromValue: '0px'}], position: 0, duration: 66, easing: "easeInQuart" },
                { id: "eid235", tween: [ "style", "${_snow_2}", "top", '-8px', { fromValue: '-454px'}], position: 66, duration: 5934 },
                { id: "eid234", tween: [ "style", "${_snow_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid237", tween: [ "style", "${_snow_2}", "display", 'block', { fromValue: 'none'}], position: 66, duration: 0, easing: "easeInOutQuart" }            ]
        }
    }
},
"snow_2": {
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
                    id: 'snow',
                    type: 'image',
                    rect: ['170px', '457px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy',
                    type: 'image',
                    rect: ['170px', '221px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy2',
                    type: 'image',
                    rect: ['170px', '12px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy5',
                    type: 'image',
                    rect: ['80px', '557px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy4',
                    type: 'image',
                    rect: ['80px', '321px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy3',
                    type: 'image',
                    rect: ['80px', '112px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy9',
                    type: 'image',
                    rect: ['80px', '0px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy8',
                    type: 'image',
                    rect: ['0px', '457px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy7',
                    type: 'image',
                    rect: ['0px', '221px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy6',
                    type: 'image',
                    rect: ['0px', '22px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy12',
                    type: 'image',
                    rect: ['170px', '-210px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy11',
                    type: 'image',
                    rect: ['80px', '-222px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy10',
                    type: 'image',
                    rect: ['0px', '-200px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy18',
                    type: 'image',
                    rect: ['170px', '-435px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy17',
                    type: 'image',
                    rect: ['80px', '-447px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy16',
                    type: 'image',
                    rect: ['0px', '-425px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy15',
                    type: 'image',
                    rect: ['170px', '-657px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy14',
                    type: 'image',
                    rect: ['80px', '-669px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy13',
                    type: 'image',
                    rect: ['0px', '-647px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy30',
                    type: 'image',
                    rect: ['170px', '-816px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy29',
                    type: 'image',
                    rect: ['80px', '-828px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy28',
                    type: 'image',
                    rect: ['0px', '-806px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy27',
                    type: 'image',
                    rect: ['170px', '-1038px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy26',
                    type: 'image',
                    rect: ['80px', '-1050px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy25',
                    type: 'image',
                    rect: ['0px', '-1028px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy24',
                    type: 'image',
                    rect: ['170px', '-1263px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy23',
                    type: 'image',
                    rect: ['80px', '-1275px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy22',
                    type: 'image',
                    rect: ['0px', '-1253px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy21',
                    type: 'image',
                    rect: ['170px', '-1485px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy20',
                    type: 'image',
                    rect: ['80px', '-1497px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                },
                {
                    id: 'snowCopy19',
                    type: 'image',
                    rect: ['0px', '-1475px', '100px', '240px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fx/snow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_snowCopy22}": [
                ["style", "top", '-1253px'],
                ["style", "height", '240px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy20}": [
                ["style", "height", '240px'],
                ["style", "top", '-1497px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy13}": [
                ["style", "top", '-647px'],
                ["style", "height", '240px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy4}": [
                ["style", "top", '321px'],
                ["style", "height", '240px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy5}": [
                ["style", "height", '240px'],
                ["style", "top", '557px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy}": [
                ["style", "height", '240px'],
                ["style", "top", '221px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy25}": [
                ["style", "top", '-1028px'],
                ["style", "height", '240px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy23}": [
                ["style", "top", '-1275px'],
                ["style", "height", '240px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snow}": [
                ["style", "top", '457px'],
                ["style", "height", '240px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy11}": [
                ["style", "height", '240px'],
                ["style", "top", '-222px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy30}": [
                ["style", "height", '240px'],
                ["style", "top", '-816px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '797px'],
                ["style", "width", '270px']
            ],
            "${_snowCopy18}": [
                ["style", "height", '240px'],
                ["style", "top", '-435px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy29}": [
                ["style", "height", '240px'],
                ["style", "top", '-828px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy10}": [
                ["style", "height", '240px'],
                ["style", "top", '-200px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy16}": [
                ["style", "height", '240px'],
                ["style", "top", '-425px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy12}": [
                ["style", "height", '240px'],
                ["style", "top", '-210px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy19}": [
                ["style", "height", '240px'],
                ["style", "top", '-1475px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy28}": [
                ["style", "height", '240px'],
                ["style", "top", '-806px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy17}": [
                ["style", "height", '240px'],
                ["style", "top", '-447px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy8}": [
                ["style", "top", '457px'],
                ["style", "height", '240px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy14}": [
                ["style", "top", '-669px'],
                ["style", "height", '240px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy2}": [
                ["style", "top", '12px'],
                ["style", "height", '240px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy27}": [
                ["style", "top", '-1038px'],
                ["style", "height", '240px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy15}": [
                ["style", "top", '-657px'],
                ["style", "height", '240px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy6}": [
                ["style", "top", '22px'],
                ["style", "height", '240px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy26}": [
                ["style", "top", '-1050px'],
                ["style", "height", '240px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy21}": [
                ["style", "height", '240px'],
                ["style", "top", '-1485px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy24}": [
                ["style", "top", '-1263px'],
                ["style", "height", '240px'],
                ["style", "left", '170px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy3}": [
                ["style", "height", '240px'],
                ["style", "top", '112px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy9}": [
                ["style", "top", '0px'],
                ["style", "height", '240px'],
                ["style", "left", '80px'],
                ["style", "width", '100px']
            ],
            "${_snowCopy7}": [
                ["style", "height", '240px'],
                ["style", "top", '221px'],
                ["style", "left", '0px'],
                ["style", "width", '100px']
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
"F01": {
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
                    id: 'F013',
                    type: 'image',
                    rect: ['0px', '0px', '100%', '99.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/frame/F01.jpg', '0px', '0px']
                },
                {
                    display: 'block',
                    type: 'rect',
                    rect: ['-47', '-496', 'auto', 'auto', 'auto', 'auto'],
                    id: 'snow_motion'
                },
                {
                    id: 'snow_motionCopy',
                    type: 'rect',
                    rect: ['-47', '-496', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'snow_motionCopy2',
                    type: 'rect',
                    rect: ['-47', '-496', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'F01-mask',
                    type: 'image',
                    rect: ['0px', '0px', '100%', '99.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/frame/F01-mask.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'snow_motionCopy2',
                symbolName: 'snow_motion',
                autoPlay: {

               }
            },
            {
                id: 'snow_motionCopy',
                symbolName: 'snow_motion',
                autoPlay: {

               }
            },
            {
                id: 'snow_motion',
                symbolName: 'snow_motion',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_snow_motionCopy}": [
                ["style", "top", '-427px'],
                ["style", "opacity", '1'],
                ["style", "left", '-278px'],
                ["transform", "rotateZ", '-60deg']
            ],
            "${_F013}": [
                ["style", "top", '0px'],
                ["style", "height", '99.92%'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '213px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '215px']
            ],
            "${_snow_motion}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0.20000000298023224']
            ],
            "${_F01-mask}": [
                ["style", "top", '0px'],
                ["style", "height", '99.92%'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_snow_motionCopy2}": [
                ["style", "top", '-414px'],
                ["style", "opacity", '1'],
                ["style", "left", '208px'],
                ["transform", "rotateZ", '60deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 60000,
            autoPlay: false,
            timeline: [
                { id: "eid303", tween: [ "style", "${_snow_motionCopy}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid289", tween: [ "transform", "${_snow_motionCopy2}", "rotateZ", '60deg', { fromValue: '60deg'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid292", tween: [ "style", "${_snow_motionCopy2}", "top", '-414px', { fromValue: '-414px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid300", tween: [ "style", "${_snow_motion}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid304", tween: [ "style", "${_snow_motionCopy2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid296", tween: [ "style", "${_snow_motionCopy}", "top", '-427px', { fromValue: '-427px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid290", tween: [ "transform", "${_snow_motionCopy}", "rotateZ", '-60deg', { fromValue: '-60deg'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid291", tween: [ "style", "${_snow_motionCopy2}", "left", '208px', { fromValue: '208px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid294", tween: [ "style", "${_snow_motionCopy}", "left", '-278px', { fromValue: '-278px'}], position: 0, duration: 0, easing: "easeInOutQuart" }            ]
        }
    }
},
"snow_motion": {
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
                    id: 'snow_23',
                    type: 'rect',
                    rect: ['154px', '602px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'snow_23',
                symbolName: 'snow_2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_snow_23}": [
                ["style", "left", '0px'],
                ["style", "top", '1812px']
            ],
            "${symbolSelector}": [
                ["style", "height", '797px'],
                ["style", "width", '270px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 60000,
            autoPlay: true,
            timeline: [
                { id: "eid277", tween: [ "style", "${_snow_23}", "top", '471px', { fromValue: '1812px'}], position: 0, duration: 60000 }            ]
        }
    }
},
"delete_it": {
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
                    rect: ['0px', '0px', '465px', '213px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'F06',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_F06}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '213px'],
                ["style", "width", '465px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5577,
            autoPlay: true,
            timeline: [
                { id: "eid307", tween: [ "style", "${_F06}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid306", tween: [ "style", "${_F06}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid308", tween: [ "style", "${_F06}", "display", 'block', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid309", tween: [ "style", "${_F06}", "display", 'none', { fromValue: 'block'}], position: 5577, duration: 0, easing: "easeInOutQuart" }            ]
        }
    }
},
"F06_mother": {
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
                    id: 'po1f06door',
                    type: 'rect',
                    rect: ['143', '-5', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'p01f06backofsarbaz',
                    type: 'rect',
                    rect: ['318', '-2', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'P01F06-sarbaz',
                    type: 'rect',
                    rect: ['348', '32', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'p01f06-navab',
                    type: 'rect',
                    rect: ['23', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'P01F06-sarbaz',
                symbolName: 'P01F06-sarbaz',
                autoPlay: {

               }
            },
            {
                id: 'p01f06backofsarbaz',
                symbolName: 'p01f06backofsarbaz',
                autoPlay: {

               }
            },
            {
                id: 'po1f06door',
                symbolName: 'po1f06door',
                autoPlay: {

               }
            },
            {
                id: 'p01f06-navab',
                symbolName: 'p01f06-navab',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_P01F06-sarbaz}": [
                ["transform", "scaleX", '0.99253'],
                ["style", "left", '347px'],
                ["transform", "scaleY", '0.99253'],
                ["style", "top", '34px']
            ],
            "${_p01f06backofsarbaz}": [
                ["style", "top", '-5px'],
                ["transform", "scaleY", '0.94931'],
                ["transform", "scaleX", '0.94931'],
                ["style", "opacity", '1'],
                ["style", "left", '321px']
            ],
            "${_p01f06-navab}": [
                ["transform", "scaleX", '1.01235'],
                ["style", "left", '24px'],
                ["transform", "scaleY", '1.01235'],
                ["style", "top", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '206px'],
                ["style", "width", '465px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid497", tween: [ "style", "${_P01F06-sarbaz}", "left", '347px', { fromValue: '347px'}], position: 0, duration: 0 },
                { id: "eid416", tween: [ "style", "${_p01f06-navab}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid483", tween: [ "transform", "${_p01f06backofsarbaz}", "scaleX", '0.94931', { fromValue: '0.94931'}], position: 0, duration: 0 },
                { id: "eid411", tween: [ "transform", "${_p01f06-navab}", "scaleX", '1.01235', { fromValue: '1.01235'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid412", tween: [ "transform", "${_p01f06-navab}", "scaleY", '1.01235', { fromValue: '1.01235'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid490", tween: [ "transform", "${_P01F06-sarbaz}", "scaleX", '0.99253', { fromValue: '0.99253'}], position: 0, duration: 0 },
                { id: "eid418", tween: [ "style", "${_p01f06-navab}", "left", '24px', { fromValue: '24px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid489", tween: [ "style", "${_p01f06backofsarbaz}", "left", '321px', { fromValue: '321px'}], position: 0, duration: 0 },
                { id: "eid495", tween: [ "style", "${_P01F06-sarbaz}", "top", '34px', { fromValue: '34px'}], position: 0, duration: 0 },
                { id: "eid491", tween: [ "transform", "${_P01F06-sarbaz}", "scaleY", '0.99253', { fromValue: '0.99253'}], position: 0, duration: 0 },
                { id: "eid484", tween: [ "transform", "${_p01f06backofsarbaz}", "scaleY", '0.94931', { fromValue: '0.94931'}], position: 0, duration: 0 },
                { id: "eid488", tween: [ "style", "${_p01f06backofsarbaz}", "top", '-5px', { fromValue: '-5px'}], position: 0, duration: 0 },
                { id: "eid596", tween: [ "style", "${_p01f06backofsarbaz}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutQuart" }            ]
        }
    }
},
"P01F06-sarbaz": {
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
                    id: 'sarbaz',
                    type: 'image',
                    rect: ['0px', '0px', '81px', '174px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F06/sarbaz.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sarbaz}": [
                ["style", "height", '174px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '81px']
            ],
            "${symbolSelector}": [
                ["style", "height", '174px'],
                ["style", "width", '81px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid328", tween: [ "style", "${_sarbaz}", "left", '1px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutQuart" },
                { id: "eid329", tween: [ "style", "${_sarbaz}", "left", '0px', { fromValue: '1px'}], position: 500, duration: 500, easing: "easeInOutQuart" }            ]
        }
    }
},
"po1f06-navab": {
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
                    id: 'navab',
                    type: 'image',
                    rect: ['-90px', '-85px', '174px', '210px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F06/navab.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_navab}": [
                ["style", "top", '153px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '210px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '121px'],
                ["style", "width", '174px']
            ],
            "${symbolSelector}": [
                ["style", "height", '560px'],
                ["style", "width", '454px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: true,
            timeline: [
                { id: "eid359", tween: [ "style", "${_navab}", "top", '153px', { fromValue: '153px'}], position: 5500, duration: 0 },
                { id: "eid350", tween: [ "transform", "${_navab}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 1500 },
                { id: "eid348", tween: [ "transform", "${_navab}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 1500 },
                { id: "eid349", tween: [ "transform", "${_navab}", "scaleX", '1.2', { fromValue: '1.2'}], position: 1500, duration: 0 },
                { id: "eid358", tween: [ "style", "${_navab}", "left", '121px', { fromValue: '121px'}], position: 5500, duration: 0 }            ]
        }
    }
},
"p01f06-navab": {
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
                    id: 'navab2',
                    type: 'image',
                    rect: ['0px', '0px', '167px', '206px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F06/navab.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_navab2}": [
                ["style", "top", '-2px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '206px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-4px'],
                ["style", "width", '167px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '162px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2705,
            autoPlay: false,
            timeline: [
                { id: "eid378", tween: [ "transform", "${_navab2}", "scaleY", '1.1', { fromValue: '1'}], position: 225, duration: 2480, easing: "easeInOutQuart" },
                { id: "eid376", tween: [ "transform", "${_navab2}", "scaleX", '1.1', { fromValue: '1'}], position: 225, duration: 2480, easing: "easeInOutQuart" }            ]
        }
    }
},
"P01F03": {
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
                    type: 'image',
                    display: 'block',
                    rect: ['1px', '3px', '245px', '102px', 'auto', 'auto'],
                    id: 'P01F03S1',
                    fill: ['rgba(0,0,0,0)', 'images/P01F03/P01F03S1.png', '0px', '0px']
                },
                {
                    id: 'P01F03S2Copy',
                    type: 'image',
                    rect: ['1px', '3px', '245px', '103px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F03/P01F03S2.png', '0px', '0px']
                },
                {
                    id: 'P01F04S6',
                    type: 'image',
                    rect: ['0px', '101px', '245px', '120px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F03/P01F04S6.png', '0px', '0px']
                },
                {
                    id: 'P01F04S1NF',
                    type: 'image',
                    rect: ['0px', '101px', '245px', '119px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F03/P01F04S1NF.png', '0px', '0px']
                },
                {
                    id: 'P01F04S2NF',
                    type: 'image',
                    rect: ['0px', '101px', '245px', '120px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F03/P01F04S2NF.png', '0px', '0px']
                },
                {
                    id: 'P01F04S2FB',
                    type: 'image',
                    rect: ['1px', '101px', '245px', '120px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F03/P01F04S2FB.png', '0px', '0px']
                },
                {
                    id: 'buble2',
                    type: 'image',
                    rect: ['0px', '101px', '245px', '120px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F03/buble.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_buble2}": [
                ["style", "top", '101px'],
                ["style", "height", '120px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '245px']
            ],
            "${_P01F04S2NF}": [
                ["style", "top", '101px'],
                ["style", "height", '120px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '245px']
            ],
            "${_P01F03S1}": [
                ["style", "top", '3px'],
                ["style", "height", '103px'],
                ["style", "display", 'block'],
                ["style", "left", '1px'],
                ["style", "width", '245px']
            ],
            "${_P01F04S1NF}": [
                ["style", "top", '101px'],
                ["style", "height", '120px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '245px']
            ],
            "${_P01F04S2FB}": [
                ["style", "top", '101px'],
                ["style", "height", '120px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '245px']
            ],
            "${_P01F03S2Copy}": [
                ["style", "top", '3px'],
                ["style", "height", '103px'],
                ["style", "opacity", '1'],
                ["style", "left", '1px'],
                ["style", "width", '245px']
            ],
            "${symbolSelector}": [
                ["style", "height", '213px'],
                ["style", "width", '244px']
            ],
            "${_P01F04S6}": [
                ["style", "height", '120px'],
                ["style", "top", '101px'],
                ["style", "left", '0px'],
                ["style", "width", '245px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: false,
            timeline: [
                { id: "eid565", tween: [ "style", "${_P01F04S1NF}", "height", '120px', { fromValue: '120px'}], position: 846, duration: 0 },
                { id: "eid566", tween: [ "style", "${_P01F03S1}", "height", '103px', { fromValue: '103px'}], position: 3392, duration: 0 },
                { id: "eid508", tween: [ "style", "${_P01F03S1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid506", tween: [ "style", "${_P01F03S1}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid543", tween: [ "style", "${_P01F04S2NF}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid541", tween: [ "style", "${_P01F04S2NF}", "opacity", '0', { fromValue: '1'}], position: 526, duration: 637 },
                { id: "eid537", tween: [ "style", "${_P01F03S2Copy}", "opacity", '0.4', { fromValue: '1'}], position: 1163, duration: 500 },
                { id: "eid538", tween: [ "style", "${_P01F03S2Copy}", "opacity", '1', { fromValue: '0.4'}], position: 1663, duration: 837 },
                { id: "eid533", tween: [ "style", "${_P01F03S2Copy}", "opacity", '0', { fromValue: '1'}], position: 2583, duration: 326 },
                { id: "eid527", tween: [ "style", "${_P01F03S2Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 2909, duration: 736 },
                { id: "eid534", tween: [ "style", "${_P01F03S2Copy}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
                { id: "eid529", tween: [ "style", "${_P01F03S2Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 400 },
                { id: "eid535", tween: [ "style", "${_P01F03S2Copy}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0 },
                { id: "eid546", tween: [ "style", "${_P01F04S1NF}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1163 },
                { id: "eid564", tween: [ "style", "${_buble2}", "opacity", '1', { fromValue: '0.000000'}], position: 1583, duration: 172 },
                { id: "eid553", tween: [ "style", "${_P01F04S2FB}", "opacity", '0.4', { fromValue: '0.000000'}], position: 1163, duration: 500 },
                { id: "eid554", tween: [ "style", "${_P01F04S2FB}", "opacity", '0', { fromValue: '0.400000'}], position: 1663, duration: 837 },
                { id: "eid556", tween: [ "style", "${_P01F04S2FB}", "opacity", '1', { fromValue: '0.000000'}], position: 2583, duration: 326 },
                { id: "eid557", tween: [ "style", "${_P01F04S2FB}", "opacity", '0', { fromValue: '1'}], position: 2909, duration: 736 },
                { id: "eid560", tween: [ "style", "${_P01F04S2FB}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 500 },
                { id: "eid561", tween: [ "style", "${_P01F04S2FB}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 400 }            ]
        }
    }
},
"po1f06door": {
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
                    rect: ['0px', '0px', '246px', '227px', 'auto', 'auto'],
                    id: 'door',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/P01F06/door.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_door}": [
                ["style", "top", '0px'],
                ["style", "height", '227px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '246px']
            ],
            "${symbolSelector}": [
                ["style", "height", '227px'],
                ["style", "width", '246px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid402", tween: [ "style", "${_door}", "left", '-93px', { fromValue: '0px'}], position: 0, duration: 2000, easing: "easeInOutQuart" }            ]
        }
    }
},
"p01f06backofsarbaz": {
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
                    type: 'image',
                    id: 'back-of-sarbaz',
                    opacity: 1,
                    rect: ['0px', '0px', '139px', '217px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F06/back-of-sarbaz.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_back-of-sarbaz}": [
                ["style", "top", '0px'],
                ["style", "height", '217px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '139px']
            ],
            "${symbolSelector}": [
                ["style", "height", '217px'],
                ["style", "width", '139px']
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
"P01F05": {
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
                    id: 'F0502',
                    type: 'image',
                    rect: ['0px', '209px', '465px', '228px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F05/F0502.png', '0px', '0px']
                },
                {
                    id: 'F0503',
                    type: 'image',
                    rect: ['7px', '210px', '465px', '226px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F05/F0503.png', '0px', '0px']
                },
                {
                    id: 'F0504',
                    type: 'image',
                    rect: ['7px', '210px', '465px', '226px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F05/F0504.png', '0px', '0px']
                },
                {
                    id: 'F0501',
                    type: 'image',
                    rect: ['0px', '209px', '465px', '228px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/P01F05/F0501.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_F0504}": [
                ["style", "top", '-4px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '7px']
            ],
            "${_F0502}": [
                ["style", "top", '-5px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '213px'],
                ["style", "width", '465px']
            ],
            "${_F0501}": [
                ["style", "top", '-5px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_F0503}": [
                ["style", "top", '-5px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '7px'],
                ["style", "height", '228px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10500,
            autoPlay: true,
            timeline: [
                { id: "eid577", tween: [ "style", "${_F0501}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1146 },
                { id: "eid582", tween: [ "style", "${_F0503}", "opacity", '1', { fromValue: '0.000000'}], position: 1682, duration: 193 },
                { id: "eid583", tween: [ "style", "${_F0503}", "opacity", '0', { fromValue: '1'}], position: 1875, duration: 194 },
                { id: "eid605", tween: [ "style", "${_F0502}", "top", '-5px', { fromValue: '-5px'}], position: 10500, duration: 0 },
                { id: "eid588", tween: [ "style", "${_F0504}", "opacity", '1', { fromValue: '0.000000'}], position: 2166, duration: 116 },
                { id: "eid589", tween: [ "style", "${_F0504}", "opacity", '0', { fromValue: '1'}], position: 2282, duration: 218 },
                { id: "eid606", tween: [ "style", "${_F0503}", "top", '-5px', { fromValue: '-5px'}], position: 10500, duration: 0 },
                { id: "eid608", tween: [ "style", "${_F0504}", "top", '-4px', { fromValue: '-4px'}], position: 10500, duration: 0 },
                { id: "eid607", tween: [ "style", "${_F0501}", "top", '-5px', { fromValue: '-5px'}], position: 10500, duration: 0 }            ]
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

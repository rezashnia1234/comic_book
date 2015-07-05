/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         
         // insert code to be run when the user stops pressing a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 13 = enter
         if (e.which == 37) {
         	//alert("left");
         	sym.getComposition().getStage().reset_all_page_1();
         
         	if(sym.$("#Stage").data("playing_animation"))
         		sym.$("#Stage").data("run_next_animation",true);
         	else
         		sym.$("#Stage").data("run_next_animation",false);
         	sym.play();
         }
         if (e.which == 39) {
         	sym.getComposition().getStage().reset_all_page_1();
         
         	if(sym.$("#Stage").data("playing_animation"))
         		sym.$("#Stage").data("run_next_animation",true);
         	else
         		sym.$("#Stage").data("run_next_animation",false);
         
         	//if(!sym.$("#Stage").data("is_it_at_start"))
         		sym.playReverse();
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("#Stage").data("is_it_at_start",true);
         
         // Play an audio track 
         sym.getSymbol("p01f01").$("SnowAudio2")[0].play();
         
         // Jump to a playback time (in seconds) 
         sym.getSymbol("p01f01").$("SnowAudio2")[0].currentTime = 6;
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("p01f01").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // Play an audio track
         
         sym.stop();
         sym.getSymbol("p01f02").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         
         // Play an audio track 
         sym.getSymbol("p01f03").$("electronic")[0].play();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("p01f03").play(0);
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         // Pause an audio track 
         sym.getSymbol("p01f01").$("SnowAudio2")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         
         sym.stop();
         
         sym.getSymbol("p01f04").play(0);
         
         
         
         
         
         
         // Play an audio track 
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         // Pause an audio track 
         sym.getSymbol("p01f03").$("electronic")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.stop();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("p01f05").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         // Play an audio track 
         
         
         sym.stop();
         
         
         sym.getSymbol("p01f05").play(0);
         
         sym.getSymbol("p01f05").$("rahraftan")[0].play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         // insert code here
         // Pause an audio track 
         sym.getSymbol("p01f04").$("electronic2")[0].pause();

      });
      //Edge binding end

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.reset_all_page_1 = function()
         {
         	sym.getSymbol("p01f01").stop(0);
         	sym.getSymbol("p01f02").stop(0);
         	sym.getSymbol("p01f03").stop(0);
         	sym.getSymbol("p01f04").stop(0);
         	sym.getSymbol("p01f05").stop(0);
         	sym.getSymbol("p01f06").stop(0);
         
         	sym.getSymbol("p04f01").stop(0);
         	sym.getSymbol("p04f02").stop(0);
         	sym.getSymbol("p04f03").stop(0);
         	sym.getSymbol("p04f04").stop(0);
         	sym.getSymbol("p04f05").stop(0);
         	sym.getSymbol("p04f06").stop(0);
         
         	sym.getSymbol("p03f01").stop(0);
         	sym.getSymbol("p03f02").stop(0);
         	sym.getSymbol("p03f03").stop(0);
         	sym.getSymbol("p02f01").stop(0);
         	sym.getSymbol("p02f02").stop(0);
         	sym.getSymbol("p02f03").stop(0);
         	sym.getSymbol("p02f04").stop(0);
         	sym.getSymbol("p02f05").stop(0);
         
         
         }

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p02f01").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p02f02").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p02f03").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p02f04").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p02f05").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15403, function(sym, e) {
         // insert code here
         
         
         sym.getSymbol("p03f01").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18500, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p03f03").play(0);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p03f06").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25500, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p04f02").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26500, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p04f03").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27500, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p04f04").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28500, function(sym, e) {
         // insert code here
         sym.stop();
         sym.getSymbol("p04f05").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24500, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p04f01").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         sym.getSymbol("p01f06").play(0);
         
         // Pause an audio track 
         sym.getSymbol("p01f05").$("rahraftan")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         // insert code here
         
         sym.stop();
         
         sym.getSymbol("p03f02").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20404, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p03f04").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p03f05").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.getSymbol("p04f06").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Action}", "swipeleft", function(sym, e) {
         if(!sym.$("#Stage").data("is_it_at_start"))
         {
         	sym.getComposition().getStage().reset_all_page_1();
         	sym.playReverse();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Action}", "swiperight", function(sym, e) {
         sym.getComposition().getStage().reset_all_page_1();
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("#Stage").data("is_it_at_start",true);
         sym.$("dark")[0].currentTime = 55;
         sym.$("dark")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1289, function(sym, e) {
         sym.$("#Stage").data("is_it_at_start",false);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'all-frames'
   (function(symbolName) {   
   
   })("all-frames");
   //Edge symbol end:'all-frames'

   //=========================================================
   
   //Edge symbol: 'f1'
   (function(symbolName) {   
   
   })("f1");
   //Edge symbol end:'f1'

   //=========================================================
   
   //Edge symbol: 'p01f01'
   (function(symbolName) {   
   
   })("p01f01");
   //Edge symbol end:'p01f01'

   //=========================================================
   
   //Edge symbol: 'p01f02'
   (function(symbolName) {   
   
   })("p01f02");
   //Edge symbol end:'p01f02'

   //=========================================================
   
   //Edge symbol: 'p01f03'
   (function(symbolName) {   
   
   })("p01f03");
   //Edge symbol end:'p01f03'

   //=========================================================
   
   //Edge symbol: 'p01f01mask'
   (function(symbolName) {   
   
   })("p01f01mask");
   //Edge symbol end:'p01f01mask'

   //=========================================================
   
   //Edge symbol: 'snow'
   (function(symbolName) {   
   
   })("snow");
   //Edge symbol end:'snow'

   //=========================================================
   
   //Edge symbol: 'snow_blur'
   (function(symbolName) {   
   
   })("snow_blur");
   //Edge symbol end:'snow_blur'

   //=========================================================
   
   //Edge symbol: 'p01f03-2'
   (function(symbolName) {   
   
   })("p01f03-2");
   //Edge symbol end:'p01f03-2'

   //=========================================================
   
   //Edge symbol: 'p01f04'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2886, function(sym, e) {
         //alert();
         
         
         // Play an audio track 
         sym.getComposition().getStage().getSymbol("p01f04").$("electronic2")[0].play();
         
         //alert();

      });
      //Edge binding end

      

   })("p01f04");
   //Edge symbol end:'p01f04'

   //=========================================================
   
   //Edge symbol: 'p01f05'
   (function(symbolName) {   
   
      

   })("p01f05");
   //Edge symbol end:'p01f05'

   //=========================================================
   
   //Edge symbol: 'p01f06'
   (function(symbolName) {   
   
   })("p01f06");
   //Edge symbol end:'p01f06'

   //=========================================================
   
   //Edge symbol: 'p02f01'
   (function(symbolName) {   
   
   })("p02f01");
   //Edge symbol end:'p02f01'

   //=========================================================
   
   //Edge symbol: 'p02f02'
   (function(symbolName) {   
   
   })("p02f02");
   //Edge symbol end:'p02f02'

   //=========================================================
   
   //Edge symbol: 'p02f03'
   (function(symbolName) {   
   
   })("p02f03");
   //Edge symbol end:'p02f03'

   //=========================================================
   
   //Edge symbol: 'p03f01'
   (function(symbolName) {   
   
   })("p02f04");
   //Edge symbol end:'p02f04'

   //=========================================================
   
   //Edge symbol: 'p03f02'
   (function(symbolName) {   
   
   })("p02f05");
   //Edge symbol end:'p02f05'

   //=========================================================
   
   //Edge symbol: 'p04f01'
   (function(symbolName) {   
   
   })("p02f06");
   //Edge symbol end:'p02f06'

   //=========================================================
   
   //Edge symbol: 'p03f03'
   (function(symbolName) {   
   
   })("p03f03");
   //Edge symbol end:'p03f03'

   //=========================================================
   
   //Edge symbol: 'P03F03Hand'
   (function(symbolName) {   
   
   })("P03F03Hand");
   //Edge symbol end:'P03F03Hand'

   //=========================================================
   
   //Edge symbol: 'p03f06'
   (function(symbolName) {   
   
   })("p03f06");
   //Edge symbol end:'p03f06'

   //=========================================================
   
   //Edge symbol: 'p04f01'
   (function(symbolName) {   
   
   })("p04f01");
   //Edge symbol end:'p04f01'

   //=========================================================
   
   //Edge symbol: 'p04f02'
   (function(symbolName) {   
   
   })("p04f02");
   //Edge symbol end:'p04f02'

   //=========================================================
   
   //Edge symbol: 'p04f03'
   (function(symbolName) {   
   
   })("p04f03");
   //Edge symbol end:'p04f03'

   //=========================================================
   
   //Edge symbol: 'p04f04'
   (function(symbolName) {   
   
   })("p04f04");
   //Edge symbol end:'p04f04'

   //=========================================================
   
   //Edge symbol: 'p03f02'
   (function(symbolName) {   
   
   })("p03f02");
   //Edge symbol end:'p03f02'

   //=========================================================
   
   //Edge symbol: 'p04f05'
   (function(symbolName) {   
   
   })("p04f05");
   //Edge symbol end:'p04f05'

   //=========================================================
   
   //Edge symbol: 'p04f06'
   (function(symbolName) {   
   
   })("p04f06");
   //Edge symbol end:'p04f06'

   //=========================================================
   
   //Edge symbol: 'p03f04'
   (function(symbolName) {   
   
   })("p03f04");
   //Edge symbol end:'p03f04'

   //=========================================================
   
   //Edge symbol: 'p03f05'
   (function(symbolName) {   
   
   })("p03f05");
   //Edge symbol end:'p03f05'

   //=========================================================
   
   //Edge symbol: 'p03f01'
   (function(symbolName) {   
   
   })("p03f01");
   //Edge symbol end:'p03f01'

})(jQuery, AdobeEdge, "EDGE-2180174");
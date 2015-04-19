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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_help}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_help}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_help}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_help}", "swiperight", function(sym, e) {
         // insert code to be run when a swiperight event occurs on an element
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         
         if(!sym.$("#Stage").data("run_next_animation"))
         {
         	sym.stop();
         	sym.getSymbol("page_1th").play("frame_1");
         }
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         
         if(!sym.$("#Stage").data("run_next_animation"))
         {
         	sym.stop();
         	//sym.getSymbol("page_1th").play("frame_1");
         	//alert("1");
         	sym.getSymbol("page_1th").play("frame_3");
         }
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5994, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         {
         	sym.stop();
         	//sym.getSymbol("page_1th").play("frame_1");
         	//alert("1");
         	sym.getSymbol("page_1th").play("frame_6");
         	//sym.getSymbol("page_1th").getSymbol("F012").play("frame_1");
         	//sym.getSymbol("page_1th").getSymbol("F01").play();
         	//alert("2");
         }
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.$("#Stage").data("is_it_at_start",true);
         sym.$("#Stage").data("playing_animation",true);
         sym.$("#Stage").data("run_next_animation",false);
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 121, function(sym, e) {
         // insert code here
         sym.$("#Stage").data("is_it_at_start",false);
         sym.$("#Stage").data("playing_animation",true);
         sym.$("#Stage").data("run_next_animation",false);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.$("#Stage").data("is_it_at_start",true);
         sym.$("#Stage").data("run_next_animation",false);
         sym.$("#Stage").data("playing_animation",false);
         
         sym.reset_all_page_1 = function()
         {
         
         	// Go to a label or specific time and stop. For example:
         	// sym.stop(500); or sym.stop("myLabel");
         	
         	sym.getSymbol("page_1th").stop(0);
         	
         	sym.getSymbol("page_1th").getSymbol("P01F03").stop(0);
         	sym.getSymbol("page_1th").getSymbol("F01").getSymbol("snow_motionCopy").stop(0);
         	sym.getSymbol("page_1th").getSymbol("F01").getSymbol("snow_motion").stop(0);
         	sym.getSymbol("page_1th").getSymbol("F01").getSymbol("snow_motionCopy").stop(0);
         	sym.getSymbol("page_1th").getSymbol("F01").getSymbol("snow_motionCopy2").stop(0);
         	sym.getSymbol("page_1th").getSymbol("F01").getSymbol("snow_motion").getSymbol("snow_23").stop(0);
         
         	sym.getSymbol("page_1th").getSymbol("F06_mother3").stop(0);
         	sym.getSymbol("page_1th").getSymbol("F06_mother3").getSymbol("P01F06-sarbaz").stop(0);
         	sym.getSymbol("page_1th").getSymbol("F06_mother3").getSymbol("po1f06door").stop(0);
         	sym.getSymbol("page_1th").getSymbol("F06_mother3").getSymbol("p01f06-navab").stop(0);
         	sym.getSymbol("page_1th").getSymbol("F06_mother3").getSymbol("p01f06backofsarbaz").stop(0);
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1572, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         
         //alert(sym.$("#Stage").data("run_next_animation"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3073, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         sym.getComposition().getStage().reset_all_page_1();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4575, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         sym.getComposition().getStage().reset_all_page_1();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6076, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         sym.getComposition().getStage().reset_all_page_1();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7427, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         sym.getComposition().getStage().reset_all_page_1();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5915, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         sym.getComposition().getStage().reset_all_page_1();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4424, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         sym.getComposition().getStage().reset_all_page_1();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2922, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         sym.getComposition().getStage().reset_all_page_1();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1421, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7589, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         sym.getComposition().getStage().reset_all_page_1();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8900, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9082, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10412, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10585, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "dblclick", function(sym, e) {
         // insert code to be run when a swiperight event occurs on an element
         if(sym.$("#Stage").data("playing_animation"))
         	sym.$("#Stage").data("run_next_animation",true);
         else
         	sym.$("#Stage").data("run_next_animation",false);
         sym.play();
         
         //alert(sym.$("#Stage").data("run_next_animation"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "swipeleft", function(sym, e) {
         // insert code to be run when a swipeleft event occurs on an element
         if(sym.$("#Stage").data("playing_animation"))
         	sym.$("#Stage").data("run_next_animation",true);
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         if(!sym.$("#Stage").data("is_it_at_start"))
         	sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "swiperight", function(sym, e) {
         // insert code to be run when a swiperight event occurs on an element
         	if(sym.$("#Stage").data("playing_animation"))
         		sym.$("#Stage").data("run_next_animation",true);
         	else
         		sym.$("#Stage").data("run_next_animation",false);
         		
         	sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keyup", function(sym, e) {
         
         // insert code to be run when the user stops pressing a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 13 = enter
         if (e.which == 37) {
         	//alert("left");
         
         	if(sym.$("#Stage").data("playing_animation"))
         		sym.$("#Stage").data("run_next_animation",true);
         	else
         		sym.$("#Stage").data("run_next_animation",false);
         	sym.play();
         }
         if (e.which == 39) {
         	//alert("right");
         	if(sym.$("#Stage").data("playing_animation"))
         		sym.$("#Stage").data("run_next_animation",true);
         	else
         		sym.$("#Stage").data("run_next_animation",false);
         
         	//if(!sym.$("#Stage").data("is_it_at_start"))
         		sym.playReverse();
         }
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11942, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12065, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13439, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13562, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19500, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14932, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15072, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16441, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16564, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17921, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18086, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19427, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19566, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_blank--0}", "click", function(sym, e) {
         	if(sym.$("#Stage").data("playing_animation"))
         		sym.$("#Stage").data("run_next_animation",true);
         	else
         		sym.$("#Stage").data("run_next_animation",false);
         	sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_blank--0}", "touchend", function(sym, e) {
         	if(sym.$("#Stage").data("playing_animation"))
         		sym.$("#Stage").data("run_next_animation",true);
         	else
         		sym.$("#Stage").data("run_next_animation",false);
         	sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_blank--0Copy}", "click", function(sym, e) {
         		if(sym.$("#Stage").data("playing_animation"))
         			sym.$("#Stage").data("run_next_animation",true);
         		else
         			sym.$("#Stage").data("run_next_animation",false);
         	
         		//if(!sym.$("#Stage").data("is_it_at_start"))
         			sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_blank--0Copy}", "touchend", function(sym, e) {
         		if(sym.$("#Stage").data("playing_animation"))
         			sym.$("#Stage").data("run_next_animation",true);
         		else
         			sym.$("#Stage").data("run_next_animation",false);
         	
         		//if(!sym.$("#Stage").data("is_it_at_start"))
         			sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10504, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'main'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         
         //sym.getComposition().getStage().getSymbol("page_1th").getSymbol("F01").stop();
         sym.getComposition().getStage().getSymbol("page_1th").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         //alert("2");
         //sym.getSymbol("snow2").getSymbol("snow_2").play();
         sym.getSymbol("F01").getSymbol("snow_motion").getSymbol("snow_23").play(0);
         sym.getSymbol("F01").getSymbol("snow_motion").play(0);
         sym.getSymbol("F01").getSymbol("snow_motionCopy").play(0);
         sym.getSymbol("F01").getSymbol("snow_motionCopy2").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("page_1th").stop();
         
         
         
         sym.getComposition().getStage().getSymbol("page_1th").getSymbol("F06_mother3").play(0);
         //sym.getComposition().getStage().getSymbol("page_1th").getSymbol("F06_mother3").getSymbol("P01F06-sarbaz").play(0);
         sym.getComposition().getStage().getSymbol("page_1th").getSymbol("F06_mother3").getSymbol("po1f06door").play(0);
         sym.getComposition().getStage().getSymbol("page_1th").getSymbol("F06_mother3").getSymbol("p01f06-navab").play(0);
         sym.getComposition().getStage().getSymbol("page_1th").getSymbol("F06_mother3").getSymbol("p01f06backofsarbaz").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 913, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("page_1th").stop();

      });
      //Edge binding end

   })("main");
   //Edge symbol end:'main'

   //=========================================================
   
   //Edge symbol: 'action'
   (function(symbolName) {   
   
   })("action");
   //Edge symbol end:'action'

   //=========================================================
   
   //Edge symbol: 'page_2th'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_action}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         if(sym.$("#Stage").data("playing_animation"))
         	sym.$("#Stage").data("run_next_animation",true);
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "swiperight", function(sym, e) {
         // insert code to be run when a swiperight event occurs on an element
         if(sym.$("#Stage").data("playing_animation"))
         	sym.$("#Stage").data("run_next_animation",true);
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "swipeleft", function(sym, e) {
         // insert code to be run when a swipeleft event occurs on an element
         if(sym.$("#Stage").data("playing_animation"))
         	sym.$("#Stage").data("run_next_animation",true);
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         if(!sym.$("#Stage").data("is_it_at_start"))
         	sym.playReverse();

      });
      //Edge binding end

   })("page_2th");
   //Edge symbol end:'page_2th'

   //=========================================================
   
   //Edge symbol: 'page_2th_symbol'
   (function(symbolName) {   
   
   })("page_2th_symbol");
   //Edge symbol end:'page_2th_symbol'

   //=========================================================
   
   //Edge symbol: 'snow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 66, function(sym, e) {
         // insert code here
         sym.getSymbol("snow2").getSymbol("snow_2").play();
         alert("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.getSymbol("snow_2").playReverse();

      });
      //Edge binding end

   })("snow");
   //Edge symbol end:'snow'

   //=========================================================
   
   //Edge symbol: 'snow_2'
   (function(symbolName) {   
   
   })("snow_2");
   //Edge symbol end:'snow_2'

   //=========================================================
   
   //Edge symbol: 'F01'
   (function(symbolName) {   
   
   })("F01");
   //Edge symbol end:'F01'

   //=========================================================
   
   //Edge symbol: 'snow_motion'
   (function(symbolName) {   
   
   })("snow_motion");
   //Edge symbol end:'snow_motion'

   //=========================================================
   
   //Edge symbol: 'F06_mother'
   (function(symbolName) {   
   
   })("delete_it");
   //Edge symbol end:'delete_it'

   //=========================================================
   
   //Edge symbol: 'F06_mother'
   (function(symbolName) {   
   
      

   })("F06_mother");
   //Edge symbol end:'F06_mother'

   //=========================================================
   
   //Edge symbol: 'P01F06-sarbaz'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("page_1th").getSymbol("F06_mother3").getSymbol("P01F06-sarbaz").play(0);
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("P01F06-sarbaz");
   //Edge symbol end:'P01F06-sarbaz'

   //=========================================================
   
   //Edge symbol: 'po1f06-navab'
   (function(symbolName) {   
   
   })("po1f06-navab");
   //Edge symbol end:'po1f06-navab'

   //=========================================================
   
   //Edge symbol: 'p01f06-navab'
   (function(symbolName) {   
   
   })("p01f06-navab");
   //Edge symbol end:'p01f06-navab'

   //=========================================================
   
   //Edge symbol: 'P01F03'
   (function(symbolName) {   
   
   })("P01F03");
   //Edge symbol end:'P01F03'

   //=========================================================
   
   //Edge symbol: 'po1f06door'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("page_1th").getSymbol("F06_mother3").play(0);

      });
      //Edge binding end

   })("po1f06door");
   //Edge symbol end:'po1f06door'

   //=========================================================
   
   //Edge symbol: 'p01f06backofsarbaz'
   (function(symbolName) {   
   
   })("p01f06backofsarbaz");
   //Edge symbol end:'p01f06backofsarbaz'

})(jQuery, AdobeEdge, "smgroup-786");
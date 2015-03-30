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
         	sym.stop();
         else
         	sym.$("#Stage").data("run_next_animation",false);
         
         sym.$("#Stage").data("playing_animation",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         if(!sym.$("#Stage").data("run_next_animation"))
         	sym.stop();
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
         	sym.stop();
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

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1572, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         //alert(sym.$("#Stage").data("run_next_animation"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3073, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4575, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6076, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7427, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5915, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4424, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2922, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1421, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7589, function(sym, e) {
         sym.$("#Stage").data("playing_animation",true);

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

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'main'
   (function(symbolName) {   
   
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

})(jQuery, AdobeEdge, "smgroup-786");
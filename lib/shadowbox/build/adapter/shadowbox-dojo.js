if(typeof dojo=="undefined"){throw"Unable to load Shadowbox, Dojo Toolkit not found"}var Shadowbox={};Shadowbox.lib=function(){var C=[];var D={};var B=/(-[a-z])/gi;var A=function(F,G){return G.charAt(1).toUpperCase()};var E=function(G){var F;if(!(F=D[G])){F=D[G]=G.replace(B,A)}return F};return{adapter:"dojo",getStyle:function(G,F){return dojo.style(G,E(F))},setStyle:function(H,G,I){if(typeof G=="string"){dojo.style(H,E(G),I)}else{for(var F in G){dojo.style(H,F,G[F])}}},get:function(F){return dojo.byId(F)},remove:function(F){dojo._destroyElement(F)},getTarget:function(F){return F.target},getPageXY:function(F){return[F.pageX,F.pageY]},preventDefault:function(F){F.preventDefault()},keyCode:function(F){return F.keyCode},addEvent:function(I,F,H){var G=dojo.connect(I,F,H);C.push({el:I,name:F,handle:G})},removeEvent:function(H,F,G){dojo.forEach(C,function(J,I){if(J&&J.el==H&&J.name==F){dojo.disconnect(J.handle);C[I]=null}})},append:function(H,G){if(H.insertAdjacentHTML){H.insertAdjacentHTML("BeforeEnd",G)}else{if(H.lastChild){var F=H.ownerDocument.createRange();F.setStartAfter(H.lastChild);var I=F.createContextualFragment(G);H.appendChild(I)}else{H.innerHTML=G}}}}}();
(this.webpackJsonpgpsTrack=this.webpackJsonpgpsTrack||[]).push([[0],{178:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return i}));var n=r(12),a=r(55),i=(r(37),function(t,e,r,i,c){var o=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/o.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,r=o.innerWidth,a=e/r,i=t.velocityX,s=r/2,u=i>=0&&(i>.2||t.deltaX>s),d=(u?1-a:a)*r,h=0;if(d>5){var p=d/Math.abs(i);h=Math.min(p,540)}c(u,a<=0?.01:Object(n.j)(0,a,.9999),h)}})})}}]);
//# sourceMappingURL=0.ed95d194.chunk.js.map
/*jquery.als v.1.3 | (c) 2012, 2014 Federica Sibella musings(at)musings(dot)it | http://www.musings.it | MIT or GPLv3 license.*/
(function(c){function p(e){if("string"===typeof e){var a=e.indexOf("_");-1!=a&&(e=e.substr(a+1))}return e}function q(e){e.preventDefault();e=p(c(this).attr("data-id"));var a=l[e];c(this).off();a.prev.off();c.fn.als("next",e)}function s(e){e.preventDefault();e=p(c(this).attr("data-id"));var a=l[e];c(this).off();a.next.off();c.fn.als("prev",e)}var l=[],h=0,u={init:function(e){this.each(function(){var a=c(this),b=a.data("als"),d=c(),b=c(),m=c(),f=c(),g=c(),k=c(),v=0,n=0,p=0,w=0,z=0,x=0,A=0,B=0,y=0,C=
0,u=0,d=c.extend({visible_items:3,scrolling_items:1,orientation:"horizontal",circular:"no",autoscroll:"no",interval:4E3,speed:600,easing:"swing",direction:"left",start_from:0},e);"no"==d.circular&&"yes"==d.autoscroll&&(d.circular="yes");if("linear"!=d.easing||"swing"!=d.easing)d.easing="swing";a.attr("id")&&""!=a.attr("id")||a.attr("id","als-container_"+h);a.attr("data-id","als-container_"+h);f=a.find(".als-viewport").attr("id","als-viewport_"+h);m=a.find(".als-wrapper").attr("id","als-wrapper_"+
h);b=a.find(".als-item");v=b.size();d.visible_items>v&&(d.visible_items=v-1);d.scrolling_items>d.visible_items&&(d.scrolling_items=d.visible_items-1);d.start_from>v-d.visible_items&&(d.start_from=0);g=a.find(".als-prev").attr("data-id","als-prev_"+h);k=a.find(".als-next").attr("data-id","als-next_"+h);switch(d.orientation){default:b.each(function(a){c(this).attr("id","als-item_"+h+"_"+a);p+=c(this).outerWidth(!0);c(this).outerHeight(!0)>A&&(A=c(this).outerHeight(!0));y<d.visible_items&&(0==d.start_from?
(n+=c(this).outerWidth(!0),y++):a>=d.start_from&&(n+=c(this).outerWidth(!0),y++));0!=d.start_from&&(C<d.start_from&&(x+=c(this).outerWidth(!0),C++),u=d.start_from)});m.css("width",p);b.css("left",-x);f.css("width",n);m.css("height",A);f.css("height",A);if("yes"==d.circular&&0!=d.start_from)for(r=0;r<d.start_from;r++){var t=b.last().position(),t=t.left+b.last().outerWidth(!0);b.eq(r).css("left",t)}break;case "vertical":if(b.each(function(a){c(this).attr("id","als-item_"+h+"_"+a);z+=c(this).outerHeight(!0);
c(this).outerWidth(!0)>B&&(B=c(this).outerWidth(!0));y<d.visible_items&&(0==d.start_from?(w+=c(this).outerHeight(!0),y++):a>=d.start_from&&(w+=c(this).outerHeight(!0),y++));0!=d.start_from&&(C<d.start_from&&(x+=c(this).outerHeight(!0),C++),u=d.start_from)}),m.css("height",z),b.css("top",-x),f.css("height",w),m.css("width",B),f.css("width",B),"yes"==d.circular&&0!=d.start_from)for(r=0;r<d.start_from;r++)t=b.last().position(),t=t.top+b.last().outerHeight(!0),b.eq(r).css("top",t)}"no"==d.circular&&(0==
d.start_from&&g.css("display","none"),d.visible_items+d.start_from==v&&k.css("display","none"));a.data("als",{container:a,instance:h,options:d,viewport:f,wrapper:m,prev:g,next:k,item:b,num_items:v,wrapper_width:p,viewport_width:n,wrapper_height:z,viewport_height:w,current:u,timer:0});b=a.data("als");l[h]=b;k.on("click",q);g.on("click",s);"yes"==d.autoscroll?(c.fn.als("start",h),m.hover(function(){c.fn.als("stop",c(this).attr("id"))},function(){c.fn.als("start",c(this).attr("id"))})):"no"==d.autoscroll&&
c.fn.als("stop",h);h++;return l})},next:function(e){e=p(e);var a=l[e],b=0,b=0;switch(a.options.orientation){default:var d=0,c=0;switch(a.options.circular){default:for(b=a.current;b<a.current+a.options.scrolling_items;b++)d+=a.item.eq(b).outerWidth(!0);a.current+=a.options.scrolling_items;for(b=a.current;b<a.current+a.options.visible_items;b++)c+=a.item.eq(b).outerWidth(!0);a.viewport.animate({width:c},a.options.speed,a.options.easing);a.item.animate({left:"-="+d},a.options.speed,a.options.easing);
a.item.promise().done(function(){a.next.on("click",q);a.prev.on("click",s)});0<a.current&&a.prev.show();a.current+a.options.visible_items>=a.num_items&&a.next.hide();break;case "yes":for(var f=0,g=[],b=a.current;b<a.current+a.options.scrolling_items;b++){var k=b;b>=a.num_items&&(k=b-a.num_items);d+=a.item.eq(k).outerWidth(!0);g[f]=k;f++}a.current+=a.options.scrolling_items;a.current>=a.num_items&&(a.current-=a.num_items);for(b=a.current;b<a.current+a.options.visible_items;b++)f=b,b>=a.num_items&&
(f=b-a.num_items),c+=a.item.eq(f).outerWidth(!0);a.viewport.animate({width:c},a.options.speed,a.options.easing);a.item.animate({left:"-="+d},a.options.speed,a.options.easing);a.item.promise().done(function(){var b=a.item.last().position(),b=b.left+a.item.last().outerWidth(!0);for(k5=0;k5<g.length;k5++)0==g[k5]&&(b=a.item.last().position(),b=b.left+a.item.last().outerWidth(!0)),a.item.eq(g[k5]).css("left",b);a.next.on("click",q);a.prev.on("click",s)})}break;case "vertical":switch(c=d=0,a.options.circular){default:for(b=
a.current;b<a.current+a.options.scrolling_items;b++)d+=a.item.eq(b).outerHeight(!0);a.current+=a.options.scrolling_items;for(b=a.current;b<a.current+a.options.visible_items;b++)c+=a.item.eq(b).outerHeight(!0);a.viewport.animate({height:c},a.options.speed,a.options.easing);a.item.animate({top:"-="+d},a.options.speed,a.options.easing);a.item.promise().done(function(){a.next.on("click",q);a.prev.on("click",s)});0<a.current&&a.prev.show();a.current+a.options.visible_items>=a.num_items&&a.next.hide();
break;case "yes":f=0;g=[];for(b=a.current;b<a.current+a.options.scrolling_items;b++)k=b,b>=a.num_items&&(k=b-a.num_items),d+=a.item.eq(k).outerHeight(!0),g[f]=k,f++;a.current+=a.options.scrolling_items;a.current>=a.num_items&&(a.current-=a.num_items);for(b=a.current;b<a.current+a.options.visible_items;b++)f=b,b>=a.num_items&&(f=b-a.num_items),c+=a.item.eq(f).outerHeight(!0);a.viewport.animate({height:c});a.item.animate({top:"-="+d});a.item.promise().done(function(){var b=a.item.last().position(),
b=b.top+a.item.last().outerHeight(!0);for(k5=0;k5<g.length;k5++)0==g[k5]&&(b=a.item.last().position(),b=b.top+a.item.last().outerHeight(!0)),a.item.eq(g[k5]).css("top",b);a.next.on("click",q);a.prev.on("click",s)})}}l[e]=a;return l},prev:function(c){c=p(c);var a=l[c],b=0,b=0;switch(a.options.orientation){default:var d=0,m=0;switch(a.options.circular){default:a.current-=a.options.scrolling_items;for(b=a.current;b<a.current+a.options.scrolling_items;b++)d+=a.item.eq(b).outerWidth(!0);for(b=a.current;b<
a.current+a.options.visible_items;b++)m+=a.item.eq(b).outerWidth(!0);a.viewport.animate({width:m});a.item.animate({left:"+="+d},a.options.speed,a.options.easing);a.item.promise().done(function(){a.prev.on("click",s);a.next.on("click",q)});0>=a.current&&a.prev.hide();a.current+a.options.visible_items<a.num_items&&a.next.show();break;case "yes":var f=0,g=[];a.current-=a.options.scrolling_items;0>a.current&&(a.current+=a.num_items);for(b=a.current;b<a.current+a.options.scrolling_items;b++){var k=b;b>=
a.num_items&&(k=b-a.num_items);d+=a.item.eq(k).outerWidth(!0);g[f]=k;f++}for(b=a.current;b<a.current+a.options.visible_items;b++)f=b,b>=a.num_items&&(f=b-a.num_items),m+=a.item.eq(f).outerWidth(!0);b=a.item.first().position();b=b.left-a.wrapper_width;for(k5=0;k5<g.length;k5++)a.item.eq(g[k5]).css("left",b),0==g[k5]&&g[k5-1]==a.num_items-1&&(b=a.item.first().position(),b=b.left-a.wrapper_width,a.item.eq(g[k5-1]).css("left",b));setTimeout(function(){a.viewport.animate({width:m});a.item.animate({left:"+="+
d},a.options.speed,a.options.easing);a.item.promise().done(function(){a.prev.on("click",s);a.next.on("click",q)})},200)}break;case "vertical":var h=0,n=0;switch(a.options.circular){default:a.current-=a.options.scrolling_items;for(b=a.current;b<a.current+a.options.scrolling_items;b++)h+=a.item.eq(b).outerHeight(!0);for(b=a.current;b<a.current+a.options.visible_items;b++)n+=a.item.eq(b).outerHeight(!0);a.viewport.animate({height:n});a.item.animate({top:"+="+h},a.options.speed,a.options.easing);a.item.promise().done(function(){a.prev.on("click",
s);a.next.on("click",q)});0>=a.current&&a.prev.hide();a.current+a.options.visible_items<a.num_items&&a.next.show();break;case "yes":f=0;g=[];a.current-=a.options.scrolling_items;0>a.current&&(a.current+=a.num_items);for(b=a.current;b<a.current+a.options.scrolling_items;b++)k=b,b>=a.num_items&&(k=b-a.num_items),h+=a.item.eq(k).outerHeight(!0),g[f]=k,f++;for(b=a.current;b<a.current+a.options.visible_items;b++)f=b,b>=a.num_items&&(f=b-a.num_items),n+=a.item.eq(f).outerHeight(!0);b=a.item.first().position();
b=b.top-a.wrapper_height;for(k5=0;k5<g.length;k5++)a.item.eq(g[k5]).css("top",b),0==g[k5]&&g[k5-1]==a.num_items-1&&(b=a.item.first().position(),b=b.top-a.wrapper_height,a.item.eq(g[k5-1]).css("top",b));setTimeout(function(){a.viewport.animate({height:n},a.options.speed,a.options.easing);a.item.animate({top:"+="+h},a.options.speed,a.options.easing);a.item.promise().done(function(){a.prev.on("click",s);a.next.on("click",q)})},200)}}l[c]=a;return l},start:function(e){e=p(e);var a=l[e];0!=a.timer&&clearInterval(a.timer);
switch(a.options.direction){default:a.timer=setInterval(function(){a.next.off();a.prev.off();c.fn.als("next",e)},a.options.interval);break;case "right":case "down":a.timer=setInterval(function(){a.prev.off();a.next.off();c.fn.als("prev",e)},a.options.interval)}l[e]=a;return l},stop:function(c){c=p(c);var a=l[c];clearInterval(a.timer);l[c]=a;return l},destroy:function(){id=p(c(this).attr("data-id"));var e=l[id];e.prev.off();e.next.off();c.fn.als("stop",id);c.removeData(e,this.name);this.removeClass(this.name);
this.unbind();this.element=null}};c.fn.als=function(e){if(u[e])return u[e].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof e&&e)c.error("Method "+e+" does not exist on jQuery.als");else return u.init.apply(this,arguments)}})(jQuery);
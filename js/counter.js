/* =================================
* jQuery counter v1.0 / Copyright В© 2014 Spab Rice
* All rights reserved.
================================= */
jQuery.fn.extend({count:function(e,t,n,r){function o(){var r=e+=n;i.text(r);if(n<0&&t>=e||n>0&&e>=t){i.text(t);clearInterval(s)}}var i=this,s;if(e-t>0)n=-1;e-=n;s=setInterval(o,r||80)}})
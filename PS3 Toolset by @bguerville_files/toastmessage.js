!function(t){var e={inEffect:{opacity:"show"},inEffectDuration:600,stayTime:3e3,text:"",sticky:!1,type:"notice",position:"top-right",closeText:"",close:null},o={init:function(o){o&&t.extend(e,o)},showToast:function(o){var s,a,n,i={};return t.extend(i,e,o),s=t(".toast-container").length?t(".toast-container"):t("<div></div>").addClass("toast-container").addClass("toast-position-"+i.position).appendTo("body"),a=t("<div></div>").addClass("toast-item-wrapper"),n=t("<div></div>").hide().addClass("toast-item toast-type-"+i.type).appendTo(s).html(t("<p>").append(i.text)).animate(i.inEffect,i.inEffectDuration).wrap(a),t("<div></div>").addClass("toast-item-close").prependTo(n).html(i.closeText).click(function(){t().toastmessage("removeToast",n,i)}),t("<div></div>").addClass("toast-item-image").addClass("toast-item-image-"+i.type).prependTo(n),navigator.userAgent.match(/MSIE 6/i)&&s.css({top:document.documentElement.scrollTop}),i.sticky||setTimeout(function(){t().toastmessage("removeToast",n,i)},i.stayTime),n},showNoticeToast:function(e){var o={text:e,type:"notice"};return t().toastmessage("showToast",o)},showSuccessToast:function(e){var o={text:e,type:"success"};return t().toastmessage("showToast",o)},showErrorToast:function(e){var o={text:e,type:"error"};return t().toastmessage("showToast",o)},showWarningToast:function(e){var o={text:e,type:"warning"};return t().toastmessage("showToast",o)},removeToast:function(t,e){t.animate({opacity:"0"},600,function(){t.parent().animate({height:"0px"},300,function(){t.parent().remove()})}),e&&null!==e.close&&e.close()}};t.fn.toastmessage=function(e){return o[e]?o[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.toastmessage"):o.init.apply(this,arguments)}}(jQuery);
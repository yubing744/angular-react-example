/**
 * 工具类
 */
class Util {

    isMobile() {
      var userAgent = navigator.userAgent;

      return !!(userAgent && (userAgent.toLowerCase().indexOf("mobile") >= 0
      || userAgent.toLowerCase().indexOf("ipad") >= 0
      || userAgent.toLowerCase().indexOf("android") >= 0
      || userAgent.toLowerCase().indexOf("iphone") >= 0
      || userAgent.toLowerCase().indexOf("ipod") >= 0 ));
    }

    isIE() {
      return /msie/i.test(navigator.userAgent);
    }

    makeArrToObj(arr) {
      var returnObj = {};

      if ( ! (arr instanceof Array)) {//如果不是一个数组
        return false;
      }

      for (var i = 0; i < arr.length; i++) {

        if ( arr[i] instanceof Array && arr[i].length === 2 ) {//如果是数组,且长度=2
          returnObj[ arr[i][0] ] = arr[i][1];
        }

      }
      return returnObj;
    }

    cookieDomain () {
        var ret;

        try {
            var t = window.location.hostname.split(".");
            ret = (2 === t.length) ? "." + t.join(".") : t.length >= 3 && "com" === t[t.length - 2] ? "." + t.slice( - 3).join(".") : "." + t.slice( - 2).join(".");
        } catch(e) {
            ret = window.location.hostname;
        }

        if (".localhost" === ret) {
            ret = "localhost";
        }

        return ret;
    }

    doChain (filters, args, next) {
        var i = 0;

        var doFilter = function(err, args) {
            if (err) { return next(err); }

            if (i < filters.length) {
                filters[i++](args, doFilter);
            } else {
                next && next(null, args);
            }
        };

        doFilter(null, args);
    }

    inherit(ctor, ctor2) {
        function f() {}
        f.prototype = ctor2.prototype;
        ctor.prototype = new f;
    }

    /**
     * 扩展
     * 
     * @param  {[type]} destination [description]
     * @param  {[type]} source      [description]
     * @return {[type]}             [description]
     */
    extend(destination, source) {
        for (var property in source)
        destination[property] = source[property];
        return destination;
    }

    /**
     * 获取浏览器查询参数
     */
    getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r !== null) { return unescape(r[2]); }
        return null; //返回参数值
    }
}

export default new Util();
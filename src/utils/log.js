/* eslint-disable no-console */

import cfg from "config";

// 修改有修浏览器不支持
console.info = console.info || console.log;
console.log = console.log || console.log;
console.warn = console.warn || console.log;
console.error = console.error || console.log;

/**
 * 获取浏览器查询参数
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r !== null) { return unescape(r[2]); }
    return null; //返回参数值
}

var logLevel = getUrlParam("kd_log_level") ? getUrlParam("kd_log_level") : 3;

/**
 * 日志
 */
export default {
    logLevel: logLevel,

    debug: function() {
        var level = logLevel;

        if (parseInt(level) > 3) {
            console.log.apply(console, arguments);
        }
    },
    info: function() {
        var level = logLevel;

        if (parseInt(level) > 2) {
            console.info.apply(console, arguments);
        }
    },
    warn: function() {
        var level = logLevel;

        if (parseInt(level) > 1) {
            console.warn.apply(console, arguments);
        }
    },
    error: function() {
        var level = logLevel;

        if (parseInt(level) > 0) {
            console.error.apply(console, arguments);
        }
    }
}

/* eslint-enable no-console */
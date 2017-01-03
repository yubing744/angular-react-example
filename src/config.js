var util = require("utils/util").default;
var dealProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");

/*
* 配置文件
*/
var cfg = {
    //日志级别
    logLevel: 2,
    //SDK URL
    sdk_base: dealProtocol + "deal-admin.kuick.cn/sdk/v1/",
};

/**
 * 初始化
 */
cfg.init = function(opts) {
    if (opts) {
		__webpack_public_path__ = opts.SDK_URL;
	}
};

/**
 * 获取配置
 */
cfg.get = function(key) {
    return cfg[key];
};

/**
 * 获取配置
 */
cfg.set = function(key, value) {
    cfg[key] = value;
};

/**
 * 导出
 */
module.exports = cfg;
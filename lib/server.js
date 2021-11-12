"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPServer = void 0;
var http_1 = require("./http");
exports.HTTPServer = {
    create: function (actions, configInstance, securityAccess, app) {
        var config = configInstance;
        (0, http_1.initializeHTTP)(config, actions, securityAccess, app);
    },
};

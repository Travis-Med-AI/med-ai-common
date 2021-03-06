"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.ROLES = void 0;
var ROLES;
(function (ROLES) {
    ROLES["admin"] = "ADMIN";
    ROLES["user"] = "USER";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
exports.Roles = [
    {
        name: ROLES.admin,
        description: 'An administrator for the app'
    },
    {
        name: ROLES.user,
        description: 'A user for the app'
    }
];

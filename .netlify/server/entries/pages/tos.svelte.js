var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Tos
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../chunks/index-da9f52e9.js");
var import_stores_c1df0a3f = require("../../chunks/stores-c1df0a3f.js");
const Tos = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_da9f52e9.a)(import_stores_c1df0a3f.s, (value) => $session = value);
  $$unsubscribe_session();
  return `<pre>${(0, import_index_da9f52e9.e)(JSON.stringify($session, null, 2))}</pre>`;
});

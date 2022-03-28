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
  default: () => Contact
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../chunks/index-da9f52e9.js");
const Contact = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  return `Your readers and potential media contacts must be able to get in touch with you. This is where a Contact page comes in handy.
For bloggers who prefer to keep their personal lives private, you can use a contact form on this page. Others, however, prefer to list an email address and phone number. No matter which route you choose, it should be easy for readers to contact you via this page.`;
});

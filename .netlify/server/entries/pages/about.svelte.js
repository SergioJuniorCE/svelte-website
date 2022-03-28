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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../chunks/index-da9f52e9.js");
const About = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  return `Introduce yourself!
An About page serves as the place for a blogger to introduce themselves to the audience. Your About page should discuss:

Who you are
The topics you write about and are interested in
Facts about you, your career, and your blog
Photos of you
While the list above is a basic outline, make sure your About page is captivating and encourages readers to take a specific action such as subscribing to your blog. Have fun with your About page and make it all about you.`;
});

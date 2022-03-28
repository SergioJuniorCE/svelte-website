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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../chunks/index-da9f52e9.js");
var import_database_9d78e7b0 = require("../../chunks/database-9d78e7b0.js");
var import_supabase_js = require("@supabase/supabase-js");
const Routes = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"container"}"><a href="${"/posts/create"}">Create a post</a>
	<h2 class="${"mt-3"}">Posts</h2>
	<div class="${"row"}">${`loading`}</div></main>`;
});

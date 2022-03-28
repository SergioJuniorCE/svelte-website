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
  default: () => U5Bslugu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../../chunks/index-da9f52e9.js");
var import_sweetalert2 = require("sweetalert2");
var import_stores_c1df0a3f = require("../../../chunks/stores-c1df0a3f.js");
var import_database_9d78e7b0 = require("../../../chunks/database-9d78e7b0.js");
var import_supabase_js = require("@supabase/supabase-js");
const U5Bslugu5D = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let isEditing;
  let $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_da9f52e9.a)(import_stores_c1df0a3f.p, (value) => value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isEditing = false;
    $$rendered = `<a href="${"/posts"}">Go Back</a>
<div><button class="${[
      "btn btn-primary",
      (!isEditing ? "btn-primary" : "") + " " + (isEditing ? "btn-outline-primary" : "")
    ].join(" ").trim()}">${(0, import_index_da9f52e9.e)(isEditing ? "Close edit" : "Edit")}</button>
	${isEditing ? `<button type="${"button"}" class="${"btn btn-outline mx-2"}">Save changes</button>` : ``}</div>

<div id="${"post-data"}">${`loading post`}</div>
<hr>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

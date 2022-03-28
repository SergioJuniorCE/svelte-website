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
  default: () => Auth
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../../chunks/index-da9f52e9.js");
var import_database_9d78e7b0 = require("../../../chunks/database-9d78e7b0.js");
var import_supabase_js = require("@supabase/supabase-js");
const LoginForm = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  return `<form><div class="${"mt-3"}"><input class="${"form-control"}" type="${"email"}" placeholder="${"Email"}"${(0, import_index_da9f52e9.b)("value", email, 0)}></div>
	<div class="${"mt-3"}"><input class="${"form-control"}" type="${"password"}" placeholder="${"Password"}"${(0, import_index_da9f52e9.b)("value", password, 0)}></div>
	<div class="${"mt-3"}"><button class="${"btn btn-success"}" type="${"submit"}">Sign In</button></div></form>`;
});
const RegisterForm = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Auth = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  return `<p class="${"mt-3"}">Login</p>
${(0, import_index_da9f52e9.v)(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}
<hr>
<p>Register</p>
${(0, import_index_da9f52e9.v)(RegisterForm, "RegisterForm").$$render($$result, {}, {}, {})}`;
});

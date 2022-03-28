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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../chunks/index-da9f52e9.js");
var import_sweetalert2 = require("sweetalert2");
var import_database_9d78e7b0 = require("../../chunks/database-9d78e7b0.js");
var import_stores_c1df0a3f = require("../../chunks/stores-c1df0a3f.js");
var import_supabase_js = require("@supabase/supabase-js");
const Navbar = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_da9f52e9.a)(import_stores_c1df0a3f.s, (value) => $session = value);
  $$unsubscribe_session();
  return `<nav class="${"navbar navbar-expand-lg navbar-dark bg-dark"}"><div class="${"container"}"><a class="${"navbar-brand"}" href="${"/"}">SJCE</a>
		<button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
		<div class="${"collapse navbar-collapse"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav me-auto mb-2 mb-lg-0"}"><li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/posts"}">Posts</a></li>
				<li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/about"}">About</a></li>
				<li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/contact"}">Contact</a></li>
				<li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/budget"}">Budget</a></li>
				<li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/meals"}">Meals</a></li>
				<li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/trips"}">Trips</a></li>
				
				</ul>
			<form class="${"d-flex"}"><input class="${"form-control me-2"}" type="${"search"}" placeholder="${"Search"}" aria-label="${"Search"}">
				<button class="${"btn btn-outline-success"}" type="${"submit"}">Search</button></form>
			<div class="${"navbar-text"}">${$session ? `<ul class="${"navbar-nav me-auto mb-2 mb-lg-0"}"><li class="${"nav-item dropdown"}"><a class="${"nav-link dropdown-toggle"}" href="${"/profile"}" id="${"navbarDropdown"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}"><span>${$session.user ? `Hello, ${(0, import_index_da9f52e9.e)($session.user.email.split("@")[0])}` : ``}</span></a>
							<ul class="${"dropdown-menu"}" aria-labelledby="${"navbarDropdown"}"><li><span class="${"dropdown-item"}">Logout</span></li>
								<li><a class="${"dropdown-item"}" href="${"#!"}">Another action</a></li>
								<li><hr class="${"dropdown-divider"}"></li>
								<li><a class="${"dropdown-item"}" href="${"#!"}">Something else here</a></li></ul></li></ul>` : `<a href="${"/auth"}" class="${"btn btn-outline-secondary"}">Login</a>`}</div></div></div></nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import 'bootswatch/dist/cyborg/bootstrap.min.css';@import 'sweetalert2/dist/sweetalert2.min.css';",
  map: null
};
const _layout = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_da9f52e9.a)(import_stores_c1df0a3f.s, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `${(0, import_index_da9f52e9.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main class="${"container"}">${slots.default ? slots.default({}) : ``}
</main>`;
});

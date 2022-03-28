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
  default: () => Posts,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../../chunks/index-da9f52e9.js");
var import_database_9d78e7b0 = require("../../../chunks/database-9d78e7b0.js");
var import_supabase_js = require("@supabase/supabase-js");
const PostCard = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"col-md-12 col-lg-4 col-xl-6"}" style="${"max-width: fit-content;"}"><div class="${"card mt-3"}"><div class="${"card-body"}"><a class="${"card-title text-primary"}" style="${"color: cornflowerblue"}" href="${"/posts/" + (0, import_index_da9f52e9.e)(title)}">${(0, import_index_da9f52e9.e)(title)}</a></div></div></div>`;
});
var SpinnerCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loader.svelte-1vruny3{width:164px;height:170px;display:block;margin:auto;position:relative;background:#fff;box-sizing:border-box}.loader.svelte-1vruny3::after{content:'';width:calc(100% - 30px);height:calc(100% - 30px);top:15px;left:15px;position:absolute;background-image:linear-gradient(\r\n				90deg,\r\n				transparent,\r\n				rgba(255, 255, 255, 0.5) 50%,\r\n				transparent 100%\r\n			),\r\n			linear-gradient(#ddd 74px, transparent 0), linear-gradient(#ddd 16px, transparent 0),\r\n			linear-gradient(#ddd 24px, transparent 0);background-repeat:no-repeat;background-size:50px 170px, 100% 74px, 100% 16px, 100% 32px;background-position:0 0, 0 0, 0px 85px, 0px 110px;box-sizing:border-box;animation:svelte-1vruny3-animloader 1s linear infinite}@keyframes svelte-1vruny3-animloader{0%{background-position:0 0, 0 0, 0px 85px, 0px 110px}100%{background-position:150% 0, 0 0, 0px 85px, 0px 110px}}",
  map: null
};
const SpinnerCard = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<span class="${"loader svelte-1vruny3"}"></span>`;
});
async function load() {
  const { data } = await import_database_9d78e7b0.s.from("posts").select("*");
  return { props: { posts: data } };
}
const Posts = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<main><div class="${"text-center"}"><h3>Posts</h3>
		${posts ? `<div class="${"row"}">${posts.length ? (0, import_index_da9f52e9.d)(posts, ({ title }) => {
    return `${(0, import_index_da9f52e9.v)(PostCard, "PostCard").$$render($$result, { title }, {}, {})}`;
  }) : `<p>No posts atm</p>`}</div>` : `${(0, import_index_da9f52e9.v)(SpinnerCard, "SpinnerCard").$$render($$result, {}, {}, {})}`}</div></main>`;
});

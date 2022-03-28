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
  default: () => PostCard
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../chunks/index-da9f52e9.js");
const PostCard = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { updated_at } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.updated_at === void 0 && $$bindings.updated_at && updated_at !== void 0)
    $$bindings.updated_at(updated_at);
  return `<div class="${"col-xs-12 col-sm-6 col-mb-4 col-lg-3 mb-3 mx-lg-2"}" style="${"cursor: pointer;"}"><div class="${"card"}" style="${"width: 18rem;"}"><img src="${"https://picsum.photos/200"}" class="${"card-img-top"}"${(0, import_index_da9f52e9.b)("alt", title, 0)}>
		<div class="${"card-body"}"><h5 class="${"card-title"}">${(0, import_index_da9f52e9.e)(title)}</h5>
			<p class="${"card-text"}">${(0, import_index_da9f52e9.e)(description)}</p>
			<p class="${"card-text"}"><small class="${"text-muted"}">Last updated ${(0, import_index_da9f52e9.e)(updated_at)}</small></p></div></div></div>`;
});

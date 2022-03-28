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
  default: () => Trips
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../../chunks/index-da9f52e9.js");
const Trips = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  return `<h2>Trip</h2>
<p><button class="${"btn btn-primary"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#contentId"}" aria-expanded="${"false"}" aria-controls="${"contentId"}">Show Trip
	</button></p>
<div class="${"collapse"}" id="${"contentId"}"><div class="${"form-check"}"><input type="${"checkbox"}" class="${"form-check-input"}" name="${""}" id="${""}" value="${"checkedValue"}" checked>
		<label class="${"form-check-label"}" for="${""}">Display value </label></div>
</div>`;
});

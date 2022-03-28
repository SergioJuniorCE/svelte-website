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
  default: () => Meals
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../../chunks/index-da9f52e9.js");
const Meals = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  return `<h2>Breakfast</h2>

<table class="${"table"}"><thead><tr><th>name</th>
      <th>calories</th>
      <th>carbs</th>
      <th>protein</th>
      <th>fat</th></tr></thead>
  <tbody><tr><td scope="${"row"}"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td></tr></tbody></table>`;
});

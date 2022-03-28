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
  default: () => Budget,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../chunks/index-da9f52e9.js");
var import_database_9d78e7b0 = require("../../chunks/database-9d78e7b0.js");
var import_supabase_js = require("@supabase/supabase-js");
var budget_svelte_svelte_type_style_lang = "";
const css = {
  code: "#budget-range.svelte-18ntzgc{width:50%}",
  map: null
};
async function load({ session }) {
  try {
    const { data: expenses } = await import_database_9d78e7b0.s.from("expense_items").select("*");
    return { props: {} };
  } catch (error) {
    console.error(error);
  }
}
const Budget = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_expenses;
  let { expenses } = $$props;
  $$unsubscribe_expenses = (0, import_index_da9f52e9.a)(expenses, (value) => value);
  let section;
  if ($$props.expenses === void 0 && $$bindings.expenses && expenses !== void 0)
    $$bindings.expenses(expenses);
  $$result.css.add(css);
  $$unsubscribe_expenses();
  return `
${`${``}`}


<div><button type="${"button"}" class="${"btn btn-danger"}">Previous</button>
	<button type="${"button"}" class="${"btn btn-success"}">Next</button>
	${(0, import_index_da9f52e9.e)(section)}
</div>`;
});

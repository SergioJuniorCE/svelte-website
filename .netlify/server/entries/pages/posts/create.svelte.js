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
  default: () => Create
});
module.exports = __toCommonJS(stdin_exports);
var import_index_da9f52e9 = require("../../../chunks/index-da9f52e9.js");
var import_database_9d78e7b0 = require("../../../chunks/database-9d78e7b0.js");
var import_sweetalert2 = require("sweetalert2");
var import_supabase_js = require("@supabase/supabase-js");
const uuid = (prefix) => {
  return prefix + "_" + Math.floor(Math.random() * 1e9) + String(Date.now());
};
const Editor = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let { id = uuid("tinymce-svelte") } = $$props;
  let { inline = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { apiKey = "no-api-key" } = $$props;
  let { channel = "5" } = $$props;
  let { scriptSrc = void 0 } = $$props;
  let { conf = {} } = $$props;
  let { modelEvents = "change input undo redo" } = $$props;
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { cssClass = "tinymce-wrapper" } = $$props;
  let container;
  let element;
  (0, import_index_da9f52e9.f)();
  (0, import_index_da9f52e9.o)(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.apiKey === void 0 && $$bindings.apiKey && apiKey !== void 0)
    $$bindings.apiKey(apiKey);
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  if ($$props.scriptSrc === void 0 && $$bindings.scriptSrc && scriptSrc !== void 0)
    $$bindings.scriptSrc(scriptSrc);
  if ($$props.conf === void 0 && $$bindings.conf && conf !== void 0)
    $$bindings.conf(conf);
  if ($$props.modelEvents === void 0 && $$bindings.modelEvents && modelEvents !== void 0)
    $$bindings.modelEvents(modelEvents);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.cssClass === void 0 && $$bindings.cssClass && cssClass !== void 0)
    $$bindings.cssClass(cssClass);
  return `<div${(0, import_index_da9f52e9.b)("class", cssClass, 0)}${(0, import_index_da9f52e9.b)("this", container, 0)}>${inline ? `<div${(0, import_index_da9f52e9.b)("id", id, 0)}${(0, import_index_da9f52e9.b)("this", element, 0)}></div>` : `<textarea${(0, import_index_da9f52e9.b)("id", id, 0)} style="${"visibility:hidden"}"${(0, import_index_da9f52e9.b)("this", element, 0)}></textarea>`}</div>`;
});
const constants = {
  TINYMCE_APIKEY: "u4v5h09br33aa169dncp40qhb1jsk4th4ww8qrobv1ey6nel",
  TINYMCE_CONFIG: {
    plugins: ["lists", "link", "image"],
    height: "70vh",
    toolbar: "undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | numlist bullist"
  }
};
const CreatePost = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  let title;
  let content;
  let conf = constants.TINYMCE_CONFIG;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"my-3 w-50"}"><label for="${"post-title"}">Title</label>
	<input name="${"post-title"}" type="${"text"}" class="${"form-control"}"${(0, import_index_da9f52e9.b)("value", title, 0)}></div>

<div class="${"my-3"}"><label for="${"description"}">Description</label>
	<textarea name="${"description"}" class="${"form-control"}">${""}</textarea></div>

${(0, import_index_da9f52e9.v)(Editor, "Editor").$$render($$result, {
      apiKey: constants.TINYMCE_APIKEY,
      conf,
      value: content
    }, {
      value: ($$value) => {
        content = $$value;
        $$settled = false;
      }
    }, {})}
<button class="${"btn btn-success"}">Save</button>`;
  } while (!$$settled);
  return $$rendered;
});
const Create = (0, import_index_da9f52e9.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"mt-3"}"><h2>Create post</h2>
	${(0, import_index_da9f52e9.v)(CreatePost, "CreatePost").$$render($$result, {}, {}, {})}</div>`;
});

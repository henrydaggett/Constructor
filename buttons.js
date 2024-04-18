import { primaryPalette } from "./colorPalette.js";

export const buttonJSON = {
  componentName: "Buttons",
  defaultTemplate:
    "<button class='${level} ${size} ${icon}' ${disabled}>${content}</button>",
  selectors: {
    level: "",
    color: "",
    size: "",
    icon: "",
    disabled: "",
    content: "Button",
  },
  controls: [
    {
      name: "Icon",
      category: "feature",
      inputType: "select",
      properties: [
        {
          label: "None",
          default: true,
          selectorValues: {
            icon: "",
            content: "Label",
          },
        },
        {
          label: "Icon-text",
          selectorValues: {
            icon: "btn-icon-text",
            content: "<i class='icon'>info_outline</i> Label",
          },
        },
        {
          label: "Text-icon",
          selectorValues: {
            icon: "btn-text-icon",
            content: "Label <i class='icon'>info_outline</i>",
          },
        },
        {
          label: "Icon only",
          selectorValues: {
            icon: "",
            content: "<i class='icon'>info_outline</i>",
          },
        },
      ],
    },
    {
      name: "Block button",
      category: "feature",
      inputType: "switch",
      properties: [
        {
          selectorValues: {
            block: "btn-block",
          },
        },
      ],
    },
    {
      name: "Purpose",
      category: "style",
      inputType: "select",
      properties: [
        {
          label: "Primary",
          default: true,
          selectorValues: {
            purpose: "btn-${color}",
          },
        },
        {
          label: "Outline",
          selectorValues: {
            purpose: "btn-outline-${color}",
          },
        },
        {
          label: "Default",
          selectorValues: {
            purpose: "btn-default",
          },
        },
        {
          label: "Discreet",
          selectorValues: {
            purpose: "btn-discreet-${color}",
          },
        },
        {
          label: "Flat",
          selectorValues: {
            purpose: "btn-flat-${color}",
          },
        },
        {
          label: "Link",
          selectorValues: {
            purpose: "btn-link",
          },
        },
      ],
    },
    {
      name: "Color",
      category: "style",
      inputType: "select",
      properties: [...primaryPalette],
    },
    {
      name: "Size",
      category: "style",
      inputType: "select",
      properties: [
        {
          label: "SM",
          selectorValues: {
            size: "btn-sm",
          },
        },
        {
          label: "MD",
          default: true,
          selectorValues: {
            size: "btn-md",
          },
        },
        {
          label: "LG",
          selectorValues: {
            size: "btn-lg",
          },
        },
        {
          label: "XL",
          selectorValues: {
            size: "btn-xl",
          },
        },
      ],
    },
    {
      name: "Disabled",
      category: "state",
      inputType: "switch",
      properties: [
        {
          selectorValues: {
            disabled: "disabled",
          },
        },
      ],
    },
  ],
};

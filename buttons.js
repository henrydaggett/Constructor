import { primaryPalette } from "./colors.js";

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
            content: "<i class='icon'>icon</i> Label",
          },
        },
        {
          label: "Text-icon",
          selectorValues: {
            icon: "btn-text-icon",
            content: "Label <i class='icon'>icon</i>",
          },
        },
        {
          label: "Icon only",
          selectorValues: {
            icon: "",
            content: "<i class='icon'>icon</i>",
          },
        },
      ],
    },
    {
      name: "Level",
      category: "style",
      inputType: "select",
      properties: [
        {
          label: "Primary",
          default: true,
          selectorValues: {
            purpose: "btn-primary-${color}",
          },
        },
        {
          label: "Secondary",
          selectorValues: {
            purpose: "btn-secondary-${color}",
          },
        },
        {
          label: "Discreet",
          selectorValues: {
            purpose: "btn-discreet",
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

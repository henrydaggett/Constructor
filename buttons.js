import { primaryPalette } from "./primary-palette";

export const buttonJSON = {
  "componentName": "Buttons",
  "defaultHTML": "<button class='btn ${purpose} ${size} ${icon}' ${disabled}>${content}</button>",
  "selectors": {
    "purpose": "",
    "color": "",
    "size": "",
    "icon": "",
    "disabled": "",
    "content": "Label"
  },
  "controls": [{
    "name": "Icon",
    "type": "feature",
    "properties": [
      {
        "label": "None",
        "default": true,
        "selectorValues": {
          "icon": "",
          "content": "Label"
        }
      },
      {
        "label": "Icon-text",
        "selectorValues": {
          "icon": "btn-icon-text",
          "content": "<i class='icon'>info</i> Label"
        }
      },
      {
        "label": "Text-icon",
        "selectorValues": {
          "icon": "btn-text-icon",
          "content": "Label <i class='icon'>info_outline</i>"
        }
      },
      {
        "label": "Icon only",
        "selectorValues": {
          "icon": "",
          "content": "<i class='icon'>info_outline</i>"
        }
      }
    ]
  },
  {
    "name": "Purpose",
    "type": "style",
    "properties": [
      {
        "label": "Primary",
        "default": true,
        "selectorValues": {
          "purpose": "btn-${color}"
        }
      },
      {
        "label": "Outline",
        "selectorValues": {
          "purpose": "btn-outline-${color}"
        }
      },
      {
        "label": "Default",
        "selectorValues": {
          "purpose": "btn-default"
        }
      },
      {
        "label": "Discreet",
        "selectorValues": {
          "purpose": "btn-discreet-${color}"
        }
      },
      {
        "label": "Flat",
        "selectorValues": {
          "purpose": "btn-flat-${color}"
        }
      },
      {
        "label": "Link",
        "selectorValues": {
          "purpose": "btn-link"
        }
      }
    ]
  },
  {
    "name": "Color",
    "type": "style",
    "properties": { ...primaryPalette }
  },
  {
    "name": "Size",
    "type": "style",
    "properties": [
      {
        "label": "SM",
        "selectorValues": {
          "size": "btn-sm"
        }
      },
      {
        "label": "MD",
        "default": true,
        "selectorValues": {
          "size": "btn-md"
        }
      },
      {
        "label": "LG",
        "selectorValues": {
          "size": "btn-lg"
        }
      },
      {
        "label": "XL",
        "selectorValues": {
          "size": "btn-xl"
        }
      }
    ]
  },
  {
    "name": "Disabled",
    "type": "state",
    "properties": [
      {
        "selectorValues": {
          "disabled": "disabled"
        }
      }
    ]
  }
  ]
}
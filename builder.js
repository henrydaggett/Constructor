// create an index.js file where you import everything then just have one import here
// import { badgeJSON } from './components/badge.js'
// import { cardJSON } from './components/card.js'
// import { notificationJSON } from './components/notification.js'
import { buttonJSON } from "./buttons.js";

// eventually this will depend on the component selected, for now only buttonJSON
const componentJSON = buttonJSON;

const features = componentJSON.controls.filter(
  (object) => object.category === "feature",
);
const styles = componentJSON.controls.filter(
  (object) => object.category === "style",
);
const states = componentJSON.controls.filter(
  (object) => object.category === "state",
);

console.log("features", features);
console.log("styles", styles);
console.log("states", states);

let componentNameHTML = document.getElementById("componentName");
componentNameHTML.innerText = componentJSON.componentName;

// Rebuild this to automatically detect using some IFs
const buildPropertyControls = (controls) => {
  const controlHTML = controls
    .map((control) => {
      if (control.inputType === "switch") {
        const controlName = control.name;
        const selectors = JSON.stringify(control.properties[0].selectorValues);

        const switchHTML = `<div>
            <p>${controlName}</p>
              <input type="checkbox" id="property-${controlName}" data-selector-values="${encodeURI(selectors)}" onchange="getControlValues()">
              <label for="property-${controlName}"></label>
          </div>`;

        return switchHTML;
      } else {
        const controlName = control.name;

        const selectOptions = control.properties
          .map((property) => {
            return `<option value="${property.label}" data-value="${encodeURI(JSON.stringify(property.selectorValues))}" ${"default" in property ? "selected" : ""}>${property.label}</option>`;
          })
          .join("");

        const selectInput = `<select id="property-${controlName}" onchange="getControlValues()">
            ${selectOptions}
        </select>`;

        const selectHTML = `<article>
                <p>${controlName}</p>
              ${selectInput}
          </article>`;

        return selectHTML;
      }
    })
    .join("");

  return controlHTML;
};

let featureControls = document.getElementById("featureControls");
let styleControls = document.getElementById("styleControls");
let stateControls = document.getElementById("stateControls");

if (styles.length !== 0) {
  styleControls.innerHTML = buildPropertyControls(styles);
}
if (features.length !== 0) {
  featureControls.innerHTML = buildPropertyControls(features);
}
if (states.length !== 0) {
  stateControls.innerHTML = buildPropertyControls(states);
}

window.getControlValues = function () {
  let controlsObject = [];

  const defaultTemplate = componentJSON.defaultTemplate;

  const defaultSelectorsOrigin = componentJSON.selectors;
  const defaultSelectors = { ...defaultSelectorsOrigin };

  const loadedControls = document.querySelectorAll(`[id^="property-"]`);

  // this function gets all of the controls/values and decodes/puts them into a string
  loadedControls.forEach((control) => {
    if (control.tagName == "SELECT") {
      controlsObject.push(
        decodeURI(control.options[control.selectedIndex].dataset.value),
      );
    } else if (control.checked == true) {
      controlsObject.push(decodeURI(control.dataset.selectorValues));
    }
  });

  console.log("all controls", controlsObject);

  //not sure how this works but this reduce function formats the JSON correctly from the last function
  const selectorsFromControls = controlsObject.reduce((obj, json) => {
    Object.assign(obj, JSON.parse(json));
    return obj;
  }, {});

  console.log("selectors from controls", selectorsFromControls);

  const selectorsOrigin = Object.assign(
    defaultSelectors,
    selectorsFromControls,
  );
  const selectors = { ...selectorsOrigin };

  // This function recursivley replaces the template strings, as some templates might have nested sections
  function buildPreviewHTML(string) {
    var matched = false;
    string = string.replace(/\$\{(.*?)\}/g, function (match, key) {
      if (match) {
        matched = true;
      }
      const selection = selectors[key];
      return selection;
    });
    if (matched) {
      string = buildPreviewHTML(string);
    }
    return string;
  }

  let previewContainer = document.getElementById("previewContainer");
  previewContainer.innerHTML = buildPreviewHTML(defaultTemplate);
};

getControlValues();

// Get all available variant options for a specific selector
function allSelectorOptions(componentObject, selectorName) {
  return Object.entries(componentObject).reduce(
    (acc, [key, value]) =>
      key === selectorName
        ? acc.concat(value)
        : typeof value === "object"
          ? acc.concat(allSelectorOptions(value, selectorName))
          : acc,
    [],
  );
}

console.log(allSelectorOptions(componentJSON, "purpose"));

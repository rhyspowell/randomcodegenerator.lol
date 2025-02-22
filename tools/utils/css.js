import { getRandomEntry, getRandomInt } from "./helpers";

export default class Css {
  // box-shadow props
  // pseudo stuff

  // font style props
  // font family

  // list-style

  // text-align

  //border style

  static getRandomPositionRule() {
    const positionValues = ["relative", "absolute", "fixed", "sticky"];

    return `position: ${getRandomEntry(positionValues)}`;
  }

  static getRandomDisplayRule() {
    const displayValues = [
      "block",
      "inline-block",
      "inline",
      "flex",
      "grid",
      "inline-grid",
      "inline-flex",
      "flow-root",
    ];

    return `display: ${getRandomEntry(displayValues)}`;
  }

  static getRandomZIndexRule() {
    return `z-index: ${getRandomInt(-1, 999999)}`;
  }

  static getRandomColorProp() {
    const colorProps = [
      "color",
      "background-color",
      "border-color",
      "border-bottom-color",
      "border-top-color",
      "border-left-color",
      "border-right-color",
    ];
    return getRandomEntry(colorProps);
  }

  static getRandomHexCode() {
    return `#${getRandomInt(0, 16777215).toString(16)}`;
  }

  static getRandomUnitProp() {
    const unitProps = [
      "padding",
      "padding-bottom",
      "padding-top",
      "padding-left",
      "padding-right",
      "margin",
      "margin-bottom",
      "margin-top",
      "margin-left",
      "margin-right",
      "line-height",
      "font-size",
      "min-width",
      "width",
      "height",
      "max-width",
      "border-width",
      "border-bottom-width",
      "border-top-width",
      "border-left-width",
      "border-right-width",
    ];
    return getRandomEntry(unitProps);
  }

  static getRandomUnit() {
    const cssUnits = ["px", "rem", "em", "ch", "vw", "vh"];
    return getRandomEntry(cssUnits);
  }

  static getRandomUnitRule() {
    return `${Css.getRandomUnitProp()}: ${getRandomInt(
      0,
      500
    )}${Css.getRandomUnit()}`;
  }

  static getRandomColorRule() {
    return `${Css.getRandomColorProp()}: ${Css.getRandomHexCode()}`;
  }

  static getRandomClassName() {
    // to do
    // add more options
    // sometimes, add a camelCased item
    // sometimes add a --modifier
    const options = [
      "button",
      "input",
      "container",
      "element",
      "tab",
      "nav",
      "class",
      "this",
      "random",
    ];

    return `${getRandomEntry(options)}__${getRandomEntry(options)}`;
  }
}

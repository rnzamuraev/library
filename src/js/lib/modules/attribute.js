import $ from "../core";

$.prototype.addAttribute = function (
  attributeName,
  attributeValue
) {
  for (let i = 0; i < this.length; i++) {
    // if (!this[i].setAttribute) {
    //   continue;
    // }

    this[i].setAttribute(attributeName, attributeValue);
  }

  return this;
};

$.prototype.removeAttribute = function (
  attributeName
  // attributeValue
) {
  for (let i = 0; i < this.length; i++) {
    // if (!this[i].setAttribute) {
    //   continue;
    // }

    this[i].removeAttribute(attributeName);
  }

  return this;
};

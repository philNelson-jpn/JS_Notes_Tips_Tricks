// Check parent elements to see if they have a transform or will change property that will break fixed positioned elements.

// Replace this with a relevant selector.
// If you use a tool that auto-generates classes,
// you can temporarily add an ID and select it
// with '#id'.
const selector = '.help-btn';
function findCulprits(elem) {
  if (!elem) {
    throw new Error(
      'Could not find element with that selector'
    );
  }
  let parent = elem.parentElement;
  while (parent) {
    const {
      transform,
      willChange
    } = getComputedStyle(parent);
    if (transform !== 'none' || willChange === 'transform') {
      console.warn(
        '🚨 Found a culprit! 🚨\n',
        parent,
        { transform, willChange }
      );
    }
    parent = parent.parentElement;
  }
}
findCulprits(document.querySelector(selector));
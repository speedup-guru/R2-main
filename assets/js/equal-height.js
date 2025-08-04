// function applyEqualHeight(childClass, parentClass = null, cssVarName = 'child-height') {
//   const updateHeights = () => {
//     const elements = document.querySelectorAll(`.${childClass}`);
//     if (!elements.length) return;

//     // Reset heights
//     elements.forEach((el) => el.style.height = 'auto');

//     const maxHeight = Math.max(...Array.from(elements).map(el => el.offsetHeight));

//     elements.forEach((el) => {
//       if (parentClass) {
//         const parent = el.closest(`.${parentClass}`);
//         if (parent) {
//           parent.style.setProperty(`--${cssVarName}`, `${maxHeight}px`);
//         } else {
//           el.style.height = `${maxHeight}px`;
//         }
//       } else {
//         el.style.height = `${maxHeight}px`;
//       }
//     });
//   };
//   updateHeights();
//   document.addEventListener('DOMContentLoaded', updateHeights);
//   window.addEventListener('load', updateHeights);
//   window.addEventListener('resize', updateHeights);
// }
//   applyEqualHeight('bundle__container', 'bundle__banner');
//   applyEqualHeight('get-qure-content', 'get-qure-box');
//   applyEqualHeight('qure__serum-child', 'qure__serum-parent', 'serum__height');
//   applyEqualHeight('qure__eqBox-child', 'qure__eqBox-parent', 'eq__height');
//   applyEqualHeight('cp__compare-content', 'compare_listRow', 'cp__height');







function applyEqualHeight(childClass, parentClass = null, cssVarName = 'child-height') {
  const updateHeights = () => {
    let parents;

    // If parentClass is given, scope height equalization within each parent
    if (parentClass) {
      parents = document.querySelectorAll(`.${parentClass}`);

      parents.forEach((parent) => {
        const children = parent.querySelectorAll(`.${childClass}`);
        if (!children.length) return;

        // Reset heights
        children.forEach((el) => el.style.height = 'auto');

        const maxHeight = Math.max(...Array.from(children).map(el => el.offsetHeight));

        // Set height or CSS variable
        children.forEach((el) => {
          if (cssVarName) {
            parent.style.setProperty(`--${cssVarName}`, `${maxHeight}px`);
          } else {
            el.style.height = `${maxHeight}px`;
          }
        });
      });

    } else {
      // No parentClass: apply globally but scoped by document, not mixed sections
      const elements = document.querySelectorAll(`.${childClass}`);
      if (!elements.length) return;

      elements.forEach(el => el.style.height = 'auto');
      const maxHeight = Math.max(...Array.from(elements).map(el => el.offsetHeight));
      elements.forEach(el => el.style.height = `${maxHeight}px`);
    }
  };

  updateHeights();
  document.addEventListener('DOMContentLoaded', updateHeights);
  window.addEventListener('load', updateHeights);
  window.addEventListener('resize', updateHeights);
}

applyEqualHeight('bundle__container', 'bundle__banner');
applyEqualHeight('get-qure-content', 'get-qure-box');
applyEqualHeight('qure__serum-child', 'qure__serum-parent', 'serum__height');
applyEqualHeight('qure__eqBox-child', 'qure__eqBox-parent', 'eq__height');
applyEqualHeight('cp__compare-content', 'compare_listRow', 'cp__height');


const container = document.querySelector('.cp__heading-box');
const ptRow = document.querySelector('.compare_listRow');
if (container) {
  const itemCount = container.querySelectorAll('.cp__heading-item').length;
  ptRow.style.setProperty('--item-count', itemCount);
}
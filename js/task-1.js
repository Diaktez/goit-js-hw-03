// строка- масив(split); масив-строка join - нижний регистр .toLowerCase
function slugify(title) {
  let slug = title.split(' ').join('-').toLowerCase();
  return slug;
}
console.log(slugify('Arrays for beginners'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
// cycle if / li-else
// function slugify(title) {
//   let holeResult = '';
//   for (let hole = 0; hole < title.length; hole++) {
//     let holyHole = title[hole];
//     if (holyHole === ' ') {
//       holeResult = holeResult + '-';
//     } else {
//       holeResult = holeResult + holyHole.toLowerCase();
//     }
//   }
//   return holeResult;
// }
// console.log(slugify('Arrays for beginners'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

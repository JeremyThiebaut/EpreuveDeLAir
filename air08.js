/**
 * Mélanger deux tableaux triés

Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
	# your algo
	return (new_array)
}

Exemples d’utilisation :
$> ruby exo.rb 10 20 30 fusion 15 25 35
10 15 20 25 30 35

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/****************
 *   Formatting  *
 ****************/
// Assembles the two arrays into a single sorted array
const sortTwoArray = (array1, array2) => {
  const newArray = new Array();

  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
    for (let y = 0; y < array2.length; y++) {
      if (array1[i] < array2[y] && array1[i + 1] > array2[y]) {
        newArray.push(array2[y]);
      } else if (array1[i] === array2[y]) {
        newArray.push(array2[y]);
      }
    }
  }
  return newArray;
};

/********************
 *      Parsing      *
 ********************/
// Create two new array using the separator "fusion"
const parsing = () => {
  let strings = process.argv;
  strings.splice(0, 2);
  if (!strings.includes("fusion")) {
    return error();
  }
  const arrays = strings.join(" ").split(" fusion ");
  const array1 = arrays[0].split(" ");
  const array2 = arrays[1].split(" ");
  return sortTwoArray(array1, array2);
};

/**********************
 *   Error management  *
 **********************/
// Return errors
const error = () => {
  console.log("error");
  process.exit();
};

/********************
 *        Main       *
 ********************/
// Get the result
const result = parsing();

/****************
 *   Formatting  *
 ****************/
// Formats the result and displays it in console
const displayArray = (result) => {
  let newString = "";
  for (let i = 0; i < result.length; i++) {
    newString += `${result[i]} `;
  }
  console.log(newString);
};

/********************
 *       Result      *
 ********************/
// Execute the function
displayArray(result);

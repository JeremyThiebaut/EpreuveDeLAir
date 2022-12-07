/**
 * Rotation vers la gauche

Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.

Utilisez une fonction de ce genre (selon votre langage) :
ma_rotation(array) {
	# votre algorithme
	return (new_array)
}

Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
Albert, Thérèse, Benoit, Michel

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/****************
 *   Formatting  *
 ****************/
// Changes the layout of the array and puts the first element of the array as the last argument
const turnLeft = (array) => {
  const nameTurned = new Array();
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      return error();
    }
    if (i + 1 === array.length) {
      nameTurned.push(array[0]);
    } else {
      nameTurned.push(array[i + 1]);
    }
  }

  return nameTurned;
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
 *      Parsing      *
 ********************/
// Send the names in array to the function
const parsing = () => {
  const array = process.argv;
  array.splice(0, 2);
  if (array.length < 2) {
    return error();
  } else {
    return turnLeft(array);
  }
};

/****************
 *   Formatting  *
 ****************/
// Formats the result and displays it in console
const displayArray = (result) => {
  let newString = "";
  for (let i = 0; i < result.length - 1; i++) {
    newString += `${result[i]}, `;
  }
  newString += `${result[result.length - 1]}`;
  console.log(newString);
};

/********************
 *        Main       *
 ********************/
// Get the result
const result = parsing();

/********************
 *       Result      *
 ********************/
// Execute the function
displayArray(result);

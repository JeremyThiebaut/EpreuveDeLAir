/**
 * Insertion dans un tableau trié
 
Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_insert(array, new_element) {
	# your algo
	return (new_array)
}

Exemples d’utilisation :
$> ruby exo.rb 1 3 4 2
1 2 3 4

$> ruby exo.rb 10 20 30 40 50 60 70 90 33
10 20 30 33 40 50 60 70 90

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
// Compares the element to be sorted with the array and returns the result
const sortedArray = (array, newElement) => {
  const newArray = new Array();
  for (let i = 0; i < array.length - 1; i++) {
    if (isNaN(array[i])) {
      return error();
    }
    if (array[i] > newElement && !array[i - 1]) {
      newArray.push(newElement);
      newArray.push(array[i]);
    } else if (array[i] < newElement && array[i + 1] > newElement) {
      newArray.push(array[i]);
      newArray.push(newElement);
    } else if (array[i] < newElement && !array[i + 2]) {
      newArray.push(array[i]);
      newArray.push(newElement);
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

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
// Retrieves an array of elements and returns it as well as its element to sort
const parsing = () => {
  const array = process.argv;
  array.splice(0, 2);
  if (array.length < 2) {
    return error();
  } else {
    if (isNaN(array[array.length - 1])) {
      return error();
    } else {
      const newElement = array[array.length - 1];
      return sortedArray(array, newElement);
    }
  }
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

/**
 * Le roi des tris

Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_quick_sort(array) {
	# votre algorithme
	return (new_array)
}

Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6

Afficher error et quitter le programme en cas de problèmes d’arguments.

Wikipedia vous présentera une belle description de cet algorithme de tri.
 */

/****************
 *   Formatting  *
 ****************/
// Uses the sort algorithm and returns everything once it is sorted
const quickSort = (array) => {
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const premier = [];
  const dernier = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (isNaN(array[i]) || isNaN(array[i + 1])) {
      return error();
    }
    if (Number(array[i]) < Number(pivot)) {
      premier.push(array[i]);
    } else {
      dernier.push(array[i]);
    }
  }

  if (premier.length > 0 && dernier.length > 0) {
    return [...quickSort(premier), pivot, ...quickSort(dernier)];
  } else if (premier.length > 0) {
    return [...quickSort(premier), pivot];
  } else {
    return [pivot, ...quickSort(dernier)];
  }
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
// Retrieve the elements sent and give them to the function
const parsing = () => {
  const array = process.argv;
  array.splice(0, 2);
  if (array < 0) {
    return error();
  } else {
    return quickSort(array);
  }
};

/****************
 *   Formatting  *
 ****************/
// Formats the result and displays it in console
const displayArray = (result) => {
  let newString = "";
  for (let i = 0; i < result.length - 1; i++) {
    newString += `${result[i]} `;
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

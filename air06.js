/**
 * Contrôle de pass sanitaire

Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, string) {
	# votre algorithme
	return (nouvel_array_de_strings)
}

Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
Michel

$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
Michel, Thérèse, Benoit

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
// Takes an array and compares it to a string. if the element is included in the string, it will be added in an array
const sanitaryPass = (arrayOfString, string) => {
  const newArrayOfString = new Array();
  const lastArrayOfString = new Array();

  for (let i = 0; i < arrayOfString.length - 1; i++) {
    for (let y = 0; y < arrayOfString[i].length; y++) {
      if (arrayOfString[i][y].toLowerCase() === string.toLowerCase()) {
        newArrayOfString.push(arrayOfString[i]);
      }
    }
  }

  for (let x = 0; x < arrayOfString.length - 1; x++) {
    let test = true;
    for (let z = 0; z < newArrayOfString.length; z++) {
      if (newArrayOfString[z] === arrayOfString[x]) {
        test = !test;
      }
    }
    if (test) {
      lastArrayOfString.push(arrayOfString[x]);
    }
  }

  return lastArrayOfString;
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
// Retrieve an array along with the separator and return it as a function
const parsing = () => {
  const arrayOfString = process.argv;
  arrayOfString.splice(0, 2);
  if (arrayOfString < 2) {
    return error();
  } else {
    const string = arrayOfString[arrayOfString.length - 1];
    return sanitaryPass(arrayOfString, string);
  }
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

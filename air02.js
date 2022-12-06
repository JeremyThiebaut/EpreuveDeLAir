/**
 * Concat

Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, separateur) {
	# votre algorithme
	return (string)
}

Exemples d’utilisation :
$> python exo.py “je” “teste” “des” “trucs” “ “
Je teste des trucs

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
// Formats a new string using the separator and all array elements
const concatString = (arg, separator) => {
  let newString = "";
  for (let i = 0; i < arg.length - 1; i++) {
    newString += arg[i];
    if (i !== arg.length - 2) {
      newString += separator;
    }
  }
  return newString;
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
// Get all the arguments and the separator and return them
const parsing = () => {
  const arg = process.argv;
  const separator = arg[arg.length - 1];
  arg.splice(0, 2);
  if (arg.length < 2) {
    return error();
  } else {
    return concatString(arg, separator);
  }
};

/****************
 *   Formatting  *
 ****************/
// Formats the result and displays it in console
const displayArray = (result) => {
  console.log(result);
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

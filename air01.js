/**
 * Split en fonction

Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}

Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles” “la”
Crevette magique dans 
 mer des étoiles

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
// Uses the string and uses the separator get as argument and returns an array
const splitArg = (string, spliter) => {
  return string.split(spliter);
};

/********************
 *      Parsing      *
 ********************/
// Retrieves the good part of the string as well as the separators
const parsing = () => {
  const arg = process.argv;
  arg.splice(0, 2);
  if (arg.length != 2) {
    return error();
  } else {
    return splitArg(arg[0], arg[1]);
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

/****************
 *   Formatting  *
 ****************/
// Formats the result and displays it in console
const displayArray = (result) => {
  let newString = "";
  for (let i = 0; i < result.length - 1; i++) {
    newString += `${result[i]}\n`;
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

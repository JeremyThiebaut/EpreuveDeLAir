/**
 * Split

Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

Votre programme devra utiliser une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}

Exemples d’utilisation :
$> python exo.py “Bonjour les gars”
Bonjour
les
gars

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
// get the string and format it with a set of separators
const split = (str, separator) => {
  const newArray = str.split(separator);
  return newArray;
};

/**********************
 *   Error management  *
 **********************/
// return errors
const error = () => {
  console.log("error");
  process.exit();
};

/********************
 *      Parsing      *
 ********************/
// retrieves the good part of the string as well as the separators
const parsing = () => {
  const str = process.argv;
  const separator = /(?:[,\s_]+)/;
  str.splice(0, 2);
  if (str.length != 1 || !isNaN(str[0])) {
    return error();
  }
  return split(str[0], separator);
};

/****************
 *   Formatting  *
 ****************/
// formats the result and displays it in console
const displayArray = (result) => {
  let newString = "";
  for (let i = 0; i < result.length - 1; i++) {
    newString += `${result[i]}\n`;
  }
  newString += result[result.length - 1];
  console.log(newString);
};

/********************
 *        Main       *
 ********************/
// get the result
const result = parsing();

/********************
 *       Result      *
 ********************/
// execute the function
displayArray(result);

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
const split = (str, sep) => {
  const newArray = str.split(sep);
  return newArray;
};

/**********************
 *   Error management  *
 **********************/
const error = () => {
  console.log("error");
  process.exit();
};

/********************
 *      Parsing      *
 ********************/
const parsing = () => {
  const str = process.argv;
  str.splice(0, 2);
  if (str.length != 1 || !isNaN(str[0])) {
    return error();
  }
  return split(str[0], " ");
};

/****************
 *   Formatting  *
 ****************/
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
const result = parsing();

/********************
 *       Result      *
 ********************/
displayArray(result);

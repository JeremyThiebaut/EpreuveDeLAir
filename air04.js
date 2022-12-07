/**
 * Un seul à la fois
 
Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.

Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
// Retrieves the character string and removes adjacent duplicates
const singleLetter = (arg) => {
  const newString = [];
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] !== arg[i + 1]) {
      newString.push(arg[i]);
    }
  }
  const goodString = newString.join("");
  return goodString;
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
// Get the elements and give them to the function
const parsing = () => {
  const arg = process.argv;
  arg.splice(0, 2);
  if (arg.length != 1) {
    return error();
  } else {
    return singleLetter(arg[0]);
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

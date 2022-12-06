/**
 * Chercher l’intrus

Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.

Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5

$> python exo.py bonjour monsieur bonjour
monsieur

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
// Retrieves all the elements of the array and creates two new sorted arrays and returns the desired array of elements
const checkPair = (arg) => {
  let goodElement = [];
  let badElement = [];
  for (let i = 0; i < arg.length; i++) {
    for (let y = 0; y < arg.length; y++) {
      if (i !== y) {
        if (arg[i] === arg[y]) {
          if (!goodElement.includes(arg[i])) {
            goodElement.push(arg[i]);
          }
        }
      }
    }
  }

  arg.map((element) => {
    if (!goodElement.includes(element)) {
      badElement.push(element);
    }
  });

  return badElement;
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
  for (let i = 0; i < result.length; i++) {
    newString += `${result[i]} `;
  }
  console.log(newString);
};

/********************
 *      Parsing      *
 ********************/
// Get the elements and give them to the function
const parsing = () => {
  const arg = process.argv;
  arg.splice(0, 2);
  if (arg.length < 2) {
    return error();
  } else {
    return checkPair(arg);
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

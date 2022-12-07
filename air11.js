/**
 * Afficher une pyramide

Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.

Exemples d’utilisation :
$> ruby exo.rb O 5
    O
   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/****************
 *   Formatting  *
 ****************/
// Increase the number of characters and decrease the number of spaces then return the result
const pyramid = (string, stage) => {
  const pyramid = new Array();

  let count = 1;
  for (let i = 0; i < stage; i++) {
    let char = "";
    for (let y = 0; y < count; y++) {
      char += string;
    }

    newCount = count / 2;
    let space = "";
    for (let z = stage; z > newCount + 1; z--) {
      space += " ";
    }

    let fullString = space + char + space;
    count = count + 2;
    pyramid.push(fullString);
  }

  return pyramid;
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
// Get the character and the line number and give it to the function
const parsing = () => {
  const info = process.argv;
  info.splice(0, 2);
  if (
    info.length != 2 ||
    !isNaN(info[0]) ||
    isNaN(info[1]) ||
    info[0].length != 1
  ) {
    return error();
  } else {
    const string = info[0];
    const stage = info[1];
    return pyramid(string, stage);
  }
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

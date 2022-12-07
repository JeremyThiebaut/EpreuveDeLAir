/**
 * Afficher le contenu

Créez un programme qui affiche le contenu d’un fichier donné en argument.

Exemples d’utilisation :
$> cat a.txt
Je danse le mia
$> ruby exo.rb “a.txt”
Je danse le mia

Afficher error et quitter le programme en cas de problèmes d’arguments ou de fichier inaccessible.
 */

/****************
 *   Formatting  *
 ****************/
// uses the "readFileSync" module which asks for the file to open as well as the URL Encode
const oppenFile = (file, fs) => {
  return fs.readFileSync(file, "utf8");
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
// Get the name of the file and pass it to the function with the "fs" module
const parsing = () => {
  const file = process.argv;
  file.splice(0, 2);
  if (file.length != 1) {
    return error();
  } else {
    const fs = require("fs"); // to read a file
    return oppenFile(file[0], fs);
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

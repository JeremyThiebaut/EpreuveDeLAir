/**
 * Air : ok
 * 
Créez un programme qui célèbre votre victoire.

Exemples d’utilisation :
$> python exo.py
J’ai terminé l’Épreuve de l’Air et c’était [].
$>

Note : [] est à remplacer par un adjectif de votre choix (facile ?)
 */

/********************
 *     Functions     *
 ********************/
const celebration = (str) => {
  return `J'ai terminé l'Épreuve de l'Eau et c'était ${str}.`;
};

/**********************
 *   Error management  *
 **********************/
const error = () => {
  return 'Veuillez entrer un argument. (ex: facile. difficile. "Je ne sais pas trop".)';
};

/********************
 *      Parsing      *
 ********************/
const parsing = () => {
  const str = process.argv;
  str.splice(0, 2);
  if (str.length != 1) {
    return error();
  }
  return celebration(str);
};

/****************
 *   Formatting  *
 ****************/
const displayArray = (result) => {
  console.log(result);
};

/********************
 *        Main       *
 ********************/
const result = parsing();

/********************
 *       Result      *
 ********************/
displayArray(result);

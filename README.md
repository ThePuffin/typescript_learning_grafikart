# typescript_learning_grafikart

pour compiler, on utilise "tsc nomdufichier.ts" ou "tsc nomdufichier.tsx"

tsc --help : voir l'ensemble des commandes
tsc --w : recompile le fichier que l'on a modifie
tsc --pretty : pour afficher les erreurs de facon correct dans la console.

on peut définir le type de la variable (par exemple) ou si ce n'est pas fait, cela se fera automatiquement. Du coup, un number ne peut devenir un string;

si une fonction ne retourne rien, on utilise void
si on ne sait pas ce que retourne une fonction on met any

il est possible de préciser un retour de type callback

il est possible d'avoir plusieurs types : "number | string | ..."

# Objets trouvés

## La maquette

D'abort j'ai réalisé une maquette du projet sur penpot.app : [lien](https://design.penpot.app/#/view?file-id=921945d0-8932-8162-8006-20f93888ddad&page-id=921945d0-8932-8162-8006-20f93888ddae&section=interactions&index=0&share-id=921945d0-8932-8162-8006-210819e689bb)

## AlpineJS

Pour faire du JS on utilise le framework AlpineJS : https://alpinejs.dev/

Dans la partie head du fichier index.html il faut insérer le code 

```js
<script src="//unpkg.com/alpinejs" defer></script>
```

Alpinejs devient actif dans les blocs (div) contenant l'attribut x-data.


## Styles et entête

On crée un fichier style.css qui est intégré à la page htlm. Ce style va contenir toutes les informations de mise en forme (couleur, position, taille...)

Toute la page utilise une font qui ressemble un peu à celle de la page internet de l'institut. On utilise Monda. Voici à quoi ressemble le fichier CSS pour le moment :

```css
@import url('https://fonts.googleapis.com/css2?family=Monda:wght@400..700&display=swap');
:root {
  color: #59432f;
  font-family: 'monda';
}
```

Toutes les pages contiennent le logo de Genech. On insert une balise image <img src="nom du fichier" alt="description de l'image">

Le fichier logo.png est téléchargé dans le répertoire qui contient notre fichier html.


## Les pages....

L'affichage des pages est dynamique, pour cela on va avoir besoin de faire de javascript. Grace à alpinejs c'est relativement simple.

On a besoin d'afficher 4 pages différentes : 

- welcome
- found
- found-detail
- search
- search-list

La page "welcome" c'est la page d'atterrissage (landing page en anglais). La propriété x-data contient un "objet" javascript... pour l'instant notre objet contient juste la "propriété" page (variable à l'intérieur de l'objet) dans laquelle on met la valeur 'welcome'.

```html
<script src="https://unpkg.com/alpinejs" defer></script>
<div x-data:"{page:'welcome'}">
    <div x-show="page=='welcome'">
        ceci c'est la première page
    </div>
    <div x-show="page=='found'||page=='search'">
        ceci c'est la deuxième page
    </div>
    <div x-show="page=='found-detail'">
        ceci c'est la page avec le formulaire
    </div>
    <div x-show="page=='search-list'">
        ceci c'est la page avec la liste des objets trouvés
    </div>
</div>
```

## Boutons j'ai trouvé et je cherche

Les deux boutons sont centrées horizontalement et ils sont au milieu de la page, on les mets dans un <div class="page1-bloc text-center">. Dans le fichier style.css on définit la classe text-center qui va pouvoir être réutilisée. Le page1-bloc sert à définir la marge supérieur pour placer correctement les boutons.

Les deux boutons sont sur deux lignes, donc on met chaque bouton dans la div. Pour la couleur, la taille... on utilise une classe page1-btn. Le deuxième div a une classe pour définir la marge (espace) par rapport au premier. On crée un classe `margin-wide` qui pourra être réutilisée plus tard si nécessaire.

Maintenant il faut gérer le javascript : quand on clique sur un bouton on doit changer de page... Le premier bouton modifier notre variable pour mettre page='found'. Le second met page='search'.


```html
<div class="text-center page1-bloc">
    <div>
        <button class="page1-btn" @click="page='found'">J'ai trouvé...</button>
    </div>
    <div>
        <button class="page1-btn margin-wide" @click="page='search'">Je cherche...</button>
    </div>
</div>
```

Et voilà... la première page est terminée.

## Page 2

Le texte de la page 2 change en fonction de quel bouton on a cliqué. Pour cela on utilise une x-text avec un opérateur ternaire de la forme `(condition) ? oui : non` (les parenthèses sont optionnelles). Si on est sur la page 'found' le text inséré par alpinejs dans la balise <span> est 'trouvé' sinon c'est 'perdu'.

```html
J'ai <span x-text="(page=='found') ? 'trouvé' : 'perdu'"></span>...
```

Pour le reste il s'agit d'une liste de bouton. Leurs mise en forme avec du CSS est un peu compliqué : il s'agit d'espacer les boutons sur toute la largeur de la page. On utilise une balise div avec le CSS 'display: flex' et le contenu a répartir avec 'flex: auto'.

Pour les icones, on utilise la librairie bootstrap-icon que l'on importe dans le fichier css avec 
```css
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.4/font/bootstrap-icons.min.css");
```

Lorsque l'on clique sur un bouton, on modifie la valeur de la variable `item` ainsi que la valeur de page en fonction de la valeur actuelle (d'où l'opérateur ternaire).

## Page 3

La page 3 affiche un formulaire avec 4 inputs (champs de saisie). Grace à aplinejs et l'attribut x-model on associe le contenu du champ avec une variable. Au passage on utilise un nouveau x-data pour déclarer de nouvelles variables.

Le formulaire contient aussi 3 inputs de type "radio" (boutons ronds). Une petite subtilité est ajoutée pour que, lorsqu'on clique sur le input "contact" on modifie la variable `dest` qui défini quel bouton radio est cliqué.

Lorsqu'on clique sur le bouton "envoyer" on met la variable `sent=true`, cela cache le formulaire et affiche "merci !" à la place. On affiche aussi le contenu du formulaire... au lieu de cela il faudrait envoyer le contenu du formulaire à un serveur pour qu'il l'enregistre.

Côté CSS on introduit une nouveauté : la propriété `display: inline-bloc`. Les `div` représentent un paragraphe dont on peut spécifier la hauteur. Les `span` représentent plûtot un mot, une petite boite à l'intérieur d'un div. Un div (ou un span) avec une propriété CSS inline-bloc se comporte comme un div (une boite paragraphe) à l'intérieur d'un flux, comme un span.

Autre nouveauté, il y a un `unset` car le CSS est un peu plus compliqué qu'il n'y parait : il y a un mécanisme d'héritage. Si on défini une propriété color à un div, par exemple, les span à l'intérieur récupèrent la même couleur. On pourrait croire que pour connaitre la règle qui s'applique à un élément c'est la dernière qui est définie. Là encore, c'est un peu plus compliqué. Il existe des règles pour calculer quelle est la priorité des attribut CSS.


## Page 4

Encore une nouveauté important. Jusque là on a utilisé x-show pour afficher les pages en fonction de la variable `page`. Cette fois on utilise x-if dans une balise template. Pourquoi ? En fait, même si l'élément est caché avec un x-show, il est créé au moment du chargement de la page. Ici, on va charger la liste des éléments à afficher avec :

```html
    <div x-init="lists=getItems(item)" class="page4">
```

On appelle la fonction getItems() qu'on a défini dans un fichier `script.js` et on met le résultat dans la variable liste. On passe le type d'item à charger (si on a sélectionné sac dans la page 2, dans la page 4 on n'affiche que les items de type 'sac'). Cela veut dire qu'on doit construire la page 4 que lorque l'on sort de la page 2. C'est pour cela qu'on utilise x-if.

Autre nouveauté : la variable `lists` contient un tableau d'élément. Pour parcourir le tableau, on utilise `x-for`. Le bloc à l'intérieur du x-for sera répété autant de fois qu'il y a des éléments dans le tableau. Chaque élément est placé à l'intérieur d'une nouvelle variable (appelée `found` ici).

Côté css, seule nouveauté : `.page4 .item > div` ça veut dire "tous les divs, à l'intérieur d'un objet avec la class item, juste en dessous. Le inline-bloc évite le retour à la ligne.

# Code Source - 8P Avancé (8 bugs)

## Variables à créer

- `nombre1` (pour tous les sprites)
- `nombre2` (pour tous les sprites)
- `operateur` (pour tous les sprites)
- `affichage` (pour tous les sprites)
- `resultat` (pour tous les sprites)
- `en_attente` (pour tous les sprites)

## Sprite: Calculatrice

### Script d'affichage

```
quand le drapeau vert est cliqué
répéter indéfiniment
    dire [affichage]
fin
```

## Sprite: Bouton Numérique (0-9)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
si [en_attente] = [vrai] alors
    mettre [affichage] à []
    mettre [en_attente] à [faux]
fin

si [affichage] = [0] et [chiffre] ≠ [.] alors
    mettre [affichage] à [chiffre]
sinon
    ajouter [chiffre] à [affichage]  // BUG 1: Ne vérifie pas les points décimaux multiples
fin
```

## Sprite: Bouton Point Décimal (.)

### Script

```
quand ce sprite est cliqué
ajouter [.] à [affichage]  // BUG 1: Permet plusieurs points décimaux
```

## Sprite: Bouton Opérateur (+)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
si [operateur] ≠ [] et [en_attente] = [faux] alors
    // Calculer le résultat précédent
    mettre [nombre2] à [affichage]
    // (code de calcul ici - voir bouton égal)
fin

mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [en_attente] à [vrai]  // BUG 2: Logique peut être incorrecte selon contexte
```

**Note :** Créer des sprites similaires pour -, ×, ÷.

## Sprite: Bouton Égal (=)

### Script (AVEC BUGS)

```
quand ce sprite est cliqué
mettre [nombre2] à [affichage]

si [operateur] = [+] alors
    mettre [resultat] à ([nombre1] - [nombre2])  // BUG 3: Addition inversée
sinon
    si [operateur] = [-] alors
        mettre [resultat] à ([nombre1] + [nombre2])  // BUG 4: Soustraction inversée
    sinon
        si [operateur] = [×] alors
            mettre [resultat] à ([nombre1] / [nombre2])  // BUG 5: Multiplication divise
        sinon
            si [operateur] = [÷] alors
                mettre [resultat] à ([nombre1] × [nombre2])  // BUG 6: Division multiplie
                // BUG 7: Pas de vérification division par zéro
            fin
        fin
    fin
fin

mettre [affichage] à [resultat]
mettre [operateur] à []
mettre [en_attente] à [vrai]
```

## Sprite: Bouton Clear (C)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
mettre [affichage] à [0]  // BUG 8: Devrait être []
mettre [nombre1] à [0]
mettre [nombre2] à [0]
mettre [operateur] à []
mettre [en_attente] à [faux]
```

## Tests à effectuer

1. **Test 1 : Addition**
   - 5 + 3 = 8 (donnera 2)

2. **Test 2 : Soustraction**
   - 10 - 4 = 6 (donnera 14)

3. **Test 3 : Multiplication**
   - 6 × 7 = 42 (donnera ~0.86)

4. **Test 4 : Division**
   - 20 ÷ 4 = 5 (donnera 80)

5. **Test 5 : Division par zéro**
   - 10 ÷ 0 = Erreur (donnera 0 - devrait gérer l'erreur)

6. **Test 6 : Points décimaux**
   - 3.14 (peut créer 3.14.5)

7. **Test 7 : Clear**
   - Devrait vider l'affichage (donnera "0")

8. **Test 8 : Chaînes d'opérations**
   - 2 + 3 + 4 (tester la gestion d'état)

## Corrections

1. **BUG 1 - Points décimaux :**
   ```
   si <non <[affichage] contient [.]?>> alors
       ajouter [.] à [affichage]
   fin
   ```

2. **BUG 2 - En attente :**
   - Vérifier la logique selon le contexte d'utilisation

3. **BUG 3 - Addition :**
   - Remplacer `-` par `+`

4. **BUG 4 - Soustraction :**
   - Remplacer `+` par `-`

5. **BUG 5 - Multiplication :**
   - Remplacer `/` par `×`

6. **BUG 6 - Division :**
   - Remplacer `×` par `/`

7. **BUG 7 - Division par zéro :**
   ```
   si [operateur] = [÷] alors
       si [nombre2] = [0] alors
           mettre [affichage] à [Erreur]
       sinon
           mettre [resultat] à ([nombre1] / [nombre2])
       fin
   fin
   ```

8. **BUG 8 - Clear :**
   - Remplacer `mettre [affichage] à [0]` par `mettre [affichage] à []`

## Notes

- 8 bugs de complexité variable
- Introduction à la gestion d'état
- Vérifications nécessaires (division par zéro, points décimaux)


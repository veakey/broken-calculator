# Code Source - 9P Expert (9 bugs)

## Variables à créer

- `nombre1` (pour tous les sprites)
- `nombre2` (pour tous les sprites)
- `operateur` (pour tous les sprites)
- `affichage` (pour tous les sprites)
- `resultat` (pour tous les sprites)
- `en_attente` (pour tous les sprites)
- `mode_decimale` (pour tous les sprites)

## Sprite: Calculatrice

### Script d'affichage (AVEC BUG)

```
quand le drapeau vert est cliqué
répéter indéfiniment
    si <(longueur de [affichage]) > [10]> alors
        dire (caractères 1 à 10 de [affichage])  // BUG 9: Limitation incorrecte
    sinon
        dire [affichage]
    fin
fin
```

## Sprite: Bouton Numérique (0-9)

### Script (AVEC BUGS)

```
quand ce sprite est cliqué
si [en_attente] = [vrai] alors
    mettre [affichage] à []
    mettre [en_attente] à [faux]
    mettre [mode_decimale] à [faux]
fin

si [chiffre] = [.] alors
    si [mode_decimale] = [vrai] alors
        // Ne rien faire - BUG 1: Devrait empêcher mais ne le fait pas toujours
    sinon
        mettre [mode_decimale] à [vrai]
        ajouter [.] à [affichage]
    fin
sinon
    si [affichage] = [0] alors
        mettre [affichage] à [chiffre]
    sinon
        ajouter [chiffre] à [affichage]
    fin
fin
```

## Sprite: Bouton Point Décimal (.)

### Script

```
quand ce sprite est cliqué
si [mode_decimale] = [vrai] alors
    // Ne rien faire
sinon
    mettre [mode_decimale] à [vrai]
    ajouter [.] à [affichage]  // BUG 1: Vérification peut être contournée
fin
```

## Sprite: Bouton Opérateur (+)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
si [operateur] ≠ [] et [en_attente] = [faux] alors
    // Calculer résultat précédent
    // (code de calcul - voir bouton égal)
fin

mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [en_attente] à [vrai]
mettre [mode_decimale] à [faux]  // BUG 2: Devrait être réinitialisé mais logique peut être incorrecte
```

**Note :** Créer des sprites similaires pour -, ×, ÷.

## Sprite: Bouton Égal (=)

### Script (AVEC BUGS COMPLEXES)

```
quand ce sprite est cliqué
si [operateur] = [] alors
    arrêter ce script  // OK
fin

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
                si [nombre2] = [0] alors
                    mettre [affichage] à [Erreur]  // OK
                sinon
                    mettre [resultat] à ([nombre1] × [nombre2])  // BUG 6: Division multiplie
                fin
            fin
        fin
    fin
fin

// BUG 7: Ne gère pas correctement les nombres décimaux très longs
mettre [affichage] à [resultat]
mettre [operateur] à []
mettre [en_attente] à [vrai]
mettre [mode_decimale] à [faux]
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
mettre [mode_decimale] à [faux]
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
   - 10 ÷ 0 = Erreur (OK)

6. **Test 6 : Points décimaux multiples**
   - 3.14.5 (devrait être bloqué)

7. **Test 7 : Nombres décimaux longs**
   - 3.14159265359 (gestion de l'affichage)

8. **Test 8 : Clear**
   - Devrait vider l'affichage (donnera "0")

9. **Test 9 : Affichage long**
   - 123456789012345 (devrait être limité)

## Corrections

1. **BUG 1 - Points décimaux :**
   - Améliorer la vérification dans les deux scripts (bouton numérique et point décimal)

2. **BUG 2 - Mode décimale :**
   - Vérifier la réinitialisation correcte

3. **BUG 3 - Addition :**
   - Remplacer `-` par `+`

4. **BUG 4 - Soustraction :**
   - Remplacer `+` par `-`

5. **BUG 5 - Multiplication :**
   - Remplacer `/` par `×`

6. **BUG 6 - Division :**
   - Remplacer `×` par `/`

7. **BUG 7 - Décimaux longs :**
   - Ajouter arrondi ou limitation :
   ```
   mettre [resultat] à (arrondir ([resultat] × [100]) / [100])
   ```

8. **BUG 8 - Clear :**
   - Remplacer `mettre [affichage] à [0]` par `mettre [affichage] à []`

9. **BUG 9 - Limitation affichage :**
   - Améliorer la logique de limitation :
   ```
   si <(longueur de [affichage]) > [12]> alors
       dire (caractères 1 à 12 de [affichage])...
   ```

## Notes

- 9 bugs subtils et complexes
- Gestion d'état avancée
- Vérifications multiples nécessaires
- Gestion des cas limites


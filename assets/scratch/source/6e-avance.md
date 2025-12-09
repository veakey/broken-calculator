# Code Source - 6e Avancé (12 bugs avec fonctions avancées)

## Variables à créer

- `nombre1` (pour tous les sprites)
- `nombre2` (pour tous les sprites)
- `operateur` (pour tous les sprites)
- `affichage` (pour tous les sprites)
- `resultat` (pour tous les sprites)

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
si [affichage] = [0] et [chiffre] ≠ [.] alors
    mettre [affichage] à [chiffre]
sinon
    ajouter [chiffre] à [affichage]  // BUG 6: Permet points décimaux multiples
fin
```

## Sprite: Bouton Opérateur (+)

### Script

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [affichage] à []
```

**Note :** Créer des sprites similaires pour -, ×, ÷.

## Sprite: Bouton Égal (=)

### Script (AVEC BUGS)

```
quand ce sprite est cliqué
mettre [nombre2] à [affichage]

si [operateur] = [+] alors
    mettre [resultat] à ([nombre1] - [nombre2])  // BUG 1: Addition inversée
sinon
    si [operateur] = [-] alors
        mettre [resultat] à ([nombre1] + [nombre2])  // BUG 2: Soustraction inversée
    sinon
        si [operateur] = [×] alors
            mettre [resultat] à ([nombre1] / [nombre2])  // BUG 3: Multiplication divise
        sinon
            si [operateur] = [÷] alors
                mettre [resultat] à ([nombre1] × [nombre2])  // BUG 4: Division multiplie
                // BUG 5: Pas de vérification division par zéro
            fin
        fin
    fin
fin

mettre [affichage] à [resultat]
```

## Sprite: Bouton Pourcentage (%)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
si [operateur] ≠ [] alors
    mettre [nombre2] à [affichage]
    // BUG 8: Pourcentage multiplie au lieu de calculer le pourcentage
    mettre [resultat] à ([nombre1] × [nombre2])  // Devrait être: nombre1 × (nombre2 / 100)
    mettre [affichage] à [resultat]
    mettre [operateur] à []
sinon
    // Calculer le pourcentage du nombre affiché
    mettre [resultat] à ([affichage] × [100])  // BUG 8: Devrait diviser par 100
    mettre [affichage] à [resultat]
fin
```

## Sprite: Bouton Sinus (sin)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
// Convertir degrés en radians
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])
// BUG 9: Utilise cos au lieu de sin
mettre [resultat] à ([cos] de ([nombre2]))  // Devrait être: sin de (nombre2)
mettre [affichage] à [resultat]
```

## Sprite: Bouton Cosinus (cos)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
// Convertir degrés en radians
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])
// BUG 10: Utilise tan au lieu de cos
mettre [resultat] à ([tan] de ([nombre2]))  // Devrait être: cos de (nombre2)
mettre [affichage] à [resultat]
```

## Sprite: Bouton Tangente (tan)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
// Convertir degrés en radians
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])
// BUG 11: Utilise sin au lieu de tan
mettre [resultat] à ([sin] de ([nombre2]))  // Devrait être: tan de (nombre2)
mettre [affichage] à [resultat]
```

## Sprite: Bouton Hypoténuse (hyp)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
// BUG 12: Additionne au lieu de calculer l'hypoténuse
mettre [resultat] à ([affichage] + [affichage])  // Devrait être: sqrt(nombre1² + nombre2²)
mettre [affichage] à [resultat]
```

## Sprite: Bouton Clear (C)

### Script (AVEC BUG)

```
quand ce sprite est cliqué
mettre [affichage] à [0]  // BUG 7: Devrait être []
mettre [nombre1] à [0]
mettre [nombre2] à [0]
mettre [operateur] à []
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
   - 10 ÷ 0 = Erreur (donnera 0 - devrait gérer)

6. **Test 6 : Points décimaux**
   - 3.14.5 (devrait être bloqué)

7. **Test 7 : Clear**
   - Devrait vider l'affichage (donnera "0")

8. **Test 8 : Pourcentage**
   - 50 % de 20 = 10 (donnera 1000)

9. **Test 9 : Sinus**
   - sin(30°) ≈ 0.5 (donnera cos(30°) ≈ 0.866)

10. **Test 10 : Cosinus**
    - cos(60°) = 0.5 (donnera tan(60°) ≈ 1.732)

11. **Test 11 : Tangente**
    - tan(45°) = 1 (donnera sin(45°) ≈ 0.707)

12. **Test 12 : Hypoténuse**
    - hyp(3) devrait calculer l'hypoténuse (donnera 6)

## Corrections

1. **BUG 1 - Addition :**
   - Remplacer `-` par `+`

2. **BUG 2 - Soustraction :**
   - Remplacer `+` par `-`

3. **BUG 3 - Multiplication :**
   - Remplacer `/` par `×`

4. **BUG 4 - Division :**
   - Remplacer `×` par `/`

5. **BUG 5 - Division par zéro :**
   ```
   si [operateur] = [÷] alors
       si [nombre2] = [0] alors
           mettre [affichage] à [Erreur]
       sinon
           mettre [resultat] à ([nombre1] / [nombre2])
       fin
   fin
   ```

6. **BUG 6 - Points décimaux :**
   - Ajouter vérification avant d'ajouter le point

7. **BUG 7 - Clear :**
   - Remplacer `mettre [affichage] à [0]` par `mettre [affichage] à []`

8. **BUG 8 - Pourcentage :**
   - Remplacer `nombre1 × nombre2` par `nombre1 × (nombre2 / 100)`

9. **BUG 9 - Sinus :**
   - Remplacer `cos` par `sin`

10. **BUG 10 - Cosinus :**
    - Remplacer `tan` par `cos`

11. **BUG 11 - Tangente :**
    - Remplacer `sin` par `tan`

12. **BUG 12 - Hypoténuse :**
    - Remplacer l'addition par le calcul de l'hypoténuse :
    ```
    mettre [resultat] à ([sqrt] de (([nombre1] × [nombre1]) + ([nombre2] × [nombre2])))
    ```

## Notes

- 12 bugs de complexité variable (7 de base + 5 fonctions avancées)
- Introduction à la gestion d'erreurs
- Méthodologie de débogage complète
- Fonctions mathématiques avancées (trigonométrie, pourcentage, hypoténuse)


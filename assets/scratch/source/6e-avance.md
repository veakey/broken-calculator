# Code Source - 6e Avancé (7 bugs)

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

## Notes

- 7 bugs de complexité variable
- Introduction à la gestion d'erreurs
- Méthodologie de débogage complète


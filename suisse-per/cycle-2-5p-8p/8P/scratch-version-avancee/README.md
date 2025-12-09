# Calculatrice Cassée - Scratch Version Avancée (8P)

## Instructions pour créer le projet Scratch

### Étape 1 : Structure avancée

Créer une calculatrice avec :
- Sprite calculatrice avec écran d'affichage
- Boutons numériques (0-9) et point décimal
- Boutons opérateurs (+, -, ×, ÷)
- Bouton égal (=)
- Bouton Clear (C)
- **Boutons mathématiques avancés** : sin, cos, tan, hyp, %
- Variables : `nombre1`, `nombre2`, `operateur`, `affichage`, `resultat`, `en_attente`

### Étape 2 : Scripts complets avec bugs

#### Script pour les boutons numériques (AVEC BUGS)

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

#### Script pour les opérateurs (AVEC BUG)

```
quand ce sprite est cliqué
si [operateur] ≠ [] alors
    // Calculer le résultat précédent
    // (code de calcul ici)
fin

mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [en_attente] à [vrai]  // BUG 2: Devrait être vrai mais logique incorrecte
```

#### Script pour le bouton égal (AVEC BUGS)

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

#### Script pour Bouton Pourcentage % (AVEC BUG)

```
quand ce sprite est cliqué
si [operateur] ≠ [] alors
    mettre [nombre2] à [affichage]
    // BUG 9: Pourcentage multiplie au lieu de calculer le pourcentage
    mettre [resultat] à ([nombre1] × [nombre2])  // Devrait être: nombre1 × (nombre2 / 100)
    mettre [affichage] à [resultat]
    mettre [operateur] à []
    mettre [en_attente] à [vrai]
sinon
    mettre [resultat] à ([affichage] × [100])  // BUG 9: Devrait diviser par 100
    mettre [affichage] à [resultat]
fin
```

#### Script pour Bouton Sinus sin (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])  // Convertir en radians
// BUG 10: Utilise cos au lieu de sin
mettre [resultat] à ([cos] de ([nombre2]))  // Devrait être: sin
mettre [affichage] à [resultat]
mettre [en_attente] à [vrai]
```

#### Script pour Bouton Cosinus cos (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])  // Convertir en radians
// BUG 11: Utilise tan au lieu de cos
mettre [resultat] à ([tan] de ([nombre2]))  // Devrait être: cos
mettre [affichage] à [resultat]
mettre [en_attente] à [vrai]
```

#### Script pour Bouton Tangente tan (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])  // Convertir en radians
// BUG 12: Utilise sin au lieu de tan
mettre [resultat] à ([sin] de ([nombre2]))  // Devrait être: tan
mettre [affichage] à [resultat]
mettre [en_attente] à [vrai]
```

#### Script pour Bouton Hypoténuse hyp (AVEC BUG)

```
quand ce sprite est cliqué
// BUG 13: Additionne au lieu de calculer l'hypoténuse
mettre [resultat] à ([affichage] + [affichage])  // Devrait être: sqrt(nombre1² + nombre2²)
mettre [affichage] à [resultat]
mettre [en_attente] à [vrai]
```

#### Script pour Clear (AVEC BUG)

```
quand ce sprite est cliqué
mettre [affichage] à [0]  // BUG 8: Devrait être []
mettre [nombre1] à [0]
mettre [nombre2] à [0]
mettre [operateur] à []
mettre [en_attente] à [faux]
```

### Étape 3 : Script d'affichage

```
quand le drapeau vert est cliqué
répéter indéfiniment
    dire [affichage]  // Afficher sur le sprite
fin
```

## Bugs à introduire

1. **BUG 1** : Permet plusieurs points décimaux
2. **BUG 2** : Logique incorrecte pour `en_attente`
3. **BUG 3** : Addition soustrait
4. **BUG 4** : Soustraction additionne
5. **BUG 5** : Multiplication divise
6. **BUG 6** : Division multiplie
7. **BUG 7** : Pas de vérification division par zéro
8. **BUG 8** : Clear met "0" au lieu de vider
9. **BUG 9** : Pourcentage multiplie au lieu de calculer le pourcentage
10. **BUG 10** : Sinus utilise cos au lieu de sin
11. **BUG 11** : Cosinus utilise tan au lieu de cos
12. **BUG 12** : Tangente utilise sin au lieu de tan
13. **BUG 13** : Hypoténuse additionne au lieu de calculer l'hypoténuse

## Tests à effectuer

- 5 + 3 = 8 (donnera 2)
- 10 - 4 = 6 (donnera 14)
- 6 × 7 = 42 (donnera ~0.86)
- 20 ÷ 4 = 5 (donnera 80)
- 10 ÷ 0 = Erreur (donnera 0 - devrait gérer l'erreur)
- 3.14 (peut créer 3.14.5)
- Clear devrait vider l'affichage
- **Pourcentage** : 50 % de 20 = 10 (donnera 1000)
- **Sinus** : sin(30°) ≈ 0.5 (donnera cos(30°) ≈ 0.866)
- **Cosinus** : cos(60°) = 0.5 (donnera tan(60°) ≈ 1.732)
- **Tangente** : tan(45°) = 1 (donnera sin(45°) ≈ 0.707)
- **Hypoténuse** : hyp(3) devrait calculer l'hypoténuse (donnera 6)

## Corrections à apporter

1. Ajouter vérification pour points décimaux multiples
2. Corriger la logique de `en_attente`
3. Corriger toutes les opérations (+, -, ×, ÷)
4. Ajouter vérification division par zéro
5. Corriger Clear pour vider l'affichage

## Notes pour l'enseignant

Cette version contient **13 bugs de complexité variable** (8 de base + 5 fonctions avancées). Les élèves devront :
- Analyser chaque fonctionnalité
- Identifier tous les types d'erreurs
- Corriger méthodiquement
- Tester après chaque correction
- Comprendre les fonctions trigonométriques (sin, cos, tan) et la conversion degrés/radians
- Comprendre le calcul de pourcentage
- Comprendre le calcul d'hypoténuse


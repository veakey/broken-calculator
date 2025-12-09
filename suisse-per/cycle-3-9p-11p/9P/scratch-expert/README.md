# Calculatrice Cassée - Scratch Version Expert (9P)

## Instructions pour créer le projet Scratch

### Étape 1 : Structure experte

Créer une calculatrice avancée avec :
- Interface complète avec sprites personnalisés
- Gestion d'état avancée
- Variables multiples : `nombre1`, `nombre2`, `operateur`, `affichage`, `resultat`, `en_attente`, `mode_decimale`, `historique`
- **Boutons mathématiques avancés** : sin, cos, tan, hyp, %

### Étape 2 : Scripts avec bugs subtils

#### Script pour les boutons numériques (AVEC BUGS)

```
quand ce sprite est cliqué
si [en_attente] = [vrai] alors
    mettre [affichage] à []
    mettre [en_attente] à [faux]
    mettre [mode_decimale] à [faux]
fin

si [chiffre] = [.] alors
    si [mode_decimale] = [vrai] alors
        // Ne rien faire - BUG 1: Devrait empêcher mais ne le fait pas
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

#### Script pour les opérateurs (AVEC BUGS)

```
quand ce sprite est cliqué
si [operateur] ≠ [] et [en_attente] = [faux] alors
    // Calculer résultat précédent
    // (code de calcul)
fin

mettre [nombre1] à [affichage]
mettre [operateur] à [+]
mettre [en_attente] à [vrai]
mettre [mode_decimale] à [faux]  // BUG 2: Devrait être réinitialisé
```

#### Script pour le bouton égal (AVEC BUGS COMPLEXES)

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

// BUG 7: Ne gère pas correctement les nombres décimaux longs
mettre [affichage] à [resultat]
mettre [operateur] à []
mettre [en_attente] à [vrai]
mettre [mode_decimale] à [faux]
```

#### Script pour Bouton Pourcentage % (AVEC BUG)

```
quand ce sprite est cliqué
si [operateur] ≠ [] alors
    mettre [nombre2] à [affichage]
    // BUG 10: Pourcentage multiplie au lieu de calculer le pourcentage
    mettre [resultat] à ([nombre1] × [nombre2])  // Devrait être: nombre1 × (nombre2 / 100)
    mettre [affichage] à [resultat]
    mettre [operateur] à []
    mettre [en_attente] à [vrai]
sinon
    mettre [resultat] à ([affichage] × [100])  // BUG 10: Devrait diviser par 100
    mettre [affichage] à [resultat]
fin
```

#### Script pour Bouton Sinus sin (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])  // Convertir en radians
// BUG 11: Utilise cos au lieu de sin
mettre [resultat] à ([cos] de ([nombre2]))  // Devrait être: sin
mettre [affichage] à [resultat]
mettre [en_attente] à [vrai]
```

#### Script pour Bouton Cosinus cos (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])  // Convertir en radians
// BUG 12: Utilise tan au lieu de cos
mettre [resultat] à ([tan] de ([nombre2]))  // Devrait être: cos
mettre [affichage] à [resultat]
mettre [en_attente] à [vrai]
```

#### Script pour Bouton Tangente tan (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])  // Convertir en radians
// BUG 13: Utilise sin au lieu de tan
mettre [resultat] à ([sin] de ([nombre2]))  // Devrait être: tan
mettre [affichage] à [resultat]
mettre [en_attente] à [vrai]
```

#### Script pour Bouton Hypoténuse hyp (AVEC BUG)

```
quand ce sprite est cliqué
// BUG 14: Additionne au lieu de calculer l'hypoténuse
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
mettre [mode_decimale] à [faux]
```

### Étape 3 : Scripts d'affichage avancés

```
quand le drapeau vert est cliqué
répéter indéfiniment
    si longueur de [affichage] > [10] alors
        dire (caractères 1 à 10 de [affichage])  // BUG 9: Ne limite pas correctement
    sinon
        dire [affichage]
    fin
fin
```

## Bugs à introduire

1. **BUG 1** : Permet plusieurs points décimaux (vérification incomplète)
2. **BUG 2** : `mode_decimale` pas réinitialisé correctement
3. **BUG 3** : Addition soustrait
4. **BUG 4** : Soustraction additionne
5. **BUG 5** : Multiplication divise
6. **BUG 6** : Division multiplie
7. **BUG 7** : Gestion incorrecte des décimaux longs
8. **BUG 8** : Clear met "0" au lieu de vider
9. **BUG 9** : Limitation d'affichage incorrecte
10. **BUG 10** : Pourcentage multiplie au lieu de calculer le pourcentage
11. **BUG 11** : Sinus utilise cos au lieu de sin
12. **BUG 12** : Cosinus utilise tan au lieu de cos
13. **BUG 13** : Tangente utilise sin au lieu de tan
14. **BUG 14** : Hypoténuse additionne au lieu de calculer l'hypoténuse

## Tests à effectuer

- Toutes les opérations de base (+, -, ×, ÷)
- Nombres décimaux (3.14, 2.5, etc.)
- Points décimaux multiples (devrait être bloqué)
- Division par zéro (devrait afficher "Erreur")
- Nombres très longs
- Chaînes d'opérations
- Clear
- **Pourcentage** : 50 % de 20 = 10 (donnera 1000)
- **Sinus** : sin(30°) ≈ 0.5 (donnera cos(30°) ≈ 0.866)
- **Cosinus** : cos(60°) = 0.5 (donnera tan(60°) ≈ 1.732)
- **Tangente** : tan(45°) = 1 (donnera sin(45°) ≈ 0.707)
- **Hypoténuse** : hyp(3) devrait calculer l'hypoténuse (donnera 6)

## Corrections à apporter

1. Corriger la vérification des points décimaux
2. Réinitialiser correctement `mode_decimale`
3. Corriger toutes les opérations
4. Améliorer la gestion des décimaux
5. Corriger Clear
6. Améliorer la limitation d'affichage

## Notes pour l'enseignant

Cette version experte contient **14 bugs subtils et complexes** (9 de base + 5 fonctions avancées). Les élèves devront :
- Comprendre la gestion d'état
- Analyser les interactions entre variables
- Corriger méthodiquement chaque bug
- Tester exhaustivement
- Comprendre les fonctions trigonométriques (sin, cos, tan)
- Comprendre le calcul de pourcentage
- Comprendre le calcul d'hypoténuse


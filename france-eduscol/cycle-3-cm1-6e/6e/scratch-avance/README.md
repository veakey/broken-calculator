# Calculatrice Cassée - Scratch Avancé (6e)

## Instructions pour créer le projet Scratch

### Structure avancée

Calculatrice complète avec gestion d'état et toutes les fonctionnalités.

**Boutons mathématiques avancés** : sin, cos, tan, hyp, %

### Scripts complets avec bugs

#### Bouton égal (AVEC BUGS COMPLETS)

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

#### Boutons numériques (AVEC BUGS)

```
quand ce sprite est cliqué
si [affichage] = [0] et [chiffre] ≠ [.] alors
    mettre [affichage] à [chiffre]
sinon
    ajouter [chiffre] à [affichage]  // BUG 6: Permet points décimaux multiples
fin
```

#### Bouton Pourcentage % (AVEC BUG)

```
quand ce sprite est cliqué
si [operateur] ≠ [] alors
    mettre [nombre2] à [affichage]
    // BUG 8: Pourcentage multiplie au lieu de calculer le pourcentage
    mettre [resultat] à ([nombre1] × [nombre2])  // Devrait être: nombre1 × (nombre2 / 100)
    mettre [affichage] à [resultat]
    mettre [operateur] à []
sinon
    mettre [resultat] à ([affichage] × [100])  // BUG 8: Devrait diviser par 100
    mettre [affichage] à [resultat]
fin
```

#### Bouton Sinus sin (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])  // Convertir en radians
// BUG 9: Utilise cos au lieu de sin
mettre [resultat] à ([cos] de ([nombre2]))  // Devrait être: sin
mettre [affichage] à [resultat]
```

#### Bouton Cosinus cos (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])  // Convertir en radians
// BUG 10: Utilise tan au lieu de cos
mettre [resultat] à ([tan] de ([nombre2]))  // Devrait être: cos
mettre [affichage] à [resultat]
```

#### Bouton Tangente tan (AVEC BUG)

```
quand ce sprite est cliqué
mettre [nombre1] à [affichage]
mettre [nombre2] à (([nombre1] × [3.14159]) / [180])  // Convertir en radians
// BUG 11: Utilise sin au lieu de tan
mettre [resultat] à ([sin] de ([nombre2]))  // Devrait être: tan
mettre [affichage] à [resultat]
```

#### Bouton Hypoténuse hyp (AVEC BUG)

```
quand ce sprite est cliqué
// BUG 12: Additionne au lieu de calculer l'hypoténuse
mettre [resultat] à ([affichage] + [affichage])  // Devrait être: sqrt(nombre1² + nombre2²)
mettre [affichage] à [resultat]
```

#### Bouton Clear (AVEC BUG)

```
quand ce sprite est cliqué
mettre [affichage] à [0]  // BUG 7: Devrait être []
mettre [nombre1] à [0]
mettre [nombre2] à [0]
mettre [operateur] à []
```

## Bugs à introduire

1. **BUG 1** : Addition soustrait
2. **BUG 2** : Soustraction additionne
3. **BUG 3** : Multiplication divise
4. **BUG 4** : Division multiplie
5. **BUG 5** : Pas de vérification division par zéro
6. **BUG 6** : Permet plusieurs points décimaux
7. **BUG 7** : Clear met "0" au lieu de vider
8. **BUG 8** : Pourcentage multiplie au lieu de calculer le pourcentage
9. **BUG 9** : Sinus utilise cos au lieu de sin
10. **BUG 10** : Cosinus utilise tan au lieu de cos
11. **BUG 11** : Tangente utilise sin au lieu de tan
12. **BUG 12** : Hypoténuse additionne au lieu de calculer l'hypoténuse

## Tests

- Toutes les opérations de base (+, -, ×, ÷)
- Division par zéro (devrait gérer l'erreur)
- Nombres décimaux
- Points décimaux multiples
- Clear
- **Pourcentage** : 50 % de 20 = 10 (donnera 1000)
- **Sinus** : sin(30°) ≈ 0.5 (donnera cos(30°) ≈ 0.866)
- **Cosinus** : cos(60°) = 0.5 (donnera tan(60°) ≈ 1.732)
- **Tangente** : tan(45°) = 1 (donnera sin(45°) ≈ 0.707)
- **Hypoténuse** : hyp(3) devrait calculer l'hypoténuse (donnera 6)

## Corrections

1. Corriger toutes les opérations
2. Ajouter vérification division par zéro
3. Empêcher points décimaux multiples
4. Corriger Clear

## Notes pour l'enseignant

Version avancée avec **12 bugs** (7 de base + 5 fonctions avancées) pour développer une méthodologie de débogage complète. Les élèves devront également comprendre :
- Les fonctions trigonométriques (sin, cos, tan) et la conversion degrés/radians
- Le calcul de pourcentage
- Le calcul d'hypoténuse


# Notes on Description Logic

## References

The following notes are taken from the following video.

  * [Reasoning on data](https://www.youtube.com/watch?v=vHJ9IC9h6fw): Conference by Marie-Laure Mugnier at Unilog 2018.

## Terminology

Slide 29; Around 45 minutes.

The vocabulary of description logic is not the same as the vocabulary of semantic web.

  * Ontology => TBox - Terminology Box
  * Fact base => ABox - Assertional Box

In DL, we have:

  * Concepts: that corresponds to an assertion with 1 free variable
    * For instance `Human(x)`
  * Role: that correspondonds to an assertion with 2 free variables
    * For instance `Father(x, y)`

The basic constructs of on ontology (almost the ontology meta-grammar) can be expressed in DL like that:

  * C1 &sube; C2 &forall; &rArr;  

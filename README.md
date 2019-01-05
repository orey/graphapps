# GraphApps

## What is GraphApps?

GraphApps is a reserach project that aims to use graphs and graph transformations in the context of software engineering.

## First period (2013-2018): Graph-oriented programming and technical debt

### Pages

You can read the following pages:

  * [First article on graph oriented programming](https://orey.github.io/papers/graph/first-article/)
  * [Slides from the ICGT 2018 conference](https://orey.github.io/papers/graph/staf-icgt2018/)


### Important points

  * Object-oriented and RDBMS-based software engineering generates a lot of couplings (structural and temporal). Those couplings are, for us, at the center of the technical debt problem.
  * Another programming model called graph-oriented programming can enable to limit the technical debt to its smallest (semantic level).
  * This programming model is using graph tranformations to model business logic (at least the one that is not encoded into the graph).
  
The way we represent knowledge in current software engineering is largely sub-optimal, and we believe that the technical debt is a problem created by bad engineering practices and not attached to the business semantics.

This way of seeing things will explain the research directions.

### Other notes

  * [A DSL to check the graph topology](DSL-for-graph-topology-checks.md)
  * [Graph transformation applicability](graph-transformation-applicability.md)

### Basic graph transformations (2018-now)

As graph transformations can be composed easily, the idea is to build a set of basic graph transformations.

The paper [Basic graph transformations](basic-graph-transformations.md) is linked to a Python (ongoing) project available in a [github repo named "graph"](https://github.com/orey/graph).

See also the ongoing documentation page directly [in the repo](https://github.com/orey/graph/blob/master/graph_transformations/README.md).


## Second period(2018-now): Semantic transformations

### Semantic data conversion

The article [Arguments for semantic use in data conversion](arguments_semantic.md "arguments") gathers the various reasons why using a semantic approach can be interesting.

### Basic semantic graph transformations

The paper [Basic semantic graph transformations](basic-semantic-graph-transformations.md) aims at defining a set of basic graph transformations. It should be a specification for the continuation of the development of the [rdftools](https://github.com/orey/rdftools) repo.

### RDF design patterns

Also ongoing: it is quite difficult to properly design in the context of RDF/RDFS (without even talking Owl). This ongoing paper [RDF design patterns](rdf-design-patterns.md) is a first attempt.

# License

Those documents are available under the [GNU FDL](GNU_FDL.md) license.

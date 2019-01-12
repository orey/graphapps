# GraphApps

![GraphApps.io](logo-graphapps-io.png "GraphApps.io")

## 1 What is GraphApps?

GraphApps is a research project that aims to use graphs and graph transformations in the context of software engineering, like application building or data migration.


## 2 First period (2013-2018): Graph-oriented programming and technical debt

### 2.1 Pages

You can read the following pages:

  * [First article on graph oriented programming](https://orey.github.io/papers/graph/first-article/)
  * [Slides from the ICGT 2018 conference](https://orey.github.io/papers/graph/staf-icgt2018/)

### 2.2 Important points

  * Object-oriented and RDBMS-based software engineering generates a lot of couplings (structural and temporal). Those couplings are, for us, at the center of the technical debt problem.
  * Another programming model called graph-oriented programming enables to limit the technical debt to its minimal expression (semantic level). This programming model uses graph databases.
  * This programming model is using graph transformations to model business logic, on top of encoding knowledge in the graph topology.
  
The way we represent knowledge in current software engineering is *largely sub-optimal*, and we believe that the technical debt is a problem created by bad engineering practices and tools (OOP/RDBMS) and not attached to the business semantics.


## 3 Second period (2018-now): Exploring (semantic) graph transformations for data conversion

### 3.1 Basic graph transformations

As graph transformations can be composed easily, the idea is to build a set of basic graph transformations as a foundation for applications.

The paper [Basic graph transformations](basic-graph-transformations.md) is linked to a Python (ongoing) project available in a [github repo named "graph"](https://github.com/orey/graph).

See also the ongoing documentation page directly [in the repo](https://github.com/orey/graph/blob/master/graph_transformations/README.md).

### 3.2 Semantic data conversion 

The article [Arguments for semantic use in data conversion](arguments_semantic.md "arguments") gathers the various reasons why using a semantic approach can be interesting.

The paper [Basic semantic graph transformations](basic-semantic-graph-transformations.md) aims at defining a set of basic graph transformations. It is a kind of specification for the continuation of the development of the [rdftools](https://github.com/orey/rdftools) repo.

The paper [Graphs and semantic data in industry](industry-data.md) talks about the opportunity of using RDF approaches to cenvert efficiently industrial data.


## 4. Other notes linked to graphs

  * Using graph transformations at the grammar level, the case of RDBMS schema transformation for re-semantization: [Grammar graph transformations](grammar-graph-transformation.md)
  * [A DSL to check the graph topology](DSL-for-graph-topology-checks.md)
  * [Graph transformation applicability](graph-transformation-applicability.md)

Also ongoing: it is quite difficult to properly design in the context of RDF/RDFS (without even talking Owl). This ongoing paper [RDF design patterns](rdf-design-patterns.md) is a first attempt.

----

Those documents are available under the [GNU FDL](GNU_FDL.md) license.


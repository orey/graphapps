# Arguments

## Basic arguments

Arguments for using the semantic graph technology to complex data conversion:

  * It is relatively easy to turn whatever table into sets of triples.
  * The semantic of each column must be named and reused as a "semantic dictionary" between the multiples sources. This step is much easier to accomplish than in standard data lakes where the complete big definitions must be set in one single movement.
  * The design actions, that were at the heart of the problems in GraphApps, are less important and can be limited to a correct understanding of the data.
  * The semantic databases (For instance AllegroGraph or Apache Jena TDB/Fuseki) are working in an incremental way: if a triple already exists, the attempt to import it again will do nothing, which "by design" eliminates redundant information.
  * Sparql enables easy graph transformations, first of all to visualize data (Gruff on AllegroGraph is a good triplestore visualization tool), and then to transform them.

## Core issue

The core issue is the treatment of time because many data have complex life-cycles.

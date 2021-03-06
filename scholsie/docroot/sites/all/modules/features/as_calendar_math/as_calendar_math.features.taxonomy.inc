<?php

/**
 * @file
 * as_calendar_math.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function as_calendar_math_taxonomy_default_vocabularies() {
  return array(
    'event_series' => array(
      'name' => 'Event Series',
      'machine_name' => 'event_series',
      'description' => 'This is for sorting and labeling events that show up in various series.',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}

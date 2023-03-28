/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query LaunchDetails($id: ID!) {\n    launch(id: $id) {\n      mission_id\n      mission_name\n      launch_date_utc\n      launch_success\n      details\n      launch_site {\n        site_name\n      }\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      links {\n        flickr_images\n      }\n    }\n  }\n": types.LaunchDetailsDocument,
    "\n  query LaunchList {\n    launches {\n      id\n      mission_name\n      launch_date_utc\n    }\n  }\n": types.LaunchListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LaunchDetails($id: ID!) {\n    launch(id: $id) {\n      mission_id\n      mission_name\n      launch_date_utc\n      launch_success\n      details\n      launch_site {\n        site_name\n      }\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      links {\n        flickr_images\n      }\n    }\n  }\n"): (typeof documents)["\n  query LaunchDetails($id: ID!) {\n    launch(id: $id) {\n      mission_id\n      mission_name\n      launch_date_utc\n      launch_success\n      details\n      launch_site {\n        site_name\n      }\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      links {\n        flickr_images\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LaunchList {\n    launches {\n      id\n      mission_name\n      launch_date_utc\n    }\n  }\n"): (typeof documents)["\n  query LaunchList {\n    launches {\n      id\n      mission_name\n      launch_date_utc\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
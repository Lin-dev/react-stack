/**
 * react-stack react-stack
 *
 * Copyright © 2016. JonirRings.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GraphQLSchema } from 'graphql';
import query from './queries';

const schema = new GraphQLSchema({ query });
export default schema;

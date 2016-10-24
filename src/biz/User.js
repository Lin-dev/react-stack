/**
 * react-stack react-stack
 *
 * Copyright © 2016. JonirRings.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


export function findOrCreate({ github, name, avatar }) {
  return { github, name, avatar };
}
export function remove({ id }, cb) {
  return cb({ id });
}

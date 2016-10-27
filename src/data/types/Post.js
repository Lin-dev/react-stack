/**
 * react-stack react-stack
 *
 * Copyright © 2016. JonirRings.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLID as IDType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
} from 'graphql';
import DateType from './custom/Date';
import {
  connectionDefinitions, connectionArgs,
  connectionFromPromisedArray,
} from 'graphql-relay';
import User from './User';
import { nodeInterface } from './Interface';
import { CommentConnection } from './Comment';
import { findUserById } from '../../biz/User';
import { getCommentsByPostId } from '../../biz/Comment';

const PostType = new ObjectType({
  name: 'Post',
  description: 'A Post is an article with comments',
  fields: () => ({
    id: {
      type: new NonNull(IDType),
      description: ' the id of a post in DB',
    },
    author: {
      type: new NonNull(User),
      description: 'who wrote the post',
      resolve: post => findUserById(post.author),
    },
    title: {
      type: new NonNull(StringType),
      description: 'the title of post',
    },
    content: {
      type: new NonNull(StringType),
      description: 'the content of post',
    },
    comments: {
      type: CommentConnection,
      args: connectionArgs,
      resolve: (post, args) =>
          connectionFromPromisedArray(getCommentsByPostId(post.id), args),
      // TODO modify to meet mongoose promise
      description: 'the comments on the posts',
    },
    visit: {
      type: new NonNull(IntType),
      description: 'the times the post been visited',
    },
    created: {
      type: new NonNull(DateType),
      description: 'the time post was wrote',
    },
    updated: {
      type: new NonNull(DateType),
      description: 'the time post was modified',
    },
  }),
  interfaces: [nodeInterface],
  // interfaces: [Post],
});
const {
  connectionType: PostConnection,
  edgeType: PostEdge,
} = connectionDefinitions({
  name: 'Post',
  nodeType: PostType,
});
export { PostConnection, PostEdge };
export default PostType;

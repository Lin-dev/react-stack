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
  GraphQLBoolean as BooleanType,
  GraphQLNonNull as NonNull,
  GraphQLID as IDType,
} from 'graphql';
import DateType from './custom/Date';
import { connectionDefinitions, connectionArgs, connectionFromPromisedArray } from 'graphql-relay';
import { nodeInterface } from './Interface';
import { PostConnection } from './Post';
import { CommentConnection } from './Comment';
import { getPostsByAuthorId } from '../../biz/Post';
import { getCommentsByAuthorId } from '../../biz/Comment';

// TODO to confirm the auth token of each and its auth info structure

const UserType = new ObjectType({
  name: 'User',
  description: 'A user is who bond its social account',
  fields: () => ({
    id: {
      type: new NonNull(IDType),
      description: ' the id of a user in DB',
    },
    qq: {
      type: StringType,
      description: 'QQ',
    },
    weibo: {
      type: StringType,
      description: 'Sina Weibo',
    },
    facebook: {
      type: StringType,
      description: 'Facebook',
    },
    twitter: {
      type: StringType,
      description: 'Twitter',
    },
    google: {
      type: StringType,
      description: 'Google',
    },
    github: {
      type: StringType,
      description: 'GitHub',
    },
    avatar: {
      type: StringType,
      description: 'the avatar address of an user',
    },
    name: {
      type: new NonNull(StringType),
      description: 'a user\'s nickname chosen from social networks above',
    },
    posts: {
      type: PostConnection,
      description: 'posts the user has wrote',
      args: connectionArgs,
      resolve: (user, args) =>
        connectionFromPromisedArray(getPostsByAuthorId(user.id), args),
    },
    comments: {
      type: CommentConnection,
      description: 'comments the user has wrote',
      args: connectionArgs,
      resolve: (user, args) =>
        connectionFromPromisedArray(getCommentsByAuthorId(user.id), args),
    },
    publisher: {
      type: new NonNull(BooleanType),
      description: 'whether the user can publish post',
    },
    created: {
      type: new NonNull(DateType),
      description: 'the time the user was created',
    },
    updated: {
      type: new NonNull(DateType),
      description: 'the time the user info was updated',
    },
  }),
  interfaces: [nodeInterface],
});
const {
  connectionType: UserConnection,
  edgeType: UserEdge,
} = connectionDefinitions({
  name: 'User',
  nodeType: UserType,
});
export { UserConnection, UserEdge };
export default UserType;

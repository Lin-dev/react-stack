/**
 * react-stack react-stack
 *
 * Copyright © 2016. JonirRings.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Relay from 'react-relay';
import RelaySubscriptions from 'relay-subscriptions';
import Comment from '../Comment';
import Post from './Post';

export default RelaySubscriptions.createContainer(Post, {
  fragments: {
    post: () => Relay.QL`
            fragment on Post{
                id
                author{
                    id
                    name
                    avatar
                }
                title
                content
                comments(first:1){
                    edges{
                        node{
                            ${Comment.getFragment('comment')}
                        }
                    }
                }
                created
                updated
            }
        `,
  },
});

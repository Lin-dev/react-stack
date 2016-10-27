/**
 * react-stack react-stack
 *
 * Copyright © 2016. JonirRings.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  author: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  commentOn: { type: Schema.ObjectId, ref: 'Post' },
  replyTo: { type: Schema.ObjectId, ref: 'Comment' },
  locked: {
    type: Boolean,
    required: true,
    default: false,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
const CommentModel = mongoose.model('Comment', CommentSchema);
export default CommentModel;

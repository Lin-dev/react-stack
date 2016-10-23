/**
 * react-stack react-stack
 *
 * Copyright © 2016. JonirRings.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import mongoose, { Schema } from 'mongoose';

const CaptchaSchema = new Schema({
  value: String,
  created: {
    type: Date,
    required: true,
    default: Date.now,
    expires: '10m',
  },
});
const CaptchaModel = mongoose.model('Captcha', CaptchaSchema);
export default CaptchaModel;

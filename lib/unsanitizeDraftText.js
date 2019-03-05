/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule unsanitizeDraftText
 * 
 */

'use strict';

var REGEX_BLOCK_DELIMITER = new RegExp('\n', 'g');

function unsanitizeDraftText(input) {
  return input.replace(REGEX_BLOCK_DELIMITER, '\r');
}

module.exports = unsanitizeDraftText;
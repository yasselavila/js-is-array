/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2017 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-is-array
 */

import { expect } from 'chai';
import isArray, { fallbackIsArray } from './index';

describe('Provide functions', () => {
  it('isArray()', () => {
    expect(isArray).to.be.an('function');
  });

  it('fallbackIsArray()', () => {
    expect(fallbackIsArray).to.be.an('function');
  });
});

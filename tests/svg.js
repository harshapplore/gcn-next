/**
 * Transformer for Jest for mocking svg files.
 */

module.exports = {
  process() {
    return "module.exports = {}";
  },
  getCacheKey() {
    // The output is always the same.
    return "svgTransform";
  },
};

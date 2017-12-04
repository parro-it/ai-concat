import reduce from "ai-reduce";

const reducer = (accumulator, item) => accumulator.concat(item);

/**
 * Concatenate an async iterable that emits string.
 * @param {AsyncIterable} iterable - The async iterable to concatenate
 * @returns {Promise} A promise resolving to a string that is the concatenation of all string emitted.
 */
const concat = reduce.with(reducer, "");

/**
 * Concatenate an async iterable that emits objects.
 * @param {AsyncIterable} iterable - The async iterable to concatenate
 * @returns {Promise} A promise resolving to an array containing all objects emitted.
 */
concat.obj = reduce.with(reducer, []);

/**
 * Concatenate an async iterable that emits `Buffer`.
 * @param {AsyncIterable} iterable - The async iterable to concatenate
 * @returns {Promise} A promise resolving to a buffer that is the concatenation of all buffers emitted.
 */
concat.buff = iterable => reduce(iterable, reducer, []).then(Buffer.concat);

export default concat;

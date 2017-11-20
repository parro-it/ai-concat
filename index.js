import reduce from "ai-reduce";

const reducer = (accumulator, item) => accumulator.concat(item);

const concat = reduce.with(reducer, "");
concat.obj = reduce.with(reducer, []);
concat.buff = iterable => reduce(iterable, reducer, []).then(Buffer.concat);

export default concat;

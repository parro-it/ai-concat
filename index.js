import aiReduce from "ai-reduce";

const reducer = (accumulator, item) => accumulator.concat(item);

const concat = aiReduce.partial(reducer, "");
concat.obj = aiReduce.partial(reducer, []);
concat.buff = iterable => aiReduce(reducer, [], iterable).then(Buffer.concat);

export default concat;

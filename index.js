const reduce = accumulator => async iterable => {
  let result = accumulator;

  for await (const chunk of iterable) {
    result = result.concat(chunk);
  }

  return result;
};

const concat = reduce("");
concat.obj = reduce([]);
concat.buff = iterable => concat.obj(iterable).then(Buffer.concat);

export default concat;

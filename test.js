import test from "tape-async";
import fromStream from "ai-from-stream";
import concat from ".";
import AsyncIterable from "asynciterable";
import { createReadStream } from "fs";

function fromArray(arr) {
  return new AsyncIterable((write, end) => {
    arr.forEach(write);
    end();
  });
}

test("transform a decoded stream into a string", async t => {
  const stream = createReadStream(`${__dirname}/fixtures/test`, "utf8");
  t.is(await concat(fromStream(stream)), "test line 1\nline 2\n");
});

test("buff transform a stream into a buffer", async t => {
  const stream = createReadStream(`${__dirname}/fixtures/test`);
  const buffer = await concat.buff(fromStream(stream));
  t.is(buffer.toString("utf8"), "test line 1\nline 2\n");
});

test("obj transform a stream into an array", async t => {
  const arr = [{ answer: 42 }, { answer: 43 }];
  const buffer = await concat.obj(fromArray(arr));
  t.deepEqual(buffer, arr);
});

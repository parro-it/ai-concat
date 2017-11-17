import test from "ava";
import aiConcat from ".";

test("exports a function", t => {
  t.is(typeof aiConcat, "function");
});

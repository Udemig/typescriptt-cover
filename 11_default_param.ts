const initialState = {
  name: "test",
  age: 13,
};

function createState(state: object = initialState) {
  console.log(state);
}

// createState();

createState({
  id: 1,
});

function exampleFn(param1: object = { id: 1 }, param2: string = "test") {
  console.log(">> param1", param1);
  console.log(">> param2", param2);
}
exampleFn({ name: "test" });

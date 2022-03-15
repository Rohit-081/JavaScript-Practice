var Obj1 = {
  key1: "value1",
  key2: "value2",
  key3: {
    key4: "value4",
  },
};

function isObject(obj) {
  return typeof obj === "object";
}

function customDeepCopy(obj) {
  let result = {};
  if (isObject(obj)) {
    for (let i in obj) {
      if (!isObject(i)) {
        if (obj.hasOwnProperty(i)) {
          result[i] = obj[i];
        } else {
          customDeepCopy(i);
        }
      }
    }
  }
  return result;
}

console.log(customDeepCopy(Obj1));

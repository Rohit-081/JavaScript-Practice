function a() {
  console.log(b);
}

var b = 10;
a();

function c() {
  var d = 10;
  e();
  function e() {}
}

c();
console.log(d);

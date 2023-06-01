

// function printOnce() {
//   console.log('print only once');
// }

function printOnce() {
  let called = 0;

  return function() {
    if(called > 0) {
      console.log('printing more that once');
    }else {
      console.log('print only once');
      called++;
    }
  }
}

const fn = printOnce();
fn();
fn();
fn();


function once(fn, context) {
  let ran;

  return function() {
    if(fn) {
      ran = fn.apply(context || this, arguments);
      fn = null;
    }

    return ran;
  }
}

const sayHello = once(function() {
  console.log('Hello World!')
});

sayHello();
sayHello();
sayHello();

let a = 1;
function onceDemo() {
  console.log('run only once');
  a++;
  return a*a;
}

const onceTest = _.once(onceDemo);
console.log(onceTest());
console.log(onceTest())
console.log(onceTest())
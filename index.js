var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

suite
    .add('Object', function () {
        return { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 0 };
    })
    .add('Array', function () {
        return [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }, { f: 6 }, { g: 7 }, { h: 8 }, { i: 9 }, { j: 0 }];
    })
    .add('Map', function () {
        let a = new Map();
        a.set({ a: 1 }).set({ b: 2 }).set({ c: 3 }).set({ d: 4 }).set({ e: 5 }).set({ f: 6 }).set({ g: 7 }).set({ h: 8 }).set({ i: 9 }).set({ j: 0 });
        return a;
    })
    .add('Set', function () {
        let a = new Set();
        a.add({ a: 1 }).add({ b: 2 }).add({ c: 3 }).add({ d: 4 }).add({ e: 5 }).add({ f: 6 }).add({ g: 7 }).add({ h: 8 }).add({ i: 9 }).add({ j: 0 });
        return a;
    })
    .add('WeakMap', function () {
        let a = new WeakMap([]);
        a.set({ a: 1 }).set({ b: 2 }).set({ c: 3 }).set({ d: 4 }).set({ e: 5 }).set({ f: 6 }).set({ g: 7 }).set({ h: 8 }).set({ i: 9 }).set({ j: 0 });
        return a;
    })
    .add('WeakSet', function () {
        let a = new WeakSet([]);
        a.add({ a: 1 }).add({ b: 2 }).add({ c: 3 }).add({ d: 4 }).add({ e: 5 }).add({ f: 6 }).add({ g: 7 }).add({ h: 8 }).add({ i: 9 }).add({ j: 0 });
        return a;
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

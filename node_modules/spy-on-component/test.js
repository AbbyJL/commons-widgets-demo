"use strict";
let assert = require('assert');
let spyOnComponent = require('./');

let innerCalled = false;
let called = false;


function foo() { innerCalled = true }

let component = {
  componentWillMount: foo,
}

let reset = spyOnComponent(component, {
  componentWillMount() {
    called = true
  },
  componentDidMount: foo,
})

assert(true, 'it didnt have runtime errors')

;((/* it should wrap methods */) => {
  component.componentWillMount()

  assert(called)
  assert(innerCalled)
})()

;((/* it should only wrap when needed */) => {
  assert.equal(component.componentDidMount, foo)
})()

;((/* it should reset by key */) => {
  reset('componentDidMount')

  assert.equal(component.componentDidMount, undefined)
  assert.notEqual(component.componentWillMount, foo)
})()

;((/* it should reset */) => {
  reset()
  assert.equal(component.componentWillMount, foo)
})()

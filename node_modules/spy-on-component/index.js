
var LIFECYCLE_HOOKS = {
  componentWillMount: true,
  componentDidMount: true,
  componentWillReceiveProps: true,
  shouldComponentUpdate: true,
  componentWillUpdate: true,
  componentDidUpdate: true,
  componentWillUnmount: true,
}

function wrap(base, method) {
  var before = true;

  if (Array.isArray(method)) {
    before = method[0] !== 'after'
    method = method[1]
  }

  if (!base)
    return method;

  return function wrappedLifecyclehook() {
    before && method.apply(this, arguments)
    base.apply(this, arguments)
    !before && method.apply(this, arguments)
  }
}

module.exports = function spyOnComponent(component, hooks) {
  var originals = Object.create(null);


  for (var key in hooks) if (LIFECYCLE_HOOKS[key])
    component[key] = wrap(
      originals[key] = component[key],
      hooks[key]
    )

  return function reset(key) {
    if (key && {}.hasOwnProperty.call(originals, key))
      component[key] = originals[key]
    else for (var key in originals)
      component[key] = originals[key]
  }
}

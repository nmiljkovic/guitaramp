export function connect(...args) {
  for (let i = 0; i < args.length - 1; i++) {
    const from = resolveOutput(args[i]);
    const to = resolveInput(args[i + 1]);

    from.forEach(f => {
      to.forEach(t => f.connect(t));
    });
  }
}

function resolveOutput(node) {
  if (node instanceof AudioNode) {
    return [node];
  } else if (Array.isArray(node)) {
    return flatten(node.map(n => {
      return resolveOutput(n);
    }));
  }
  return flatten(resolveOutput(node.getOutput()));
}

function resolveInput(node) {
  if (node instanceof AudioNode) {
    return [node];
  } else if (Array.isArray(node)) {
    return flatten(node.map(n => resolveInput(n)));
  }
  return flatten(resolveInput(node.getInput()));
}

function flatten(arr, result = []) {
  arr.forEach(n => {
    if (Array.isArray(n)) {
      flatten(n, result);
    } else {
      result.push(n);
    }
  });
  return result;
}

function route(handler, root, res) {
  console.log("I'll route you! " + root);
  if (typeof handler[root] === 'function') {
    handler[root](res);
  }
  else {
    console.log("Function undefined! " + root);
  }
}

exports.route = route;

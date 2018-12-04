function reversObj(obj, curr) {

  if (obj.next) {
    const next = reversObj(obj.next, obj)
    obj.next = curr
    return next
  }

  obj.next = curr
  return obj
}

function reversObj(obj) {
  if (!obj || !obj.next) return obj;

  let tmp = reversObj(obj.next);
  obj.next.next = obj;
  delete obj.next;
  return tmp;
}

function reversObj(node, parent) {
  // console.log(node, parent)
  var result = parent || {};
  
  if (node) {
    var child = node.next;
    node.next = parent;

    result = reversObj(child, node);
  }

  return result;
}

var reversObj = function(head) {
  var result = null;
  var stack = [];
  
  var current = head;
  while (current) {
      stack.push(current);
      current = current.next;
  }
  
  // Set head to end of list.
  result = stack.pop() || [];
  current = result;
  
  while (current) {
      current.next = stack.pop();
      current = current.next;
  }

  return result;
};


module.exports = {
  reversObj: reversObj
}
"use strict"

var ndarray = require("ndarray")
var segTree = require("segment-tree")

function createSparse(data, shape) {
  if(arguments.length === 1) {
    if(data.length) {
      shape = data
      var sz = 1
      var stride = new Array(shape.length)
      for(var i=shape.length-1; i>=0; --i) {
        stride[i] = sz
        sz *= shape[i]
      }
      return ndarray(segTree.zeros(sz), shape, stride, 0)
    } else if(shape.data && shape.shape && shape.stride) {      
      if(shape.dtype === "generic") {
        return ndarray(segTree.fromGenericArray(data.data), data.shape.slice(0), data.stride.slice(0), data.offset)
      } else {
        return ndarray(segTree.fromArray(data.data), data.shape.slice(0), data.stride.slice(0), shape.offset)
      }
    } else {
      throw new Error("ndarray-segment: Invalid arguments")
    }
  } else {
    return ndarray(segTree.fromArray(data), shape)
  }
}

module.exports = createSparse
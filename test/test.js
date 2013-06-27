"use strict"

var ndseg = require("../ndseg.js")
var ops = require("ndarray-ops")
var unpack = require("ndarray-unpack")

require("tape")("segment-tree", function(t) {

  var x = ndseg([10, 10])
  ops.assigns(x.hi(5,5).lo(3, 2), 1)

  console.log(unpack(x))

  t.end()
})


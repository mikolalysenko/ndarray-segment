ndarray-segment
===============
[ndarrays](http://github.com/mikolalysenko/ndarray) with run length encoded data storage.

# Example

```javascript
var ndseg = require("ndarray-segment")
var ops = require("ndarray-ops")

//Create a 100x100 segment array
var x = ndseg([100, 100])

//Fill in a block with a constant value
ops.assigns(x.hi(50,50).lo(30, 20), 1)
```

# Install

```javascript
npm install ndarray-segment
```

# API

```javascript
var ndseg = require("ndarray-segment")
```

## Constructor
The default ndseg function supports several different conventions for usage:

### `ndseg(shape)`
Creates a sparse ndarray with the given shape initialized to 0

* `shape` is the shape of the ndarray

**Returns** A new ndarray with the given shape

### `ndseg(array)`
Converts the given ndarray into a sparse segment tree

* `array` is an ndarray

**Returns** A sparse ndarray representing the same data as `array`

### `ndseg(data, shape)`
Creates an ndarray from the given data store and shape

* `data` is a 1D array
* `shape` is the shape of the ndarray to construct from it

**Returns** A sparse ndarray encoding of `data`

# Credits
(c) 2013 Mikola Lysenko. MIT License
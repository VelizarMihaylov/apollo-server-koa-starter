"use strict";

var _server = require("./server");

var _server2 = _interopRequireDefault(_server);

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server2.default.applyMiddleware({
  app: _app2.default
});

_app2.default.listen({
  port: 4444
}, () => console.log(`🚀 Server ready at http://localhost:4444${_server2.default.graphqlPath}`));
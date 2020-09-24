webpackHotUpdate("static/development/pages/script-page.js",{

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation scriptTagDelete($id: ID!) {\n        scriptTagDelete(id: $id) {\n            deletedScriptTagId\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query {\n        scriptTags(first: 5) {\n            edges {\n                node {\n                    id\n                    src\n                    displayScope\n                }\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation scriptTagCreate($input: ScriptTagInput!) {\n        scriptTagCreate(input: $input) {\n            scriptTag {\n                id\n            }\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var DELETE_SCRIPTTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3());

function ScriptPage() {
  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(CREATE_SCRIPT_TAG),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      createScripts = _useMutation2[0];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(DELETE_SCRIPTTAG),
      _useMutation4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 1),
      deleteScripts = _useMutation4[0];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(QUERY_SCRIPTTAGS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("div", null, "Loading\u2026");
  if (error) return __jsx("div", null, error.message);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    title: "These are the Script Tags:",
    sectioned: true
  }, __jsx("p", null, "Create or Delete a Script Tag"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Layout"].Section, {
    secondary: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    title: "Delete Tag",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    primary: true,
    size: "slim",
    type: "submit",
    onClick: function onClick() {
      createScripts({
        variables: {
          input: {
            src: "https://b056b7566d2b.ngrok.io/test-script.js",
            displayScope: "ALL"
          }
        },
        refetchQueries: [{
          query: QUERY_SCRIPTTAGS
        }]
      });
    }
  }, "Create Script Tag"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["ResourceList"], {
    showHeader: true,
    resourceName: {
      singular: 'Script',
      plural: 'Scripts'
    },
    items: data.scriptTags.edges,
    renderItem: function renderItem(item) {
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["ResourceList"].Item, {
        id: item.id
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, null, __jsx("p", null, item.node.id)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "submit",
        onClick: function onClick() {
          deleteScripts({
            variables: {
              id: item.node.id
            },
            refetchQueries: [{
              query: QUERY_SCRIPTTAGS
            }]
          });
        }
      }, "Delete Script Tag"))));
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (ScriptPage);

/***/ })

})
//# sourceMappingURL=script-page.js.172c6557bd296eac0841.hot-update.js.map
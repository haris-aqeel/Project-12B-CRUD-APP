const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\umer pc\\Desktop\\Haris\\React Projects\\project-12b-crud-app\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\umer pc\\Desktop\\Haris\\React Projects\\project-12b-crud-app\\src\\pages\\index.js")))
}


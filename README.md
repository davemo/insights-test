# A Fun Exercise!

![](http://images.davemo.com/image/0B0U3S3B3Y0K/Screen%20Shot%202014-02-26%20at%203.27.34%20PM.png)

If you just want to see the raw html, js, css and the app working clone this repo and:

`cd dist`
```shell
python -c $'import SimpleHTTPServer;\nmap = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map;\nmap[""] = "text/plain";\nfor key, value in map.items():\n\tmap[key] = value + ";charset=UTF-8";\nSimpleHTTPServer.test();' "8000"
```
`open your browser to localhost:8000`

If you want to see the dev workflow you'll need node.js, and then install lineman

`npm install -g lineman`
`cd insights-test`
`npm install`
`lineman run`
`open your browser to localhost:8000`

Features:

- SCSS compilation, usage of variables, calc
- Angular JS for control flow, dynamic activity
- Good separation of concerns: .html files for templates, .js files for app logic
- Screen transitions without full page reloads!

# TODO

- wrap up icon styling
- wrap up page 2 styling
- unit tests?
- limit the number of selectedInsights to just 4

build: app.bundle.js

.PHONY: app.bundle.js
app.bundle.js:
	./node_modules/.bin/webpack

watch:
	./node_modules/.bin/webpack --watch

dev:
	./node_modules/.bin/webpack-dev-server

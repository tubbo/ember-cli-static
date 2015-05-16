.PHONY: all clean watch test deps

all: watch

clean:
	rm -rf node_modules bower_components

node_modules:
	npm install

bower_components:
	bower install

deps: node_modules bower_components

watch: deps
	ember server

test: deps
	ember test

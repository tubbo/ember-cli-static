.PHONY: all clean watch test deps

all: clean dist

dist: deps
	ember build

clean:
	rm -rf dist

node_modules:
	npm install

bower_components:
	bower install

deps: node_modules bower_components

watch: deps
	ember server

test: deps
	ember test

#!/usr/bin/env bash
.PHONY: help build

default: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build:
	if [ -d "build" ]; then  rm -rf build; fi
	cp -R www build
	esbuild src/index.jsx --bundle --outfile=build/js/index.js --minify --sourcemap --target=chrome58

run:
	esbuild src/index.jsx --servedir=www --outdir=www/js --bundle

# NpmLess React App

The web app does not do much be this should be an help for anyone who wants to start a react project with no configuration and no dependency on the npm environment. Personally I loved it.

## Installation

The only dependency required is [esbuild](https://esbuild.github.io/)

The steps to install it are explained [here](https://esbuild.github.io/getting-started/#build-from-source)

## Run

To run the project just

```bash
make run
```

It will tell you what url to open

## Build and deploy

Build it with `make` and upload the `www` where you want

```bash
make build
rsync  www/ user@serverIP_or_name:/var/www/mypage.example.org
```

## Update react

 1. Find minified version of `react` and `react-dom`. We've taken ours from [unpkg.com](unpkg.com)
 2. Replace old by the newly downloaded in `vendor/`
 3. Replace export `require("react")` by `require("./react")` in `vendor/react-dom.js`
 4. Enjoy

 ## How to install package xxx.yyyy

 Well it will depend on the package.

 1. Mimic what we've done with react. Find a preduild minified version and add it in vendor and try to make it work.
 2. Copy paste the code from github. Especially if it's for [a leftpad function](https://www.theregister.com/2016/03/23/npm_left_pad_chaos/).

 Have fun

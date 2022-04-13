# NpmLess React App


## Installation

The only dependency required is [esbuild](https://esbuild.github.io/)

## Run

Just

```bash
make run
```

It will tell you what url to open

## Build and deploy

```bash
make build
rsync  www/ user@serverIP_or_name:/var/www/mypage.example.org
```

## Update react

 1. Find minified version of `react` and `react-dom`. We've taken ours from [unpkg.com](unpkg.com)
 2. Replace old by the newly downloaded in `vendor/`
 3. Replace export `require("react")` by `require("./react")` in `vendor/react-dom.js`
 4. Enjoy

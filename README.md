:basketball: Search the stats of NBA players :basketball:
====

This project allows you to search for NBA player stats.  
but there is other purpose.  
This project will be a template for projects created with Vue3 and Typescript.

## Description

Specifically, the following technologies are used.

- Composition API  
I'm using the composition API in the SFC instead of the option API.
- Typescript  
Typescript is easier to use in Vue3
- Jest  
  SFC's test cases are created by vue-test-utils.  
  http requests are mocked by jest
- Vue basic syntax  
various basic syntax are used.

The origin of the project name is Rui Hachimura. Rui Hachimura is NBA Player in Washington Wizards.

## URL
https://search-the-stats.web.app/

## Constitution

```
/src
  /api <- API modules
  /assets <- images
  /components <- component size SFC file
  /router <- vue router
  /sandbox/enum <- sandbox
  /types <- type definition
  /utils <- util modules
  /views <- view size SFC file
/tests
  /unit
    /api <- http request test cases
    /src <- SFC's test cases
  /e2e <- Not implemented
```

## Licence

[MIT](https://opensource.org/licenses/mit-license.php)

## Author

[doz13189](https://github.com/doz13189)


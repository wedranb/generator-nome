# generator-nome
> Scaffold out a node module

![](screenshot.png)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-nome using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
yarn global add yo
yarn global add generator-nome
```

Then generate your new project:

```bash
yo nome
```

There are multiple command-line options available:

```
Usage:
  yarn test                 # It will run xo, flow and jest to test your code
  yarn prepublish           # Compile code with babel from src/ to lib/ and copy type definitions from .js and create file with .flow suffix
```

## License

MIT © [Vedran Blazenka](http://vblazenka.com)

# require-ts

require-ts is a [Require.js](http://requirejs.org) plugin that allows you to require [TypeScript](http://www.typescriptlang.org/) dependencies into your project.

## Download

[require-ts](http://raw.github.com/iammerrick/require-ts/master/build/ts.js)

## Usage

You leverage require-ts like any other require.js plugin! Simply place "ts!" before your dependency path, make sure to leave off the file extension.

```javascript
define(['ts!a/typescript/dep'], function(dep) {
  // dep is compiled to JS at this point.
});
```

You can also see the "example" folder, where require-ts is being used to run the Microsoft provided greeter sample.

## Type Declarations

You can load in TypeScript type declaration files by adding some configuration to your [require.js configuration](http://requirejs.org/docs/api.html#config). Ultimately a a string of the source needs to be passed into the compiler and for the time being you can use the [text! plugin](https://github.com/requirejs/text).

```javascript
requirejs.config({
  ts: {
    declarations: [
      'text!../vendor/typescript/bin/lib.d.ts',
      'text!../vendor/typescript/bin/jquery.d.ts'
    ]
  }
});
```

## Build

`npm install && grunt build`

## Implementation Details

This project leverages git submodules to embed the TypeScript project. This allows us to automate the build for a new version of the plugin as the TypeScript project moves forward. We leverage [grunt](http://gruntjs.com) and [rigger](https://github.com/buildjs/rigger) to build the plugin.

## Credits

The text loading mechanisms is extracted from [require-cs](https://github.com/jrburke/require-cs), the work done by [James Burke](http://jrburke.com/).

## License

Available via the MIT or new BSD license.
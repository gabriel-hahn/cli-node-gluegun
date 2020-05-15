## rmcra-files

This CLI was created to clean the initial create-react-app useless files (and for fun, or course!). It removes the following files:

<strong>public/favicon.ico</strong><br />
<strong>public/logo192.png</strong><br />
<strong>public/logo512.png</strong><br />
<strong>src/App.css</strong><br />
<strong>src/index.css</strong><br />
<strong>src/logo.svg</strong><br />
<strong>src/App.test.js or tsx</strong><br />

And update the following files (imports and comments):

<strong>public/index.html</strong><br />
<strong>src/App.js or tsx</strong><br />
<strong>src/index.js or tsx</strong><br />

### Parameters

To use this CLI on CRA projects, you can just run the following command:

```
rmcra-files clean 
```

> If you are in a Typescript project, you can just add the parameter ```--typescript```.

## Commands

To see the commands available for each CLI, please run the CLI's name (e.g rmcra-files) and -h or --help (e.g ```rmcra-files -h``` or ```rmcra-files --help```);

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

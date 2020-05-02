
import { GluegunToolbox, GluegunFilesystem, GluegunTemplate, GluegunPrint } from 'gluegun';

const removeUselessFiles = async (filesystem: GluegunFilesystem, extension: string = 'js') => {
  const { path, separator, remove } = filesystem;
  const currentPath = path();

  remove(`${currentPath}${separator}public${separator}favicon.ico`);
  remove(`${currentPath}${separator}public${separator}logo192.png`);
  remove(`${currentPath}${separator}public${separator}logo512.png`);
  remove(`${currentPath}${separator}public${separator}robots.txt`);

  remove(`${currentPath}${separator}src${separator}App.css`);
  remove(`${currentPath}${separator}src${separator}App.test.${extension}`);
  remove(`${currentPath}${separator}src${separator}index.css`);
  remove(`${currentPath}${separator}src${separator}logo.svg`);
};

const updateRemainFiles = async (filesystem: GluegunFilesystem, template: GluegunTemplate, extension: string = 'js') => {
  const { path, separator } = filesystem;
  const currentPath = path();

  await template.generate({
    template: 'index.html.ejs',
    target: `${currentPath}${separator}public${separator}index.html`,
  });
  
  await template.generate({
    template: 'App.js.ejs',
    target: `${currentPath}${separator}src${separator}App.${extension}`,
  });

  await template.generate({
    template: 'index.js.ejs',
    target: `${currentPath}${separator}src${separator}index.${extension}`,
  });
};

const filesChangesLog = (print: GluegunPrint, extension: string) => {
  print.success('Project cleaned. If you are in a root folder, these files should be removed/updated: ');

  print.info('public/favicon.ico');
  print.info('public/logo192.png');
  print.info('public/logo512.png');
  print.info('public/robots.txt');
  print.info('public/index.html');
  print.info('src/App.css');
  print.info('src/index.css');
  print.info('src/logo.svg');
  print.info(`src/App.test.${extension}`);
  print.info(`src/App.${extension}`);
  print.info(`src/index.${extension}`);
}
  
module.exports = {
  name: 'clean',
  description: 'Remove the initial create-react-app useless files and update the imports',
  alias: ['c'],
  run: async (toolbox: GluegunToolbox) => {
    const { print, filesystem, template, parameters } = toolbox;
    const extension = parameters.options.typescript ? 'tsx' : 'js';

    const isProjectFolder = filesystem.read('package.json');

    if (isProjectFolder) {
      await removeUselessFiles(filesystem, extension);
      await updateRemainFiles(filesystem, template, extension);

      filesChangesLog(print, extension);

      return;
    }

    print.error('Dear, I think you aren\'t in a React project root folder');
  },
}


import { GluegunToolbox, GluegunFilesystem } from 'gluegun';

const removeUselessFiles = (filesystem: GluegunFilesystem) => {
  const { path, separator, remove } = filesystem;
  const currentPath = path();

  remove(`${currentPath}${separator}public${separator}favicon.png`);
  remove(`${currentPath}${separator}public${separator}logo192.png`);
  remove(`${currentPath}${separator}public${separator}logo512.png`);
  remove(`${currentPath}${separator}public${separator}robots.txt`);

  remove(`${currentPath}${separator}src${separator}App.css`);
  remove(`${currentPath}${separator}src${separator}App.test.js`);
  remove(`${currentPath}${separator}src${separator}App.test.tsx`);
  remove(`${currentPath}${separator}src${separator}index.css`);
  remove(`${currentPath}${separator}src${separator}logo.svg`);
};

const updateRemainFiles = (filesystem: GluegunFilesystem) => {

};
  
module.exports = {
  name: 'clean',
  description: 'Remove the initial create-react-app useless files and update the imports',
  alias: ['c'],
  run: async (toolbox: GluegunToolbox) => {
    const { print, filesystem } = toolbox;

    removeUselessFiles(filesystem);
    updateRemainFiles(filesystem);

    print.success(`Project cleaned`);
  },
}

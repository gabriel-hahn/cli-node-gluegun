
import { GluegunToolbox, GluegunFilesystem } from 'gluegun';

const removeUselessFiles = (filesystem: GluegunFilesystem) => {
  const currentPath = filesystem.path();

  filesystem.remove(`${currentPath}/public/favicon.png`);
  filesystem.remove(`${currentPath}/public/logo192.png`);
  filesystem.remove(`${currentPath}/public/logo512.png`);
  filesystem.remove(`${currentPath}/public/robots.txt`);

  filesystem.remove(`${currentPath}/src/App.css`);
  filesystem.remove(`${currentPath}/src/App.test.js`);
  filesystem.remove(`${currentPath}/src/App.test.tsx`);
  filesystem.remove(`${currentPath}/src/index.css`);
  filesystem.remove(`${currentPath}/src/logo.svg`);
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

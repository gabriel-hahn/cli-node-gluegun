
import { GluegunCommand } from 'gluegun';


const command: GluegunCommand = {
  name: 'rmcra-files',
  run: async toolbox => {
    const { print } = toolbox;

    print.info('Welcome to rmcra-files CLI. Looking forward to clean the initial useless CRA files for you :)');
  },
}

module.exports = command;

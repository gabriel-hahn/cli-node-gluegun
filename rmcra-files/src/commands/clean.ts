
import { GluegunToolbox } from 'gluegun';
  
module.exports = {
  name: 'clean',
  alias: ['c'],
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox;

    print.success(`Project cleaned`);
  },
}

import { phlLog } from './logger';
import chalk from 'chalk';

describe('Logger', () => {
  beforeAll(() => (console.log = jest.fn()));

  it('should log the message with the prefix', () => {
    const message = 'Real madrid is the best club';
    phlLog(message);
    expect(console.log).toHaveBeenCalledWith(
      chalk.bgCyan.black('[pretty-html-log]:'),
      message
    );
  });
});

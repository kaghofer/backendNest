import { Middleware } from './.middleware';

describe('Middleware', () => {
  it('should be defined', () => {
    expect(new Middleware()).toBeDefined();
  });
});

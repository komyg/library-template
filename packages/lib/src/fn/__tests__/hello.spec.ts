import { hello } from '../hello';

describe('Hello', () => {
  it('should return a greeting', () => {
    expect(hello('World')).toEqual({
      name: 'World',
      result: 'Hello, World!',
    });
  });
});

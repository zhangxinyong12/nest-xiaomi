import { NewsMiddleware } from './news.middleware';

describe('NewsMiddleware', () => {
  it('should be defined', () => {
    expect(new NewsMiddleware()).toBeDefined();
  });
});

const service = require('../src/7-bonus-fetch-jokes');

const fetch = () => Promise.resolve({
  json: () => Promise.resolve({
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  })
});

describe('fetchJokes', () => {
  it('should return a string with the joke', () => {
    const spy = jest.spyOn(service, 'fetchJoke');
    service.fetchJoke(fetch);
    expect(spy).toBeCalledTimes(1);
    expect(service.fetchJoke(fetch)).resolves.toBe('Whiteboards ... are remarkable.');
  })
})

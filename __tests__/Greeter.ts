import { Greeter } from '../src/index'; 
test('My Greeter', () => {
    expect(Greeter('Ahmed')).toBe('Hello Ahmed');
});
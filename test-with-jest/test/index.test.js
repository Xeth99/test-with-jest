const {add, err, arr, promiseTest, app} = require('../index');
const supertest = require('supertest');


test('toBe', () => {
    expect(add(1, 2)).toBe(3);
})

test('toEqual', () => {
    expect(add(1, 2)).toEqual(3);
})

test('toBeDefined', () => {
    expect(add(1, 2)).toBeDefined();
})

test('toBeNull', () => {
    expect(add(1, 2)).not.toBeNull();
})

test('toBeGreaterThan', () => {
    expect(add(1, 2)).toBeGreaterThan(1);
})

test('toBeLessThan', () => {
    expect(add(1, 2)).toBeLessThan(4);
})

test('toBeCloseTo', () => {
    expect(add(1.111111, 2.44444)).toBeCloseTo(3.555);
})

test('toMatch', () => {
    expect(add('Hello ', 'World')).toMatch(/Hello/);
})

test('toThrow', () => {
    expect(() => err()).toThrow('I am an error');
})

// describe('I am block', () => {
//     test('I am executing in a block', () => {
//         expect(add('Hello ', 'World')).toMatch(/Hello/);
//     })
    
//     test('toThrow', () => {
//         expect(() => err()).toThrow('I am an error');
//     })
// })

test('PromiseTest old way', () => {
    promiseTest(1, 2)
    
    .then((data) => {
        expect(data).toBe('Positive');
    })
    .catch((err) => {
        expect(err).toBe('Negative');
    });
})

test('PromiseTest easy way', () => {
   expect(promiseTest(2, 1)).resolves.toBe('Positive');
})

test('PromiseTest easy way', () => {
   expect(promiseTest(1, 2)).rejects.toBe('Negative');
})

test('toContain', () => {
   expect(arr()).toContain('Bat');
})

test('TEST GET users API', async () => {
   await supertest(app)
   .get('/users')
   .expect(200)
   .then((result) => {
       expect(result && typeof result.body === 'object');
   })
})



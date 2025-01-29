import test, { expect, request } from "playwright/test";

test.describe('Buggy Car API tests', () => {
    test('When sending wrong credentials we will get 401 status code(Unothorized)', async ({ request }) => {
        let response = await request.post('https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/oauth/token', {
            headers: {
                'authority': 'k51qryqov3.execute-api.ap-southeast-2.amazonaws.com'
            },
            form: {
                grant_type: 'password',
                username: 'abc',
                password: 'def'
            }
        })
        await expect(await response.status()).toBe(401);
    })

    test('When registering with bad password we will get 400 status code (Bad request)', async ({ request }) => {
        let response = await request.post('https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users', {
            headers: {
                'authority': 'k51qryqov3.execute-api.ap-southeast-2.amazonaws.com'
            },
            data: {
                body: {
                    "username":"elihg",
                    "firstName":"elih",
                    "lastName":"g",
                    "password":"EEErrr#1",
                    "confirmPassword":"EEErrr#1"
                }
            }
        });
        await expect(await response.status()).toBe(400)
    })
})
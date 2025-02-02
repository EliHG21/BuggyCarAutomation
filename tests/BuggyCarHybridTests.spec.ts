import { test, expect } from './BaseTest'

test.describe('Buggy Car Hybrid test', () => {
    test('When chnaging the profile gender via api request, the change will be visible in the UI', async ({ loggedHeader, request }) => {
        const profilePage = await loggedHeader.clickProfileButton();
        let newGenderValue = ''
        if(await profilePage.getGenderCurrentValue() == "Male") {
            newGenderValue = 'Female'
        } else {
            newGenderValue = 'Male'
        }
        const result = request.put('https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users/profile', {
            headers: {
                'authority': 'k51qryqov3.execute-api.ap-southeast-2.amazonaws.com'
            },
            data: {
                body: {
                    "username":"elimelechTest",
                    "firstName":"Eli",
                    "lastName":"Gold",
                    "gender":`${newGenderValue}`,
                    "age":"",
                    "address":"",
                    "phone":"",
                    "hobby":"",
                    "currentPassword":"",
                    "newPassword":"",
                    "newPasswordConfirmation":""
                 }
            }
        });
        await expect((await result).status()).toBe(200);

        await expect(await profilePage.getGenderCurrentValue()).toBe(newGenderValue)
    })
})
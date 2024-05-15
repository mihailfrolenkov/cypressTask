import ApiConst from '../fixtures/ApiConst';

describe('Api task test', () => {

    it('Get method test', () => {
        cy.fixture('userList.json').then((expectedUsers) => {
            cy.request(Cypress.env().baseUrl + ApiConst.usersEndpoint).then((response) => {
                //Expecting the response status code to be 200 and compare user list
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK") // according to documentation in should answer Success, but answers OK
                expect(response.body).to.deep.equal(expectedUsers);
            })
        })
    })

    it('Post method test', () => {
        cy.fixture('addUser.json').then((addUser) => {
            addUser.id = 11;
            addUser.userName = "Tester";
            addUser.password = "abc123"
            cy.request({
                method: 'POST',
                url: Cypress.env().baseUrl + ApiConst.usersEndpoint,
                headers: { 'Content-Type': ApiConst.contentTypeJson },
                body: addUser
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.statusText).to.eq("OK");
                expect(response.body).to.deep.equal(addUser);
                //you better also get a user list to verify, but can`t do with fake api`s
            });
        });
    })

    it('Post method negative test', () => {
        cy.fixture('addUser.json').then((addUser) => {
            addUser.id = "eleven";
            cy.request({
                method: 'POST',
                url: Cypress.env().baseUrl + ApiConst.usersEndpoint,
                headers: { 'Content-Type': ApiConst.contentTypeJson },
                body: addUser,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
                expect(response.statusText).to.eq("Bad Request");
                expect(response.body.title).to.eq("One or more validation errors occurred.");
                //you better also get a user list to verify, but can`t do with fake api`s
            });
        });
    })

    it('Put method test', () => {
        cy.fixture('addUser.json').then((addUser) => {
            addUser.id = 11;
            addUser.userName = "Tester";
            addUser.password = "abc123"
            cy.request({
                method: 'PUT',
                url: Cypress.env().baseUrl + ApiConst.usersEndpoint + "/11",
                headers: { 'Content-Type': ApiConst.contentTypeJson },
                body: addUser
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.statusText).to.eq("OK");
                expect(response.body).to.deep.equal(addUser);
                //you better also get a user list to verify, but can`t do with fake api`s
            });
        });
    })

    it('Put method negative test', () => {
        cy.fixture('addUser.json').then((addUser) => {
            addUser.id = "eleven";
            cy.request({
                method: 'PUT',
                url: Cypress.env().baseUrl + ApiConst.usersEndpoint + "/11",
                headers: { 'Content-Type': ApiConst.contentTypeJson },
                body: addUser,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
                expect(response.statusText).to.eq("Bad Request");
                expect(response.body.title).to.eq("One or more validation errors occurred.");
                //you better also get a user list to verify, but can`t do with fake api`s
            });
        });
    })

    it('Delete method test', () => {

        cy.request('DELETE', Cypress.env().baseUrl + ApiConst.usersEndpoint + "/11").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.statusText).to.eq("OK");
            //you better also get a user list to verify, but can`t do with fake api`s
        });
    });
})

describe("AppTest", () => {
    beforeEach(()=>{
        cy.visit('https://demo.applitools.com/tlcHackathonMasterV2.html');
    })
    it(`Test 1`, function () {
        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 1',
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            appName: "AppliFashion",
            testName: 'Test 1',
            stepName: "main page",
            target: 'window',
            fully: true,
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

    it(`Test 2`, function () {
        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 2',
        })

        // Select black shoes
        cy.get("div[id*='sidebar'] #colors__Black").check()
        cy.get('#filterBtn').click()

        // Check shoes grid (id=product_grid) and verify that only two black shoes appear.
        cy.eyesCheckWindow({
            target: 'region',
            selector: {
              type: 'css',
              selector: '#product_grid' // or '//button'
            },
            appName: "AppliFashion",
            testName: 'Test 2',
            stepName: "filter by color",
          });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

    it(`Test 3`, function () {
        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 3',
        })

        // Select Appli Air x Night black shoe
        cy.get("div[id*='sidebar'] #colors__Black").click()
        cy.xpath("//a[contains(normalize-space(.),'Appli Air x Night')]").click()
        // Check shoes grid (id=product_grid) and verify that only two black shoes appear.
        cy.eyesCheckWindow({
            target: 'window',
            fully: true,
            appName: "AppliFashion",
            testName: 'Test 3',
            stepName: "product details",
          });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});
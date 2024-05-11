describe('Проверка авторизации', function () {

    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/'); // Зашел на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
     })

     it('Негативный кейс авторизации с паролем', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('iLoveqastudio9'); // Ввел неверный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст виден пользователю
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })
    it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт

        cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввел нверный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст виден пользователю
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })
    it('Проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт

        cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для восстановления
        cy.get('#restoreEmailButton').click();// Нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') // Текст виден пользователю
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })
        it('Негативный кейс авторизации с логином', function () {
            cy.visit('https://login.qa.studio/'); // Зашел на сайт
    
            cy.get('#mail').type('german@dolnikov2.ru'); // Ввел неверный логин
            cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
            cy.get('#loginButton').click(); // Нажал войти
    
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст виден пользователю
            cy.get('#messageHeader').should('be.visible'); // Проверяю, что после авторизации вижу текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел логин строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст виден пользователю
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    })

})


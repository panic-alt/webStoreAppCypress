Feature: Accounts

    This feature tests all account related functionalities

    Scenario: User creates a new account
        Given The user is in the main page
        When clicks in the account button
            And clicks the Register button
            And fills the fields and clicks register
        Then the welcome message should contain user's full name
            
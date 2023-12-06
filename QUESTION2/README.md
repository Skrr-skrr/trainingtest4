Question:
Create a basic user access control system using JavaScript classes that adheres to the following requirements:

User Class:
Define a User class with properties for username, password, and role (e.g., "admin", "editor", "viewer").
Implement a verifyPassword(enteredPassword) method to check if a given password matches the user's stored password.

AccessManager Class:
Define an AccessManager class with a grantAccess(user, action) method.
This method should check the user's role and allow or deny actions based on defined permissions.

Implement the following access rules:
Admins can perform any action.
Editors can create, read, and update content.
Viewers can only read content.

Testing:
Create instances of the User class with different roles and passwords.
Instantiate an AccessManager object.
Test various access scenarios using the grantAccess method, ensuring correct permissions are enforced for each user.

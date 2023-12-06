// User class with properties
class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  // verifyPassword(enteredPassword) implementation
  verifyPassword(enteredPassword) {
    return this.password === enteredPassword;
  }
}

// defining Permissions
class AccessManager {
  constructor() {
    this.permissions = {
      admin: ["create", "read", "update", "delete"],
      editor: ["create", "read", "update"],
      viewer: ["read"],
    };
  }

  // grantAccess(user, action) method AccessManager class definition
  grantAccess(user, action) {
    const allowedActions = this.permissions[user.role];
    if (allowedActions && allowedActions.includes(action)) {
      console.log(
        `\u2714   ACCESS GRANTED: The ${user.username} has been granted access to ${action} as ${user.role}.`,
      );
    } else {
      console.log(
        `\u274C  ACCESS DENIED: The ${user.username} has been denied access to ${action} as ${user.role}.`,
      );
    }
  }
}

// instances of the User class with different roles and passwords
const adminUser = new User("adminUser", "adminPassword", "admin");
const editorUser = new User("editorUser", "editorPassword", "editor");
const viewerUser = new User("viewerUser", "viewerPassword", "viewer");

// accessManager object instanciating
const accessManager = new AccessManager();

// testing access scenarios using grantAccess method
console.log("");
console.log("VERIFYING USER ACCESS...");
console.log("---------------------");
accessManager.grantAccess(adminUser, "create");
accessManager.grantAccess(editorUser, "update");
accessManager.grantAccess(viewerUser, "create");
console.log(" ");

// testing output
console.log("CONFIRMING SECURE PASSWORD ENTRY...");
console.log("--------------------------------");
console.log("USER 1: ", adminUser.verifyPassword("adminPassword"));
console.log("USER 2: ", editorUser.verifyPassword("editorPassword"));
console.log("USER 3: ", viewerUser.verifyPassword("editorPassword"));

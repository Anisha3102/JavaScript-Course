// The getUserPreferredLanguage function accepts a user object as input. If a preferred language is specified in the user object, it returns their language preference. If no preferred language is specified, it defaults to the defaultLanguage.

// For example:

// Input: user ={ name: "Eve", preferredLanguage: "German" },

// Output: "Eve's preferred language is German".


function getUserPreferredLanguage(user) {
  const defaultLanguage = "English";
  if (
    user.preferredLanguage === "" ||
    user.preferredLanguage === null ||
    user.preferredLanguage === undefined
  )
    return `${user.name}'s preferred language is ${defaultLanguage}`;
  return `${user.name}'s preferred language is ${user.preferredLanguage}`;
}
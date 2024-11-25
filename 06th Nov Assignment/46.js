//46. Use map to extract the domains from emails ["user1@domain.com", "user2@site.net"].


const emails = ["user1@domain.com", "user2@site.net"];

const domains = emails.map(email => email.split('@')[1]);

console.log(domains);

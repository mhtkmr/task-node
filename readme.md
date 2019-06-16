1. npm install
2. Run redis locally
3. Run mongo mlab or locally, I was using mlab.
4. Create .env file in project root directory.
5. Add MONGO_HOST_URI=your_url_here. It can be localhost:27017 or HOST url.
6. Add SECRET=Any_key_you_want for JWT.
7. Run node server or nodemon on index.js. Sever will listen on port 3000.

**_ Tasks _**

1. create a register API in 2 steps.
   Step-1: Register user w/ emailId and pwd. Generate Token which can't be used in other protected routes.
   Step-2: Update the same user address w/ the help of token and also fetch state of user w/ help of pincode from external API.
2. SignIn user w/ email & pwd and generate a token.The token generated during registeration can't be used here. Also, If multiple tokens are generated then only the latest token should work and not the earlier ones even if they are not expired.
3. Project design should be strictly according to the directives given earlier.

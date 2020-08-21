const server = require("./api/server");

// [1.]
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n server running at http://localhost:${port}`);
});

//  [1.]
//  read the port from the environment
//  --> Heroku sets this automatically
//  --> Heroku gives us the ability to set this as well
//  --> check out the docs!
// how does it know?
//  --> Heroku looks for 'start' script

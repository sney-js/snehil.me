const contentful = require("contentful-management");

require("dotenv").config();

module.exports = function() {
    const client = contentful.createClient({
        accessToken: process.env.CONTENTFUL_MANTOKEN,
    });

    return client
        .getSpace(process.env.REACT_APP_CTF_SPACE_ID)
        .then(space => space.getEnvironment(process.env.REACT_APP_CTF_ENV_ID));
};

// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "mongolab",
        url: "mongodb://BigCoder:BigCoder!@ds139817.mlab.com:39817/heroku_cnkn5vpn",
        port: 27017
    },

    local:
    {
        name: "contact-local",
        url: "mongodb://localhost/personal_website",
        port: 27017
    },

    localtest:
    {
        name: "contact-local",
        url: "mongodb://localhost/personal_websiteTest",
        port: 27017
    }

};

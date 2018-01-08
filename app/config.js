// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "mongolab",
        url: "blah",
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

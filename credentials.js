const collection_name = 'flutterApi'
module.exports = {
    cookieSecret: '123321',
    mongo: {
        development: {
            connectionString: `mongodb://localhost:27017/${collection_name}`
        },
        production: {
            connectionString: `mongodb+srv://admin:admin@flutterapi.jqkrq.mongodb.net/${collection_name}?retryWrites=true&w=majority`
        }
    }
}
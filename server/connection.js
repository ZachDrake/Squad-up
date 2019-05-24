require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/squadup', {
    useNewUrlParser: true,
    useCreateIndex: true
});




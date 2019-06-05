module.exports = function (app) {
    app.get("/", ({ signedCookies: { token } }, res) => {

        if (token) {


            validToken(token).then(async (data) => {
                console.log(data);

            })
        }
    })
}
    

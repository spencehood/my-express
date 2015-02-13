module.exports = function(app) {
    
    app.get('/list/repos', function(req, res) {

        // get the repo collection
        var repo = app.db.get('repo')

        // compose a query to look up docs whose 'categories' field contains the word 'Users'
        // var q = {
        //     'categories': {
        //         $in: ['Users']
        //     }
        // }

        // execute the query to find those matched limiting to 20
        repo.find({}, {
            limit: 20
        }, function(err, reps) {

            res.render('listRepos.jade', {
                repos: reps
            })
        })

    })
}
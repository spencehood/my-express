module.exports = function(app) {
    
    app.get('/list/repos', function(req, res) {

        // get the repos collection
        var repo = app.db.get('repos');

        // execute the query to find those matched limiting to 20
        repo.find({}, {
            limit: 20
        }, function(err, reps) {

            res.render('listRepos.jade', {
                repos: reps
            });
        });

    });
}
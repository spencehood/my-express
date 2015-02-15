var _ = require('lodash')

module.exports = function(app) {

    app.get('/view/repo/:id', function(req, res) {

        // get the repo collection
        var id = parseInt(req.params.id);
        var repos = app.db.get('repo');

        var repoList = repos.findOne({"repo.id":id}, function(err, item) {
            res.render('viewRepo.jade', {
                repo: item
            })
        })

    })
    
}
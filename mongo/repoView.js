module.exports = function(app) {

    app.get('/view/repo/:repo_id', function(req, res) {
        console.log("hi");
        // get the business collection
        var users = app.db.get('repo')

         var q = {
            'repo_id': req.params.repo_id            
        }

        var repo = repos.findOne(q, function(err, item) {
            console.log(item);
            res.render('viewRepo.jade', {
                repo: item
            })
        })

    })
    
}
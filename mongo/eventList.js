module.exports = function(app) {
    
    app.get('/list/events', function(req, res) {

        // get the event collection
        var evnt = app.db.get('events')

        // execute the query to find those matched limiting to 20
        evnt.find({}, {
            limit: 20
        }, function(err, evs) {

            res.render('listEvents.jade', {
                repos: evs
            })
        })

    })
}
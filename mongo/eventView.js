var _ = require('lodash')

module.exports = function(app) {

    app.get('/view/event/:id', function(req, res) {

        // get the event collection
        var id = parseInt(req.params.id);
        var events = app.db.get('event');

        var eventList = events.findOne({"event.id":id}, function(err, item) {
            res.render('viewEvent.jade', {
                repo: item
            })
        })

    })
    
}
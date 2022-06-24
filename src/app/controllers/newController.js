class newController {
    //[GET] /news
    news(req, res) {
        res.render('news');
    }
    //[GET] /news /:slug
    show(req, res) {
        res.send('okee');
    }
}

module.exports = new newController();

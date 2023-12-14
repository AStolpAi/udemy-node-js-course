exports.send404 = (req, res, next) => {
    res.status(404).render('404', {pageTitle: '404', errorMessage: 'Sorry but this page does not exist.'})
}
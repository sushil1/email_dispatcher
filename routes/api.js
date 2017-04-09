var express = require('express')
var router = express.Router()

router.get('/:action', function(req, res, next) {

  var action = req.params.action
  if(action == 'send'){
    //send an email
    res.json({
      confirmation:'success',
      message: action
    })

    return
  }

  res.json({
    confirmation:'fail',
    message: 'invalid action'
  })

})

module.exports = router

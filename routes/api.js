var express = require('express')
var router = express.Router()
var utils = require('../utils')

router.post('/:action', function(req, res, next){

  var action = req.params.action
  if(action == 'send'){
    //send an email
    var recipients = req.body.recipients //comma seperated list of emails
    var list = recipients.split(',')

    utils.Email.sendEmails(list, req.body, function(){
      res.json({
        confirmation: 'success',
        message:'email sent'
      })
    })

    // utils.Email.sendEmail(req.body)
    // .then(function(response){
    //   res.json({
    //     confirmation:'success',
    //     response:response
    //   })
    // })
    // .catch(function(err){
    //   res.json({
    //     confirmation:'fail',
    //     message:err
    //   })
    // })
  }

  res.json({
    confirmation:'fail',
    message: 'invalid action'
  })
})


module.exports = router

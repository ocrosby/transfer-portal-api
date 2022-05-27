/*
  @swagger
   components:
     schemas:
       Player:
         type: object
         required:
           - name
           - position
           - formerSchool
           - newSchool
         properties:
           id:
             type: integer
             description: The auto-generated id of the player.
           name:
             type: string
             description: The name of your player.
           position:
             type: string
             description: What position(s) do they play?
           formerSchool:
             type: string
             description: Where are they transferring from?
           newSchool:
             type: string
             description: Where are they transferring to?
         example:
            id: 1
            name: Wilma Flintstone
            position: F
            formerSchool: University of Bedrock
            newSchool: Bedrock State University
 */

var express = require('express');
var router = express.Router();

const player = {
    id: index,
    name: '',
    position: '',
    formerSchool: '',
    newSchool: ''
};

/* GET players listing. */
router.get('/', function (_req, res, _next) {
    res.send('respond with a resource');
});

module.exports = router;
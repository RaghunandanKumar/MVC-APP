/**
*  Course model
*  Describes the characteristics of each attribute in a course resource.
*
* @author Venkat Prudhvi <s537236@nwmissouri.edu>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
 schoolNumber: {
    type: String,
    minlength: 2,
    maxlength: 2,
    required: true,
    
  },
  courseNumber: {
    type: String ,
    minlength: 3,
    maxlength: 3,
    required: true,
  },
  Name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
  },
  inSpring: {
    type: Boolean,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  inSummer: {
    type: Boolean,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  inFall: {
    type: Boolean,
    minlength: 4,
    maxlength: 12,
    required: true
  },
  Major: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
  },
})
module.exports = mongoose.model('Course', CourseSchema)
// the model Course is for the courses collection in the database.

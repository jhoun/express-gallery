module.exports = function whichError(errMessage, req){
  if (errMessage === 'Validation isURL failed'){
    req.flash('message', 'Please input valid URL');
  } else {
    req.flash('message', 'Please do not leave fields empty');
  }
}
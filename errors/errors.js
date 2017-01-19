module.exports = (function(){

var errors = [];

  var _whichError = function(err){
    if (err === 'Validation isURL failed'){
      errors.push("please fix URL");
      return errors;
    } else if(err === 'Validation notEmpty failed'){
      return "please no empty";
    }
  }

return {
  whichError: _whichError
}

})();
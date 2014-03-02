.directive('numberpad', 
  function(){
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'html/numberpad.html',
      scope: {
        numberpadVar : '='
      },

      link: function(scope, element, attrs) {

        scope.takeInput = function(digit) {
          scope.numberpadVar = scope.numberpadVar * 10 + digit;
        }

        scope.clearInput = function() {
          scope.numberpadVar = '';
        }
      }
    }

  }
)

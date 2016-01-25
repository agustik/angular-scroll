/*! 
 NAME: angular-scroll
 LICENSE: GPL-2.0 
 VERSION: v1.0.0
 AUTHOR: Ágúst Ingi Kjartansson <agustik@edge.is> 
 BUILD: 2016-01-25 */ 
 
angular.module('angularScroll', []).directive('angularScroll', [ '$window', function($window){
  return {
    restrict : 'A',
    link : function (scope, elem, attrs){

      function isDisabled(){
        if (attrs.disabled !== 'false'){
          return true;
        }
        return false;
      }

      var fn = scope[attrs.angularScroll];
      var px = attrs.px || 300;

      if (!fn){
        return;
      }

      var addingMore=false;
      window.addEventListener("scroll", function (){
        var offset = elem.prop('offsetTop');
        var pos = ($window.innerHeight + $window.scrollY);
        if (isDisabled()){
          return;
        }
        if ((offset - px ) < pos){
          if (!addingMore){
            addingMore = true;
            fn(function (){ addingMore = false; })
          }
        }
      });
    }
  }
}]);

##Small Angularjs scroll library##

How to use

Include it in HTML
```
<script src="dist/angular-scroll.min.js"></script>
```

Then add it to Angular
```
angular.module('MyModule', ['angularScroll']);
```

And after all, add this snippet to bottom of page
```
<div angular-scroll="new_data" disabled="{{d}}" ></div>
```

Attributes:
- angular-scroll: The function to call
- disabled: Disable ?
- px: How far from bottom it will fire


Use in scope, CALLBACK IS REQUIRED TO ENABLE THE SCROLL AGAIN

```javascript
$scope.new_data= function (callback){
  callback = callback || function(){};
  // call callback on function end to enable scroll again
}
```

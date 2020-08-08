DEPRECATED: No longer maintained

raix:onetimeout
===============

Onetimeout will run only the latest used function.

```js
  var myTimeout = new OneTimeout(500); // Delay 500ms

  var runMeOnce = function() {
    console.log('I just ran!');
  };

  myTimeout(runMeOnce);
  myTimeout(runMeOnce); // Replace last function
  myTimeout(runMeOnce);
  myTimeout(runMeOnce);
  myTimeout(runMeOnce);
  myTimeout(runMeOnce);
  myTimeout(runMeOnce); // Counts 500ms from here...

  // console
  // : I just ran!
```

Kind regards

Morten (aka RaiX)

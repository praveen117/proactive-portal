$(function(){

  var profile = {
    id: '1234',
    firstName: 'Julien',
    lastName: 'Dreux',
    email: 'jjd0@gmail.com',
    phone: '9895628066',
    emergencyContacts: [
      {
        name: 'Colin Kfury',
        email: 'ck@gmail.com',
        phone: '1239129319'
      }
    ],
    place: 'Bangalore',
    area: 'Kormangala',
    pinCode: '560040',
    gender: 'Male',
    country: 'India',
    state: 'Karnataka',
    dob: '1988/12/07',
    bloodGroup: 'A +Ve',
    ngo: true
  };

  crossroads.bypassed.add(function(name){


    // var dom = $('#'+name+'-template');
    //
    // if(dom.length > 0){
    //   $('#content').html(dom.html());
    // } else {
      console.warn("Could not match route!", arguments);
      hasher.setHash('404');
    // }
  });

  function addRoute(name, cb){
    crossroads.addRoute(name, function(){
      console.log('setting ocntent', name, $('#'+name+'-template').html());
      $('#content').html($('#'+name+'-template').html());
      if(cb){
        cb();
      }
    });
  }

  addRoute('home', function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  });

  addRoute('signin');
  addRoute('signup');
  // addRoute('profile');.

  crossroads.addRoute('profile', function(){

    var compiled = _.template($('#profile-template').html());

    $('#content').html(compiled(profile));
  });


  addRoute('404');


  //setup hasher
  function parseHash(newHash, oldHash){
    crossroads.parse(newHash);
  }
  hasher.initialized.add(parseHash); //parse initial hash
  hasher.changed.add(parseHash); //parse hash changes
  hasher.init(); //start listening for history change

  //update URL fragment generating new history record
  // hasher.setHash('home');

});

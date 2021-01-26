var url = "http://localhost:3000/send"
 
  //getinput
   
  // Listen for form submit

  $(document).ready(function(){

  document.getElementById('contact-form').addEventListener('submit', submitForm);
   
  function submitForm(e) {
      e.preventDefault();
    
      // Get values
      var email = getInputVal('email')
      //var sub = getInputVal('subject').subject     
      //var txt = getInputVal('message').message

      console.log('a')
   
      // Save 
    
      //saveProduct(email,sub,txt);
   
      
      
      // Show alert
    //   document.querySelector('.alert').style.display = 'block';
    
    //   // Hide alert after 3 seconds
    //   setTimeout(function () {
    //     document.querySelector('.alert').style.display = 'none';
    //   }, 3000);
  }

  //teste



  //fim teste
   
   
  async function saveProduct(email, sub, txt){
      try{
          const response = await fetch(url, {
              headers: {
                  'Content-Type': 'application/json'
                },
                method: 'get',
                body: JSON.stringify({
                  email:email,
                  sub:sub,
                  txt:txt
              })
          });
          const data = await response.json();
          console.log(data)
        }catch (error) {
          console.log(error);
        }
      }

    })
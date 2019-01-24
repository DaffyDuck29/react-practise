// function welcomenote(message)
// {
//     // alert(`${message}`);
//     // var msg = message;
//     // return msg;
//     welcomenote(prompt("time in your region"));
//     let wel = ` ${welcomenote()}`;
//     alert(wel);
    
    
// }



// function username(username)
// {
//     alert(`${username}`);
// }
// username(prompt("Your good name?"));
// alert(username);
 
//  function welcome(username )
//  {
//   alert(username);
//  }
//  function message(message)
//  {

// alert(message);
//  }
// function note(welcome){
//     welcome ="default name"

// }
//  let welcome = (prompt(" what is your name sir"));
//  let message = (prompt("what's time in your region"));

//  let helo =`hello ${welcome} have a good ${message}`;
// alert(helo);

function welcome(user = prompt('name'),message = prompt('day'))
{
if(user=="" &&message=="")
{
user= "anonymous user"
message = "day "
}
    alert(`hello ${user} have a good ${message}`);
}
welcome();
// welcome(username=prompt("whats your name"),message=prompt(" what time is it") ) ;
// welcome();

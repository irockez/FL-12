let userPass = 'UserPass';
let adminPass = 'AdminPass';
let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com'
let email = prompt('What\'s your email?', '');
let five = 5;
let six = 6;

if (email === '' || email === null) {
  alert('Canceled');
} else if (email.length < five){
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === userEmail || email === adminEmail) {
    let pass = prompt('Password?', '');
            if (pass === '' || pass === null) {
                alert('Canceled');
            } else if (pass === userPass || pass === adminPass) {
                let changePass = confirm('Do you want to change your password?');
                if (!changePass) {
                        alert('You have failed the change.');                    
                } else {
                        let confirmPass = prompt('Write the old password');
                        if (confirmPass === '' || confirmPass === null) {
                            alert('Canceled');
                        } else if (confirmPass === userPass || confirmPass === adminPass) {
                            let newPass = prompt('Write the new password');
                            if (newPass === '' || newPass === null) {
                                alert('Canceled')
                            } else if (newPass.length < six) {
                                alert('It\'s too short password. Sorry.')
                            } else {
                                alert('You have successfully changed your password.');
                            }
                        } else {
                            alert('You wrote the wrong Password.');
                        }                        
                }
            } else {
                alert('Wrong password');
            } 
} else {
    alert('I don\'t know you');
}
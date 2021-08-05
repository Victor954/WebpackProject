export function checkUniqueEmail(value) {

    const emails = [
        'Email@Email.com',
        'Test@Email.com'
    ]

    return new Promise((reslove, reject) => {
        
        setTimeout(() => {

            if(!emails.includes(value)) {
  
                reslove({ msg: '' , isException: false});
       
             } else{
                 reslove({ 
                     isException: true,
                     msg: 'Пользователь с таким Email уже есть'   
                });
             }

        }, 2000);

      });
} 
document.body.style.backgroundColor = 'aliceblue';

var button = document.getElementById('acces');

alert('                              ENTER YOUR GROUP!!!');


button.onclick = function(){
    var morning = 'Your classes on Monday/Tuesday/Wednesday/Thursday beetween 10:00 - 13:45'
    var afternoon = 'Your classes on Monday/Tuesday/Wednesday/Thursday beetween 14:00 - 18:45'
    var evening = 'Your classes on Monday/Tuesday/Wednesday/Thursday beetween 19:00 - 21:45'
    var weekendsday = 'Your classes in Weekend beetween 10:00 - 15:45 '
    var weekendsnight = 'Your classes in Weekend beetween 16:00 - 21:45 '
    var groupnotfound = 'Group not found'
    
    var student = document.getElementById('student').value;
    var group = Number(student.slice(-3, -2));
    var info = document.getElementById('answer');

    switch(group){
        case 1:
            document.getElementById('student');
            info.innerHTML = morning;
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/13380455/pexels-photo-13380455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
            break;

        case 2:
            document.getElementById('student');
            info.innerHTML = afternoon;
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/10815581/pexels-photo-10815581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
            break;

        case 3:
            document.getElementById('student');
            info.innerHTML = evening;
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/6034022/pexels-photo-6034022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
            break;
        
        case 4:
            document.getElementById('student');
            info.innerHTML = weekendsday;
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/5168140/pexels-photo-5168140.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
            document.getElementById('answer').style.width = '30%'
            break;
    
         case 5:
            document.getElementById('student');
            info.innerHTML = weekendsnight;
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/13116534/pexels-photo-13116534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
            document.getElementById('answer').style.width = '30%'
            break;
        
        default:
            document.getElementById('student');
            info.innerHTML = groupnotfound;
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/9504092/pexels-photo-9504092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
            break;
    }
}


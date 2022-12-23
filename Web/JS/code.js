let menuFlag=1;
let showMenu = function(){
    let menu=document.getElementById('navbar-nav');
    if(menuFlag==1){
        menu.style.display='flex';
        menuFlag=0;
    }
    else{
        menu.style.display='none';
        menuFlag=1;
    }
}

let changeSlides = function(direction){
    var currentImage = $('.active');
    var nextImage = currentImage.next();
    var previousImage = currentImage.prev();
    if(direction=='next'){
        if(nextImage.length)
        {
            nextImage.addClass('active');
        }
        else{
            $('.slider .x').first().addClass('active');
        }
    }
    else if(direction=='previous'){
        if(previousImage.length)
        {
            previousImage.addClass('active');
        }
        else{
            $('.slider .x').last().addClass('active');
        }
    }
    currentImage.removeClass('active');
}

//Pre Register
let username = document.getElementById('name')
let password = document.getElementById('password')
let email = document.getElementById('email')
let date = document.getElementById('date')
let form = document.getElementById('form')
let nationality = document.getElementById('nationality')
let agree = document.getElementById('agree')
let errorElement = document.getElementById('error')
let errorElement2 = document.getElementById('error2')
let errorElement3 = document.getElementById('error3')
let errorElement4 = document.getElementById('error4')
let errorElement5 = document.getElementById('error5')
let errorElement6 = document.getElementById('error6')
let flag1=0
let flag2=0
let flag3=0
let flag4=0
let flag5=0
let flag6=0

form.addEventListener('submit', (e) => {

    let messages1 = []
    let messages2 = []
    let messages3 = []
    let messages4 = []
    let messages5 = []
    let messages6 = []

    vUsername(messages1)

    if(messages1.length > 0)
    {
        errorElement.innerText = messages1
    }
    vPassword(messages2)
    if(messages2.length > 0){
        errorElement2.innerText = messages2
    }
    vemails(messages3)
    if(messages3.length>0){
        errorElement3.innerText = messages3
    }
    vDate(messages4)
    if(messages4.length>0){
        errorElement4.innerText = messages4
    }
    vNationality(messages5)
    if(messages5.length>0){

        errorElement5.innerText = messages5
    }
    vAgree(messages6)
    if(messages6.length>0){
        errorElement6.innerText = messages6
    }
    if(flag1==1&&flag2==1&&flag4==1&&flag5==1&&flag6==1)
    {
        alert('pre-registration succesfull, we will send you an invitation email when we launch next beta test')
    }
    else{
        e.preventDefault()
    }
})


let vUsername = function(messages1)
{
    if(username.value === '' || username.value == null){
        messages1.push('Enter a Username')
    } else if(username.value.length< 6 || username.value.length> 20){
        messages1.push('Sorry, your username must be between 6 and 20 characters long')
    } else{
        flag1=1
        messages1.push('')
    }
}

let vPassword = function(messages2)
{
    if(password.value === '' || password.value ==null){
        messages2.push('Enter a Password')
    } else if(password.value.length<8){
        messages2.push('Your password must be more than 8 characters long')
    } else{
        messages2.push('')
        flag2=1
    }
}

let vemails = function(messages3)
{
    let a = '@'
    let valid = false
    for(let i=0;i<email.value.length;i++)
    {
        if(a.includes(email.value[i]))
        {
            valid=true
        }
    }
    if(email.value === '' || password.value == null){
        messages3.push('Enter a Email')
    } else if(!valid){
        messages3.push('Email must be contain \'@\'')
    } else{
        messages3.push('')
        flag3=1
    }
}

let vDate = function(messages4)
{
    if(date.value === ''){
        messages4.push('Please input your date of birth')
    } else{
        messages4.push(' ')
        flag4=1
    }
}

let vNationality = function(messages5)
{
    if(nationality.value === '')
    {
        messages5.push('Please choose your nationality')
    } else{
        messages5.push(' ')
        flag5=1
    }
}

let vAgree = function(messages6)
{
    if(!agree.checked)
    {
        messages6.push('Please checked the terms and agreement if you want to proccess')
    } else{
        messages6.push('')
        flag6=1
    }
}
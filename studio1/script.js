(function(){
    "use strict";
    console.log('Reading JS');

    const sections = document.querySelectorAll('section'); 
    let myText;
    let myText2;
    let myText3;
    let myText4;
    let removeText;
    let ingredient1;
    let ingredient2;
    let ingredient3;
    let ingredient4;
    let ingredient5;
    let ingredient6;

        document.querySelector('#myform').addEventListener('submit',function(event){
            event.preventDefault();
            const scenario= document.querySelector('#scenario').value;
            const num1= document.querySelector('#num1').value;
            const emotion= document.querySelector('#emotion').value;
            const color= document.querySelector('#color').value;
            const subject= document.querySelector('#subject').value;
            const num2= document.querySelector('#num2').value;
            const money= document.querySelector('#money').value;
            

        if(scenario == ''){
                myText= `Please tell us what brings you in today`;
                document.querySelector('#scenario').focus;
                document.querySelector('#error').innerHTML=myText;
        } else if(num1 == ''){
                removeText='';
                document.querySelector('#error').innerHTML=removeText;
                
                myText=`Please enter a number`;
                document.querySelector('#num1').focus;
                document.querySelector('#error2').innerHTML=myText;
        } else if(emotion == ''){
                removeText='';
                document.querySelector('#error2').innerHTML=removeText;
                myText=`Please enter an emotion`;
                document.querySelector('#emotion').focus;
                document.querySelector('#error3').innerHTML=myText;
                

        } else if(color == ''){
                removeText='';
                document.querySelector('#error3').innerHTML=removeText;
                myText=`Please enter a color`;
                document.querySelector('#color').focus;
                document.querySelector('#error4').innerHTML=myText;
        } else if(subject == ''){
                removeText='';
                document.querySelector('#error4').innerHTML=removeText;
                myText=`Please enter a subject`;
                document.querySelector('#subject').focus;
                document.querySelector('#error5').innerHTML=myText;

        } else if(num2 == ''){
                removeText='';
                document.querySelector('#error5').innerHTML=removeText;
                myText=`Please enter a number`;
                document.querySelector('#num2').focus;
                document.querySelector('#error6').innerHTML=myText;
        } else if(money == ''){
            removeText='';
            document.querySelector('#error6').innerHTML=removeText;
            myText=`Please enter an amount of money`;
            document.querySelector('#money').focus;
            document.querySelector('#error8').innerHTML=myText;
        }
        else {
                sections[0].className = "hidden";
                sections[1].className = "showing pay";
                myText2=`"Oh but before we proceed, that'll be ${money}. Small price to pay to make a wish come true, plus YOU set the price!"`;
                document.querySelector('#moneyPlease').innerHTML=myText2;

                myText3=`"Here you go, the recipe to your very own <br> ${scenario} Potion!"`;
                document.querySelector('#potionname').innerHTML=myText3;

                myText4=`<div class="recipename">${scenario} Potion </div?`;
                document.querySelector('#recipename').innerHTML=myText4;

                ingredient1=`${num1} handfull/s of ${emotion} root`;
                document.querySelector('#list1').innerHTML=ingredient1;

                ingredient3=`${num2} drops of ${color} slime`;
                document.querySelector('#list3').innerHTML=ingredient3;

                ingredient4=`a cup of ${subject} beans`;
                document.querySelector('#list4').innerHTML=ingredient4
             
                

                // myText= `my madlib will go here ${scenario} ${num1} ${emotion} ${color} ${subject} ${num2} ${object} ${money}`;  
                // document.body.innerHTML = document.body.innerHTML.replace('($$$)', `${money}`);
            }
       
    
       });

  

            
    document.querySelector('#myform2').addEventListener('submit',function(event){
        event.preventDefault();
        console.log('test');
        const time=document.querySelector('#time').value;
        const bodypart=document.querySelector('#bodypart').value;
        const fruit= document.querySelector('#fruit').value;
        const object= document.querySelector('#object').value;
        if(time == ''){
            myText='Please enter an amount of time'
            document.querySelector('#time').focus;
            document.querySelector('#errorpay').innerHTML=myText;
        } else if(bodypart == ''){
            removeText='';
            document.querySelector('#errorpay').innerHTML=removeText;
            myText='Please name a bodypart'
            document.querySelector('#bodypart').focus;
            document.querySelector('#errorpay2').innerHTML=myText;

        } else if(object == ''){
            removeText='';
            document.querySelector('#errorpay2').innerHTML=removeText;
            myText=`Please enter an object`;
            document.querySelector('#object').focus;
            document.querySelector('#error7').innerHTML=myText;
        }
        else if(fruit == ''){
            removeText='';
            document.querySelector('#error7').innerHTML=removeText;
            myText='Please name a fruit'
            document.querySelector('#fruit').focus;
            document.querySelector('#errorpay3').innerHTML=myText;

        } 
        else{
    
        sections[1].className = "hidden";
        sections[2].className = "showing right";

        ingredient2=`the juice of a/n ${object}`;
        document.querySelector('#list2').innerHTML=ingredient2;

        ingredient5=`3 ${bodypart} ${fruit}`;
        document.querySelector('#list5').innerHTML=ingredient5

        ingredient6=`Add the ingredients into a bowl and mix for exactly ${time}.`;
        document.querySelector('#mix').innerHTML=ingredient6


        ;

        
        
    }   
    
     });

     document.querySelector('#newPotion').addEventListener('click', function(event){
        event.preventDefault();
        sections[2].className ="hidden";
        sections[0].className ="showing ";
        document.getElementById("myform").reset();
        document.getElementById("myform2").reset();
     });

})();  
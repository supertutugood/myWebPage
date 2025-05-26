let currentCan = 0;
let canGot = false;

function NewCan(){
    if(!canGot){
        currentCan = Math.random() * 30;
        const can = document.getElementById('can');
        const sun = document.getElementById('sun');
        const quote = document.getElementById('quote')
        if(currentCan < 1){
            can.style.backgroundImage ="URL('Pepsi.png')";
            quote.innerHTML = "For people who loves TVs.";
        } 
        else if(currentCan < 2)
        {
            can.style.backgroundImage ="URL('7up.png')";
            quote.innerHTML = "Stand up.";
        } 
        else if(currentCan < 3)
        {
            can.style.backgroundImage ="URL('MountainDew.png')";
            quote.innerHTML = "Mmmm! Acid!";
        }
        else if(currentCan < 4)
        {
            can.style.backgroundImage ="URL('Banana.png')";
            quote.innerHTML = "How did that even get in there?!";
        } 
        else if(currentCan < 5)
        {
            can.style.backgroundImage ="URL('Bloxy.png')";
            quote.innerHTML = "Robloxian's favourite drink";
        }
        else if(currentCan < 6){
            can.style.backgroundImage ="URL('Bonk.png')";
            quote.innerHTML = "\"Ya can't hit what ain't dere!\"";
        } 
        else if(currentCan < 7)
        {
            can.style.backgroundImage ="URL('Bubly.png')";
            quote.innerHTML = ":)";
        } 
        else if(currentCan < 8)
        {
            can.style.backgroundImage ="URL('Card.png')";
            quote.innerHTML = "That's just an Pokemon card...";
        }
        else if(currentCan < 9)
        {
            can.style.backgroundImage ="URL('Coca.png')";
            quote.innerHTML = "\"Coca Cola Espuma!\"";
        } 
        else if(currentCan < 10)
        {
            can.style.backgroundImage ="URL('Cranberry.png')";
            quote.innerHTML = "\"Want a sprite cranberry?\"";
        }
        else if(currentCan < 11){
            can.style.backgroundImage ="URL('Cream.png')";
            quote.innerHTML = "You love it, or you hate it!";
        } 
        else if(currentCan < 12)
        {
            can.style.backgroundImage ="URL('DietPepsi.png')";
            quote.innerHTML = "The \"better\" option.";
        } 
        else if(currentCan < 13)
        {
            can.style.backgroundImage ="URL('Doritos.png')";
            quote.innerHTML = "Wrong vending machine!";
        }
        else if(currentCan < 14)
        {
            can.style.backgroundImage ="URL('DrPepper.png')";
            quote.innerHTML = "Cherry.";
        } 
        else if(currentCan < 15)
        {
            can.style.backgroundImage ="URL('Fanta.png')";
            quote.innerHTML = "Better than orange juice.";
        }
        else if(currentCan < 16){
            can.style.backgroundImage ="URL('Grape.png')";
            quote.innerHTML = "Grape";
        } 
        else if(currentCan < 17)
        {
            can.style.backgroundImage ="URL('HL2.png')";
            quote.innerHTML = "\"Pick up that can.\"";
        } 
        else if(currentCan < 18)
        {
            can.style.backgroundImage ="URL('IcedTea.png')";
            quote.innerHTML = "For chill people.";
        }
        else if(currentCan < 19)
        {
            can.style.backgroundImage ="URL('Monster.png')";
            quote.innerHTML = "Battery acid for your body!";
        } 
        else if(currentCan < 20)
        {
            can.style.backgroundImage ="URL('MUG.png')";
            quote.innerHTML = "Dog! :3";
        }
        else if(currentCan < 21){
            can.style.backgroundImage ="URL('Orange.png')";
            quote.innerHTML = "\"Fanta\" wanna be.";
        } 
        else if(currentCan < 22)
        {
            can.style.backgroundImage ="URL('Paint.png')";
            quote.innerHTML = "Paint \"can\".";
        } 
        else if(currentCan < 23)
        {
            can.style.backgroundImage ="URL('RedBull.png')";
            quote.innerHTML = "How does a bull give you wings?";
        }
        else if(currentCan < 24)
        {
            can.style.backgroundImage ="URL('Sprite.png')";
            quote.innerHTML = "Better 7up.";
        } 
        else if(currentCan < 25)
        {
            can.style.backgroundImage ="URL('SEVN.png')";
            quote.innerHTML = "Great for cocktails!";
        }
        else if(currentCan < 26){
            can.style.backgroundImage ="URL('Tomato.png')";
            quote.innerHTML = "Soup \"can\".";
        } 
        else if(currentCan < 27)
        {
            can.style.backgroundImage ="URL('V8.png')";
            quote.innerHTML = "Vegie juice";
        } 
        else if(currentCan < 28)
        {
            can.style.backgroundImage ="URL('Water.png')";
            quote.innerHTML = "Just bring a water bottle instead!";
        }
        else if(currentCan < 29)
        {
            can.style.backgroundImage ="URL('Witch.png')";
            quote.innerHTML = "\"Warning: may contain actual witches.\"";
        } 
        else if(currentCan < 30)
        {
            can.style.backgroundImage ="URL('AW.png')";
            quote.innerHTML = "The original root beer";
        }                
        canGot = true;
        sun.classList.remove('exitCan')
        sun.classList.add('enterCan');
    }
    else{
        canGot = false;
        
        sun.classList.add('exitCan');
    }
}
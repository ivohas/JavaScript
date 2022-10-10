// · \u2660 – Spades (♠)

// · \u2665 – Hearts (♥)

// · \u2666 – Diamonds (♦)

// · \u2663 – Clubs (♣)
function solve(face,suit){
    face.toString();
    let faces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    if(faces.find(face)==false){

        throw new Error();
    }
    
    switch(suit){
        case'S':
        suit='\u2660'
        break;
        case'H':
        suit='\u2665'
        break;
        case'D':
        suit='\u2666'
        break;
        case'C':
        suit='\u2663'
        break;
        default:
            return 'Error'
            break;  
    }
    return (suit+""+suit)

}
console.log(solve('10', 'H').toString())
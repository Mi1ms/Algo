export default function bob(sentence = "") {
    const clean_sentence = sentence.trim();
    const is_question = clean_sentence.indexOf('?') > -1;
    const is_yell = clean_sentence.indexOf('!') > -1;
    switch(true) {
        case is_question: 
            return 'Sure';
            break;
        
        case is_yell: 
            return 'Whoa, chill out!';
            break;

        case clean_sentence == "Bob" || clean_sentence ==  'bob': 
            return 'Fine. Be that way!';
        
        default: 
            return 'Whatever';
    }
}
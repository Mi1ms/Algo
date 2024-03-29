export default function pangram(sentence) {
    const alphabet_letter_used = {
        'a': false,
        'b': false,
        'c': false,
        'd': false,
        'e': false,
        'f': false,
        'g': false,
        'h': false,
        'i': false,
        'j': false,
        'k': false,
        'l': false,
        'm': false,
        'n': false,
        'o': false,
        'p': false,
        'q': false,
        'r': false,
        's': false,
        't': false,
        'u': false,
        'v': false,
        'w': false,
        'x': false,
        'y': false,
        'z': false        
    }   

    for (const letter of sentence.toLowe) {
        if (alphabet_letter_used[letter] === false) {
            alphabet_letter_used[letter] = true;
        }
    }

    return Object.values(alphabet_letter_used).includes(false) ? false : true;
}
export default function transcription(dna){
    const arr_dna = {
        'G': "C",
        'C': "G",
        'T': "A",
        'A': "U"
    };
    let new_dna = [];
    let dna_split = dna.split('');

    for (let key of dna_split ) {
        const elem = dna_split[key];
        if (typeof arr_dna[key] == 'undefined') {
            throw `Nucleotide ${key} does not exist`;
        }
        new_dna.push(arr_dna[key]);
    }
    return new_dna.join('');
}
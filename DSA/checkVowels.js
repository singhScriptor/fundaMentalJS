function checkVowels(str){
    str=str.toLowerCase()
    let vowel='aeiou'
    return  vowel.includes(str) ? 'Vowel' : 'Consonant'

}
let str='e'
console.log(checkVowels(str))

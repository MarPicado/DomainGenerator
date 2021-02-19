let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.com', '.net', '.gov', '.us']

function DomainGenerator(arrpronoun, arradj, arrnoun, arrdom) {
    let domains = [];
    arrpronoun.forEach((elementpronoun) => {
        arradj.forEach((elementadj) => {
            arrnoun.forEach((elementnoun) => {
                arrdom.forEach((elementdom) => {
                    let string = elementpronoun + elementadj + elementnoun + elementdom;
                    domains.push(string);
                })
            })
        })
    })
    return domains;
}
console.log(DomainGenerator(pronoun, adj, noun, dom));
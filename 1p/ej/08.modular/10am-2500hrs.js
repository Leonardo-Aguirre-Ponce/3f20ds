let hri = 10;
let hrf = 2500;
console.log('Hace 2500 hrs, fueron las ', modular(hri),'hs');

function modular(hrs){
    let lesshrs = hrf % 24;
    if(lesshrs > hrs){
        let sumhrs = 24 + hrs - lesshrs;
        return sumhrs;       
    }
    let sumhrs = hrs - lesshrs;
    return sumhrs;
}
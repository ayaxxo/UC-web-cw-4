
alert(` مرحبا بك في موقعي ! أنا آية و سوف أحسب درجتك `)
let grade = prompt(` قم بإدخال درجتك `)
console.log('%c'+ grade ,'color:green');
if (grade>=90 && grade<=100){
    console.log("لقد حصلت على امتياز 🥳");
}
else if (grade>=80 && grade<=89){
    console.log("لقد حصلت على جيد جداً🤩");
}
else if (grade>=70 && grade<=79){
    console.log("لقد حصلت على جيد🙂");
}
else if (grade>=60 && grade<=69){
    console.log("لقد حصلت على مقبول😕");
}
else if (grade>=50 && grade<=59){
    console.log("لقد حصلت على ضعيف☹️");
}
else{
    console.log("راسب💔")
}
// this is a comment in Javascript
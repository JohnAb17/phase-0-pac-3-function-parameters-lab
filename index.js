function introduction(name) {
   const string = `Hi, my name is ${name}.`;
   console.log(string)
   return string;
}

function introductionWithLanguage(name, language = "JavaScript") {
    const string = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(string)
    return string;
 }
 function introductionWithLanguageOptional(name, language = "JavaScript") {
    const string = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(string)
    return string;
 }


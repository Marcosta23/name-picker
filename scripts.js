let class71 = {
    name: "class71",
    students: ['AGATHA', 'CAIO', 'DAVI', 'DEIVISON', 'EMANUEL', 'EMANUELI', 'EMILLY', 'GIOVANA', 'INGRID', 'ISABELA', 'ISABELLI', 'JACKSON', 'JANAINA', 'JENIFER', 'JENNIFER',
        'JOÃO', 'KETLEN', 'LARISSA', 'LAURA', 'LETICIA', 'LUCAS', 'MARIA', 'MATEUS', 'MATHEUS', 'PEDRO', 'PIETRA',
        'SEIJY', 'STIVEN', 'THIAGO']
};
let class72 = {
    name: "class72",
    students: ['ANDRESSA', 'BRENDA', 'BRUNA', 'CAMILLY', 'DANIEL', 'FELIPE', 'GABRIEL', 'HAYLA',
        'IGOR', 'ISA OLIVEIRA', 'ISA OECHSLER', 'ISA MULLER', 'ISA BRUCH', 'ISA SABINO', 'JEFFERSON', 'JOÃO',
        'JONATAS', 'KAMILLE', 'KAUA', 'KAYLAN', 'LAURA M', 'LAURA V', 'LUARA', 'LUIS', 'MELAINE', 'MICHEL', 'NICOLAS',
        'NICOLY', 'SAMUEL', 'SOFIA', 'STEFANI']
};
let class73 = {
    name: "class73",
    students: ['ANA', 'ANDERSON', 'BEATRIZ', 'BRAYAN', 'BRUNO', 'CRISTHOFFER', 'DARLAN', 'EMANUEL', 'EMANUELE', 'EMANUELLY',
        'GABRIEL', 'GIOVANA', 'GUILHERME', 'HELOISE', 'HIGOR', 'JONATAN', 'KAMILLI', 'MAIRA', 'MATHEUS H', 'MATHEUS K',
        'MAYLLA', 'NATHALIA', 'NICOLY', 'RAFAEL', 'STHEFANY', 'TALISON']
};
let class74 = {
    name: "class74",
    students: ['AMABILY', 'AMANDA', 'ANA CAROLINA', 'ANA CLARA', 'ARTHUR', 'AYSHA', 'BIANCA', 'BRUNA',
        'CAMILY', 'CAUA', 'ELMA', 'ENZO', 'ERIK', 'EVELYN', 'FILLIPE', 'GUSTAVO', 'ISABELI', 'KAMILLY', 'LEO',
        'LIARA', 'MARIA', 'MARIANA', 'MARLON', 'MATEUS', 'MAYSA', 'MILENA', 'RODRIGO', 'VITORIA', 'WILLIAN']
};
let class91 = {
    name: "class91",
    students: ['ALINI', 'A. FISCHER', 'ANA LIVIA', 'BRENDA', 'CAMILA', 'CAMILI', 'GABRIEL', 'GUILHERME',
        'HERBERTH', 'JHOSEPH', 'JOÃO', 'JUAN', 'KETLYN', 'LIRIO', 'LUAN', 'LUANI', 'MIKAEL', 'NATHAN', 'NICOLY',
        'PEDRO H', 'PEDRO LUIS', 'REBECA', 'RIAN', 'THALYA', 'THIAGO', 'YASMIN']
};
var Text = "";
var chooseClass = [class71, class72, class73, class74, class91]

var choosen = [];

function sortear() {
    console.log("oi")
    var radios = document.querySelector('input[name="my-class"]:checked').value;
    for (let i = 0; i < chooseClass.length; i++) {
        if (radios == chooseClass[i].name) {
            chooseStudent(chooseClass[i].students.length, i);
        }
    }
}
function chooseStudent(n, i) {
    let choose = Math.floor(Math.random() * n);
    var name = chooseClass[i].students[choose];
    if (choosen.length == 0) {
        choosen.push(name);
        Text = "<tr>" + "<td>" + choosen[i] + "</td>" + "</tr>";
    } else {
        if (findName(name)) {
            choosen.push(name);
            Text = "";
            for (let i = 0; i < choosen.length; i++) {
                Text += "<tr>" + "<td>" + choosen[i] + "</td>" + "</tr>";
            }
        } else {
            chooseStudent(n, i);
        }
    }
    
    document.getElementById("picker").innerHTML = name;
    document.getElementById("demo").innerHTML = Text;
}

function findName(n) {
    for (let i = 0; i < choosen.length; i++) {
        if (n == choosen[i]) {
            console.log("opa");
            return false;
        }else{
            
        }
    }
    return true;
}


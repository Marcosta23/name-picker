let turma71 = ['AGATHA', 'CAIO', 'DAVI', 'DEIVISON', 'EMANUEL', 'EMANUELLI',
'EMILLY', 'GIOVANA', 'INGRID', 'ISABELA', 'ISABELLI', 'JACKSON', 'JANAINA', 'JENIFER', 'JENNIFER', 
'JOÃO', 'KETLEN', 'LARISSA','LAURA', 'LETICIA', 'LUCAS', 'MARIA', 'MATEUS', 'MATHEUS', 'PEDRO', 'PIETRA',
'SEIJY', 'STIVEN', 'THIAGO'];
let turma72 = ['ANDRESSA', 'BRENDA', 'BRUNA', 'CAMILLY', 'DANIEL', 'FELIPE', 'GABRIEL', 'HAYLA',
'IGOR', 'ISA OLIVEIRA', 'ISA OECHSLER', 'ISA MULLER', 'ISA BRUCH', 'ISA SABINO', 'JEFFERSON', 'JOÃO',
'JONATAS', 'KAMILLE', 'KAUA', 'KAYLAN', 'LAURA M', 'LAURA V', 'LUARA', 'LUIS', 'MELAINE', 'MICHEL', 'NICOLAS',
'NICOLY', 'SAMUEL', 'SOFIA', 'STEFANI'];
let turma73 = ['ANA','ANDERSON', 'BEATRIZ', 'BRAYAN', 'BRUNO', 'CRISTHOFFER', 'DARLAN', 'EMANUEL', 'EMANUELE', 'EMANUELLY', 
'GABRIEL', 'GIOVANA', 'GUILHERME', 'HELOISE', 'HIGOR', 'JONATAN', 'KAMILLI', 'MAIRA', 'MATHEUS H', 'MATHEUS K',
'MAYLLA', 'NATHALIA', 'NICOLY', 'RAFAEL', 'STHEFANY', 'TALISON'];
let turma74 = ['AMABILY', 'AMANDA',    'ANA CAROLINA', 'ANA CLARA', 'ARTHUR', 'AYSHA', 'BIANCA', 'BRUNA',
'CAMILY', 'CAUA', 'ELMA', 'ENZO', 'ERIK', 'EVELYN', 'FILLIPE', 'GUSTAVO', 'ISABELI', 'KAMILLY', 'LEO',
'LIARA', 'MARIA', 'MARIANA', 'MARLON', 'MATEUS', 'MAYSA', 'MILENA', 'RODRIGO', 'VITORIA', 'WILLIAN'];
let turma91 = ['ALINI', 'FISCHER', 'ANA LIVIA', 'BRENDA', 'CAMILA', 'CAMILI', 'GABRIEL', 'GUILHERME', 
'HERBERTH', 'JHOSEPH', 'JOÃO', 'JUAN', 'KETLYN', 'LIRIO', 'LUAN', 'LUANI', 'MIKAEL', 'NATHAN', 'NICOLY',
'PEDRO H', 'PEDRO LUIS', 'REBECA', 'RIAN', 'THALYA', 'THIAGO', 'YASMIN']


document.getElementById("btnSubmit").onclick = function() {
    var name = 'fulano'
    var chooseClass;
    let chooseStudent = Math.floor(Math.random() *( 35));
    var radios = document.getElementsByName("my-class");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "class71"){

            if (chooseStudent >= turma71.length) {
                name = 'sorteie de novo'
                
            }else{
               
               chooseClass = 'turma71';
               name = turma71[chooseStudent]  
            }

        }else  if (radios[i].value === "class72"){

            if (radios[i].checked) {

                 if (chooseStudent >= turma72.length) {
                name = 'sorteie de novo'
               
            }else{
              
               chooseClass = 'turma72';
               name = turma72[chooseStudent]  
            }
            }
        }else  if (radios[i].value === "class73"){

            if (radios[i].checked) {
                if (chooseStudent >= turma73.length) {
                    name = 'sorteie de novo'
                  
                }else{
                  
                   chooseClass = 'turma73';
                   name = turma73[chooseStudent]  
                }
            }
        }else  if (radios[i].value === "class74"){

            if (radios[i].checked) {
                if (chooseStudent >= turma74.length) {
                    name = 'sorteie de novo'
                   
                }else{
                 
                   chooseClass = 'turma74';
                   name = turma74[chooseStudent]  
                }
            }
        }else  if (radios[i].value === "class91"){

            if (radios[i].checked) {
                if (chooseStudent >= turma91.length) {
                    name = 'sorteie de novo'
                   
                }else{
                   
                   chooseClass = 'turma91';
                   name = turma91[chooseStudent]  
                }
            }
        }
    }
    
   
    document.getElementById("picker").innerHTML = name;
};

new Vue({
    el: '#form',
    data : {
        dadosForm: {
            nome : '',
            telefone: '',
            comoConheceu: [],
            redeSocial: '',
            rede: []
        },
        opComoConheceu: [],
        opRede: []


    },
    created : function(){
        const vm = this;
        // Endpoint axios  e vue teste
        // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(function(response){
        //     console.log(response);
        // }); 
        vm.getOpcoesConheceu();
        vm.getOpcoesRede();
        vm.enviaDados();

    },
    methods : {
        // Simula dados vindo de uma api com os tipos de informações para "Como nos conheceu"
        getOpcoesConheceu : function(){
            const vm = this;
            vm.opComoConheceu = ["Tv", "Internet", "Outros"];
        },
        getOpcoesRede : function(){
            const vm = this;
            vm.opRede = ["Facebook", "Linkedin", "Instagram"];
        },
        enviaDados: function(){
            axios.post('http://localhost:8080').then(function(response){

            }).catch(function(error){
                alert(error);
            });
        }
      
    // Nome: Tipo Texto
    // Telefone: Tipo Texto
    // Como nos conheceu: Tipo Combo box (select) com as seguintes opções: Tv, Internet e outros.
    // Possui rede social: Tipo rádio com as opções Sim e Não. Ao clicar em Sim, habilitar o campo abaixo.
    // Quais: Tipo checkbox com as seguintes opções Facebook, LinkedIn e Instagram.

    }
})
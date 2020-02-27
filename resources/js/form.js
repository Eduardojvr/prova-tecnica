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
            const vm =this;
            console.log(vm.dadosForm.rede);
            // axios.post('http://localhost:8080').then(function(response){

            // }).catch(function(error){
            //     // alert(error);
            // });
        }
    }
})
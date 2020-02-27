new Vue({
    el: '#form',
    data : {
        dadosForm: {
            nome : '',
            telefone: '',
            comoConheceu: '',
            redeSocial: '',
            rede: []
        },
        opComoConheceu: [],
        opRede: [],
        nomeTmp: '',
        sobrenomeTmp: '',
        mensagens: []
    },
    created : function(){
        const vm = this;
        vm.getOpcoesConheceu();
        vm.getOpcoesRede();
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
        verificaCampos: function(){
            const vm = this;
            vm.mensagens = [];
            var status = true;
            const regex = /[0-9]/;

                if (vm.nomeTmp == "" || regex.test(vm.nomeTmp) == true){
                    vm.mensagens.push("Preencha o campo nome corretamente");
                    status = false;
                }

                if (vm.sobrenomeTmp == "" || regex.test(vm.sobrenomeTmp) == true){
                    vm.mensagens.push("Preencha o campo sobrenome corretamente");
                    status = false;
                }

                if (vm.dadosForm.telefone == ""){
                    vm.mensagens.push("Preencha o campo telefone");
                    status = false;
                }

                if (vm.dadosForm.comoConheceu == ""){
                    vm.mensagens.push("Informe como nos conheceu");
                    status = false;
                }

                if (vm.dadosForm.redeSocial == ""){
                    vm.mensagens.push("Informe se você possui alguma rede social");
                    status = false;
                }

                if (vm.dadosForm.rede.length <= 0 && vm.dadosForm.redeSocial == 'sim'){
                    vm.mensagens.push("Seleciona a(s) rede(s) sociais que você utiliza");
                    status = false;
                }

                return status;
        },
        enviaDados: function(){
            const vm =this;
            if(vm.verificaCampos()){
                vm.dadosForm.nome = vm.nomeTmp +' '+ vm.sobrenomeTmp;
                if (vm.dadosForm.redeSocial != 'sim'){
                    vm.dadosForm.rede = [];
                }
                console.log(vm.dadosForm);
                
                // Simula post para localhost:8080
                axios.post('http://localhost:8080', vm.dadosForm).then(function(response){
                    alert("Dados enviados!");
                });
                document.getElementById("botao").disabled = true;
                document.getElementById("botao").style.background = '#D3D3D3';

            } else {
                $("#alerta").modal("show");
            }
            
            
        }
    }
})
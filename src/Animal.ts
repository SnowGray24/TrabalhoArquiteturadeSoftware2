import AnimalAquatico from "./AnimalAquatico";
import AnimalTerreste from "./AnimalTerrestre";
import AnimalVoador from "./animalVoador";

class Animal implements AnimalVoador, AnimalAquatico, AnimalTerreste{
    private id:Number;
    private nome:String;
    private especie:String;
    private descricao:String;
    private peso:Number;
    private altura:Number;
    private saude:Number;
    private fome:Number;
    private sono:Number;

    //Construtor de um Animal
    constructor(id:Number, nome:String,especie:String, descricao:String, peso:Number, altura:Number, saude:Number, fome:Number, sono:Number){
        this.setId(id);
        this.setNome(nome);
        this.setEspecie(especie);
        this.setDescricao(descricao);
        this.setPeso(peso);
        this.setAltura(altura);
        this.setSaude(saude);
        this.setFome(fome);
        this.setSono(sono);
    }

    /** Set e Get para a variável Id */
    public setId = (id:Number) =>{
        this.id = id;
    }
    public getId = () =>{
        return this.id;
    }

    /** Set e Get para a variável Nome */
    public setNome = (nome: String) =>{
        this.nome = nome;
    }
    public getNome = () =>{
        return this.nome;
    }

    /** Set e Get para a variável Espécie */
    public setEspecie = (especie: String)=>{
        this.especie = especie;
    }
    public getEspecie = () =>{
        return this.especie;
    }


    public setDescricao = (descricao: String) =>{
        this.descricao = descricao;
    }
    public getDescricao = () =>{
        return this.descricao;
    }


    public setPeso = (peso: Number) =>{
        this.peso = peso;
    }
    public getPeso = () =>{
        return this.peso;
    }

    /** Set e Get para a variável Altura */
    public setAltura = (altura: Number) =>{
        this.altura = altura;
    }
    public getAltura = () =>{
        return this.altura;
    }


    /** Set e Get para a variável Saúde */
    public setSaude = (saude: Number) =>{
        this.saude = saude;
    }
    public getSaude = () =>{
        return this.saude;
    }

    /** Set e Get para a variável Fome */
    public setFome = (fome: Number) =>{
        this.fome = fome;
    }
    public getFome = () =>{
        return this.fome;
    }

    /** Set e Get para a variável Sono */
    public setSono = (sono: Number) =>{
        this.sono = sono;
    }
    public getSono = () =>{
        return this.sono;
    }



    public info = () =>{
        console.log("******* Info Animal *********");
        console.log("Nome: "+this.getNome());
        console.log("Espécie: "+this.getEspecie());
        console.log("Descrição: "+this.getDescricao());
        console.log("Altura: "+this.getAltura());
        console.log("Peso: "+this.getPeso());
        console.log("*****************************")
    }

    public status = () =>{
        console.log("***** Status do Animal *****");
        console.log("Saude: "+this.getSaude());
        console.log("Fome: "+this.getFome());
        console.log("Sono: "+this.getSono());
        console.log("****************************");
    }





    /* ****************************************** */
    /* ***** Métodos sobre diminuir Status *****  */
    /* ****************************************** */
    
        //Diminui o status de fome do Pet. Quanto menor,
        //mais o pet se sente energizado.
        public downFome = (value:Number) =>{

            this.setFome(+this.getFome() - +value);
            if (this.getFome() < 0){
                this.setFome(0);
            }
        }

        //Diminui o status de sono do Pet. Quanto menor,
        //mais ativo o Pet fica.
        public downSono = (value:Number) =>{

            this.setSono(+this.getSono() - +value);

            if (this.getSono() < 0){
                this.setSono(0);
            }
        }

        //Diminui o status de saúde do Pet. Quanto menor,
        //mais o Pet se encontra em risco de morte.
        public downSaude = (value:Number) =>{
            this.setSaude(+this.getSaude() - +value);
            if (this.getSaude() < 0){
                this.setSaude(0);
            }
        }

    /* ****************************************** */





    /* ****************************************** */
    /* ***** Métodos sobre aumentar Status *****  */
    /* ****************************************** */

        //Aumenta o status de fome do Pet. Quanto maior,
        //mais o Pet fica com fome.
        public upFome = (value:Number) =>{
            this.setFome(+this.getFome() + +value)
            if (this.getFome() > 100){
                this.setFome(100);
            }
        }

        //Aumenta o status de Sono do Pet. Quanto maior,
        //mais sonolento ele fica.
        public upSono = (value:Number) =>{
            this.setSono(+this.getSono() + +value);
            if (this.getSono() > 100){
                this.setSono(100);
            }
        }

        //Aumenta o status da saúde do Pet. Quando maior,
        //mais saudável o Pet fica.
        public upSaude = (value:Number) =>{
            this.setSaude(+this.getSaude() + +value)
            if (this.getSaude() > 100){
                this.setSaude(100)
            }
        }

    /* ****************************************** */
    




    /* ****************************************** */
    /*  Métodos especificos para Pets Aquáticos   */
    /* ****************************************** */
        
        public nadar = () => {
            console.log(this.getNome()+" está nadando profundamente...");
        }

    /* ******************************************* */





    /* ****************************************** */
    /*  Métodos especificos para Pets Voadores    */
    /* ****************************************** */
        
        public voar = () =>{
            console.log(this.getNome()+" está voando rapidamente no céu...");
        }
    
    /* ****************************************** */





    /* ****************************************** */
    /*  Métodos especificos para Pets Terrestres  */
    /* ****************************************** */
    
        public correr = () =>{
            console.log(this.getNome()+" está correndo muito rápido!!! Que velocidade!!!");
        }

    /* ****************************************** */
}

export default Animal;
import Animal from "./Animal";
import AnimalAquatico from "./AnimalAquatico";
import AnimalTerreste from "./AnimalTerrestre";
import AnimalVoador from "./AnimalVoador";
import Conta from "./Conta";
import ContaNormal from "./ContaNormal";
import ContaVip from "./ContaVip";
import {Md5} from "../node_modules/ts-md5/dist/md5";

class User{
    private id:Number;
    private nome:String;
    private senha:String;
    private email:String;
    private conta:Conta;

    constructor (id:Number,nome:String, senha:String, email:String){
        this.setId(id);
        this.setNome(nome);
        this.setEmail(email);
        this.setSenha(senha);
        this.setConta(new ContaNormal());
    }

    /** Set e Get na variável Id */
    setId = (id: Number) =>{
        this.id = id;
    }
    getId = () =>{
        return this.id;
    }

    /** Set e Get na variável Nome */
    setNome = (nome: String) =>{
        this.nome = nome;
    }
    getNome = () =>{
        return this.nome;
    }

    /** Set e Get na variável Senha */
    setSenha = (senha: String) =>{
        this.senha = Md5.hashStr(""+senha+"");
    }
    getSenha = () =>{
        return this.senha;
    }

    /** Set e Get na variável Email */
    setEmail = (email: String) =>{
        this.email = email;
    }
    getEmail = () =>{
        return this.email;
    }

    /** Set e Get na variáveç Conta */
    setConta = (conta: Conta) =>{
        this.conta = conta;
    }




    info = ()=>{
        console.log("Nome: "+this.getNome());
        console.log("Senha: "+this.getSenha());
        console.log("Email: "+this.getEmail());    
    }

    infoStatusConta =  ()=>{
        this.conta.status();
    }

    addContaVip =  ()=>{
        this.setConta(new ContaVip());
    }

    addContaNormal = () =>{
        this.setConta(new ContaNormal());
    }

    createAnimalVoador = (id:Number, nome:String, especie:String, descricao:String, peso:Number, altura:Number) =>{
        const animal:AnimalVoador = new Animal(id,nome,especie,descricao,peso,altura,100,0,0);
        return animal;
    }

    createAnimalAquatico = (id:Number, nome:String, especie:String, descricao:String, peso:Number, altura:Number) =>{
        const animal:AnimalAquatico = new Animal(id,nome,especie,descricao,peso,altura,100,0,0);
        return animal;
    }

    createAnimalTerreste = (id:Number, nome:String, especie:String, descricao:String, peso:Number, altura:Number) =>{
        const animal:AnimalTerreste = new Animal(id,nome,especie,descricao,peso,altura,100,0,0);
        return animal;
    }
}

export default User;
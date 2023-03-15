<template>
    <div>
        <br>
        <div class="notification is-danger" v-if="errMsg">
            <h4>{{errMsg}}</h4>
        </div>
        <br> 
        <h3>Login de usuário</h3>
        <hr>
        <div class="columns is-centered">
            <div class="column is-half">
                <h4>Email:</h4>
                <input type="text" name="Email" class="input" v-model="email">
                <br>
                <br>
                <h4>Senha:</h4>
                <input type="password" name="Passowrd" class="input" v-model="password">

                <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                        <router-link to="/register"> <small>Registre-se</small> </router-link>
                        <br>
                        <router-link to="/recoverPassword"> <small>Esqueceu a senha?</small> </router-link>
                    </div>
                </div>

                <button class="button is-success" @click="login">Login</button>

            </div>

        
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'LoginVue',
    data(){
        return{
            email: '',
            password: '',
            errMsg: undefined
        }
    },
    methods: {

        login(){
            axios.post("http://localhost:8686/login", {
                email: this.email,
                password: this.password
            }).then(res => {
                console.log(res);
            }).catch(err => {
                this.errMsg = err.response.data;
            });

        }
    }
}
</script>
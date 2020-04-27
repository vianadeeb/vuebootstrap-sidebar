
<template>
    <div class="login">
        <div class="login-card">
            <img src="../assets/img/delivery.png" width="100px" height="100px" />
                <b-form-input v-model="form.username" class="mb-2 mt-2" placeholder="رقم الهاتف"></b-form-input>
                <b-button block variant="primary" @click="login">تسجيل دخول</b-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form:{
                username: null,
                password: null
            }
        }
    },
    methods:{
        // login(){
        //     this.$axios.post("/login", this.form).then((succ) => {
        //         this.$router.push("/")
        //     })
        // }
    }
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 100vh;
    background-image: radial-gradient(circle farthest-corner at 10% 20%,#22668a 0,#9a76ff 80.6%);
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-card { 
    width: 340px;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
}
@font-face
    {
    font-family:jflat; 
    src:url('../assets/fonts/jf-flat.ttf'); 
    }
*,body
{
 font-family:jflat;

}
</style>
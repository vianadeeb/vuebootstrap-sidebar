<template>
  <div class="login">
    <vue-headful title="تسجيل دخول" description="login" />
    <div class="login-card">
      <h6 class="pageTitle">تسجيل الدخول الى الموقع</h6>
      <p class="ph">الرجاء كتابة رقم الهاتف ليصلك رمز التأكيد</p>
      <img
        v-show="isshow"
        src="../assets/img/on_the_way.svg"
        alt="loginimg"
        class="scaleimg"
      />
      <img
        v-show="!isshow"
        src="../assets/img/drone_delivery.svg"
        alt="loginimg"
        class="scaleimg"
      />
      <b-form-input
        v-model="form.username"
        v-show="isshow"
        class="mb-2 mt-4"
        placeholder="أدخل رقم الهاتف"
      ></b-form-input>
      <b-form-input
        v-model="form.password"
        v-show="!isshow"
        class="mb-2 mt-4"
        placeholder="أدخل رمز التأكيد"
      ></b-form-input>
      <b-button
        block
        variant="primary"
        v-show="isshow"
        v-on:click="isshow = !isshow"
        @click="login"
        >أرسال رمز التأكيد</b-button
      >
      <b-button block variant="primary" v-show="!isshow" @click="login"
        >تأكيد</b-button
      >
      <p class="footerlogin">
        جميع الحقوق محفوظة لدى شركة انجاز
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      isshow: true,
      name: "vue-title",
      props: ["title"],
      watch: {
        title: {
          immediate: true,
          handler() {
            document.title = this.title;
          },
        },
      },
      render() {},
    };
  },
  // methods:{
  //       login(){
  //           this.$axios.post("/login", this.form).then((succ) => {
  //               this.$router.push("/")
  //           })
  //       }
  //   },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #4c92f3, #88aee3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
  width: 360px;
  padding: 40px;
  background: #fff;
}
.footerlogin {
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
}
@font-face {
  font-family: jflat;
  src: url("../assets/fonts/jf-flat.ttf");
}
.ph {
  color: #adadad;
  font-size: 14px;
  text-align: center;
}
.pageTitle {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}
.loginForm {
  padding: 39px;
  width: 70%;
  margin: auto;
}
*,
body,
html {
  font-family: jflat !important;
}
.scaleimg {
  transition: 0.5s;
  cursor: pointer;
  width: 100%;
  height: 250px;
}
.scaleimg:hover {
  transform: scale(1.1);
}
</style>

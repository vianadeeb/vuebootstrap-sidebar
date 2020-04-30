<template>
  <div>
   <!-- Start Header -->
  <div>
  <b-navbar toggleable="lg" type="dark" class="colornav">
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
         <router-link to="/reports" class="styltextnav">
         <i class="fas fa-book-open"></i>
         التقارير
         </router-link>
       <router-link to="/orders" class="styltextnav">
       <i class="fas fa-folder-open"></i>
         الطلبات
         </router-link>
         <router-link to="/myorders" class="styltextnav">
         <i class="fas fa-folder"></i>
         طلباتي
         </router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       

       
      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <!--end of header-->
  </div>
</template>
<script>
export default {
  name: "Navbarcomp",
  data() {
    return {
     
    };
  },

  methods: {
   
       
  }
};
</script>
<style scoped>
.colornav{
  background-color: #413c69;
}
.styltextnav{
  color: white;
    text-decoration: none;
    font-size: 22px;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>

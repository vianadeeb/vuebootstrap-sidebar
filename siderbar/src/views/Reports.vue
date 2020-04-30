<template>
  <div  class="stylcomp">
    <h1 class="headerpage">التقارير</h1><br><br>
      <b-row>
        <b-col cols="3">
         <div class="stylcard">
            <span class="circleicon">
              <i class="fas fa-folder-open sizeicon"></i>
            </span>
         <span class="textcard">الطلبات المعلقة <br>123456</span>
       
         </div>
          </b-col>
           <b-col cols="3">
         <div class="stylcard">
            <span class="circleicon">
              <i class="fas fa-folder-open sizeicon"></i>
            </span>
         <span class="textcard">الطلبات المستلمة <br>123456</span>
       
         </div>
          </b-col>
        <b-col cols="3">
         <div class="stylcard">
         <span class="circleicon">
              <i class="fas fa-box sizeicon"></i>
            </span>
         <span class="textcard">الطلبات المؤجلة<br>1456</span>
       
         </div>
          </b-col>
           <b-col cols="3">
         <div class="stylcard">
          <span class="circleicon">
              <i class="fas fa-book-open sizeicon"></i>
            </span>
         <span class="textcard">الطلبات الملغية <br>123</span>
       
         </div>
          </b-col>
      </b-row> 
       <b-row class="mt-4">
        <b-col cols="6" ><chartdoughnut class="backchart"></chartdoughnut></b-col>
        <b-col cols="6" ><chartbar class="backchart"></chartbar></b-col>
       
       </b-row>
  </div>
</template>

<script>
import chartdoughnut from "@/components/chartdoughnut.vue";
import chartbar from "@/components/chartbar.vue";
export default {
  components: {
    chartdoughnut,
    chartbar,
  },
  mounted() {},
  methods: {},
  data() {
    return {};
  },
};
</script>
<style>
.headerpage{
 float: right;
  color: rgb(83, 83, 83);
  font-size: 25px;
  font-weight: bold;
}
 .stylcomp {
  margin: 15px;
}
.stylcard{
 width: 100%; 
 background-color: #f8f8f8;
 float: right;
 text-align: right;
 box-shadow: 0px 1px 5px -1px rgba(0,0,0,.2);
 padding:30px;
 border-radius: 3px;
 transition: .3s;
}
.stylcard:hover{
      transform: scale(.9);
}
.circleicon{
     background-color: #F9CE55;
    color: aliceblue;
    border-radius: 50%;
    padding: 20px;
    float: right;
    margin-left: 10px;
}
.textcard{
color: #5f5959;
  font-size: 19px;
  font-weight: bold;
}
.backchart{
  background-color: #f8f8f8;
  box-shadow: 0 0.125rem 0.25rem #cecece !important;
   border-radius: 3px;
   border: none;
}
.sizeicon{
  font-size: 20px;
}
</style>

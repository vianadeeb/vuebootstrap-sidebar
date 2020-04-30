<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title float-right">النسب</h2>
    </div>

    <div class="card-img-bottom">
      <canvas id="fooCanvas" count="2" />

      <chartjs-bar
        v-for="(item, index) in types"
        :key="index"
        :backgroundcolor="item.bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="item.borderColor"
        :data="item.data"
        :datalabel="item.dataLabel"
        :labels="labels"
        target="fooCanvas"
      />
    </div>
  </div>
</template>

<script>
export default {
   name: "chartbar",
  data() {
    return {
      beginZero: true,
      labels: ["الجمعة", "الخميس", "الأربعاء", "الثلاثاء", "الأثنين", "الأحد", "السبت"],
      types: [
        {
          bgColor: "rgba(255,  206, 86, 0.2)",
          borderColor: "rgba(255,  206, 86, 1)",
          data: [1, 3, 5, 7, 2, 4, 6],
          dataLabel: "قيد الأنتظار"
        },
        {
          bgColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          data: [1, 5, 2, 6, 3, 7, 4],
          dataLabel: "تم التوصيل"
        }
      ]
    };
  }
};
</script>
<style scoped>
.card-title{
 float: right;
  color: rgb(83, 83, 83);
  font-size: 25px;
  font-weight: bold;
}
</style>
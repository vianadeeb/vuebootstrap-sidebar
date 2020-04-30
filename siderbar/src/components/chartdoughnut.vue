<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title float-right">الاحصائيات</h2>
    </div>

    <div class="card-img-bottom">
      <chartjs-doughnut
        :bind="true"
        :datasets="datasets"
        :labels="labels"
        :option="option"
      />
    </div>
  </div>
</template>

<script>
export default {
    name: "chartdoughnut",
  data() {
    return {
      datasets: [
        {
          data: [10, 20, 40],
          backgroundColor: [ "rgba(255, 99, 132, 0.6)","rgba(255, 206, 86, 0.6)", "rgba(54, 162, 235, 0.6)"],
          hoverBackgroundColor: ["rgba(255,99,132,1)","rgba(255, 206, 86, 1)", "rgba(54, 162, 235, 1)"]
        }
      ],
      labels: ["قيد الأنتظار", "جار التوصيل", "تم التوصيل"],
      option: {}
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
<template>
  <div class="stylcomp">
    <h1 class="headerpage">الطلبات</h1>
    <button type="button" class="stylbutton">
      <i class="fas fa-plus"></i> أضافة طلب
    </button>
    <div class="tableDiv mx-auto table-responsive mb-3 mt-3">
      <table class="table text-center" id="t01">
        <thead>
          <tr>
            <th scope="col">التسلسل</th>
            <th scope="col">البائع</th>
            <th scope="col">رقم البائع</th>
            <th scope="col">المستلم</th>
            <th scope="col">رقم المستلم</th>
            <th scope="col">الحالة</th>
            <th scope="col">السائق</th>
            <th scope="col">رقم الطلب</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td>1</td>
            <td>فيان اديب</td>
            <td>1345</td>
            <td>محمد محمود</td>
            <td>6544</td>
            <td>قيد الانتظار</td>
            <td>مصطفى اوس</td>
            <td>34556</td>
          </tr>
          <tr class="text-center">
            <td>2</td>
            <td>سليمان ادم</td>
            <td>1345</td>
            <td>احمد علي</td>
            <td>6544</td>
            <td>قيد الانتظار</td>
            <td>كرار ستار</td>
            <td>34556</td>
          </tr>
          <tr class="text-center">
            <td>3</td>
            <td>ساره علي</td>
            <td>1345</td>
            <td>اطياف محمد</td>
            <td>6544</td>
            <td>قيد الانتظار</td>
            <td>سرمد حسن</td>
            <td>34556</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center mt-4 mb-4" style="direction: ltr;">
      <div role="group" aria-label="Basic example" class="btn-group">
        <button type="button" class="btn btn-secondary">
          التالي</button
        ><button type="button" class="btn btn-secondary">1/1</button
        ><button type="button" class="btn btn-secondary">
          السابق
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.headerpage {
  float: right;
  color: rgb(83, 83, 83);
  font-size: 25px;
  font-weight: bold;
}
table#t01 tr:nth-child(even) {
  background-color: #d9e9ff;
}
table#t01 tr:nth-child(odd) {
  background-color: #fff;
}
table#t01 th {
  background-color: #e1dee6;
}
#t01 {
  border: 1px solid #e1dee6;
}
.stylcomp {
  margin: 15px;
}
.stylbutton,
.stylbutton:focus {
  background-color: #F9CE55;
  border: none;
  padding: 5px;
  font-weight: bold;
  color: white;
  border-radius: 3px;
  outline: none;
}

</style>

<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <template v-slot:header>
        <h6 class="fa fa-file-o fa-lg mt-1 mb-0 h5"> รายงาน</h6>
      </template>
      <b-card-body>
        <b-row>
            <b-col cols="9"></b-col>
            <b-col cols="3">
            <b-form-select v-model="selected" :options="options" class="mb-3">
              <!-- This slot appears above the options from 'options' prop -->
              <template v-slot:first>
                <option :value="null" disabled>-- กรุณาเลือกเดือน --</option>
              </template>
            </b-form-select>
            </b-col>
        </b-row>
        <hr>
        <c-table :fields="fields" :table-data="datas" head-variant="light"  caption="รายงานแจ้งซ่อม"></c-table>
        <b-row>
          <b-col cols="10"></b-col>
          <b-col cols="2">
           <button type="button" v-on:click="onexport" tag="button" class="btn btn-success">ออกรายงาน Excel</button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import reportmonth from './ReportMonth'
import { async } from 'q';
import cTable from '../base/Table.vue'
import XLSX from 'xlsx'
export default {
  components: {cTable},
mounted() {
    this.base_api = localStorage.base_api
    this.token = localStorage.usertoken
    if(!this.token){
      this.$router.push("/login");
    }else{
      this.getData()
    }
  },
name: 'report',
methods: {
    getData: async function(){
      this.$http.get(this.base_api + '/admin/report', {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
      }).then((res) => {
        this.datas = res.data.results.data[0]
        this.datas.forEach((value, index) => {
          this.datas[index].index = index + 1
          this.datas[index].create_date = value.create_date.slice(0,10)
          this.datas[index].update_date = value.update_date.slice(0,10)
        })
        this.excels = res.data.results.data[0]
        this.excels.forEach((value, index) => {
          this.excels[index].create_date = value.create_date.slice(0,10)
          this.excels[index].update_date = value.update_date.slice(0,10)
        })
      })
    },
    // excel export
      onexport () {
      var animalWS = XLSX.utils.json_to_sheet(this.excels)
      var wb = XLSX.utils.book_new() 
      XLSX.utils.book_append_sheet(wb, animalWS, this.excels) 
      XLSX.writeFile(wb, 'book.xlsx') 
    }
  },
data: function () {
      return {
        fields: [
          {key: 'index', label: 'ลำดับ', sortable: true },
          {key: 'title', label: 'หัวข้อที่แจ้ง'},
          {key: 'create_date', label: 'วันที่แจ้ง'},
          {key: 'update_date', label: 'วันที่เสร็จสิ้น'}
        ],
        datas: [],
        selected: null,
        options: reportmonth.filter((list) => list.value != null)
      }
  }
}
</script>
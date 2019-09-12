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
                <b-form-select :options="options">
                  <template v-slot:first>
                    <option :value="null" disabled>-- เลือกเดือน --</option>
                  </template>
                </b-form-select>
            </b-col>
        </b-row>
        <hr>
        <b-card-title>รายการแจ้งซ่อม</b-card-title>
        <b-table :fields="fields" :table-data="result" head-variant="light">
        </b-table>
        <b-row>
          <b-col cols="10"></b-col>
          <b-col cols="2">
            <router-link to="Dashboard" tag="button" class="btn btn-success">ออกรายงาน Excel</router-link>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import repair_list from './report'
import reportmonth from './ReportMonth'
import { async } from 'q';
export default {
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
        this.result = res.data.results.data[0]
        console.log(result)
      })
    }
  },
data: function () {
      return {
        fields: [
          {key: '__v', label: 'ลำดับ', sortable: true },
          {key: 'title', label: 'หัวข้อที่แจ้ง'},
          {key: 'create_date', label: 'วันที่แจ้ง'},
          {key: 'update_date', label: 'วันที่เสร็จสิ้น'}
        ],
        result: [],
        selected: null,
        options: reportmonth.filter((list) => list.value != null)
      }
  }
}
</script>

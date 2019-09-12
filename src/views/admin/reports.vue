<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">

      <b-card-body>
        <b-row>
            <b-col cols="2">
                <i class="fa fa-file-o fa-lg mt-1"></i> <b class="h4"> รายงาน</b>
            </b-col>
            <b-col cols="10"></b-col>
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
        <b-table :fields="fields" :items="items" head-variant="light">
            <template v-slot:cell(name)="data">
                {{ data.item.value }}
            </template>
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
export default {
  mounted() {
    this.getReportRepair();
  },
  methods: {
    getReportRepair(){
        console.log('hello')
    }
  },
  data: () => {
      return {
        items: repair_list.filter((list) => list.No == list.No),
        fields: [
          {key: 'No', label: 'ลำดับ' },
          {key: 'Name', label: 'ชื่ออุปกรณ์'},
          {key: 'DatePre', label: 'วันที่แจ้ง'},
          {key: 'DateFinish', label: 'วันที่เสร็จสิ้น'}
        ],
        selected: null,
        options: reportmonth.filter((list) => list.value == list.value)
      }
  }
}
</script>

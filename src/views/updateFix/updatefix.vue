<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <c-table
          :table-data="datas"
          :fields="fields"
          caption="<i class='fa fa-align-justify'></i> ประวัติการซ่อม"
        ></c-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from '../base/Table.vue'

export default {
  name: 'tables',
  components: {cTable},
  mounted(){
    this.base_api = localStorage.base_api
    this.token = localStorage.usertoken
    this.getData()
  },
  methods : {
    getData() {
        this.$http.get(this.base_api + '/technician/repair', {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.datas = res.data.results.data
          console.log(this.datas)
        })
      }
  },
  data: () => {
    return {
      datas: [],
      fields: [
        {key: '_id', label: 'รหัส', sortable: true},
        {key: 'title', label: 'ชื่อรายการ'},
        {key: 'detail', label: 'รายละเอียด'},
        {key: 'position_repair', label: 'สถานที่อยู่'},
        {key: 'create_date', label: 'วันที่แจ้ง'},
        {key: 'status', label: 'สถานะ', sortable: true}
      ],
    }
  }
}
</script>

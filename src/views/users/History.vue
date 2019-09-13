<template>
  <b-card>
    <b-row>
      <b-col sm="12">
        <h2>ประวัติการแจ้งซ่อม</h2>
      
        <div class="animated fadeIn" style="padding:10px">
          <b-row>
            <b-col lg="12">
              <c-table
                :table-data="datas"
                :fields="fields"
                caption="<i class='fa fa-align-justify'></i> ประวัติการแจ้งซ่อม"
              ></c-table>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>


<script>
  import axios from 'axios'
  import { shuffleArray } from '@/shared/utils'
  import cTable from '../base/Table.vue'

  

  export default {
    name: "TableRepairs",
    components: {cTable},
    data: function () {
      return {
        datas: [],
        fields: [
          {key: 'title', label: 'ชื่อรายการ'},
          {key: 'detail', label: 'รายละเอียด'},
          {key: 'create_date', label: 'วันที่แจ้ง'},
          {key: 'status', label: 'สถานะ', sortable: true}
        ],
      }
    },
    mounted() {
      this.base_api = localStorage.base_api
      this.token = localStorage.usertoken
      // console.log(this.token)
      this.getData()
    },
    methods: {
      getData() {
        this.$http.get(this.base_api + '/users/repair/history', {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.datas = res.data.results.data
          console.log(this.datas)

          this.datas.forEach((value, index) => {
            this.datas[index].create_date = value.create_date.slice(0, 10);
            if (value.status == 3) {
              this.datas[index].status = 'เสร็จสิ้น'
            } 
          })

        })
      }
    }
  }
</script>





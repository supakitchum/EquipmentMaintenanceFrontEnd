<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <b-card>
        <div slot="header">อัพเดท</div>
          <b-table :items="datas" :fields="fields">
              <template slot="_id" slot-scope="data">
                <b-button @click="$router.push({path: '/updatestatus',query: { id: data.item._id,title: data.item.title,detail: data.item.detail }})">รายละเอียด</b-button>
              </template>
          </b-table>
        </b-card>
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

          this.datas.forEach((value, index) => {
            this.datas[index].create_date = value.create_date.slice(0, 10);
            if (value.status == 1) {
              this.datas[index].status = 'รอดำเนินการ'
            } else if (value.status == 2) {
              this.datas[index].status = 'กำลังดำเนินการ'
            }
          })
        })
      }
  },
  data: () => {
    return {
      datas: [],
      fields: [
        {key: 'title', label: 'ชื่อรายการ'},
        {key: 'detail', label: 'รายละเอียด'},
        {key: 'position_repair', label: 'สถานที่อยู่'},
        {key: 'create_date', label: 'วันที่แจ้ง'},
        {key: 'status', label: 'สถานะ', sortable: true},
        {key: '_id', label: 'อัพเดทงาน', sortable: true}
      ],
    }
  }
}
</script>

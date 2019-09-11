<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <c-table
          :table-data="items"
          :fields="fields"
          caption="<i class='fa fa-align-justify'></i>จัดการผู้แจ้งซ่อม"
        ></c-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { shuffleArray } from "@/shared/utils";
import cTable from "../base/Table.vue";

export default {
  name: "manageUser",
  components: { cTable },
  mounted() {
    this.token = localStorage.usertoken;
    this.base_api = localStorage.getItem('base_api')
    this.getData()
  },
  methods : {
    getData() {
      this.$http.get(this.base_api + '/admin/users', {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.datas = res.data.results.data[0]
        console.log(this.datas)
      })
    }
  },
  data: () => {
    return {
      items: someData(),
      itemsArray: someData,
      fields: [
        { key: "username", label: "ลำดับ" },
        { key: "role", label: "ชื่อรายการ" },
        { key: "username", label: "ผู้แจ้ง", sortable: true },
        { key: "registered", label: "วันที่แจ้ง" },
        { key: "status", label: "สถานะ", sortable: true }
      ]
    };
  }
};
const someData = () =>
  shuffleArray([
    {
      username: "Samppa Nori",
      registered: "2012/01/01",
      role: "Member",
      status: "Active",
      _rowVariant: "success"
    },
    {
      username: "Estavan Lykos",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned",
      _rowVariant: "danger"
    },
    {
      username: "Chetan Mohamed",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive",
      _rowVariant: "info"
    },
    {
      username: "Derick Maximinus",
      registered: "2012/03/01",
      role: "Member",
      status: "Pending"
    },
    {
      username: "Friderik Dávid",
      registered: "2012/01/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Yiorgos Avraamu",
      registered: "2012/01/01",
      role: "Member",
      status: "Active"
    },
    {
      username: "Avram Tarasios",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned"
    },
    {
      username: "Quintin Ed",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive"
    },
    {
      username: "Enéas Kwadwo",
      registered: "2012/03/01",
      role: "Member",
      status: "Pending"
    },
    {
      username: "Agapetus Tadeáš",
      registered: "2012/01/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Carwyn Fachtna",
      registered: "2012/01/01",
      role: "Member",
      status: "Active"
    },
    {
      username: "Nehemiah Tatius",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned"
    },
    {
      username: "Ebbe Gemariah",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive"
    },
    {
      username: "Eustorgios Amulius",
      registered: "2012/03/01",
      role: "Member",
      status: "Pending"
    },
    {
      username: "Leopold Gáspár",
      registered: "2012/01/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Pompeius René",
      registered: "2012/01/01",
      role: "Member",
      status: "Active"
    },
    {
      username: "Paĉjo Jadon",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned"
    },
    {
      username: "Micheal Mercurius",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive"
    },
    {
      username: "Ganesha Dubhghall",
      registered: "2012/03/01",
      role: "Member",
      status: "Pending"
    },
    {
      username: "Hiroto Šimun",
      registered: "2012/01/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Vishnu Serghei",
      registered: "2012/01/01",
      role: "Member",
      status: "Active"
    },
    {
      username: "Zbyněk Phoibos",
      registered: "2012/02/01",
      role: "Staff",
      status: "Banned"
    },
    {
      username: "Einar Randall",
      registered: "2012/02/01",
      role: "Admin",
      status: "Inactive"
    },
    {
      username: "Félix Troels",
      registered: "2012/03/21",
      role: "Staff",
      status: "Active"
    },
    {
      username: "Aulus Agmundr",
      registered: "2012/01/01",
      role: "Member",
      status: "Pending"
    }
  ]);
</script>


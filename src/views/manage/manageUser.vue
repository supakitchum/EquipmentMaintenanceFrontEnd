<template>
  <div class="animated fadeIn">
    <b-card>
      <template>
        <div style="float:right;padding-bottom:20px">
          <b-button size="sm" variant="success" @click="insertData()">เพิ่มข้อมูลผู้แจ้งซ่อม</b-button>
        </div>
      </template>

      <b-table
        :items="datas"
        :fields="fields"
        striped
        responsive="sm"
        :current-page="currentPage"
        :per-page="perPage"
      >
        <template slot="actions" slot-scope="action">
          <b-button size="sm" @click="updateData(action.item.email)">แก้ไข</b-button>
          <b-button variant="danger" size="sm" @click="deleteData(action.item.email)">ลบ</b-button>
        </template>
      </b-table>
      <b-col sm="7" md="6" class="my-1">
        <nav>
          <b-pagination
            size="sm"
            :total-rows="datas.length"
            :per-page="perPage"
            v-model="currentPage"
            prev-text="Prev"
            next-text="Next"
            hide-goto-end-buttons
          />
        </nav>
      </b-col>
    </b-card>
  </div>
</template>

<script>
import { shuffleArray } from "@/shared/utils";
import cTable from "../base/Table.vue";

export default {
  mounted() {
    this.token = localStorage.usertoken;
    this.base_api = localStorage.getItem("base_api");
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get(this.base_api + "/admin/users", {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          this.datas = res.data.results.data[0];
          console.log(this.datas);
        });
    },
    updateData(email) {
      this.$router.push(`/updateProfile/${email}`);
    },
    async deleteData(email) {
      console.log(this.token);
      await this.$http
        .delete(this.base_api + `/admin/users/${email}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.$alertify.success("ลบข้อมูลเรียบร้อย");
          }
          this.getData();
        });
    },
    insertData() {
      this.$router.push(`/insertUser`);
    }
  },
  components: { cTable },
  data: () => {
    return {
      datas: [],
      fields: [
        { key: "id_employee", label: "รหัสพนักงาน" },
        { key: "email", label: "ชื่อผู้ใช้งาน" },
        { key: "firstname", label: "ชื่อ" },
        { key: "lastname", label: "นามสกุล" },
        { key: "position", label: "ตำแหน่ง", sortable: true },
        { key: "actions", label: "Actions" }
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0
    };
  }
};
</script>


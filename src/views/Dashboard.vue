<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <p>จำนวนการแจ้งซ่อม</p>
            <h2>วันนี้</h2>
            <h4 class="mb-0">{{ datas.count_repair1 }} รายการ</h4>
          </b-card-body>
          <card-line1-chart-example
            chartId="card-chart-01"
            class="chart-wrapper px-3"
            style="height:70px;"
            :height="70"
          />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <p>รายการซ่อมกำลังดำเนินการ</p>
            <h2>วันนี้</h2>
            <h4 class="mb-0">{{ datas.count_repair2 }} รายการ</h4>
          </b-card-body>
          <card-line2-chart-example
            chartId="card-chart-02"
            class="chart-wrapper px-3"
            style="height:70px;"
            :height="70"
          />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-warning">
          <b-card-body class="pb-0">
            <p>รายการซ่อมสำเร็จ</p>
            <h2>วันนี้</h2>
            <h4 class="mb-0">{{ datas.count_repair3 }} รายการ</h4>
          </b-card-body>
          <card-line3-chart-example
            chartId="card-chart-03"
            class="chart-wrapper"
            style="height:70px;"
            height="70"
          />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-danger">
          <b-card-body class="pb-0">
            <p>จำนวนช่างซ่อม</p>
            <h2>วันนี้</h2>
            <h4 class="mb-0">{{ datas.count_tech }} คน</h4>
          </b-card-body>
          <card-bar-chart-example
            chartId="card-chart-04"
            class="chart-wrapper px-3"
            style="height:70px;"
            height="70"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-card>
        <b-col lg="12">
          <b-table
            :items="dataswork"
            :fields="fields"
            striped
            responsive="lg"
            fixed="true"
            :current-page="currentPage"
            :per-page="perPage"
          >
            <template slot="managework" slot-scope="action">
              <!-- <b-button size="sm" @click="updateData(action.item.email)">แก้ไข</b-button> -->
              <b-button size="sm" @click="action.toggleDetails" class="mr-2">เลือกช่าง</b-button>
              <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
            </template>

            <template v-slot:row-details="row">
              <b-card>
                <b-form-group label="เลือกช่าง">
                  <b-form-checkbox-group
                    :options="options"
                    v-model="selected"
                    stacked
                    buttons
                    @input="insertTech(selected[0],row.item._id)"
                    button-variant="info"
                  ></b-form-checkbox-group>
                </b-form-group>
              </b-card>
            </template>
          </b-table>
          <nav>
            <b-pagination
              size="sm"
              :total-rows="totalRows"
              :per-page="perPage"
              v-model="currentPage"
              prev-text="Prev"
              next-text="Next"
              hide-goto-end-buttons
            />
          </nav>
        </b-col>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import CardLine1ChartExample from "./dashboard/CardLine1ChartExample";
import CardLine2ChartExample from "./dashboard/CardLine2ChartExample";
import CardLine3ChartExample from "./dashboard/CardLine3ChartExample";
import CardBarChartExample from "./dashboard/CardBarChartExample";
import MainChartExample from "./dashboard/MainChartExample";
import SocialBoxChartExample from "./dashboard/SocialBoxChartExample";
import CalloutChartExample from "./dashboard/CalloutChartExample";
import { shuffleArray } from "@/shared/utils";
import cTable from "./base/Table.vue";
import { Callout } from "@coreui/vue";

export default {
  mounted() {
    this.token = localStorage.usertoken;
    this.base_api = localStorage.getItem("base_api");
    this.getData();
    this.getWork();
  },
  methods: {
    async insertTech(email, id_task) {
      console.log(email, id_task);
      let api = this.base_api + "/admin/repair";
      this.$http
        .put(
          api,
          {
            email_technician: email,
            _id: id_task
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          this.getData();
          this.getWork();
        });
    },
    getRowCount(data) {
      return data.length;
    },

    async getData() {
      await this.$http
        .get(this.base_api + "/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          this.datas = res.data.results;
          console.log(this.datas);
        });
    },
    async getWork() {
      await this.$http
        .get(this.base_api + "/admin/works", {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          this.dataswork = res.data.results.data.works;
          this.datastech = res.data.results.data.technician;
          this.dataswork.forEach((value, index) => {
            this.dataswork[index].index = index + 1;
            this.dataswork[index].create_date = value.create_date.slice(0, 10);
            if (value.status == 1) {
              this.dataswork[index].status = "รอดำเนินการ";
            } else if (value.status == 2) {
              this.dataswork[index].status = "กำลังดำเนินการ";
            }
          });
          // console.log(this.datastech);
          this.datastech.forEach((value, index) => {
            var x = {};
            const works = value.works.filter(value => {
              return value.status === "2";
            });
            x.text = `${value.firstname} ${value.lastname} ${works.length}`;
            x.value = value.email;
            this.options[index] = x;
          });
          this.selected = [];
          // console.log(this.options);
        });
    }
  },
  name: "dashboard",
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample,
    cTable
  },
  data: () => {
    return {
      datas: [],
      dataswork: [],
      datastech: [],
      selected: [],
      fields: [
        { key: "index", label: "ลำดับ" },
        { key: "title", label: "ชื่อรายการ" },
        { key: "id_employee_user", label: "ผู้แจ้ง" },
        { key: "create_date", label: "วันที่แจ้ง" },
        { key: "managework", label: "จัดการงานให้ช่าง" }
      ],
      options: [],
      currentPage: 1,
      perPage: 10,
      totalRows: 46
    };
  }
};
</script>

<style>
/* IE fix */
#card-chart-01,
#card-chart-02 {
  width: 100% !important;
}
</style>

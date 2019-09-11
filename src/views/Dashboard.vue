<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
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
            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
              <template slot="button-content">
                <i class="icon-location-pin"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
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
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
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
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
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
      <b-col lg="12">
        <c-table
          :table-data="items"
          :fields="fields"
          caption="<i class='fa fa-align-justify'></i>รายการแจ้งซ่อม"
        ></c-table>
      </b-col>
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
  name: "dashboard",
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample
  },
  name: "tables",
  components: { cTable },
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        { key: "username", label: "ลำดับ", sortable: true },
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

<style>
/* IE fix */
#card-chart-01,
#card-chart-02 {
  width: 100% !important;
}
</style>

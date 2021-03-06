<template>
  <div>
    <div class="title">{{ $t("subtitles.confirmAndDeath") }}</div>
    <Chart
      id="confirmedAndDeathChart1"
      type="area"
      :dataHistory="chartData"
      :seriesData="confirmedAndDeathChart1"
    ></Chart>

    <div class="title">{{ $t("subtitles.newDeaths") }}</div>
    <Chart
      id="deathChart2"
      type="bar"
      :stacked="true"
      :dataHistory="chartData"
      :seriesData="deathChart2"
      :colors="['#c40000', '#3d000d', '#2c9100']"
    ></Chart>

    <div v-if="showMore">
      <div v-if="!isUk" class="title">{{ $t("dataSwitch.cured") }}</div>
      <Chart
        v-if="!isUk"
        id="curedChart"
        type="bar"
        :dataHistory="chartData"
        :seriesData="curedChart5"
        :colors="['#0e9100']"
      ></Chart>

      <div class="title">{{ $t("dataSwitch.active") }}</div>
      <Chart
        id="activeChart"
        type="area"
        :dataHistory="chartData"
        :seriesData="activeChart4"
        :colors="['#ff8600', '#00a004']"
      ></Chart>

      <div class="title">{{ $t("subtitles.rates") }}</div>
      <Chart
        id="rateChart3"
        type="area"
        :dataHistory="chartData"
        :seriesData="rateChart3"
        :colors="['#ca0011', '#0088ff']"
      ></Chart>
    </div>

    <div v-if="!isUk" class="showMore" @click="showMore = !showMore">
      <MoreIcon v-if="!showMore" /><LessIcon v-else />
      {{ showMore ? $t("showLess") : $t("showAllCharts") }}
    </div>
  </div>
</template>

<script>
import Chart from "./Chart.vue";
import MoreIcon from "mdi-vue/ChevronDown";
import LessIcon from "mdi-vue/ChevronUp";
export default {
  name: "ChartSection",
  props: ["chartData", "isUk"],
  components: {
    Chart,
    MoreIcon,
    LessIcon,
  },
  data: function () {
    return {
      showMore: false,
    };
  },
  computed: {
    confirmedAndDeathChart1: function () {
      return [
        {
          name: this.$t("totalConfirmed"),
          data: this.chartData.map((a) => {
            return a.confirmedBySpecimen ?? a.confirmed;
          }),
        },
        {
          name: this.$t("totalDeaths"),
          data: this.chartData.map((a) => {
            return a.death;
          }),
        },
      ];
    },
    deathChart2: function () {
      let lastConfirmed = 0;
      let lastDeath = 0;
      // let lastCured = 0;
      return [
        {
          name: this.$t("newCases"),
          data: this.chartData.map((a) => {
            if (a.confirmedNew) return a.confirmedNew;
            let newConfirmed = a.confirmed - lastConfirmed;
            lastConfirmed = a.confirmed;
            return newConfirmed > 0 ? newConfirmed : 0;
          }),
        },
        {
          name: this.$t("newDeaths"),
          data: this.chartData.map((a) => {
            if (this.isUk) return a.deathNewBySpecimen;
            let newDeath = a.death - lastDeath;
            lastDeath = a.death;
            return newDeath > 0 ? newDeath : 0;
          }),
        },
      ];
    },
    rateChart3: function () {
      return [
        {
          name: this.$t("deathRate"),
          data: this.chartData.map((a) => {
            let rate = ((a.death / a.confirmed) * 100).toPrecision(2);
            return rate;
          }),
        },
        {
          name: this.$t("cureRate"),
          data: this.chartData.map((a) => {
            let rate = ((a.cured / a.confirmed) * 100).toPrecision(2);
            return rate;
          }),
        },
      ];
    },
    activeChart4: function () {
      return [
        {
          name: this.$t("dataSwitch.active"),
          data: this.chartData.map((a) => {
            let rate = a.confirmed - a.cured - a.death;
            return rate > 0 ? rate : 0;
          }),
        },
        {
          name: this.$t("dataSwitch.cured"),
          data: this.chartData.map((a) => {
            let rate = a.cured;
            return rate;
          }),
        },
      ];
    },
    curedChart5: function () {
      let lastCured = 0;
      return [
        {
          name: this.$t("dataSwitch.cured"),
          data: this.chartData.map((a) => {
            let newCured = a.cured - lastCured;
            lastCured = a.cured;
            return newCured > 0 ? newCured : 0;
          }),
        },
      ];
    },
  },
  watch: {
    showMore: function () {
      window.ga("send", "event", "chart", "chart-expanded", this.showMore);
    },
  },
};
</script>

<style scoped>
.showMore {
  padding-top: 30px;
}
</style>
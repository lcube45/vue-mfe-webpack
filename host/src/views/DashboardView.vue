<script setup>
import WidgetDashboard from "../components/WidgetDashboard.vue"
import WidgetChart from "../components/WidgetChart.vue"
import WidgetDatagrid from "../components/WidgetDatagrid.vue"
</script>

<template>
  <h1 class="mb-4">Dashboard</h1>
  <v-container class="pa-0 mb-4">
    <v-row>
      <v-col><WidgetDashboard /></v-col>
      <v-col><WidgetDashboard /></v-col>
      <v-col><WidgetDashboard /></v-col>
      <v-col><WidgetDashboard /></v-col>
    </v-row>
  </v-container>
  <h2>Lorem ipsum</h2>
  <v-container class="pa-0 mb-4">
    <v-row>
      <v-col>
        <v-card height="350px">
          <WidgetChart />
        </v-card>
      </v-col>
      <v-col>
        <v-card height="350px">
          <WidgetDatagrid />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
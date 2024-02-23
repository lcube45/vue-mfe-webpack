<template>
  <v-navigation-drawer v-model="drawer">
    <v-sheet color="grey-lighten-2" class="pa-6 mb-4 mycenter">
      <v-avatar class="mb-4" color="grey" rounded variant="flat" size="x-large"></v-avatar>
      <div class="text-subtitle-1"><strong>Application Name</strong></div>
  </v-sheet>
  <v-list class="ma-4">
    <v-list-item title="Dashboard" value="dashboard" rounded="xl"></v-list-item>
    <v-list-item title="Team Blue" value="blue" rounded="xl"></v-list-item>
    <v-list-item title="Team Green" value="green" rounded="xl"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar color="primary" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Company Name</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-responsive max-width="160">
          <v-text-field
            density="compact"
            flat
            hide-details
            label="Search"
            rounded="lg"
            single-line
            variant="solo-filled"
          ></v-text-field>
        </v-responsive>

      <v-avatar
        class="ms-2"
        color="background"
        size="38"
        variant="flat"
      ></v-avatar>
      <v-avatar
        class="mx-2"
        color="background"
        size="38"
        variant="flat"
      ></v-avatar>
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>
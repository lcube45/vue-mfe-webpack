<template>
  <v-card
        title="Lorem ipsum"
        subtitle="prepend and append"
        variant="tonal"
      >
        <template v-slot:append>
          <v-icon icon="mdi-arrow-decision"></v-icon>
        </template>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
</template>
<template>
  <!-- The AG Grid component -->
  <ag-grid-vue
                
                style="width: 100%; height: 100%;"
                :class="themeClass"
                :columnDefs="columnDefs"
                @grid-ready="onGridReady"
                :rowData="rowData"
                :defaultColDef="defaultColDef"
                :rowSelection="rowSelection"
                :suppressRowClickSelection="true"
                :pagination="true"
                :paginationPageSize="paginationPageSize"
                :paginationPageSizeSelector="paginationPageSizeSelector"></ag-grid-vue>
</template>
<style>
.ag-theme-material {
    --ag-borders: solid 1px;
}

</style>

<script>
import { ref, onBeforeMount } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import { AgGridVue } from "ag-grid-vue3"; // AG Grid Component





export default {
  name: "App",
  components: {
    AgGridVue, // Add AG Grid Vue3 component
  },
  setup(props) {
    const columnDefs = ref([
      {
        field: 'make',
        checkboxSelection: true,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: [
            'Tesla',
            'Ford',
            'Toyota',
            'Mercedes',
            'Fiat',
            'Nissan',
            'Vauxhall',
            'Volvo',
            'Jaguar',
          ],
        },
      },
      { field: 'price', filter: 'agNumberColumnFilter' },
      {
        field: 'month',
        comparator: (valueA, valueB) => {
          const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ];
          const idxA = months.indexOf(valueA);
          const idxB = months.indexOf(valueB);
          return idxA - idxB;
        },
      },
    ]);
    const gridApi = ref();
    const defaultColDef = ref({
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    });
    const rowData = ref(null);
    const rowSelection = ref(null);
    const paginationPageSize = ref(null);
    const paginationPageSizeSelector = ref(null);

    onBeforeMount(() => {
      rowData.value = [
        {
          make: 'Tesla',
          model: 'Model Y',
          price: 64950,
          electric: true,
          month: 'June',
        },
        {
          make: 'Ford',
          model: 'F-Series',
          price: 33850,
          electric: false,
          month: 'October',
        },
        {
          make: 'Toyota',
          model: 'Corolla',
          price: 29600,
          electric: false,
          month: 'August',
        },
        {
          make: 'Mercedes',
          model: 'EQA',
          price: 48890,
          electric: true,
          month: 'February',
        },
        {
          make: 'Fiat',
          model: '500',
          price: 15774,
          electric: false,
          month: 'January',
        },
        {
          make: 'Nissan',
          model: 'Juke',
          price: 20675,
          electric: false,
          month: 'March',
        },
        {
          make: 'Vauxhall',
          model: 'Corsa',
          price: 18460,
          electric: false,
          month: 'July',
        },
        {
          make: 'Volvo',
          model: 'EX30',
          price: 33795,
          electric: true,
          month: 'September',
        },
        {
          make: 'Mercedes',
          model: 'Maybach',
          price: 175720,
          electric: false,
          month: 'December',
        },
        {
          make: 'Vauxhall',
          model: 'Astra',
          price: 25795,
          electric: false,
          month: 'April',
        },
        {
          make: 'Fiat',
          model: 'Panda',
          price: 13724,
          electric: false,
          month: 'November',
        },
        {
          make: 'Jaguar',
          model: 'I-PACE',
          price: 69425,
          electric: true,
          month: 'May',
        },
      ];
      rowSelection.value = 'multiple';
      paginationPageSize.value = 10;
      paginationPageSizeSelector.value = [10, 50, 100];
    });

    const onGridReady = (params) => {
      gridApi.value = params.api;
    };

    return {
      columnDefs,
      gridApi,
      rowData,
      defaultColDef,
      rowSelection,
      paginationPageSize,
      paginationPageSizeSelector,
      onGridReady,
      themeClass:
        "ag-theme-material",
    };
  },
};
</script>
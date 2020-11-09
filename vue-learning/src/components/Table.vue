<template>
  <!-- table with four columns -->
  <div>
    <!-- <div v-for="(value, index) in sales" :key="index"> -->
    <!-- nested for loop -->
    <!-- <span v-for="(val, key, index) in value" :key="index">
        {{ key }} : {{ val }}
        <br />
      </span>
      <br /><br /><br />
    </div> -->
    <table>
      <caption>
        Sales Summary
      </caption>
      <thead>
        <tr>
          <th scope="col">Order ID</th>
          <th scope="col">Company Name</th>
          <th scope="col">Sale Amount</th>
          <th scope="col">Shipped Date</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-data"
          v-for="order in sales"
          :key="order.OrderID"
          :obj="order ? order : ''"
        >
          <td data-label="Order ID">{{ order.OrderID }}</td>
          <td data-label="Company Name">{{ order.CompanyName }}</td>
          <td data-label="Sale Amount">{{ order.SaleAmount }}</td>
          <td data-label="Shipped Date">{{ order.ShippedDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    sales: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}
.table-data:hover {
  transform: scale(1.1);
  background-color:  rgb(220,220,220);
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
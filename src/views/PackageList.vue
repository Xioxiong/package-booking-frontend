<template>
  <center>
    <div>
      <a-button class="editable-add-btn" @click="handleAdd">添加</a-button>
      <a-table
        :columns="columns"
        :rowKey="id => data.bookingNumber"
        :dataSource="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
        style="width: 700px"
      >
        <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template>
      </a-table>
    </div>
  </center>
</template>
<script>
import reqwest from "reqwest";
const columns = [
  {
    title: "运单号",
    dataIndex: "bookingNumber",
    sorter: true,
    width: "20%"
  },
  {
    title: "收件人",
    dataIndex: "name",
    width: "20%"
  },
  {
    title: "电话",
    dataIndex: "phone",
    width: "20%"
  },
  {
    title: "状态",
    dataIndex: "status",
    width: "20%"
  },
  {
    title: "预约时间",
    dataIndex: "bookingDate",
    width: "20%"
  }
];

export default {
  mounted() {
    this.fetch();
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {

    },
    fetch(params = {}) {
      console.log("params:", params);
      this.loading = true;
      reqwest({
        url: "http://localhost:8099/packages",
        method: "get",
        data: {
          ...params
        },
        type: "json"
      }).then(data => {
        const pagination = { ...this.pagination };
        pagination.total = 20;
        this.loading = false;
        this.data = data;
        this.pagination = pagination;
      });
    },
    handleAdd(){
        alert("待实现，请稍后！");
    }
  }
};
</script>
<style scoped>
.editable-add-btn {
  margin-bottom: 8px;
  float: right;
}
div{
    width: 700px
}
</style>

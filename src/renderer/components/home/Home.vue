<template>
  <el-container>
      <top-nav></top-nav>
      <!-- <el-aside>
        <left-nav></left-nav>
      </el-aside> -->
      <el-footer></el-footer>
  </el-container>
</template>

<script>
    import TopNav from '@/components/nav/TopNav'
    import LeftNav from '@/components/nav/LeftNav'

    export default {
      components: { TopNav, LeftNav }
    }
</script>

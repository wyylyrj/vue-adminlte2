<template>

  <div class="wrapper">

    <header class="main-header">
      <main-header></main-header>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <MainSidebar></MainSidebar>
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <ContentWrapper></ContentWrapper>
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <MainFooter></MainFooter>
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <ControlSidebar></ControlSidebar>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>
  import MainHeader from './MainHeader'
  import MainSidebar from './MainSidebar'
  import ContentWrapper from './ContentWrapper'
  import MainFooter from './MainFooter'
  import ControlSidebar from './ControlSidebar'

    export default {
        name: "MainPage",
      mounted() {
        // $.widget.bridge('uibutton', $.ui.button);
      },
      components: {
        MainHeader,
        MainSidebar,
        ContentWrapper,
        MainFooter,
        ControlSidebar
      }
    }

</script>

<style scoped>

</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/jquery-vender.js'
import './lib/icheck-vender.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'admin-lte/dist/css/skins/skin-blue.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import 'font-awesome/css/font-awesome.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import 'icheck/skins/all.css'

import 'admin-lte/bower_components/morris.js/morris.css'
import 'admin-lte/bower_components/jvectormap/jquery-jvectormap.css'
import 'admin-lte/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'
import 'admin-lte/bower_components/bootstrap-daterangepicker/daterangepicker.css'
import 'admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'


import 'admin-lte/bower_components/jquery/dist/jquery.min.js'
import 'admin-lte/bower_components/jquery-ui/jquery-ui.min.js'


import 'admin-lte/bower_components/raphael/raphael.min.js'
import 'admin-lte/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js'
import 'admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'
import 'admin-lte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'
import 'admin-lte/bower_components/jquery-knob/dist/jquery.knob.min.js'
// import 'admin-lte/bower_components/moment/min/moment.min.js'
import 'admin-lte/bower_components/bootstrap-daterangepicker/daterangepicker.js'
import 'admin-lte/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
// import 'admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'
import 'admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js'
import 'admin-lte/bower_components/fastclick/lib/fastclick.js'
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/dist/js/pages/dashboard.js'
import 'admin-lte/dist/js/demo.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

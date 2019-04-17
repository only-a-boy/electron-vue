<template>
    <div id="view"></div>
</template>

<script>
    export default {
      mounted () {
        this.init();
      },
      methods: {
        init () {
          let dm = new ht.DataModel();
          let gv = new ht.graph.GraphView(dm);

          ht.Default.xhrLoad('../../../../static/graphics/json/vobc/vobc.json', function (text) {
            dm.deserialize(text);
            dm.getSelectionModel().setSelectionMode('none')
            var view = gv.getView()
            view.className = 'main'

            document.getElementById('view').appendChild(view);
          })
        }
      }
    }
</script>

<style>
    .main {
        height: 400px;
        margin: 2px;
        padding: 0px;
        position: relative;
        top: 100px;
        bottom: 0px;
        left: 0px;
        right: 0;
    }
    #view {
        height: 420px;
    }
</style>
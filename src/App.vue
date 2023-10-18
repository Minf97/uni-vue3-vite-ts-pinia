<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';
onLaunch(() => {
  console.log('App Launch');
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>

<style>
.flex-4 {
  flex: 4 !important;
}

.flex-2 {
  flex: 2 !important;
}
</style>

<template>
  <demo-section>
    <demo-block :title="$t('basicUsageuno')">
      <van-row>
        <van-col>item</van-col>
        <van-col>item</van-col>
      </van-row>
      <van-row>
        <van-col>item</van-col>
        <van-col>item</van-col>
        <van-col>item</van-col>
      </van-row>
      <van-row>
        <van-col>item</van-col>
        <van-col>item</van-col>
        <van-col>item</van-col>
        <van-col>item</van-col>
      </van-row>
      <van-row>
        <van-col offset="12" span="12">offset: 12, span: 12</van-col>
      </van-row>
    </demo-block>

     <demo-block :title="$t('basicUsagedos')">
      <van-flex>
        <van-col>item</van-col>
        <van-col>item</van-col>
        <van-col>item</van-col>
        <van-col>item</van-col>
        <van-col>item</van-col>
        <van-col>item</van-col>
        <van-col>item</van-col>
      </van-flex>
    </demo-block>

     <demo-block :title="$t('basicUsagetres')">
        <van-align>
          <van-col>item</van-col>
          <van-col>item</van-col>
          <van-col>item</van-col>
        </van-align>
      </demo-block>
<!-- 
    <demo-block :title="$t('basicUsagecuatro')">
      <van-whitespace>
        <van-col>Item</van-col>
        <van-col>Item</van-col>
        <van-col>Item</van-col>
      </van-whitespace>
    </demo-block>
    <demo-block :title="$t('basicUsagecenco')">
      <van-wingblank>
        <van-col>Item</van-col>
        <van-col>Item</van-col>
        <van-col>Item</van-col>
      </van-wingblank>
    </demo-block> -->
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距'
    },
    'en-US': {
      title2: 'Column Spacing'
    }
  }
}
</script>

<style lang="postcss">
.demo-layout {
  .van-row {
    padding: 0 15px;
  }
  .van-col {
    color: rgb(187, 187, 187);
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
          background-color: rgb(235, 235, 239);
          color: rgb(187, 187, 187);
    
    }

    &:nth-child(even) {
      // background-color: #66c6f2;
      background-color: rgb(212, 212, 216);
      color: rgb(132, 132, 129);
    }
  }
  .van-flex {
    padding: 0 15px;
  }
  .van-align {
    padding: 0 15px;
  }
}
</style>
<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-button size="large" type="default">Default100</van-button>
      <van-button size="largeuno" type="default">Default80</van-button>
      <van-button size="largedos" type="default">Default60</van-button>
      <van-button size="largetres" type="default">Default40</van-button>
      <van-button size="largecuatro" type="default">Default</van-button>

      <van-button size="large" type="defaultdisabled">default disabled</van-button>
      <van-button size="large" type="primary">Primary</van-button>
      <van-button size="large" type="primarydisabled">Primary disabled</van-button>
      <van-button size="large" type="danger">Danger</van-button>
      <van-button size="large" type="dangerdisabled">Danger disabled</van-button>
    </demo-block>
    <demo-block :title="$t('title2')">
      <van-button size="large">Large</van-button>
      <van-button size="normal">Normal</van-button>
      <van-button size="small">Small</van-button>
      <van-button size="mini">Mini</van-button>
    </demo-block>
<!-- 
    <demo-block :title="$t('disabled')">
      <van-button disabled>Diabled</van-button>
    </demo-block> -->

    <demo-block :title="$t('title3')">
      <!-- <van-button class="van-icon-alipay">loading button</van-button> -->
      <van-button size="large" loading>loading button</van-button>
      <van-button size="large" loading type="primary">loading button</van-button>
      
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-button tag="a" href="https://www.youzan.com" target="_blank">
        {{ $t('button3') }}
      </van-button>
      <!-- 可以使用tag属性来修改按钮标签 -->
      <van-button tag="div" href="https://www.youzan.com" target="_blank">
        {{ $t('button1') }}
      </van-button>
      <van-button tag="h1" href="https://www.youzan.com" target="_blank">
        {{ $t('button2') }}
      </van-button>
    </demo-block>

    <demo-block :title="$t('title5')">
      <van-button type="primary" bottomAction>{{ $t('button') }}</van-button>

      <van-row>
        <van-col span="12">
          <van-button bottomAction>{{ $t('button') }}</van-button>
        </van-col>
        <van-col span="12">
          <van-button type="primary" bottomAction>{{ $t('button') }}</van-button>
        </van-col>
      </van-row>
    </demo-block>

    <demo-block :title="$t('title5')">
      <van-accordion>
        <!-- 如需改变运动形式改变 type="radio"  type="checkbox" 即可-->
          <div class="sfq-container">
			      <section class="ac-container">
              <div>
                <input id="ac-1" name="accordion-1"  type="radio" checked/>
                <label for="ac-1">Accordion1</label>
                <article class="ac-small">
                  <p>
                    如果有一天我能够拥有一个大果园，
                    我愿放下所有追求做个农夫去种田，
                    每一个早晨我耕耘在绿野田园，
                    每一个黄昏我守望在乡间的麦田。
                    我会把忧虑都融化在夕阳里，
                    让孤独的心等待秋收的欢喜。
                  </p>
                </article>
              </div>
              <div>
                <input id="ac-2" name="accordion-1"  type="radio"/>
                <label for="ac-2">Accordion2</label>
                <article class="ac-medium">
                  <p>
                    如果有一天我能够拥有一个大果园，
                    我愿放下所有追求做个农夫去种田，
                    每一个早晨我耕耘在绿野田园，
                    每一个黄昏我守望在乡间的麦田。
                    我会把忧虑都融化在夕阳里，
                    让孤独的心等待秋收的欢喜。
                  </p>
                </article>
              </div>
              <div>
                <input id="ac-3" name="accordion-1"  type="radio"/>
                <label for="ac-3">Accordion3</label>
                <article class="ac-large">
                  <p>
                    如果有一天我能够拥有一个大果园，
                    我愿放下所有追求做个农夫去种田，
                    每一个早晨我耕耘在绿野田园，
                    每一个黄昏我守望在乡间的麦田。
                    我会把忧虑都融化在夕阳里，
                    让孤独的心等待秋收的欢喜。
                  </p>
                </article>
              </div>
              <div>
                <input id="ac-4" name="accordion-1"  type="radio"/>
                <label for="ac-4">Accordion4</label>
                <article class="ac-large">
                  <p>
                    如果有一天我能够拥有一个大果园，
                    我愿放下所有追求做个农夫去种田，
                    每一个早晨我耕耘在绿野田园，
                    每一个黄昏我守望在乡间的麦田。
                    我会把忧虑都融化在夕阳里，
                    让孤独的心等待秋收的欢喜。
                  </p>
                </article>
              </div>
			    </section>
        </div>
      </van-accordion>
      
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  // name: 'van-icon',
  i18n: {
    'zh-CN': {
      title1: '按钮类型',
      title2: '按钮尺寸',
      title3: '加载状态',
      title4: '自定义按钮标签',
      title5: '页面底部操作按钮'
    },
    'en-US': {
      title1: 'Type',
      title2: 'Size',
      title3: 'Loading',
      title4: 'Custom Tag',
      title5: 'Action Button'
    }
  }
}
</script>


<style lang="postcss">

.demo-button {
  .van-button {
    user-select: none;

    &--large,
    &--bottom-action {
      margin-bottom: 15px;
    }

    &--small,
    &--normal {
      margin-right: 10px;
    }
  }

  .van-doc-demo-block {
    padding: 0 15px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}

</style>
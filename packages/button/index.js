import Loading from '../loading';

export default {
  name: 'van-button',

  components: {
    [Loading.name]: Loading
  },

  props: {
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  },

  render(h) {
    const { type, loading, disabled, tag: Tag } = this;

    return (
      <Tag
        type={this.nativeType}
        disabled={disabled}
        class={[
          'van-button',
          'van-button--' + type,
          'van-button--' + this.size,
          {
            'van-button--disabled': disabled,
            'van-button--loading': loading,
            'van-button--block': this.block,
            'van-button--bottom-action': this.bottomAction
          }
        ]}
        onClick={this.onClick}
      >
        {loading
          ? <van-loading
              class="van-button__icon-loading"
              type="circle"
              color={type === 'default' ? 'black' : 'white'}
            />
          : null}
        <span class="van-button__text">
          {this.$slots.default}
        </span>
      </Tag>
    );
  }
};

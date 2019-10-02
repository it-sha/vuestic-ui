const sizes = {
  small: 32,
  medium: 48,
  large: 64,
}

export const sizeMixin = {
  props: {
    size: {
      type: [String, Number],
      default: 'medium',
      validator: size => {
        return typeof size === 'string' || typeof size === 'number'
      },
    },
  },

  methods: {
    getPropSize (property) {
      if (typeof this.size === 'string') {
        return { [property]: this.size in sizes ? `${sizes[this.size]}px` : this.size }
      }
      return { [property]: `${this.size}px` }
    },
  },
}

/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile'

export default defineComponent({
  name: $prefix + 'Badge',
  props: {
    ...$props,
    isDot: {
      type: Boolean,
      default: false
    },
    isFixed: {
      type: Boolean,
      default: true
    },
    isMini: {
      type: Boolean,
      default: false
    },
    max: Number,
    value: [String, Number],
    modelValue: [String, Number],
    href: String,
    target: String,
    hidden: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator: (value) => ~['primary', 'success', 'warning', 'info', 'danger'].indexOf(value)
    },
    badgeClass: String,
    offset: {
      type: Array,
      default: [0, 0]
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
)

import Vue from "vue";
import veeValidate from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(veeValidate);

//自定义检验配置
veeValidate.Validator.extend('phone', {
    validate: value => {   //校验规则
        return /^1\d{10}$/.test(value)
    },
    getMessage: field => field + '必须是11位手机号码'   //错误提示信息
})


//转换提示信息文本语言
veeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
        phone: '手机号',
        code:"验证码",
    }
})

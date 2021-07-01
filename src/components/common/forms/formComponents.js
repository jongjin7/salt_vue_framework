import Vue from "vue";
import formGroup from "@/components/common/forms/form-group.vue";
import formInputField from "@/components/common/forms/form-control-input.vue";
import SelectBox from "@/components/common/forms/select/SelectBox";
Vue.component("s-form-group", formGroup);
Vue.component("s-input-field", formInputField);
Vue.component("s-custom-select", SelectBox);

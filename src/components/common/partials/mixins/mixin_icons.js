export default {
  props: {
    icon: {
      type: [String, Object],
    },
  },
  computed: {
    useIcon: function() {
      if (this.icon) {
        let temp;
        // 기본값은 left속성 사용
        if (typeof this.icon === "string") {
          console.log("iconType:: string");
          // 여러개 값이 넘어올때
          if (/,/g.test(this.icon)) {
            temp = this.createIconNameArray(this.icon);
          } else {
            temp = [this.icon];
          }
          temp = { left: temp, };
        } else if (typeof this.icon === "object") {
          console.log("iconType:: object", this.icon, Object.keys(this.icon), Object.values(this.icon));
          temp = {};
          if (Object.keys(this.icon).length > 1) {
            console.log("키가 여러개일 경우");
            for (const key in this.icon) {
              console.log("순회하는 오브젝트", key, this.icon[key]);
              temp[key] = /,/g.test(this.icon[key]) ? this.createIconNameArray(this.icon[key]) : this.icon[key];
            }
          } else {
            console.log("키가 한개일 경우");
            temp[Object.keys(this.icon)] = Object.values(this.icon).join().replace(/\s/g, "").split(",");
          }
        }

        console.log("최종 계산된 아이콘 리스트:", temp);
        return temp;
      } else {
        return false;
      }
    },
  },
  methods: {
    createIconNameArray(iconItem) {
      let iconArr = [];
      iconItem.split(",").forEach((item) => iconArr.push(item.trim()));
      return iconArr;
    },
  },
};

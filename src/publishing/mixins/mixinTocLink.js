export default {
  mounted() {
    let wrap = this.$refs.comlist;
    let h2Item = wrap.querySelectorAll("h2");

    h2Item.forEach((item) => {
      let temp = { main: {}, sub: [], };
      let mainText = item.innerText;
      item.id = mainText;
      temp.main.text = mainText;
      temp.main.link = `#${mainText}`;
      item.nextSibling.querySelectorAll("h3").forEach((subItem) => {
        let subText = subItem.innerText;
        subItem.id = subText;
        temp.sub.push({
          text: subText,
          link: `#${subText}`,
        });
      });

      this.frameData.tocData.push(temp);
    });

    // console.log("roof end::", this.frameData.tocData);
  },
};

const blocks = document.querySelectorAll(".block");
const blockparent = document.querySelector(".blocks");
class Blockies {
  constructor(attr) {
    this.attr = attr;
    this.pos = 0;
    this.id;
    this.attr.addEventListener("click", this.click.bind(this));
    this.attr.addEventListener("mousedown", this.bringTheHammerDown.bind(this));
    document.addEventListener("mouseup", this.takeItBackNowYall.bind(this));
  }
  click() {
    blockparent.removeChild(this.attr);
    blockparent.prepend(this.attr);
  }
  bringTheHammerDown() {
    clearInterval(this.id);
    this.id = setInterval(() => {
      if (this.pos == 700) {
        clearInterval(this.id);
      } else {
        this.pos++;
        this.attr.style.marginLeft = this.pos + "px";
      }
    }, 5);
  }
  takeItBackNowYall() {
    clearInterval(this.id);
    this.id = setInterval(() => {
      if (this.pos <= 15) {
        clearInterval(this.id);
        this.attr.style.marginLeft = "10px";
      } else {
        this.pos--;
        this.attr.style.marginLeft = this.pos + "px";
      }
    }, 5);
  }
}
blocks.forEach(cv => {
  return new Blockies(cv);
});
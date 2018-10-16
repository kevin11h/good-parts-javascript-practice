getElement('yBoxDiv')
  .move(350, 150)
  .width(100)
  .height(100)
  .color('red')
  .border('10px outset')
  .padding('4px')
  .apendText("please standby")
  .on('mousedown', function (m) {
    this.startDrag(m, this.getNinth(m));
  })
  tip('This box is resizeable');





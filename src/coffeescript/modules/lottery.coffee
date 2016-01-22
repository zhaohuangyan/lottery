$ = jQuery = require "jQuery"

class Lottery
  constructor: ->
    @el =
      startBtn: $("#start-lottery")
      endBtn: $("#btn-end")
      firstNumber: $("#first-number")
    @addListeners()

  addListeners: ->
    btn = @el.startBtn
    ff = $(btn[0]).data("fo")
    console.log(ff)
 
    console.log("ffff")
    @start()
    @end()

  start: ->
    @el.startBtn.on "click", (e) ->
      console.log("ffffffffff1111")
      @id = window.setInterval(@tip,10)
  
  end: ->
    @el.endBtn.on "click", (e) =>
      console.log("ffffffffff1111")
      window.clearInterval(@id)
    
  tip: ->
    number = Math.random()
    console.log(number)
    @el.firstNumber.val(number)

module.exports = new Lottery




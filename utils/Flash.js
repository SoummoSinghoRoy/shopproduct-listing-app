class Flash {
  constructor(req) {
    this.req = req,
    this.success = this.extractMessage('successs'),
    this.fail = this.extractMessage('fail')
  }

  extractMessage(name) {
    let message = this.req.flash(name)
    return message.length > 0 ? message[0] : false
  }

  static getMessage (req) {
    let flash = new Flash(req)
    return {
      success: flash.success,
      fail: flash.fail
    }
  }
}

module.exports = Flash

// 1. constructor function er paramter hisebe req neoya hoeche karon request er opor base kore sob alert dibe.
// 2. jani je flash request processing moment e kaj kore abr eki sathe response hisebe user ja pabe sekhane ta ke msg dekhano lage tai flash msg ke extract korte hoi ar sadharon obstai flash sob somoy array akare message provide kore. tai array theke iterate kore msg extract korte hobe. ar jani je extract korar somoy flash er je key/name seti use korte hoy.
// 3. flash msg ke extract korar por seti ke to operation er opor base kore appear korte hobe. jmn user er operation successfull hole success, fail hole fail emn. tai constructor function er vitor ekta property akare extract kora msg gulo rakhbo operation ke base kore. ar extract korar somoy flash er je key/name use korte hoy ta function call korar somoy provide korechi r bolechi kon operation er jonyo ki hobe ebong se onujayi msg dite.
// 4. er por msg ke niye appear korte hobe ja ekta function property hisebe deal korbo. 
// 5. chaile msg ache ki na ache ta bollean value akare dekhate pari ekta function theke ber kore ene.
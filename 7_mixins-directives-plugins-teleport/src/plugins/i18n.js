const ru = {
    app: {
      header: "Привет, Мир",
      btn: "Изменить язык",
      modal: "Открыть окно"
    }
  
}

const en = {
    app: {
      header: "Hello, World",
      btn: "Change language",
      modal: "Open Window"
    }
    
}

let currentLang = ru

function changeLang()  {
  if (currentLang === ru) {
    currentLang = en
  } else if (currentLang === en) {
    currentLang = ru
  }
}
export default {
    install: (app) => {
      app.config.globalProperties.$translate = key => {
        console.log(key)
        return key.split('.').reduce((sum, current) => sum[current] || "undefined key", currentLang)
      }
      app.provide("changeLang", changeLang)
    }
  }
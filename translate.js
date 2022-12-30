fs = require('fs');
'use strict';

const args = require('minimist')(process.argv.slice(2));

console.log(args._[0]);

let fetchExample = fetch("https://translate.google.com/_/TranslateWebserverUi/data/batchexecute?rpcids=MkEWBc&source-path=%2F&f.sid=-7564632113103245251&bl=boq_translate-webserver_20221220.08_p0&hl=en-US&soc-app=1&soc-platform=1&soc-device=1&_reqid=81044&rt=c", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,fa;q=0.8",
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108.0.5359.125\"",
      "sec-ch-ua-arch": "\"x86\"",
      "sec-ch-ua-bitness": "\"64\"",
      "sec-ch-ua-full-version": "\"108.0.1462.54\"",
      "sec-ch-ua-full-version-list": "\"Not?A_Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"108.0.5359.125\", \"Microsoft Edge\";v=\"108.0.1462.54\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-model": "",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-ch-ua-platform-version": "\"15.0.0\"",
      "sec-ch-ua-wow64": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-goog-batchexecute-bgr": "[\";9eu466bQAAYnbWexB21fFWGsARnNYs0mACkAIwj8RtrZ6UFta7tec1a0PcYnnC562f5CSDC38iuXeZ3OjT59F6bcUx8AAACJTwAAAAd1AQcXAFp_bSraTIARwwOLo2nMC4R-iGQPZ6JuxUm-x2AQi4un-koLJnj2jKjlS9-OjTPEwqP8U3HtfALVehhUBqoZLoCwGkzUGsDrSejljh4G9dc90pZuAA9mMNVbAlqEAtzWPPi2ZwlWT8Tcr-7A1J1TAY-hDtcvErODvS0szwiWH5jiIIVI3QxpzCV6OkWfExQEWQaqLaC46ulIIwhagzYBoWY1ACKG_Kxh7_LQSLfHCWwjsUKNulQ-G4ezKneg8MMWCevHX18EZLN9Qijq8FLP3MJXfsNYibrsSy7IcNOXSMzKMisRA8oxy_dOJFUYX8nE1JFvSK6PWtmcLFwBc_XJHEK3iIakwaTmUvzD1P1tSS9IRPtYmsQDrZGv6PSq2Y_JoHY1nd_TinF4FXkEFEtzoPin35oO6phm8A51J7uat-B3Z6Nr6k_R5Fq7xoWgNQqskJGfDEHR2fVfjJ2VOxBxhk3HQRzQsefcc9Lgbit6hl_CS1nAcAFyjd-s9_NA8iYGUjr33Tq_NzkKQEOOCLB4ZLqFGtuvdLEX0ZfUUrTng1w1EvfqeDxFjWwUhv4q1SLIpUoyZ71mtxMpaJLY4sQiSPp4sSdpsBatLmAwkE2zvtJZzSAL-ze6AJNpMVVxT1u5TwSqeBehqPX283ndiHe4mlMJ0VcX_NrLssUOBdhoBJGAUhan0LD2HmrxWLfakYk0xgcCUxmkAE1e-aofi4kS6XiwvBUC8zRcbPqADiEMer_Fwqg632U5AO86h-r3-_B-8Lk8AXe7QPeo6r6PfLbL2AL2Qp-8oqBadxoAzgzCOOIp5ZEOfqIIj6zhoHq0Tm09OYg4diQxvcUqjh3dbeHL00kiFHtoEXDYfHQY8Gpzdp8Q1NDSw1BLw_uaOMnZQmtvTWwRT1k2Tgd0vSCpu4Uzf7TBUF9qlA5_MAX-6LSeows8pmKG8EQSuIZPiXvE5kOvgAJvcSHkf5eld-9zqkrnSN_OY0pPZp3-Gk66wUUMsdfKGBTL7T-7v4yTZmxOCfy0hVq2FUWZqGyiKZxo6lpKX5LjHbnNDVzAKcRfS36H03mxxKLXZVqKEwprmzRqWBa5gVKIrUwMOQPtmXc\",null,null,775,64,null,null,0,\"2\"]",
      "x-same-domain": "1",
      "cookie": "1P_JAR=2022-12-18-14; SEARCH_SAMESITE=CgQIkJcB; AEC=AakniGMKNzwW9KM5D0TucHFoACCr_qusQbQl5oU4iEQdCkcsL-9mxY30Ag; SID=SAjy5h503vAicFzvP7icmKsPu_PBNufi5xByvKHgvKkzDimuLdPdl9mhkZgbXUIARyNRbw.; __Secure-1PSID=SAjy5h503vAicFzvP7icmKsPu_PBNufi5xByvKHgvKkzDimutSMtTuS--LYF4XdhP2pIZA.; __Secure-3PSID=SAjy5h503vAicFzvP7icmKsPu_PBNufi5xByvKHgvKkzDimuO2ABrKZTHZXIlHD9MqrAyw.; HSID=AygDGOEJPxODu0jbN; SSID=AltiKQuB72S9KOlRE; APISID=EnjVKaeDjpSvL91F/AKsOnh090HQ_kpkg0; SAPISID=xg3uBRh6lssOYuns/Aqj2l5296pKN9qD1t; __Secure-1PAPISID=xg3uBRh6lssOYuns/Aqj2l5296pKN9qD1t; __Secure-3PAPISID=xg3uBRh6lssOYuns/Aqj2l5296pKN9qD1t; NID=511=UOvV41IU3jHPXudARZTgqO3AJpDOYS5IfFM5ZDgc_dYFaMkh271X3xwXIjRSku4XHNXlAKWL7Fj53kM26XgfweLlZ70j1HDJwn0jKJOYekLQNfrmsIApNZOwFf2si9stl8PvuAM1_cKL2YlvYOESJUfdcwLI4iENkcsK-3-39WTj4Z-DT8j7MUT7tnsMoqqNq5QRVxS1dfSCZ8M9_sGz51SpdOp4CajWQoFfvJybPwUqoKjMRoUHRqvuwfNMYnQs-w; __Secure-ENID=9.SE=Kcw4uL6zTcSUSoFGSJM6zf1CEcHZQwZ9tGBNlqGsJ9XjSa62FRwOfcG-1BPsDeXp9hxXYY3lr1vmSMI1WnrPfDhsEJnqdFawWf2oDFNA_NkI2PUGOYCZrUuTOQ5-axngNSxJGmnG4updK9LmxICkQHOVYN4DFaMyH5LwNjY1Kxaq4jTEgB9F6by5P0fdpl0PuuzeRAskpLcPmFTlm6dysuV98vJx; _ga=GA1.3.520719016.1672167473; _gid=GA1.3.320006928.1672167473; OTZ=6831058_42_42_114990_38_379890; SIDCC=AIKkIs13lYV9CKjdzEy_iK1plovnYGeLlDKgtnphTVNd4gZjqruWea2o3ncXQDWdNk1SfJvAiMw; __Secure-1PSIDCC=AIKkIs3xVTAd2lw2uDHlqiMY799XIQrCAy19Ms25yHrQQdGun_TEtPMf5qfaBuU1VFCfLNGxUA; __Secure-3PSIDCC=AIKkIs3-hyEindWcRpixea93FZ4Hve2BkCAQp6Ul6JGS1R5HICafIsI9wOJz9bqwYCvC6xTZL5U",
      "Referer": "https://translate.google.com/",
      "Referrer-Policy": "origin"
    },
    "body": `f.req=%5B%5B%5B%22MkEWBc%22%2C%22%5B%5B%5C%22${args._[0]}%5C%5Cn%5D%5C%22%2C%5C%22en%5C%22%2C%5C%22fa%5C%22%2Ctrue%5D%2C%5Bnull%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&at=AMvO73XnVoCYPhrR2E5ZP2dGzRAJ%3A1672167645121&`,
    "method": "POST"
  }).then(res => res.text()).then((data) => {
    // console.log(data);
    const regex = data.match(/,\[\]\],\[\\"(.*?).\\",/);
    const persianWord = regex[0].replace(/\[/g,"").replace(/\]/g,"").replace(/\,/g,"").replace(/\\/g,"") 
    

    fs.writeFile('response.txt', `${persianWord}`, function (err) {
    if (err) return console.log(err);
    console.log(`${persianWord} > response.txt`);
    });
    return data;
}); 


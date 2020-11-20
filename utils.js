(function (){
  window.app = window.app || {};
  window.app.Utils = {
    toPersianNum: toPersianNum
  };

  function toPersianNum (value){
    if (!value || typeof value !== 'number'){
      return value;
    }

    value = value.toString();

    var EnglishNums = ["1","2","3","4","5","6","7","8","9","0"];
    var PersianNum = ["۱","۲","۳","۴","۵","۶","۷","۸","۹","۰"];

    for (var i = 0, numbersLength = EnglishNums.length; i < numbersLength; i++){
      value = value.replace(new RegExp(EnglishNums[i], 'g'), PersianNum[i]);
    }

    return value;
  }

})();
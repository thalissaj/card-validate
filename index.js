exports.cardValidator = function (cardNum){
  try {
    return isCardNumbers(cardNum);
  } catch (e){
    return e.message;
  }
};

const isCardNumbers = function(cardNum){
  if(isNaN(cardNum) || typeof cardNum === "string"){
    throw new Error("O numero digitado não é valido!");
  } else if (String(cardNum).length < 12){
    throw new Error("O numero digitado não condiz a um numero de cartão.");
  } else{
    return isValidCard(cardNum);
  }
}

const isValidCard = function (cardNum){
  var reverseNum = [];
  var cardCode = String(cardNum);
  var counter = String(cardNum).length;
  for (var i = counter - 1; i >= 0; i--){
    reverseNum.push(cardCode[i]);
  }
  for(i = 1; i < counter - 1; i+=2){
    reverseNum[i] = reverseNum[i] * 2;
    if(reverseNum[i] > 9){
      reverseNum[i] = reverseNum[i]- 9;
    }
  }
  var result = 0;
  for(i = 0; i < counter - 1; i++){
    result += reverseNum[i];
  }
  var resultInt = parseInt(result);
  if(resultInt % 10 === 0){
    return true;
  }else{
    return false;
  }
}

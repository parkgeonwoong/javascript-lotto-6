import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';
import { isValidBuyAmount } from '../utils/Validation.js';

export async function inputBuyAmount() {
  try {
    const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.buyAmount);
    if (isValidBuyAmount(inputValue)) {
      return inputValue;
    }
  } catch (err) {
    Console.print(err);
    return inputBuyAmount();
  }
}

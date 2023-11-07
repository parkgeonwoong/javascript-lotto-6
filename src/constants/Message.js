import { LOTTO_NUMBER_RANGE, LOTTO_NUMBER_SIZE, LOTTO_PRICE, LOTTO_RANK } from './GameSetting.js';

export const MESSAGE_NOTIFICATION = Object.freeze({
  buyAmount: '구입금액을 입력해 주세요.\n',
  winningLotto: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  result: '\n당첨 통계\n---',
  profitRate: `총 수익률은`,
});

export const MESSAGE_LOTTO_COUNT = Object.freeze({
  buyLotto(value) {
    return `\n${value}개를 구매했습니다.`;
  },
});

const ERROR_PREFIX = '[ERROR]';

export const MESSAGE_ERROR = Object.freeze({
  isNotNumber: `${ERROR_PREFIX} 숫자를 입력해 주세요.`,
  isNotDividedByThousand: `${ERROR_PREFIX} ${LOTTO_PRICE}원 단위로 입력해 주세요.`,
  lottoNumberSize: `${ERROR_PREFIX} 로또 번호는 ${LOTTO_NUMBER_SIZE}개여야 합니다.`,
  lottoDuplicateNumber: `${ERROR_PREFIX} 로또 번호는 중복될 수 없습니다.`,
  lottoNotInput: `${ERROR_PREFIX} 번호와 쉼표(,)를 이어서 입력해주세요.`,
  lottoNumberRange: `${ERROR_PREFIX} 로또 번호는 ${LOTTO_NUMBER_RANGE.start}~${LOTTO_NUMBER_RANGE.end} 사이여야 합니다.`,
  bounsNumber: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
  bounsOnlyNumber: `${ERROR_PREFIX} 보너스 번호는 ${LOTTO_NUMBER_RANGE.start}~${LOTTO_NUMBER_RANGE.end} 중 숫자 하나만 입력해 주세요.`,
});

export const MESSAGE_RANK_RESULT = Object.freeze({
  FIFTH(value) {
    return `3개 일치 (${LOTTO_RANK.FIFTH.winningMoney.toLocaleString()}원) - ${value}개`;
  },
  FOURTH(value) {
    return `4개 일치 (${LOTTO_RANK.FOURTH.winningMoney.toLocaleString()}원) - ${value}개`;
  },
  THIRD(value) {
    return `5개 일치 (${LOTTO_RANK.THIRD.winningMoney.toLocaleString()}원) - ${value}개`;
  },
  SECOND(value) {
    return `5개 일치, 보너스 볼 일치 (${LOTTO_RANK.SECOND.winningMoney.toLocaleString()}원) - ${value}개`;
  },
  FIRST(value) {
    return `6개 일치 (${LOTTO_RANK.FIRST.winningMoney.toLocaleString()}원) - ${value}개`;
  },
});

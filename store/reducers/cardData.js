const cardData = {
    cardName: "joe biden",
    expiringYear: "00",
    expiringMonth: "00",
    cardNumber: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    cardCode: ""
}

export const cardDataReducer = (state = cardData, action) => {
    const { type } = action;

    switch (type) {
        case "@cardData/changeName": {
            return {
                ...state,
                cardName: action.payload,
            }
        }
        case "@cardData/changeExpiringYear": {
            return {
                ...state,
                expiringYear: action.payload,
            }
        }
        case "@cardData/changeExpiringMonth": {
            return {
                ...state,
                expiringMonth: action.payload,
            }
        }
        case "@cardData/changeCardNumber": {
            return {
                ...state,
                cardNumber: action.payload,
            }
        }
        case "@cardData/changeCardCode": {
            return {
                ...state,
                cardCode: action.payload,
            }
        }
        default:
            return state
    }
}

export const changeMonth = (expiringMonth) => {
    return {
        type: '@cardData/changeExpiringMonth',
        payload: expiringMonth
    }
}

export const changeExpiringYear = (expiringYear) => {
    return {
        type: '@cardData/changeExpiringYear',
        payload: expiringYear
    }
}

export const changeName = (cardName) => {
    return {
        type: '@cardData/changeName',
        payload: cardName
    }
}

export const changeCardCode = (cardData) => {
    return {
        type: '@cardData/changeCardCode',
        payload: cardData
    }
}


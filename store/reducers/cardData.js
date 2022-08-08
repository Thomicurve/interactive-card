const cardData = {
    cardName: "joe biden"
}

export const cardDataReducer = (state = cardData, action) => {
    const { type } = action;
    if (type === "@cardData/changeName") {
        return {
            cardName: action.payload,
            ...state
        }
    }
}

export const changeName = (cardName) => {
    return {
        type: '@cardData/changeName',
        payload: cardName
    }
}
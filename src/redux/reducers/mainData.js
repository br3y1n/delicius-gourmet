import { getGoogleSheetData } from '../../assets/helpers/googleSheets'
import { config } from '../../infrastructure/constants/config'

const initialState = getGoogleSheetData(config.SHEET_ID)

function reducer(state = initialState, { type }) {
    switch (type) {
        default:
            return state
    }
}

export default reducer
import {eventsList} from './mock_items'


export const eventsReducer = (state = eventsList, action) => {
    //action - объект, который хранить тип экшна в зависимости от кторого выбирается как рэдьюсер будет изменять стор
    switch (action.type){
        default:
            return state
    }
}
// Schema for a Todo object:
// {
//     id: number;
//     text: string;
//     completed: boolean;
// }

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
}

export default todosReducer;
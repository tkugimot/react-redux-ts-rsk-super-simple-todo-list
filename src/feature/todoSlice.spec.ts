import todoList, { addTodo } from './todoSlice'

describe('todo reducer', () => {
    it('should handle initial state', () => {
        expect(todoList).toEqual([])
    })
});


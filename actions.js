import uuid from uuid;

const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const ADD_COMMENT= 'ADD_COMMENT';
const COMMENT_PLUS = 'COMMENT_PLUS';
const COMMENT_MINUS = 'COMMENT_MINUS';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

function removeCommment(id) {
    return {
    type: REMOVE_COMMENT,
    id
    };
} 

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    };
}

function commentPlus(id, number) {
    return {
        type: COMMENT_PLUS,
        number: number++,
        id
    };
} 

function commentMinus(id, number) {
    return {
        type: COMMENT_MINUS,
        number: number--,
        id
    };
}
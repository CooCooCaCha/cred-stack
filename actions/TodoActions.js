import {TODO_LOAD, TODO_ADD, TODO_DELETE} from '../constants/ActionTypes';
import request from 'superagent';

function load() {
    return new Promise((resolve, reject) => {
        request
            .get('/api/todos')
            .end((err, res) => {
                if(err)
                    reject(res.body || err);
                else
                    resolve({type: TODO_LOAD, todos: res.body});
            });
    });
}

function add( body ) {
    return new Promise((resolve, reject) => {
        request
            .post('/api/todos')
            .send( {body: body} )
            .end((err, res) => {
                if(err)
                    reject(res.body || err);
                else
                    resolve({type: TODO_ADD, todo: res.body});
            });
    });
}

function del( id ) {
    return new Promise((resolve, reject) => {
        request
            .del('/api/todos/' + id)
            .end((err, res) => {
                if(err)
                    reject(res.body || err);
                else
                    resolve({type: TODO_DELETE, id: id });
            });
    });
}

export default {
    load: load,
    add: add,
    del: del
};

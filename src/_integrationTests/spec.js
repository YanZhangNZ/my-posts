import moxios from 'moxios'
import { testStore } from '../../Utils/index'
import { fetchPosts } from '../../src/actions/index'

describe('fetchPosts action',()=>{

    beforeEach(()=>{
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = [{
            title:'Test Title 1',
            body:'Some text'
        },{
            title:'Test Title 2',
            body:'Some text'
        },{
            title:'Test Title 3',
            body:'Some text'
        }];
        const store = testStore();

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedState
            })
        });

        return store.dispatch(fetchPosts())
        .then(()=>{
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    });    
})